/** Chunk was on 384 **/
/** chunk id: 798680, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M7: () => c,
  dw: () => o,
  ue: () => s
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  s = ((r = {})[r.BASIC_INFO = 0] = "BASIC_INFO", r[r.TIERS = 1] = "TIERS", r[r.PAYMENT = 2] = "PAYMENT", r[r.EMOJIS = 3] = "EMOJIS", r);
let a = Chunk473749.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function o() {
  return Chunk473749.useContext(a)
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