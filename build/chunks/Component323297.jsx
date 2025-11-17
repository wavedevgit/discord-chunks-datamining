/** Chunk was on 26473 **/
/** chunk id: 323297, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk578756 = require("./578756.js"),
  Chunk899789 = require("./899789.jsx"),
  Chunk796724 = require("./796724.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk732031 = require("./732031.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871404 = require("./871404.js");

function x(e) {
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

function p(e, n) {
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

function v(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, c.JL)(), {
    title: a,
    subtitle: o
  } = function(e) {
    switch (e) {
      case u.EK.SELECT_GAME:
        return {
          title: m.intl.string(g.default["3vWDMz"]), subtitle: m.intl.string(g.default.Az5bjs)
        };
      case u.EK.SERVER_SETTINGS:
        return {
          title: m.intl.string(g.default.RLGW9z)
        }
    }
  }(n);
  return (0, r.jsxs)(i.IX, p(x({}, e), {
    size: "lg",
    children: [(0, r.jsx)(i.xBx, {
      title: a,
      subtitle: o
    }), (0, r.jsx)(l.zJl, {
      className: f.modalContent,
      style: {
        width: u.AK
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: u.TG
        },
        children: (0, r.jsxs)(l.MyZ, {
          width: u.SY,
          activeSlide: n,
          children: [(0, r.jsx)(l.Mi4, {
            id: u.EK.SELECT_GAME,
            children: (0, r.jsx)(s.Z, {})
          }, u.EK.SELECT_GAME), (0, r.jsx)(l.Mi4, {
            id: u.EK.SERVER_SETTINGS,
            children: (0, r.jsx)(d.Z, {})
          }, u.EK.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)("div", {
      ref: e => t(e)
    })]
  }))
}

function h(e) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)();
  return (0, o.lY)(e.guildId, n, e.analyticsLocation), (0, r.jsx)(a.Gt, {
    value: n,
    children: (0, r.jsx)(c.BT, p(x({}, e), {
      children: (0, r.jsx)(v, x({}, e))
    }))
  })
}