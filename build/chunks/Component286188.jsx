/** Chunk was on web.js **/
/** chunk id: 286188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./264879.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk263215 = require("./263215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk159118 = require("./159118.js");

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

function y(e) {
  let {
    powerup: t
  } = e;
  return (0, r.jsx)(o.EYj, {
    tag: "span",
    variant: "text-md/semibold",
    className: _.Zt,
    children: t.title
  })
}

function b(e) {
  let {
    guildId: t,
    onButtonClick: n
  } = e, h = (0, d.A)(t), g = (0, c.Ay)(), b = (0, l.qB1)(g), O = (0, s.bG)([u.A], () => u.A.useReducedMotion), [v, A] = i.useState(O), [I, S] = (0, l.zhh)(() => ({
    scale: O ? 1 : .8,
    config: {
      tension: 500,
      friction: 10
    }
  }));
  i.useEffect(() => {
    if (O) return;
    let e = setTimeout(() => {
      S({
        scale: 1
      }), A(true)
    }, 300);
    return () => clearTimeout(e)
  }, [S, O]);
  let T = i.useMemo(() => {
    let e;
    if (null == h || 0 === h.length) return "";
    if (1 === h.length) e = (0, r.jsx)(y, {
      powerup: h[0]
    });
    else if (2 === h.length) e = f.intl.format(p.default.MNO3sG, {
      perk1: (0, r.jsx)(y, {
        powerup: h[0]
      }),
      perk2: (0, r.jsx)(y, {
        powerup: h[1]
      })
    });
    else {
      let t = Array.from(h).reverse();
      e = f.intl.format(p.default.GmN3Vf, {
        perk1: (0, r.jsx)(y, {
          powerup: t[0]
        }),
        perk2: (0, r.jsx)(y, {
          powerup: t[1]
        })
      })
    }
    return f.intl.format(p.default["/6GgQq"], {
      perks: e
    })
  }, [h]);
  return null == h || 0 === h.length ? null : (0, r.jsxs)(a.animated.div, {
    className: _.kL,
    style: E(m({}, I), {
      opacity: +!!v
    }),
    children: [(0, r.jsx)(o.EYj, {
      tag: "span",
      variant: "text-md/semibold",
      className: _.h_,
      children: T
    }), (0, r.jsx)(o.$nd, {
      variant: b ? "primary" : "overlay-primary",
      size: "sm",
      text: f.intl.string(p.default.E5V5KK),
      onClick: n
    })]
  })
}