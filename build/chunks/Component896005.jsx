/** Chunk was on web.js **/
/** chunk id: 896005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk702421 = require("./702421.js");

function d(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: a,
    layout: d,
    initialize: f
  } = t, p = null == n ? true : n(), _ = null == a ? true : a(), h = i.useId(), m = null != p && "" !== p, g = null != _ && "" !== _;
  return (0, c.Z)(f), (0, r.jsxs)("fieldset", {
    "aria-describedby": g ? h : true,
    children: [m ? (0, r.jsx)(o.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "text-strong",
      className: s()(u.DD, {
        [u.h0]: g
      }),
      children: p
    }) : null, g ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      id: h,
      className: u.VA,
      children: _
    }) : null, (0, r.jsx)(o.BJc, {
      direction: "vertical",
      gap: 8,
      padding: {
        top: 16
      },
      children: d.map(e => (0, r.jsx)(l.A, {
        node: e
      }, e.key))
    })]
  })
}
let f = Chunk64700.memo(d)