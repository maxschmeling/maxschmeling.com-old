import { style, globalStyle } from "@vanilla-extract/css"

export const menu = style( {
	display: "flex",
	flexDirection: "row",
	listStyle: "none",
	flexWrap: "wrap",
	justifyContent: "space-around",
	padding: 0,
	gap: "1rem"
} );

globalStyle( `${ menu } li`, {
  margin: 0,
	padding: 0
} );

globalStyle( `${menu} li a`, {
	fontSize: "1rem"
} );

globalStyle( `${menu} li a:hover`, {
	transition: "transform .7s ease-in-out",
	transform: "rotate(15deg)",
} );