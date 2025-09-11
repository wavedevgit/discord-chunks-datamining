/** Chunk was on web.js **/
/** chunk id: 52459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk794137 = require("./794137.js"),
  Chunk628221 = require("./628221.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    autocompletes: t,
    mode: n,
    searchContext: d,
    setSearchQuery: f
  } = e;
  return i.useCallback(e => {
    let {
      performSearch: i,
      filterFn: _,
      icon: p,
      getAutocompleteLabel: h,
      trackSearchResult: m
    } = e, g = 0, E = [], b = [];
    for (let e of t) {
      let t = [],
        {
          group: y,
          results: O
        } = e;
      if (_(e)) {
        for (let e of O) {
          let {
            text: r,
            channel: s,
            group: d
          } = e, _ = r;
          if (null != s && (_ = (0, a.Jl)(_)), n.type === u.Sap.FILTER_ALL) {
            let e = null != d ? d : y,
              t = o.ZP[e];
            (null == t ? true : t.key) != null && (null == t ? true : t.key) !== "" && (_ = "".concat(t.key, " ").concat(_))
          }
          let g = t => {
              let {
                selectedIndex: n,
                searchAutocompleteSelectAction: r
              } = t;
              m({
                selectedIndex: n,
                searchAutocompleteSelectAction: r,
                selectedAutocomplete: e,
                selectedAutocompleteGroup: null != d ? d : y
              }), f({
                query: _,
                performSearch: i,
                replace: false
              })
            },
            {
              label: E,
              ariaLabel: b
            } = h(e),
            O = (0, c.fC)(l.i.ROW, {
              icon: p,
              label: E,
              ariaLabel: b,
              resultText: _,
              onSelect: g
            });
          t.push(O)
        }
        g += O.length;
        let e = (0, c.Nk)(y),
          _ = y === u.rtL.HISTORY ? (0, r.jsx)(s.do, {
            searchContext: d
          }) : null;
        E.push((0, c.fC)(l.i.GROUP, {
          rows: t,
          title: e,
          trailingIcon: _
        })), b.push(...t)
      }
    }
    return {
      autocompleteCount: g,
      autocompleteGroups: E,
      allAutocompleteRows: b
    }
  }, [t, n.type, d, f])
}