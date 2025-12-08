/** Chunk was on web.js **/
/** chunk id: 465315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk346751 = require("./346751.js");

function u(e) {
  var t, n, u, d;
  let {
    node: f
  } = e, {
    destinationKey: p
  } = f, _ = null == (t = f.useSubtitle) ? true : t.call(f), {
    accessibleDirectory: m
  } = (0, a.t)(), h = m.entry(p), g = (null == h ? true : h.parentPanelKey) != null ? m.get(h.parentPanelKey) : true, E = null == (n = f.useTitle) ? true : n.call(f), b = null == g || null == (u = g.useTitle) ? true : u.call(g);
  if (null == g) return null;
  let y = (null == (d = g.parent) ? true : d.type) === o.J.SIDEBAR_ITEM ? g.parent.icon : true;
  return (0, r.jsx)(l.x, {
    title: null != E ? E : b,
    description: _,
    leadingElement: null != y && (0, r.jsx)("div", {
      className: c.navigatorIcon,
      children: (0, r.jsx)(y, {
        color: "currentColor"
      })
    }),
    primaryTrailingElement: (0, r.jsx)(i.LJT, {}),
    onClick: () => s.Z.setState({
      requestedTargetKey: p
    })
  })
}