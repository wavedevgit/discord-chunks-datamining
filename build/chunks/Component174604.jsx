/** Chunk was on web.js **/
/** chunk id: 174604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./583741.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70300 = require("./70300.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240656 = require("./240656.js");

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

function b(e) {
  let {
    powerup: t
  } = e;
  return (0, r.jsx)(l.xv, {
    tag: "span",
    variant: "text-md/semibold",
    className: p.highlight,
    children: t.title
  })
}

function y(e) {
  let {
    guild: t,
    themeResponsive: n = true,
    onButtonClick: a
  } = e, h = (0, d.Z)(t.id), [g, y] = i.useState(false), [O, v] = (0, u.q_F)(() => ({
    scale: .8,
    config: {
      tension: 500,
      friction: 10
    }
  }));
  i.useEffect(() => {
    let e = setTimeout(() => {
      v({
        scale: 1
      }), y(true)
    }, 300);
    return () => clearTimeout(e)
  }, [v]);
  let I = i.useMemo(() => {
    let e;
    if (null == h || 0 === h.length) return "";
    if (1 === h.length) e = (0, r.jsx)(b, {
      powerup: h[0]
    });
    else if (2 === h.length) e = _.intl.format(f.default.MNO3sL, {
      perk1: (0, r.jsx)(b, {
        powerup: h[0]
      }),
      perk2: (0, r.jsx)(b, {
        powerup: h[1]
      })
    });
    else {
      let t = Array.from(h).reverse();
      e = _.intl.format(f.default.GmN3VV, {
        perk1: (0, r.jsx)(b, {
          powerup: t[0]
        }),
        perk2: (0, r.jsx)(b, {
          powerup: t[1]
        })
      })
    }
    return _.intl.format(f.default["/6GgQk"], {
      perks: e
    })
  }, [h]);
  return null == h || 0 === h.length ? null : (0, r.jsxs)(s.animated.div, {
    className: o()(p.container, {
      [p.themeResponsiveContainer]: n
    }),
    style: E(m({}, O), {
      opacity: +!!g
    }),
    children: [(0, r.jsx)(l.xv, {
      tag: "span",
      variant: "text-md/semibold",
      className: o()(p.description, {
        [p.text]: !n,
        [p.responsiveText]: n
      }),
      children: I
    }), (0, r.jsx)(c.zx, {
      className: p.button,
      onClick: a,
      children: _.intl.string(f.default.E5V5KC)
    })]
  })
}