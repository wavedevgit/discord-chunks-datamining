/** Chunk was on 98464 **/
/** chunk id: 697849, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk854698 = require("./854698.js"),
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

function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function B(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: l,
    onActionTaken: r,
    recurrenceId: d
  } = e, {
    isActive: o,
    rsvped: s,
    canInvite: c,
    isUserLurking: u,
    isChannelPublic: _,
    footerActions: g
  } = k({
    guildEvent: n,
    guild: t,
    channel: l,
    onActionTaken: r,
    recurrenceId: d
  }), {
    entity_type: p
  } = n, m = (0, D.Zs)(A({
    isActive: o,
    isUserLurking: u,
    rsvped: s,
    isChannelPublic: _,
    canInvite: c,
    entityType: p
  }, g)), f = null != g.onContextMenu ? (0, i.jsx)("div", {
    className: z.leadingAction,
    children: (0, i.jsx)(D.b5, {
      onClick: g.onContextMenu
    })
  }) : true;
  return (0, i.jsx)(a.G, {
    leading: f,
    actions: m
  })
}

function w(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: l,
    onActionTaken: r,
    isMember: d,
    recurrenceId: o
  } = e, {
    isActive: s,
    rsvped: c,
    canInvite: u,
    isUserLurking: _,
    isChannelPublic: g,
    footerActions: p
  } = k({
    guildEvent: n,
    guild: t,
    channel: l,
    onActionTaken: r,
    recurrenceId: o
  }), m = (0, O.u)(A({
    isActive: s,
    isUserLurking: _,
    rsvped: c,
    isMember: d,
    isChannelPublic: g,
    canInvite: u,
    guildName: null == t ? true : t.name,
    isDetailsView: true
  }, p)), f = null != p.onContextMenu ? (0, i.jsx)("div", {
    className: z.leadingAction,
    children: (0, i.jsx)(D.b5, {
      onClick: p.onContextMenu
    })
  }) : true;
  return (0, i.jsx)(a.G, {
    leading: f,
    actions: m
  })
}

function k(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: i,
    onActionTaken: l,
    recurrenceId: d
  } = e, a = (0, E.xt)(n), o = (0, r.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n.id, d), [d, n]), s = (0, b.ZP)(n), c = (0, r.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]), u = (0, x.T)(null == i ? true : i.id, n.id), _ = (0, Z.Z)({
    guild: t,
    channel: i,
    guildScheduledEvent: n,
    isActive: a,
    recurrenceId: d,
    onActionTaken: l
  });
  return {
    isActive: a,
    rsvped: o,
    canInvite: s,
    isUserLurking: c,
    isChannelPublic: u,
    footerActions: _
  }
}
let H = e => {
  let {
    guildScheduledEventId: n,
    parentGuildId: t,
    transitionState: a,
    initialRecurrenceId: m,
    onClose: b
  } = e, {
    analyticsLocations: x
  } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL), [D, O] = l.useState(m), Z = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(n), [n]), A = null == Z ? true : Z.id, k = null == Z ? true : Z.guild_id, {
    guild: H,
    isMember: M
  } = (0, C.Z)(k, A), X = (0, p.Z)(t), V = null == Z ? true : Z.channel_id, F = (0, r.e7)([f.Z], () => f.Z.getChannel(V), [V]), Y = (0, g.Dt)(), [W, q] = l.useState(P.fL.EVENT_INFO), J = (0, y.Z)(A, D), K = (0, T.Z)(k, A, D), [Q, {
    loading: $,
    error: ee
  }] = (0, v.Z)(() => h.Z.getGuildEventUsers(null == Z ? true : Z.id, D, k));
  l.useEffect(() => {
    null == Z ? b() : I.default.track(R.rMx.OPEN_MODAL, {
      type: P.zw,
      guild_id: Z.guild_id
    })
  }, [Z, b]);
  let en = l.useRef(null),
    [et, ei] = l.useState(680);
  l.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && ei(e[0].contentRect.width)
    });
    return null != en.current && e.observe(en.current), () => e.disconnect()
  }, [en]);
  let el = l.useRef(null),
    [er, ed] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, n;
      let t = 16 * ((null == Z ? true : Z.recurrence_rule) != null);
      ed((null != (n = null == el || null == (e = el.current) ? true : e.offsetHeight) ? n : 0) + t)
    }, [el, null == Z ? true : Z.recurrence_rule]), null == Z || null == H || !M && !X) return null;
  let ea = e => {
      e !== W && (e === P.fL.RSVP_LIST && Q(), q(e))
    },
    eo = null != D ? D : (0, L.DK)(Z);
  return (0, i.jsx)(_.Gt, {
    value: x,
    children: (0, i.jsxs)(d.I, {
      transitionState: a,
      size: "lg",
      onClose: b,
      children: [(0, i.jsx)(s.x, {
        title: Z.name
      }), (null == Z ? true : Z.image) != null && (0, i.jsx)(j.Z, {
        source: (0, S.Z)(Z),
        className: z.banner
      }), (0, i.jsx)(o.f, {
        controls: (0, i.jsx)(U.Z, {
          selectedTab: W,
          onTabSelected: ea,
          userCount: K,
          isHub: X
        }),
        children: (0, i.jsx)("div", {
          className: z.container,
          ref: en,
          children: (0, i.jsxs)(c.MyZ, {
            activeSlide: W,
            width: et,
            centered: false,
            children: [(0, i.jsx)(c.Mi4, {
              id: P.fL.EVENT_INFO,
              children: (0, i.jsx)(N.Z, {
                guildEvent: Z,
                guild: H,
                channel: F,
                headerId: Y,
                onClose: b,
                onClickInterestedCount: () => ea(P.fL.RSVP_LIST),
                isHub: X,
                containerRef: el,
                recurrenceId: eo,
                setRecurrenceId: O
              })
            }), (0, i.jsx)(c.Mi4, {
              id: P.fL.RSVP_LIST,
              children: (0, i.jsx)(G.Z, {
                guildEvent: Z,
                recurrenceId: eo,
                eventUsers: J,
                loading: $,
                containerHeight: er,
                error: ee
              })
            })]
          })
        })
      }), X ? (0, i.jsx)(w, {
        guildEvent: Z,
        isMember: M,
        guild: H,
        channel: F,
        onActionTaken: b,
        recurrenceId: eo
      }) : (0, i.jsx)(B, {
        guildEvent: Z,
        guild: H,
        channel: F,
        onActionTaken: b,
        recurrenceId: eo
      })]
    })
  })
}