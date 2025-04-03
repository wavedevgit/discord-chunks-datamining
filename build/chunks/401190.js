/** Chunk was on 10451 **/
n.d(t, {
  Z: () => l
});
var r = n(544891),
  i = n(570140),
  s = n(881052),
  a = n(981631);
let o = {
    [a.gkr.HOUSE_1]: 1,
    [a.gkr.HOUSE_2]: 2,
    [a.gkr.HOUSE_3]: 3
  },
  l = {
    joinHypeSquadOnline: e => r.tn.post({
      url: a.ANM.HYPESQUAD_ONLINE,
      body: {
        house_id: o[e.houseID]
      },
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(() => i.Z.dispatch({
      type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
      houseID: e.houseID
    })).catch(e => {
      throw new s.yZ(e)
    }),
    leaveHypeSquadOnline: () => r.tn.del({
      url: a.ANM.HYPESQUAD_ONLINE,
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(() => i.Z.dispatch({
      type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS"
    })).catch(e => {
      throw new s.yZ(e)
    })
  }