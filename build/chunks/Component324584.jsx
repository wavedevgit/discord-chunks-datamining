/** Chunk was on 77986 **/
/** chunk id: 324584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk857071 = require("./857071.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk645034 = require("./645034.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js"),
  Chunk485394 = require("./485394.js"),
  Chunk826383 = require("./826383.js"),
  Chunk163382 = require("./163382.js"),
  Chunk530209 = require("./530209.js"),
  Chunk974930 = require("./974930.js"),
  Chunk691012 = require("./691012.js"),
  Chunk428978 = require("./428978.jsx"),
  Chunk850183 = require("./850183.jsx"),
  Chunk315960 = require("./315960.jsx"),
  Chunk659242 = require("./659242.jsx"),
  Chunk834991 = require("./834991.jsx"),
  Chunk482857 = require("./482857.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk5818 = require("./5818.js");

function T(e) {
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
    onActionTaken: a,
    recurrenceId: c
  } = e, u = (0, x.Fd)(t), d = (0, s.bG)([x.Ay], () => x.Ay.isInterestedInEventRecurrence(t.id, c), [c, t]), o = (0, p.Ay)(t), g = (0, s.bG)([f.A], () => f.A.isLurking(n.id), [n.id]), b = (0, _.e)(null == r ? true : r.id, t.id), h = (0, S.A)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: u,
    recurrenceId: c,
    onActionTaken: a
  }), v = (0, N.Zq)(T({
    isActive: u,
    isUserLurking: g,
    rsvped: d,
    isChannelPublic: b,
    canInvite: o,
    entityType: t.entity_type
  }, h)), j = null != h.onContextMenu ? (0, l.jsx)("div", {
    className: D.Zv,
    children: (0, l.jsx)(N.jD, {
      onClick: h.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(i.H7u, {
    leading: j,
    actions: v
  })
}
let G = e => {
  let {
    guildScheduledEventId: t,
    transitionState: f,
    initialRecurrenceId: p,
    onClose: _
  } = e, {
    analyticsLocations: N
  } = (0, d.Ay)(u.A.GUILD_EVENT_MODAL), [S, G] = r.useState(p), R = (0, s.bG)([x.Ay], () => x.Ay.getGuildScheduledEvent(t), [t]), U = null == R ? true : R.id, V = null == R ? true : R.guild_id, M = (0, s.bG)([b.A], () => b.A.getGuild(V), [V]), K = null == R ? true : R.channel_id, H = (0, s.bG)([g.A], () => g.A.getChannel(K), [K]), F = (0, o.GV)(), [z, Q] = r.useState(k.al.EVENT_INFO), X = (0, y.A)(U, S), Y = null != R ? (0, O.A)(R) : null, B = r.useCallback(e => {
    null != Y && (0, c.L3)(e, async () => {
      let {
        default: e
      } = await n.e("31658").then(n.bind(n, 151006));
      return t => {
        var n, r;
        return (0, l.jsx)(e, (n = T({}, t), r = r = {
          imageUrl: Y
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
  }, [Y]), Z = (0, m.A)(V, U, S), [q, {
    loading: J,
    error: $
  }] = (0, v.A)(() => j.A.getGuildEventUsers(null == R ? true : R.id, S, V));
  r.useEffect(() => {
    null == R ? _() : h.default.track(w.HAw.OPEN_MODAL, {
      type: k.BV,
      guild_id: R.guild_id
    })
  }, [R, _]);
  let W = r.useRef(null),
    [ee, et] = r.useState(680);
  r.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && et(e[0].contentRect.width)
    });
    return null != W.current && e.observe(W.current), () => e.disconnect()
  }, [W]);
  let en = r.useRef(null),
    [el, er] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = 16 * ((null == R ? true : R.recurrence_rule) != null);
      er((null != (e = null == en || null == (t = en.current) ? true : t.offsetHeight) ? e : 0) + n)
    }, [en, null == R ? true : R.recurrence_rule]), null == R || null == M) return null;
  let ei = e => {
      e !== z && (e === k.al.RSVP_LIST && q(), Q(e))
    },
    es = null != S ? S : (0, A.G3)(R);
  return (0, l.jsx)(d.f5, {
    value: N,
    children: (0, l.jsxs)(i.dWK, {
      transitionState: f,
      size: "lg",
      onClose: _,
      children: [(0, l.jsx)(i.rQ0, {
        title: R.name
      }), (null == R ? true : R.image) != null && null != Y && (0, l.jsx)("div", {
        onContextMenu: B,
        children: (0, l.jsx)(E.A, {
          source: Y,
          className: D.vK
        })
      }), (0, l.jsx)(i.cwr, {
        controls: (0, l.jsx)(C.A, {
          selectedTab: z,
          onTabSelected: ei,
          userCount: Z
        }),
        children: (0, l.jsx)("div", {
          className: D.kL,
          ref: W,
          children: (0, l.jsxs)(a.tN_, {
            activeSlide: z,
            width: ee,
            centered: false,
            children: [(0, l.jsx)(a.q7S, {
              id: k.al.EVENT_INFO,
              children: (0, l.jsx)(P.A, {
                guildEvent: R,
                guild: M,
                channel: H,
                headerId: F,
                onClose: _,
                onClickInterestedCount: () => ei(k.al.RSVP_LIST),
                containerRef: en,
                recurrenceId: es,
                setRecurrenceId: G
              })
            }), (0, l.jsx)(a.q7S, {
              id: k.al.RSVP_LIST,
              children: (0, l.jsx)(I.A, {
                guildEvent: R,
                recurrenceId: es,
                eventUsers: X,
                loading: J,
                containerHeight: el,
                error: $
              })
            })]
          })
        })
      }), (0, l.jsx)(L, {
        guildEvent: R,
        guild: M,
        channel: H,
        onActionTaken: _,
        recurrenceId: es
      })]
    })
  })
}