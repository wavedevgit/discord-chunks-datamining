/** Chunk was on web.js **/
/** chunk id: 853590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => c,
  Y: () => u
});
var Chunk909144 = require("./909144.js"),
  Chunk314739 = require("./314739.js"),
  Chunk64700 = require("./64700.js");
let s = Chunk64700.createContext(null);

function o(e) {
  let {
    locale: t,
    children: n
  } = e, i = a.useMemo(() => ({
    locale: t,
    direction: (0, r.V)(t) ? "rtl" : "ltr"
  }), [t]);
  return a.createElement(s.Provider, {
    value: i
  }, n)
}

function l(e) {
  let {
    children: t
  } = e, n = (0, i.D)();
  return a.createElement(s.Provider, {
    value: n
  }, t)
}

function c(e) {
  let {
    locale: t,
    children: n
  } = e;
  return t ? a.createElement(o, {
    locale: t,
    children: n
  }) : a.createElement(l, {
    children: n
  })
}

function u() {
  let e = (0, i.D)();
  return (0, a.useContext)(s) || e
}