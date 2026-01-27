/** Chunk was on web.js **/
/** chunk id: 417597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  My: () => s,
  bG: () => l,
  cf: () => c,
  yK: () => u
}), require("./65821.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk52133 = require("./52133.js"),
  Chunk968441 = require("./968441.js");

function o(e, t) {
  return e === t
}

function s(e, t) {
  returnfalse
}

function l(e, t, n) {
  let s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o,
    l = (0, r.useRef)(null);
  null == l.current && (l.current = {
    stores: e,
    areStatesEqual: s,
    getStateFromStores: t,
    prevDeps: true,
    state: true
  });
  let c = l.current,
    u = c.state;
  if (null == n || !(0, i.v)(n, c.prevDeps)) {
    let e;
    e = t(), null != u && s(u, e) || (u = e)
  }(0, r.useInsertionEffect)(() => {
    c.getStateFromStores = t, c.prevDeps = n, c.state = u
  });
  let [, d] = (0, r.useState)(null);
  return (0, r.useInsertionEffect)(() => {
    let t = () => {
        let e;
        e = c.getStateFromStores(), s(c.state, e) || (c.state = e, d({}))
      },
      n = new a.r(e, t);
    return n.attach("useStateFromStores"), () => n.detach()
  }, []), u
}

function c(e, t, n) {
  return l(e, t, n, i.A)
}

function u(e, t, n) {
  return l(e, t, n, i.v)
}
require("./461275.js")