/** Chunk was on 97492 **/
/** chunk id: 699707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function E(e) {
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

function _(e, t) {
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
      className: G,
      width: k,
      height: U,
      layout: V,
      idle: F
    } = e,
    H = p.A.getVideoComponent(),
    B = f.default.getId(),
    [K, W] = l.useState(null),
    z = (0, c.A)(K),
    [Y, q] = l.useState(true),
    [X, J] = l.useState(false),
    Q = M.type === j.lp.ACTIVITY,
    Z = (0, u.A)(Q ? M.applicationId : true),
    $ = !Q && null != M.streamId,
    ee = U <= 2 * S + 144,
    et = L && !ee,
    en = (0, c.A)(et),
    er = V === O.DUB.MINIMUM || V === O.DUB.NORMAL,
    el = !ee && (!er || Q),
    ei = (0, b.A)(el, 100),
    ea = (null != (t = (0, c.A)(M.id)) ? t : M.id) !== M.id,
    es = 0;
  (Q || et) && (es += 72), Q && !et && (el ? es += 48 : es += 8), et && (es += .5 * S + 8);
  let eo = l.useMemo(() => Q && Z ? k / (U - 2 * es) : $ && null != K && K.width > 0 && K.height > 0 ? K.width / K.height : C, [$, K, Q, k, U, es, Z]),
    ec = U - 2 * es,
    eu = Q && Z ? k : ec * eo,
    ed = Math.floor(Math.min(k, eu) / eo),
    ef = U > k / eo + 72 + S + 8;
  n = et || Q ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2);
  let ep = 8 + Math.max(0, 72 - (U - ed) / 2);
  l.useEffect(() => {
    let e = setTimeout(() => {
      q(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let eh = Y || null == z,
    eb = eh ? "animate-never" : "animate-always",
    eg = (0, o.zhh)({
      value: +!!et,
      delay: ef || !et ? 0 : 100,
      config: _(E({}, s.config.stiff), {
        clamp: true
      }),
      onStart: () => J(true),
      onChange: () => h._.dispatch(O.jej.REMEASURE_TARGET),
      onRest: () => {
        J(false), h._.dispatch(O.jej.REMEASURE_TARGET)
      }
    }, eb),
    em = (0, o.zhh)({
      value: +!!et,
      config: _(E({}, s.config.stiff), {
        clamp: true
      })
    }, eb),
    eA = (0, o.zhh)({
      value: eu,
      config: _(E({}, s.config.stiff), {
        clamp: true
      })
    }, en === et && em.value.idle && !ei || ea || eh ? "animate-never" : "animate-always"),
    ey = (0, o.zhh)({
      value: n,
      config: _(E({}, s.config.stiff), {
        clamp: true
      })
    }, eb),
    eO = (0, o.pnh)(M, {
      keys: e => null == e ? true : e.id,
      config: _(E({}, s.config.stiff), {
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
    }, eb),
    ej = l.useCallback(e => {
      W(e), q(false)
    }, []),
    ev = et ? [] : (0, A.Cf)(T, M, B),
    {
      visibleParticipants: ex,
      participantTileWidth: eE
    } = (0, y.i4)(k, P);
  return (0, r.jsxs)("div", {
    className: a()(x.zr, v.tR, G),
    children: [(0, r.jsxs)("div", {
      className: x.QX,
      style: {
        opacity: $ && Y ? 0 : 1
      },
      children: [(0, r.jsxs)(s.animated.div, {
        className: x.pc,
        style: {
          top: em.value.to(e => -e * S / 2)
        },
        children: [(0, r.jsx)(s.animated.div, {
          style: {
            width: eA.value
          },
          className: x.tN,
          children: (0, r.jsx)("div", {
            className: v.xS,
            style: {
              aspectRatio: eo
            },
            children: eO((e, t, n) => {
              let {
                key: l
              } = n;
              return null != t ? (0, r.jsx)(s.animated.div, {
                className: v.qX,
                style: e,
                children: (0, r.jsx)(g.Ay, {
                  focused: true,
                  noBorder: eu >= k || ec >= U,
                  channel: D,
                  className: v.JS,
                  videoComponent: H,
                  width: k,
                  participant: t,
                  onClick: i,
                  onDoubleClick: N,
                  onContextMenu: I,
                  onVideoResize: ej,
                  inCall: R,
                  popoutType: w,
                  controlsBottom: ep
                })
              }, l) : null
            })
          })
        }), el ? (0, r.jsx)(s.animated.div, {
          className: a()(x.$l, {
            [x.N7]: F
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
      }), (0, r.jsx)(s.animated.div, {
        className: x.Vx,
        style: {
          translateY: eg.value.to(e => e * S / 2),
          opacity: eg.value,
          visibility: eg.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(y.Ay, {
          channel: D,
          onClick: i,
          onContextMenu: I,
          onDoubleClick: N,
          participants: ex,
          participantTileWidth: eE,
          selectedParticipantId: M.id,
          inCall: R,
          popoutType: w,
          paused: X || !L
        })
      })]
    }), ev.length > 0 ? (0, r.jsx)(m.A, {
      onContextMenuParticipant: I,
      width: k,
      height: U,
      channel: D,
      participants: ev,
      onSelectParticipant: i
    }) : null]
  })
}