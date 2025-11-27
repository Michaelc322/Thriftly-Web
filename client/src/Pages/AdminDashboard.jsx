import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// ------------------ MOCK DATA (replace later) ------------------ //

const userGrowthData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 260 },
  { month: "Apr", users: 320 },
  { month: "May", users: 480 },
  { month: "Jun", users: 610 },
];

const businessRequestsData = [
  { day: "Mon", requests: 3 },
  { day: "Tue", requests: 5 },
  { day: "Wed", requests: 4 },
  { day: "Thu", requests: 7 },
  { day: "Fri", requests: 6 },
  { day: "Sat", requests: 2 },
  { day: "Sun", requests: 1 },
];

const recentActivity = [
  { id: 1, action: "Created Business Account: Madison Social", time: "2h ago" },
  { id: 2, action: "Approved school request: UCF", time: "5h ago" },
  { id: 3, action: "User reported listing: ID #349", time: "1 day ago" },
];

// ------------------ STYLED COMPONENTS ------------------ //

const Page = styled.div`
  min-height: 100vh;
  background: #f5f5f5;

  padding: 100px 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #2b2b2b;
  margin-bottom: 30px;
`;

// Layout
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 25px;
`;

// Cards
const Card = motion(styled.div`
  grid-column: span ${(props) => props.span || 4};
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
`);

// Stat Card
const StatValue = styled.h2`
  font-size: 40px;
  color: #d72638;
  margin-bottom: 5px;
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: #444;
`;

// Activity
const ActivityItem = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #eee;
`;

const ActivityText = styled.p`
  color: #333;
  margin: 0;
`;

const ActivityTime = styled.span`
  font-size: 13px;
  color: #777;
`;

// ------------------ COMPONENT ------------------ //

const AdminDashboard = () => {
  return (
    <Page>
      <Title>Admin Dashboard</Title>

      <Grid>
        {/* ---- TOP STATS ---- */}
        <Card
          span={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <StatValue>623</StatValue>
          <StatLabel>Total Users</StatLabel>
        </Card>

        <Card
          span={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, delay: 0.1 }}
        >
          <StatValue>41</StatValue>
          <StatLabel>Business Accounts</StatLabel>
        </Card>

        <Card
          span={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, delay: 0.2 }}
        >
          <StatValue>12</StatValue>
          <StatLabel>Pending Requests</StatLabel>
        </Card>

        {/* ---- LINE CHART: USER GROWTH ---- */}
        <Card span={8} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ marginBottom: "15px", color: "#2b2b2b" }}>
            User Growth (Last 6 Months)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#d72638"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* ---- BAR CHART: BUSINESS REQUESTS ---- */}
        <Card span={4} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ marginBottom: "15px", color: "#2b2b2b" }}>
            School Requests (This Week)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={businessRequestsData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="requests" fill="#d72638" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* ---- RECENT ACTIVITY ---- */}
        <Card span={4} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 style={{ marginBottom: "15px", color: "#2b2b2b" }}>
            Recent Activity
          </h2>

          {recentActivity.map((item) => (
            <ActivityItem key={item.id}>
              <ActivityText>{item.action}</ActivityText>
              <ActivityTime>{item.time}</ActivityTime>
            </ActivityItem>
          ))}
        </Card>
      </Grid>
    </Page>
  );
};

export default AdminDashboard;
