/** Chunk was on web.js **/
/** chunk id: 174604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./583741.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70300 = require("./70300.js"),
  Chunk18853 = require("./18853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240656 = require("./240656.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    powerup: t
  } = e;
  return (0, r.jsx)(l.xvT, {
    tag: "span",
    variant: "text-md/semibold",
    className: _.highlight,
    children: t.title
  })
}

function b(e) {
  let {
    guild: t,
    themeResponsive: n = true,
    onButtonClick: a
  } = e, p = (0, u.Z)(t.id), [m, b] = i.useState(false), [y, O] = (0, c.q_F)(() => ({
    scale: .8,
    config: {
      tension: 500,
      friction: 10
    }
  }));
  i.useEffect(() => {
    let e = setTimeout(() => {
      O({
        scale: 1
      }), b(true)
    }, 300);
    return () => clearTimeout(e)
  }, [O]);
  let v = i.useMemo(() => {
    let e;
    if (null == p || 0 === p.length) return "";
    if (1 === p.length) e = (0, r.jsx)(E, {
      powerup: p[0]
    });
    else if (2 === p.length) e = f.intl.format(d.default.MNO3sG, {
      perk1: (0, r.jsx)(E, {
        powerup: p[0]
      }),
      perk2: (0, r.jsx)(E, {
        powerup: p[1]
      })
    });
    else {
      let t = Array.from(p).reverse();
      e = f.intl.format(d.default.GmN3Vf, {
        perk1: (0, r.jsx)(E, {
          powerup: t[0]
        }),
        perk2: (0, r.jsx)(E, {
          powerup: t[1]
        })
      })
    }
    return f.intl.format(d.default["/6GgQq"], {
      perks: e
    })
  }, [p]);
  return null == p || 0 === p.length ? null : (0, r.jsxs)(s.animated.div, {
    className: o()(_.container, {
      [_.themeResponsiveContainer]: n
    }),
    style: g(h({}, y), {
      opacity: +!!m
    }),
    children: [(0, r.jsx)(l.xvT, {
      tag: "span",
      variant: "text-md/semibold",
      className: o()(_.description, {
        [_.text]: !n,
        [_.responsiveText]: n
      }),
      children: v
    }), (0, r.jsx)(l.zxk, {
      variant: "primary",
      text: f.intl.string(d.default.E5V5KK),
      onClick: a
    })]
  })
}