/** Chunk was on 96174 **/
t.d(n, {
  N5: () => a,
  c4: () => r,
  lc: () => c,
  mJ: () => o
});
var i = t(570140);

function r(e) {
  i.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function o(e) {
  i.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function a(e) {
  i.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function c(e) {
  i.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}