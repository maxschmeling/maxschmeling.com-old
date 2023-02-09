import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./base.css";

export const pageContent = style( {
	display: "grid",
	gridTemplateColumns: "3fr 1.5fr",
	gap: "4rem",
} );

export const blogPage = style( {

} );

globalStyle( `${ blogPage } h1`, {
	fontSize: "2.5rem",
	margin: "0 0 1rem 0",
	color: vars.colors.primary,
	fontWeight: "bold",
	borderBottom: `solid 1px ${ vars.colors.primary }`,
	borderBottomStyle: "dashed",
	textTransform: "uppercase",
} );

globalStyle( `${ pageContent } ul`, {

} );

export const postPageContent = style( {

} );

globalStyle( `${ postPageContent } > h2`, {
	margin: 0
} );

globalStyle( `${ postPageContent } > h3`, {
	margin: 0,
	fontWeight: 300,
	fontSize: "1rem",
	borderBottom: `solid 1px ${ vars.colors.primary }`,
	borderBottomStyle: "dashed",
} );
