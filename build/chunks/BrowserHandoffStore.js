/** Chunk was on web.js **/
/** chunk id: 115036, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => R
});
var s, Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk6981 = require("./6981.js"),
  Chunk427157 = require("./427157.js"),
  Chunk353835 = require("./353835.js"),
  Chunk723702 = require("./723702.js"),
  Chunk536194 = require("./536194.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = "BrowserHandoffStore",
  b = false,
  y = new Chunk451988.Ep;

function O() {
  null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), _.A.focus(null, true))
}

function A() {
  i = null, y.stop(), b = false, c.w.set(E, b)
}

function v(e) {
  r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
}

function S(e) {
  if (null != i) returnfalse;
  i = (0, o.A)(), y.start(e.timeout, () => (0, f.mZ)()), O()
}

function I(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    timeout: r
  } = e;
  if (null == t || null == n) returnfalse;
  b = true, y.start(r, () => (0, f.mZ)())
}

function T(e) {
  a = new p.A(e.user)
}

function C() {
  A()
}
class N extends(s = Chunk311907.Ay.Store) {
  initialize() {
    false !== c.w.get(E) && (b = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !m.P.isDisallowPopupsSet() && b
  }
  get user() {
    return a
  }
  get key() {
    return i
  }
}
g(N, "displayName", "BrowserHandoffStore");
let R = new N(Chunk73153.h, {
  RPC_SERVER_READY: v,
  BROWSER_HANDOFF_BEGIN: S,
  BROWSER_HANDOFF_FROM_APP: I,
  BROWSER_HANDOFF_UNAVAILABLE: A,
  BROWSER_HANDOFF_SET_USER: T,
  LOGIN: C,
  LOGIN_SUCCESS: C,
  LOGOUT: C,
  REGISTER: C
})