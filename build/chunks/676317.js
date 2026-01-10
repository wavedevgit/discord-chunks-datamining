/** Chunk was on 96795 **/
/** chunk id: 676317, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Nb: () => S,
  oA: () => A,
  pr: () => a,
  ze: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let s = function(t) {
  let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.Z,
    e = i.getGuild(t);
  return null != e && n.can(E.Plq.MANAGE_GUILD, e)
};

function o(t) {
  return null != t && s(t)
}

function S(t) {
  return s(t)
}

function a(t) {
  return (0, e.e7)([l.Z, r.Z], () => s(t, l.Z, r.Z), [t])
}

function A(t) {
  return (0, e.e7)([l.Z], () => {
    let i = l.Z.getGuild(t);
    return (null == i ? true : i.features.has(E.GuildFeatures.COMMUNITY)) || false
  }, [t])
}