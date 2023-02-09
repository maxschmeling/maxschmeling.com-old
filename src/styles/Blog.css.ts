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
	fontSize: "2.75rem",
	margin: "0 0 1rem 0",
	color: vars.colors.primary,
	fontWeight: "lighter",
	borderBottom: `solid 1px ${ vars.colors.primary }`,
	borderBottomStyle: "dashed",
} );

globalStyle( `${ pageContent } ul`, {

} );
