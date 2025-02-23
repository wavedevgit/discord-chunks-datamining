/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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