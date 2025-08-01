/** Chunk was on 40694 **/
t.d(n, {
  BF: () => d,
  QA: () => s,
  cp: () => c
});
var r = t(367907),
  l = t(368859),
  o = t(626135),
  i = t(135899),
  u = t(981631),
  a = t(943702);

function c(e) {
  return (0, l.Z)(e) && e.messageReference.guild_id === i.M_ || null != e.author && e.author.id === i.c9
}

function s() {
  return a
}
let d = e => {
  o.default.track(u.rMx.USER_FLOW_TRANSITION, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = r
      })
    }
    return e
  }({
    flow_type: i.tA,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, r.hH)(e.guildId)))
}