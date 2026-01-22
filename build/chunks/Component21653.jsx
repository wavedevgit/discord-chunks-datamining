/** Chunk was on 342 **/
/** chunk id: 21653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => V
}), require("./896048.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk520467 = require("./520467.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk735547 = require("./735547.js"),
  Chunk645034 = require("./645034.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk485394 = require("./485394.js"),
  Chunk761836 = require("./761836.js"),
  Chunk794782 = require("./794782.js"),
  Chunk9448 = require("./9448.js"),
  Chunk974930 = require("./974930.js"),
  Chunk70456 = require("./70456.js"),
  Chunk105253 = require("./105253.jsx"),
  Chunk692026 = require("./692026.jsx"),
  Chunk816647 = require("./816647.jsx"),
  Chunk300153 = require("./300153.jsx"),
  Chunk505966 = require("./505966.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk643637 = require("./643637.js");

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
let {
  INVITE_OPTIONS_7_DAYS: _,
  INVITE_OPTIONS_UNLIMITED: L
} = Chunk735547.Ay;
var M = ((l = M || {})[l.ENTITY = 0] = "ENTITY", l[l.SETTINGS = 1] = "SETTINGS", l[l.PREVIEW = 2] = "PREVIEW", l[l.SUCCESS = 3] = "SUCCESS", l);

function U(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(d.x);
  return i.useEffect(() => {
    let e = null == t ? true : t.getScrollerNode();
    if (null == e) return;
    let l = e.getBoundingClientRect();
    n({
      position: {
        type: "static-random",
        minValue: {
          x: l.left - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.left + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: false,
          y: false
        },
        maxValue: {
          x: false,
          y: false
        }
      }
    }, 80), n({
      position: {
        type: "static-random",
        minValue: {
          x: l.right - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.right + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: 20,
          y: false
        },
        maxValue: {
          x: 60,
          y: false
        }
      }
    }, 80)
  }, [n, t]), null
}

function z(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: l,
    isEdit: c,
    formErrors: d,
    transitionState: m,
    loading: h,
    error: j,
    onChange: v,
    onSave: f,
    onClose: b,
    createdEvent: y
  } = e, O = (0, x.GV)(), A = i.useRef(n), N = !(0, s.isEqual)(A.current, n), w = i.useMemo(() => [{
    slideId: 0,
    label: k.intl.string(k.t["56QlKS"]),
    valid: null == d.entity,
    userErrorMessage: d.entity
  }, {
    slideId: 1,
    label: k.intl.string(k.t["w5/ntT"]),
    valid: null == d.schedule && null == d.topic && (!c || N),
    userErrorMessage: d.schedule
  }, {
    slideId: 2,
    label: k.intl.string(k.t["8aJzT4"]),
    valid: true
  }], [d, c, N]), I = Object.keys(M).length, D = (0, p.Fd)(n), R = e => Math.max(0, Math.min(e, I - 1)), [_, L] = i.useState(+!!D), [z, V] = i.useState(false), F = i.useMemo(() => w.slice(0, _ + 1).map(e => e.valid).every(Boolean), [w, _]), B = _ >= w.length ? 3 : w[R(_)].slideId, H = 3 === B;
  (0, E.N)(e => e.onUpdateCanCloseModal)(H);
  let X = (0, a.bG)([u.A], () => u.A.useReducedMotion),
    Y = i.useRef(null),
    K = e => {
      V(false), L(R(e))
    },
    q = i.useRef(K);
  i.useEffect(() => {
    q.current = K
  }), i.useEffect(() => {
    (null == y ? true : y.id) != null && q.current(3)
  }, [null == y ? true : y.id]);
  let J = () => {
      F && (2 === B ? f() : H ? b() : K(_ + 1))
    },
    Q = () => {
      K(_ - 1)
    },
    W = k.intl.string(k.t.PDTjLN);
  return 2 === B && (W = c ? k.intl.string(k.t.e5VEcE) : k.intl.string(k.t["60lJ0C"])), (0, r.jsxs)(o.EOs, {
    transitionState: m,
    "aria-labelledby": O,
    size: o.rIJ.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!X && H ? (0, r.jsx)(U, {
      modal: Y.current
    }) : null, (0, r.jsxs)(o.$mQ, {
      className: G.Qs,
      scrollerRef: Y,
      "data-migration-pending": true,
      children: [!H && (0, r.jsx)(g.A, {
        steps: w.map(e => e.label),
        stepIndex: _,
        onClick: e => {
          e < _ ? Q() : e > _ && J()
        }
      }), (0, r.jsxs)(o.tN_, {
        activeSlide: B,
        width: 440,
        onSlideReady: e => {
          V(e === B)
        },
        children: [(0, r.jsx)(o.q7S, {
          id: 0,
          children: (0, r.jsx)(C.A, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: d.entity,
            isSlideReady: z,
            onChange: v
          })
        }), (0, r.jsx)(o.q7S, {
          id: 1,
          children: (0, r.jsx)(S.A, {
            guildEvent: n,
            guildEventId: l,
            guildId: t,
            onChange: v,
            error: j,
            validationErrorMessage: d.schedule,
            isSlideReady: z
          })
        }), (0, r.jsx)(o.q7S, {
          id: 2,
          children: (0, r.jsx)(P.A, {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            error: j
          })
        }), (0, r.jsx)(o.q7S, {
          id: 3,
          children: (0, r.jsx)(T.A, {
            onClose: b,
            event: y
          })
        })]
      })]
    }), !H && (0, r.jsxs)(o.jlY, {
      className: G.qr,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: G.mG,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: k.intl.string(k.t["ETE/oC"]),
          onClick: b
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: G.x6,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            text: W,
            onClick: J,
            disabled: !F,
            loading: h
          })
        })]
      }), 0 !== B && (0, r.jsx)("div", {
        className: G.zt,
        children: (0, r.jsx)(o.QWc, {
          variant: "secondary",
          size: "sm",
          onClick: Q,
          text: k.intl.string(k.t["13/7kX"])
        })
      })]
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: s,
    onClose: u
  } = e;
  (0, a.bG)([h.A], () => h.A.getGuild(t));
  let d = (0, a.bG)([p.Ay], () => p.Ay.getGuildScheduledEvent(l), [l]),
    g = (0, a.bG)([m.Ay], () => m.Ay.getDefaultChannel(t), [t]),
    x = (0, O.UZ)(d, g),
    [j, E] = i.useState(x),
    [C] = i.useState((0, O.lc)(d)),
    [P, S] = i.useState(null),
    [T, {
      loading: G,
      error: M
    }] = (0, v.A)(async () => {
      var e, n;
      let r, i;
      if (null != P) return;
      if (C && null != l) return await f.A.saveEvent(l, j, t), u();
      let s = await f.A.createGuildEvent(j, t);
      return e = s.body, r = (0, b.K7)(e), null != (i = null != (n = e.channel_id) ? n : null == g ? true : g.id) && c.Ay.createInvite(i, {
        max_age: _.value,
        max_uses: L.value
      }, D.PE1.GUILD_EVENTS), r ? S(e) : u(), s
    }),
    U = i.useMemo(() => (0, w.A)(j, C), [j, C]);
  return (0, r.jsx)(z, {
    guildId: t,
    guildEvent: j,
    guildEventId: l,
    isEdit: C,
    formErrors: U,
    transitionState: s,
    loading: G,
    error: M,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, A.dy)(e.entityType),
          [r] = (0, y.kh)(t, l);
        e.channelId = null != (n = null == r ? true : r.id) ? n : null, e.entityType !== I.Ps.EXTERNAL && j.entityType === I.Ps.EXTERNAL && (e.entityMetadata = null)
      }
      E(t => R({}, t, e))
    },
    onSave: () => {
      null != j.recurrenceRule && C && (0, N.DS)(d, j) ? (0, o.mMO)(async () => {
        let {
          VoidConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 640238));
        return t => {
          var n, l;
          return (0, r.jsxs)(e, (n = R({}, t), l = l = {
            header: k.intl.string(k.t.BW1Qoh),
            confirmText: k.intl.string(k.t.e5VEcE),
            cancelText: k.intl.string(k.t.oEAioF),
            onConfirm: T,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.string(k.t.aNCYas)
            }), (0, r.jsx)("br", {}), (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t.RWBa5X, {})
            })]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      }) : T()
    },
    onClose: u,
    createdEvent: P
  })
}