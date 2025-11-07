/** Chunk was on 57336 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
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

function j(e) {
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

function E(e, t) {
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
      className: D,
      width: k,
      height: U,
      layout: B,
      idle: H
    } = e,
    V = h.Z.getVideoComponent(),
    F = p.default.getId(),
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
    ei = B === v.AEg.MINIMUM || B === v.AEg.NORMAL,
    er = !ee && (!ei || J),
    el = (0, m.Z)(er, 100),
    ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
    eo = 0;
  (J || et) && (eo += 72), J && !et && (er ? eo += 48 : eo += 8), et && (eo += .5 * P + 8);
  let es = r.useMemo(() => J && Q ? k / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S, [$, G, J, k, U, eo, Q]),
    ec = U - 2 * eo,
    eu = J && Q ? k : ec * es,
    ed = Math.floor(Math.min(k, eu) / es),
    ep = U > k / es + 72 + P + 8;
  n = et || J ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2), r.useEffect(() => {
    let e = setTimeout(() => {
      K(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let eh = q || null == W,
    ef = eh ? "animate-never" : "animate-always",
    em = (0, s.q_F)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: E(j({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => X(true),
      onChange: () => f.S.dispatch(v.CkL.REMEASURE_TARGET),
      onRest: () => {
        X(false), f.S.dispatch(v.CkL.REMEASURE_TARGET)
      }
    }, ef),
    eg = (0, s.q_F)({
      value: +!!et,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, ef),
    eb = (0, s.q_F)({
      value: eu,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, en === et && eg.value.idle && !el || ea || eh ? "animate-never" : "animate-always"),
    ey = (0, s.q_F)({
      value: n,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, ef),
    eC = (0, s.Yzy)(R, {
      keys: e => null == e ? true : e.id,
      config: E(j({}, o.config.stiff), {
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
    }, ef),
    ev = r.useCallback(e => {
      z(e), K(false)
    }, []),
    e_ = et ? [] : (0, y.n3)(T, R, F),
    {
      visibleParticipants: ex,
      participantTileWidth: eO
    } = (0, C.ZB)(k, N);
  return (0, i.jsxs)("div", {
    className: a()(O.root, x.flexCenter, D),
    children: [(0, i.jsxs)("div", {
      className: O.tileWrapper,
      style: {
        opacity: $ && q ? 0 : 1
      },
      children: [(0, i.jsxs)(o.animated.div, {
        className: O.videoFrame,
        style: {
          top: eg.value.to(e => -e * P / 2)
        },
        children: [(0, i.jsx)(o.animated.div, {
          style: {
            width: eb.value
          },
          className: O.videoWrapper,
          children: (0, i.jsx)("div", {
            className: x.videoSizer,
            style: {
              aspectRatio: es
            },
            children: eC((e, t, n) => {
              let {
                key: r
              } = n;
              return null != t ? (0, i.jsx)(o.animated.div, {
                className: x.videoWrapperAnimated,
                style: e,
                children: (0, i.jsx)(g.ZP, {
                  focused: true,
                  noBorder: eu >= k || ec >= U,
                  channel: M,
                  className: x.focusedVideo,
                  videoComponent: V,
                  width: k,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: I,
                  onVideoResize: ev,
                  inCall: w,
                  popoutType: A
                })
              }, r) : null
            })
          })
        }), er ? (0, i.jsx)(o.animated.div, {
          className: a()(O.actionRow, {
            [O.idle]: H
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
        className: O.participantsWrapperAnimated,
        style: {
          translateY: em.value.to(e => e * P / 2),
          opacity: em.value,
          visibility: em.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, i.jsx)(C.ZP, {
          channel: M,
          onClick: l,
          onContextMenu: I,
          onDoubleClick: Z,
          participants: ex,
          participantTileWidth: eO,
          selectedParticipantId: R.id,
          inCall: w,
          popoutType: A,
          paused: Y || !L
        })
      })]
    }), e_.length > 0 ? (0, i.jsx)(b.Z, {
      onContextMenuParticipant: I,
      width: k,
      height: U,
      channel: M,
      participants: e_,
      onSelectParticipant: l
    }) : null]
  })
}