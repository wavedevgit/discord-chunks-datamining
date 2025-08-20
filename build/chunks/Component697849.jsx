/** Chunk was on 25046 **/
/** chunk id: 697849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
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
  Chunk724912 = require("./724912.js"),
  Chunk41776 = require("./41776.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981888 = require("./981888.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk951539 = require("./951539.js"),
  Chunk592126 = require("./592126.js"),
  Chunk376108 = require("./376108.js"),
  Chunk711373 = require("./711373.js"),
  Chunk274311 = require("./274311.js"),
  Chunk954313 = require("./954313.js"),
  Chunk405613 = require("./405613.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk187443 = require("./187443.js"),
  Chunk464766 = require("./464766.jsx"),
  Chunk724278 = require("./724278.jsx"),
  Chunk462747 = require("./462747.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70092 = require("./70092.js");

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function w(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: r,
    recurrenceId: a
  } = e, {
    isActive: s,
    rsvped: o,
    canInvite: c,
    isUserLurking: u,
    isChannelPublic: _,
    footerActions: g
  } = k({
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: r,
    recurrenceId: a
  }), {
    entity_type: p
  } = t, m = (0, O.Zs)(z({
    isActive: s,
    isUserLurking: u,
    rsvped: o,
    isChannelPublic: _,
    canInvite: c,
    entityType: p
  }, g)), I = null != g.onContextMenu ? (0, i.jsx)("div", {
    className: R.leadingAction,
    children: (0, i.jsx)(O.b5, {
      onClick: g.onContextMenu
    })
  }) : true;
  return (0, i.jsx)(d.G, {
    leading: I,
    actions: m
  })
}

function H(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: r,
    isMember: a,
    recurrenceId: s
  } = e, {
    isActive: o,
    rsvped: c,
    canInvite: u,
    isUserLurking: _,
    isChannelPublic: g,
    footerActions: p
  } = k({
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: r,
    recurrenceId: s
  }), m = (0, U.u)(z({
    isActive: o,
    isUserLurking: _,
    rsvped: c,
    isMember: a,
    isChannelPublic: g,
    canInvite: u,
    guildName: null == n ? true : n.name,
    isDetailsView: true
  }, p)), I = null != p.onContextMenu ? (0, i.jsx)("div", {
    className: R.leadingAction,
    children: (0, i.jsx)(O.b5, {
      onClick: p.onContextMenu
    })
  }) : true;
  return (0, i.jsx)(d.G, {
    leading: I,
    actions: m
  })
}

function k(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: i,
    onActionTaken: l,
    recurrenceId: a
  } = e, d = (0, v.xt)(t), s = (0, r.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(t.id, a), [a, t]), o = (0, T.ZP)(t), c = (0, r.e7)([m.Z], () => m.Z.isLurking(n.id), [n.id]), u = (0, L.T)(null == i ? true : i.id, t.id), _ = (0, Z.Z)({
    guild: n,
    channel: i,
    guildScheduledEvent: t,
    isActive: d,
    recurrenceId: a,
    onActionTaken: l
  });
  return {
    isActive: d,
    rsvped: s,
    canInvite: o,
    isUserLurking: c,
    isChannelPublic: u,
    footerActions: _
  }
}
let B = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: d,
    initialRecurrenceId: m,
    onClose: T
  } = e, {
    analyticsLocations: L
  } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL), [O, U] = l.useState(m), Z = (0, r.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(t), [t]), z = null == Z ? true : Z.id, k = null == Z ? true : Z.guild_id, {
    guild: B,
    isMember: M
  } = (0, y.Z)(k, z), X = (0, p.Z)(n), V = null == Z ? true : Z.channel_id, Y = (0, r.e7)([I.Z], () => I.Z.getChannel(V), [V]), F = (0, g.Dt)(), [q, K] = l.useState(P.fL.EVENT_INFO), W = (0, x.Z)(z, O), J = (0, C.Z)(k, z, O), [Q, {
    loading: $,
    error: ee
  }] = (0, f.Z)(() => h.Z.getGuildEventUsers(null == Z ? true : Z.id, O, k));
  l.useEffect(() => {
    null == Z ? T() : E.default.track(A.rMx.OPEN_MODAL, {
      type: P.zw,
      guild_id: Z.guild_id
    })
  }, [Z, T]);
  let et = l.useRef(null),
    [en, ei] = l.useState(680);
  l.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && ei(e[0].contentRect.width)
    });
    return null != et.current && e.observe(et.current), () => e.disconnect()
  }, [et]);
  let el = l.useRef(null),
    [er, ea] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = 16 * ((null == Z ? true : Z.recurrence_rule) != null);
      ea((null != (t = null == el || null == (e = el.current) ? true : e.offsetHeight) ? t : 0) + n)
    }, [el, null == Z ? true : Z.recurrence_rule]), null == Z || null == B || !M && !X) return null;
  let ed = e => {
      e !== q && (e === P.fL.RSVP_LIST && Q(), K(e))
    },
    es = null != O ? O : (0, j.DK)(Z);
  return (0, i.jsx)(_.Gt, {
    value: L,
    children: (0, i.jsxs)(a.I, {
      transitionState: d,
      size: "lg",
      onClose: T,
      children: [(0, i.jsx)(o.x, {
        title: Z.name
      }), (null == Z ? true : Z.image) != null && (0, i.jsx)(S.Z, {
        source: (0, b.Z)(Z),
        className: R.banner
      }), (0, i.jsx)(s.f, {
        controls: (0, i.jsx)(D.Z, {
          selectedTab: q,
          onTabSelected: ed,
          userCount: J,
          isHub: X
        }),
        children: (0, i.jsx)("div", {
          className: R.container,
          ref: et,
          children: (0, i.jsxs)(c.MyZ, {
            activeSlide: q,
            width: en,
            centered: false,
            children: [(0, i.jsx)(c.Mi4, {
              id: P.fL.EVENT_INFO,
              children: (0, i.jsx)(G.Z, {
                guildEvent: Z,
                guild: B,
                channel: Y,
                headerId: F,
                onClose: T,
                onClickInterestedCount: () => ed(P.fL.RSVP_LIST),
                isHub: X,
                containerRef: el,
                recurrenceId: es,
                setRecurrenceId: U
              })
            }), (0, i.jsx)(c.Mi4, {
              id: P.fL.RSVP_LIST,
              children: (0, i.jsx)(N.Z, {
                guildEvent: Z,
                recurrenceId: es,
                eventUsers: W,
                loading: $,
                containerHeight: er,
                error: ee
              })
            })]
          })
        })
      }), X ? (0, i.jsx)(H, {
        guildEvent: Z,
        isMember: M,
        guild: B,
        channel: Y,
        onActionTaken: T,
        recurrenceId: es
      }) : (0, i.jsx)(w, {
        guildEvent: Z,
        guild: B,
        channel: Y,
        onActionTaken: T,
        recurrenceId: es
      })]
    })
  })
}