import {css} from 'styled-components'
export  const phone = (props) => {
    return css`
    @media only screen and (max-width: 450px) {
        ${props}
    } 
    `;
}
export default phone;