import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: var(--mainWhite);
    border-radius: 5px;
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: white;
    }
    &:focus {
        outline:none;
    }
`;

export const AddButton = styled(ButtonContainer)`
    background: white;
    &:hover {
        background: var(--mainWhite);
    }
    &:focus {
        outline:none;
}

`;