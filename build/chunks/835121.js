/** Chunk was on web.js **/
/** chunk id: 835121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i(e) {
  let {
    autocompletes: t,
    mode: n
  } = e;
  return r.useCallback(e => {
    let {
      filterFn: r,
      getAutocompleteRowItem: i,
      getAutocompleteGroupItem: a
    } = e, s = 0, o = [], l = [];
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
        s += u.length;
        let e = a({
          group: c,
          rows: t
        });
        o.push(e), l.push(...t)
      }
    }
    return {
      autocompleteCount: s,
      autocompleteGroups: o,
      allAutocompleteRows: l
    }
  }, [t, n.type])
}