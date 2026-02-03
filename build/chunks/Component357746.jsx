/** Chunk was on 44669 **/
/** chunk id: 357746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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
let _ = {
    animation: {
      BEG: 0,
      END: 75
    },
    LOOP: {
      BEG: 76,
      END: 376
    }
  },
  v = Chunk64700.memo(function(e) {
    let {
      guildId: t,
      selected: i
    } = e, v = (0, g.Ay)(t), E = l.useCallback(() => {
      var e;
      (0, p.Zm)(t), (0, f.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == v || null == (e = v.popout) || e.markAsDismissed(b.i.INDIRECT_ACTION)
    }, [t, v]), C = l.useRef(null), S = (0, o.red)(o.DXt), I = (0, a.bG)([d.A], () => d.A.hasLayers()), N = S || I, T = l.useCallback(() => {
      var e;
      if ((null == v ? true : v.popout) == null || N) return null;
      switch (null == v || null == (e = v.popout) ? true : e.type) {
        case h.o.LEVEL_REACHED:
          return (0, r.jsx)(m.HW, j({
            guildId: t,
            channelRowRef: C
          }, v.popout));
        case h.o.PERKS_AVAILABLE:
          return (0, r.jsx)(m.UB, j({
            guildId: t,
            channelRowRef: C
          }, v.popout));
        case h.o.PERKS_PURCHASABLE:
          return (0, r.jsx)(m.lw, j({
            guildId: t,
            channelRowRef: C
          }, v.popout));
        case h.o.NEW_PERK_AVAILABLE:
          return (0, r.jsx)(m.bo, j({
            guildId: t,
            channelRowRef: C
          }, v.popout));
        case h.o.GAME_SERVER_HOSTING_AVAILABLE:
        case h.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
          return (0, r.jsx)(m.jz, j({
            guildId: t,
            channelRowRef: C
          }, v.popout));
        default:
          return (0, r.jsx)("div", {})
      }
    }, [t, null == v ? true : v.popout, C, N]), [P, w] = l.useState(null);
    l.useEffect(() => {
      (null == v ? true : v.popout) == null && w(null)
    }, [null == v ? true : v.popout]);
    let R = l.useCallback(e => {
      w(e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.G, {
        ref: C,
        className: O.kL,
        id: "skill-trees-".concat(t),
        renderIcon: e => (0, r.jsx)(o._Jp, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        background: (null == v ? true : v.popout) != null && (0, r.jsx)("div", {
          className: O.Fi,
          children: (0, r.jsx)(o.tvC, {
            nextScene: null == P ? "animation" : "LOOP",
            className: O.UU,
            sceneSegments: _,
            importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
            onScenePlay: R,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          })
        }),
        text: (0, r.jsx)("span", {
          className: s()({
            [O.A7]: (null == v ? true : v.showUnread) === true
          }),
          children: y.intl.string(A.default.yv3DJJ)
        }),
        selected: i,
        onClick: E,
        showUnread: (null == v ? true : v.showUnread) === true,
        trailing: (0, r.jsx)(x, {
          indicator: null == v ? true : v.indicator
        })
      }), T()]
    })
  })