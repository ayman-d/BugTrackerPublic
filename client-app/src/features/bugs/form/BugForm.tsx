import React, {
  useContext,
  useState,
  FormEvent,
  useEffect,
  CSSProperties,
} from "react";
import BugStore from "../../../app/stores/bugStore";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {
  Form,
  Button,
  Segment,
  TextArea,
  Modal,
  Header,
  Icon,
  Grid,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import IBug from "../../../app/models/bug";
import { v4 as uuid } from "uuid";
import { RouteComponentProps, Link } from "react-router-dom";

interface DetailParams {
  id: string;
}

const BugForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  // import store
  const bugStore = useContext(BugStore);
  const {
    bug: existingBug,
    loading,
    createBug,
    loadBug,
    clearBug,
    editBug,
  } = bugStore;

  // local state
  const [bug, setBug] = useState<IBug>({
    id: "",
    title: "",
    description: "",
    createdOn: "",
    admin: "",
    developer: "",
    category: "",
    priority: "",
    status: "",
    resolvedOn: "",
  });

  // local state for modal
  const [open, setOpen] = useState(false);

  // handle form input changes
  const handleInputChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setBug({ ...bug, [name]: value });
  };

  // life cycle
  useEffect(() => {
    if (match.params.id && bug.id.length === 0) {
      loadBug(match.params.id).then(
        // the && below means execute the setBug part only if existingBug is available and not null
        () => existingBug && setBug(existingBug)
      );
    }
    // clean up
    return clearBug();
    // add dependancies so this life cycle doesn't run everytime the component loads
  }, [loadBug, clearBug, existingBug, match.params.id, bug.id.length, bug]);

  // handle form submit
  const handleFormSubmit = () => {
    if (
      bug.admin === "" ||
      bug.developer === "" ||
      bug.category === "" ||
      bug.priority === "" ||
      bug.status === "" ||
      bug.title === "" ||
      bug.description === ""
    ) {
      setOpen(true);
    } else {
      if (bug.id.length === 0) {
        let newDate: Date = new Date();
        let newBug = {
          ...bug,
          id: uuid(),
          createdOn: newDate.toJSON(),
          // status: "Open",
          resolvedOn: newDate.toJSON(),
        };
        createBug(newBug).then(() => history.push(`/bugs/${newBug.id}`));
      } else {
        // edit functionality goes here
        editBug(bug).then(() => history.push(`/bugs/${bug.id}`));
      }
    }
  };

  // render
  if (loading) {
    return <LoadingComponent content="loading content..." />;
  }

  return (
    <Segment style={{ padding: "4rem" }}>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            autoFocus
            onChange={handleInputChange}
            name="title"
            placeholder="Ticket Title"
            value={bug.title}
          />
        </Form.Field>
        <Form.Field style={{ marginTop: "2rem" }}>
          <label>Description</label>
          <TextArea
            name="description"
            onChange={handleInputChange}
            placeholder="Ticket Description"
            rows={10}
            value={bug.description}
          />
        </Form.Field>
        <Form.Group style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Form.Field>
            <label>Assign Admin</label>
            <select
              name="admin"
              id="adminSelect"
              value={bug.admin}
              onChange={handleInputChange}
            >
              <option key="0" value="">
                Select...
              </option>
              <option key="1" value="Manar">
                Manar
              </option>
              <option key="2" value="David">
                David
              </option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Assign Developer</label>
            <select
              name="developer"
              id="developerSelect"
              value={bug.developer}
              onChange={handleInputChange}
            >
              <option key="0" value="">
                Select...
              </option>
              <option key="1" value="Ayman">
                Ayman
              </option>
              <option key="2" value="Joan">
                Joan
              </option>
              <option key="3" value="Adam">
                Adam
              </option>
              <option key="4" value="Ali">
                Ali
              </option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <select
              name="category"
              id="categorySelect"
              value={bug.category}
              onChange={handleInputChange}
            >
              <option key="0" value="">
                Select...
              </option>
              <option key="1" value="Hardware">
                Hardware
              </option>
              <option key="2" value="Software">
                Software
              </option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Priority</label>
            <select
              name="priority"
              id="prioritySelect"
              value={bug.priority}
              onChange={handleInputChange}
            >
              <option key="0" value="">
                Select...
              </option>
              <option key="1" value="High">
                High
              </option>
              <option key="2" value="Medium">
                Medium
              </option>
              <option key="3" value="Low">
                Low
              </option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Status</label>
            <select
              name="status"
              id="statusSelect"
              value={bug.status}
              onChange={handleInputChange}
            >
              <option key="0" value="">
                Select...
              </option>
              <option key="1" value="Open">
                Open
              </option>
              <option key="2" value="Closed">
                Closed
              </option>
            </select>
          </Form.Field>
        </Form.Group>
        <Grid centered stackable padded>
          <Button
            floated="right"
            color="green"
            type="submit"
            style={{ width: "8rem" }}
          >
            Submit
          </Button>
          <Button
            as={Link}
            to={`/bugs/${bug.id}`}
            floated="right"
            color="red"
            type="button"
            style={{ width: "8rem" }}
          >
            Cancel
          </Button>
        </Grid>
      </Form>

      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="warning" content="Warning: missing data" />
        <Modal.Content>
          <p style={warningStyle}>Please select a value for each field</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </Segment>
  );
};

const warningStyle: CSSProperties = {
  color: "red",
  fontWeight: 900,
  fontSize: "1rem",
  textAlign: "center",
};

export default observer(BugForm);
