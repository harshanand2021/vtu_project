import React from "react";
import { Table, Container } from "react-bootstrap";

const TableData = () => {
    return (
        <Container>
            <Table className="my-5" responsive bordered>
                <thead>
                    <th style={{textAlign: "center"}}>Sl No.</th>
                    <th colSpan={2}>Subject
                        <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Code</th>
                        <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Subject</th>
                    </th>
                    <th colSpan={3}>
                        <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Max</th>
                        <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Min</th>
                        <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Obtained</th>
                    </th>
                    <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Subject Result</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>CSE-2001</td>
                        <td>Java</td>
                        <td>100</td>
                        <td>35</td>
                        <td>70</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>CSE-2002</td>
                        <td>Python</td>
                        <td>100</td>
                        <td>35</td>
                        <td>70</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>CSE-2003</td>
                        <td>Excel</td>
                        <td>100</td>
                        <td>35</td>
                        <td>70</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>CSE-2004</td>
                        <td>React</td>
                        <td>100</td>
                        <td>35</td>
                        <td>70</td>
                        <td>PASS</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>CSE-2005</td>
                        <td>Data Ananlysis</td>
                        <td>100</td>
                        <td>35</td>
                        <td>70</td>
                        <td>PASS</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colSpan={3}>Grand Total</th>
                        <td>500</td>
                        <td>165</td>
                        <td>350</td>
                        <td>PASS</td>
                    </tr>
                </thead>
            </Table>
            <p><b>Total Marks Obtained [in Words]</b>:
                    Three Hundred and Fifty Only</p><br />
                <p><b>Result of semester</b>: PASS</p>
                <p><b>Percentage: </b>70%</p>
                <p><b>Date : </b>05 Dec 2023</p>
        </Container>
    )
}
export default TableData;