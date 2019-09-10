import { UsersList } from "./UsersList";
import React from "react";
import ReactDOM from "react-dom";

it("renders a lists of user names ", () => {
  const container = document.createElement("div");
  ReactDOM.render(<UsersList users={[{ name: "Leanne Graham" }]} />, container);
  expect(container.textContent).toMatch("Leanne Graham");
});
