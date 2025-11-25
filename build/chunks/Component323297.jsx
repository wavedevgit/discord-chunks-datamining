/** Chunk was on 26473 **/
/** chunk id: 323297, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk494620 = require("./494620.jsx"),
  Chunk578756 = require("./578756.js"),
  Chunk853944 = require("./853944.js"),
  Chunk899789 = require("./899789.jsx"),
  Chunk796724 = require("./796724.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk613275 = require("./613275.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871404 = require("./871404.js");

function v(e) {
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

function j(e, n) {
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

function h(e) {
  let {
    step: n,
    setFooterNode: t
  } = (0, g.JL)(), a = (0, d.V)("GameServerSetupModal"), {
    title: s,
    subtitle: h
  } = function(e) {
    switch (e) {
      case m.EK.SELECT_GAME:
        return {
          title: x.intl.string(f.default["3vWDMz"]), subtitle: x.intl.string(f.default.Az5bjs)
        };
      case m.EK.SERVER_SETTINGS:
        return {
          title: x.intl.string(f.default.RLGW9z)
        }
    }
  }(n);
  return (0, r.jsxs)(i.IX, j(v({}, e), {
    size: "lg",
    children: [(0, r.jsx)(i.xBx, {
      title: s,
      subtitle: h
    }), a && (0, r.jsx)("div", {
      className: p.degradedWarningContainer,
      children: (0, r.jsx)(o.Z, {
        look: o.z.WARNING,
        children: x.intl.format(f.default.XzXjK2, {})
      })
    }), (0, r.jsx)(l.zJl, {
      className: p.modalContent,
      style: {
        width: m.AK
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: m.TG
        },
        children: (0, r.jsxs)(l.MyZ, {
          width: m.SY,
          activeSlide: n,
          children: [(0, r.jsx)(l.Mi4, {
            id: m.EK.SELECT_GAME,
            children: (0, r.jsx)(c.Z, {})
          }, m.EK.SELECT_GAME), (0, r.jsx)(l.Mi4, {
            id: m.EK.SERVER_SETTINGS,
            children: (0, r.jsx)(u.Z, {})
          }, m.EK.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)("div", {
      ref: e => t(e)
    })]
  }))
}

function b(e) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)();
  return (0, s.lY)(e.guildId, n, e.analyticsLocation), (0, r.jsx)(a.Gt, {
    value: n,
    children: (0, r.jsx)(g.BT, j(v({}, e), {
      children: (0, r.jsx)(h, v({}, e))
    }))
  })
}