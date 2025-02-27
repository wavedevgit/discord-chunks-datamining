/** Chunk was on 95786 **/
n.d(t, {
  Nb: () => s,
  oA: () => f,
  pr: () => c,
  ze: () => o
});
var r = n(442837),
  i = n(430824),
  l = n(496675),
  a = n(981631);
let u = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
    r = t.getGuild(e);
  return null != r && n.can(a.Plq.MANAGE_GUILD, r)
};

function o(e) {
  return null != e && u(e)
}

function s(e) {
  return u(e)
}

function c(e) {
  return (0, r.e7)([i.Z, l.Z], () => u(e, i.Z, l.Z), [e])
}

function f(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(a.oNc.COMMUNITY)) || !1
  }, [e])
}