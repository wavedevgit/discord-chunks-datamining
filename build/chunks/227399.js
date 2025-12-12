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
let a = Chunk473749.createContext(null);

function s(e) {
  let {
    locale: t,
    children: n
  } = e, i = o.useMemo(() => ({
    locale: t,
    direction: (0, r.d)(t) ? "rtl" : "ltr"
  }), [t]);
  return o.createElement(a.Provider, {
    value: i
  }, n)
}

function l(e) {
  let {
    children: t
  } = e, n = (0, i.R)();
  return o.createElement(a.Provider, {
    value: n
  }, t)
}

function c(e) {
  let {
    locale: t,
    children: n
  } = e;
  return t ? o.createElement(s, {
    locale: t,
    children: n
  }) : o.createElement(l, {
    children: n
  })
}

function u() {
  let e = (0, Chunk864406.R)();
  return (0, Chunk473749.useContext)(a) || module
}