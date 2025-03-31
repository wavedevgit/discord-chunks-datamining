/** Chunk was on 20565 **/
n.d(t, {
  Z: () => y,
  l: () => b
});
var r = n(192379),
  a = n(442837),
  o = n(710845),
  c = n(569984),
  l = n(918701),
  i = n(751648),
  s = n(23547),
  u = n(822857),
  d = n(981631),
  f = n(46140);
let m = new o.Z("VirtualCurrency"),
  b = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = (0, u.W)({
      location: t
    }), o = (0, a.e7)([c.Z], () => {
      if (!n) return null;
      let e = c.Z.getQuest(f.V6);
      return null == e ? null : (0, l.LM)(e.config)
    }, [n]), b = (0, r.useCallback)(e => {
      let {
        forceOpen: t,
        delayMS: n = 500
      } = e;
      if (null == o && !t) {
        m.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(f.V6));
        return
      }
      if (!(0, s.wH)()) {
        let e = () => (0, i.hF)({
          earnedOrbsQuantity: null != o ? o : 200,
          dedupeKey: t ? void 0 : f.V6
        });
        if (void 0 === n || 0 === n) {
          e();
          return
        }
        setTimeout(() => {
          e()
        }, n)
      }
    }, [o]), y = (0, r.useCallback)(() => {
      (0, s.wH)() && (0, s.jj)()
    }, []);
    return n ? {
      rewardOrbQuantity: o,
      openIntroToOrbsClaimedCoachmark: b,
      closeIntroToOrbsClaimedCoachmark: y
    } : {
      rewardOrbQuantity: void 0,
      openIntroToOrbsClaimedCoachmark: d.dG4,
      closeIntroToOrbsClaimedCoachmark: d.dG4
    }
  },
  y = b