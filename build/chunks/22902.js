/** Chunk was on 81498 **/
/** chunk id: 22902, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk817460 = require("./817460.js"),
  Chunk293810 = require("./293810.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  return i.useMemo(() => {
    var t;
    let n = s.DN.map(e => ({
        value: e,
        label: e.interval === l.rV.DAY && 7 === e.interval_count ? o.intl.formatToPlainString(o.t.XfSsr6, {
          defaultLimit: (0, r.iG)(e)
        }) : (0, r.iG)(e),
        isDefault: e.interval === l.rV.DAY && 7 === e.interval_count
      })),
      i = null != e ? null == (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? true : t.value : e;
    return {
      options: n,
      selectedOption: i
    }
  }, [e])
}