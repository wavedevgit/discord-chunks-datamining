/** Chunk was on 97492 **/
/** chunk id: 744483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk604681 = require("./604681.js"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk168015 = require("./168015.js"),
  Chunk761640 = require("./761640.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, h = (0, l.bG)([u.Ay], () => u.Ay.getSection(t.id, null == t ? true : t.isDM())), b = (0, o.Ay)(t.getRecipientId()), g = (0, c.A)(), m = h === f.YvQ.PROFILE && g;
  return (0, r.jsx)(d.In, {
    disabled: !g || n,
    tooltip: !g || n ? p.intl.string(p.t.YneDgF) : m ? p.intl.string(p.t.niD64e) : p.intl.string(p.t["+FAsHq"]),
    icon: i.nRI,
    onClick: () => {
      (0, s.am)({
        displayProfile: b,
        isProfileOpen: !m
      }), a.A.toggleUserProfileSidebarSection()
    },
    selected: m && g && !n
  })
}