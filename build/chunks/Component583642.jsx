/** Chunk was on web.js **/
/** chunk id: 583642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk356702 = require("./356702.js");
let u = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: o
    } = e, a = false, s = e => {
      e.stopPropagation(), e.preventDefault()
    };
    return i.useImperativeHandle(t, () => ({
      selectedIndex: a,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => false,
      handleSearchInChannel: () => false,
      shouldShowSearchInSelectedChannel: () => false
    })), (0, r.jsx)("div", {
      onMouseDown: s,
      role: "listbox",
      id: o,
      tabIndex: false,
      "aria-activedescendant": "".concat(o, "-").concat(a),
      className: c.container,
      children: (0, r.jsx)(l.c, {
        searchContext: n,
        navId: o,
        index: 0,
        selected: false
      })
    })
  }),
  d = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: l
    } = e, [c, d] = (0, o.Wu)([a.Z], () => {
      let e = a.Z.getState(n),
        t = (0, s.BU)(e.autocompletes);
      return [e, t]
    });
    return (0, r.jsx)(u, {
      ref: t,
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: l,
      resultsState: c,
      totalResults: d
    })
  })