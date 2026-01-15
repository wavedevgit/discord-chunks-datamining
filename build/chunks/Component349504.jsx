/** Chunk was on web.js **/
/** chunk id: 349504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk247902 = require("./247902.js"),
  Chunk532428 = require("./532428.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk166602 = require("./166602.jsx"),
  Chunk777018 = require("./777018.js"),
  Chunk447368 = require("./447368.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk983190 = require("./983190.js");

function b(e) {
  let {
    setSearchQuery: t,
    searchContext: n,
    mode: b
  } = e, y = (0, l.N)(n), O = (0, s.g_)({
    location: "usePopularAutocompleteFilters"
  }), v = i.useMemo(() => ({
    type: m.dCx.FILTER_MENTIONS,
    isEligible: y.has(m.dCx.FILTER_MENTIONS),
    icon: a.lOy,
    label: g.intl.string(g.t.fpKv9Y)
  }), [y]), S = i.useMemo(() => ({
    type: m.dCx.FILTER_HAS,
    isEligible: y.has(m.dCx.FILTER_HAS),
    icon: a.Ujz,
    label: g.intl.string(g.t.IhIpc7)
  }), [y]);
  return i.useMemo(() => {
    let e = [{
      type: m.dCx.FILTER_FROM,
      isEligible: y.has(m.dCx.FILTER_FROM),
      icon: a.tBG,
      label: g.intl.string(g.t.ktr6z5)
    }, {
      type: m.dCx.FILTER_IN,
      isEligible: y.has(m.dCx.FILTER_IN),
      icon: a.VL1,
      label: g.intl.string(g.t.VMjDvS)
    }, O ? S : v, O ? v : S];
    return e.filter(e => e.isEligible).map(i => {
      let {
        icon: a,
        label: s,
        type: l
      } = i, m = r => {
        var i, a;
        let {
          selectedIndex: s,
          searchAutocompleteSelectAction: d
        } = r, f = null != (a = null == (i = c.ZP[l]) ? true : i.key) ? a : "", p = (0, o.Tm)(n);
        (0, h.bh)({
          searchContext: n,
          searchQuery: _.Z.getSearchResultsQuery(p),
          searchQueryString: u.Z.getSearchInputText(n),
          searchTokenType: l,
          searchAutocompleteGroup: l,
          searchAutocompleteMode: b,
          searchAutocompleteResultIndex: s - 1,
          searchAutocompleteTotalResults: e.length,
          isSearchFilterPrefix: true,
          isSearchFilterAnswer: false,
          isSearchFilterComplete: false,
          isInFilterForSelectedChannel: false,
          searchAutocompleteSelectAction: d
        }), t({
          query: "".concat(f, " "),
          performSearch: false,
          replace: false
        })
      };
      return (0, p.fC)(f.i.ROW, {
        icon: (0, r.jsx)(a, {
          size: "sm",
          color: "currentColor",
          className: E.itemIcon
        }),
        label: (0, r.jsx)(d.Q0, {
          label: s
        }),
        sublabel: (0, r.jsx)(d.mW, {
          searchTokenType: l
        }),
        onSelect: m
      })
    })
  }, [y, n, b, t, S, v, O])
}