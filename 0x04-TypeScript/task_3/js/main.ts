import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

const newRowID: RowID = CRUD.insterRow(row);
const updateRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);