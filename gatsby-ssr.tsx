import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import PrimaryLayout from "./src/components/PrimaryLayout"

export const wrapPageElement: GatsbyBrowser[ "wrapPageElement" ] = ({ element, props }) => {
  if ( ( element.type as any ).layout === null ) return element;

  return <PrimaryLayout {...props}>{element}</PrimaryLayout>
}
