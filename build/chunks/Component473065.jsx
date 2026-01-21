/** Chunk was on 82124 **/
/** chunk id: 473065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function h(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, h = (0, i.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? true : t.isDM())), g = (0, s.ZP)(t.getRecipientId()), m = (0, c.Z)(), b = h === p.ULH.PROFILE && m;
  return (0, r.jsx)(d.JO, {
    disabled: !m || n,
    tooltip: !m || n ? f.intl.string(f.t.YneDgF) : b ? f.intl.string(f.t.niD64e) : f.intl.string(f.t["+FAsHq"]),
    icon: l.z65,
    onClick: () => {
      (0, o.TY)({
        displayProfile: g,
        isProfileOpen: !b
      }), a.Z.toggleUserProfileSidebarSection()
    },
    selected: b && m && !n
  })
}