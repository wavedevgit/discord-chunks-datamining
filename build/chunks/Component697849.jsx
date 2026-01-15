/** Chunk was on 92486 **/
/** chunk id: 697849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
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

function R(e) {
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
}

function L(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: s,
    recurrenceId: c
  } = e, o = (0, j.xt)(t), d = (0, a.e7)([j.ZP], () => j.ZP.isInterestedInEventRecurrence(t.id, c), [c, t]), u = (0, v.ZP)(t), b = (0, a.e7)([f.Z], () => f.Z.isLurking(n.id), [n.id]), x = (0, N.T)(null == r ? true : r.id, t.id), h = (0, k.Z)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: o,
    recurrenceId: c,
    onActionTaken: s
  }), g = (0, y.Zs)(R({
    isActive: o,
    isUserLurking: b,
    rsvped: d,
    isChannelPublic: x,
    canInvite: u,
    entityType: t.entity_type
  }, h)), m = null != h.onContextMenu ? (0, l.jsx)("div", {
    className: T.leadingAction,
    children: (0, l.jsx)(y.b5, {
      onClick: h.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(i.Go$, {
    leading: m,
    actions: g
  })
}
let B = e => {
  let {
    guildScheduledEventId: t,
    transitionState: f,
    initialRecurrenceId: v,
    onClose: N
  } = e, {
    analyticsLocations: y
  } = (0, d.ZP)(o.Z.GUILD_EVENT_MODAL), [k, B] = r.useState(v), D = (0, a.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(t), [t]), F = null == D ? true : D.id, M = null == D ? true : D.guild_id, A = (0, a.e7)([x.Z], () => x.Z.getGuild(M), [M]), U = null == D ? true : D.channel_id, z = (0, a.e7)([b.Z], () => b.Z.getChannel(U), [U]), G = (0, u.Dt)(), [V, H] = r.useState(w.fL.EVENT_INFO), W = (0, _.Z)(F, k), X = null != D ? (0, Z.Z)(D) : null, J = r.useCallback(e => {
    null != X && (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("17992").then(n.bind(n, 153890));
      return t => {
        var n, r;
        return (0, l.jsx)(e, (n = R({}, t), r = r = {
          imageUrl: X
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    })
  }, [X]), K = (0, p.Z)(M, F, k), [$, {
    loading: q,
    error: Q
  }] = (0, g.Z)(() => m.Z.getGuildEventUsers(null == D ? true : D.id, k, M));
  r.useEffect(() => {
    null == D ? N() : h.default.track(E.rMx.OPEN_MODAL, {
      type: w.zw,
      guild_id: D.guild_id
    })
  }, [D, N]);
  let Y = r.useRef(null),
    [ee, et] = r.useState(680);
  r.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && et(e[0].contentRect.width)
    });
    return null != Y.current && e.observe(Y.current), () => e.disconnect()
  }, [Y]);
  let en = r.useRef(null),
    [el, er] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = 16 * ((null == D ? true : D.recurrence_rule) != null);
      er((null != (t = null == en || null == (e = en.current) ? true : e.offsetHeight) ? t : 0) + n)
    }, [en, null == D ? true : D.recurrence_rule]), null == D || null == A) return null;
  let ei = e => {
      e !== V && (e === w.fL.RSVP_LIST && $(), H(e))
    },
    ea = null != k ? k : (0, I.DK)(D);
  return (0, l.jsx)(d.Gt, {
    value: y,
    children: (0, l.jsxs)(i.IX, {
      transitionState: f,
      size: "lg",
      onClose: N,
      children: [(0, l.jsx)(i.xBx, {
        title: D.name
      }), (null == D ? true : D.image) != null && null != X && (0, l.jsx)("div", {
        onContextMenu: J,
        children: (0, l.jsx)(P.Z, {
          source: X,
          className: T.banner
        })
      }), (0, l.jsx)(i.fef, {
        controls: (0, l.jsx)(O.Z, {
          selectedTab: V,
          onTabSelected: ei,
          userCount: K
        }),
        children: (0, l.jsx)("div", {
          className: T.container,
          ref: Y,
          children: (0, l.jsxs)(s.MyZ, {
            activeSlide: V,
            width: ee,
            centered: false,
            children: [(0, l.jsx)(s.Mi4, {
              id: w.fL.EVENT_INFO,
              children: (0, l.jsx)(C.Z, {
                guildEvent: D,
                guild: A,
                channel: z,
                headerId: G,
                onClose: N,
                onClickInterestedCount: () => ei(w.fL.RSVP_LIST),
                containerRef: en,
                recurrenceId: ea,
                setRecurrenceId: B
              })
            }), (0, l.jsx)(s.Mi4, {
              id: w.fL.RSVP_LIST,
              children: (0, l.jsx)(S.Z, {
                guildEvent: D,
                recurrenceId: ea,
                eventUsers: W,
                loading: q,
                containerHeight: el,
                error: Q
              })
            })]
          })
        })
      }), (0, l.jsx)(L, {
        guildEvent: D,
        guild: A,
        channel: z,
        onActionTaken: N,
        recurrenceId: ea
      })]
    })
  })
}