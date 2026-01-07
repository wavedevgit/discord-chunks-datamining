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
  } = o.useContext(f.VideoQuestModalContext), {
    enabled: C
  } = c.EO.useConfig({
    location: p.dr.VIDEO_MODAL
  }), b = (0, u.tP)(g), S = null != (0, d.LM)(g.config), _ = (0, m.D)({
    quest: g,
    questContent: s.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: O,
    onClick: (0, d.Bg)(g.config) || (0, d.xN)(g.config) && (null == (e = g.userStatus) ? true : e.claimedAt) != null ? h : true,
    shouldShowShopIfAlreadyClaimed: true
  }), y = (null == (t = g.userStatus) ? true : t.claimedAt) != null ? S ? v.intl.string(v.t.WYchde) : v.intl.string(v.t.vTgCWx) : v.intl.string(v.t.cfY4PE), x = (null == (n = g.userStatus) ? true : n.completedAt) == null && C ? b ? v.intl.string(v.t.NJ6Bnm) : v.intl.string(v.t.USNO1K) : true;
  return (0, r.jsx)(i.u, {
    text: x,
    children: (0, r.jsx)("div", {
      children: (0, r.jsx)(a.Button, {
        variant: C ? "secondary" : "primary",
        fullWidth: true,
        icon: ((e, t) => {
          var n, r;
          if (t && (null == (n = e.userStatus) ? true : n.claimedAt) == null) return {
            type: "rive",
            asset: a.ax1,
            riveProps: {
              dataBinding: {
                locked: (null == (r = e.userStatus) ? true : r.completedAt) === null,
                fill: l.Z.colors.ICON_STRONG
              }
            }
          }
        })(g, C),
        onClick: _,
        text: y,
        disabled: (null == (E = g.userStatus) ? true : E.completedAt) == null
      })
    })
  })
}