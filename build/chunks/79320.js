/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Vb: () => l,
  Yk: () => a,
  zP: () => s
});
var r = n(15729),
  i = n(731965);
let o = (0, r.U)(e => ({
  inDndMode: !1
}));

function a(e) {
  (0, i.j)(() => o.setState({
    inDndMode: e
  }))
}

function s() {
  return o(e => e.inDndMode)
}

function l() {
  return o.getState().inDndMode
}