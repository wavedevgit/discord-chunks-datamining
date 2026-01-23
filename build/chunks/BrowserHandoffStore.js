/** Chunk was on web.js **/
/** chunk id: 115036, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => w
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
  y = false,
  b = new Chunk451988.Ep;

function O() {
  null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), _.A.focus(null, true))
}

function v() {
  i = null, b.stop(), y = false, c.w.set(E, y)
}

function A(e) {
  r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
}

function I(e) {
  if (null != i) returnfalse;
  i = (0, o.A)(), b.start(e.timeout, () => (0, f.mZ)()), O()
}

function S(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    timeout: r
  } = e;
  if (null == t || null == n) returnfalse;
  y = true, b.start(r, () => (0, f.mZ)())
}

function T(e) {
  a = new p.A(e.user)
}

function C() {
  v()
}
class N extends(s = Chunk311907.Ay.Store) {
  initialize() {
    false !== c.w.get(E) && (y = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !m.P.isDisallowPopupsSet() && y
  }
  get user() {
    return a
  }
  get key() {
    return i
  }
}
g(N, "displayName", "BrowserHandoffStore");
let w = new N(Chunk73153.h, {
  RPC_SERVER_READY: A,
  BROWSER_HANDOFF_BEGIN: I,
  BROWSER_HANDOFF_FROM_APP: S,
  BROWSER_HANDOFF_UNAVAILABLE: v,
  BROWSER_HANDOFF_SET_USER: T,
  LOGIN: C,
  LOGIN_SUCCESS: C,
  LOGOUT: C,
  REGISTER: C
})