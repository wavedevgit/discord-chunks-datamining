/** Chunk was on 40694 **/
n.d(r, {
  BF: () => d,
  QA: () => s,
  cp: () => c
});
var t = n(367907),
  l = n(368859),
  o = n(626135),
  i = n(135899),
  u = n(981631),
  a = n(943702);

function c(e) {
  return (0, l.Z)(e) && e.messageReference.guild_id === i.M_ || null != e.author && e.author.id === i.c9
}

function s() {
  return a
}
let d = e => {
  o.default.track(u.rMx.USER_FLOW_TRANSITION, function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {},
        t = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), t.forEach(function(r) {
        var t;
        t = n[r], r in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = t
      })
    }
    return e
  }({
    flow_type: i.tA,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, t.hH)(e.guildId)))
}