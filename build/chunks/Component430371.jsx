/** Chunk was on 5665 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
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
let S = 16 / 9,
  I = 8 + Chunk796638.cF;

function P(e) {
  var t;
  let n, {
      onSelectParticipant: l,
      onContextMenuParticipant: P,
      onFullscreenParticipant: Z,
      participants: T,
      filteredParticipants: N,
      popoutWindow: A,
      inCall: w,
      channel: R,
      selectedParticipant: M,
      showParticipants: D = true,
      className: L,
      width: k,
      height: U,
      layout: B,
      idle: F
    } = e,
    H = null != A,
    G = h.Z.getVideoComponent(),
    V = p.default.getId(),
    [z, W] = i.useState(null),
    q = (0, c.Z)(z),
    [Y, K] = i.useState(true),
    [X, Q] = i.useState(false),
    J = M.type === v.fO.ACTIVITY,
    $ = (0, u.Z)(J ? M.applicationId : true),
    ee = !J && null != M.streamId,
    et = U <= 2 * I + 144,
    en = D && !et,
    er = (0, c.Z)(en),
    ei = B === C.AEg.MINIMUM || B === C.AEg.NORMAL,
    el = !et && (!ei || J),
    ea = (0, m.Z)(el, 100),
    eo = (null != (t = (0, c.Z)(M.id)) ? t : M.id) !== M.id,
    es = 0;
  (J || en) && (es += 72), J && !en && (el ? es += 48 : es += 8), en && (es += .5 * I + 8);
  let ec = i.useMemo(() => J && $ ? k / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : S, [ee, z, J, k, U, es, $]),
    eu = U - 2 * es,
    ed = J && $ ? k : eu * ec,
    ep = Math.floor(Math.min(k, ed) / ec),
    eh = U > k / ec + 72 + I + 8;
  n = en || J ? en ? false : false : 40 + Math.max(0, 72 - (U - ep) / 2), i.useEffect(() => {
    let e = setTimeout(() => {
      K(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ef = Y || null == q,
    em = ef ? "animate-never" : "animate-always",
    eg = (0, s.q_F)({
      value: +!!en,
      delay: eh || !en ? 0 : 100,
      config: E(j({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => Q(true),
      onChange: () => f.S.dispatch(C.CkL.REMEASURE_TARGET),
      onRest: () => {
        Q(false), f.S.dispatch(C.CkL.REMEASURE_TARGET)
      }
    }, em),
    eb = (0, s.q_F)({
      value: +!!en,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    ey = (0, s.q_F)({
      value: ed,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, er === en && eb.value.idle && !ea || eo || ef ? "animate-never" : "animate-always"),
    e_ = (0, s.q_F)({
      value: n,
      config: E(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    eC = (0, s.Yzy)(M, {
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
    ev = i.useCallback(e => {
      W(e), K(false)
    }, []),
    ex = en ? [] : (0, y.n3)(T, M, V),
    {
      visibleParticipants: eO,
      participantTileWidth: ej
    } = (0, _.ZB)(k, N);
  return (0, r.jsxs)("div", {
    className: a()(O.root, x.flexCenter, L),
    children: [(0, r.jsxs)("div", {
      className: O.tileWrapper,
      style: {
        opacity: ee && Y ? 0 : 1
      },
      children: [(0, r.jsxs)(o.animated.div, {
        className: O.videoFrame,
        style: {
          top: eb.value.to(e => -e * I / 2)
        },
        children: [(0, r.jsx)(o.animated.div, {
          style: {
            width: ey.value
          },
          className: O.videoWrapper,
          children: (0, r.jsx)("div", {
            className: x.videoSizer,
            style: {
              aspectRatio: ec
            },
            children: eC((e, t, n) => {
              let {
                key: i
              } = n;
              return null != t ? (0, r.jsx)(o.animated.div, {
                className: x.videoWrapperAnimated,
                style: e,
                children: (0, r.jsx)(g.ZP, {
                  focused: true,
                  noBorder: ed >= k || eu >= U,
                  channel: R,
                  className: x.focusedVideo,
                  videoComponent: G,
                  width: k,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: P,
                  onVideoResize: ev,
                  inCall: w,
                  inPopout: H
                })
              }, i) : null
            })
          })
        }), el ? (0, r.jsx)(o.animated.div, {
          className: a()(O.actionRow, {
            [O.idle]: F
          }),
          style: {
            bottom: e_.value
          },
          children: (0, r.jsx)(d.Z, {
            channelId: R.id,
            isParticipantsOpen: D,
            isVertical: true
          })
        }) : null]
      }), (0, r.jsx)(o.animated.div, {
        className: O.participantsWrapperAnimated,
        style: {
          translateY: eg.value.to(e => e * I / 2),
          opacity: eg.value,
          visibility: eg.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(_.ZP, {
          channel: R,
          onClick: l,
          onContextMenu: P,
          onDoubleClick: Z,
          participants: eO,
          participantTileWidth: ej,
          selectedParticipantId: M.id,
          inCall: w,
          popoutWindow: A,
          paused: X || !D
        })
      })]
    }), ex.length > 0 ? (0, r.jsx)(b.Z, {
      onContextMenuParticipant: P,
      width: k,
      height: U,
      channel: R,
      participants: ex,
      onSelectParticipant: l
    }) : null]
  })
}