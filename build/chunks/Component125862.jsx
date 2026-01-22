/** Chunk was on 28636 **/
/** chunk id: 125862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk397927 = require("./397927.js"),
  Chunk595738 = require("./595738.jsx"),
  Chunk376092 = require("./376092.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk437504 = require("./437504.js");
let u = function(e) {
  var t;
  let {
    application: n
  } = e, u = a.useMemo(() => {
    var e;
    let t = null == n || null == (e = n.install_params) ? true : e.permissions;
    if (null != t) return c.Q.filter(e => r.zy(r.iu(t), e))
  }, [null == n || null == (t = n.install_params) ? true : t.permissions]);
  return null != u && u.length > 0 ? (0, l.jsxs)("div", {
    className: d.A,
    children: [(0, l.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: o.intl.string(o.t.runNF8)
    }), (0, l.jsx)(s.A, {
      className: d.h,
      grantedPermissions: u,
      grantedPermissionsHeader: o.intl.string(o.t.SLgiNH)
    })]
  }) : null
}