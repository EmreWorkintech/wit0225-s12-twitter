import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Wrapper from "./Wrapper";
import App from "./App";
import FeedItem from "./components/FeedItem";
import Login from "./pages/Login";

const tweet = {
  createdAt: "2024-04-30T03:42:44.561Z",
  userName: "Jeremy Leffler",
  avatar: "https://avatars.githubusercontent.com/u/29365243",
  message:
    "Experience the salmon brilliance of our Pants, perfect for fair environments",
  retweet_count: "67275",
  like_count: "6314",
  comment_count: "27025",
  id: "1",
};

describe("App", () => {
  it("renders the App component", async () => {
    //arrange
    const user = userEvent.setup();
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    const email = screen.getByPlaceholderText("Phone number, email address");
    const pass = screen.getByTestId("input-pass");
    const submit = screen.getByRole("button");

    //act
    await user.type(email, "emre@wit.com.tr");
    await user.type(pass, "12345678");
    await user.click(submit);

    //arrange
    const userName = await screen.findByText("emre@wit.com.tr");
    expect(userName).toBeInTheDocument();

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("renders the FeedItem component", async () => {
    //arrange
    render(<FeedItem tweet={tweet} />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("renders the Login component", async () => {
    //arrange
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
