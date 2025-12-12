/** Chunk was on 58121 **/
/** chunk id: 521941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk45966 = require("./45966.js");

function a(e) {
  let t = (0, l.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
  return r.useMemo(() => {
    let e = 0,
      n = [],
      r = [],
      l = [],
      i = [];
    for (var a = 0; a < t.length; a++) {
      let o = t[a];
      o.isNew ? n.push(o) : o.hasNewAnswers ? (r.push(o), e += o.options.filter(e => e.isUnseen).length) : o.inOnboarding ? i.push(o) : l.push(o)
    }
    return {
      onboardingPromptsRaw: t,
      newOnboardingPrompts: n,
      onboardingPromptsWithNewAnswers: r,
      newAnswersCount: e,
      onboardingPrompts: l.concat(i)
    }
  }, [t])
}