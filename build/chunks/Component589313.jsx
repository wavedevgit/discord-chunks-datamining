/** Chunk was on 75909 **/
/** chunk id: 589313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk388032 = require("./388032.jsx");

function p() {
  var e, t, n;
  let {
    quest: p,
    sourceQuestContent: v,
    onClose: E
  } = o.useContext(m.VideoQuestModalContext), g = (0, c.tP)(p), h = null != (0, u.LM)(p.config), C = (0, d.D)({
    quest: p,
    questContent: s.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: v,
    onCloseModal: E,
    shouldShowShopIfAlreadyClaimed: true
  }), S = (null == (e = p.userStatus) ? true : e.claimedAt) != null ? h ? f.intl.string(f.t.WYchde) : f.intl.string(f.t.vTgCWx) : f.intl.string(f.t.cfY4PE), b = (null == (t = p.userStatus) ? true : t.completedAt) == null ? g ? f.intl.string(f.t.NJ6Bnm) : f.intl.string(f.t.USNO1K) : true;
  return (0, r.jsx)(i.u, {
    text: b,
    children: (0, r.jsx)("div", {
      children: (0, r.jsx)(a.Button, {
        variant: "secondary",
        fullWidth: true,
        icon: (e => {
          var t, n;
          if ((null == (t = e.userStatus) ? true : t.claimedAt) == null) return {
            type: "rive",
            asset: a.ax1,
            riveProps: {
              dataBinding: {
                locked: (null == (n = e.userStatus) ? true : n.completedAt) === null,
                fill: l.Z.colors.ICON_STRONG
              }
            }
          }
        })(p),
        onClick: C,
        text: S,
        disabled: (null == (n = p.userStatus) ? true : n.completedAt) == null
      })
    })
  })
}