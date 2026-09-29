import styled from "@emotion/styled";

export const Lesson09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex: 1;
  padding: 50px;
  background-color: rgb(220, 190, 225);
`;

export const Title = styled.h2`
  font-size: 26px;
  color: rgb(53, 19, 59);
  text-decoration: underline;
`;

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  background-color: white;
  border: 4px solid rgb(38, 10, 43);
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;
