/** Chunk was on 46467 **/
/** chunk id: 486311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk713081 = require("./713081.js"),
  Chunk326660 = require("./326660.js"),
  Chunk441536 = require("./441536.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk332538 = require("./332538.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk810878 = require("./810878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969649 = require("./969649.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let j = {
    animation: {
      BEG: 0,
      END: 75
    },
    LOOP: {
      BEG: 76,
      END: 376
    }
  },
  x = Chunk473749.memo(function(e) {
    let {
      guildId: t,
      selected: l
    } = e, x = (0, m.ZP)(t), C = i.useCallback(() => {
      var e;
      (0, f.jd)(t), (0, p.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == x || null == (e = x.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION)
    }, [t, x]), E = i.useRef(null), S = (0, s.s9z)(s.JQI), I = (0, a.e7)([d.Z], () => d.Z.hasLayers()), P = S || I, N = i.useCallback(() => {
      var e;
      if ((null == x ? true : x.popout) == null || P) return null;
      switch (null == x || null == (e = x.popout) ? true : e.type) {
        case h.J.LEVEL_REACHED:
          return (0, r.jsx)(g.jG, v({
            guildId: t,
            channelRowRef: E
          }, x.popout));
        case h.J.PERKS_AVAILABLE:
          return (0, r.jsx)(g.$h, v({
            guildId: t,
            channelRowRef: E
          }, x.popout));
        case h.J.PERKS_PURCHASABLE:
          return (0, r.jsx)(g.yI, v({
            guildId: t,
            channelRowRef: E
          }, x.popout));
        case h.J.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(g.cO, v({
            guildId: t,
            channelRowRef: E
          }, x.popout));
        case h.J.GAME_SERVER_HOSTING_AVAILABLE:
        case h.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(g.dJ, v({
            guildId: t,
            channelRowRef: E
          }, x.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == x ? true : x.popout, E, P]), [Z, w] = i.useState(null);
    i.useEffect(() => {
      (null == x ? true : x.popout) == null && w(null)
    }, [null == x ? true : x.popout]);
    let T = i.useCallback(e => {
      w(e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.m, {
        ref: E,
        className: O.container,
        id: "skill-trees-".concat(t),
        renderIcon: e => (0, r.jsx)(s.Ucv, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        background: (null == x ? true : x.popout) != null && (0, r.jsx)("div", {
          className: O.lottieContainer,
          children: (0, r.jsx)(s.kci, {
            nextScene: null == Z ? "animation" : "LOOP",
            className: O.lottie,
            sceneSegments: j,
            importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
            onScenePlay: T,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          })
        }),
        text: (0, r.jsx)("span", {
          className: o()({
            [O.textImportant]: (null == x ? true : x.showUnread) === true
          }),
          children: y.intl.string(_.default.yv3DJJ)
        }),
        selected: l,
        onClick: C,
        showUnread: (null == x ? true : x.showUnread) === true,
        trailing: null == x ? true : x.trailing
      }), N()]
    })
  })