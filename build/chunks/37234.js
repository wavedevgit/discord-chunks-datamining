/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Ou: () => a,
  jN: () => i,
  xf: () => o
});
var r = n(570140);

function i(e) {
  r.Z.dispatch({
    type: "LAYER_PUSH",
    component: e
  })
}

function o() {
  r.Z.dispatch({
    type: "LAYER_POP"
  })
}

function a() {
  r.Z.dispatch({
    type: "LAYER_POP_ALL"
  })
}