import React, { useState } from "react";
import { Card, Avatar, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuestionModal from "./QuestionModal";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    margin: 20,
    padding: 10,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 300,
    },
  },
  divContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  chipCenter: {
    display: "flex",
    justifyContent: "center",
  },
  chip: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#2ecc7038 !important",
    color: "#27ae60",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  profileDiv: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
const QuestionCard = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  return (
    <>
      <QuestionModal open={openModal} setOpen={setOpenModal} data={data} />
      <Card className={classes.card} onClick={() => setOpenModal(true)}>
        <div className={classes.profileDiv}>
          <Avatar src={data.owner.profile_image} />
          <p style={{ textTransform: "capitalize" }}>
            {data.owner.display_name}
          </p>
        </div>
        <div className={classes.divContainer}>
          <div className={classes.chipCenter}>
            {data.tags.map((tag) => (
              <Chip label={tag} className={classes.chip} />
            ))}
          </div>
          <p className={classes.title}>{data.title}</p>
        </div>
        <div>
          <p> {moment(data.creation_date).format("MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
