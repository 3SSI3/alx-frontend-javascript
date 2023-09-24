import {RowID, RowElement} from "./interface.ts";

export function insterRow(row: RowElement): RowID;
export function updateRow(rowID: RowID, row: RowElement): RowID;
export function deleteRow(rowID: RowID): void;
