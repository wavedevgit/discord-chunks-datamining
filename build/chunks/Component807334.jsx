/** Chunk was on 39048 **/
/** chunk id: 807334, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk690450 = require("./690450.js");

function s(e) {
  let {
    title: t,
    settings: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: l.wx,
      children: t
    }), n.map(e => e.renderComponent())]
  })
}