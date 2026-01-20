/** Chunk was on 3298 **/
/** chunk id: 323297, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969567 = require("./969567.js");

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

function v(e, n) {
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
  } = (0, g.JL)(), l = (0, d.V)("GameServerSetupModal"), {
    title: s,
    subtitle: j
  } = function(e) {
    switch (e) {
      case f.EK.SELECT_GAME:
        return {
          title: b.intl.string(m.default["3vWDMz"]), subtitle: b.intl.string(m.default.Az5bjs)
        };
      case f.EK.SERVER_SETTINGS:
        return {
          title: b.intl.string(m.default.RLGW9z)
        }
    }
  }(n);
  return (0, r.jsxs)(i.IX, v(p({}, e), {
    size: "lg",
    children: [(0, r.jsx)(i.xBx, {
      title: s,
      subtitle: j
    }), l && (0, r.jsx)("div", {
      className: x.degradedWarningContainer,
      children: (0, r.jsx)(o.Z, {
        look: o.z.WARNING,
        children: b.intl.format(m.default.XzXjK2, {})
      })
    }), (0, r.jsx)(a.zJl, {
      className: x.modalContent,
      style: {
        width: f.AK
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: f.TG
        },
        children: (0, r.jsxs)(a.MyZ, {
          width: f.SY,
          activeSlide: n,
          children: [(0, r.jsx)(a.Mi4, {
            id: f.EK.SELECT_GAME,
            children: (0, r.jsx)(c.Z, {})
          }, f.EK.SELECT_GAME), (0, r.jsx)(a.Mi4, {
            id: f.EK.SERVER_SETTINGS,
            children: (0, r.jsx)(u.Z, {})
          }, f.EK.SERVER_SETTINGS)]
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
  } = (0, l.ZP)();
  return (0, s.lY)(e.guildId, n, e.analyticsLocation), (0, r.jsx)(l.Gt, {
    value: n,
    children: (0, r.jsx)(g.BT, v(p({}, e), {
      children: (0, r.jsx)(j, p({}, e))
    }))
  })
}