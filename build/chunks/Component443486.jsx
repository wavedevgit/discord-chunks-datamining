/** Chunk was on web.js **/
/** chunk id: 443486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk822382 = require("./822382.js"),
  Chunk893162 = require("./893162.js"),
  Chunk771650 = require("./771650.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk272444 = require("./272444.jsx"),
  Chunk806595 = require("./806595.js"),
  Chunk949759 = require("./949759.js"),
  Chunk65600 = require("./65600.js"),
  Chunk145331 = require("./145331.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935606 = require("./935606.js");

function E(e) {
  let {
    setSearchQuery: t,
    searchContext: n,
    mode: E
  } = e, b = (0, o.R)(n);
  return i.useMemo(() => {
    let e = [{
      type: h.LWr.FILTER_FROM,
      isEligible: b.has(h.LWr.FILTER_FROM),
      icon: a.nys,
      label: m.intl.string(m.t.ktr6z5)
    }, {
      type: h.LWr.FILTER_IN,
      isEligible: b.has(h.LWr.FILTER_IN),
      icon: a.N$i,
      label: m.intl.string(m.t.VMjDvS)
    }, {
      type: h.LWr.FILTER_HAS,
      isEligible: b.has(h.LWr.FILTER_HAS),
      icon: a.PtA,
      label: m.intl.string(m.t.IhIpc7)
    }, {
      type: h.LWr.FILTER_MENTIONS,
      isEligible: b.has(h.LWr.FILTER_MENTIONS),
      icon: a.XxR,
      label: m.intl.string(m.t.fpKv9Y)
    }];
    return e.filter(e => e.isEligible).map(i => {
      let {
        icon: a,
        label: o,
        type: h
      } = i, m = r => {
        var i, a;
        let {
          selectedIndex: o,
          searchAutocompleteSelectAction: u
        } = r, d = null != (i = null == (a = l.Ay[h]) ? true : a.key) ? i : "", f = (0, s.bS)(n);
        (0, _.kc)({
          searchContext: n,
          searchQuery: p.A.getSearchResultsQuery(f),
          searchQueryString: c.A.getSearchInputText(n),
          searchTokenType: h,
          searchAutocompleteGroup: h,
          searchAutocompleteMode: E,
          searchAutocompleteResultIndex: o - 1,
          searchAutocompleteTotalResults: e.length,
          isSearchFilterPrefix: true,
          isSearchFilterAnswer: false,
          isSearchFilterComplete: false,
          isInFilterForSelectedChannel: false,
          searchAutocompleteSelectAction: u
        }), t({
          query: "".concat(d, " "),
          performSearch: false,
          replace: false
        })
      };
      return (0, f.wE)(d.$.ROW, {
        icon: (0, r.jsx)(a, {
          size: "sm",
          color: "currentColor",
          className: g.Fx
        }),
        label: (0, r.jsx)(u.bg, {
          label: o
        }),
        sublabel: (0, r.jsx)(u.bj, {
          searchTokenType: h
        }),
        onSelect: m
      })
    })
  }, [b, n, E, t])
}