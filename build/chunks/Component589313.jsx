/** Chunk was on 75909 **/
/** chunk id: 589313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk388032 = require("./388032.jsx");

function E() {
  var e, t, n;
  let {
    quest: E,
    sourceQuestContent: g,
    onClose: h
  } = o.useContext(p.VideoQuestModalContext), C = (0, d.tP)(E), S = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), b = null != (0, m.LM)(E.config), O = (0, f.D)({
    quest: E,
    questContent: u.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: g,
    onCloseModal: h,
    shouldShowShopIfAlreadyClaimed: true
  }), _ = (null == (e = E.userStatus) ? true : e.claimedAt) != null ? b ? v.intl.string(v.t.WYchde) : v.intl.string(v.t.vTgCWx) : v.intl.string(v.t.cfY4PE), y = (null == (t = E.userStatus) ? true : t.completedAt) == null ? C ? v.intl.string(v.t.NJ6Bnm) : v.intl.string(v.t.USNO1K) : true;
  return (0, r.jsx)(a.u, {
    text: y,
    children: (0, r.jsx)("div", {
      children: (0, r.jsx)(s.Button, {
        variant: "secondary",
        fullWidth: true,
        icon: ((e, t) => {
          var n, r;
          if ((null == (n = e.userStatus) ? true : n.claimedAt) == null) return {
            type: "rive",
            asset: s.ax1,
            riveProps: {
              withReducedMotion: "play",
              dataBinding: {
                locked: (null == (r = e.userStatus) ? true : r.completedAt) === null,
                fill: i.Z.colors.ICON_STRONG,
                reducedMotion: t
              }
            }
          }
        })(E, S),
        onClick: O,
        text: _,
        disabled: (null == (n = E.userStatus) ? true : n.completedAt) == null
      })
    })
  })
}