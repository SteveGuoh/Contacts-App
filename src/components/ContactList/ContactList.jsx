import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Link,
  Paper,
  TableContainer,
} from "@mui/material";

const styles = {
  tableCell: {
    color: "#424242",
    fontWeight: "bold",
    fontSize: "1.1rem",
    borderBottom: "2px solid #e0e0e0",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
      padding: "0.5rem 0.75rem",
    },
  },
  tableRow: (index) => ({
    "&:hover": { background: "#f5f5f5" },
    backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
  }),
  tableCellBody: {
    fontSize: "1.05rem",
    borderBottom: "1px solid #e0e0e0",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
      padding: "0.5rem 0.75rem",
    },
  },
};

const ContactList = ({ contacts }) => (
  <Container>
    <Typography
      variant="h4"
      sx={{
        marginY: 3,
        color: "#0073b1",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        "@media (max-width: 600px)": {
          fontSize: "1.5rem",
        },
      }}
    >
      Contacts
    </Typography>
    <Paper
      sx={{
        padding: 3,
        borderRadius: 2,
        background: "#ffffff",
        marginBottom: 2,
        overflowX: "auto",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["Name", "Username", "Email", "Phone"].map((header, index) => (
                <TableCell key={index} sx={styles.tableCell}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <TableRow key={contact.id} sx={styles.tableRow(index)}>
                  <TableCell sx={styles.tableCellBody}>
                    <Link
                      component={RouterLink}
                      to={`/contact/${contact.id}`}
                      sx={{
                        textDecoration: "none",
                        color: "#0073b1",
                        fontWeight: "bold",
                        "&:hover": { textDecoration: "underline" },
                        "&:visited": { color: "#0073b1" },
                        "@media (max-width: 600px)": {
                          fontSize: "0.9rem",
                        },
                      }}
                    >
                      {contact.name}
                    </Link>
                  </TableCell>
                  {["username", "email", "phone"].map((field) => (
                    <TableCell key={field} sx={styles.tableCellBody}>
                      {contact[field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={styles.tableCellBody}>
                  No contacts available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Container>
);

export default ContactList;
