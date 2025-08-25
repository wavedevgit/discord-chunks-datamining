/** Chunk was on web.js **/
/** chunk id: 511050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  l: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk710845 = require("./710845.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk751648 = require("./751648.js"),
  Chunk23547 = require("./23547.jsx"),
  Chunk822857 = require("./822857.js"),
  Chunk981631 = require("./981631.js"),
  Chunk46140 = require("./46140.js");
let _ = new Chunk710845.Z("VirtualCurrency"),
  p = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = (0, u.WX)({
      location: t
    }), o = (0, i.e7)([s.Z], () => {
      if (!n) return null;
      let e = s.Z.getQuest(f.V6);
      return null == e ? null : (0, a.LM)(e.config)
    }, [n]), p = (0, r.useCallback)(e => {
      let {
        forceOpen: t,
        delayMS: n = 500
      } = e;
      if (null == o && !t) return void _.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(f.V6));
      if (!(0, c.wH)()) {
        let e = () => (0, l.hF)({
          earnedOrbsQuantity: null != o ? o : 200,
          dedupeKey: t ? true : f.V6
        });
        if (true === n || 0 === n) return void e();
        setTimeout(() => {
          e()
        }, n)
      }
    }, [o]), h = (0, r.useCallback)(() => {
      (0, c.wH)() && (0, c.jj)()
    }, []);
    return n ? {
      rewardOrbQuantity: o,
      openIntroToOrbsClaimedCoachmark: p,
      closeIntroToOrbsClaimedCoachmark: h
    } : {
      rewardOrbQuantity: true,
      openIntroToOrbsClaimedCoachmark: d.dG4,
      closeIntroToOrbsClaimedCoachmark: d.dG4
    }
  },
  h = p