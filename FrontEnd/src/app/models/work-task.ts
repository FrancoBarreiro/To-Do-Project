import { Task } from "../models/task";

export class WorkTask extends Task {

    project: String;

    /*constructor(id: Number, title: String, description: String, status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED', taskType: 'PERSONAL' | 'WORK', project: String) {
        super(id, title, description, status, taskType);
        this.project = project;
    }*/
    constructor(){
        super();
    };

}
