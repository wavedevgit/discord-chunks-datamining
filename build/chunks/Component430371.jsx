/** Chunk was on 40184 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
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
  Chunk676465 = require("./676465.js"),
  Chunk112370 = require("./112370.js");

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

function S(e, t) {
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
let _ = 16 / 9,
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
      layout: V,
      idle: H
    } = e,
    F = f.Z.getVideoComponent(),
    B = p.default.getId(),
    [G, W] = r.useState(null),
    z = (0, c.Z)(G),
    [q, K] = r.useState(true),
    [Y, X] = r.useState(false),
    J = R.type === x.fO.ACTIVITY,
    Q = (0, u.Z)(J ? R.applicationId : true),
    $ = !J && null != R.streamId,
    ee = U <= 2 * P + 144,
    et = D && !ee,
    en = (0, c.Z)(et),
    ei = V === v.AEg.MINIMUM || V === v.AEg.NORMAL,
    er = !ee && (!ei || J),
    el = (0, m.Z)(er, 100),
    ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
    eo = 0;
  (J || et) && (eo += 72), J && !et && (er ? eo += 48 : eo += 8), et && (eo += .5 * P + 8);
  let es = r.useMemo(() => J && Q ? L / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : _, [$, G, J, L, U, eo, Q]),
    ec = U - 2 * eo,
    eu = J && Q ? L : ec * es,
    ed = Math.floor(Math.min(L, eu) / es),
    ep = U > L / es + 72 + P + 8;
  n = et || J ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2);
  let ef = 8 + Math.max(0, 72 - (U - ed) / 2);
  r.useEffect(() => {
    let e = setTimeout(() => {
      K(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let eh = q || null == z,
    em = eh ? "animate-never" : "animate-always",
    eg = (0, s.q_F)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: S(j({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => X(true),
      onChange: () => h.S.dispatch(v.CkL.REMEASURE_TARGET),
      onRest: () => {
        X(false), h.S.dispatch(v.CkL.REMEASURE_TARGET)
      }
    }, em),
    eb = (0, s.q_F)({
      value: +!!et,
      config: S(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    ey = (0, s.q_F)({
      value: eu,
      config: S(j({}, o.config.stiff), {
        clamp: true
      })
    }, en === et && eb.value.idle && !el || ea || eh ? "animate-never" : "animate-always"),
    eC = (0, s.q_F)({
      value: n,
      config: S(j({}, o.config.stiff), {
        clamp: true
      })
    }, em),
    ev = (0, s.Yzy)(R, {
      keys: e => null == e ? true : e.id,
      config: S(j({}, o.config.stiff), {
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
    ex = r.useCallback(e => {
      W(e), K(false)
    }, []),
    eO = et ? [] : (0, y.n3)(T, R, B),
    {
      visibleParticipants: eE,
      participantTileWidth: ej
    } = (0, C.ZB)(L, N);
  return (0, i.jsxs)("div", {
    className: a()(E.root, O.flexCenter, k),
    children: [(0, i.jsxs)("div", {
      className: E.tileWrapper,
      style: {
        opacity: $ && q ? 0 : 1
      },
      children: [(0, i.jsxs)(o.animated.div, {
        className: E.videoFrame,
        style: {
          top: eb.value.to(e => -e * P / 2)
        },
        children: [(0, i.jsx)(o.animated.div, {
          style: {
            width: ey.value
          },
          className: E.videoWrapper,
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
                  noBorder: eu >= L || ec >= U,
                  channel: M,
                  className: O.focusedVideo,
                  videoComponent: F,
                  width: L,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: I,
                  onVideoResize: ex,
                  inCall: w,
                  popoutType: A,
                  controlsBottom: ef
                })
              }, r) : null
            })
          })
        }), er ? (0, i.jsx)(o.animated.div, {
          className: a()(E.actionRow, {
            [E.idle]: H
          }),
          style: {
            bottom: eC.value
          },
          children: (0, i.jsx)(d.Z, {
            channelId: M.id,
            isParticipantsOpen: D,
            isVertical: true
          })
        }) : null]
      }), (0, i.jsx)(o.animated.div, {
        className: E.participantsWrapperAnimated,
        style: {
          translateY: eg.value.to(e => e * P / 2),
          opacity: eg.value,
          visibility: eg.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, i.jsx)(C.ZP, {
          channel: M,
          onClick: l,
          onContextMenu: I,
          onDoubleClick: Z,
          participants: eE,
          participantTileWidth: ej,
          selectedParticipantId: R.id,
          inCall: w,
          popoutType: A,
          paused: Y || !D
        })
      })]
    }), eO.length > 0 ? (0, i.jsx)(b.Z, {
      onContextMenuParticipant: I,
      width: L,
      height: U,
      channel: M,
      participants: eO,
      onSelectParticipant: l
    }) : null]
  })
}