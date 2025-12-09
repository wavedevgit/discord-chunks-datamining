/** Chunk was on 47135 **/
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
  Chunk376108 = require("./376108.js"),
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
  Chunk70092 = require("./70092.js");

function O(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: c,
    recurrenceId: o
  } = e, a = (0, g.xt)(t), u = (0, s.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(t.id, o), [o, t]), _ = (0, v.ZP)(t), f = (0, s.e7)([d.Z], () => d.Z.isLurking(n.id), [n.id]), h = (0, b.T)(null == r ? true : r.id, t.id), m = (0, P.Z)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: a,
    recurrenceId: o,
    onActionTaken: c
  }), x = (0, Z.Zs)(function(e) {
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
    isActive: a,
    isUserLurking: f,
    rsvped: u,
    isChannelPublic: h,
    canInvite: _,
    entityType: t.entity_type
  }, m)), j = null != m.onContextMenu ? (0, l.jsx)("div", {
    className: k.leadingAction,
    children: (0, l.jsx)(Z.b5, {
      onClick: m.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(i.Go$, {
    leading: j,
    actions: x
  })
}
let R = e => {
  let {
    guildScheduledEventId: t,
    transitionState: n,
    initialRecurrenceId: d,
    onClose: v
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(o.Z.GUILD_EVENT_MODAL), [Z, P] = r.useState(d), R = (0, s.e7)([g.ZP], () => g.ZP.getGuildScheduledEvent(t), [t]), L = null == R ? true : R.id, B = null == R ? true : R.guild_id, F = (0, s.e7)([f.Z], () => f.Z.getGuild(B), [B]), D = null == R ? true : R.channel_id, M = (0, s.e7)([_.Z], () => _.Z.getChannel(D), [D]), A = (0, u.Dt)(), [V, z] = r.useState(T.fL.EVENT_INFO), G = (0, p.Z)(L, Z), U = (0, j.Z)(B, L, Z), [X, {
    loading: W,
    error: H
  }] = (0, m.Z)(() => x.Z.getGuildEventUsers(null == R ? true : R.id, Z, B));
  r.useEffect(() => {
    null == R ? v() : h.default.track(w.rMx.OPEN_MODAL, {
      type: T.zw,
      guild_id: R.guild_id
    })
  }, [R, v]);
  let J = r.useRef(null),
    [K, q] = r.useState(680);
  r.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && q(e[0].contentRect.width)
    });
    return null != J.current && e.observe(J.current), () => e.disconnect()
  }, [J]);
  let $ = r.useRef(null),
    [Q, Y] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = 16 * ((null == R ? true : R.recurrence_rule) != null);
      Y((null != (t = null == $ || null == (e = $.current) ? true : e.offsetHeight) ? t : 0) + n)
    }, [$, null == R ? true : R.recurrence_rule]), null == R || null == F) return null;
  let ee = e => {
      e !== V && (e === T.fL.RSVP_LIST && X(), z(e))
    },
    et = null != Z ? Z : (0, N.DK)(R);
  return (0, l.jsx)(a.Gt, {
    value: b,
    children: (0, l.jsxs)(i.IX, {
      transitionState: n,
      size: "lg",
      onClose: v,
      children: [(0, l.jsx)(i.xBx, {
        title: R.name
      }), (null == R ? true : R.image) != null && (0, l.jsx)(y.Z, {
        source: (0, I.Z)(R),
        className: k.banner
      }), (0, l.jsx)(i.fef, {
        controls: (0, l.jsx)(S.Z, {
          selectedTab: V,
          onTabSelected: ee,
          userCount: U
        }),
        children: (0, l.jsx)("div", {
          className: k.container,
          ref: J,
          children: (0, l.jsxs)(c.MyZ, {
            activeSlide: V,
            width: K,
            centered: false,
            children: [(0, l.jsx)(c.Mi4, {
              id: T.fL.EVENT_INFO,
              children: (0, l.jsx)(E.Z, {
                guildEvent: R,
                guild: F,
                channel: M,
                headerId: A,
                onClose: v,
                onClickInterestedCount: () => ee(T.fL.RSVP_LIST),
                containerRef: $,
                recurrenceId: et,
                setRecurrenceId: P
              })
            }), (0, l.jsx)(c.Mi4, {
              id: T.fL.RSVP_LIST,
              children: (0, l.jsx)(C.Z, {
                guildEvent: R,
                recurrenceId: et,
                eventUsers: G,
                loading: W,
                containerHeight: Q,
                error: H
              })
            })]
          })
        })
      }), (0, l.jsx)(O, {
        guildEvent: R,
        guild: F,
        channel: M,
        onActionTaken: v,
        recurrenceId: et
      })]
    })
  })
}