/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  p: () => a,
  y: () => o
});
var r = n(482833),
  i = n(981631);

function o(e, t) {
  let {
    enabled: n
  } = r.c.useExperiment({
    guildId: null != e ? e : i.lds,
    location: t
  });
  return n
}

function a(e, t) {
  let {
    enabled: n
  } = r.c.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: t
  });
  return n
}