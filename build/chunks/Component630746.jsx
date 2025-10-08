/** Chunk was on 13153 **/
/** chunk id: 630746, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk678328 = require("./678328.jsx"),
  Chunk560467 = require("./560467.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831119 = require("./831119.js");

function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function x(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function f(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, d.aj)(), {
    title: a,
    subtitle: f
  } = function(e) {
    switch (e) {
      case c.Vb.SELECT_GAME:
        return {
          title: g.intl.string(u.default.DG1SHB), subtitle: g.intl.string(u.default.hkWuWF)
        };
      case c.Vb.SERVER_SETTINGS:
        return {
          title: g.intl.string(u.default.Eonh9P)
        }
    }
  }(n);
  return (0, r.jsxs)(i.IX, x(p({}, e), {
    size: "lg",
    children: [(0, r.jsx)(i.xBx, {
      title: a,
      subtitle: f
    }), (0, r.jsx)(l.zJl, {
      className: m.modalContent,
      style: {
        width: c.M4
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: c.hK
        },
        children: (0, r.jsxs)(l.MyZ, {
          width: c.Ne,
          activeSlide: n,
          children: [(0, r.jsx)(l.Mi4, {
            id: c.Vb.SELECT_GAME,
            children: (0, r.jsx)(o.Z, {})
          }, c.Vb.SELECT_GAME), (0, r.jsx)(l.Mi4, {
            id: c.Vb.SERVER_SETTINGS,
            children: (0, r.jsx)(s.Z, {})
          }, c.Vb.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)("div", {
      ref: e => t(e)
    })]
  }))
}

function _(e) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)();
  return (0, r.jsx)(a.Gt, {
    value: n,
    children: (0, r.jsx)(d.KO, x(p({}, e), {
      children: (0, r.jsx)(f, p({}, e))
    }))
  })
}