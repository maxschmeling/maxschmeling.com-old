import { globalStyle, style } from "@vanilla-extract/css"

globalStyle( "header", {
	padding: "1rem 0",
} );

globalStyle( "header > div", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
} );

export const links = style( {
	display: "flex",
	listStyle: "none",
	gap: "1rem",
} );
