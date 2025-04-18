/** Chunk was on 98587 **/
n.d(t, {
  N5: () => a,
  c4: () => o,
  lc: () => c,
  mJ: () => i
});
var r = n(570140);

function o(e) {
  r.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function i(e) {
  r.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function c(e) {
  r.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}