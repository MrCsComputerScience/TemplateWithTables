
// EXAMPLE: TABLE VIEW
//
// let tableView = new TableView();
// let data = ["x", "b"];
//
// export function startApp() {
//
//     tableView.displayData(document.body, data);
// }

export class TableView {

    displayData(targetView: HTMLElement, arrayOfDisplayText: Array<string>, onRowSelected: (rowNumber: number)=>void) {

        let rowNumber = 0;

        for (const text of arrayOfDisplayText) {
            
            const textElement = document.createElement("p");
            textElement.textContent = text;
            textElement.style.whiteSpace = "pre-wrap"; 
            textElement.onclick = () => { 

                if (onRowSelected !== undefined) {
                    onRowSelected(rowNumber);
                }
            }
  
            targetView.append(textElement);
            rowNumber = rowNumber + 1;
        }
    }
}


// EXAMPLE: TABLE VIEW WITH CUSTOM UI
//
// let tableView2 = new TableViewVersionTwo(); 
// let data = ["a", "c"];

// export function startApp() {

//     tableView2.setupTable(getNumberOfRows, document.body, buildRow);
//     tableView2.displayData();
// }

// function getNumberOfRows() {
//     return data.length;  
// }

// function buildRow(rowNumber: number, parentCell: HTMLElement) {
    
//     const row = document.createElement("p");
//     row.textContent = data[rowNumber] ?? "Error";
//     parentCell.append(row);
// }
//

export class TableViewVersionTwo {

    parentView: HTMLElement | undefined;
    getNumberOfRows: () => number;
    updateCell: ((rowNumber: number, cellView: HTMLParagraphElement) => void) | undefined;

    constructor() {
        this.parentView = undefined;
        this.getNumberOfRows = () => { return 0; };
        this.updateCell = undefined;
    }

    setupTable(getNumberOfRows: () => number, parentView: HTMLElement, updateCell: (rowNumber: number, cellView: HTMLParagraphElement) => void) {
        this.getNumberOfRows = getNumberOfRows;
        this.parentView = parentView;
        this.updateCell = updateCell;
    }

    displayData() {

        const numberOfRows = this.getNumberOfRows()

        for (let i = 0; i < numberOfRows; i++) {
            const paragraph = document.createElement("p");

            if (this.updateCell !== undefined) {
                this.updateCell(i, paragraph);
                this.parentView?.append(paragraph)
            }
        }
    }
}


