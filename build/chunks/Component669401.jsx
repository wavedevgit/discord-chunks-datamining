/** Chunk was on 84283 **/
/** chunk id: 669401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk995648 = require("./995648.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362798 = require("./362798.js");
let u = function(e) {
  var t;
  let {
    application: n
  } = e, u = a.useMemo(() => {
    var e;
    let t = null == n || null == (e = n.install_params) ? true : e.permissions;
    if (null != t) return o.VY.filter(e => i.e$(i.vB(t), e))
  }, [null == n || null == (t = n.install_params) ? true : t.permissions]);
  return null != u && u.length > 0 ? (0, r.jsxs)("div", {
    className: d.sectionContainer,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: c.intl.string(c.t.runNF8)
    }), (0, r.jsx)(s.Z, {
      className: d.contentContainer,
      grantedPermissions: u,
      grantedPermissionsHeader: c.intl.string(c.t.SLgiNH)
    })]
  }) : null
}