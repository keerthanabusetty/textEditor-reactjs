import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  padding-top: 12px;
`
export const Button = styled.button`
  color: ${props => props.color};
  border: none;
  outline: none;
  background-color: transparent;
`
export const ItalicButton = styled.button`
  color: ${props => props.color};
  border: none;
  outline: none;
  background-color: transparent;
`
export const UnderlineButton = styled.button`
  color: ${props => props.color};
  border: none;
  outline: none;
  background-color: transparent;
`
export const ImageElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 50vh;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`
export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`
export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`

export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
