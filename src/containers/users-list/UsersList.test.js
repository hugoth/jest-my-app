import { UsersList } from "./UsersList";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders a lists of user names", () => {
  const wrapper = shallow(<UsersList users={[{ name: "Leanne Graham" }]} />);
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
