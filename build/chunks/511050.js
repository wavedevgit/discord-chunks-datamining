/** Chunk was on 66317 **/
/** chunk id: 511050, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  l: () => h
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk710845 = require("./710845.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk751648 = require("./751648.js"),
  Chunk23547 = require("./23547.jsx"),
  Chunk822857 = require("./822857.js"),
  Chunk981631 = require("./981631.js"),
  Chunk46140 = require("./46140.js");
let f = new Chunk710845.Z("VirtualCurrency"),
  h = e => {
    let {
      location: t
    } = e, {
      enabled: r
    } = (0, s.WX)({
      location: t
    }), l = (0, a.e7)([o.Z], () => {
      if (!r) return null;
      let e = o.Z.getQuest(b.V6);
      return null == e ? null : (0, i.LM)(e.config)
    }, [r]), h = (0, n.useCallback)(e => {
      let {
        forceOpen: t,
        delayMS: r = 500
      } = e;
      if (null == l && !t) return void f.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(b.V6));
      if (!(0, c.wH)()) {
        let e = () => (0, u.hF)({
          earnedOrbsQuantity: null != l ? l : 200,
          dedupeKey: t ? true : b.V6
        });
        if (true === r || 0 === r) return void e();
        setTimeout(() => {
          e()
        }, r)
      }
    }, [l]), O = (0, n.useCallback)(() => {
      (0, c.wH)() && (0, c.jj)()
    }, []);
    return r ? {
      rewardOrbQuantity: l,
      openIntroToOrbsClaimedCoachmark: h,
      closeIntroToOrbsClaimedCoachmark: O
    } : {
      rewardOrbQuantity: true,
      openIntroToOrbsClaimedCoachmark: d.dG4,
      closeIntroToOrbsClaimedCoachmark: d.dG4
    }
  },
  O = h