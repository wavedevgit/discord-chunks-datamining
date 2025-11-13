/** Chunk was on 75909 **/
/** chunk id: 589313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  var e, t, n;
  let {
    quest: g,
    sourceQuestContent: E,
    onClose: O
  } = Chunk647438.useContext(Chunk215113.VideoQuestModalContext), {
    enabled: b
  } = Chunk937797.EO.useConfig({
    location: Chunk46140.dr.VIDEO_MODAL
  }), h = (0, Chunk113434.tP)(g), S = null != (0, Chunk509212.LM)(g.config), C = (0, Chunk969227.D)({
    quest: g,
    questContent: Chunk497505.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: E,
    onClick: O,
    shouldShowShopIfAlreadyClaimed: true
  }), y = (null == (e = g.userStatus) ? true : module.claimedAt) != null ? S ? Chunk388032.intl.string(Chunk388032.t.WYchde) : Chunk388032.intl.string(Chunk388032.t.vTgCWx) : Chunk388032.intl.string(Chunk388032.t.cfY4PE), _ = (null == (t = g.userStatus) ? true : exports.completedAt) == null && b ? h ? Chunk388032.intl.string(Chunk388032.t.NJ6Bnm) : Chunk388032.intl.string(Chunk388032.t.USNO1K) : true;
  return (0, Chunk951288.jsx)(Chunk28664.u, {
    text: _,
    children: (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
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
        onClick: C,
        text: y,
        disabled: (null == (n = g.userStatus) ? true : require.completedAt) == null
      })
    })
  })
}