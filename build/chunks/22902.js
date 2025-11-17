/** Chunk was on web.js **/
/** chunk id: 22902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk817460 = require("./817460.js"),
  Chunk293810 = require("./293810.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  return r.useMemo(() => {
    var t;
    let n = a.DN.map(e => ({
        value: e,
        label: e.interval === o.rV.DAY && 7 === e.interval_count ? s.intl.formatToPlainString(s.t.XfSsr1, {
          defaultLimit: (0, i.iG)(e)
        }) : (0, i.iG)(e),
        isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
      })),
      r = null != e ? null == (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? true : t.value : e;
    return {
      options: n,
      selectedOption: r
    }
  }, [e])
}