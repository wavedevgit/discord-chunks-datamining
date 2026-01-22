/** Chunk was on web.js **/
/** chunk id: 839214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk499867 = require("./499867.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js");

function s(e, t) {
  return e === t
}

function o(e) {
  let t = (0, i.h)((0, r.eh)((t, n, r) => e(e => (0, a.r)(() => t(e)), n, r)));

  function n(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s;
    return t(e, n)
  }

  function o(e) {
    let n = t.getState();
    return null != e ? e(n) : n
  }

  function l(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s;
    return n(t => t[e], t)
  }

  function c(e) {
    return o(t => t[e])
  }
  let u = e => {
    (0, a.r)(() => t.setState(e))
  };

  function d() {
    u(t.getInitialState())
  }
  return {
    useState: n,
    getState: o,
    useField: l,
    getField: c,
    subscribe: function(e, n, r) {
      return t.subscribe(e, n, r)
    },
    setState: u,
    resetState: d
  }
}