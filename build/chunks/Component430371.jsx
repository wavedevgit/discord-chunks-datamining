/** Chunk was on 34740 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk988980 = require("./988980.js"),
  Chunk157813 = require("./157813.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk585483 = require("./585483.js"),
  Chunk807705 = require("./807705.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk111248 = require("./111248.jsx"),
  Chunk312703 = require("./312703.js"),
  Chunk796638 = require("./796638.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk394024 = require("./394024.js"),
  Chunk597843 = require("./597843.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = 16 / 9,
  P = 8 + Chunk796638.cF;

function I(e) {
  var t;
  let n, {
      onSelectParticipant: l,
      onContextMenuParticipant: I,
      onFullscreenParticipant: Z,
      participants: T,
      filteredParticipants: N,
      popoutType: A,
      inCall: w,
      channel: M,
      selectedParticipant: R,
      showParticipants: L = true,
      className: k,
      width: D,
      height: U,
      layout: V,
      idle: F
    } = e,
    H = h.Z.getVideoComponent(),
    B = p.default.getId(),
    [G, z] = r.useState(null),
    W = (0, c.Z)(G),
    [q, K] = r.useState(true),
    [Y, X] = r.useState(false),
    J = R.type === _.fO.ACTIVITY,
    Q = (0, u.Z)(J ? R.applicationId : true),
    $ = !J && null != R.streamId,
    ee = U <= 2 * P + 144,
    et = L && !ee,
    en = (0, c.Z)(et),
    ei = V === v.AEg.MINIMUM || V === v.AEg.NORMAL,
    er = !ee && (!ei || J),
    el = (0, m.Z)(er, 100),
    ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
    eo = 0;
  (J || et) && (eo += 72), J && !et && (er ? eo += 48 : eo += 8), et && (eo += .5 * P + 8);
  let es = r.useMemo(() => J && Q ? D / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S, [$, G, J, D, U, eo, Q]),
    ec = U - 2 * eo,
    eu = J && Q ? D : ec * es,
    ed = Math.floor(Math.min(D, eu) / es),
    ep = U > D / es + 72 + P + 8;
  n = et || J ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2);
  let eh = 8 + Math.max(0, 72 - (U - ed) / 2);
  r.useEffect(() => {
    let e = setTimeout(() => {
      K(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ef = q || null == W,
    em = ef ? "animate-never" : "animate-always",
    eg = (0, s.q_F)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: j(E({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => X(true),
      onChange: () => f.S.dispatch(v.CkL.REMEASURE_TARGET),
      onRest: () => {
        X(false), f.S.dispatch(v.CkL.REMEASURE_TARGET)
      }
    }, em),
    eb = (0, s.q_F)({
      value: +!!et,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    eC = (0, s.q_F)({
      value: eu,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, en === et && eb.value.idle && !el || ea || ef ? "animate-never" : "animate-always"),
    ey = (0, s.q_F)({
      value: n,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    ev = (0, s.Yzy)(R, {
      keys: e => null == e ? true : e.id,
      config: j(E({}, o.config.stiff), {
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
    }, em),
    e_ = r.useCallback(e => {
      z(e), K(false)
    }, []),
    eO = et ? [] : (0, C.n3)(T, R, B),
    {
      visibleParticipants: ex,
      participantTileWidth: eE
    } = (0, y.ZB)(D, N);
  return (0, i.jsxs)("div", {
    className: a()(x.root, O.flexCenter, k),
    children: [(0, i.jsxs)("div", {
      className: x.tileWrapper,
      style: {
        opacity: $ && q ? 0 : 1
      },
      children: [(0, i.jsxs)(o.animated.div, {
        className: x.videoFrame,
        style: {
          top: eb.value.to(e => -e * P / 2)
        },
        children: [(0, i.jsx)(o.animated.div, {
          style: {
            width: eC.value
          },
          className: x.videoWrapper,
          children: (0, i.jsx)("div", {
            className: O.videoSizer,
            style: {
              aspectRatio: es
            },
            children: ev((e, t, n) => {
              let {
                key: r
              } = n;
              return null != t ? (0, i.jsx)(o.animated.div, {
                className: O.videoWrapperAnimated,
                style: e,
                children: (0, i.jsx)(g.ZP, {
                  focused: true,
                  noBorder: eu >= D || ec >= U,
                  channel: M,
                  className: O.focusedVideo,
                  videoComponent: H,
                  width: D,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: I,
                  onVideoResize: e_,
                  inCall: w,
                  popoutType: A,
                  controlsBottom: eh
                })
              }, r) : null
            })
          })
        }), er ? (0, i.jsx)(o.animated.div, {
          className: a()(x.actionRow, {
            [x.idle]: F
          }),
          style: {
            bottom: ey.value
          },
          children: (0, i.jsx)(d.Z, {
            channelId: M.id,
            isParticipantsOpen: L,
            isVertical: true
          })
        }) : null]
      }), (0, i.jsx)(o.animated.div, {
        className: x.participantsWrapperAnimated,
        style: {
          translateY: eg.value.to(e => e * P / 2),
          opacity: eg.value,
          visibility: eg.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, i.jsx)(y.ZP, {
          channel: M,
          onClick: l,
          onContextMenu: I,
          onDoubleClick: Z,
          participants: ex,
          participantTileWidth: eE,
          selectedParticipantId: R.id,
          inCall: w,
          popoutType: A,
          paused: Y || !L
        })
      })]
    }), eO.length > 0 ? (0, i.jsx)(b.Z, {
      onContextMenuParticipant: I,
      width: D,
      height: U,
      channel: M,
      participants: eO,
      onSelectParticipant: l
    }) : null]
  })
}