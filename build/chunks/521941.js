/** Chunk was on 58121 **/
/** chunk id: 521941, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk45966 = require("./45966.js");

function i(e) {
  let n = (0, r.Wu)([l.Z], () => l.Z.getEnabledOnboardingPrompts(e));
  return a.useMemo(() => {
    let e = 0,
      t = [],
      a = [],
      r = [],
      l = [];
    for (var i = 0; i < n.length; i++) {
      let c = n[i];
      c.isNew ? t.push(c) : c.hasNewAnswers ? (a.push(c), e += c.options.filter(e => e.isUnseen).length) : c.inOnboarding ? l.push(c) : r.push(c)
    }
    return {
      onboardingPromptsRaw: n,
      newOnboardingPrompts: t,
      onboardingPromptsWithNewAnswers: a,
      newAnswersCount: e,
      onboardingPrompts: r.concat(l)
    }
  }, [n])
}