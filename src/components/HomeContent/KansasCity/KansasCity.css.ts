import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../../../styles/base.css";

export const wrapper = style( {
	display: "flex",
	flexDirection: "column",
	width: "100%",
	position: "relative",
	padding: "2rem",
	transition: "background-color 500ms ease, color 500ms ease",
	lineHeight: "1.75rem",
} );

globalStyle( `${ wrapper } p a`, {
	color: "unset",
} );

globalStyle( `${ wrapper }.chiefs`, {
	backgroundColor: vars.colors.chiefsRed,
	color: vars.colors.chiefsGold,
} );

globalStyle( `${ wrapper }.royals`, {
	backgroundColor: vars.colors.royalsBlue,
	color: vars.colors.royalsGold,
} );

globalStyle( `${ wrapper }.sporting`, {
	backgroundColor: vars.colors.sportingBlue,
	color: vars.colors.sportingIndigo,
} );

globalStyle( `${ wrapper } svg`, {
	position: "absolute",
	bottom: 0,
	right: 0,
	left: 0,
	objectFit: "contain",
} );

globalStyle( `${ wrapper } svg path`, {
	transition: "fill 500ms ease, stroke-width 500ms ease, stroke 500ms ease",
} );

globalStyle( `${ wrapper }.chiefs svg path`, {
	fill: vars.colors.chiefsGold	
} );

globalStyle( `${ wrapper }.royals svg path`, {
	fill: vars.colors.royalsGold
} );

globalStyle( `${ wrapper }.sporting svg path`, {
	stroke: vars.colors.sportingLead,
	strokeWidth: 2,
	fill: vars.colors.sportingIndigo
} );
