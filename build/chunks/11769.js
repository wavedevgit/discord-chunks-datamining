/** Chunk was on 95546 **/
/** chunk id: 11769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => o
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  if (e >= r.Z.Seconds.HOUR) {
    let t = Math.floor(e / r.Z.Seconds.HOUR),
      n = Math.floor((e - t * r.Z.Seconds.HOUR) / r.Z.Seconds.MINUTE),
      o = e - t * r.Z.Seconds.HOUR - n * r.Z.Seconds.MINUTE;
    return i.intl.formatToPlainString(i.t["3hz51N"], {
      hours: t,
      minutes: n,
      seconds: o
    })
  }
  if (!(e >= 60)) return i.intl.formatToPlainString(i.t.IWntYm, {
    seconds: e
  });
  {
    let t = Math.floor(e / 60);
    return i.intl.formatToPlainString(i.t.sY3wlJ, {
      minutes: t,
      seconds: e - 60 * t
    })
  }
}