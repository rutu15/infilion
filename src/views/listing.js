import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchingUser, deletingUser, creatingUser } from "../actions";
import Modal from "./Modal";
/* Styles */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Listing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.fetchUser.data);
  const loading = useSelector((state) => state.fetchUser.loading);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState({
    firtsname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    dispatch(fetchingUser());
  }, []);

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
    setUserData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {`${item.first_name} ${item.last_name}`}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>

                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={function () {
                      //   setEdit(true);
                      //   setUserData({
                      //     firs: item.name,
                      //     email: item.email,
                      //   });
                      // }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => {
                        dispatch(deletingUser(item.id));
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell>
                <Button
                  onClick={() => setOpen(true)}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={edit || open}
        handleClose={() => handleClose()}
        handleInputChange={(e) => handleInputChange(e)}
        handleSubmit={function () {
          dispatch(creatingUser(userData));
          handleClose();
        }}
        isEdit={edit}
        data={userData}
      />
    </div>
  );
}

export default Listing;
