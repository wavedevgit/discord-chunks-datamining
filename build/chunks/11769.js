/** Chunk was on 46653 **/
/** chunk id: 11769, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  k: () => s
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  if (e >= n.Z.Seconds.HOUR) {
    let t = Math.floor(e / n.Z.Seconds.HOUR),
      i = Math.floor((e - t * n.Z.Seconds.HOUR) / n.Z.Seconds.MINUTE),
      s = e - t * n.Z.Seconds.HOUR - i * n.Z.Seconds.MINUTE;
    return r.intl.formatToPlainString(r.t["3hz51N"], {
      hours: t,
      minutes: i,
      seconds: s
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