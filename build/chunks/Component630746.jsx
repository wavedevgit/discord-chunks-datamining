/** Chunk was on 62266 **/
/** chunk id: 630746, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => g
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

function m(e, n) {
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

function p(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, s.aj)();
  return (0, r.jsxs)(i.Y0X, m(u({
    className: d.modal
  }, e), {
    size: i.CgR.DYNAMIC,
    parentComponent: "PortkeySetupModal",
    children: [(0, r.jsx)(i.hzk, {
      className: d.modalContent,
      style: {
        width: c.M4
      },
      scrollbarType: "none",
      children: (0, r.jsx)("div", {
        style: {
          padding: c.hK
        },
        children: (0, r.jsxs)(i.MyZ, {
          width: c.Ne,
          activeSlide: n,
          children: [(0, r.jsx)(i.Mi4, {
            id: c.Vb.SELECT_GAME,
            children: (0, r.jsx)(a.Z, {})
          }, c.Vb.SELECT_GAME), (0, r.jsx)(i.Mi4, {
            id: c.Vb.SERVER_SETTINGS,
            children: (0, r.jsx)(o.Z, {})
          }, c.Vb.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)("div", {
      ref: e => t(e)
    }), (0, r.jsx)(i.olH, {
      onClick: e.onClose,
      className: d.closeButton
    })]
  }))
}

function g(e) {
  let {
    analyticsLocations: n
  } = (0, l.ZP)();
  return (0, r.jsx)(l.Gt, {
    value: n,
    children: (0, r.jsx)(s.KO, m(u({}, e), {
      children: (0, r.jsx)(p, u({}, e))
    }))
  })
}