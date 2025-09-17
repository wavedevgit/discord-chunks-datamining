/** Chunk was on 11424 **/
/** chunk id: 11769, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  k: () => r
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function r(t) {
  if (t >= n.Z.Seconds.HOUR) {
    let e = Math.floor(t / n.Z.Seconds.HOUR),
      i = Math.floor((t - e * n.Z.Seconds.HOUR) / n.Z.Seconds.MINUTE),
      r = t - e * n.Z.Seconds.HOUR - i * n.Z.Seconds.MINUTE;
    return s.intl.formatToPlainString(s.t["3hz51N"], {
      hours: e,
      minutes: i,
      seconds: r
    })
  }
  if (!(t >= 60)) return s.intl.formatToPlainString(s.t.IWntYm, {
    seconds: t
  });
  {
    let e = Math.floor(t / 60);
    return s.intl.formatToPlainString(s.t.sY3wlJ, {
      minutes: e,
      seconds: t - 60 * e
    })
  }
}