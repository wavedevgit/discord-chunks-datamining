/** Chunk was on 77986 **/
/** chunk id: 324584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
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

function D(e) {
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
  } = e, d = (0, v.Fd)(t), u = (0, i.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(t.id, c), [c, t]), o = (0, m.Ay)(t), b = (0, i.bG)([f.A], () => f.A.isLurking(n.id), [n.id]), x = (0, y.e)(null == r ? true : r.id, t.id), h = (0, E.A)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: d,
    recurrenceId: c,
    onActionTaken: a
  }), g = (0, O.Zq)(D({
    isActive: d,
    isUserLurking: b,
    rsvped: u,
    isChannelPublic: x,
    canInvite: o,
    entityType: t.entity_type
  }, h)), j = null != h.onContextMenu ? (0, l.jsx)("div", {
    className: T.Zv,
    children: (0, l.jsx)(O.jD, {
      onClick: h.onContextMenu
    })
  }) : true;
  return (0, l.jsx)(s.H7u, {
    leading: j,
    actions: g
  })
}
let R = e => {
  let {
    guildScheduledEventId: t,
    transitionState: f,
    initialRecurrenceId: m,
    onClose: y
  } = e, {
    analyticsLocations: O
  } = (0, u.Ay)(d.A.GUILD_EVENT_MODAL), [E, R] = r.useState(m), U = (0, i.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(t), [t]), G = null == U ? true : U.id, M = null == U ? true : U.guild_id, F = (0, i.bG)([x.A], () => x.A.getGuild(M), [M]), K = null == U ? true : U.channel_id, V = (0, i.bG)([b.A], () => b.A.getChannel(K), [K]), H = (0, o.GV)(), [z, Q] = r.useState(w.al.EVENT_INFO), Y = (0, p.A)(G, E), X = null != U ? (0, N.A)(U) : null, $ = r.useCallback(e => {
    null != X && (0, c.L3)(e, async () => {
      let {
        default: e
      } = await n.e("31658").then(n.bind(n, 151006));
      return t => {
        var n, r;
        return (0, l.jsx)(e, (n = D({}, t), r = r = {
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
  }, [X]), q = (0, _.A)(M, G, E), [Z, {
    loading: B,
    error: J
  }] = (0, g.A)(() => j.A.getGuildEventUsers(null == U ? true : U.id, E, M));
  r.useEffect(() => {
    null == U ? y() : h.default.track(P.HAw.OPEN_MODAL, {
      type: w.BV,
      guild_id: U.guild_id
    })
  }, [U, y]);
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
      let n = 16 * ((null == U ? true : U.recurrence_rule) != null);
      er((null != (e = null == en || null == (t = en.current) ? true : t.offsetHeight) ? e : 0) + n)
    }, [en, null == U ? true : U.recurrence_rule]), null == U || null == F) return null;
  let es = e => {
      e !== z && (e === w.al.RSVP_LIST && Z(), Q(e))
    },
    ei = null != E ? E : (0, A.G3)(U);
  return (0, l.jsx)(u.f5, {
    value: O,
    children: (0, l.jsxs)(s.dWK, {
      transitionState: f,
      size: "lg",
      onClose: y,
      children: [(0, l.jsx)(s.rQ0, {
        title: U.name
      }), (null == U ? true : U.image) != null && null != X && (0, l.jsx)("div", {
        onContextMenu: $,
        children: (0, l.jsx)(k.A, {
          source: X,
          className: T.vK
        })
      }), (0, l.jsx)(s.cwr, {
        controls: (0, l.jsx)(I.A, {
          selectedTab: z,
          onTabSelected: es,
          userCount: q
        }),
        children: (0, l.jsx)("div", {
          className: T.kL,
          ref: W,
          children: (0, l.jsxs)(a.tN_, {
            activeSlide: z,
            width: ee,
            centered: false,
            children: [(0, l.jsx)(a.q7S, {
              id: w.al.EVENT_INFO,
              children: (0, l.jsx)(S.A, {
                guildEvent: U,
                guild: F,
                channel: V,
                headerId: H,
                onClose: y,
                onClickInterestedCount: () => es(w.al.RSVP_LIST),
                containerRef: en,
                recurrenceId: ei,
                setRecurrenceId: R
              })
            }), (0, l.jsx)(a.q7S, {
              id: w.al.RSVP_LIST,
              children: (0, l.jsx)(C.A, {
                guildEvent: U,
                recurrenceId: ei,
                eventUsers: Y,
                loading: B,
                containerHeight: el,
                error: J
              })
            })]
          })
        })
      }), (0, l.jsx)(L, {
        guildEvent: U,
        guild: F,
        channel: V,
        onActionTaken: y,
        recurrenceId: ei
      })]
    })
  })
}