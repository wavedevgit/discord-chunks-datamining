/** Chunk was on web.js **/
/** chunk id: 910548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => et
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk772848 = require("./772848.js"),
  Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk549006 = require("./549006.js"),
  Chunk64078 = require("./64078.js"),
  Chunk29270 = require("./29270.js"),
  Chunk267642 = require("./267642.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465687 = require("./465687.js");

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

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 50,
  N = {
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
var R = function(e) {
  return e.TOP_LEFT = "TOP_LEFT", e.TOP_RIGHT = "TOP_RIGHT", e.BOTTOM_LEFT = "BOTTOM_LEFT", e.BOTTOM_RIGHT = "BOTTOM_RIGHT", e
}({});
let P = ["TOP_LEFT", "TOP_RIGHT"],
  w = (0, Chunk468194.Mg)(Chunk477690.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  D = 11,
  x = 125,
  L = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  j = 10,
  k = 80,
  M = 80,
  U = 180,
  G = 8,
  B = 12,
  Z = Object.freeze({
    TOP_LEFT: {
      getConfettiPosition: e => ({
        x: e - D,
        y: e - x
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
        x: D,
        y: e - x
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
    BOTTOM_LEFT: A(T({}, L), {
      getConfettiPosition: e => ({
        x: e - D,
        y: x
      }),
      confettiVelocityDirection: {
        x: 1,
        y: false
      }
    }),
    BOTTOM_RIGHT: A(T({}, L), {
      getConfettiPosition: e => ({
        x: D,
        y: x
      }),
      confettiVelocityDirection: {
        x: false,
        y: false
      }
    })
  }),
  F = "falling-leaf";

function V(e) {
  switch (e.type) {
    case y.uaV.GUILD_BOOST_TIER_1:
      return y.Eu4.TIER_1;
    case y.uaV.GUILD_BOOST_TIER_2:
      return y.Eu4.TIER_2;
    case y.uaV.GUILD_BOOST_TIER_3:
      return y.Eu4.TIER_3
  }
  return null
}

function H() {
  switch (Math.floor(Math.random() * Object.keys(R).length)) {
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
let Y = 45,
  W = ["#61D5B2"],
  Chunk303893 = require("./303893.js"),
  Chunk313226 = require("./313226.js"),
  q = [Chunk303893, Chunk313226];

function X() {
  return require.e("77843").then(require.t.bind(require, 931152, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function Q(e, t) {
  if (null == e) return "enter";
  switch (e) {
    case "enter":
      return "confetti";
    case "confetti":
      if (P.includes(t)) return "leaf_peel";
      return "exit";
    case "leaf_peel":
      return "leaf_fall";
    case "leaf_fall":
      return "exit";
    case "exit":
      return "enter"
  }
}

function J(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : w,
    r = null == e ? true : e.getBoundingClientRect();
  if (null == r) return {
    x: 0,
    y: 0
  };
  let i = Z[t].getConfettiPosition(n);
  return {
    x: r.left + i.x,
    y: r.top + i.y
  }
}

function $(e, t) {
  let n = null == e ? true : e.getBoundingClientRect();
  if (null == n) return {
    x: 0,
    y: 0
  };
  let r = Z[t];
  return {
    x: n.left + r.leafPosition.x,
    y: n.top + r.leafPosition.y
  }
}

function ee(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: a,
    size: c
  } = e, u = i.useRef(null), [f, p] = i.useState(null), [h] = i.useState(null != a ? a : H()), {
    createMultipleConfettiAt: m,
    confettiCanvas: g
  } = i.useContext(_.h), [E, b] = i.useState(null), y = (0, s.uR)(g, E), O = Q(f, h), I = P.includes(h), T = I && "exit" === f, S = i.useCallback(e => {
    p(e)
  }, []), A = i.useCallback(() => {
    "exit" === f && (null == t || t())
  }, [t, f]), C = i.useCallback(e => {
    u.current = e
  }, []);
  return i.useEffect(() => {
    if ("confetti" === f) {
      let {
        confettiVelocityDirection: e
      } = Z[h], t = J(u.current, h, c);
      m(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: j * e.x,
            y: M * e.y
          },
          maxValue: {
            x: k * e.x,
            y: U * e.y
          }
        }
      })
    }
  }, [m, h, f, c]), i.useEffect(() => {
    if (I && "leaf_fall" === f) {
      let e = Z[h].leafRotationDirection;
      y.createConfetti({
        id: "".concat(F, "-").concat((0, l.Z)()),
        position: {
          type: "static",
          value: $(u.current, h)
        },
        size: {
          type: "static",
          value: Y
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
            z: G * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: B * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === h ? K : z
      })
    }
  }, [I, y, h, f]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Ji, {
      ref: b,
      sprites: q,
      colors: W,
      spriteWidth: Y,
      spriteHeight: Y
    }), (0, r.jsx)(d.P3F, {
      onClick: n,
      className: o()(v.easterEggAnimationClickTarget, {
        [v.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === h,
        [v.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === h,
        [v.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === h,
        [v.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === h
      }),
      children: (0, r.jsx)(d.kci, {
        animationRef: C,
        className: o()(v.easterEggAnimation, {
          [v.easterEggAnimationHideLeaf]: T
        }),
        nextScene: O,
        sceneSegments: N,
        onScenePlay: S,
        onSceneComplete: A,
        importData: X,
        pauseWhileUnfocused: false
      })
    })]
  })
}

function et(e) {
  let t, {
      message: n,
      compact: a,
      guild: o,
      usernameHook: s,
      onClickMessage: l
    } = e,
    c = V(n),
    u = (0, m.Z)(n),
    {
      createMultipleConfettiAt: I,
      addClickListener: T
    } = i.useContext(_.h),
    [S, A] = i.useState(false),
    N = i.useRef(null),
    {
      reducedMotion: R
    } = i.useContext(d.Sfi),
    P = (0, E.ZP)(n),
    w = P.nick,
    D = s(P);
  t = null == c || null == o ? u > 1 ? O.intl.format(O.t.yfC9dn, {
    username: w,
    usernameHook: D,
    numSubscriptions: u
  }) : O.intl.format(O.t["57St//"], {
    username: w,
    usernameHook: D
  }) : u > 1 ? O.intl.format(O.t.PO9uJC, {
    username: w,
    usernameHook: D,
    numSubscriptions: u,
    guildName: o.name,
    newTierName: (0, g.nW)(c)
  }) : O.intl.format(O.t.cUfTTE, {
    username: w,
    usernameHook: D,
    guildName: o.name,
    newTierName: (0, g.nW)(c)
  });
  let x = i.useCallback(() => {
      if (!R.enabled)
        if (S || 0 !== Math.floor(Math.random() * C)) {
          var e;
          let t = null == (e = N.current) ? true : e.getBoundingClientRect();
          if (null == t) return;
          I(t.left + t.width / 2, t.top + t.height / 2)
        } else A(true)
    }, [I, R, S]),
    L = i.useCallback(() => {
      A(false)
    }, []),
    j = i.useCallback(() => {
      (0, h.AI)({
        settingsVisible: true
      }), f.Z.open(y.oAB.POGGERMODE), A(false)
    }, []),
    k = i.useCallback((e, t) => {
      (null == t ? true : t.id.startsWith(F)) && j()
    }, [j]);
  i.useEffect(() => T(k));
  let M = (0, r.jsx)(d.P3F, {
    className: v.iconWrapper,
    innerRef: N,
    onClick: l,
    children: (0, r.jsx)(d.$Eu, {
      color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: v.icon,
      onMouseEnter: x
    })
  });
  return (0, r.jsxs)(b.Z, {
    iconNode: M,
    timestamp: n.timestamp,
    compact: a,
    children: [(0, r.jsx)("div", {
      onClick: l,
      className: v.message,
      children: t
    }), S ? (0, r.jsx)(p.ZP, {
      children: (0, r.jsx)("div", {
        className: v.cannonWrapper,
        children: (0, r.jsx)(ee, {
          onAnimationComplete: L,
          onClick: j
        })
      })
    }) : null]
  })
}