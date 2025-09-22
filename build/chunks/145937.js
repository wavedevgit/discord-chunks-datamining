/** Chunk was on web.js **/
/** chunk id: 145937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Av: () => m,
  gP: () => f
});
var Chunk647438 = require("./647438.js");
let i = {
    prefix: String(Math.round(1e10 * Math.random())),
    current: 0
  },
  a = Chunk647438.createContext(i),
  o = Chunk647438.createContext(false),
  s = !!("undefined" != typeof window && window.document && window.document.createElement),
  l = new WeakMap;

function c(e = false) {
  let t = (0, r.useContext)(a),
    n = (0, r.useRef)(null);
  if (null === n.current && !e) {
    var i, o;
    let e = null == (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = o.ReactCurrentOwner) ? true : i.current;
    if (e) {
      let n = l.get(e);
      null == n ? l.set(e, {
        id: t.current,
        state: e.memoizedState
      }) : e.memoizedState !== n.state && (t.current = n.id, l.delete(e))
    }
    n.current = ++t.current
  }
  return n.current
}

function u(e) {
  let t = (0, r.useContext)(a);
  t !== i || s || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = c(!!e),
    o = `react-aria${t.prefix}`;
  return e || `${o}-${n}`
}

function d(e) {
  let t = r.useId(),
    [n] = (0, r.useState)(m()),
    a = n ? "react-aria" : `react-aria${i.prefix}`;
  return e || `${a}-${t}`
}
let f = "function" == typeof Chunk647438.useId ? d : u;

function _() {
  returnfalse
}

function p() {
  returntrue
}

function h(e) {
  return () => {}
}

function m() {
  return "function" == typeof Chunk647438.useSyncExternalStore ? Chunk647438.useSyncExternalStore(h, _, p) : (0, Chunk647438.useContext)(o)
}