/** Chunk was on web.js **/
/** chunk id: 349504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607802 = require("./607802.js"),
  Chunk247902 = require("./247902.js"),
  Chunk532428 = require("./532428.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk794137 = require("./794137.js"),
  Chunk628221 = require("./628221.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493090 = require("./493090.js");

function E(e) {
  let {
    setSearchQuery: t,
    searchContext: n,
    mode: E
  } = e, b = (0, s.N)(n);
  return i.useMemo(() => {
    let e = [{
      type: h.dCx.FILTER_FROM,
      isEligible: b.has(h.dCx.FILTER_FROM),
      icon: a.tBG,
      label: m.intl.string(m.t.ktr6z5)
    }, {
      type: h.dCx.FILTER_IN,
      isEligible: b.has(h.dCx.FILTER_IN),
      icon: a.VL1,
      label: m.intl.string(m.t.VMjDvS)
    }, {
      type: h.dCx.FILTER_MENTIONS,
      isEligible: b.has(h.dCx.FILTER_MENTIONS),
      icon: a.lOy,
      label: m.intl.string(m.t.fpKv9Y)
    }, {
      type: h.dCx.FILTER_HAS,
      isEligible: b.has(h.dCx.FILTER_HAS),
      icon: a.Ujz,
      label: m.intl.string(m.t.IhIpc7)
    }];
    return e.filter(e => e.isEligible).map(i => {
      let {
        icon: a,
        label: s,
        type: h
      } = i, m = r => {
        var i, a;
        let {
          selectedIndex: s,
          searchAutocompleteSelectAction: c
        } = r, u = null != (a = null == (i = l.ZP[h]) ? true : i.key) ? a : "", d = (0, o.Tm)(n);
        (0, p.bh)({
          searchContext: n,
          searchQuery: _.Z.getSearchResultsQuery(d),
          searchQueryString: f.Z.getSearchInputText(n),
          searchTokenType: h,
          searchAutocompleteGroup: h,
          searchAutocompleteMode: E,
          searchAutocompleteResultIndex: s - 1,
          searchAutocompleteTotalResults: e.length,
          isSearchFilterPrefix: true,
          isSearchFilterAnswer: false,
          isSearchFilterComplete: false,
          isInFilterForSelectedChannel: false,
          searchAutocompleteSelectAction: c
        }), t({
          query: "".concat(u, " "),
          performSearch: false,
          replace: false
        })
      };
      return (0, d.fC)(u.i.ROW, {
        icon: (0, r.jsx)(a, {
          size: "sm",
          color: "currentColor",
          className: g.itemIcon
        }),
        label: (0, r.jsx)(c.Q0, {
          label: s
        }),
        sublabel: (0, r.jsx)(c.mW, {
          searchTokenType: h
        }),
        onSelect: m
      })
    })
  }, [b, n, E, t])
}