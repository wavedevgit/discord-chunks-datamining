/** Chunk was on 58121 (396bfcc6a8f93a0e.js) **/
t.d(n, {
  Z: () => i
}), t(653041);
var l = t(192379),
  r = t(399606),
  a = t(45966);

function i(e) {
  let n = (0, r.Wu)([a.Z], () => a.Z.getEnabledOnboardingPrompts(e));
  return l.useMemo(() => {
    let e = 0,
      t = [],
      l = [],
      r = [],
      a = [];
    for (var i = 0; i < n.length; i++) {
      let o = n[i];
      o.isNew ? t.push(o) : o.hasNewAnswers ? (l.push(o), e += o.options.filter(e => e.isUnseen).length) : o.inOnboarding ? a.push(o) : r.push(o)
    }
    return {
      onboardingPromptsRaw: n,
      newOnboardingPrompts: t,
      onboardingPromptsWithNewAnswers: l,
      newAnswersCount: e,
      onboardingPrompts: r.concat(a)
    }
  }, [n])
}