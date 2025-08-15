/** Chunk was on 31978 **/
/** chunk id: 543388, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk56651 = require("./56651.js");

function u(e) {
  let {
    application: t,
    timestamp: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      size: a.Z.Sizes.LARGE,
      game: t
    }), (0, r.jsxs)("div", {
      className: c.textContainer,
      children: [(0, r.jsx)(i.Text, {
        className: c.timestamp,
        variant: "text-xs/medium",
        color: "text-muted",
        children: o()(n).format("LLLL")
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: s.intl.format(s.t.J3s8JC, {
          applicationName: t.name
        })
      })]
    })]
  })
}

function d(e) {
  let {
    application: t,
    timestamp: n,
    children: l
  } = e;
  return (0, r.jsx)(i.ua7, {
    hideOnClick: true,
    position: "top",
    "aria-label": s.intl.string(s.t["5nMcv7"]),
    tooltipClassName: c.gameMessageTooltip,
    tooltipContentClassName: c.gameMessageTooltipContent,
    text: (0, r.jsx)(u, {
      application: t,
      timestamp: n
    }),
    children: e => {
      var t, n;
      return (0, r.jsx)(i.P3F, (t = function(e) {
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
      }({
        tag: "span"
      }, e), n = n = {
        children: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}

function p(e) {
  let {
    application: t,
    timestamp: n,
    compact: l,
    children: o
  } = e;
  return (0, r.jsxs)(d, {
    application: t,
    timestamp: n,
    children: [l ? null : (0, r.jsx)(i.iWm, {
      className: c.gameIcon,
      size: "custom",
      width: 14,
      height: 14
    }), o]
  })
}