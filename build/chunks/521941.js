/** Chunk was on 58121 **/
/** chunk id: 521941, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk45966 = require("./45966.js");

function a(e) {
  let n = (0, l.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
  return r.useMemo(() => {
    let e = 0,
      t = [],
      r = [],
      l = [],
      i = [];
    for (var a = 0; a < n.length; a++) {
      let o = n[a];
      o.isNew ? t.push(o) : o.hasNewAnswers ? (r.push(o), e += o.options.filter(e => e.isUnseen).length) : o.inOnboarding ? i.push(o) : l.push(o)
    }
    return {
      onboardingPromptsRaw: n,
      newOnboardingPrompts: t,
      onboardingPromptsWithNewAnswers: r,
      newAnswersCount: e,
      onboardingPrompts: l.concat(i)
    }
  }, [n])
}