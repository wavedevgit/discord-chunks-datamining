/** Chunk was on 95546 **/
/** chunk id: 11769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => o
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  if (e >= i.Z.Seconds.HOUR) {
    let t = Math.floor(e / i.Z.Seconds.HOUR),
      n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
      o = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
    return r.intl.formatToPlainString(r.t["3hz51N"], {
      hours: t,
      minutes: n,
      seconds: o
    })
  }
  if (!(e >= 60)) return r.intl.formatToPlainString(r.t.IWntYm, {
    seconds: e
  });
  {
    let t = Math.floor(e / 60);
    return r.intl.formatToPlainString(r.t.sY3wlJ, {
      minutes: t,
      seconds: e - 60 * t
    })
  }
}