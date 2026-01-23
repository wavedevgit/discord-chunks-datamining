/** Chunk was on web.js **/
/** chunk id: 896005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk46373 = require("./46373.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk702421 = require("./702421.js");

function f(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: a,
    variant: f = "default",
    layout: p,
    initialize: _
  } = t, h = null == n ? true : n(), m = null == a ? true : a(), g = i.useId(), E = null != h && "" !== h, y = null != m && "" !== m;
  return (0, u.Z)(_), (0, r.jsxs)("fieldset", {
    "aria-describedby": y ? g : true,
    children: [E ? (0, r.jsx)(o.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "text-strong",
      className: s()(d.DD, {
        [d.mU]: !y,
        [d.jS]: !y
      }),
      children: h
    }) : null, y ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      id: g,
      className: s()(d.VA, d.mU, {
        [d.jS]: !E
      }),
      children: m
    }) : null, (0, r.jsx)(o.BJc, {
      direction: "vertical",
      gap: 8,
      children: p.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(l.A, {
          node: e
        }), "separators" === f && t !== p.length - 1 && (0, r.jsx)(c.A, {})]
      }, e.key))
    })]
  })
}
let p = Chunk64700.memo(f)