/** Chunk was on 93886 **/
/** chunk id: 676317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Nb: () => s,
  oA: () => f,
  pr: () => d,
  ze: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let l = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.Z,
    r = t.getGuild(e);
  return null != r && n.can(o.Plq.MANAGE_GUILD, r)
};

function c(e) {
  return null != e && l(e)
}

function s(e) {
  return l(e)
}

function d(e) {
  return (0, r.e7)([i.Z, a.Z], () => l(e, i.Z, a.Z), [e])
}

function f(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getGuild(e);
    return (null == t ? true : t.features.has(o.GuildFeatures.COMMUNITY)) || false
  }, [e])
}