/** Chunk was on web.js **/
/** chunk id: 244912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk500345 = require("./500345.js"),
  Chunk2242 = require("./2242.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  return r.useMemo(() => {
    var t;
    let n = a.p$.map(e => ({
        value: e,
        label: e.interval === o.WT.DAY && 7 === e.interval_count ? s.intl.formatToPlainString(s.t.XfSsr1, {
          defaultLimit: (0, i.Gg)(e)
        }) : (0, i.Gg)(e),
        isDefault: e.interval === o.WT.DAY && 7 === e.interval_count
      })),
      r = null != e ? null == (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? true : t.value : e;
    return {
      options: n,
      selectedOption: r
    }
  }, [e])
}