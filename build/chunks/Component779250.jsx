/** Chunk was on 61 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => X
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let {
  INVITE_OPTIONS_7_DAYS: A,
  INVITE_OPTIONS_UNLIMITED: M
} = Chunk971130.ZP;
var _ = ((r = _ || {})[r.ENTITY = 0] = "ENTITY", r[r.SETTINGS = 1] = "SETTINGS", r[r.PREVIEW = 2] = "PREVIEW", r[r.SUCCESS = 3] = "SUCCESS", r);

function L(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(d.h);
  return i.useEffect(() => {
    let e = null == t ? true : t.getScrollerNode();
    if (null == e) return;
    let r = e.getBoundingClientRect();
    n({
      position: {
        type: "static-random",
        minValue: {
          x: r.left - 100,
          y: r.top - 100
        },
        maxValue: {
          x: r.left + 100,
          y: r.top + 100
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
          x: r.right - 100,
          y: r.top - 100
        },
        maxValue: {
          x: r.right + 100,
          y: r.top + 100
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
    guildEventId: r,
    isEdit: c,
    formErrors: d,
    transitionState: m,
    loading: v,
    error: h,
    onChange: j,
    onSave: f,
    onClose: b,
    createdEvent: y
  } = e, O = (0, g.Dt)(), E = i.useRef(n), C = !(0, a.isEqual)(E.current, n), w = i.useMemo(() => [{
    slideId: 0,
    label: k.intl.string(k.t["56QlKS"]),
    valid: null == d.entity,
    userErrorMessage: d.entity
  }, {
    slideId: 1,
    label: k.intl.string(k.t["w5/ntb"]),
    valid: null == d.schedule && null == d.topic && (!c || C),
    userErrorMessage: d.schedule
  }, {
    slideId: 2,
    label: k.intl.string(k.t["8aJzT0"]),
    valid: true
  }], [d, c, C]), I = Object.keys(_).length, D = (0, p.xt)(n), G = e => Math.max(0, Math.min(e, I - 1)), [A, M] = i.useState(+!!D), [z, X] = i.useState(false), V = i.useMemo(() => w.slice(0, A + 1).map(e => e.valid).every(Boolean), [w, A]), W = A >= w.length ? 3 : w[G(A)].slideId, U = 3 === W;
  (0, N.l)(e => e.onUpdateCanCloseModal)(U);
  let q = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    F = i.useRef(null),
    B = e => {
      X(false), M(G(e))
    },
    K = i.useRef(B);
  i.useEffect(() => {
    K.current = B
  }), i.useEffect(() => {
    (null == y ? true : y.id) != null && K.current(3)
  }, [null == y ? true : y.id]);
  let H = () => {
      V && (2 === W ? f() : U ? b() : B(A + 1))
    },
    Y = () => {
      B(A - 1)
    },
    Q = k.intl.string(k.t.PDTjLC);
  return 2 === W && (Q = c ? k.intl.string(k.t.e5VEcH) : k.intl.string(k.t["60lJ0N"])), (0, l.jsxs)(o.Y0X, {
    transitionState: m,
    "aria-labelledby": O,
    size: o.CgR.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!q && U ? (0, l.jsx)(L, {
      modal: F.current
    }) : null, (0, l.jsxs)(o.hzk, {
      className: R.content,
      scrollerRef: F,
      "data-migration-pending": true,
      children: [!U && (0, l.jsx)(x.Z, {
        steps: w.map(e => e.label),
        stepIndex: A,
        onClick: e => {
          e < A ? Y() : e > A && H()
        }
      }), (0, l.jsxs)(o.MyZ, {
        activeSlide: W,
        width: 440,
        onSlideReady: e => {
          X(e === W)
        },
        children: [(0, l.jsx)(o.Mi4, {
          id: 0,
          children: (0, l.jsx)(P.Z, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: d.entity,
            isSlideReady: z,
            onChange: j
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 1,
          children: (0, l.jsx)(T.Z, {
            guildEvent: n,
            guildEventId: r,
            guildId: t,
            onChange: j,
            error: h,
            validationErrorMessage: d.schedule,
            isSlideReady: z
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 2,
          children: (0, l.jsx)(S.Z, {
            guildId: t,
            guildEvent: n,
            guildEventId: r,
            error: h
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 3,
          children: (0, l.jsx)(Z.Z, {
            onClose: b,
            event: y
          })
        })]
      })]
    }), !U && (0, l.jsxs)(o.mzw, {
      className: R.footer,
      "data-migration-pending": true,
      children: [(0, l.jsxs)("div", {
        className: R.inline,
        children: [(0, l.jsx)(o.zxk, {
          variant: "secondary",
          text: k.intl.string(k.t["ETE/oK"]),
          onClick: b
        }), (0, l.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: R.button,
          children: (0, l.jsx)(o.zxk, {
            variant: "primary",
            text: Q,
            onClick: H,
            disabled: !V,
            loading: v
          })
        })]
      }), 0 !== W && (0, l.jsx)("div", {
        className: R.textButtonWrapper,
        children: (0, l.jsx)(o.Avr, {
          variant: "secondary",
          size: "sm",
          onClick: Y,
          text: k.intl.string(k.t["13/7kZ"])
        })
      })]
    })]
  })
}

function X(e) {
  let {
    guildId: t,
    guildScheduledEventId: r,
    transitionState: a,
    onClose: u
  } = e;
  (0, s.e7)([v.Z], () => v.Z.getGuild(t));
  let d = (0, s.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(r), [r]),
    x = (0, s.e7)([m.ZP], () => m.ZP.getDefaultChannel(t), [t]),
    g = (0, O.j$)(d, x),
    [h, N] = i.useState(g),
    [P] = i.useState((0, O.Ql)(d)),
    [S, T] = i.useState(null),
    [Z, {
      loading: R,
      error: _
    }] = (0, j.Z)(async () => {
      if (null != S) return;
      if (P && null != r) return await f.Z.saveEvent(r, h, t), u();
      let e = await f.Z.createGuildEvent(h, t);
      return (e => {
        var t;
        let n = (0, b.so)(e),
          r = null != (t = e.channel_id) ? t : null == x ? true : x.id;
        null != r && c.ZP.createInvite(r, {
          max_age: A.value,
          max_uses: M.value
        }, D.t4x.GUILD_EVENTS), n ? T(e) : u()
      })(e.body), e
    }),
    L = i.useMemo(() => (0, w.Z)(h, P), [h, P]);
  return (0, l.jsx)(z, {
    guildId: t,
    guildEvent: h,
    guildEventId: r,
    isEdit: P,
    formErrors: L,
    transitionState: a,
    loading: R,
    error: _,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let r = (0, E.xC)(e.entityType),
          [l] = (0, y.SU)(t, r);
        e.channelId = null != (n = null == l ? true : l.id) ? n : null, e.entityType !== I.WX.EXTERNAL && h.entityType === I.WX.EXTERNAL && (e.entityMetadata = null)
      }
      N(t => G({}, t, e))
    },
    onSave: () => {
      null != h.recurrenceRule && P && (0, C.BP)(d, h) ? (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 481060));
        return t => {
          var n, r;
          return (0, l.jsxs)(e, (n = G({}, t), r = r = {
            header: k.intl.string(k.t.BW1Qoq),
            confirmText: k.intl.string(k.t.e5VEcH),
            cancelText: k.intl.string(k.t.oEAioK),
            onConfirm: Z,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.string(k.t.aNCYam)
            }), (0, l.jsx)("br", {}), (0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t.RWBa5e, {})
            })]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      }) : Z()
    },
    onClose: u,
    createdEvent: S
  })
}