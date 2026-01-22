/** Chunk was on 47841 **/
/** chunk id: 700458, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Oi: () => s,
  Tj: () => c,
  ZM: () => o
}), require("./65821.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  s = ((r = {})[r.BASIC_INFO = 0] = "BASIC_INFO", r[r.TIERS = 1] = "TIERS", r[r.PAYMENT = 2] = "PAYMENT", r[r.EMOJIS = 3] = "EMOJIS", r);
let a = Chunk64700.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function c() {
  return l.useContext(a)
}

function o(e) {
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