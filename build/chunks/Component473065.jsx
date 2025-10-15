/** Chunk was on 91053 **/
/** chunk id: 473065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816782 = require("./816782.js"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk60577 = require("./60577.js"),
  Chunk433355 = require("./433355.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, f = (0, i.e7)([d.ZP], () => d.ZP.getSection(t.id, null == t ? true : t.isDM())), g = (0, o.ZP)(t.getRecipientId()), m = (0, c.Z)(), b = f === h.ULH.PROFILE && m;
  return (0, r.jsx)(u.JO, {
    disabled: !m || n,
    tooltip: !m || n ? p.intl.string(p.t.YneDgF) : b ? p.intl.string(p.t.niD64e) : p.intl.string(p.t["+FAsHq"]),
    icon: l.z65,
    onClick: () => {
      (0, s.TY)({
        displayProfile: g,
        isProfileOpen: !b
      }), a.Z.toggleUserProfileSidebarSection()
    },
    selected: b && m && !n
  })
}