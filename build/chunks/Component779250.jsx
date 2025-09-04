/** Chunk was on 61 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => W
}), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk96698 = require("./96698.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk971130 = require("./971130.js"),
  Chunk981888 = require("./981888.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk951539 = require("./951539.js"),
  Chunk545165 = require("./545165.js"),
  Chunk236373 = require("./236373.js"),
  Chunk230900 = require("./230900.js"),
  Chunk954313 = require("./954313.js"),
  Chunk334877 = require("./334877.js"),
  Chunk785468 = require("./785468.jsx"),
  Chunk377329 = require("./377329.jsx"),
  Chunk311166 = require("./311166.jsx"),
  Chunk744782 = require("./744782.jsx"),
  Chunk129526 = require("./129526.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869939 = require("./869939.js");

function G(e) {
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
  INVITE_OPTIONS_7_DAYS: L,
  INVITE_OPTIONS_UNLIMITED: _
} = Chunk971130.ZP;
var k = ((l = k || {})[l.ENTITY = 0] = "ENTITY", l[l.SETTINGS = 1] = "SETTINGS", l[l.PREVIEW = 2] = "PREVIEW", l[l.SUCCESS = 3] = "SUCCESS", l);

function M(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(d.h);
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

function X(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: l,
    isEdit: c,
    formErrors: d,
    transitionState: g,
    loading: v,
    error: h,
    onChange: p,
    onSave: j,
    onClose: y,
    createdEvent: b
  } = e, E = (0, m.Dt)(), N = i.useRef(n), O = !(0, a.isEqual)(N.current, n), P = i.useMemo(() => [{
    slideId: 0,
    label: A.intl.string(A.t["56QlKS"]),
    valid: null == d.entity,
    userErrorMessage: d.entity
  }, {
    slideId: 1,
    label: A.intl.string(A.t["w5/ntb"]),
    valid: null == d.schedule && null == d.topic && (!c || O),
    userErrorMessage: d.schedule
  }, {
    slideId: 2,
    label: A.intl.string(A.t["8aJzT0"]),
    valid: true
  }], [d, c, O]), w = Object.keys(k).length, D = (0, f.xt)(n), G = e => Math.max(0, Math.min(e, w - 1)), [L, _] = i.useState(+!!D), [X, W] = i.useState(false), z = i.useMemo(() => P.slice(0, L + 1).map(e => e.valid).every(Boolean), [P, L]), V = L >= P.length ? 3 : P[G(L)].slideId, U = 3 === V;
  (0, C.l)(e => e.onUpdateCanCloseModal)(U);
  let F = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    q = i.useRef(null),
    B = e => {
      W(false), _(G(e))
    },
    H = i.useRef(B);
  i.useEffect(() => {
    H.current = B
  }), i.useEffect(() => {
    (null == b ? true : b.id) != null && H.current(3)
  }, [null == b ? true : b.id]);
  let Y = () => {
      z && (2 === V ? j() : U ? y() : B(L + 1))
    },
    J = () => {
      B(L - 1)
    },
    K = A.intl.string(A.t.PDTjLC);
  return 2 === V && (K = c ? A.intl.string(A.t.e5VEcH) : A.intl.string(A.t["60lJ0N"])), (0, r.jsxs)(o.Y0X, {
    transitionState: g,
    "aria-labelledby": E,
    size: o.CgR.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!F && U ? (0, r.jsx)(M, {
      modal: q.current
    }) : null, (0, r.jsxs)(o.hzk, {
      className: R.content,
      scrollerRef: q,
      "data-migration-pending": true,
      children: [!U && (0, r.jsx)(x.Z, {
        steps: P.map(e => e.label),
        stepIndex: L,
        onClick: e => {
          e < L ? J() : e > L && Y()
        }
      }), (0, r.jsxs)(o.MyZ, {
        activeSlide: V,
        width: 440,
        onSlideReady: e => {
          W(e === V)
        },
        children: [(0, r.jsx)(o.Mi4, {
          id: 0,
          children: (0, r.jsx)(S.Z, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: d.entity,
            isSlideReady: X,
            onChange: p
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 1,
          children: (0, r.jsx)(Z.Z, {
            guildEvent: n,
            guildEventId: l,
            guildId: t,
            onChange: p,
            error: h,
            validationErrorMessage: d.schedule,
            isSlideReady: X
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 2,
          children: (0, r.jsx)(T.Z, {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            error: h
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 3,
          children: (0, r.jsx)(I.Z, {
            onClose: y,
            event: b
          })
        })]
      })]
    }), !U && (0, r.jsxs)(o.mzw, {
      className: R.footer,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: R.inline,
        children: [(0, r.jsx)(o.zxk, {
          variant: "secondary",
          text: A.intl.string(A.t["ETE/oK"]),
          onClick: y
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: R.button,
          children: (0, r.jsx)(o.zxk, {
            variant: "primary",
            text: K,
            onClick: Y,
            disabled: !z,
            loading: v
          })
        })]
      }), 0 !== V && (0, r.jsx)("div", {
        className: R.textButtonWrapper,
        children: (0, r.jsx)(o.Avr, {
          variant: "secondary",
          size: "sm",
          onClick: J,
          text: A.intl.string(A.t["13/7kZ"])
        })
      })]
    })]
  })
}

function W(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: u
  } = e;
  (0, s.e7)([v.Z], () => v.Z.getGuild(t));
  let d = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(l), [l]),
    x = (0, s.e7)([g.ZP], () => g.ZP.getDefaultChannel(t), [t]),
    m = (0, E.j$)(d, x),
    [h, C] = i.useState(m),
    [S] = i.useState((0, E.Ql)(d)),
    [T, Z] = i.useState(null),
    [I, {
      loading: R,
      error: k
    }] = (0, p.Z)(async () => {
      if (null != T) return;
      if (S && null != l) return await j.Z.saveEvent(l, h, t), u();
      let e = await j.Z.createGuildEvent(h, t);
      return (e => {
        var t;
        let n = (0, y.so)(e),
          l = null != (t = e.channel_id) ? t : null == x ? true : x.id;
        null != l && c.ZP.createInvite(l, {
          max_age: L.value,
          max_uses: _.value
        }, D.t4x.GUILD_EVENTS), n ? Z(e) : u()
      })(e.body), e
    }),
    M = i.useMemo(() => (0, P.Z)(h, S), [h, S]);
  return (0, r.jsx)(X, {
    guildId: t,
    guildEvent: h,
    guildEventId: l,
    isEdit: S,
    formErrors: M,
    transitionState: a,
    loading: R,
    error: k,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, N.xC)(e.entityType),
          [r] = (0, b.SU)(t, l);
        e.channelId = null != (n = null == r ? true : r.id) ? n : null, e.entityType !== w.WX.EXTERNAL && h.entityType === w.WX.EXTERNAL && (e.entityMetadata = null)
      }
      C(t => G({}, t, e))
    },
    onSave: () => {
      null != h.recurrenceRule && S && (0, O.BP)(d, h) ? (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 481060));
        return t => {
          var n, l;
          return (0, r.jsxs)(e, (n = G({}, t), l = l = {
            header: A.intl.string(A.t.BW1Qoq),
            confirmText: A.intl.string(A.t.e5VEcH),
            cancelText: A.intl.string(A.t.oEAioK),
            onConfirm: I,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: A.intl.string(A.t.aNCYam)
            }), (0, r.jsx)("br", {}), (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: A.intl.format(A.t.RWBa5e, {})
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
      }) : I()
    },
    onClose: u,
    createdEvent: T
  })
}