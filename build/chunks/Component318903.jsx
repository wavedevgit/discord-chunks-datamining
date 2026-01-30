/** Chunk was on 78376 **/
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
    node: _
  } = e, {
    destinationKey: p
  } = _, m = null == (t = _.useSubtitle) ? true : t.call(_), {
    accessibleDirectory: g
  } = (0, l._)(), A = g.entry(p), f = (null == A ? true : A.parentPanelKey) != null ? g.get(A.parentPanelKey) : true, b = null == (n = _.useTitle) ? true : n.call(_), h = null == f || null == (d = f.useTitle) ? true : d.call(f);
  if (null == f) return null;
  let E = (null == (u = f.parent) ? true : u.type) === s.Z6.SIDEBAR_ITEM ? f.parent.icon : true;
  return (0, r.jsx)(o.U, {
    title: null != b ? b : h,
    description: m,
    leadingElement: null != E && (0, r.jsx)("div", {
      className: c.z,
      children: (0, r.jsx)(E, {
        color: "currentColor"
      })
    }),
    primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
    onClick: () => a.A.setState({
      requestedTargetKey: p
    })
  })
}