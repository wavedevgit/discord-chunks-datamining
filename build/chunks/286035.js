/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Pg: () => a,
  Te: () => i,
  kb: () => o
});
var r = n(570140);

function i() {
  r.Z.wait(() => r.Z.dispatch({
    type: "DOMAIN_MIGRATION_START"
  }))
}

function o() {
  r.Z.dispatch({
    type: "DOMAIN_MIGRATION_FAILURE"
  })
}

function a() {
  window.location.reload()
}