/** Chunk was on 27087 **/
/** chunk id: 798680, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M7: () => c,
  dw: () => o,
  ue: () => s
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  s = ((r = {})[r.BASIC_INFO = 0] = "BASIC_INFO", r[r.TIERS = 1] = "TIERS", r[r.PAYMENT = 2] = "PAYMENT", r[r.EMOJIS = 3] = "EMOJIS", r);
let a = Chunk647438.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function o() {
  return Chunk647438.useContext(a)
}

function c(e) {
  let {
    initialTab: t,
    children: n
  } = e, [r, s] = l.useState(t);
  return (0, i.jsx)(a.Provider, {
    value: {
      currentTab: r,
      setCurrentTab: s
    },
    children: n
  })
}