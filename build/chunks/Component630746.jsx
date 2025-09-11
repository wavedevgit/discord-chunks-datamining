/** Chunk was on 39159 **/
/** chunk id: 630746, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk678328 = require("./678328.jsx"),
  Chunk560467 = require("./560467.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk197080 = require("./197080.js");

function u(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function m(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function g(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, s.aj)();
  return (0, i.jsxs)(r.Y0X, m(u({
    className: d.modal
  }, e), {
    size: r.CgR.DYNAMIC,
    parentComponent: "PortkeySetupModal",
    children: [(0, i.jsx)(r.hzk, {
      className: d.modalContent,
      style: {
        width: c.M4
      },
      scrollbarType: "none",
      children: (0, i.jsx)("div", {
        style: {
          padding: c.hK
        },
        children: (0, i.jsxs)(r.MyZ, {
          width: c.Ne,
          activeSlide: n,
          children: [(0, i.jsx)(r.Mi4, {
            id: c.Vb.SELECT_GAME,
            children: (0, i.jsx)(l.Z, {})
          }, c.Vb.SELECT_GAME), (0, i.jsx)(r.Mi4, {
            id: c.Vb.SERVER_SETTINGS,
            children: (0, i.jsx)(o.Z, {})
          }, c.Vb.SERVER_SETTINGS)]
        })
      })
    }), (0, i.jsx)("div", {
      ref: e => t(e)
    }), (0, i.jsx)(r.olH, {
      onClick: e.onClose,
      className: d.closeButton
    })]
  }))
}

function p(e) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)();
  return (0, i.jsx)(a.Gt, {
    value: n,
    children: (0, i.jsx)(s.KO, m(u({}, e), {
      children: (0, i.jsx)(g, u({}, e))
    }))
  })
}