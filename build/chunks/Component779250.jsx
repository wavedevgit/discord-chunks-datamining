/** Chunk was on 61 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var l, Chunk54381 = require("./54381.js"),
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
  Chunk723009 = require("./723009.js");

function _(e) {
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
  INVITE_OPTIONS_7_DAYS: A,
  INVITE_OPTIONS_UNLIMITED: G
} = Chunk971130.ZP;
var U = ((l = U || {})[l.ENTITY = 0] = "ENTITY", l[l.SETTINGS = 1] = "SETTINGS", l[l.PREVIEW = 2] = "PREVIEW", l[l.SUCCESS = 3] = "SUCCESS", l);

function L(e) {
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

function z(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: l,
    isEdit: c,
    formErrors: d,
    transitionState: m,
    loading: v,
    error: h,
    onChange: f,
    onSave: j,
    onClose: b,
    createdEvent: y
  } = e, O = (0, x.Dt)(), E = i.useRef(n), N = !(0, a.isEqual)(E.current, n), T = i.useMemo(() => [{
    slideId: 0,
    label: D.intl.string(D.t["56QlKS"]),
    valid: null == d.entity,
    userErrorMessage: d.entity
  }, {
    slideId: 1,
    label: D.intl.string(D.t["w5/ntT"]),
    valid: null == d.schedule && null == d.topic && (!c || N),
    userErrorMessage: d.schedule
  }, {
    slideId: 2,
    label: D.intl.string(D.t["8aJzT4"]),
    valid: true
  }], [d, c, N]), w = Object.keys(U).length, k = (0, p.xt)(n), _ = e => Math.max(0, Math.min(e, w - 1)), [A, G] = i.useState(+!!k), [z, F] = i.useState(false), M = i.useMemo(() => T.slice(0, A + 1).map(e => e.valid).every(Boolean), [T, A]), V = A >= T.length ? 3 : T[_(A)].slideId, B = 3 === V;
  (0, C.l)(e => e.onUpdateCanCloseModal)(B);
  let X = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    W = i.useRef(null),
    q = e => {
      F(false), G(_(e))
    },
    H = i.useRef(q);
  i.useEffect(() => {
    H.current = q
  }), i.useEffect(() => {
    (null == y ? true : y.id) != null && H.current(3)
  }, [null == y ? true : y.id]);
  let Y = () => {
      M && (2 === V ? j() : B ? b() : q(A + 1))
    },
    K = () => {
      q(A - 1)
    },
    J = D.intl.string(D.t.PDTjLN);
  return 2 === V && (J = c ? D.intl.string(D.t.e5VEcE) : D.intl.string(D.t["60lJ0C"])), (0, r.jsxs)(o.Y0X, {
    transitionState: m,
    "aria-labelledby": O,
    size: o.CgR.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!X && B ? (0, r.jsx)(L, {
      modal: W.current
    }) : null, (0, r.jsxs)(o.hzk, {
      className: R.content,
      scrollerRef: W,
      "data-migration-pending": true,
      children: [!B && (0, r.jsx)(g.Z, {
        steps: T.map(e => e.label),
        stepIndex: A,
        onClick: e => {
          e < A ? K() : e > A && Y()
        }
      }), (0, r.jsxs)(o.MyZ, {
        activeSlide: V,
        width: 440,
        onSlideReady: e => {
          F(e === V)
        },
        children: [(0, r.jsx)(o.Mi4, {
          id: 0,
          children: (0, r.jsx)(P.Z, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: d.entity,
            isSlideReady: z,
            onChange: f
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 1,
          children: (0, r.jsx)(I.Z, {
            guildEvent: n,
            guildEventId: l,
            guildId: t,
            onChange: f,
            error: h,
            validationErrorMessage: d.schedule,
            isSlideReady: z
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 2,
          children: (0, r.jsx)(S.Z, {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            error: h
          })
        }), (0, r.jsx)(o.Mi4, {
          id: 3,
          children: (0, r.jsx)(Z.Z, {
            onClose: b,
            event: y
          })
        })]
      })]
    }), !B && (0, r.jsxs)(o.mzw, {
      className: R.footer,
      "data-migration-pending": true,
      children: [(0, r.jsxs)("div", {
        className: R.inline,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: D.intl.string(D.t["ETE/oC"]),
          onClick: b
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: R.button,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            text: J,
            onClick: Y,
            disabled: !M,
            loading: v
          })
        })]
      }), 0 !== V && (0, r.jsx)("div", {
        className: R.textButtonWrapper,
        children: (0, r.jsx)(o.Avr, {
          variant: "secondary",
          size: "sm",
          onClick: K,
          text: D.intl.string(D.t["13/7kX"])
        })
      })]
    })]
  })
}

function F(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: u
  } = e;
  (0, s.e7)([v.Z], () => v.Z.getGuild(t));
  let d = (0, s.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(l), [l]),
    g = (0, s.e7)([m.ZP], () => m.ZP.getDefaultChannel(t), [t]),
    x = (0, O.j$)(d, g),
    [h, C] = i.useState(x),
    [P] = i.useState((0, O.Ql)(d)),
    [S, I] = i.useState(null),
    [Z, {
      loading: R,
      error: U
    }] = (0, f.Z)(async () => {
      if (null != S) return;
      if (P && null != l) return await j.Z.saveEvent(l, h, t), u();
      let e = await j.Z.createGuildEvent(h, t);
      return (e => {
        var t;
        let n = (0, b.so)(e),
          l = null != (t = e.channel_id) ? t : null == g ? true : g.id;
        null != l && c.ZP.createInvite(l, {
          max_age: A.value,
          max_uses: G.value
        }, k.t4x.GUILD_EVENTS), n ? I(e) : u()
      })(e.body), e
    }),
    L = i.useMemo(() => (0, T.Z)(h, P), [h, P]);
  return (0, r.jsx)(z, {
    guildId: t,
    guildEvent: h,
    guildEventId: l,
    isEdit: P,
    formErrors: L,
    transitionState: a,
    loading: R,
    error: U,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, E.xC)(e.entityType),
          [r] = (0, y.SU)(t, l);
        e.channelId = null != (n = null == r ? true : r.id) ? n : null, e.entityType !== w.WX.EXTERNAL && h.entityType === w.WX.EXTERNAL && (e.entityMetadata = null)
      }
      C(t => _({}, t, e))
    },
    onSave: () => {
      null != h.recurrenceRule && P && (0, N.BP)(d, h) ? (0, o.ZDy)(async () => {
        let {
          VoidConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 288022));
        return t => {
          var n, l;
          return (0, r.jsxs)(e, (n = _({}, t), l = l = {
            header: D.intl.string(D.t.BW1Qoh),
            confirmText: D.intl.string(D.t.e5VEcE),
            cancelText: D.intl.string(D.t.oEAioF),
            onConfirm: Z,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: D.intl.string(D.t.aNCYas)
            }), (0, r.jsx)("br", {}), (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: D.intl.format(D.t.RWBa5X, {})
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
      }) : Z()
    },
    onClose: u,
    createdEvent: S
  })
}