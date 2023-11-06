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
} from "@mui/material";

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
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {["Name", "Username", "Email", "Phone"].map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  color: "#424242",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <TableRow
                key={contact.id}
                sx={{
                  "&:hover": { background: "#f5f5f5" },
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
                }}
              >
                <TableCell
                  sx={{
                    padding: "1rem 1.5rem 1rem 1rem",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Link
                    component={RouterLink}
                    to={`/contact/${contact.id}`}
                    sx={{
                      textDecoration: "none",
                      color: "#0073b1",
                      fontWeight: "bold",
                      fontSize: "1.05rem",
                      "&:hover": { textDecoration: "underline" },
                      "&:visited": { color: "#0073b1" },
                    }}
                  >
                    {contact.name}
                  </Link>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.05rem",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  {contact.username}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.05rem",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  {contact.email}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.05rem",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  {contact.phone}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                align="center"
                sx={{ fontSize: "1.05rem", padding: "2rem" }}
              >
                No contacts available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);

export default ContactList;
