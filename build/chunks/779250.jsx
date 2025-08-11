/** Chunk was on 58023 **/
/** chunk id: 779250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => V
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk854698 = require("./854698.js"),
  Chunk334877 = require("./334877.js"),
  Chunk785468 = require("./785468.js"),
  Chunk377329 = require("./377329.jsx"),
  Chunk311166 = require("./311166.jsx"),
  Chunk744782 = require("./744782.jsx"),
  Chunk129526 = require("./129526.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365545 = require("./365545.js");

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
  INVITE_OPTIONS_7_DAYS: U,
  INVITE_OPTIONS_UNLIMITED: M
} = Chunk971130.ZP;
var L = ((r = L || {})[r.ENTITY = 0] = "ENTITY", r[r.SETTINGS = 1] = "SETTINGS", r[r.PREVIEW = 2] = "PREVIEW", r[r.SUCCESS = 3] = "SUCCESS", r);

function G(e) {
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
    editBroadcastInfoData: c,
    isEdit: d,
    formErrors: g,
    transitionState: h,
    loading: v,
    error: p,
    onChange: f,
    onSave: b,
    onClose: y,
    createdEvent: O
  } = e, E = (0, x.Dt)(), N = i.useRef(n), C = !(0, a.isEqual)(N.current, n), Z = i.useMemo(() => [{
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
  }], [g, d, C]), D = Object.keys(L).length, _ = (0, j.xt)(n), A = e => Math.max(0, Math.min(e, D - 1)), [U, M] = i.useState(+!!_), [z, V] = i.useState(false), W = i.useMemo(() => Z.slice(0, U + 1).map(e => e.valid).every(Boolean), [Z, U]), X = U >= Z.length ? 3 : Z[A(U)].slideId, F = 3 === X;
  (0, I.l)(e => e.onUpdateCanCloseModal)(F);
  let B = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    Y = i.useRef(null),
    q = e => {
      V(false), M(A(e))
    },
    H = i.useRef(q);
  i.useEffect(() => {
    H.current = q
  }), i.useEffect(() => {
    (null == O ? true : O.id) != null && H.current(3)
  }, [null == O ? true : O.id]);
  let J = () => {
      W && (2 === X ? b() : F ? y() : q(U + 1))
    },
    K = () => {
      q(U - 1)
    },
    Q = R.intl.string(R.t.PDTjLC);
  return 2 === X && (Q = d ? R.intl.string(R.t.e5VEcH) : R.intl.string(R.t["60lJ0N"])), <o.Y0X transitionState={h} aria-labelledby={E} size={o.CgR.DYNAMIC} parentComponent={"ScheduleEventModal"} data-migration-pending={true}>{!B && F ? <G modal={Y.current} /> : null}{<o.hzk className={k.content} scrollerRef={Y} data-migration-pending={true}>{!F && <m.Z steps={Z.map(e => e.label)} stepIndex={U} onClick={e => {
          e < U ? K() : e > U && J()
        }} />}{<o.MyZ activeSlide={X} width={440} onSlideReady={e => {
          V(e === X)
        }}>{<o.Mi4 id={0}><S.Z guildId={t} guildEvent={n} validationErrorMessage={g.entity} isSlideReady={z} onChange={f} /></o.Mi4>}{<o.Mi4 id={1}><P.Z guildEvent={n} guildEventId={r} guildId={t} editBroadcastInfoData={c} onChange={f} error={p} validationErrorMessage={g.schedule} isSlideReady={z} /></o.Mi4>}{<o.Mi4 id={2}><T.Z guildId={t} guildEvent={n} guildEventId={r} error={p} /></o.Mi4>}{<o.Mi4 id={3}><w.Z onClose={y} event={O} /></o.Mi4>}</o.MyZ>}</o.hzk>}{!F && <o.mzw className={k.footer} data-migration-pending={true}>{<div className={k.inline}>{<o.zxk variant={"secondary"} text={R.intl.string(R.t["ETE/oK"])} onClick={y} />}{<div data-button-hoisted-classname-wrapper={true} className={k.button}><o.zxk variant={"primary"} text={Q} onClick={J} disabled={!W} loading={v} /></div>}</div>}{0 !== X && <div className={k.textButtonWrapper}><o.Avr variant={"secondary"} size={"sm"} onClick={K} text={R.intl.string(R.t["13/7kZ"])} /></div>}</o.mzw>}</o.Y0X>
}

function V(e) {
  let {
    guildId: t,
    guildScheduledEventId: r,
    transitionState: a,
    onClose: u
  } = e, d = (0, s.e7)([v.Z], () => v.Z.getGuild(t)), m = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]), x = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]), p = (0, E.j$)(m, x), [I, S] = i.useState(p), [T] = i.useState((0, E.Ql)(m)), [P, w] = i.useState(null), k = e => {
    var t;
    let n = (0, y.so)(e),
      r = null != (t = e.channel_id) ? t : null == x ? true : x.id;
    null != r && c.ZP.createInvite(r, {
      max_age: U.value,
      max_uses: M.value
    }, _.t4x.GUILD_EVENTS), n ? w(e) : u()
  }, L = (0, g.Z)(d, null == m ? true : m.id, I), [G, {
    loading: V,
    error: W
  }] = (0, f.Z)(async () => {
    if (null != P) return;
    let e = {
      broadcastToDirectoryChannels: L.broadcastToDirectoryChannels
    };
    if (T && null != r) return await b.Z.saveEvent(r, I, t, e), u();
    let n = await b.Z.createGuildEvent(I, t, e);
    return k(n.body), n
  }), X = i.useMemo(() => (0, Z.Z)(I, T), [I, T]);
  return <z guildId={t} guildEvent={I} guildEventId={r} editBroadcastInfoData={L} isEdit={T} formErrors={X} transitionState={a} loading={V} error={W} onChange={e => {
      if (null != e.entityType) {
        var n;
        let r = (0, N.xC)(e.entityType),
          [l] = (0, O.SU)(t, r);
        e.channelId = null != (n = null == l ? true : l.id) ? n : null, e.entityType !== D.WX.EXTERNAL && I.entityType === D.WX.EXTERNAL && (e.entityMetadata = null)
      }
      S(t => A({}, t, e))
    }} onSave={() => {
      null != I.recurrenceRule && T && (0, C.BP)(m, I) ? (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 481060));
        return t => {
          var n, r;
          return (0, l.jsxs)(e, (n = A({}, t), r = r = {
            header: R.intl.string(R.t.BW1Qoq),
            confirmText: R.intl.string(R.t.e5VEcH),
            cancelText: R.intl.string(R.t.oEAioK),
            onConfirm: G,
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
      }) : G()
    }} onClose={u} createdEvent={P} />
}