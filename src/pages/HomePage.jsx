import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Headlinecards from "../components/Headlinecards";
import RegistrationForm from "../components/RegistrationForm";

const HomePage = () => {
  const [open, setOpen] = React.useState(true);
  const [accounts, setAccounts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (accounts.length > 0) {
      fetch("http://localhost:5000/users/" + accounts[0])
        .then((response) => {
          if (response.status !== 200) {
            setIsOpen(true);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error retrieving posts:", error);
        });
    }
  }, [accounts]);

  return (
    <div>
      <Navbar
        setAccountsList={(list) => {
          setAccounts(list);
        }}
      />
      <Headlinecards />
      {isOpen && <RegistrationForm wAddress={accounts[0]} />}
      {/* { accounts.length > 0 && open && <PersonalDetailsForm closeForm={() => setOpen(false)}/>} */}
    </div>
  );
};

export default HomePage;
