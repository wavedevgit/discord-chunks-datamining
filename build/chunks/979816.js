/** Chunk was on 92869 **/
/** chunk id: 979816, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  XO: () => p,
  hX: () => o,
  iI: () => u,
  i_: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let l = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.A,
    s = t.getGuild(e);
  return null != s && n.can(i.xBc.MANAGE_GUILD, s)
};

function c(e) {
  return null != e && l(e)
}

function o(e) {
  return l(e)
}

function u(e) {
  return (0, s.bG)([r.A, a.A], () => l(e, r.A, a.A), [e])
}

function p(e) {
  return (0, s.bG)([r.A], () => {
    let t = r.A.getGuild(e);
    return (null == t ? true : t.features.has(i.GuildFeatures.COMMUNITY)) || false
  }, [e])
}