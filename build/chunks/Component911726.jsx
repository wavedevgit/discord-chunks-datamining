/** Chunk was on 64935 **/
/** chunk id: 911726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => B
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
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

function C(e, t) {
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
  N = (0, Chunk23339.xI)(Chunk319060.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  P = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  w = Object.freeze({
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
    BOTTOM_LEFT: C(j({}, P), {
      getConfettiPosition: e => ({
        x: e - 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: false
      }
    }),
    BOTTOM_RIGHT: C(j({}, P), {
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
  R = "falling-leaf",
  D = ["#61D5B2"],
  Chunk80705 = require("./80705.js"),
  Chunk232460 = require("./232460.js"),
  k = [Chunk80705, Chunk232460];

function U() {
  return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function G(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: r,
    size: a
  } = e, u = l.useRef(null), [d, f] = l.useState(null), [g] = l.useState(null != r ? r : function() {
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
    createMultipleConfettiAt: _,
    confettiCanvas: h
  } = l.useContext(m.x), [b, A] = l.useState(null), y = (0, o.f9)(h, b), v = function(e, t) {
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
  }(d, g), x = T.includes(g), O = x && "exit" === d, j = l.useCallback(e => {
    f(e)
  }, []), C = l.useCallback(() => {
    "exit" === d && (null == t || t())
  }, [t, d]), P = l.useCallback(e => {
    u.current = e
  }, []);
  return l.useEffect(() => {
    if ("confetti" === d) {
      let {
        confettiVelocityDirection: e
      } = w[g], t = function(e, t) {
        let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : N,
          r = null == e ? true : e.getBoundingClientRect();
        if (null == r) return {
          x: 0,
          y: 0
        };
        let i = w[t].getConfettiPosition(n);
        return {
          x: r.left + i.x,
          y: r.top + i.y
        }
      }(u.current, g, a);
      _(t.x, t.y, {
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
  }, [_, g, d, a]), l.useEffect(() => {
    if (x && "leaf_fall" === d) {
      let e = w[g].leafRotationDirection;
      y.createConfetti({
        id: "".concat(R, "-").concat((0, c.A)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? true : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let r = w[t];
            return {
              x: n.left + r.leafPosition.x,
              y: n.top + r.leafPosition.y
            }
          }(u.current, g)
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
        sprite: "TOP_LEFT" === g ? L : M
      })
    }
  }, [x, y, g, d]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.K_, {
      ref: A,
      sprites: k,
      colors: D,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, i.jsx)(p.DUT, {
      onClick: n,
      className: s()(E.FT, {
        [E.FZ]: "TOP_LEFT" === g,
        [E.S]: "TOP_RIGHT" === g,
        [E.Re]: "BOTTOM_LEFT" === g,
        [E._t]: "BOTTOM_RIGHT" === g
      }),
      children: (0, i.jsx)(p.tvC, {
        animationRef: P,
        className: s()(E.oQ, {
          [E.EG]: O
        }),
        nextScene: v,
        sceneSegments: I,
        onScenePlay: j,
        onSceneComplete: C,
        importData: U,
        pauseWhileUnfocused: false
      })
    })]
  })
}

function B(e) {
  let t, {
      message: n,
      compact: r,
      guild: a,
      usernameHook: s,
      onClickMessage: o
    } = e,
    c = function(e) {
      switch (e.type) {
        case x.lAJ.GUILD_BOOST_TIER_1:
          return x.TVA.TIER_1;
        case x.lAJ.GUILD_BOOST_TIER_2:
          return x.TVA.TIER_2;
        case x.lAJ.GUILD_BOOST_TIER_3:
          return x.TVA.TIER_3
      }
      return null
    }(n),
    u = (0, _.A)(n),
    {
      createMultipleConfettiAt: d,
      addClickListener: j
    } = l.useContext(m.x),
    [C, I] = l.useState(false),
    S = l.useRef(null),
    {
      reducedMotion: T
    } = l.useContext(p.CZY),
    N = (0, y.Ay)(n),
    P = N.nick,
    w = s(N);
  t = null == c || null == a ? u > 1 ? O.intl.format(O.t.yfC9ds, {
    username: P,
    usernameHook: w,
    numSubscriptions: u
  }) : O.intl.format(O.t["57St/7"], {
    username: P,
    usernameHook: w
  }) : u > 1 ? O.intl.format(O.t.PO9uJD, {
    username: P,
    usernameHook: w,
    numSubscriptions: u,
    guildName: a.name,
    newTierName: (0, A.gb)(c)
  }) : O.intl.format(O.t.cUfTTE, {
    username: P,
    usernameHook: w,
    guildName: a.name,
    newTierName: (0, A.gb)(c)
  });
  let D = l.useCallback(() => {
      if (!T.enabled)
        if (C || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null == (e = S.current) ? true : e.getBoundingClientRect();
          if (null == t) return;
          d(t.left + t.width / 2, t.top + t.height / 2)
        } else I(true)
    }, [d, T, C]),
    L = l.useCallback(() => {
      I(false)
    }, []),
    M = l.useCallback(() => {
      (0, g.O9)({
        settingsVisible: true
      }), (0, b.openUserSettings)(h.X.POGGERMODE_PANEL, {
        section: x.nc_.POGGERMODE
      }), I(false)
    }, []),
    k = l.useCallback((e, t) => {
      (null == t ? true : t.id.startsWith(R)) && M()
    }, [M]);
  l.useEffect(() => j(k));
  let U = l.useCallback(e => {
      e.target === e.currentTarget && o(e)
    }, [o]),
    B = (0, i.jsx)(p.DUT, {
      className: E.P0,
      innerRef: S,
      onClick: o,
      children: (0, i.jsx)(p._Jp, {
        color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: E.Kk,
        onMouseEnter: D
      })
    });
  return (0, i.jsxs)(v.A, {
    iconNode: B,
    timestamp: n.timestamp,
    compact: r,
    children: [(0, i.jsx)("div", {
      onClick: U,
      className: E.iU,
      children: t
    }), C ? (0, i.jsx)(f.Ay, {
      children: (0, i.jsx)("div", {
        className: E.LK,
        children: (0, i.jsx)(G, {
          onAnimationComplete: L,
          onClick: M
        })
      })
    }) : null]
  })
}