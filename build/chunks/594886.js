/** Chunk was on web.js **/
/** chunk id: 594886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => c,
  j: () => u
});
var Chunk910196 = require("./910196.js"),
  Chunk302996 = require("./302996.js"),
  Chunk647438 = require("./647438.js");
let o = Chunk647438.createContext(null);

function s(e) {
  let {
    locale: t,
    children: n
  } = e, i = a.useMemo(() => ({
    locale: t,
    direction: (0, r.d)(t) ? "rtl" : "ltr"
  }), [t]);
  return a.createElement(o.Provider, {
    value: i
  }, n)
}

function l(e) {
  let {
    children: t
  } = e, n = (0, i.R)();
  return a.createElement(o.Provider, {
    value: n
  }, t)
}

function c(e) {
  let {
    locale: t,
    children: n
  } = e;
  return t ? a.createElement(s, {
    locale: t,
    children: n
  }) : a.createElement(l, {
    children: n
  })
}

function u() {
  let e = (0, Chunk302996.R)();
  return (0, Chunk647438.useContext)(o) || module
}