import { globalStyle, style } from "@vanilla-extract/css"

export const listing = style( {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
} );

globalStyle( `${ listing } article a`, {
	padding: "0",
	textDecoration: "none",
} );

globalStyle( `${ listing } article h2`, {
	fontSize: "1.1rem",
	margin: 0,
} );

globalStyle( `${ listing } article h3`, {
	fontSize: "0.85rem",
	margin: 0,
	fontWeight: "lighter",
} );
