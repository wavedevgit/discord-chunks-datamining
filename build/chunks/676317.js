/** Chunk was on 93886 **/
/** chunk id: 676317, original params: e,n,t (module,exports,require) **/
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
let o = function(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z,
    t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Z,
    r = n.getGuild(e);
  return null != r && t.can(a.Plq.MANAGE_GUILD, r)
};

function s(e) {
  return null != e && o(e)
}

function c(e) {
  return o(e)
}

function d(e) {
  return (0, r.e7)([i.Z, l.Z], () => o(e, i.Z, l.Z), [e])
}

function u(e) {
  return (0, r.e7)([i.Z], () => {
    let n = i.Z.getGuild(e);
    return (null == n ? true : n.features.has(a.oNc.COMMUNITY)) || false
  }, [e])
}