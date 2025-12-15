/** Chunk was on 92486 **/
/** chunk id: 697849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk315416 = require("./315416.js"),
  Chunk711373 = require("./711373.js"),
  Chunk274311 = require("./274311.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk464766 = require("./464766.jsx"),
  Chunk724278 = require("./724278.jsx"),
  Chunk462747 = require("./462747.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk209442 = require("./209442.js");

function T(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: s,
    recurrenceId: c
  } = e, o = (0, m.xt)(t), d = (0, a.e7)([m.ZP], () => m.ZP.isInterestedInEventRecurrence(t.id, c), [c, t]), f = (0, v.ZP)(t), b = (0, a.e7)([u.Z], () => u.Z.isLurking(n.id), [n.id]), x = (0, p.T)(null == r ? true : r.id, t.id), h = (0, k.Z)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: o,
    recurrenceId: c,
    onActionTaken: s
  }), g = (0, Z.Zs)(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    isActive: o,
    isUserLurking: b,
    rsvped: d,
    isChannelPublic: x,
    canInvite: f,
    entityType: t.entity_type
  }, h)), j = null != h.onContextMenu ? (0, l.jsx)("div", {
    className: O.leadingAction,
    children: (0, l.jsx)(Z.b5, {
      onClick: h.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(i.Go$, {
    leading: j,
    actions: g
  })
}
let R = e => {
  let {
    guildScheduledEventId: t,
    transitionState: n,
    initialRecurrenceId: u,
    onClose: v
  } = e, {
    analyticsLocations: p
  } = (0, o.ZP)(c.Z.GUILD_EVENT_MODAL), [Z, k] = r.useState(u), R = (0, a.e7)([m.ZP], () => m.ZP.getGuildScheduledEvent(t), [t]), L = null == R ? true : R.id, B = null == R ? true : R.guild_id, D = (0, a.e7)([b.Z], () => b.Z.getGuild(B), [B]), F = null == R ? true : R.channel_id, M = (0, a.e7)([f.Z], () => f.Z.getChannel(F), [F]), A = (0, d.Dt)(), [z, U] = r.useState(E.fL.EVENT_INFO), G = (0, _.Z)(L, Z), V = (0, j.Z)(B, L, Z), [H, {
    loading: W,
    error: X
  }] = (0, h.Z)(() => g.Z.getGuildEventUsers(null == R ? true : R.id, Z, B));
  r.useEffect(() => {
    null == R ? v() : x.default.track(w.rMx.OPEN_MODAL, {
      type: E.zw,
      guild_id: R.guild_id
    })
  }, [R, v]);
  let J = r.useRef(null),
    [K, $] = r.useState(680);
  r.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && $(e[0].contentRect.width)
    });
    return null != J.current && e.observe(J.current), () => e.disconnect()
  }, [J]);
  let q = r.useRef(null),
    [Q, Y] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = 16 * ((null == R ? true : R.recurrence_rule) != null);
      Y((null != (t = null == q || null == (e = q.current) ? true : e.offsetHeight) ? t : 0) + n)
    }, [q, null == R ? true : R.recurrence_rule]), null == R || null == D) return null;
  let ee = e => {
      e !== z && (e === E.fL.RSVP_LIST && H(), U(e))
    },
    et = null != Z ? Z : (0, N.DK)(R);
  return (0, l.jsx)(o.Gt, {
    value: p,
    children: (0, l.jsxs)(i.IX, {
      transitionState: n,
      size: "lg",
      onClose: v,
      children: [(0, l.jsx)(i.xBx, {
        title: R.name
      }), (null == R ? true : R.image) != null && (0, l.jsx)(C.Z, {
        source: (0, I.Z)(R),
        className: O.banner
      }), (0, l.jsx)(i.fef, {
        controls: (0, l.jsx)(S.Z, {
          selectedTab: z,
          onTabSelected: ee,
          userCount: V
        }),
        children: (0, l.jsx)("div", {
          className: O.container,
          ref: J,
          children: (0, l.jsxs)(s.MyZ, {
            activeSlide: z,
            width: K,
            centered: false,
            children: [(0, l.jsx)(s.Mi4, {
              id: E.fL.EVENT_INFO,
              children: (0, l.jsx)(y.Z, {
                guildEvent: R,
                guild: D,
                channel: M,
                headerId: A,
                onClose: v,
                onClickInterestedCount: () => ee(E.fL.RSVP_LIST),
                containerRef: q,
                recurrenceId: et,
                setRecurrenceId: k
              })
            }), (0, l.jsx)(s.Mi4, {
              id: E.fL.RSVP_LIST,
              children: (0, l.jsx)(P.Z, {
                guildEvent: R,
                recurrenceId: et,
                eventUsers: G,
                loading: W,
                containerHeight: Q,
                error: X
              })
            })]
          })
        })
      }), (0, l.jsx)(T, {
        guildEvent: R,
        guild: D,
        channel: M,
        onActionTaken: v,
        recurrenceId: et
      })]
    })
  })
}