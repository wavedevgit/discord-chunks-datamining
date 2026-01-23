/** Chunk was on web.js **/
/** chunk id: 764917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => k
}), require("./896048.js"), require("./747238.js"), require("./591487.js"), require("./727858.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk531301 = require("./531301.js"),
  Chunk513609 = require("./513609.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk129185 = require("./129185.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk851110 = require("./851110.js"),
  Chunk409221 = require("./409221.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = [],
  b = false,
  O = false,
  v = false,
  A = false,
  I = 11,
  S = 125,
  T = 20,
  C = 12,
  N = 48,
  w = .01,
  R = new Set(["jack_o_lantern", "nose"]),
  P = {
    jack_o_lantern: {
      sprites: (0, Chunk531301.A)(["chocolate_bar", "lollipop", "candy"])
    },
    nose: {
      sprites: (0, Chunk531301.A)(["foot"])
    }
  };

function D(e) {
  if (null == e) return null;
  for (let t of R)
    if (null != e.match(new RegExp(":".concat(t, "(_tone[1-9])?")))) return t;
  return null
}
let x = {
  enter: {
    BEG: 0,
    END: 22
  },
  confetti: {
    BEG: 23,
    END: 119
  },
  exit: {
    BEG: 164,
    END: 200
  }
};

function L() {
  return n.e("98150").then(n.t.bind(n, 633343, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function j(e) {
  if (null == e) return "enter";
  switch (e) {
    case "enter":
      return "confetti";
    case "confetti":
      return "exit";
    case "exit":
      return "enter"
  }
}
let M = Chunk64700.forwardRef(function(e, t) {
  let {
    sprites: n
  } = e, [s, l] = i.useState(null), {
    confettiCanvas: c
  } = i.useContext(o.x), u = (0, a.f9)(c, s);
  return i.useImperativeHandle(t, () => ({
    fireConfetti: (e, t) => {
      u.createMultipleConfetti(E(m({}, p.Mw), {
        position: {
          type: "static",
          value: {
            x: e,
            y: t
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: b,
            y: v
          },
          maxValue: {
            x: O,
            y: A
          }
        },
        size: {
          type: "static-random",
          minValue: C,
          maxValue: N
        },
        dragCoefficient: {
          type: "static",
          value: w
        }
      }), T)
    }
  }), [u]), (0, r.jsx)(a.K_, {
    ref: l,
    colors: y,
    sprites: n,
    spriteWidth: N,
    spriteHeight: N
  })
});

function k(e) {
  let {
    children: t
  } = e, n = i.useRef({}), [a, o] = i.useState(null), l = j(a), p = i.useRef(null), [h, m] = i.useState(false), g = i.useRef("jack_o_lantern"), E = (0, u.Us)(), y = i.useCallback(e => {
    if (!h) {
      let t = D(e);
      null != t && (g.current = t, m(true), o(null))
    }
  }, [h]), b = i.useMemo(() => ({
    triggerAnimation: y,
    untriggerAnimation: () => {}
  }), [y]), O = i.useCallback(e => {
    o(e)
  }, []), v = i.useCallback(e => {
    "exit" === e && m(false)
  }, []), A = i.useCallback(e => {
    p.current = e
  }, []);
  return (i.useEffect(() => {
    if ("confetti" === a) {
      if (null == p.current) return;
      let e = p.current.getBoundingClientRect(),
        t = e.left - I,
        r = e.top + S,
        i = n.current[g.current];
      null == i || i.fireConfetti(t, r)
    }
  }, [a]), E !== f.BRT.APP) ? t : (0, r.jsxs)(d.wE.Provider, {
    value: b,
    children: [t, Object.keys(P).map(e => {
      let t = P[e];
      return (0, r.jsx)(M, {
        ref: t => {
          null != t ? n.current[e] = t : delete n.current[e]
        },
        sprites: t.sprites
      }, e)
    }), h ? (0, r.jsx)(c.Ay, {
      children: (0, r.jsx)("div", {
        className: _.k,
        children: (0, r.jsx)(s.tvC, {
          animationRef: A,
          className: _.I,
          nextScene: l,
          sceneSegments: x,
          onScenePlay: O,
          onSceneComplete: v,
          importData: L,
          pauseWhileUnfocused: false
        })
      })
    }) : null]
  })
}