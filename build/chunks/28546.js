/** Chunk was on web.js **/
/** chunk id: 28546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iu: () => g,
  PG: () => d,
  RO: () => p,
  _Q: () => f,
  hr: () => h,
  j9: () => _,
  ql: () => m
});
var Chunk97613 = require("./97613.js"),
  i = require.n(Chunk97613),
  Chunk690775 = require("./690775.js"),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk957825 = require("./957825.js");
let c = Object.freeze({
    activeView: null,
    lastActiveView: null,
    activeViewType: null,
    searchQuery: "",
    isSearchSuggestion: false,
    pickerId: function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "uid_";
      return i()(module)
    }(),
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  }),
  u = (0, Chunk748521.F)()((0, Chunk690775.tJ)((e, t) => c, {
    name: "expression-picker-last-active-view",
    partialize: e => ({
      lastActiveView: e.lastActiveView
    })
  })),
  d = (e, t) => {
    (0, s.j)(() => u.setState({
      activeView: e,
      activeViewType: t,
      lastActiveView: u.getState().activeView
    }))
  },
  f = e => {
    let t = u.getState();
    (true === e || e === t.activeViewType) && null !== t.activeView && (0, s.j)(() => u.setState({
      activeView: null,
      activeViewType: null,
      lastActiveView: t.activeView
    }))
  },
  _ = e => {
    let t = u.getState();
    if (null == t.activeView) {
      var n;
      d(null != (n = t.lastActiveView) ? n : l.X1.EMOJI, e)
    } else f()
  },
  p = (e, t) => {
    u.getState().activeView === e ? f() : d(e, t)
  },
  h = e => {
    (0, s.j)(() => u.setState({
      activeView: e,
      lastActiveView: u.getState().activeView
    }))
  },
  m = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    (0, s.j)(() => u.setState({
      searchQuery: e,
      isSearchSuggestion: t
    }))
  },
  g = u