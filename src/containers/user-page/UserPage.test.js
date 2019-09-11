import { UserPage } from "./UserPage";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders a lists of user names", () => {
  const match = { params: { id: 2, name: "hello" } };
  const posts = [{ title: "test", body: "test" }];
  const wrapper = shallow(<UserPage posts={posts} match={match} />);
  console.log(wrapper.debug());
  expect(wrapper.find("#title")).toHaveLength(1);
  expect(wrapper.find("#body")).toHaveLength(1);
});
