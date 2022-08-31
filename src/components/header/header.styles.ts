import styled, { css } from "styled-components";

export const HeaderLinksList = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  a {
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-size: 0.8em;

    svg {
      color: #007b3c;
    }

    :hover {
      text-decoration: none;
    }
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 6em;
  }
`;

export const HeaderLinksInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

export const HeaderLinksWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 30%);
`;

export const HeaderActionDivider = styled.div`
  width: 2px;
  height: 1em;
  background-color: currentColor;
  margin-inline: 0.5em;
`;

type ActionProps = {
  color?: "orange";
};

export const HeaderAction = styled.div<ActionProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  padding-inline: 1em;

  ${({ color }) => {
    return css`
      background-color: var(--color-${color});
    `;
  }}
  svg,
  img {
    width: auto;
    height: 1em;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderActions = styled.div`
  background-color: var(--color-green);
  width: max-content;
  height: 1.75em;
  margin-inline-start: auto;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const HeaderActionsWrapper = styled.div`
  background-color: var(--color-teal);
  padding-inline: 1em;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 60em;
  margin-inline: auto;
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
`;
