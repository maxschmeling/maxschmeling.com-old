import { createTheme, globalStyle, style } from "@vanilla-extract/css"

export const [ themeClass, vars ] = createTheme( {
	colors: {
		primary: "#27319c",
		headerTextColor: "white",

		chiefsRed: "#E31837",
		chiefsGold: "#FFB81C",

		royalsBlue: "#004687",
		royalsGold: "#BD9B60",

		sportingBlue: "#91B0D5",
		sportingIndigo: "#002F65",
		sportingLead: "#999999",
	},
} );

export const container = style({
	maxWidth: 1200,
	marginLeft: "auto",
	marginRight: "auto",
	padding: "0 1rem",
});

export const menuList = style( {
	display: "flex",
	listStyle: "none",
	gap: "1rem",
	padding: 0,
	justifyContent: "center",
} );

export const avatar = style( {
	width: "3rem",
	aspectRatio: "1/1",
	borderRadius: "100%",
	boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
	border: "0.1rem solid white",
} );

export const menuWrapper = style( {
	alignItems: "center",
	display: "flex",
	flexDirection: "column"
} );

export const page = style( {
} );

globalStyle( 'body', {
	margin: 0,
	fontFamily: "Montserrat",
} );

globalStyle( 'a', { color: "black" } );

globalStyle( "main", {
	backgroundColor: "white",
	borderRadius: ".25rem",
	marginRight: "1rem",
	marginLeft: "1rem",
	padding: "0 1rem",
})

export const mainContent = style( {
	padding: "1rem 0",
} );
