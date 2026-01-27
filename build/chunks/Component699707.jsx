/** Chunk was on 41727 **/
/** chunk id: 699707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk216418 = require("./216418.js"),
  Chunk80051 = require("./80051.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk203982 = require("./203982.js"),
  Chunk220144 = require("./220144.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk306852 = require("./306852.jsx"),
  Chunk947580 = require("./947580.js"),
  Chunk163432 = require("./163432.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk403264 = require("./403264.js"),
  Chunk542411 = require("./542411.js");

function x(e) {
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 16 / 9,
  S = 8 + Chunk163432.Vp;

function I(e) {
  var t;
  let n, {
      onSelectParticipant: i,
      onContextMenuParticipant: I,
      onFullscreenParticipant: N,
      participants: T,
      filteredParticipants: P,
      popoutType: w,
      inCall: R,
      channel: D,
      selectedParticipant: M,
      showParticipants: L = true,
      className: k,
      width: G,
      height: U,
      layout: B,
      idle: V
    } = e,
    F = h.A.getVideoComponent(),
    H = p.default.getId(),
    [K, W] = l.useState(null),
    z = (0, c.A)(K),
    [Y, q] = l.useState(true),
    [X, J] = l.useState(false),
    Q = M.type === O.lp.ACTIVITY,
    Z = (0, u.A)(Q ? M.applicationId : true),
    $ = !Q && null != M.streamId,
    ee = U <= 2 * S + 144,
    et = L && !ee,
    en = (0, c.A)(et),
    er = B === _.DUB.MINIMUM || B === _.DUB.NORMAL,
    el = !ee && (!er || Q),
    ei = (0, g.A)(el, 100),
    es = (null != (t = (0, c.A)(M.id)) ? t : M.id) !== M.id,
    ea = 0;
  (Q || et) && (ea += 72), Q && !et && (el ? ea += 48 : ea += 8), et && (ea += .5 * S + 8);
  let eo = l.useMemo(() => Q && Z ? G / (U - 2 * ea) : $ && null != K && K.width > 0 && K.height > 0 ? K.width / K.height : C, [$, K, Q, G, U, ea, Z]),
    ec = U - 2 * ea,
    eu = Q && Z ? G : ec * eo,
    ed = Math.floor(Math.min(G, eu) / eo),
    ep = U > G / eo + 72 + S + 8;
  n = et || Q ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2);
  let eh = 8 + Math.max(0, 72 - (U - ed) / 2);
  l.useEffect(() => {
    let e = setTimeout(() => {
      q(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ef = Y || null == z,
    eg = ef ? "animate-never" : "animate-always",
    em = (0, o.zhh)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: E(x({}, a.config.stiff), {
        clamp: true
      }),
      onStart: () => J(true),
      onChange: () => f._.dispatch(_.jej.REMEASURE_TARGET),
      onRest: () => {
        J(false), f._.dispatch(_.jej.REMEASURE_TARGET)
      }
    }, eg),
    eb = (0, o.zhh)({
      value: +!!et,
      config: E(x({}, a.config.stiff), {
        clamp: true
      })
    }, eg),
    eA = (0, o.zhh)({
      value: eu,
      config: E(x({}, a.config.stiff), {
        clamp: true
      })
    }, en === et && eb.value.idle && !ei || es || ef ? "animate-never" : "animate-always"),
    ey = (0, o.zhh)({
      value: n,
      config: E(x({}, a.config.stiff), {
        clamp: true
      })
    }, eg),
    e_ = (0, o.pnh)(M, {
      keys: e => null == e ? true : e.id,
      config: E(x({}, a.config.stiff), {
        clamp: true
      }),
      initial: null,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }, eg),
    eO = l.useCallback(e => {
      W(e), q(false)
    }, []),
    ej = et ? [] : (0, A.Cf)(T, M, H),
    {
      visibleParticipants: ev,
      participantTileWidth: ex
    } = (0, y.i4)(G, P);
  return (0, r.jsxs)("div", {
    className: s()(v.zr, j.tR, k),
    children: [(0, r.jsxs)("div", {
      className: v.QX,
      style: {
        opacity: $ && Y ? 0 : 1
      },
      children: [(0, r.jsxs)(a.animated.div, {
        className: v.pc,
        style: {
          top: eb.value.to(e => -e * S / 2)
        },
        children: [(0, r.jsx)(a.animated.div, {
          style: {
            width: eA.value
          },
          className: v.tN,
          children: (0, r.jsx)("div", {
            className: j.xS,
            style: {
              aspectRatio: eo
            },
            children: e_((e, t, n) => {
              let {
                key: l
              } = n;
              return null != t ? (0, r.jsx)(a.animated.div, {
                className: j.qX,
                style: e,
                children: (0, r.jsx)(m.Ay, {
                  focused: true,
                  noBorder: eu >= G || ec >= U,
                  channel: D,
                  className: j.JS,
                  videoComponent: F,
                  width: G,
                  participant: t,
                  onClick: i,
                  onDoubleClick: N,
                  onContextMenu: I,
                  onVideoResize: eO,
                  inCall: R,
                  popoutType: w,
                  controlsBottom: eh
                })
              }, l) : null
            })
          })
        }), el ? (0, r.jsx)(a.animated.div, {
          className: s()(v.$l, {
            [v.N7]: V
          }),
          style: {
            bottom: ey.value
          },
          children: (0, r.jsx)(d.A, {
            channelId: D.id,
            isParticipantsOpen: L,
            isVertical: true
          })
        }) : null]
      }), (0, r.jsx)(a.animated.div, {
        className: v.Vx,
        style: {
          translateY: em.value.to(e => e * S / 2),
          opacity: em.value,
          visibility: em.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(y.Ay, {
          channel: D,
          onClick: i,
          onContextMenu: I,
          onDoubleClick: N,
          participants: ev,
          participantTileWidth: ex,
          selectedParticipantId: M.id,
          inCall: R,
          popoutType: w,
          paused: X || !L
        })
      })]
    }), ej.length > 0 ? (0, r.jsx)(b.A, {
      onContextMenuParticipant: I,
      width: G,
      height: U,
      channel: D,
      participants: ej,
      onSelectParticipant: i
    }) : null]
  })
}