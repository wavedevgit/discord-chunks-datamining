/** Chunk was on 5606 **/
/** chunk id: 318903, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk199966 = require("./199966.js"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk590089 = require("./590089.jsx"),
  Chunk191563 = require("./191563.js");

function d(e) {
  var t, n, d, u;
  let {
    node: p
  } = e, {
    destinationKey: _
  } = p, m = null == (t = p.useSubtitle) ? true : t.call(p), {
    accessibleDirectory: g
  } = (0, l._)(), f = g.entry(_), b = (null == f ? true : f.parentPanelKey) != null ? g.get(f.parentPanelKey) : true, h = null == (n = p.useTitle) ? true : n.call(p), A = null == b || null == (d = b.useTitle) ? true : d.call(b);
  if (null == b) return null;
  let E = (null == (u = b.parent) ? true : u.type) === s.Z6.SIDEBAR_ITEM ? b.parent.icon : true;
  return (0, r.jsx)(o.U, {
    title: null != h ? h : A,
    description: m,
    leadingElement: null != E && (0, r.jsx)("div", {
      className: c.z,
      children: (0, r.jsx)(E, {
        color: "currentColor"
      })
    }),
    primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
    onClick: () => a.A.setState({
      requestedTargetKey: _
    })
  })
}