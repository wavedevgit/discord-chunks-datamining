/** Chunk was on 64982 **/
/** chunk id: 798680, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M7: () => c,
  dw: () => o,
  ue: () => a
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  a = ((r = {})[r.BASIC_INFO = 0] = "BASIC_INFO", r[r.TIERS = 1] = "TIERS", r[r.PAYMENT = 2] = "PAYMENT", r[r.EMOJIS = 3] = "EMOJIS", r);
let s = Chunk647438.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function o() {
  return Chunk647438.useContext(s)
}

function c(e) {
  let {
    initialTab: t,
    children: n
  } = e, [r, a] = l.useState(t);
  return (0, i.jsx)(s.Provider, {
    value: {
      currentTab: r,
      setCurrentTab: a
    },
    children: n
  })
}