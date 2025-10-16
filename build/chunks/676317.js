/** Chunk was on 93886 **/
/** chunk id: 676317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Nb: () => c,
  oA: () => u,
  pr: () => d,
  ze: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let a = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Z,
    r = t.getGuild(e);
  return null != r && n.can(o.Plq.MANAGE_GUILD, r)
};

function s(e) {
  return null != e && a(e)
}

function c(e) {
  return a(e)
}

function d(e) {
  return (0, r.e7)([i.Z, l.Z], () => a(e, i.Z, l.Z), [e])
}

function u(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getGuild(e);
    return (null == t ? true : t.features.has(o.GuildFeatures.COMMUNITY)) || false
  }, [e])
}