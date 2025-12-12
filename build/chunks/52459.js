/** Chunk was on web.js **/
/** chunk id: 52459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e) {
  let {
    autocompletes: t,
    mode: n
  } = e;
  return r.useCallback(e => {
    let {
      filterFn: r,
      getAutocompleteRowItem: i,
      getAutocompleteGroupItem: o
    } = e, a = 0, s = [], l = [];
    for (let e of t) {
      let t = [],
        {
          group: c,
          results: u
        } = e;
      if (r(e)) {
        for (let e of u) {
          let r = i({
            result: e,
            modeType: n.type,
            group: c
          });
          t.push(r)
        }
        a += u.length;
        let e = o({
          group: c,
          rows: t
        });
        s.push(e), l.push(...t)
      }
    }
    return {
      autocompleteCount: a,
      autocompleteGroups: s,
      allAutocompleteRows: l
    }
  }, [t, n.type])
}