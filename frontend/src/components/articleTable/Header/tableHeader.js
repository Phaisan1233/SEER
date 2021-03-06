import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TableCell, TableHead, TableRow, TableSortLabel, Checkbox } from "@material-ui/core/";

let headCells = [];
export default function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, role } = props;

  useEffect(() => {
    if (role === "moderator" || role === "analyst") {
      headCells = [
        { id: "createdAt", numeric: false, disablePadding: false, label: "Date" },
        { id: "title", numeric: false, disablePadding: false, label: "Title" },
        { id: "author", numeric: false, disablePadding: false, label: "Author" },
        { id: "year", numeric: false, disablePadding: false, label: "Year" },
        { id: "rating", numeric: false, disablePadding: false, label: "Rating" },
      ];
    } else {
      headCells = [
        { id: "title", numeric: false, disablePadding: false, label: "Title" },
        { id: "author", numeric: false, disablePadding: false, label: "Author" },
        { id: "year", numeric: false, disablePadding: false, label: "Year" },
        { id: "rating", numeric: false, disablePadding: false, label: "Rating" },
      ];
    }
  }, [role]);

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {role === "admin" && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
