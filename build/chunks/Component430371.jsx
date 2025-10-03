/** Chunk was on 50118 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
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
      participants: N,
      filteredParticipants: T,
      popoutWindow: A,
      inCall: w,
      channel: M,
      selectedParticipant: R,
      showParticipants: k = true,
      className: L,
      width: D,
      height: U,
      layout: B,
      idle: H
    } = e,
    V = null != A,
    F = h.Z.getVideoComponent(),
    G = p.default.getId(),
    [z, W] = r.useState(null),
    q = (0, c.Z)(z),
    [K, Y] = r.useState(true),
    [X, J] = r.useState(false),
    Q = R.type === v.fO.ACTIVITY,
    $ = (0, u.Z)(Q ? R.applicationId : true),
    ee = !Q && null != R.streamId,
    et = U <= 2 * P + 144,
    en = k && !et,
    ei = (0, c.Z)(en),
    er = B === _.AEg.MINIMUM || B === _.AEg.NORMAL,
    el = !et && (!er || Q),
    ea = (0, m.Z)(el, 100),
    eo = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
    es = 0;
  (Q || en) && (es += 72), Q && !en && (el ? es += 48 : es += 8), en && (es += .5 * P + 8);
  let ec = r.useMemo(() => Q && $ ? D / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : S, [ee, z, Q, D, U, es, $]),
    eu = U - 2 * es,
    ed = Q && $ ? D : eu * ec,
    ep = Math.floor(Math.min(D, ed) / ec),
    eh = U > D / ec + 72 + P + 8;
  n = en || Q ? en ? false : false : 40 + Math.max(0, 72 - (U - ep) / 2), r.useEffect(() => {
    let e = setTimeout(() => {
      Y(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ef = K || null == q,
    em = ef ? "animate-never" : "animate-always",
    eg = (0, s.q_F)({
      value: +!!en,
      delay: eh || !en ? 0 : 100,
      config: E(j({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => J(true),
      onChange: () => f.S.dispatch(_.CkL.REMEASURE_TARGET),
      onRest: () => {
        J(false), f.S.dispatch(_.CkL.REMEASURE_TARGET)
      }
    }, em),
    eb = (0, s.q_F)({
      value: +!!en,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    eC = (0, s.q_F)({
      value: ed,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, ei === en && eb.value.idle && !ea || eo || ef ? "animate-never" : "animate-always"),
    ey = (0, s.q_F)({
      value: n,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    e_ = (0, s.Yzy)(R, {
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
    }, em),
    ev = r.useCallback(e => {
      W(e), Y(false)
    }, []),
    ex = en ? [] : (0, C.n3)(N, R, G),
    {
      visibleParticipants: eO,
      participantTileWidth: ej
    } = (0, y.ZB)(D, T);
  return (0, i.jsxs)("div", {
    className: a()(O.root, x.flexCenter, L),
    children: [(0, i.jsxs)("div", {
      className: O.tileWrapper,
      style: {
        opacity: ee && K ? 0 : 1
      },
      children: [(0, i.jsxs)(o.animated.div, {
        className: O.videoFrame,
        style: {
          top: eb.value.to(e => -e * P / 2)
        },
        children: [(0, i.jsx)(o.animated.div, {
          style: {
            width: eC.value
          },
          className: O.videoWrapper,
          children: (0, i.jsx)("div", {
            className: x.videoSizer,
            style: {
              aspectRatio: ec
            },
            children: e_((e, t, n) => {
              let {
                key: r
              } = n;
              return null != t ? (0, i.jsx)(o.animated.div, {
                className: x.videoWrapperAnimated,
                style: e,
                children: (0, i.jsx)(g.ZP, {
                  focused: true,
                  noBorder: ed >= D || eu >= U,
                  channel: M,
                  className: x.focusedVideo,
                  videoComponent: F,
                  width: D,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: I,
                  onVideoResize: ev,
                  inCall: w,
                  inPopout: V
                })
              }, r) : null
            })
          })
        }), el ? (0, i.jsx)(o.animated.div, {
          className: a()(O.actionRow, {
            [O.idle]: H
          }),
          style: {
            bottom: ey.value
          },
          children: (0, i.jsx)(d.Z, {
            channelId: M.id,
            isParticipantsOpen: k,
            isVertical: true
          })
        }) : null]
      }), (0, i.jsx)(o.animated.div, {
        className: O.participantsWrapperAnimated,
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
          participants: eO,
          participantTileWidth: ej,
          selectedParticipantId: R.id,
          inCall: w,
          popoutWindow: A,
          paused: X || !k
        })
      })]
    }), ex.length > 0 ? (0, i.jsx)(b.Z, {
      onContextMenuParticipant: I,
      width: D,
      height: U,
      channel: M,
      participants: ex,
      onSelectParticipant: l
    }) : null]
  })
}