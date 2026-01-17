/** Chunk was on 75909 **/
/** chunk id: 589313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g() {
  var e, t, n;
  let {
    quest: g,
    sourceQuestContent: E,
    onClose: h
  } = o.useContext(p.VideoQuestModalContext), C = (0, d.tP)(g), b = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), S = null != (0, m.LM)(g.config), O = (0, f.D)({
    quest: g,
    questContent: u.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: E,
    onCloseModal: h,
    shouldShowShopIfAlreadyClaimed: true
  }), _ = (null == (e = g.userStatus) ? true : e.claimedAt) != null ? S ? v.intl.string(v.t.WYchde) : v.intl.string(v.t.vTgCWx) : v.intl.string(v.t.cfY4PE), x = (null == (t = g.userStatus) ? true : t.completedAt) == null ? C ? v.intl.string(v.t.NJ6Bnm) : v.intl.string(v.t.USNO1K) : true;
  return (0, r.jsx)(a.u, {
    text: x,
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
        })(g, b),
        onClick: O,
        text: _,
        disabled: (null == (n = g.userStatus) ? true : n.completedAt) == null
      })
    })
  })
}