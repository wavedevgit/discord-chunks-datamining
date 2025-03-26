/** Chunk was on 52272 **/
n.d(t, {
  Y: () => s,
  t: () => l
});
var r = n(602715),
  i = n(630388),
  o = n(709054),
  a = n(981631);

function l(e) {
  var t;
  return (0, i.yE)(null !== (t = e.recipientFlags) && void 0 !== t ? t : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER)
}

function s(e) {
  return e.type === a.uaV.CHAT_WALLPAPER_SET && o.default.isProbablyAValidSnowflake(e.content) ? e.content : null
}