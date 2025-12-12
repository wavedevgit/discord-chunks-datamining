/** Chunk was on 92504 **/
/** chunk id: 970731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk995648 = require("./995648.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935232 = require("./935232.js");
let u = function(e) {
  var t;
  let {
    application: n
  } = e, u = r.useMemo(() => {
    var e;
    let t = null == n || null == (e = n.install_params) ? true : e.permissions;
    if (null != t) return o.VY.filter(e => i.e$(i.vB(t), e))
  }, [null == n || null == (t = n.install_params) ? true : t.permissions]);
  return null != u && u.length > 0 ? (0, a.jsxs)("div", {
    className: d.sectionContainer,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: c.intl.string(c.t.runNF8)
    }), (0, a.jsx)(s.Z, {
      className: d.contentContainer,
      grantedPermissions: u,
      grantedPermissionsHeader: c.intl.string(c.t.SLgiNH)
    })]
  }) : null
}