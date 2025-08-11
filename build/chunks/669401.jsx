/** Chunk was on 88934 **/
/** chunk id: 669401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk995648 = require("./995648.js"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk859708 = require("./859708.js");
let u = function(e) {
  var t;
  let {
    application: n
  } = e, u = a.useMemo(() => {
    var e;
    let t = null == n || null == (e = n.install_params) ? true : e.permissions;
    if (null != t) return o.VY.filter(e => i.e$(i.vB(t), e))
  }, [null == n || null == (t = n.install_params) ? true : t.permissions]);
  return null != u && u.length > 0 ? <div className={d.sectionContainer}>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{c.intl.string(c.t.runNFx)}</l.X6q>}{<s.Z className={d.contentContainer} grantedPermissions={u} grantedPermissionsHeader={c.intl.string(c.t.SLgiND)} />}</div> : null
}