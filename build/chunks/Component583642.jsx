/** Chunk was on web.js **/
/** chunk id: 583642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356702 = require("./356702.js");
let _ = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: a,
      resultsState: o
    } = e, s = false, _ = (0, l.KS)({
      isXDMSearch: n.type === u.aib.DMS,
      location: "SearchFiltersRedesignPopout"
    }), p = e => {
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
      onMouseDown: p,
      role: "listbox",
      id: a,
      tabIndex: false,
      "aria-activedescendant": "".concat(a, "-").concat(s),
      className: f.container,
      children: [(0, r.jsx)(c.c2, {
        searchContext: n,
        navId: a,
        index: 0,
        selected: false
      }), (0, r.jsx)(c.N_, {
        searchContext: n,
        navId: a,
        index: 1,
        selected: false,
        label: o.mode.type === u.Sap.EMPTY && _ ? d.intl.string(d.t.diOL4u) : d.intl.string(d.t["M1tf+/"])
      })]
    })
  }),
  p = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: l
    } = e, [c, u] = (0, a.Wu)([o.Z], () => {
      let e = o.Z.getState(n),
        t = (0, s.BU)(e.autocompletes);
      return [e, t]
    });
    return (0, r.jsx)(_, {
      ref: t,
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: l,
      resultsState: c,
      totalResults: u
    })
  })