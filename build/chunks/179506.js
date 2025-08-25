/** Chunk was on web.js **/
/** chunk id: 179506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Av: () => h,
  gP: () => d
});
var Chunk647438 = require("./647438.js");
let i = {
    prefix: String(Math.round(1e10 * Math.random())),
    current: 0
  },
  o = Chunk647438.createContext(i),
  a = Chunk647438.createContext(false);
"undefined" != typeof window && window.document && window.document.createElement;
let s = new WeakMap;

function l(e = false) {
  let t = (0, r.useContext)(o),
    n = (0, r.useRef)(null);
  if (null === n.current && !e) {
    var i, a;
    let e = null == (a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = a.ReactCurrentOwner) ? true : i.current;
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
  let t = (0, r.useContext)(o),
    n = l(!!e),
    i = `react-aria${t.prefix}`;
  return e || `${i}-${n}`
}

function u(e) {
  let t = r.useId(),
    [n] = (0, r.useState)(h()),
    o = n ? "react-aria" : `react-aria${i.prefix}`;
  return e || `${o}-${t}`
}
let d = "function" == typeof Chunk647438.useId ? u : c;

function f() {
  returnfalse
}

function _() {
  returntrue
}

function p(e) {
  return () => {}
}

function h() {
  return "function" == typeof Chunk647438.useSyncExternalStore ? Chunk647438.useSyncExternalStore(p, f, _) : (0, Chunk647438.useContext)(a)
}