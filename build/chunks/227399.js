/** Chunk was on web.js **/
/** chunk id: 227399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => c,
  j: () => u
});
var Chunk160871 = require("./160871.js"),
  Chunk864406 = require("./864406.js"),
  Chunk473749 = require("./473749.js");
let o = Chunk473749.createContext(null);

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
  let e = (0, Chunk864406.R)();
  return (0, Chunk473749.useContext)(o) || module
}