/** Chunk was on 43157 **/
/** chunk id: 697849, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk41776 = require("./41776.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981888 = require("./981888.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk951539 = require("./951539.js"),
  Chunk376108 = require("./376108.js"),
  Chunk711373 = require("./711373.js"),
  Chunk274311 = require("./274311.js"),
  Chunk954313 = require("./954313.js"),
  Chunk405613 = require("./405613.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk464766 = require("./464766.jsx"),
  Chunk724278 = require("./724278.jsx"),
  Chunk462747 = require("./462747.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484111 = require("./484111.js");

function B(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: r,
    onActionTaken: s,
    recurrenceId: o
  } = e, a = (0, p.xt)(n), d = (0, i.e7)([p.ZP], () => p.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]), u = (0, b.ZP)(n), _ = (0, i.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]), h = (0, Z.T)(null == r ? true : r.id, n.id), f = (0, T.Z)({
    guild: t,
    channel: r,
    guildScheduledEvent: n,
    isActive: a,
    recurrenceId: o,
    onActionTaken: s
  }), x = (0, S.Zs)(function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    isActive: a,
    isUserLurking: _,
    rsvped: d,
    isChannelPublic: h,
    canInvite: u,
    entityType: n.entity_type
  }, f)), g = null != f.onContextMenu ? (0, l.jsx)("div", {
    className: L.leadingAction,
    children: (0, l.jsx)(S.b5, {
      onClick: f.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(c.G, {
    leading: g,
    actions: x
  })
}
let D = e => {
  let {
    guildScheduledEventId: n,
    transitionState: t,
    initialRecurrenceId: c,
    onClose: m
  } = e, {
    analyticsLocations: b
  } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL), [Z, S] = r.useState(c), T = (0, i.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(n), [n]), D = null == T ? true : T.id, F = null == T ? true : T.guild_id, M = (0, i.e7)([x.Z], () => x.Z.getGuild(F), [F]), A = null == T ? true : T.channel_id, z = (0, i.e7)([f.Z], () => f.Z.getChannel(A), [A]), U = (0, h.Dt)(), [G, V] = r.useState(O.fL.EVENT_INFO), X = (0, I.Z)(D, Z), W = (0, N.Z)(F, D, Z), [q, {
    loading: H,
    error: J
  }] = (0, v.Z)(() => j.Z.getGuildEventUsers(null == T ? true : T.id, Z, F));
  r.useEffect(() => {
    null == T ? m() : g.default.track(R.rMx.OPEN_MODAL, {
      type: O.zw,
      guild_id: T.guild_id
    })
  }, [T, m]);
  let K = r.useRef(null),
    [Q, $] = r.useState(680);
  r.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && $(e[0].contentRect.width)
    });
    return null != K.current && e.observe(K.current), () => e.disconnect()
  }, [K]);
  let Y = r.useRef(null),
    [ee, en] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, n;
      let t = 16 * ((null == T ? true : T.recurrence_rule) != null);
      en((null != (n = null == Y || null == (e = Y.current) ? true : e.offsetHeight) ? n : 0) + t)
    }, [Y, null == T ? true : T.recurrence_rule]), null == T || null == M) return null;
  let et = e => {
      e !== G && (e === O.fL.RSVP_LIST && q(), V(e))
    },
    el = null != Z ? Z : (0, y.DK)(T);
  return (0, l.jsx)(_.Gt, {
    value: b,
    children: (0, l.jsxs)(s.IX, {
      transitionState: t,
      size: "lg",
      onClose: m,
      children: [(0, l.jsx)(a.x, {
        title: T.name
      }), (null == T ? true : T.image) != null && (0, l.jsx)(P.Z, {
        source: (0, C.Z)(T),
        className: L.banner
      }), (0, l.jsx)(o.f, {
        controls: (0, l.jsx)(E.Z, {
          selectedTab: G,
          onTabSelected: et,
          userCount: W
        }),
        children: (0, l.jsx)("div", {
          className: L.container,
          ref: K,
          children: (0, l.jsxs)(d.MyZ, {
            activeSlide: G,
            width: Q,
            centered: false,
            children: [(0, l.jsx)(d.Mi4, {
              id: O.fL.EVENT_INFO,
              children: (0, l.jsx)(k.Z, {
                guildEvent: T,
                guild: M,
                channel: z,
                headerId: U,
                onClose: m,
                onClickInterestedCount: () => et(O.fL.RSVP_LIST),
                containerRef: Y,
                recurrenceId: el,
                setRecurrenceId: S
              })
            }), (0, l.jsx)(d.Mi4, {
              id: O.fL.RSVP_LIST,
              children: (0, l.jsx)(w.Z, {
                guildEvent: T,
                recurrenceId: el,
                eventUsers: X,
                loading: H,
                containerHeight: ee,
                error: J
              })
            })]
          })
        })
      }), (0, l.jsx)(B, {
        guildEvent: T,
        guild: M,
        channel: z,
        onActionTaken: m,
        recurrenceId: el
      })]
    })
  })
}