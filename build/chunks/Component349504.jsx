/** Chunk was on web.js **/
/** chunk id: 349504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607802 = require("./607802.js"),
  Chunk247902 = require("./247902.js"),
  Chunk532428 = require("./532428.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk774322 = require("./774322.jsx"),
  Chunk398944 = require("./398944.js"),
  Chunk142243 = require("./142243.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467611 = require("./467611.js");

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
      type: h.dCx.FILTER_HAS,
      isEligible: b.has(h.dCx.FILTER_HAS),
      icon: a.Ujz,
      label: m.intl.string(m.t.IhIpc7)
    }, {
      type: h.dCx.FILTER_MENTIONS,
      isEligible: b.has(h.dCx.FILTER_MENTIONS),
      icon: a.lOy,
      label: m.intl.string(m.t.fpKv9Y)
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
          searchAutocompleteSelectAction: u
        } = r, d = null != (a = null == (i = l.ZP[h]) ? true : i.key) ? a : "", f = (0, o.Tm)(n);
        (0, _.bh)({
          searchContext: n,
          searchQuery: p.Z.getSearchResultsQuery(f),
          searchQueryString: c.Z.getSearchInputText(n),
          searchTokenType: h,
          searchAutocompleteGroup: h,
          searchAutocompleteMode: E,
          searchAutocompleteResultIndex: s - 1,
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
      return (0, f.fC)(d.i.ROW, {
        icon: (0, r.jsx)(a, {
          size: "sm",
          color: "currentColor",
          className: g.itemIcon
        }),
        label: (0, r.jsx)(u.Q0, {
          label: s
        }),
        sublabel: (0, r.jsx)(u.mW, {
          searchTokenType: h
        }),
        onSelect: m
      })
    })
  }, [b, n, E, t])
}