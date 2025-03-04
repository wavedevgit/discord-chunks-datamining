/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  getOrParseBioAST: () => g,
  parseBioReact: () => h,
  parseBioReactWithCachedAST: () => E,
  parseBioReactWithoutScrolling: () => b
}), n(566702);
var r = n(392711),
  i = n.n(r),
  o = n(31775),
  a = n.n(o),
  s = n(477660),
  l = n.n(s),
  c = n(25209),
  u = n(691424),
  d = n(428595);
n(454585);
var f = n(364458);
let _ = (0, f.Z)([d.Z.PROFILE_BIO_RULES, (0, u.Z)({
    enableBuildOverrides: !1
  })]),
  p = new(a())({
    max: 2e3
  }),
  h = c.w4(_),
  m = void 0;

function g(e) {
  let t = p.get(e);
  return null != t || (t = m(e, !0), p.set(e, t)), t
}

function E(e) {
  if (0 === e.trim().length) return null;
  let t = g(e);
  return l().reactFor(l().ruleOutput(_, "react"))(t)
}
let v = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
  b = c.w4((0, f.Z)([i().omit(_, v), {
    emoji: {
      react: () => null
    }
  }]))