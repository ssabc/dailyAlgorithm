import styled from 'styled-components';

export const ContentWrap = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        /* justify-content: space-around; */
        li {
            background-color: rgba(0,0,0,0.6);
            display: inline-block;
            /* border-radius: 4px; */
            padding: 4px 8px;
            color: #ffffff;
            cursor: pointer;

            &.active {
                background-color: #049372;
            }
        }
    }
`