/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  h: () => i
});
var r = n(701488);

function i(e) {
  var t, n;
  return !!r.Pc.has(e.id) || ("embeddedActivityConfig" in e ? (null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0 : "embedded_activity_config" in e && (null === (n = e.embedded_activity_config) || void 0 === n ? void 0 : n.displays_advertisements) === !0)
}