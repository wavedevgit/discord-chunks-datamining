/** Chunk was on 147 **/
n.d(t, {
  Z: () => o
});
var r = n(544891),
  i = n(900849),
  a = n(981631);
let o = e => r.tn.get({
  url: a.ANM.STICKER_GUILD_DATA(e),
  oldFormErrors: !0,
  rejectWithError: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, i.PP)(e.body) : null).catch(() => null)