/** Chunk was on web.js **/
/** chunk id: 427854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./264879.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263215 = require("./263215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk68388 = require("./68388.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
  return (0, r.jsx)(l.EYj, {
    tag: "span",
    variant: "text-md/semibold",
    className: p.Zt,
    children: t.title
  })
}

function y(e) {
  let {
    guild: t,
    themeResponsive: n = true,
    onButtonClick: a
  } = e, _ = (0, u.A)(t.id), [m, y] = i.useState(false), [b, O] = (0, c.zhh)(() => ({
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
      }), y(true)
    }, 300);
    return () => clearTimeout(e)
  }, [O]);
  let v = i.useMemo(() => {
    let e;
    if (null == _ || 0 === _.length) return "";
    if (1 === _.length) e = (0, r.jsx)(E, {
      powerup: _[0]
    });
    else if (2 === _.length) e = f.intl.format(d.default.MNO3sG, {
      perk1: (0, r.jsx)(E, {
        powerup: _[0]
      }),
      perk2: (0, r.jsx)(E, {
        powerup: _[1]
      })
    });
    else {
      let t = Array.from(_).reverse();
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
  }, [_]);
  return null == _ || 0 === _.length ? null : (0, r.jsxs)(s.animated.div, {
    className: o()(p.kL, {
      [p.Vz]: n
    }),
    style: g(h({}, b), {
      opacity: +!!m
    }),
    children: [(0, r.jsx)(l.EYj, {
      tag: "span",
      variant: "text-md/semibold",
      className: o()(p.h_, {
        [p.Qq]: !n,
        [p.sl]: n
      }),
      children: v
    }), (0, r.jsx)(l.$nd, {
      variant: "primary",
      text: f.intl.string(d.default.E5V5KK),
      onClick: a
    })]
  })
}