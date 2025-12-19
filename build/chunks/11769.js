/** Chunk was on 95546 **/
/** chunk id: 11769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => l
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  if (e >= i.Z.Seconds.HOUR) {
    let t = Math.floor(e / i.Z.Seconds.HOUR),
      n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
      l = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
    return r.intl.formatToPlainString(r.t["3hz51F"], {
      hours: t,
      minutes: n,
      seconds: l
    })
  }
  if (!(e >= 60)) return r.intl.formatToPlainString(r.t.IWntYg, {
    seconds: e
  });
  {
    let t = Math.floor(e / 60);
    return r.intl.formatToPlainString(r.t.sY3wlG, {
      minutes: t,
      seconds: e - 60 * t
    })
  }
}