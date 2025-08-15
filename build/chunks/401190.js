/** Chunk was on 30202 **/
/** chunk id: 401190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
let l = {
    [Chunk981631.gkr.HOUSE_1]: 1,
    [Chunk981631.gkr.HOUSE_2]: 2,
    [Chunk981631.gkr.HOUSE_3]: 3
  },
  o = {
    joinHypeSquadOnline: e => i.tn.post({
      url: a.ANM.HYPESQUAD_ONLINE,
      body: {
        house_id: l[e.houseID]
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => r.Z.dispatch({
      type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
      houseID: e.houseID
    })).catch(e => {
      throw new s.yZ(e)
    }),
    leaveHypeSquadOnline: () => Chunk544891.tn.del({
      url: Chunk981631.ANM.HYPESQUAD_ONLINE,
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => Chunk570140.Z.dispatch({
      type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS"
    })).catch(e => {
      throw new s.yZ(e)
    })
  }