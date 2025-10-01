/** Chunk was on web.js **/
/** chunk id: 543388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk386312 = require("./386312.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    application: t,
    timestamp: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      size: s.A.LARGE,
      game: t
    }), (0, r.jsxs)("div", {
      className: c.textContainer,
      children: [(0, r.jsx)(o.Text, {
        className: c.timestamp,
        variant: "text-xs/medium",
        color: "text-muted",
        children: a()(n).format("LLLL")
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: l.intl.format(l.t.J3s8JC, {
          applicationName: t.name
        })
      })]
    })]
  })
}

function h(e) {
  let {
    application: t,
    timestamp: n,
    children: i
  } = e;
  return (0, r.jsx)(o.ua7, {
    hideOnClick: true,
    position: "top",
    "aria-label": l.intl.string(l.t["5nMcv7"]),
    tooltipClassName: c.gameMessageTooltip,
    tooltipContentClassName: c.gameMessageTooltipContent,
    text: (0, r.jsx)(p, {
      application: t,
      timestamp: n
    }),
    children: e => (0, r.jsx)(o.P3F, _(d({
      tag: "span"
    }, e), {
      children: i
    }))
  })
}

function m(e) {
  let {
    application: t,
    timestamp: n,
    compact: i,
    children: a
  } = e;
  return (0, r.jsxs)(h, {
    application: t,
    timestamp: n,
    children: [i ? null : (0, r.jsx)(o.iWm, {
      className: c.gameIcon,
      size: "custom",
      width: 14,
      height: 14
    }), a]
  })
}