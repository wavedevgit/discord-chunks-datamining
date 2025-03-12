/** Chunk was on 53494 **/
n.d(t, {
  M: () => o,
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

function o(e) {
  r.Z.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: !1
  })
}