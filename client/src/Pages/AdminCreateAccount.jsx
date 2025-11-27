import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const Card = motion(styled.div`
  width: 420px;
  padding: 40px 35px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
`);

const Title = styled.h2`
  font-size: 28px;
  color: #d72638;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  transition: 0.2s ease;

  box-sizing: border-box;
  &:focus {
    border-color: #d72638;
    box-shadow: 0px 0px 6px rgba(215, 38, 56, 0.26);
  }
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #d72638;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: #b91e2c;
    transform: translateY(-2px);
  }
`;

const ErrorText = styled.p`
  width: 100%;
  color: #d72638;
  font-weight: 500;
  font-size: 14px;
  margin-top: -10px;
`;

const SuccessText = styled.p`
  width: 100%;
  color: #2e7d32;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const AdminCreateAccount = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCreateBusinessAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // 🔴 --- SUPABASE INTEGRATION SPOT ---
      // Example endpoint request:
      /*
      const res = await fetch("/api/create-business-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, businessName }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.msg);
      */

      // REMOVE THIS when integrating with Supabase
      await new Promise((r) => setTimeout(r, 1000));
      // ------------------------

      setSuccessMsg("Business account successfully created!");
      setBusinessName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        <Title>Create Business Account</Title>

        <form
          style={{
            width: "100%",
            maxWidth: "340px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
          onSubmit={handleCreateBusinessAccount}
        >
          <div>
            <Label>Business Name</Label>
            <Input
              type="text"
              placeholder="Ex: Madison Social"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="business@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
          {successMsg && <SuccessText>{successMsg}</SuccessText>}

          <Button disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default AdminCreateAccount;
