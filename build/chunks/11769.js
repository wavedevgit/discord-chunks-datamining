/** Chunk was on 87646 **/
/** chunk id: 11769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => r
});
var Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function r(e) {
  if (e >= i.Z.Seconds.HOUR) {
    let t = Math.floor(e / i.Z.Seconds.HOUR),
      n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
      r = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
    return s.intl.formatToPlainString(s.t["3hz51F"], {
      hours: t,
      minutes: n,
      seconds: r
    })
  }
  if (!(e >= 60)) return s.intl.formatToPlainString(s.t.IWntYg, {
    seconds: e
  });
  {
    let t = Math.floor(e / 60);
    return s.intl.formatToPlainString(s.t.sY3wlG, {
      minutes: t,
      seconds: e - 60 * t
    })
  }
}