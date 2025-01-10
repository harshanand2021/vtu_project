import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ToWords } from 'to-words';

const TableData = ({ studentID }) => {
  const toWords = new ToWords();
  const [resultDetails, setResultDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/studentDetails")
      .then((response) => {
        console.log("res", response.data);
        let temp = [];
        temp = response.data.filter((d) => d.registrationID === studentID)
        setResultDetails(temp)
      })
      .catch((err) => console.error("error -> ", err));
  }, [studentID]);

  const getTotalMarks = (value) => {
    console.log("value = ", value);
    let total = 0;
    resultDetails.map((d) => {
      total += parseInt(d[value]);
    });
    return total;
  };

  const scoreHandler = () => {
    let count = 0;
    resultDetails.map((d) => {
      if (d.result === "FAIL") {
        count++;
      }
      console.log("count = ", count);
      if (count >= 1) {
        return "FAIL";
      } else {
        return "PASS";
      }
    });
  };

  const findPercentage = () => {
    let obtained = getTotalMarks("obtained_marks");
    let max = getTotalMarks("max_marks");
    let x = "%",
      percent = Math.floor((obtained / max) * 100);
    return [percent, x];
  };

  const totalMarksInWords = () => {
    let marks = getTotalMarks('obtained_marks')
    let text = toWords.convert(marks)
    return text
  };

  const finalResult = () => {
    let status,
      count = 1,
      sum = 0;
    resultDetails.map((d) => {
      sum += Number(d.obtained);

      if (count >= 1 && d.result === "FAIL") {
        status = "FAIL";
      } else if (sum >= 260) {
        status = "FIRST DIVISION";
      } else if (sum < 260 && sum > 220) {
        status = "SECOND DIVISION";
      } else {
        status = "THIRD CLASS";
      }
    });
    return status;
  };

  return (
    <Container>
      <Table className="my-5" responsive bordered>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Sl No</th>
            <th colSpan={2}>
              Subject
              <th style={{ padding: "0px 3rem" }}>Code</th>
              <th style={{ paddingLeft: "0px 4rem" }}>Subject</th>
            </th>
            <th colSpan={3}>
              Examination Marks Obtained
              <th style={{ paddingLeft: "0px 3rem" }}>Max</th>
              <th style={{ paddingLeft: "0px 3rem" }}>Min</th>
              <th style={{ paddingLeft: "0px 3rem" }}>Obtained</th>
            </th>
            <th style={{ paddingLeft: "0px 3rem" }}>Subject Result</th>
          </tr>
        </thead>
        <tbody>
          {resultDetails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.code}</td>
              <td>{data.subject}</td>
              <td>{data.max_marks}</td>
              <td>{data.min_marks}</td>
              <td>{data.obtained_marks}</td>
              <td>{data.result}</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th colSpan={3}>Grand Total</th>
            <td>{getTotalMarks("max_marks")}</td>
            <td>{getTotalMarks("min_marks")}</td>
            <td>{getTotalMarks("obtained_marks")}</td>
            <td>{scoreHandler()}</td>
          </tr>
        </thead>
      </Table>
      <p>
        <b>Total Marks obtained[in Words]</b>:{totalMarksInWords()}
      </p>
      <p>
        <b>Result of Semster</b>:{finalResult()}
      </p>
      <p>
        <b>Percentage</b>:{findPercentage()}
      </p>
      <p>
        <b>Date</b>:05 DEC 2024
      </p>
    </Container>
  );
};

export default TableData;
