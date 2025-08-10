import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import About from "../Components/About";
import MainPoint from "../Components/MainPoint";
import Feedback from "../Components/Feedback";
import { createClient } from "@supabase/supabase-js";

const Section = styled.section`
  padding: 100px 20px;
  height: 100vh;
  text-align: center;
  background-color: #d72638;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 1370px) {
    flex-direction: column;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin-bottom: 10em;

  @media (max-width: 500px) {
    width: 14rem;
  }
`;

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const HeaderSubText = motion(styled.h2`
  color: #fff;
`);

const ResetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [invalidLink, setInvalidLink] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      console.log("Session data:", session);
      if (error || !session) {
        console.error("Error fetching session:", error);
        setMessage("Invalid or expired reset link.");
      }
      setLoading(false);
    }
    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (newPassword.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ newPassword });
    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg("Password changed successfully!");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <Section>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10rem",
          }}
        >
          <h2 style={{ color: "#D72638", marginBottom: 40 }}>
            Change Password
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // centers child horizontally
              marginBottom: 10,
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <h5
                  style={{
                    color: "#D72638",
                    marginBottom: 6,
                    textAlign: "left",
                  }}
                >
                  New Password
                </h5>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 10,
                    border: "2px solid #ccc",
                    borderRadius: 8,
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h5
                  style={{
                    color: "#D72638",
                    marginBottom: 6,
                    textAlign: "left",
                  }}
                >
                  Confirm New Password
                </h5>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 10,
                    marginBottom: 40,
                    border: "2px solid #ccc",
                    borderRadius: 8,
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "60%",
              padding: 10,
              backgroundColor: "#D72638",
              borderRadius: 8,
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {loading ? "Updating..." : "Reset my password"}
          </button>
          {errorMsg && (
            <p style={{ color: "red", marginTop: 10 }}>{errorMsg}</p>
          )}
          {successMsg && (
            <p style={{ color: "green", marginTop: 10 }}>{successMsg}</p>
          )}
        </form>
      </Section>
    </>
  );
};

export default ResetPassword;
