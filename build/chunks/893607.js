/** Chunk was on web.js **/
/** chunk id: 893607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => c,
  Hw: () => p,
  Ss: () => u,
  cq: () => d
}), require("./35282.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk860911 = require("./860911.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let s = /^\d+$/,
  l = [Chunk981631.ME, Chunk981631.I_8, Chunk981631.o_z, Chunk981631.STv];

function c(e) {
  return l.includes(e)
}

function u(e) {
  return null != e && !!(c(e) || s.test(e))
}

function d(e) {
  return !!(null == e || s.test(e) || (0, a.AB)(e))
}

function f(e, t) {
  let {
    optional: n = false
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  return new i.Zn(":".concat((0, r.escapeRegExp)(e), "(").concat(t, ")").concat(n ? "?" : ""))
}
let p = {
  guildId() {
    let {
      name: e = "guildId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = l.map(Chunk392711.escapeRegExp).join("|");
    return f(module, "".concat(require, "|\\d+"), {
      optional: exports
    })
  },
  channelId() {
    let {
      name: e = "channelId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = [...Chunk176505.Vg].map(Chunk392711.escapeRegExp).join("|");
    return f(module, "".concat(require, "|\\d+"), {
      optional: exports
    })
  }
}