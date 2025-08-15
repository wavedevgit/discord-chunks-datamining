/** Chunk was on 61 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => V
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
  Chunk433775 = require("./433775.js"),
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

function X(e) {
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
  INVITE_OPTIONS_7_DAYS: L,
  INVITE_OPTIONS_UNLIMITED: G
} = Chunk971130.ZP;
var k = ((r = k || {})[r.ENTITY = 0] = "ENTITY", r[r.SETTINGS = 1] = "SETTINGS", r[r.PREVIEW = 2] = "PREVIEW", r[r.SUCCESS = 3] = "SUCCESS", r);

function M(e) {
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

function W(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: r,
    editBroadcastInfoData: c,
    isEdit: d,
    formErrors: g,
    transitionState: v,
    loading: h,
    error: f,
    onChange: p,
    onSave: y,
    onClose: b,
    createdEvent: E
  } = e, O = (0, m.Dt)(), N = i.useRef(n), C = !(0, a.isEqual)(N.current, n), w = i.useMemo(() => [{
    slideId: 0,
    label: R.intl.string(R.t["56QlKS"]),
    valid: null == g.entity,
    userErrorMessage: g.entity
  }, {
    slideId: 1,
    label: R.intl.string(R.t["w5/ntb"]),
    valid: null == g.schedule && null == g.topic && (!d || C),
    userErrorMessage: g.schedule
  }, {
    slideId: 2,
    label: R.intl.string(R.t["8aJzT0"]),
    valid: true
  }], [g, d, C]), D = Object.keys(k).length, _ = (0, j.xt)(n), X = e => Math.max(0, Math.min(e, D - 1)), [L, G] = i.useState(+!!_), [W, V] = i.useState(false), z = i.useMemo(() => w.slice(0, L + 1).map(e => e.valid).every(Boolean), [w, L]), U = L >= w.length ? 3 : w[X(L)].slideId, B = 3 === U;
  (0, T.l)(e => e.onUpdateCanCloseModal)(B);
  let F = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    q = i.useRef(null),
    H = e => {
      V(false), G(X(e))
    },
    Y = i.useRef(H);
  i.useEffect(() => {
    Y.current = H
  }), i.useEffect(() => {
    (null == E ? true : E.id) != null && Y.current(3)
  }, [null == E ? true : E.id]);
  let J = () => {
      z && (2 === U ? y() : B ? b() : H(L + 1))
    },
    K = () => {
      H(L - 1)
    },
    Q = R.intl.string(R.t.PDTjLC);
  return 2 === U && (Q = d ? R.intl.string(R.t.e5VEcH) : R.intl.string(R.t["60lJ0N"])), (0, l.jsxs)(o.Y0X, {
    transitionState: v,
    "aria-labelledby": O,
    size: o.CgR.DYNAMIC,
    parentComponent: "ScheduleEventModal",
    "data-migration-pending": true,
    children: [!F && B ? (0, l.jsx)(M, {
      modal: q.current
    }) : null, (0, l.jsxs)(o.hzk, {
      className: A.content,
      scrollerRef: q,
      "data-migration-pending": true,
      children: [!B && (0, l.jsx)(x.Z, {
        steps: w.map(e => e.label),
        stepIndex: L,
        onClick: e => {
          e < L ? K() : e > L && J()
        }
      }), (0, l.jsxs)(o.MyZ, {
        activeSlide: U,
        width: 440,
        onSlideReady: e => {
          V(e === U)
        },
        children: [(0, l.jsx)(o.Mi4, {
          id: 0,
          children: (0, l.jsx)(S.Z, {
            guildId: t,
            guildEvent: n,
            validationErrorMessage: g.entity,
            isSlideReady: W,
            onChange: p
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 1,
          children: (0, l.jsx)(Z.Z, {
            guildEvent: n,
            guildEventId: r,
            guildId: t,
            editBroadcastInfoData: c,
            onChange: p,
            error: f,
            validationErrorMessage: g.schedule,
            isSlideReady: W
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 2,
          children: (0, l.jsx)(I.Z, {
            guildId: t,
            guildEvent: n,
            guildEventId: r,
            error: f
          })
        }), (0, l.jsx)(o.Mi4, {
          id: 3,
          children: (0, l.jsx)(P.Z, {
            onClose: b,
            event: E
          })
        })]
      })]
    }), !B && (0, l.jsxs)(o.mzw, {
      className: A.footer,
      "data-migration-pending": true,
      children: [(0, l.jsxs)("div", {
        className: A.inline,
        children: [(0, l.jsx)(o.zxk, {
          variant: "secondary",
          text: R.intl.string(R.t["ETE/oK"]),
          onClick: b
        }), (0, l.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: A.button,
          children: (0, l.jsx)(o.zxk, {
            variant: "primary",
            text: Q,
            onClick: J,
            disabled: !z,
            loading: h
          })
        })]
      }), 0 !== U && (0, l.jsx)("div", {
        className: A.textButtonWrapper,
        children: (0, l.jsx)(o.Avr, {
          variant: "secondary",
          size: "sm",
          onClick: K,
          text: R.intl.string(R.t["13/7kZ"])
        })
      })]
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    guildScheduledEventId: r,
    transitionState: a,
    onClose: u
  } = e, d = (0, s.e7)([h.Z], () => h.Z.getGuild(t)), x = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]), m = (0, s.e7)([v.ZP], () => v.ZP.getDefaultChannel(t), [t]), f = (0, O.j$)(x, m), [T, S] = i.useState(f), [I] = i.useState((0, O.Ql)(x)), [Z, P] = i.useState(null), A = (0, g.Z)(d, null == x ? true : x.id, T), [k, {
    loading: M,
    error: V
  }] = (0, p.Z)(async () => {
    if (null != Z) return;
    let e = {
      broadcastToDirectoryChannels: A.broadcastToDirectoryChannels
    };
    if (I && null != r) return await y.Z.saveEvent(r, T, t, e), u();
    let n = await y.Z.createGuildEvent(T, t, e);
    return (e => {
      var t;
      let n = (0, b.so)(e),
        r = null != (t = e.channel_id) ? t : null == m ? true : m.id;
      null != r && c.ZP.createInvite(r, {
        max_age: L.value,
        max_uses: G.value
      }, _.t4x.GUILD_EVENTS), n ? P(e) : u()
    })(n.body), n
  }), z = i.useMemo(() => (0, w.Z)(T, I), [T, I]);
  return (0, l.jsx)(W, {
    guildId: t,
    guildEvent: T,
    guildEventId: r,
    editBroadcastInfoData: A,
    isEdit: I,
    formErrors: z,
    transitionState: a,
    loading: M,
    error: V,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let r = (0, N.xC)(e.entityType),
          [l] = (0, E.SU)(t, r);
        e.channelId = null != (n = null == l ? true : l.id) ? n : null, e.entityType !== D.WX.EXTERNAL && T.entityType === D.WX.EXTERNAL && (e.entityMetadata = null)
      }
      S(t => X({}, t, e))
    },
    onSave: () => {
      null != T.recurrenceRule && I && (0, C.BP)(x, T) ? (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 481060));
        return t => {
          var n, r;
          return (0, l.jsxs)(e, (n = X({}, t), r = r = {
            header: R.intl.string(R.t.BW1Qoq),
            confirmText: R.intl.string(R.t.e5VEcH),
            cancelText: R.intl.string(R.t.oEAioK),
            onConfirm: k,
            children: [(0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: R.intl.string(R.t.aNCYam)
            }), (0, l.jsx)("br", {}), (0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              children: R.intl.format(R.t.RWBa5e, {})
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
      }) : k()
    },
    onClose: u,
    createdEvent: Z
  })
}