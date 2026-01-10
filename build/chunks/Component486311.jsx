/** Chunk was on 81985 **/
/** chunk id: 486311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  Chunk730164 = require("./730164.js"),
  Chunk441536 = require("./441536.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk556970 = require("./556970.js"),
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

function x(e) {
  let {
    indicator: t
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case f.Ru.WARNING:
      return (0, r.jsx)(s.Mgn, {
        color: s.TVs.colors.STATUS_WARNING,
        size: "sm"
      });
    case f.Ru.UNREAD:
      return (0, r.jsx)(s.mAB, {
        count: t.count,
        color: s.TVs.colors.BACKGROUND_ACCENT.css
      });
    default:
      return null
  }
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
  E = Chunk473749.memo(function(e) {
    let {
      guildId: t,
      selected: l
    } = e, E = (0, h.ZP)(t), S = i.useCallback(() => {
      var e;
      (0, p.jd)(t), (0, g.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == E || null == (e = E.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION)
    }, [t, E]), _ = i.useRef(null), I = (0, s.s9z)(s.JQI), P = (0, o.e7)([d.Z], () => d.Z.hasLayers()), Z = I || P, N = i.useCallback(() => {
      var e;
      if ((null == E ? true : E.popout) == null || Z) return null;
      switch (null == E || null == (e = E.popout) ? true : e.type) {
        case f.Jk.LEVEL_REACHED:
          return (0, r.jsx)(m.jG, j({
            guildId: t,
            channelRowRef: _
          }, E.popout));
        case f.Jk.PERKS_AVAILABLE:
          return (0, r.jsx)(m.$h, j({
            guildId: t,
            channelRowRef: _
          }, E.popout));
        case f.Jk.PERKS_PURCHASABLE:
          return (0, r.jsx)(m.yI, j({
            guildId: t,
            channelRowRef: _
          }, E.popout));
        case f.Jk.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(m.cO, j({
            guildId: t,
            channelRowRef: _
          }, E.popout));
        case f.Jk.GAME_SERVER_HOSTING_AVAILABLE:
        case f.Jk.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(m.dJ, j({
            guildId: t,
            channelRowRef: _
          }, E.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == E ? true : E.popout, _, Z]), [T, A] = i.useState(null);
    i.useEffect(() => {
      (null == E ? true : E.popout) == null && A(null)
    }, [null == E ? true : E.popout]);
    let w = i.useCallback(e => {
      A(e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.m, {
        ref: _,
        className: O.container,
        id: "skill-trees-".concat(t),
        renderIcon: e => (0, r.jsx)(s.Ucv, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        background: (null == E ? true : E.popout) != null && (0, r.jsx)("div", {
          className: O.lottieContainer,
          children: (0, r.jsx)(s.kci, {
            nextScene: null == T ? "animation" : "LOOP",
            className: O.lottie,
            sceneSegments: C,
            importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
            onScenePlay: w,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          })
        }),
        text: (0, r.jsx)("span", {
          className: a()({
            [O.textImportant]: (null == E ? true : E.showUnread) === true
          }),
          children: v.intl.string(y.default.yv3DJJ)
        }),
        selected: l,
        onClick: S,
        showUnread: (null == E ? true : E.showUnread) === true,
        trailing: (0, r.jsx)(x, {
          indicator: null == E ? true : E.indicator
        })
      }), N()]
    })
  })