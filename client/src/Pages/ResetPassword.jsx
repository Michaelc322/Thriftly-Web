import React, { useState } from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import About from "../Components/About";
import MainPoint from "../Components/MainPoint";
import Feedback from "../Components/Feedback";
import { createClient } from "@supabase/supabase-js";


const Section = styled.section`
  padding: 100px 20px;
  height: 110vh;
  text-align: center;
  background-color: #d72638;
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
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

const HeaderSubText = motion(styled.h2`
  color: #fff;
`);

const ResetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        console.error("Error fetching session:", error);
        setMessage("Invalid or expired reset link.");
      }
      setLoading(false);
    }
    checkSession();
  }, []);

  return (
    <>
      <Section>
        <HeaderContainer>
          <HeaderInfo>
            <HeaderSubText>Change your Password</HeaderSubText>
          </HeaderInfo>
        </HeaderContainer>
      </Section>
    </>
  );
};

export default ResetPassword;
