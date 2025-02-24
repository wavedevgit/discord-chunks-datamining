/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  AW: () => o,
  Ju: () => a,
  pR: () => s
});
var r = n(695346),
  i = n(990266);

function o(e) {
  r.up.updateSetting(e)
}

function a() {
  let {
    disabled: e
  } = i.i.useExperiment({
    location: "ExpressionSuggestions"
  });
  return e
}

function s() {
  let e = r.up.useSetting();
  return !a() && e
}