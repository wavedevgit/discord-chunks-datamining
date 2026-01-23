/** Chunk was on 97492 **/
/** chunk id: 357746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk942975 = require("./942975.js"),
  Chunk379229 = require("./379229.js"),
  Chunk489306 = require("./489306.js"),
  Chunk828162 = require("./828162.js"),
  Chunk249584 = require("./249584.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk408392 = require("./408392.js");

function O(e) {
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

function j(e) {
  let {
    indicator: t
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case h.cD.WARNING:
      return (0, r.jsx)(o.EpV, {
        color: o.LU0.colors.STATUS_WARNING,
        size: "sm"
      });
    case h.cD.UNREAD:
      return (0, r.jsx)(o.hVq, {
        count: t.count,
        color: o.LU0.colors.BACKGROUND_MOD_STRONG.css
      });
    default:
      return null
  }
}
let v = {
    animation: {
      BEG: 0,
      END: 75
    },
    LOOP: {
      BEG: 76,
      END: 376
    }
  },
  x = Chunk64700.memo(function(e) {
    let {
      guildId: t,
      selected: i
    } = e, x = (0, f.Ay)(t), E = l.useCallback(() => {
      var e;
      (0, p.Zm)(t), (0, g.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == x || null == (e = x.popout) || e.markAsDismissed(b.i.INDIRECT_ACTION)
    }, [t, x]), C = l.useRef(null), S = (0, o.red)(o.DXt), I = (0, a.bG)([d.A], () => d.A.hasLayers()), N = S || I, T = l.useCallback(() => {
      var e;
      if ((null == x ? true : x.popout) == null || N) return null;
      switch (null == x || null == (e = x.popout) ? true : e.type) {
        case h.o.LEVEL_REACHED:
          return (0, r.jsx)(m.HW, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        case h.o.PERKS_AVAILABLE:
          return (0, r.jsx)(m.UB, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        case h.o.PERKS_PURCHASABLE:
          return (0, r.jsx)(m.lw, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        case h.o.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(m.bo, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        case h.o.GAME_SERVER_HOSTING_AVAILABLE:
        case h.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(m.jz, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        case h.o.GAME_SERVER_NEW_GAMES:
          return (0, r.jsx)(m.YX, O({
            guildId: t,
            channelRowRef: C
          }, x.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == x ? true : x.popout, C, N]), [P, w] = l.useState(null);
    l.useEffect(() => {
      (null == x ? true : x.popout) == null && w(null)
    }, [null == x ? true : x.popout]);
    let R = l.useCallback(e => {
      w(e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.G, {
        ref: C,
        className: _.kL,
        id: "skill-trees-".concat(t),
        renderIcon: e => (0, r.jsx)(o._Jp, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        background: (null == x ? true : x.popout) != null && (0, r.jsx)("div", {
          className: _.Fi,
          children: (0, r.jsx)(o.tvC, {
            nextScene: null == P ? "animation" : "LOOP",
            className: _.UU,
            sceneSegments: v,
            importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
            onScenePlay: R,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          })
        }),
        text: (0, r.jsx)("span", {
          className: s()({
            [_.A7]: (null == x ? true : x.showUnread) === true
          }),
          children: y.intl.string(A.default.yv3DJJ)
        }),
        selected: i,
        onClick: E,
        showUnread: (null == x ? true : x.showUnread) === true,
        trailing: (0, r.jsx)(j, {
          indicator: null == x ? true : x.indicator
        })
      }), T()]
    })
  })