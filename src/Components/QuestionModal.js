import React from "react";
import { Avatar, Dialog } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";
import { X } from "react-feather";
const useStyles = makeStyles((theme) => ({
  closeIcon: {
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 10,
    cursor: "pointer",
  },
  divContainer: {
    width: 400,
    backgroundColor: "white",
    borderRadius: 15,
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  text: {
    color: "#181818",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20,

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: { color: "#3498db", fontWeight: "bold", textDecoration: "none" },
}));

const QuestionModal = ({ open, setOpen, data }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <X className={classes.closeIcon} onClick={handleClose} />
      <div className={classes.divContainer}>
        <p className={classes.text}>{data.title}</p>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.profileContainer}>
          <Avatar src={data.owner.profile_image} style={{ marginRight: 10 }} />
          <p style={{ color: "#3498db", textTransform: "capitalize" }}>
            {data.owner.display_name}
          </p>
        </div>
        <div className={classes.profileContainer}>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Read More
          </a>
        </div>
      </div>
    </Dialog>
  );
};

export default QuestionModal;
