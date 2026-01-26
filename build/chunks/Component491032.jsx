/** Chunk was on 39048 **/
/** chunk id: 491032, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk878701 = require("./878701.js"),
  Chunk754513 = require("./754513.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410478 = require("./410478.js");

function d(e) {
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

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  var t;
  let {
    rule: n,
    onChangeRule: g,
    collapsed: m = false
  } = e, [p, f] = i.useState(!m), h = i.useCallback(() => {
    f(!p)
  }, [p, f]), b = i.useCallback(e => {
    g(u(d({}, n), {
      triggerMetadata: u(d({}, n.triggerMetadata), {
        regexPatterns: e
      })
    }))
  }, [g, n]);
  return (0, s.u)(n.triggerType) ? (0, r.jsx)(l.Nt8, {
    isExpanded: p,
    collapsibleContent: (0, r.jsx)(a.A, {
      rule: n,
      onChangeText: b,
      className: c.kS,
      initialValue: null == (t = n.triggerMetadata) ? true : t.regexPatterns
    }),
    className: c.uR,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(l.DUT, {
        onClick: e => {
          h(), t(e)
        },
        children: (0, r.jsxs)("div", {
          className: c.wx,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: o.intl.string(o.t["dnunm+"])
          }), p ? (0, r.jsx)(l.tN5, {
            size: "md",
            color: "currentColor",
            className: c.UE
          }) : (0, r.jsx)(l.abt, {
            size: "md",
            color: "currentColor",
            className: c.UE
          })]
        })
      })
    }
  }) : null
}