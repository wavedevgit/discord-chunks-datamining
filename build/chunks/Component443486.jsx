/** Chunk was on 52199 **/
/** chunk id: 443486, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(e) {
  let {
    setSearchQuery: t,
    searchContext: r,
    mode: y
  } = e, _ = (0, i.R)(r);
  return l.useMemo(() => {
    let e = [{
      type: g.LWr.FILTER_FROM,
      isEligible: _.has(g.LWr.FILTER_FROM),
      icon: s.nys,
      label: S.intl.string(S.t.ktr6z5)
    }, {
      type: g.LWr.FILTER_IN,
      isEligible: _.has(g.LWr.FILTER_IN),
      icon: s.N$i,
      label: S.intl.string(S.t.VMjDvS)
    }, {
      type: g.LWr.FILTER_HAS,
      isEligible: _.has(g.LWr.FILTER_HAS),
      icon: s.PtA,
      label: S.intl.string(S.t.IhIpc7)
    }, {
      type: g.LWr.FILTER_MENTIONS,
      isEligible: _.has(g.LWr.FILTER_MENTIONS),
      icon: s.XxR,
      label: S.intl.string(S.t.fpKv9Y)
    }];
    return e.filter(e => e.isEligible).map(l => {
      let {
        icon: s,
        label: i,
        type: g
      } = l;
      return (0, h.wE)(d.$.ROW, {
        icon: (0, n.jsx)(s, {
          size: "sm",
          color: "currentColor",
          className: E.Fx
        }),
        label: (0, n.jsx)(u.bg, {
          label: i
        }),
        sublabel: (0, n.jsx)(u.bj, {
          searchTokenType: g
        }),
        onSelect: n => {
          var l, s;
          let {
            selectedIndex: i,
            searchAutocompleteSelectAction: u
          } = n, d = null != (l = null == (s = o.Ay[g]) ? true : s.key) ? l : "", h = (0, a.bS)(r);
          (0, f.kc)({
            searchContext: r,
            searchQuery: p.A.getSearchResultsQuery(h),
            searchQueryString: c.A.getSearchInputText(r),
            searchTokenType: g,
            searchAutocompleteGroup: g,
            searchAutocompleteMode: y,
            searchAutocompleteResultIndex: i - 1,
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
        }
      })
    })
  }, [_, r, y, t])
}