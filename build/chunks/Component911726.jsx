/** Chunk was on web.js **/
/** chunk id: 911726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => en
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk106778 = require("./106778.js"),
  Chunk835245 = require("./835245.js"),
  Chunk23339 = require("./23339.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk513609 = require("./513609.js"),
  Chunk928830 = require("./928830.js"),
  Chunk567771 = require("./567771.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811336 = require("./811336.js");

function I(e, t, n) {
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
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = 50,
  w = {
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
  D = (0, Chunk23339.xI)(Chunk319060.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
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
  V = 8,
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
    BOTTOM_LEFT: C(S({}, j), {
      getConfettiPosition: e => ({
        x: e - x,
        y: L
      }),
      confettiVelocityDirection: {
        x: 1,
        y: false
      }
    }),
    BOTTOM_RIGHT: C(S({}, j), {
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
  H = "falling-leaf";

function Y(e) {
  switch (e.type) {
    case O.lAJ.GUILD_BOOST_TIER_1:
      return O.TVA.TIER_1;
    case O.lAJ.GUILD_BOOST_TIER_2:
      return O.TVA.TIER_2;
    case O.lAJ.GUILD_BOOST_TIER_3:
      return O.TVA.TIER_3
  }
  return null
}

function W() {
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
let K = 45,
  z = ["#61D5B2"],
  Chunk80705 = require("./80705.js"),
  Chunk232460 = require("./232460.js"),
  X = [Chunk80705, Chunk232460];

function Q() {
  return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
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
  } = e, u = i.useRef(null), [p, _] = i.useState(null), [h] = i.useState(null != a ? a : W()), {
    createMultipleConfettiAt: m,
    confettiCanvas: g
  } = i.useContext(f.x), [E, y] = i.useState(null), b = (0, o.f9)(g, E), O = J(p, h), v = P.includes(h), I = v && "exit" === p, S = i.useCallback(e => {
    _(e)
  }, []), T = i.useCallback(() => {
    "exit" === p && (null == t || t())
  }, [t, p]), C = i.useCallback(e => {
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
      b.createConfetti({
        id: "".concat(H, "-").concat((0, l.A)()),
        position: {
          type: "static",
          value: ee(u.current, h)
        },
        size: {
          type: "static",
          value: K
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
            z: V * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: F * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === h ? q : Z
      })
    }
  }, [v, b, h, p]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.K_, {
      ref: y,
      sprites: X,
      colors: z,
      spriteWidth: K,
      spriteHeight: K
    }), (0, r.jsx)(d.DUT, {
      onClick: n,
      className: s()(A.FT, {
        [A.FZ]: "TOP_LEFT" === h,
        [A.S]: "TOP_RIGHT" === h,
        [A.Re]: "BOTTOM_LEFT" === h,
        [A._t]: "BOTTOM_RIGHT" === h
      }),
      children: (0, r.jsx)(d.tvC, {
        animationRef: C,
        className: s()(A.oQ, {
          [A.EG]: I
        }),
        nextScene: O,
        sceneSegments: w,
        onScenePlay: S,
        onSceneComplete: T,
        importData: Q,
        pauseWhileUnfocused: false
      })
    })]
  })
}

function en(e) {
  let t, {
      message: n,
      compact: a,
      guild: s,
      usernameHook: o,
      onClickMessage: l
    } = e,
    c = Y(n),
    u = (0, h.A)(n),
    {
      createMultipleConfettiAt: I,
      addClickListener: S
    } = i.useContext(f.x),
    [T, C] = i.useState(false),
    w = i.useRef(null),
    {
      reducedMotion: R
    } = i.useContext(d.CZY),
    P = (0, y.Ay)(n),
    D = P.nick,
    x = o(P);
  t = null == c || null == s ? u > 1 ? v.intl.format(v.t.yfC9ds, {
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
    guildName: s.name,
    newTierName: (0, E.gb)(c)
  }) : v.intl.format(v.t.cUfTTE, {
    username: D,
    usernameHook: x,
    guildName: s.name,
    newTierName: (0, E.gb)(c)
  });
  let L = i.useCallback(() => {
      if (!R.enabled)
        if (T || 0 !== Math.floor(Math.random() * N)) {
          var e;
          let t = null == (e = w.current) ? true : e.getBoundingClientRect();
          if (null == t) return;
          I(t.left + t.width / 2, t.top + t.height / 2)
        } else C(true)
    }, [I, R, T]),
    j = i.useCallback(() => {
      C(false)
    }, []),
    M = i.useCallback(() => {
      (0, _.O9)({
        settingsVisible: true
      }), (0, g.openUserSettings)(m.X.POGGERMODE_PANEL, {
        section: O.nc_.POGGERMODE
      }), C(false)
    }, []),
    k = i.useCallback((e, t) => {
      (null == t ? true : t.id.startsWith(H)) && M()
    }, [M]);
  i.useEffect(() => S(k));
  let U = i.useCallback(e => {
      e.target === e.currentTarget && l(e)
    }, [l]),
    G = (0, r.jsx)(d.DUT, {
      className: A.P0,
      innerRef: w,
      onClick: l,
      children: (0, r.jsx)(d._Jp, {
        color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: A.Kk,
        onMouseEnter: L
      })
    });
  return (0, r.jsxs)(b.A, {
    iconNode: G,
    timestamp: n.timestamp,
    compact: a,
    children: [(0, r.jsx)("div", {
      onClick: U,
      className: A.iU,
      children: t
    }), T ? (0, r.jsx)(p.Ay, {
      children: (0, r.jsx)("div", {
        className: A.LK,
        children: (0, r.jsx)(et, {
          onAnimationComplete: j,
          onClick: M
        })
      })
    }) : null]
  })
}