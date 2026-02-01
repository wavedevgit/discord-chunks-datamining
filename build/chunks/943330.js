/** Chunk was on 12907 **/
/** chunk id: 943330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => l
});
var Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  if (e >= i.A.Seconds.HOUR) {
    let t = Math.floor(e / i.A.Seconds.HOUR),
      n = Math.floor((e - t * i.A.Seconds.HOUR) / i.A.Seconds.MINUTE),
      l = e - t * i.A.Seconds.HOUR - n * i.A.Seconds.MINUTE;
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