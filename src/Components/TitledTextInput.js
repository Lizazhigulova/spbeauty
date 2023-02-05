import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #94A3B8;
    &:hover {
        background-color: #F8FAFC;
        border: solid #E2E8F0 1px;
        color: #94A3B8;
    }
    &:active {
        background-color: #F8FAFC;
        border: solid #E2E8F0 1px;
        color: #0F172A;
    }
    &:active {
        background-color: #F8FAFC;
        border: solid #E2E8F0 1px;
        color: #0F172A;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className="caption">{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-4 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;
