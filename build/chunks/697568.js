/** Chunk was on 11814 (3b351e4cb7c7b881.js) **/
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