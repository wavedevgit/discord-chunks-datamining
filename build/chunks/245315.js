/** Chunk was on 40694 **/
t.d(r, {
  BF: () => d,
  QA: () => s,
  cp: () => c
});
var n = t(367907),
  l = t(368859),
  o = t(626135),
  i = t(135899),
  a = t(981631),
  u = t(943702);

function c(e) {
  return (0, l.Z)(e) && e.messageReference.guild_id === i.M_ || null != e.author && e.author.id === i.c9
}

function s() {
  return u
}
let d = e => {
  o.default.track(a.rMx.USER_FLOW_TRANSITION, function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(r) {
        var n;
        n = t[r], r in e ? Object.defineProperty(e, r, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = n
      })
    }
    return e
  }({
    flow_type: i.tA,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, n.hH)(e.guildId)))
}