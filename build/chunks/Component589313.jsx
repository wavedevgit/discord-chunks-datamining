/** Chunk was on 75909 **/
/** chunk id: 589313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function E() {
  var e, t, n, E;
  let {
    quest: g,
    sourceQuestContent: O,
    onClose: h
  } = Chunk473749.useContext(Chunk215113.VideoQuestModalContext), {
    enabled: b
  } = Chunk937797.EO.useConfig({
    location: Chunk324805.dr.VIDEO_MODAL
  }), C = (0, Chunk968843.tP)(g), S = null != (0, Chunk115179.LM)(g.config), _ = (0, Chunk969227.D)({
    quest: g,
    questContent: Chunk49436.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: O,
    onClick: (0, Chunk115179.Bg)(g.config) || (0, Chunk115179.xN)(g.config) && (null == (e = g.userStatus) ? true : module.claimedAt) != null ? h : true,
    shouldShowShopIfAlreadyClaimed: true
  }), y = (null == (t = g.userStatus) ? true : exports.claimedAt) != null ? S ? Chunk388032.intl.string(Chunk388032.t.WYchde) : Chunk388032.intl.string(Chunk388032.t.vTgCWx) : Chunk388032.intl.string(Chunk388032.t.cfY4PE), x = (null == (n = g.userStatus) ? true : require.completedAt) == null && b ? C ? Chunk388032.intl.string(Chunk388032.t.NJ6Bnm) : Chunk388032.intl.string(Chunk388032.t.USNO1K) : true;
  return (0, Chunk54381.jsx)(Chunk28664.u, {
    text: x,
    children: (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: b ? "secondary" : "primary",
        fullWidth: true,
        icon: ((e, t) => {
          var n, r;
          if (t && (null == (n = e.userStatus) ? true : n.claimedAt) == null) return {
            type: "rive",
            asset: a.ax1,
            riveProps: {
              dataBinding: {
                locked: (null == (r = e.userStatus) ? true : r.completedAt) === null,
                fill: l.Z.colors.ICON_PRIMARY
              }
            }
          }
        })(g, b),
        onClick: _,
        text: y,
        disabled: (null == (E = g.userStatus) ? true : E.completedAt) == null
      })
    })
  })
}