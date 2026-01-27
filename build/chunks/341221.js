/** Chunk was on web.js **/
/** chunk id: 341221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cc: () => d,
  wR: () => h
});
var Chunk64700 = require("./64700.js");
let i = {
    prefix: String(Math.round(1e10 * Math.random())),
    current: 0
  },
  a = Chunk64700.createContext(i),
  o = Chunk64700.createContext(false);
"u" > typeof window && window.document && window.document.createElement;
let s = new WeakMap;

function l(e = false) {
  let t = (0, r.useContext)(a),
    n = (0, r.useRef)(null);
  if (null === n.current && !e) {
    var i, o;
    let e = null == (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = o.ReactCurrentOwner) ? true : i.current;
    if (e) {
      let n = s.get(e);
      null == n ? s.set(e, {
        id: t.current,
        state: e.memoizedState
      }) : e.memoizedState !== n.state && (t.current = n.id, s.delete(e))
    }
    n.current = ++t.current
  }
  return n.current
}

function c(e) {
  let t = (0, r.useContext)(a),
    n = l(!!e),
    i = `react-aria${t.prefix}`;
  return e || `${i}-${n}`
}

function u(e) {
  let t = r.useId(),
    [n] = (0, r.useState)(h()),
    a = n ? "react-aria" : `react-aria${i.prefix}`;
  return e || `${a}-${t}`
}
let d = "function" == typeof Chunk64700.useId ? u : c;

function f() {
  returnfalse
}

function p() {
  returntrue
}

function _(e) {
  return () => {}
}

function h() {
  return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(_, f, p) : (0, r.useContext)(o)
}