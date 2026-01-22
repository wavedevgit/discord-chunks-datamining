/** Chunk was on 72165 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk591552 = require("./591552.js");

function a(e) {
  let t = (0, r.yK)([i.A], () => i.A.getEnabledOnboardingPrompts(e));
  return l.useMemo(() => {
    let e = 0,
      n = [],
      l = [],
      r = [],
      i = [];
    for (var a = 0; a < t.length; a++) {
      let s = t[a];
      s.isNew ? n.push(s) : s.hasNewAnswers ? (l.push(s), e += s.options.filter(e => e.isUnseen).length) : s.inOnboarding ? i.push(s) : r.push(s)
    }
    return {
      onboardingPromptsRaw: t,
      newOnboardingPrompts: n,
      onboardingPromptsWithNewAnswers: l,
      newAnswersCount: e,
      onboardingPrompts: r.concat(i)
    }
  }, [t])
}