/** Chunk was on 16985 **/
/** chunk id: 465315, original params: e,t,n (module,exports,require) **/
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
    destinationKey: b
  } = f, p = null == (t = f.useSubtitle) ? true : t.call(f), {
    directory: y
  } = (0, i.t)(), j = null == y ? true : y.entry(b), m = (null == j ? true : j.targetPanelKey) != null ? null == y ? true : y.get(j.targetPanelKey) : true, v = null == (n = f.useTitle) ? true : n.call(f), g = null == m || null == (u = m.useTitle) ? true : u.call(m);
  if (null == m) return null;
  let x = (null == (d = m.parent) ? true : d.type) === o.Jq.SIDEBAR_ITEM ? m.parent.icon : true;
  return (0, r.jsx)(c.x, {
    title: null != v ? v : g,
    description: p,
    leadingElement: null != x && (0, r.jsx)("div", {
      className: s.navigatorIcon,
      children: (0, r.jsx)(x, {})
    }),
    primaryTrailingElement: (0, r.jsx)(l.LJT, {}),
    onClick: () => a.Z.setState({
      targetKey: b
    })
  })
}