import { observable, configure, runInAction, action, computed } from "mobx";
import axios from "axios";
// import axios, { AxiosResponse } from "axios";
import { createContext } from "react";
import IBug from "../models/bug";

// to simulate loading time
// const sleep = (ms: number) => (response: AxiosResponse) =>
//   new Promise<AxiosResponse>((resolve) =>
//     setTimeout(() => resolve(response), ms)
//   );

// default url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// allow mobx actions
configure({ enforceActions: "always" });

// class starts here
class BugStore {
  // ======================================== //
  // observables
  // ======================================== //

  @observable bugRegistry = new Map();
  @observable bug: IBug | null = null;
  @observable loading: boolean = false;
  @observable target: string = "";

  // ======================================== //
  // computed values
  // ======================================== //

  @computed get bugsByDate() {
    const bugs = Array.from(this.bugRegistry.values());
    return bugs.sort((a,b) => Date.parse(a.createdOn) - Date.parse(b.createdOn));
  }

  @computed get openBugs() {
    const bugs = Array.from(this.bugRegistry.values());
    const openBugs = bugs.filter(bug => bug.status === "Open")
    return openBugs.sort((a,b) => Date.parse(a.createdOn) - Date.parse(b.createdOn))
  }

  @computed get closedBugs() {
    const bugs = Array.from(this.bugRegistry.values());
    const closedbugs = bugs.filter(bug => bug.status === "Closed");
    return closedbugs.sort((a,b) => Date.parse(a.creatdOn) - Date.parse(b.createdOn))
  }

  // ======================================== //
  // actions
  // ======================================== //

  // get all activities
  @action loadBugs = async () => {
    this.loading = true;
    try {
      const bugs = await axios.get<IBug[]>("/bugs");
      runInAction("loading bugs", () => {
        bugs.data.forEach((bug: IBug) => {
          this.bugRegistry.set(bug.id, bug);
        });
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  // get specific bug
  @action loadBug = async (id: string) => {
    this.loading = true;
    try {
      const bug = await axios.get<IBug>(`/bugs/${id}`);
      runInAction("get specific bug", () => {
        this.bug = bug.data;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction("loading specific bug error", () => {
        this.loading = false;
      });
    }
  };

  // select a specific bug
  @action selectBug = (id: string) => {
    this.bug = this.bugRegistry.get(id);
  };

  // clear store bug
  @action clearBug = () => {
    this.bug = null;
  };

  // create new bug
  @action createBug = async (bug: IBug) => {
    this.loading = true;
    try {
      await axios.post<IBug>("/bugs/", bug);
      runInAction("creating new bug", () => {
        this.bugRegistry.set(bug.id, bug);
        this.loading = false;
      });
    } catch (error) {
      runInAction("create new bug failed", () => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  // edit existing bug
  @action editBug = async (bug: IBug) => {
    this.loading = true;
    try {
      await axios.put<IBug>(`/bugs/${bug.id}`, bug);
      runInAction("edit bug", () => {
        this.bugRegistry.set(bug.id, bug);
        this.bug = bug;
        this.loading = false;
      });
    } catch (error) {
      runInAction("edit bug error", () => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  // delete bug
  @action deleteBug = async (id: string) => {
    this.loading = true;
    try {
      await axios.delete(`/bugs/${id}`);
      runInAction("delete bug", () => {
        this.bugRegistry.delete(id);
        this.bug = null;
        this.loading = false;
        this.target = "";
      })
    } catch (error) {
      runInAction("delete failed", () => {
        this.loading = false;
        this.target = "";
      });
      console.log(error);
    }
  }
  // end of class BugStore
}

// special export for store
export default createContext(new BugStore());
