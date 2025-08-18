/** Chunk was on 91173 **/
/** chunk id: 910548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => U
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
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

function x(e) {
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
let I = {
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
var S = ((r = {}).TOP_LEFT = "TOP_LEFT", r.TOP_RIGHT = "TOP_RIGHT", r.BOTTOM_LEFT = "BOTTOM_LEFT", r.BOTTOM_RIGHT = "BOTTOM_RIGHT", r);
let T = ["TOP_LEFT", "TOP_RIGHT"],
  P = (0, Chunk468194.Mg)(Chunk477690.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  N = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  A = Object.freeze({
    TOP_LEFT: {
      getConfettiPosition: e => ({
        x: e - 11,
        y: e - 125
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
        x: 11,
        y: e - 125
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
    BOTTOM_LEFT: j(x({}, N), {
      getConfettiPosition: e => ({
        x: e - 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: false
      }
    }),
    BOTTOM_RIGHT: j(x({}, N), {
      getConfettiPosition: e => ({
        x: 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: false,
        y: false
      }
    })
  }),
  w = "falling-leaf",
  Z = ["#61D5B2"],
  Chunk303893 = require("./303893.js"),
  Chunk313226 = require("./313226.js"),
  L = [Chunk303893, Chunk313226];

function M() {
  return require.e("77843").then(require.t.bind(require, 931152, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function k(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: r,
    size: a
  } = e, u = l.useRef(null), [d, m] = l.useState(null), [_] = l.useState(null != r ? r : function() {
    switch (Math.floor(Math.random() * Object.keys(S).length)) {
      case 0:
        return "TOP_LEFT";
      case 2:
        return "TOP_RIGHT";
      case 3:
        return "BOTTOM_LEFT";
      default:
        return "BOTTOM_RIGHT"
    }
  }()), {
    createMultipleConfettiAt: g,
    confettiCanvas: h
  } = l.useContext(f.h), [b, E] = l.useState(null), C = (0, s.uR)(h, b), v = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (T.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(d, _), O = T.includes(_), x = O && "exit" === d, j = l.useCallback(e => {
    m(e)
  }, []), N = l.useCallback(() => {
    "exit" === d && (null == t || t())
  }, [t, d]), k = l.useCallback(e => {
    u.current = e
  }, []);
  return l.useEffect(() => {
    if ("confetti" === d) {
      let {
        confettiVelocityDirection: e
      } = A[_], t = function(e, t) {
        let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : P,
          r = null == e ? true : e.getBoundingClientRect();
        if (null == r) return {
          x: 0,
          y: 0
        };
        let i = A[t].getConfettiPosition(n);
        return {
          x: r.left + i.x,
          y: r.top + i.y
        }
      }(u.current, _, a);
      g(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: 10 * e.x,
            y: 80 * e.y
          },
          maxValue: {
            x: 80 * e.x,
            y: 180 * e.y
          }
        }
      })
    }
  }, [g, _, d, a]), l.useEffect(() => {
    if (O && "leaf_fall" === d) {
      let e = A[_].leafRotationDirection;
      C.createConfetti({
        id: "".concat(w, "-").concat((0, c.Z)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? true : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let r = A[t];
            return {
              x: n.left + r.leafPosition.x,
              y: n.top + r.leafPosition.y
            }
          }(u.current, _)
        },
        size: {
          type: "static",
          value: 45
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
            z: 8 * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: 12 * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === _ ? R : D
      })
    }
  }, [O, C, _, d]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Ji, {
      ref: E,
      sprites: L,
      colors: Z,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, i.jsx)(p.P3F, {
      onClick: n,
      className: o()(y.easterEggAnimationClickTarget, {
        [y.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
        [y.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
        [y.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
        [y.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
      }),
      children: (0, i.jsx)(p.kci, {
        animationRef: k,
        className: o()(y.easterEggAnimation, {
          [y.easterEggAnimationHideLeaf]: x
        }),
        nextScene: v,
        sceneSegments: I,
        onScenePlay: j,
        onSceneComplete: N,
        importData: M,
        pauseWhileUnfocused: false
      })
    })]
  })
}

function U(e) {
  let t, {
      message: n,
      compact: r,
      guild: a,
      usernameHook: o,
      onClickMessage: s
    } = e,
    c = function(e) {
      switch (e.type) {
        case v.uaV.GUILD_BOOST_TIER_1:
          return v.Eu4.TIER_1;
        case v.uaV.GUILD_BOOST_TIER_2:
          return v.Eu4.TIER_2;
        case v.uaV.GUILD_BOOST_TIER_3:
          return v.Eu4.TIER_3
      }
      return null
    }(n),
    u = (0, h.Z)(n),
    {
      createMultipleConfettiAt: d,
      addClickListener: x
    } = l.useContext(f.h),
    [j, I] = l.useState(false),
    S = l.useRef(null),
    {
      reducedMotion: T
    } = l.useContext(p.Sfi),
    P = (0, E.ZP)(n),
    N = P.nick,
    A = o(P);
  t = null == c || null == a ? u > 1 ? O.intl.format(O.t.yfC9dn, {
    username: N,
    usernameHook: A,
    numSubscriptions: u
  }) : O.intl.format(O.t["57St//"], {
    username: N,
    usernameHook: A
  }) : u > 1 ? O.intl.format(O.t.PO9uJC, {
    username: N,
    usernameHook: A,
    numSubscriptions: u,
    guildName: a.name,
    newTierName: (0, b.nW)(c)
  }) : O.intl.format(O.t.cUfTTE, {
    username: N,
    usernameHook: A,
    guildName: a.name,
    newTierName: (0, b.nW)(c)
  });
  let Z = l.useCallback(() => {
      if (!T.enabled)
        if (j || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null == (e = S.current) ? true : e.getBoundingClientRect();
          if (null == t) return;
          d(t.left + t.width / 2, t.top + t.height / 2)
        } else I(true)
    }, [d, T, j]),
    R = l.useCallback(() => {
      I(false)
    }, []),
    D = l.useCallback(() => {
      (0, g.AI)({
        settingsVisible: true
      }), m.Z.open(v.oAB.POGGERMODE), I(false)
    }, []),
    L = l.useCallback((e, t) => {
      (null == t ? true : t.id.startsWith(w)) && D()
    }, [D]);
  l.useEffect(() => x(L));
  let M = (0, i.jsx)(p.P3F, {
    className: y.iconWrapper,
    innerRef: S,
    onClick: s,
    children: (0, i.jsx)(p.$Eu, {
      color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: y.icon,
      onMouseEnter: Z
    })
  });
  return (0, i.jsxs)(C.Z, {
    iconNode: M,
    timestamp: n.timestamp,
    compact: r,
    children: [(0, i.jsx)("div", {
      onClick: s,
      className: y.message,
      children: t
    }), j ? (0, i.jsx)(_.ZP, {
      children: (0, i.jsx)("div", {
        className: y.cannonWrapper,
        children: (0, i.jsx)(k, {
          onAnimationComplete: R,
          onClick: D
        })
      })
    }) : null]
  })
}