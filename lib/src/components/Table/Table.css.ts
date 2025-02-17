import { style, createTheme } from "@vanilla-extract/css";
import { ITableContainerThemeVars, ITableThemeVars } from "./Table.types";

export const [
  tableContainerThemeClass,
  tableContainerThemeVars,
]: ITableContainerThemeVars = createTheme({
  customBorderRadius: "4px",
  customBorderColor: "black",
});

export const [tableThemeClass, tableThemeVars]: ITableThemeVars = createTheme({
  customRowHeight: "1",
  headerAlignment: "left",
  contentAlignment: "left",
  customCellPadding: "10px",
  customStripeColor: "#eee",
  customHorizontalSpacing: "0",
});

export const tableContainerDefaults = style({
  border: `1px solid ${tableContainerThemeVars.customBorderColor}`,
  borderRadius: tableContainerThemeVars.customBorderRadius,
  display: "inline-block",
  overflow: "auto",
  maxWidth: "100%",
  paddingBottom: "10px",
});

export const tableDefaults = style({
  borderCollapse: "collapse",
});
