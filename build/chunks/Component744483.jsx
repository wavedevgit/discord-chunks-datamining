/** Chunk was on 67564 **/
/** chunk id: 744483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, f = (0, l.bG)([u.Ay], () => u.Ay.getSection(t.id, null == t ? true : t.isDM())), g = (0, o.Ay)(t.getRecipientId()), m = (0, c.A)(), b = f === p.YvQ.PROFILE && m;
  return (0, r.jsx)(d.In, {
    disabled: !m || n,
    tooltip: !m || n ? h.intl.string(h.t.YneDgF) : b ? h.intl.string(h.t.niD64e) : h.intl.string(h.t["+FAsHq"]),
    icon: i.nRI,
    onClick: () => {
      (0, a.am)({
        displayProfile: g,
        isProfileOpen: !b
      }), s.A.toggleUserProfileSidebarSection()
    },
    selected: b && m && !n
  })
}