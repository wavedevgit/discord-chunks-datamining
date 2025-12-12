/** Chunk was on 58121 **/
/** chunk id: 521941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk45966 = require("./45966.js");

function i(e) {
  let t = (0, r.Wu)([l.Z], () => l.Z.getEnabledOnboardingPrompts(e));
  return a.useMemo(() => {
    let e = 0,
      n = [],
      a = [],
      r = [],
      l = [];
    for (var i = 0; i < t.length; i++) {
      let o = t[i];
      o.isNew ? n.push(o) : o.hasNewAnswers ? (a.push(o), e += o.options.filter(e => e.isUnseen).length) : o.inOnboarding ? l.push(o) : r.push(o)
    }
    return {
      onboardingPromptsRaw: t,
      newOnboardingPrompts: n,
      onboardingPromptsWithNewAnswers: a,
      newAnswersCount: e,
      onboardingPrompts: r.concat(l)
    }
  }, [t])
}