/** Chunk was on 61 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk854698 = require("./854698.js"),
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

function A(e) {
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
  INVITE_OPTIONS_7_DAYS: _,
  INVITE_OPTIONS_UNLIMITED: G
} = Chunk971130.ZP;
var U = ((r = U || {})[r.ENTITY = 0] = "ENTITY", r[r.SETTINGS = 1] = "SETTINGS", r[r.PREVIEW = 2] = "PREVIEW", r[r.SUCCESS = 3] = "SUCCESS", r);

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
    transitionState: x,
    loading: h,
    error: v,
    onChange: p,
    onSave: f,
    onClose: b,
    createdEvent: y
  } = e, O = (0, m.Dt)(), E = i.useRef(n), N = !(0, a.isEqual)(E.current, n), Z = i.useMemo(() => [{
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
  }], [d, c, N]), w = Object.keys(U).length, D = (0, j.xt)(n), A = e => Math.max(0, Math.min(e, w - 1)), [_, G] = i.useState(+!!D), [z, F] = i.useState(false), M = i.useMemo(() => Z.slice(0, _ + 1).map(e => e.valid).every(Boolean), [Z, _]), V = _ >= Z.length ? 3 : Z[A(_)].slideId, B = 3 === V;
  (0, P.l)(e => e.onUpdateCanCloseModal)(B);
  let X = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    W = i.useRef(null),
    q = e => {
      F(false), G(A(e))
    },
    H = i.useRef(q);
  i.useEffect(() => {
    H.current = q
  }), i.useEffect(() => {
    (null == y ? true : y.id) != null && H.current(3)
  }, [null == y ? true : y.id]);
  let Y = () => {
      M && (2 === V ? f() : B ? b() : q(_ + 1))
    },
    K = () => {
      q(_ - 1)
    },
    J = k.intl.string(k.t.PDTjLN);
  return 2 === V && (J = c ? k.intl.string(k.t.e5VEcE) : k.intl.string(k.t["60lJ0C"])), (0, l.jsxs)(o.Y0X, {
    transitionState: x,
    "aria-labelledby": O,
    size: o.CgR.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!X && B ? (0, l.jsx)(L, {
      modal: W.current
    }) : null, (0, l.jsxs)(o.hzk, {
      className: R.content,
      scrollerRef: W,
      "data-migration-pending": true,
      children: [!B && (0, l.jsx)(g.Z, {
        steps: Z.map(e => e.label),
        stepIndex: _,
        onClick: e => {
          e < _ ? K() : e > _ && Y()
        }
      }), (0, l.jsxs)(o.MyZ, {
        activeSlide: V,
        width: 440,
        onSlideReady: e => {
          F(e === V)
        },
        children: [(0, l.jsx)(o.Mi4, {
          id: 0,
          children: (0, l.jsx)(C.Z, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: d.entity,
            isSlideReady: z,
            onChange: p
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 1,
          children: (0, l.jsx)(I.Z, {
            guildEvent: n,
            guildEventId: r,
            guildId: t,
            onChange: p,
            error: v,
            validationErrorMessage: d.schedule,
            isSlideReady: z
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 2,
          children: (0, l.jsx)(S.Z, {
            guildId: t,
            guildEvent: n,
            guildEventId: r,
            error: v
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 3,
          children: (0, l.jsx)(T.Z, {
            onClose: b,
            event: y
          })
        })]
      })]
    }), !B && (0, l.jsxs)(o.mzw, {
      className: R.footer,
      "data-migration-pending": true,
      children: [(0, l.jsxs)("div", {
        className: R.inline,
        children: [(0, l.jsx)(o.Button, {
          variant: "secondary",
          text: k.intl.string(k.t["ETE/oC"]),
          onClick: b
        }), (0, l.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: R.button,
          children: (0, l.jsx)(o.Button, {
            variant: "primary",
            text: J,
            onClick: Y,
            disabled: !M,
            loading: h
          })
        })]
      }), 0 !== V && (0, l.jsx)("div", {
        className: R.textButtonWrapper,
        children: (0, l.jsx)(o.Avr, {
          variant: "secondary",
          size: "sm",
          onClick: K,
          text: k.intl.string(k.t["13/7kX"])
        })
      })]
    })]
  })
}

function F(e) {
  let {
    guildId: t,
    guildScheduledEventId: r,
    transitionState: a,
    onClose: u
  } = e;
  (0, s.e7)([h.Z], () => h.Z.getGuild(t));
  let d = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]),
    g = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(t), [t]),
    m = (0, O.j$)(d, g),
    [v, P] = i.useState(m),
    [C] = i.useState((0, O.Ql)(d)),
    [S, I] = i.useState(null),
    [T, {
      loading: R,
      error: U
    }] = (0, p.Z)(async () => {
      if (null != S) return;
      if (C && null != r) return await f.Z.saveEvent(r, v, t), u();
      let e = await f.Z.createGuildEvent(v, t);
      return (e => {
        var t;
        let n = (0, b.so)(e),
          r = null != (t = e.channel_id) ? t : null == g ? true : g.id;
        null != r && c.ZP.createInvite(r, {
          max_age: _.value,
          max_uses: G.value
        }, D.t4x.GUILD_EVENTS), n ? I(e) : u()
      })(e.body), e
    }),
    L = i.useMemo(() => (0, Z.Z)(v, C), [v, C]);
  return (0, l.jsx)(z, {
    guildId: t,
    guildEvent: v,
    guildEventId: r,
    isEdit: C,
    formErrors: L,
    transitionState: a,
    loading: R,
    error: U,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let r = (0, E.xC)(e.entityType),
          [l] = (0, y.SU)(t, r);
        e.channelId = null != (n = null == l ? true : l.id) ? n : null, e.entityType !== w.WX.EXTERNAL && v.entityType === w.WX.EXTERNAL && (e.entityMetadata = null)
      }
      P(t => A({}, t, e))
    },
    onSave: () => {
      null != v.recurrenceRule && C && (0, N.BP)(d, v) ? (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 481060));
        return t => {
          var n, r;
          return (0, l.jsxs)(e, (n = A({}, t), r = r = {
            header: k.intl.string(k.t.BW1Qoh),
            confirmText: k.intl.string(k.t.e5VEcE),
            cancelText: k.intl.string(k.t.oEAioF),
            onConfirm: T,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.string(k.t.aNCYas)
            }), (0, l.jsx)("br", {}), (0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t.RWBa5X, {})
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
      }) : T()
    },
    onClose: u,
    createdEvent: S
  })
}