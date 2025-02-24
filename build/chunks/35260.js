/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(147913),
  i = n(31996),
  o = n(728675),
  a = n(981631);

function s(e) {
  var t;
  if ((null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) !== a.Uvt.FORWARD) return;
  let n = e.message_reference.guild_id;
  null != n && (0, i.Q)(n)
}
class l extends r.Z {
  constructor() {
    super(), (0, o.Z)(this, s)
  }
}
let c = new l