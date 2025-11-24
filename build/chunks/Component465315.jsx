/** Chunk was on 46984 **/
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
  } = f, y = null == (t = f.useSubtitle) ? true : t.call(f), {
    directory: p
  } = (0, i.t)(), v = null == p ? true : p.entry(b), j = (null == v ? true : v.targetPanelKey) != null ? null == p ? true : p.get(v.targetPanelKey) : true, g = null == (n = f.useTitle) ? true : n.call(f), m = null == j || null == (u = j.useTitle) ? true : u.call(j);
  if (null == j) return null;
  let h = (null == (d = j.parent) ? true : d.type) === o.Jq.SIDEBAR_ITEM ? j.parent.icon : true;
  return (0, r.jsx)(c.x, {
    title: null != g ? g : m,
    description: y,
    leadingElement: null != h && (0, r.jsx)("div", {
      className: s.navigatorIcon,
      children: (0, r.jsx)(h, {})
    }),
    primaryTrailingElement: (0, r.jsx)(l.LJT, {}),
    onClick: () => a.Z.setState({
      targetKey: b
    })
  })
}