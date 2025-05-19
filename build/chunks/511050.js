/** Chunk was on 20565 **/
n.d(t, {
  Z: () => p,
  l: () => m
});
var r = n(73800),
  o = n(442837),
  a = n(710845),
  c = n(569984),
  s = n(918701),
  l = n(751648),
  i = n(23547),
  d = n(822857),
  u = n(981631),
  f = n(46140);
let b = new a.Z("VirtualCurrency"),
  m = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = (0, d.W)({
      location: t
    }), a = (0, o.e7)([c.Z], () => {
      if (!n) return null;
      let e = c.Z.getQuest(f.V6);
      return null == e ? null : (0, s.LM)(e.config)
    }, [n]), m = (0, r.useCallback)(e => {
      let {
        forceOpen: t,
        delayMS: n = 500
      } = e;
      if (null == a && !t) return void b.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(f.V6));
      if (!(0, i.wH)()) {
        let e = () => (0, l.hF)({
          earnedOrbsQuantity: null != a ? a : 200,
          dedupeKey: t ? void 0 : f.V6
        });
        if (void 0 === n || 0 === n) return void e();
        setTimeout(() => {
          e()
        }, n)
      }
    }, [a]), p = (0, r.useCallback)(() => {
      (0, i.wH)() && (0, i.jj)()
    }, []);
    return n ? {
      rewardOrbQuantity: a,
      openIntroToOrbsClaimedCoachmark: m,
      closeIntroToOrbsClaimedCoachmark: p
    } : {
      rewardOrbQuantity: void 0,
      openIntroToOrbsClaimedCoachmark: u.dG4,
      closeIntroToOrbsClaimedCoachmark: u.dG4
    }
  },
  p = m