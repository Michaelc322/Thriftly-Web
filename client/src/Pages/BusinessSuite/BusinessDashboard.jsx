import React, { useState } from "react";
import styled from "styled-components";
import {
  FaCog,
  FaChartLine,
  FaBoxOpen,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";

// MOCK DATA
const mockBusiness = {
  name: "Madison Social",
  banner:
    "https://images.unsplash.com/photo-1526382551041-3c817fc3d478?auto=format&fit=crop&w=1200&q=80",
  avatar:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
};

const mockProducts = [
  {
    id: 1,
    name: "FSU T-Shirt",
    price: 25,
    quantity: 42,
    clicks: 830,
    impressions: 4100,
    variants: [
      { id: "v1", name: "Small", qty: 10 },
      { id: "v2", name: "Medium", qty: 20 },
      { id: "v3", name: "Large", qty: 12 },
    ],
  },
  {
    id: 2,
    name: "Garnet Hoodie",
    price: 45,
    quantity: 17,
    clicks: 520,
    impressions: 2300,
    variants: [
      { id: "v1", name: "Medium", qty: 5 },
      { id: "v2", name: "Large", qty: 12 },
    ],
  },
];

// ---------------------- STYLED COMPONENTS -----------------------

const Page = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 80px 0px 0px 0px;
`;

// Sidebar
const Sidebar = styled.div`
  width: 280px;
  background: white;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  width: 100%;
  height: 140px;
  background-size: cover;
  background-position: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
`;

const Avatar = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 4px solid white;
`;

const BusinessName = styled.h2`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const Nav = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  cursor: pointer;
  color: #444;

  &:hover {
    background: #f0f0f0;
  }
`;

// Main content
const Content = styled.div`
  flex: 1;
  padding: 35px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #333;
`;

const AddButton = styled.button`
  background: #d72638;
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #b81e2b;
  }
`;

// Table
const TableWrapper = styled.div`
  margin-top: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TH = styled.th`
  padding: 14px 16px;
  background: #fafafa;
  color: #555;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid #ececec;
`;

const TR = styled.tr`
  &:hover {
    background: #f8f8f8;
  }
`;

const TD = styled.td`
  padding: 14px 16px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #eee;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: ${(p) => p.bg || "#eee"};
  color: ${(p) => p.color || "#333"};
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

// -------------------------- COMPONENT ----------------------------

const BusinessDashboard = () => {
  const [products] = useState(mockProducts);

  return (
    <Page>
      {/* ===== Sidebar ===== */}
      <Sidebar>
        <Banner style={{ backgroundImage: `url(${mockBusiness.banner})` }} />
        <AvatarWrapper>
          <Avatar src={mockBusiness.avatar} />
        </AvatarWrapper>
        <BusinessName>{mockBusiness.name}</BusinessName>

        <Nav>
          <NavItem>
            <FaBoxOpen /> Products
          </NavItem>
          <NavItem>
            <FaChartLine /> Insights
          </NavItem>
          <NavItem>
            <FaCog /> Settings
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ===== Main Content ===== */}
      <Content>
        <Header>
          <Title>Manage Products</Title>
          <AddButton>
            <FaPlus /> Add Product
          </AddButton>
        </Header>

        {/* ===== Product Table ===== */}
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <TH>Product</TH>
                <TH>Price</TH>
                <TH>Quantity</TH>
                <TH>Variants</TH>
                <TH>Clicks</TH>
                <TH>Impressions</TH>
                <TH>Actions</TH>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <TR key={p.id}>
                  <TD>{p.name}</TD>
                  <TD>${p.price}</TD>
                  <TD>{p.quantity}</TD>
                  <TD>{p.variants.length}</TD>
                  <TD>{p.clicks}</TD>
                  <TD>{p.impressions}</TD>
                  <TD>
                    <ActionRow>
                      <ActionButton bg="#d72638" color="white">
                        <FaEdit size={13} />
                      </ActionButton>
                      <ActionButton bg="#555" color="white">
                        <FaTrash size={13} />
                      </ActionButton>
                    </ActionRow>
                  </TD>
                </TR>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </Content>
    </Page>
  );
};

export default BusinessDashboard;
