import React from "react";
import Layout from "../components/layout";
import { ExampleButton } from "../components/button";

export default function Home() {
  return (
    <Layout>
      <h1>Hello from Gatsby</h1>
      <h2>THIS IS A TEST!</h2>
      <h2>THIS IS MY SECOND TEST!</h2>
      <h2>AND ANOTHER ONE!</h2>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  );
}
