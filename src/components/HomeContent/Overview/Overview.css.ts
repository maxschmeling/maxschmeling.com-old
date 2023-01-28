import { globalStyle, style } from "@vanilla-extract/css"

export const wrapper = style( {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	backgroundColor: "#3d91b7",
} );

export const name = style( {
	fontSize: "3rem",
	margin: 0,
	padding: 0,
	textTransform: "uppercase",
	textOverflow: "ellipsis",
} );

export const title = style( {
	fontSize: "2rem",
	margin: 0,
	padding: 0,
	fontWeight: "lighter",
} );

globalStyle( `${ wrapper } p`, {
	fontSize: "1.15rem",
	lineHeight: "2rem",
	'@container': {
    '(min-width: 768px)': {
			maxWidth: "60%",
    }
  }
} );

globalStyle( `${ wrapper } ul`, {
	listStyle: "none",
	padding: 0,
	display: "flex",
	flexDirection: "row",
	gap: ".5rem",
	flexWrap: "wrap",
} );

globalStyle( `${ wrapper } ul li`, {

} );

globalStyle( `${ wrapper } a`, {
	textTransform: "uppercase",
	textDecoration: "underline",
} );

globalStyle( `${ wrapper } header`, {
	padding: "1rem",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
} );
