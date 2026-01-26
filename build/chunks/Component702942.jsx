/** Chunk was on 39048 **/
/** chunk id: 702942, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx");

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

function d(e) {
  let t = "",
    n = "";
  switch (e) {
    case s.vY.PROFANITY:
      t = a.intl.string(a.t["I+BDrH"]), n = a.intl.string(a.t.hISCms);
      break;
    case s.vY.SEXUAL_CONTENT:
      t = a.intl.string(a.t.URSMet), n = a.intl.string(a.t.oRQDBs);
      break;
    case s.vY.SLURS:
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

function u(e) {
  var t;
  let {
    rule: n,
    onChangeRule: a
  } = e, [u, g] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? true : t.presets)), m = i.useMemo(() => e => {
    a(c(o({}, n), {
      triggerMetadata: c(o({}, n.triggerMetadata), {
        presets: e
      })
    }))
  }, [a, n]), p = i.useCallback(e => {
    let t = e.map(e => e);
    g(new Set(t)), m(t)
  }, [m]), f = i.useMemo(() => [{
    label: d(s.vY.PROFANITY).headerText,
    description: d(s.vY.PROFANITY).subtitleText,
    value: String(s.vY.PROFANITY)
  }, {
    label: d(s.vY.SLURS).headerText,
    description: d(s.vY.SLURS).subtitleText,
    value: String(s.vY.SLURS)
  }, {
    label: d(s.vY.SEXUAL_CONTENT).headerText,
    description: d(s.vY.SEXUAL_CONTENT).subtitleText,
    value: String(s.vY.SEXUAL_CONTENT)
  }], []);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(l.$QX, {
      selectedValues: Array.from(u).map(String),
      onChange: p,
      options: f
    })
  })
}