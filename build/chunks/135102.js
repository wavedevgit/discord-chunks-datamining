/** Chunk was on web.js **/
/** chunk id: 135102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C$: () => _,
  fm: () => p,
  sf: () => f,
  tj: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk343203 = require("./343203.js"),
  Chunk663042 = require("./663042.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = "custom-themes-share-modal",
  d = {
    searchText: "",
    selectedDestinations: [],
    message: {},
    messageText: "",
    channel: {},
    maxDestinations: 5,
    send: async () => {},
    sending: false,
    canSend: () => false
  },
  f = () => (0, i.M)()((e, t) => c(s({}, d), {
    canSend: () => !t().sending && t().selectedDestinations.length > 0,
    updateSearchText: t => e({
      searchText: t
    }),
    updateSelectShareDestinations: t => e({
      selectedDestinations: t
    }),
    updateMessage: t => e({
      message: t
    }),
    updateChannel: t => e({
      channel: t
    }),
    updateSending: t => e({
      sending: t
    }),
    updateMessageText: t => e({
      messageText: t
    }),
    setSend: t => e({
      send: t
    })
  })),
  p = (0, Chunk473749.createContext)(null),
  _ = () => (0, a.o)((0, r.useContext)(p))