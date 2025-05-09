/** Chunk was on 98350 **/
n.d(t, {
  N5: () => a,
  c4: () => r,
  lc: () => u,
  mJ: () => l
});
var i = n(570140);

function r(e) {
  i.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
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

function u(e) {
  i.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}