import { style } from "@vanilla-extract/css"

export const scrollSnapContainer = style( {
	height: "100vh",
	scrollSnapType: "y mandatory",
	overflowY: "scroll",
	containerType: "size",
} );

export const section = style( {
	minHeight: "100vh",
	scrollSnapAlign: "start",
	display: "flex",
} );

export const stickySection = style( [ section, { 
	position: "sticky",
	top: 0,
	height: "100vh",
} ] );