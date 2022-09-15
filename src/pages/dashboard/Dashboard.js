import React from "react";
import { Button, Card } from "react-bootstrap";
import TicketTable from "./TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import Breadcrumbs from "../../components/breadcrumb/Breadcrumb";
function Dashboard() {
  return (
    <div>
      <Breadcrumbs page="Dashboard" />
      <Card className="text-center">
        <Card.Header className="">
          <Card.Text>Total Ticket : 50</Card.Text>
          <Card.Text>Pending Ticket : </Card.Text>
          <Button variant="primary">Add New Ticket</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Recently Ticket Added</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <TicketTable tickets={tickets} />
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
  );
}

export default Dashboard;
