/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  MT: () => o,
  TG: () => s,
  wB: () => a
});
var r = n(149765),
  i = n(981631);

function o(e) {
  return r.e$(e.permissions, i.Plq.VIEW_CHANNEL)
}

function a(e, t) {
  return null != t && (!!r.e$(t.deny, i.Plq.VIEW_CHANNEL) || e.isGuildVocal() && r.e$(t.deny, i.Plq.CONNECT))
}

function s(e, t) {
  return !(null == t || a(e, t)) && !!r.e$(t.allow, i.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, i.Plq.CONNECT))
}