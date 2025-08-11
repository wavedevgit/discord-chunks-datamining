/** Chunk was on web.js **/
/** chunk id: 430371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
  Chunk363987 = require("./363987.js"),
  Chunk999976 = require("./999976.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 16 / 9,
  R = 8,
  P = 8 + Chunk796638.cF,
  w = 72,
  D = 32,
  L = 100;

function x(e) {
  var t;
  let n, {
      onSelectParticipant: o,
      onContextMenuParticipant: T,
      onFullscreenParticipant: A,
      participants: x,
      filteredParticipants: M,
      popoutWindow: k,
      inCall: j,
      channel: U,
      selectedParticipant: G,
      showParticipants: B = true,
      className: Z,
      width: F,
      height: V,
      layout: H,
      idle: Y
    } = e,
    W = null != k,
    K = _.Z.getVideoComponent(),
    z = f.default.getId(),
    [q, X] = i.useState(null),
    Q = (0, c.Z)(q),
    [J, $] = i.useState(true),
    [ee, et] = i.useState(false),
    en = G.type === O.fO.ACTIVITY,
    er = (0, u.Z)(en ? G.applicationId : true),
    ei = !en && null != G.streamId,
    eo = V <= 2 * P + 2 * w,
    ea = B && !eo,
    es = (0, c.Z)(ea),
    el = H === y.AEg.MINIMUM || H === y.AEg.NORMAL,
    ec = !eo && (!el || en),
    eu = (0, h.Z)(ec, L),
    ed = (null != (t = (0, c.Z)(G.id)) ? t : G.id) !== G.id,
    ef = 0;
  (en || ea) && (ef += w), en && !ea && (ec ? ef += D + 2 * R : ef += R), ea && (ef += .5 * P + R);
  let e_ = i.useMemo(() => en && er ? F / (V - 2 * ef) : ei && null != q && q.width > 0 && q.height > 0 ? q.width / q.height : C, [ei, q, en, F, V, ef, er]),
    ep = V - 2 * ef,
    eh = en && er ? F : ep * e_,
    em = Math.floor(Math.min(F, eh) / e_),
    eg = V > F / e_ + w + P + R;
  n = ea || en ? ea ? false : -R : D + R + Math.max(0, w - (V - em) / 2), i.useEffect(() => {
    let e = setTimeout(() => {
      $(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let eE = J || null == Q,
    eb = eE ? "animate-never" : "animate-always",
    ey = (0, l.q_F)({
      value: +!!ea,
      delay: eg || !ea ? 0 : 100,
      config: N(S({}, s.config.stiff), {
        clamp: true
      }),
      onStart: () => et(true),
      onChange: () => p.S.dispatch(y.CkL.REMEASURE_TARGET),
      onRest: () => {
        et(false), p.S.dispatch(y.CkL.REMEASURE_TARGET)
      }
    }, eb),
    eO = (0, l.q_F)({
      value: +!!ea,
      config: N(S({}, s.config.stiff), {
        clamp: true
      })
    }, eb),
    ev = (0, l.q_F)({
      value: eh,
      config: N(S({}, s.config.stiff), {
        clamp: true
      })
    }, es === ea && eO.value.idle && !eu || ed || eE ? "animate-never" : "animate-always"),
    eI = (0, l.q_F)({
      value: n,
      config: N(S({}, s.config.stiff), {
        clamp: true
      })
    }, eb),
    eT = (0, l.Yzy)(G, {
      keys: e => null == e ? true : e.id,
      config: N(S({}, s.config.stiff), {
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
    eS = i.useCallback(e => {
      X(e), $(false)
    }, []),
    eA = ea ? [] : (0, E.n3)(x, G, z),
    {
      visibleParticipants: eN,
      participantTileWidth: eC
    } = (0, b.ZB)(F, M);
  return (0, r.jsxs)("div", {
    className: a()(I.root, v.flexCenter, Z),
    children: [(0, r.jsxs)("div", {
      className: I.tileWrapper,
      style: {
        opacity: ei && J ? 0 : 1
      },
      children: [(0, r.jsxs)(s.animated.div, {
        className: I.videoFrame,
        style: {
          top: eO.value.to(e => -e * P / 2)
        },
        children: [(0, r.jsx)(s.animated.div, {
          style: {
            width: ev.value
          },
          className: I.videoWrapper,
          children: (0, r.jsx)("div", {
            className: v.videoSizer,
            style: {
              aspectRatio: e_
            },
            children: eT((e, t, n) => {
              let {
                key: i
              } = n;
              return null != t ? (0, r.jsx)(s.animated.div, {
                className: v.videoWrapperAnimated,
                style: e,
                children: (0, r.jsx)(m.ZP, {
                  focused: true,
                  noBorder: eh >= F || ep >= V,
                  channel: U,
                  className: v.focusedVideo,
                  videoComponent: K,
                  width: F,
                  participant: t,
                  onClick: o,
                  onDoubleClick: A,
                  onContextMenu: T,
                  onVideoResize: eS,
                  inCall: j,
                  inPopout: W
                })
              }, i) : null
            })
          })
        }), ec ? (0, r.jsx)(s.animated.div, {
          className: a()(I.actionRow, {
            [I.idle]: Y
          }),
          style: {
            bottom: eI.value
          },
          children: (0, r.jsx)(d.Z, {
            channelId: U.id,
            isParticipantsOpen: B,
            isVertical: true
          })
        }) : null]
      }), (0, r.jsx)(s.animated.div, {
        className: I.participantsWrapperAnimated,
        style: {
          translateY: ey.value.to(e => e * P / 2),
          opacity: ey.value,
          visibility: ey.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(b.ZP, {
          channel: U,
          onClick: o,
          onContextMenu: T,
          onDoubleClick: A,
          participants: eN,
          participantTileWidth: eC,
          selectedParticipantId: G.id,
          inCall: j,
          popoutWindow: k,
          paused: ee || !B
        })
      })]
    }), eA.length > 0 ? (0, r.jsx)(g.Z, {
      onContextMenuParticipant: T,
      width: F,
      height: V,
      channel: U,
      participants: eA,
      onSelectParticipant: o
    }) : null]
  })
}