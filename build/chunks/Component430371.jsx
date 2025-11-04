/** Chunk was on 88647 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk689628 = require("./689628.js"),
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

function j(e, t) {
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
      showParticipants: D = true,
      className: k,
      width: L,
      height: U,
      layout: B,
      idle: F
    } = e,
    V = f.Z.getVideoComponent(),
    H = p.default.getId(),
    [G, W] = i.useState(null),
    z = (0, c.Z)(G),
    [q, Y] = i.useState(true),
    [K, X] = i.useState(false),
    J = R.type === v.fO.ACTIVITY,
    Q = (0, u.Z)(J ? R.applicationId : true),
    $ = !J && null != R.streamId,
    ee = U <= 2 * P + 144,
    et = D && !ee,
    en = (0, c.Z)(et),
    er = B === C.AEg.MINIMUM || B === C.AEg.NORMAL,
    ei = !ee && (!er || J),
    el = (0, m.Z)(ei, 100),
    ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
    eo = 0;
  (J || et) && (eo += 72), J && !et && (ei ? eo += 48 : eo += 8), et && (eo += .5 * P + 8);
  let es = i.useMemo(() => J && Q ? L / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S, [$, G, J, L, U, eo, Q]),
    ec = U - 2 * eo,
    eu = J && Q ? L : ec * es,
    ed = Math.floor(Math.min(L, eu) / es),
    ep = U > L / es + 72 + P + 8;
  n = et || J ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2), i.useEffect(() => {
    let e = setTimeout(() => {
      Y(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ef = q || null == z,
    eh = ef ? "animate-never" : "animate-always",
    em = (0, s.q_F)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: j(E({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => X(true),
      onChange: () => h.S.dispatch(C.CkL.REMEASURE_TARGET),
      onRest: () => {
        X(false), h.S.dispatch(C.CkL.REMEASURE_TARGET)
      }
    }, eh),
    eg = (0, s.q_F)({
      value: +!!et,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, eh),
    eb = (0, s.q_F)({
      value: eu,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, en === et && eg.value.idle && !el || ea || ef ? "animate-never" : "animate-always"),
    e_ = (0, s.q_F)({
      value: n,
      config: j(E({}, o.config.stiff), {
        clamp: true
      })
    }, eh),
    ey = (0, s.Yzy)(R, {
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
    }, eh),
    eC = i.useCallback(e => {
      W(e), Y(false)
    }, []),
    ev = et ? [] : (0, _.n3)(T, R, H),
    {
      visibleParticipants: eO,
      participantTileWidth: ex
    } = (0, y.ZB)(L, N);
  return (0, r.jsxs)("div", {
    className: a()(x.root, O.flexCenter, k),
    children: [(0, r.jsxs)("div", {
      className: x.tileWrapper,
      style: {
        opacity: $ && q ? 0 : 1
      },
      children: [(0, r.jsxs)(o.animated.div, {
        className: x.videoFrame,
        style: {
          top: eg.value.to(e => -e * P / 2)
        },
        children: [(0, r.jsx)(o.animated.div, {
          style: {
            width: eb.value
          },
          className: x.videoWrapper,
          children: (0, r.jsx)("div", {
            className: O.videoSizer,
            style: {
              aspectRatio: es
            },
            children: ey((e, t, n) => {
              let {
                key: i
              } = n;
              return null != t ? (0, r.jsx)(o.animated.div, {
                className: O.videoWrapperAnimated,
                style: e,
                children: (0, r.jsx)(g.ZP, {
                  focused: true,
                  noBorder: eu >= L || ec >= U,
                  channel: M,
                  className: O.focusedVideo,
                  videoComponent: V,
                  width: L,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: I,
                  onVideoResize: eC,
                  inCall: w,
                  popoutType: A
                })
              }, i) : null
            })
          })
        }), ei ? (0, r.jsx)(o.animated.div, {
          className: a()(x.actionRow, {
            [x.idle]: F
          }),
          style: {
            bottom: e_.value
          },
          children: (0, r.jsx)(d.Z, {
            channelId: M.id,
            isParticipantsOpen: D,
            isVertical: true
          })
        }) : null]
      }), (0, r.jsx)(o.animated.div, {
        className: x.participantsWrapperAnimated,
        style: {
          translateY: em.value.to(e => e * P / 2),
          opacity: em.value,
          visibility: em.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(y.ZP, {
          channel: M,
          onClick: l,
          onContextMenu: I,
          onDoubleClick: Z,
          participants: eO,
          participantTileWidth: ex,
          selectedParticipantId: R.id,
          inCall: w,
          popoutType: A,
          paused: K || !D
        })
      })]
    }), ev.length > 0 ? (0, r.jsx)(b.Z, {
      onContextMenuParticipant: I,
      width: L,
      height: U,
      channel: M,
      participants: ev,
      onSelectParticipant: l
    }) : null]
  })
}