/** Chunk was on web.js **/
/** chunk id: 657871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kB: () => c,
  zM: () => u
});
var Chunk43169 = require("./43169.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let l = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-09_mention_suggestion",
  label: "Mention Suggestions",
  defaultConfig: {
    enabled: false,
    suggestionDesign: "horizontal",
    highlightDesign: "mention",
    onlyExactMatch: false,
    eagerRecentSenders: false,
    largeGuildExactMatchRecentSenders: false
  },
  treatments: [{
    id: 1,
    label: "Default",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 2,
    label: "Exact match only",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 3,
    label: "Alternate highlight design",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "mention",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 4,
    label: "Horizontal suggestions",
    config: {
      enabled: true,
      suggestionDesign: "horizontal",
      highlightDesign: "simple",
      onlyExactMatch: false,
      eagerRecentSenders: false,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 5,
    label: "Exact match + eager recent senders",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: true,
      largeGuildExactMatchRecentSenders: false
    }
  }, {
    id: 6,
    label: "Eager match recent senders for small guilds, exact match for large guilds",
    config: {
      enabled: true,
      suggestionDesign: "vertical",
      highlightDesign: "simple",
      onlyExactMatch: true,
      eagerRecentSenders: true,
      largeGuildExactMatchRecentSenders: true
    }
  }]
});

function c(e, t) {
  var n;
  let i = (0, r.F4)(e);
  return l.getCurrentConfig({
    location: e
  }, s(a({}, t), {
    disable: i || null != (n = t.disable) && n
  }))
}

function u(e, t) {
  var n;
  let i = (0, r.jX)(e);
  return l.useExperiment({
    location: e
  }, s(a({}, t), {
    disable: i || null != (n = t.disable) && n
  }))
}