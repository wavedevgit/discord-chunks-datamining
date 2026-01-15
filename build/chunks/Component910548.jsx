/** Chunk was on web.js **/
/** chunk id: 910548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => en
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk772848 = require("./772848.js"),
  Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk549006 = require("./549006.js"),
  Chunk64078 = require("./64078.js"),
  Chunk29270 = require("./29270.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk333748 = require("./333748.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = 50,
  P = {
    enter: {
      BEG: 0,
      END: 22
    },
    confetti: {
      BEG: 23,
      END: 119
    },
    leaf_peel: {
      BEG: 120,
      END: 160
    },
    leaf_fall: {
      BEG: 161,
      END: 163
    },
    exit: {
      BEG: 164,
      END: 200
    }
  };
var w = function(e) {
  return e.TOP_LEFT = "TOP_LEFT", e.TOP_RIGHT = "TOP_RIGHT", e.BOTTOM_LEFT = "BOTTOM_LEFT", e.BOTTOM_RIGHT = "BOTTOM_RIGHT", e
}({});
let R = ["TOP_LEFT", "TOP_RIGHT"],
  D = (0, Chunk468194.Mg)(Chunk477690.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  x = 11,
  L = 125,
  j = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  M = 10,
  k = 80,
  U = 80,
  G = 180,
  Z = 8,
  F = 12,
  B = Object.freeze({
    TOP_LEFT: {
      getConfettiPosition: e => ({
        x: e - x,
        y: e - L
      }),
      confettiVelocityDirection: {
        x: 1,
        y: 1
      },
      leafPosition: {
        x: 100,
        y: 144
      },
      leafRotationDirection: 1
    },
    TOP_RIGHT: {
      getConfettiPosition: e => ({
        x: x,
        y: e - L
      }),
      confettiVelocityDirection: {
        x: false,
        y: 1
      },
      leafPosition: {
        x: 90,
        y: 144
      },
      leafRotationDirection: false
    },
    BOTTOM_LEFT: A(T({}, j), {
      getConfettiPosition: e => ({
        x: e - x,
        y: L
      }),
      confettiVelocityDirection: {
        x: 1,
        y: false
      }
    }),
    BOTTOM_RIGHT: A(T({}, j), {
      getConfettiPosition: e => ({
        x: x,
        y: L
      }),
      confettiVelocityDirection: {
        x: false,
        y: false
      }
    })
  }),
  V = "falling-leaf";

function H(e) {
  switch (e.type) {
    case O.uaV.GUILD_BOOST_TIER_1:
      return O.Eu4.TIER_1;
    case O.uaV.GUILD_BOOST_TIER_2:
      return O.Eu4.TIER_2;
    case O.uaV.GUILD_BOOST_TIER_3:
      return O.Eu4.TIER_3
  }
  return null
}

function Y() {
  switch (Math.floor(Math.random() * Object.keys(w).length)) {
    case 0:
      return "TOP_LEFT";
    case 2:
      return "TOP_RIGHT";
    case 3:
      return "BOTTOM_LEFT";
    default:
      return "BOTTOM_RIGHT"
  }
}
let W = 45,
  K = ["#61D5B2"],
  Chunk303893 = require("./303893.js"),
  Chunk313226 = require("./313226.js"),
  Q = [Chunk303893, Chunk313226];

function X() {
  return n.e("77843").then(n.t.bind(n, 931152, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function J(e, t) {
  if (null == e) return "enter";
  switch (e) {
    case "enter":
      return "confetti";
    case "confetti":
      if (R.includes(t)) return "leaf_peel";
      return "exit";
    case "leaf_peel":
      return "leaf_fall";
    case "leaf_fall":
      return "exit";
    case "exit":
      return "enter"
  }
}

function $(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : D,
    r = null == e ? true : e.getBoundingClientRect();
  if (null == r) return {
    x: 0,
    y: 0
  };
  let i = B[t].getConfettiPosition(n);
  return {
    x: r.left + i.x,
    y: r.top + i.y
  }
}

function ee(e, t) {
  let n = null == e ? true : e.getBoundingClientRect();
  if (null == n) return {
    x: 0,
    y: 0
  };
  let r = B[t];
  return {
    x: n.left + r.leafPosition.x,
    y: n.top + r.leafPosition.y
  }
}

function et(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: a,
    size: c
  } = e, u = i.useRef(null), [p, _] = i.useState(null), [h] = i.useState(null != a ? a : Y()), {
    createMultipleConfettiAt: m,
    confettiCanvas: g
  } = i.useContext(f.h), [E, b] = i.useState(null), y = (0, s.uR)(g, E), O = J(p, h), v = R.includes(h), I = v && "exit" === p, T = i.useCallback(e => {
    _(e)
  }, []), C = i.useCallback(() => {
    "exit" === p && (null == t || t())
  }, [t, p]), A = i.useCallback(e => {
    u.current = e
  }, []);
  return i.useEffect(() => {
    if ("confetti" === p) {
      let {
        confettiVelocityDirection: e
      } = B[h], t = $(u.current, h, c);
      m(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: M * e.x,
            y: U * e.y
          },
          maxValue: {
            x: k * e.x,
            y: G * e.y
          }
        }
      })
    }
  }, [m, h, p, c]), i.useEffect(() => {
    if (v && "leaf_fall" === p) {
      let e = B[h].leafRotationDirection;
      y.createConfetti({
        id: "".concat(V, "-").concat((0, l.Z)()),
        position: {
          type: "static",
          value: ee(u.current, h)
        },
        size: {
          type: "static",
          value: W
        },
        rotation: {
          type: "linear-random",
          minValue: {
            x: 0,
            y: 0,
            z: 0
          },
          maxValue: {
            x: 0,
            y: 0,
            z: 0
          },
          minAddValue: {
            x: 0,
            y: 0,
            z: Z * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: F * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === h ? z : q
      })
    }
  }, [v, y, h, p]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Ji, {
      ref: b,
      sprites: Q,
      colors: K,
      spriteWidth: W,
      spriteHeight: W
    }), (0, r.jsx)(d.P3F, {
      onClick: n,
      className: o()(S.easterEggAnimationClickTarget, {
        [S.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === h,
        [S.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === h,
        [S.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === h,
        [S.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === h
      }),
      children: (0, r.jsx)(d.kci, {
        animationRef: A,
        className: o()(S.easterEggAnimation, {
          [S.easterEggAnimationHideLeaf]: I
        }),
        nextScene: O,
        sceneSegments: P,
        onScenePlay: T,
        onSceneComplete: C,
        importData: X,
        pauseWhileUnfocused: false
      })
    })]
  })
}

function en(e) {
  let t, {
      message: n,
      compact: a,
      guild: o,
      usernameHook: s,
      onClickMessage: l
    } = e,
    c = H(n),
    u = (0, h.Z)(n),
    {
      createMultipleConfettiAt: I,
      addClickListener: T
    } = i.useContext(f.h),
    [C, A] = i.useState(false),
    P = i.useRef(null),
    {
      reducedMotion: w
    } = i.useContext(d.Sfi),
    R = (0, b.ZP)(n),
    D = R.nick,
    x = s(R);
  t = null == c || null == o ? u > 1 ? v.intl.format(v.t.yfC9ds, {
    username: D,
    usernameHook: x,
    numSubscriptions: u
  }) : v.intl.format(v.t["57St/7"], {
    username: D,
    usernameHook: x
  }) : u > 1 ? v.intl.format(v.t.PO9uJD, {
    username: D,
    usernameHook: x,
    numSubscriptions: u,
    guildName: o.name,
    newTierName: (0, E.nW)(c)
  }) : v.intl.format(v.t.cUfTTE, {
    username: D,
    usernameHook: x,
    guildName: o.name,
    newTierName: (0, E.nW)(c)
  });
  let L = i.useCallback(() => {
      if (!w.enabled)
        if (C || 0 !== Math.floor(Math.random() * N)) {
          var e;
          let t = null == (e = P.current) ? true : e.getBoundingClientRect();
          if (null == t) return;
          I(t.left + t.width / 2, t.top + t.height / 2)
        } else A(true)
    }, [I, w, C]),
    j = i.useCallback(() => {
      A(false)
    }, []),
    M = i.useCallback(() => {
      (0, _.AI)({
        settingsVisible: true
      }), (0, g.openUserSettings)(m.n.POGGERMODE_PANEL, {
        section: O.oAB.POGGERMODE
      }), A(false)
    }, []),
    k = i.useCallback((e, t) => {
      (null == t ? true : t.id.startsWith(V)) && M()
    }, [M]);
  i.useEffect(() => T(k));
  let U = i.useCallback(e => {
      e.target === e.currentTarget && l(e)
    }, [l]),
    G = (0, r.jsx)(d.P3F, {
      className: S.iconWrapper,
      innerRef: P,
      onClick: l,
      children: (0, r.jsx)(d.Ucv, {
        color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: S.icon,
        onMouseEnter: L
      })
    });
  return (0, r.jsxs)(y.Z, {
    iconNode: G,
    timestamp: n.timestamp,
    compact: a,
    children: [(0, r.jsx)("div", {
      onClick: U,
      className: S.message,
      children: t
    }), C ? (0, r.jsx)(p.ZP, {
      children: (0, r.jsx)("div", {
        className: S.cannonWrapper,
        children: (0, r.jsx)(et, {
          onAnimationComplete: j,
          onClick: M
        })
      })
    }) : null]
  })
}