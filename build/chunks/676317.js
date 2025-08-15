/** Chunk was on 93886 **/
/** chunk id: 676317, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Nb: () => c,
  oA: () => u,
  pr: () => d,
  ze: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let s = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Z,
    a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Z,
    n = t.getGuild(e);
  return null != n && a.can(i.Plq.MANAGE_GUILD, n)
};

function o(e) {
  return null != e && s(e)
}

function c(e) {
  return s(e)
}

function d(e) {
  return (0, n.e7)([r.Z, l.Z], () => s(e, r.Z, l.Z), [e])
}

function u(e) {
  return (0, n.e7)([r.Z], () => {
    let t = r.Z.getGuild(e);
    return (null == t ? true : t.features.has(i.oNc.COMMUNITY)) || false
  }, [e])
}