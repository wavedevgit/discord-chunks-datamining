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
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk115179 = require("./115179.js"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function E() {
  var e, t, n;
  let {
    quest: E,
    sourceQuestContent: g,
    onClose: O
  } = Chunk473749.useContext(Chunk215113.VideoQuestModalContext), {
    enabled: h
  } = Chunk937797.EO.useConfig({
    location: Chunk324805.dr.VIDEO_MODAL
  }), b = (0, Chunk313481.tP)(E), C = null != (0, Chunk115179.LM)(E.config), S = (0, Chunk969227.D)({
    quest: E,
    questContent: Chunk49436.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: g,
    onClick: O,
    shouldShowShopIfAlreadyClaimed: true
  }), _ = (null == (e = E.userStatus) ? true : module.claimedAt) != null ? C ? Chunk388032.intl.string(Chunk388032.t.WYchde) : Chunk388032.intl.string(Chunk388032.t.vTgCWx) : Chunk388032.intl.string(Chunk388032.t.cfY4PE), y = (null == (t = E.userStatus) ? true : exports.completedAt) == null && h ? b ? Chunk388032.intl.string(Chunk388032.t.NJ6Bnm) : Chunk388032.intl.string(Chunk388032.t.USNO1K) : true;
  return (0, Chunk54381.jsx)(Chunk28664.u, {
    text: y,
    children: (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: h ? "secondary" : "primary",
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
        })(E, h),
        onClick: S,
        text: _,
        disabled: (null == (n = E.userStatus) ? true : require.completedAt) == null
      })
    })
  })
}