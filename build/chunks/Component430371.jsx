/** Chunk was on 81985 **/
/** chunk id: 430371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
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

function S(e, t) {
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
let _ = 16 / 9,
  I = 8 + Chunk796638.cF;

function P(e) {
  var t;
  let n, {
      onSelectParticipant: l,
      onContextMenuParticipant: P,
      onFullscreenParticipant: Z,
      participants: N,
      filteredParticipants: T,
      popoutType: A,
      inCall: w,
      channel: R,
      selectedParticipant: D,
      showParticipants: M = true,
      className: k,
      width: L,
      height: U,
      layout: G,
      idle: B
    } = e,
    F = f.Z.getVideoComponent(),
    H = p.default.getId(),
    [V, z] = i.useState(null),
    W = (0, c.Z)(V),
    [K, Y] = i.useState(true),
    [q, X] = i.useState(false),
    Q = D.type === j.fO.ACTIVITY,
    J = (0, u.Z)(Q ? D.applicationId : true),
    $ = !Q && null != D.streamId,
    ee = U <= 2 * I + 144,
    et = M && !ee,
    en = (0, c.Z)(et),
    er = G === O.AEg.MINIMUM || G === O.AEg.NORMAL,
    ei = !ee && (!er || Q),
    el = (0, g.Z)(ei, 100),
    ea = (null != (t = (0, c.Z)(D.id)) ? t : D.id) !== D.id,
    eo = 0;
  (Q || et) && (eo += 72), Q && !et && (ei ? eo += 48 : eo += 8), et && (eo += .5 * I + 8);
  let es = i.useMemo(() => Q && J ? L / (U - 2 * eo) : $ && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : _, [$, V, Q, L, U, eo, J]),
    ec = U - 2 * eo,
    eu = Q && J ? L : ec * es,
    ed = Math.floor(Math.min(L, eu) / es),
    ep = U > L / es + 72 + I + 8;
  n = et || Q ? et ? false : false : 40 + Math.max(0, 72 - (U - ed) / 2);
  let ef = 8 + Math.max(0, 72 - (U - ed) / 2);
  i.useEffect(() => {
    let e = setTimeout(() => {
      Y(false)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let eh = K || null == W,
    eg = eh ? "animate-never" : "animate-always",
    em = (0, s.q_F)({
      value: +!!et,
      delay: ep || !et ? 0 : 100,
      config: S(E({}, o.config.stiff), {
        clamp: true
      }),
      onStart: () => X(true),
      onChange: () => h.S.dispatch(O.CkL.REMEASURE_TARGET),
      onRest: () => {
        X(false), h.S.dispatch(O.CkL.REMEASURE_TARGET)
      }
    }, eg),
    eb = (0, s.q_F)({
      value: +!!et,
      config: S(E({}, o.config.stiff), {
        clamp: true
      })
    }, eg),
    ey = (0, s.q_F)({
      value: eu,
      config: S(E({}, o.config.stiff), {
        clamp: true
      })
    }, en === et && eb.value.idle && !el || ea || eh ? "animate-never" : "animate-always"),
    ev = (0, s.q_F)({
      value: n,
      config: S(E({}, o.config.stiff), {
        clamp: true
      })
    }, eg),
    eO = (0, s.Yzy)(D, {
      keys: e => null == e ? true : e.id,
      config: S(E({}, o.config.stiff), {
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
    ej = i.useCallback(e => {
      z(e), Y(false)
    }, []),
    ex = et ? [] : (0, y.n3)(N, D, H),
    {
      visibleParticipants: eC,
      participantTileWidth: eE
    } = (0, v.ZB)(L, T);
  return (0, r.jsxs)("div", {
    className: a()(C.root, x.flexCenter, k),
    children: [(0, r.jsxs)("div", {
      className: C.tileWrapper,
      style: {
        opacity: $ && K ? 0 : 1
      },
      children: [(0, r.jsxs)(o.animated.div, {
        className: C.videoFrame,
        style: {
          top: eb.value.to(e => -e * I / 2)
        },
        children: [(0, r.jsx)(o.animated.div, {
          style: {
            width: ey.value
          },
          className: C.videoWrapper,
          children: (0, r.jsx)("div", {
            className: x.videoSizer,
            style: {
              aspectRatio: es
            },
            children: eO((e, t, n) => {
              let {
                key: i
              } = n;
              return null != t ? (0, r.jsx)(o.animated.div, {
                className: x.videoWrapperAnimated,
                style: e,
                children: (0, r.jsx)(m.ZP, {
                  focused: true,
                  noBorder: eu >= L || ec >= U,
                  channel: R,
                  className: x.focusedVideo,
                  videoComponent: F,
                  width: L,
                  participant: t,
                  onClick: l,
                  onDoubleClick: Z,
                  onContextMenu: P,
                  onVideoResize: ej,
                  inCall: w,
                  popoutType: A,
                  controlsBottom: ef
                })
              }, i) : null
            })
          })
        }), ei ? (0, r.jsx)(o.animated.div, {
          className: a()(C.actionRow, {
            [C.idle]: B
          }),
          style: {
            bottom: ev.value
          },
          children: (0, r.jsx)(d.Z, {
            channelId: R.id,
            isParticipantsOpen: M,
            isVertical: true
          })
        }) : null]
      }), (0, r.jsx)(o.animated.div, {
        className: C.participantsWrapperAnimated,
        style: {
          translateY: em.value.to(e => e * I / 2),
          opacity: em.value,
          visibility: em.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, r.jsx)(v.ZP, {
          channel: R,
          onClick: l,
          onContextMenu: P,
          onDoubleClick: Z,
          participants: eC,
          participantTileWidth: eE,
          selectedParticipantId: D.id,
          inCall: w,
          popoutType: A,
          paused: q || !M
        })
      })]
    }), ex.length > 0 ? (0, r.jsx)(b.Z, {
      onContextMenuParticipant: P,
      width: L,
      height: U,
      channel: R,
      participants: ex,
      onSelectParticipant: l
    }) : null]
  })
}