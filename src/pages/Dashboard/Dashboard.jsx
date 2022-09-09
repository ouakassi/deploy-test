import Section from "../../components/Section";
export default function Dashboard() {
  return (
    <Section
      className="login"
      id="login"
      icon="uil uil-signin"
      sectionTitle="Dashboard"
      sectionSubtitle="welcome to  dashboard"
    >
      <h1 style={{ fontSize: "15rem", color: "green" }}>Dashboard</h1>
    </Section>
  );
}
