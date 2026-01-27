/** Chunk was on web.js **/
/** chunk id: 21599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WU: () => l,
  fB: () => o,
  m0: () => u,
  y$: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk488428 = require("./488428.js"),
  Chunk372250 = require("./372250.js");
let a = "event";

function o(e, t) {
  return null == t ? e : l({
    baseCode: e,
    guildScheduledEventId: s(t)
  })
}

function s(e) {
  let t = "?" === e.charAt(0) ? e.substring(1) : e;
  try {
    let e = r.parse(t);
    return (0, i.p)(e[a])
  } catch (e) {
    return
  }
}

function l(e) {
  let {
    baseCode: t,
    guildScheduledEventId: n
  } = e;
  return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
}

function c(e) {
  let [t, n] = e.split("?");
  if (null == n) return {
    baseCode: t
  };
  let o = r.parse(n);
  return {
    baseCode: t,
    guildScheduledEventId: (0, i.p)(o[a])
  }
}

function u(e) {
  let [t] = e.split("?");
  return t
}