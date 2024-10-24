import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CardPlace from "../../components/Card/CardPlace";
import ReportReview from "../../components/Table/ReportReview";
import axios from "axios";
const ReportList = () => {
  const baseURL = import.meta.env.VITE_REACT_API_URL;
  const [userRole, setUserRole] = useState(null);
  const [totalMessages, setTotalMessages] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/session`, {
          withCredentials: true,
        });
        const role = response.data.role;
        setUserRole(role);
        // Redirect if not Guide, Admin, or User
        if (role !== "Admin") {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
        navigate("/");
      }
    };

    checkLoginStatus();
  }, [navigate]);
  useEffect(() => {
    const fetchTotalMessages = async () => {
      try {
        const response = await axios.get(`${baseURL}/ReportReview`, {
          withCredentials: true,
        });
        setTotalMessages(response.data);
      } catch (error) {
        console.error("Error fetching total messages", error);
      }
    };

    fetchTotalMessages();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <CardPlace
          src={"./img/Card/Flag.png"}
          title={totalMessages.total}
          desc={"Total Report"}
        />
      </div>
      <ReportReview />
    </>
  );
};
export default ReportList;
