/** Chunk was on 59541 **/
/** chunk id: 979816, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  XO: () => A,
  hX: () => o,
  iI: () => a,
  i_: () => S
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let l = function(t) {
  let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.A,
    e = i.getGuild(t);
  return null != e && n.can(s.xBc.MANAGE_GUILD, e)
};

function S(t) {
  return null != t && l(t)
}

function o(t) {
  return l(t)
}

function a(t) {
  return (0, e.bG)([r.A, E.A], () => l(t, r.A, E.A), [t])
}

function A(t) {
  return (0, e.bG)([r.A], () => {
    let i = r.A.getGuild(t);
    return (null == i ? true : i.features.has(s.GuildFeatures.COMMUNITY)) || false
  }, [t])
}