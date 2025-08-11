/** Chunk was on 67544 **/
/** chunk id: 370452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk120421 = require("./120421.js"),
  Chunk763283 = require("./763283.jsx"),
  Chunk424984 = require("./424984.jsx"),
  Chunk944548 = require("./944548.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk231338 = require("./231338.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk832287 = require("./832287.js"),
  Chunk359527 = require("./359527.js"),
  Chunk180770 = require("./180770.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e) {
  let {
    achievementId: t,
    achievement: n
  } = e, o = (0, s.e7)([a.Z], () => a.Z.hasUnlockedAchievement(t));
  return (0, r.jsx)(l.Z, {
    borderColor: "green",
    text: o ? (0, r.jsxs)("div", {
      className: m.tooltip,
      children: [(0, r.jsx)(i.Z, {
        variant: "text-md/bold",
        color: "always-white",
        children: n.name
      }), (0, r.jsx)(i.Z, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: n.description
      })]
    }) : null,
    "aria-label": o ? n.name : "",
    spacing: false,
    position: "bottom",
    children: e => {
      var t, s;
      return (0, r.jsx)("div", (t = y({
        className: m.achievement
      }, e), s = s = {
        children: (0, r.jsx)("img", {
          className: m.achievementIcon,
          src: o ? n.icon : b,
          alt: ""
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
      }), t))
    }
  })
}

function x(e) {
  let {
    transitionState: t
  } = e, n = (0, u.EC)();
  return (0, r.jsx)(o.f6W, {
    theme: d.BR.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsxs)(o.Y0X, {
      className: e,
      transitionState: t,
      size: o.CgR.MEDIUM,
      parentComponent: "ClickerAchievements",
      children: [(0, r.jsxs)(o.xBx, {
        separator: false,
        className: m.header,
        children: [(0, r.jsx)(i.Z, {
          variant: "heading-lg/semibold",
          color: "always-white",
          children: p.intl.string(f.default["236TJC"]).toLocaleLowerCase()
        }), (0, r.jsx)(i.Z, {
          variant: "text-md/medium",
          color: "text-muted",
          children: p.intl.string(f.default.wgMDm5).toLocaleLowerCase()
        })]
      }), (0, r.jsx)(o.hzk, {
        className: m.content,
        children: Object.keys(n).map(e => {
          let t = Number.parseInt(e);
          return (0, r.jsx)(h, {
            achievementId: t,
            achievement: n[t]
          }, t)
        })
      })]
    })
  })
}

function v() {
  return (0, Chunk255367.jsx)(Chunk424984.O, {
    iconSrc: Chunk359527,
    title: Chunk388032.intl.string(Chunk603571.default["236TJC"]),
    onClick: () => {
      (0, Chunk481060.ZDy)(() => Promise.resolve(e => (0, r.jsx)(x, y({}, e))))
    }
  })
}