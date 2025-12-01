/** Chunk was on 88569 **/
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
    destinationKey: p
  } = f, b = null == (t = f.useSubtitle) ? true : t.call(f), {
    directory: y
  } = (0, i.t)(), g = null == y ? true : y.entry(p), v = (null == g ? true : g.parentPanelKey) != null ? null == y ? true : y.get(g.parentPanelKey) : true, m = null == (n = f.useTitle) ? true : n.call(f), h = null == v || null == (u = v.useTitle) ? true : u.call(v);
  if (null == v) return null;
  let x = (null == (d = v.parent) ? true : d.type) === o.Jq.SIDEBAR_ITEM ? v.parent.icon : true;
  return (0, r.jsx)(s.x, {
    title: null != m ? m : h,
    description: b,
    leadingElement: null != x && (0, r.jsx)("div", {
      className: c.navigatorIcon,
      children: (0, r.jsx)(x, {})
    }),
    primaryTrailingElement: (0, r.jsx)(l.LJT, {}),
    onClick: () => a.Z.setState({
      requestedTargetKey: p
    })
  })
}