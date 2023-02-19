import styled from "styled-components";

export const ButtonConatiner = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainMaroon);
  border-color: ${(props) =>
    props.cart ? "var(--mainGreen)" : "var(--mainMaroon)"};
  color: ${(props) => (props.cart ? "var(--mainGreen)" : "var(--mainMaroon)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transation: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? " var(--mainGreen)" : " var(--darkMaroon)"};
    color: var(--mainMaroon);
  }
  &:focus {
    outline: none;
  }
`;
