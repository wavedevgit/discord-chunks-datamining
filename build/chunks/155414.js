/** Chunk was on 89444 (61a9107cfbb37ce6.js) **/
n.d(t, {
  X: () => o
});
var i = n(544891),
  r = n(881052),
  l = n(981631);
let o = async (e, t) => {
  try {
    return (await i.tn.get({
      url: l.ANM.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      },
      rejectWithError: !1
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}