/** Chunk was on web.js **/
/** chunk id: 972959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
var Chunk690775 = require("./690775.js"),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js");

function o(e, t) {
  return e === t
}

function s(e) {
  let t = (0, i.F)((0, r.XR)((t, n, r) => e(e => (0, a.j)(() => t(e)), n, r)));

  function n(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o;
    return t(e, n)
  }

  function s(e) {
    let n = t.getState();
    return null != e ? e(n) : n
  }

  function l(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o;
    return n(t => t[e], t)
  }

  function c(e) {
    return s(t => t[e])
  }
  let u = e => {
    (0, a.j)(() => t.setState(e))
  };

  function d() {
    u(t.getInitialState())
  }
  return {
    useState: n,
    getState: s,
    useField: l,
    getField: c,
    subscribe: function(e, n, r) {
      return t.subscribe(e, n, r)
    },
    setState: u,
    resetState: d
  }
}