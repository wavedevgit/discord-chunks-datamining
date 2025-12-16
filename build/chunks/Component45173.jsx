/** Chunk was on 1272 **/
/** chunk id: 45173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk92951 = require("./92951.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk324060 = require("./324060.js"),
  Chunk830960 = require("./830960.js"),
  Chunk840767 = require("./840767.jsx"),
  Chunk639949 = require("./639949.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk921944 = require("./921944.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306541 = require("./306541.js"),
  Chunk900268 = require("./900268.js"),
  Chunk35446 = require("./35446.js");

function O(e) {
  var t, n;
  let {
    markAsDismissed: O
  } = e, v = u.E[f.yD.WELCOME], y = (0, a.dQu)(v.primaryColor).hex(), I = (0, l.e7)([s.Z], () => s.Z.useReducedMotion);
  return (0, r.jsx)(c.Q.Provider, {
    value: (t = function(e) {
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
    }({}, v), n = n = {
      backgroundOverlayColor: v.primaryColor
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t),
    children: (0, r.jsx)(o.ZP, {
      children: (0, r.jsxs)("div", {
        className: b.container,
        style: {
          backgroundImage: "url(".concat(E.Z, "), linear-gradient(").concat(y, "80, black)"),
          borderColor: y,
          boxShadow: "0 0 15px 5px ".concat(y, "50")
        },
        children: [(0, r.jsx)(i.Z, {
          autoPlay: !I,
          muted: true,
          playsInline: true,
          loop: true,
          className: b.logo,
          children: (0, r.jsx)("source", {
            src: _.Z,
            type: "video/webm"
          })
        }), (0, r.jsxs)("div", {
          className: b.textContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "display-sm",
            style: {
              color: y
            },
            className: b.display,
            children: m.intl.string(h.default["CdU/PF"])
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            style: {
              color: y
            },
            children: m.intl.string(h.default["M/LvW0"])
          }), (0, r.jsx)(a.P3F, {
            className: b.dismissButton,
            onClick: () => O(g.L.DISMISS),
            style: {
              color: y
            },
            children: (0, r.jsx)(a.Text, {
              variant: "text-xxs/normal",
              style: {
                color: y
              },
              children: m.intl.string(m.t.WAI6xu)
            })
          })]
        }), (0, r.jsx)(p.Z, {
          className: b.clickable,
          contentClassName: b.button,
          onClick: () => {
            (0, d.Z)("coachmark"), O(g.L.TAKE_ACTION)
          },
          children: (0, r.jsx)(a.d4D, {
            color: y,
            size: "sm"
          })
        })]
      })
    })
  })
}