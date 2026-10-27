import { TableView, TableViewVersionTwo } from "./myUIElements";


const tableView = new TableView();

export function startApp() {

    const sampleData = ["cat", "dog", "monkey"];
    tableView.displayData(document.body, sampleData, ()=> {
        // on row selected
    })

}








