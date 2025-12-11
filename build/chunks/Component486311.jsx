/** Chunk was on 82477 **/
/** chunk id: 486311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk243171 = require("./243171.js");

function j(e) {
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
let C = {
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
    } = e, x = (0, b.ZP)(t), E = i.useCallback(() => {
      var e;
      (0, f.jd)(t), (0, p.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == x || null == (e = x.popout) || e.markAsDismissed(m.L.INDIRECT_ACTION)
    }, [t, x]), S = i.useRef(null), I = (0, s.s9z)(s.JQI), _ = (0, o.e7)([d.Z], () => d.Z.hasLayers()), P = I || _, N = i.useCallback(() => {
      var e;
      if ((null == x ? true : x.popout) == null || P) return null;
      switch (null == x || null == (e = x.popout) ? true : e.type) {
        case h.J.LEVEL_REACHED:
          return (0, r.jsx)(g.jG, j({
            guildId: t,
            channelRowRef: S
          }, x.popout));
        case h.J.PERKS_AVAILABLE:
          return (0, r.jsx)(g.$h, j({
            guildId: t,
            channelRowRef: S
          }, x.popout));
        case h.J.PERKS_PURCHASABLE:
          return (0, r.jsx)(g.yI, j({
            guildId: t,
            channelRowRef: S
          }, x.popout));
        case h.J.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(g.cO, j({
            guildId: t,
            channelRowRef: S
          }, x.popout));
        case h.J.GAME_SERVER_HOSTING_AVAILABLE:
        case h.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(g.dJ, j({
            guildId: t,
            channelRowRef: S
          }, x.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == x ? true : x.popout, S, P]), [Z, w] = i.useState(null);
    i.useEffect(() => {
      (null == x ? true : x.popout) == null && w(null)
    }, [null == x ? true : x.popout]);
    let T = i.useCallback(e => {
      w(e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.m, {
        ref: S,
        className: v.container,
        id: "skill-trees-".concat(t),
        renderIcon: e => (0, r.jsx)(s.Ucv, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        background: (null == x ? true : x.popout) != null && (0, r.jsx)("div", {
          className: v.lottieContainer,
          children: (0, r.jsx)(s.kci, {
            nextScene: null == Z ? "animation" : "LOOP",
            className: v.lottie,
            sceneSegments: C,
            importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
            onScenePlay: T,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          })
        }),
        text: (0, r.jsx)("span", {
          className: a()({
            [v.textImportant]: (null == x ? true : x.showUnread) === true
          }),
          children: O.intl.string(y.default.yv3DJJ)
        }),
        selected: l,
        onClick: E,
        showUnread: (null == x ? true : x.showUnread) === true,
        trailing: null == x ? true : x.trailing
      }), N()]
    })
  })