/** Chunk was on 32098 (37916180435b2d51.js) **/
n.d(t, {
  M: () => l,
  s: () => i
});
var r = n(570140);

function i(e) {
  r.Z.dispatch({
    type: "VOICE_CATEGORY_EXPAND",
    guildId: e,
    expand: !0
  })
}

function l(e) {
  r.Z.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: !1
  })
}