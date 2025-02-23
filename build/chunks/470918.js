/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  V: () => a
});
var r = n(544891),
  i = n(570140),
  o = n(981631);
async function a() {
  i.Z.dispatch({
    type: "USER_TENURE_REWARD_SYNC_START"
  });
  try {
    let e = await r.tn.post({
      url: o.ANM.TENURE_REWARD_SYNC,
      rejectWithError: !0
    });
    i.Z.dispatch({
      type: "USER_TENURE_REWARD_SYNC_SUCCESS",
      userTenureRewardStatus: e.body.tenure_reward_status
    })
  } catch (e) {
    i.Z.dispatch({
      type: "USER_TENURE_REWARD_SYNC_SUCCESS"
    })
  }
}