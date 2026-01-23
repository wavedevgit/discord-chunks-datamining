/** Chunk was on web.js **/
/** chunk id: 318903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk199966 = require("./199966.js"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk590089 = require("./590089.jsx"),
  Chunk191563 = require("./191563.js");

function u(e) {
  var t, n, u, d;
  let {
    node: f
  } = e, {
    destinationKey: p
  } = f, _ = null == (t = f.useSubtitle) ? true : t.call(f), {
    accessibleDirectory: h
  } = (0, a._)(), m = h.entry(p), g = (null == m ? true : m.parentPanelKey) != null ? h.get(m.parentPanelKey) : true, E = null == (n = f.useTitle) ? true : n.call(f), y = null == g || null == (u = g.useTitle) ? true : u.call(g);
  if (null == g) return null;
  let b = (null == (d = g.parent) ? true : d.type) === s.Z6.SIDEBAR_ITEM ? g.parent.icon : true;
  return (0, r.jsx)(l.U, {
    title: null != E ? E : y,
    description: _,
    leadingElement: null != b && (0, r.jsx)("div", {
      className: c.z,
      children: (0, r.jsx)(b, {
        color: "currentColor"
      })
    }),
    primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
    onClick: () => o.A.setState({
      requestedTargetKey: p
    })
  })
}