/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(695346),
  o = n(36703);

function a() {
  let [e, t] = r.useState(i.AY.getSetting());
  return {
    volume: e,
    onVolumeChange: r.useCallback(e => {
      let n = (0, o.A)(e);
      t(n), i.AY.updateSetting(n)
    }, [])
  }
}