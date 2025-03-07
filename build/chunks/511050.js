/** Chunk was on 20565 **/
r.d(t, {
  Z: () => p,
  l: () => b
});
var n = r(192379),
  a = r(442837),
  o = r(710845),
  c = r(569984),
  l = r(918701),
  i = r(751648),
  s = r(23547),
  u = r(822857),
  d = r(981631),
  f = r(642145);
let m = new o.Z("VirtualCurrency"),
  b = e => {
    let {
      location: t
    } = e, {
      enabled: r
    } = (0, u.W)({
      location: t
    }), o = (0, a.e7)([c.Z], () => {
      if (!r) return null;
      let e = c.Z.getQuest(f.V);
      return null == e ? null : (0, l.LM)(e.config)
    }, [r]), b = (0, n.useCallback)(e => {
      let {
        forceOpen: t,
        delayMS: r = 500
      } = e;
      if (null == o && !t) {
        m.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(f.V));
        return
      }
      if (!(0, s.wH)()) {
        let e = () => (0, i.hF)({
          earnedOrbsQuantity: null != o ? o : 200,
          dedupeKey: t ? void 0 : f.V
        });
        if (void 0 === r || 0 === r) {
          e();
          return
        }
        setTimeout(() => {
          e()
        }, r)
      }
    }, [o]), p = (0, n.useCallback)(() => {
      (0, s.wH)() && (0, s.jj)()
    }, []);
    return r ? {
      rewardOrbQuantity: o,
      openIntroToOrbsClaimedCoachmark: b,
      closeIntroToOrbsClaimedCoachmark: p
    } : {
      rewardOrbQuantity: void 0,
      openIntroToOrbsClaimedCoachmark: d.dG4,
      closeIntroToOrbsClaimedCoachmark: d.dG4
    }
  },
  p = b