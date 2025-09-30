/** Chunk was on 54965 **/
/** chunk id: 630746, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk678328 = require("./678328.jsx"),
  Chunk560467 = require("./560467.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831119 = require("./831119.js");

function f(e) {
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

function _(e, n) {
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

function j(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, u.aj)(), {
    title: s,
    subtitle: j
  } = function(e) {
    switch (e) {
      case m.Vb.SELECT_GAME:
        return {
          title: g.intl.string(p.default.DG1SHB), subtitle: g.intl.string(p.default.hkWuWF)
        };
      case m.Vb.SERVER_SETTINGS:
        return {
          title: g.intl.string(p.default.Eonh9P)
        }
    }
  }(n);
  return (0, r.jsxs)(i.IX, _(f({}, e), {
    size: "lg",
    children: [(0, r.jsx)(a.x, {
      title: s,
      subtitle: j
    }), (0, r.jsx)(o.zJl, {
      className: x.modalContent,
      style: {
        width: m.M4
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: m.hK
        },
        children: (0, r.jsxs)(o.MyZ, {
          width: m.Ne,
          activeSlide: n,
          children: [(0, r.jsx)(o.Mi4, {
            id: m.Vb.SELECT_GAME,
            children: (0, r.jsx)(c.Z, {})
          }, m.Vb.SELECT_GAME), (0, r.jsx)(o.Mi4, {
            id: m.Vb.SERVER_SETTINGS,
            children: (0, r.jsx)(d.Z, {})
          }, m.Vb.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)(l.m, {
      children: (0, r.jsx)("div", {
        ref: e => t(e)
      })
    })]
  }))
}

function h(e) {
  let {
    analyticsLocations: n
  } = (0, s.ZP)();
  return (0, r.jsx)(s.Gt, {
    value: n,
    children: (0, r.jsx)(u.KO, _(f({}, e), {
      children: (0, r.jsx)(j, f({}, e))
    }))
  })
}