import React, { useState, useEffect } from "react";
import QuestionCard from "./Components/QuestionCard";
import { getAllQuestions } from "./utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";

function App() {
  const [questions, setQuestions] = useState([]);

  const [page, setPage] = useState(2);

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await getAllQuestions(1);
    setQuestions(data);
  };

  const paginationFetchApi = async () => {
    if (questions && questions.length > 19) {
      setPageLoading(true);
      const data = await getAllQuestions(page);
      console.log(data);
      if (data) {
        setQuestions((prevState) => [...prevState, ...data]);
        setPage((prev) => prev + 1);
      }
    }
  };

  console.log(page);
  return (
    <>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
        Stackoverflow Rail
      </p>
      {questions && (
        <InfiniteScroll
          dataLength={questions.length}
          next={paginationFetchApi}
          hasMore={true}
          scrollableTarget="scrollableDiv"
        >
          <>
            {questions &&
              questions.map((data) => (
                <QuestionCard data={data} key={data.question_id} />
              ))}
          </>
        </InfiniteScroll>
      )}
      {pageLoading && <CircularProgress />}
    </>
  );
}

export default App;
