/** Chunk was on web.js **/
/** chunk id: 896005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk46373 = require("./46373.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk702421 = require("./702421.js");

function u(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: u,
    variant: d = "default",
    layout: f,
    initialize: p
  } = t, _ = null == n ? true : n(), h = null == u ? true : u(), m = i.useId(), g = null != _ && "" !== _, E = null != h && "" !== h;
  return (0, l.Z)(p), (0, r.jsxs)("fieldset", {
    "aria-describedby": E ? m : true,
    children: [g || E ? (0, r.jsxs)("div", {
      className: c.wx,
      children: [g ? (0, r.jsx)(a.Text, {
        tag: "legend",
        variant: "text-md/semibold",
        color: "text-strong",
        className: c.DD,
        children: _
      }) : null, E ? (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        id: m,
        className: c.VA,
        children: h
      }) : null]
    }) : null, (0, r.jsx)(a.BJc, {
      direction: "vertical",
      gap: 8,
      children: f.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(s.A, {
          node: e
        }), "separators" === d && t !== f.length - 1 && (0, r.jsx)(o.A, {})]
      }, e.key))
    })]
  })
}
let d = Chunk64700.memo(u)