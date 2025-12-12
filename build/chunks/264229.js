/** Chunk was on web.js **/
/** chunk id: 264229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fU: () => c,
  jX: () => u,
  mb: () => o,
  tV: () => l
}), require("./388685.js"), require("./35282.js");
var Chunk664751 = require("./664751.js"),
  Chunk898450 = require("./898450.js");
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
    return (0, i.d)(e[a])
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
    guildScheduledEventId: (0, i.d)(o[a])
  }
}

function u(e) {
  let [t] = e.split("?");
  return t
}