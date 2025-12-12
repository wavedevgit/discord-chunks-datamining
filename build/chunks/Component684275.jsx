/** Chunk was on 384 **/
/** chunk id: 684275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
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

function c(e, t) {
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

function u(e) {
  let t = "",
    n = "";
  switch (e) {
    case s.Ux.PROFANITY:
      t = a.intl.string(a.t["I+BDrH"]), n = a.intl.string(a.t.hISCms);
      break;
    case s.Ux.SEXUAL_CONTENT:
      t = a.intl.string(a.t.URSMet), n = a.intl.string(a.t.oRQDBs);
      break;
    case s.Ux.SLURS:
      t = a.intl.string(a.t["xjK2M/"]), n = a.intl.string(a.t.oJYXBG);
      break;
    default:
      t = "Error", n = "Unrecognized list"
  }
  return {
    headerText: t,
    subtitleText: n
  }
}

function d(e) {
  var t;
  let {
    rule: n,
    onChangeRule: a
  } = e, [d, g] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? true : t.presets)), m = i.useMemo(() => e => {
    a(c(o({}, n), {
      triggerMetadata: c(o({}, n.triggerMetadata), {
        presets: e
      })
    }))
  }, [a, n]), p = i.useCallback(e => {
    let t = e.map(e => e);
    g(new Set(t)), m(t)
  }, [m]), f = i.useMemo(() => [{
    label: u(s.Ux.PROFANITY).headerText,
    description: u(s.Ux.PROFANITY).subtitleText,
    value: String(s.Ux.PROFANITY)
  }, {
    label: u(s.Ux.SLURS).headerText,
    description: u(s.Ux.SLURS).subtitleText,
    value: String(s.Ux.SLURS)
  }, {
    label: u(s.Ux.SEXUAL_CONTENT).headerText,
    description: u(s.Ux.SEXUAL_CONTENT).subtitleText,
    value: String(s.Ux.SEXUAL_CONTENT)
  }], []);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(l.cOn, {
      selectedValues: Array.from(d).map(String),
      onChange: p,
      options: f
    })
  })
}