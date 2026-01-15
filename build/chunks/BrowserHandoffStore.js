/** Chunk was on web.js **/
/** chunk id: 117240, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => P
});
var o, Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk899742 = require("./899742.js"),
  Chunk598077 = require("./598077.js"),
  Chunk12647 = require("./12647.js"),
  Chunk358085 = require("./358085.js"),
  Chunk374023 = require("./374023.js");

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
  y = new Chunk846519.V7;

function O() {
  null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), _.Z.focus(null, true))
}

function v() {
  i = null, y.stop(), b = false, c.K.set(E, b)
}

function S(e) {
  r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
}

function I(e) {
  if (null != i) returnfalse;
  i = (0, s.Z)(), y.start(e.timeout, () => (0, f.lx)()), O()
}

function T(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    timeout: r
  } = e;
  if (null == t || null == n) returnfalse;
  b = true, y.start(r, () => (0, f.lx)())
}

function C(e) {
  a = new p.Z(e.user)
}

function A() {
  v()
}
class N extends(o = Chunk442837.ZP.Store) {
  initialize() {
    false !== c.K.get(E) && (b = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !m.s.isDisallowPopupsSet() && b
  }
  get user() {
    return a
  }
  get key() {
    return i
  }
}
g(N, "displayName", "BrowserHandoffStore");
let P = new N(Chunk570140.Z, {
  RPC_SERVER_READY: S,
  BROWSER_HANDOFF_BEGIN: I,
  BROWSER_HANDOFF_FROM_APP: T,
  BROWSER_HANDOFF_UNAVAILABLE: v,
  BROWSER_HANDOFF_SET_USER: C,
  LOGIN: A,
  LOGIN_SUCCESS: A,
  LOGOUT: A,
  REGISTER: A
})