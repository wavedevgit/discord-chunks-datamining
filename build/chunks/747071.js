/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r, i = n(695346),
  o = n(131951),
  a = n(36703);

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (() => {
    var e;
    return null !== (r = null === (e = i.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== r ? r : 100
  })();
  return Math.min(e * ((0, a.P)(t) / 100) * Math.min(o.Z.getOutputVolume() / 100, 1), 1)
}