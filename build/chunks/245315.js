/** Chunk was on 95477 **/
r.d(t, {
  BF: () => p,
  QA: () => u,
  cp: () => s
});
var n = r(367907),
  i = r(368859),
  a = r(626135),
  o = r(135899),
  l = r(981631),
  c = r(943702);

function s(e) {
  return (0, i.Z)(e) && e.messageReference.guild_id === o.M_ || null != e.author && e.author.id === o.c9
}

function u() {
  return c
}
let p = e => {
  a.default.track(l.rMx.USER_FLOW_TRANSITION, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    flow_type: o.tA,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, n.hH)(e.guildId)))
}