/** Chunk was on web.js **/
/** chunk id: 583642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk611004 = require("./611004.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935696 = require("./935696.js");
let I = l()("2015-05-15").local(),
  T = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: a,
      resultsState: o
    } = e, s = false, l = (0, p.KS)({
      isXDMSearch: n.type === y.aib.DMS,
      location: "SearchFiltersRedesignPopout"
    }), c = e => {
      e.stopPropagation(), e.preventDefault()
    };
    return i.useImperativeHandle(t, () => ({
      selectedIndex: s,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => false,
      handleSearchInChannel: () => false,
      shouldShowSearchInSelectedChannel: () => false
    })), (0, r.jsxs)("div", {
      onMouseDown: c,
      role: "listbox",
      id: a,
      tabIndex: false,
      "aria-activedescendant": "".concat(a, "-").concat(s),
      className: v.container,
      children: [(0, r.jsx)(h.c2, {
        searchContext: n,
        navId: a,
        index: 0,
        selected: false
      }), (0, r.jsx)(h.N_, {
        searchContext: n,
        navId: a,
        index: 1,
        selected: false,
        label: o.mode.type === y.Sap.EMPTY && l ? O.intl.string(O.t.diOL4u) : O.intl.string(O.t["M1tf+/"])
      })]
    })
  }),
  S = Chunk647438.forwardRef(function(e, t) {
    let {
      navId: n,
      resultsState: a,
      searchContext: s
    } = e, c = false, f = e => {
      e.stopPropagation(), e.preventDefault()
    }, p = e => {
      let t = (0, _.Tm)(s);
      (0, E.bh)({
        searchContext: s,
        searchQuery: g.Z.getSearchResultsQuery(t),
        searchQueryString: m.Z.getSearchInputText(s),
        searchTokenType: a.mode.filter,
        searchAutocompleteGroup: y.rtL.DATES,
        searchAutocompleteMode: a.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: b.ZW.CLICK
      });
      let {
        mode: n,
        cursorScope: r
      } = a, i = 0;
      null != n.token ? i = n.token.start : (null == r ? true : r.currentToken) != null && (i = r.currentToken.end);
      let o = null != n.token ? n.token.end : i;
      d.S.dispatch(y.CkL.SET_SEARCH_QUERY, {
        query: e.format(y.b2L) + " ",
        anchor: i,
        focus: o,
        performSearch: true,
        replace: false
      })
    };
    return i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => {},
      handleSearchInChannel: () => true,
      shouldShowSearchInSelectedChannel: () => false
    })), (0, r.jsx)("div", {
      onMouseDown: f,
      role: "listbox",
      id: n,
      tabIndex: false,
      "aria-activedescendant": "".concat(n, "-").concat(c),
      className: o()(v.container, v.datePickerContainer),
      children: (0, r.jsx)(u.hGg, {
        onSelect: p,
        maxDate: l()().local(),
        minDate: I
      })
    })
  }),
  A = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a
    } = e, [o, s] = (0, c.Wu)([f.Z], () => {
      let e = f.Z.getState(n),
        t = (0, _.BU)(e.autocompletes);
      return [e, t]
    });
    return (0, _.Fz)(o.mode.filter) ? (0, r.jsx)(S, {
      navId: i,
      resultsState: o,
      searchContext: n
    }) : (0, r.jsx)(T, {
      ref: t,
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a,
      resultsState: o,
      totalResults: s
    })
  })