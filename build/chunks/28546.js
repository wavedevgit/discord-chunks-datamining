/** Chunk was on web.js **/
/** chunk id: 28546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iu: () => g,
  PG: () => d,
  RO: () => _,
  _Q: () => f,
  hr: () => m,
  j9: () => p,
  ql: () => h
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
    activeChannelId: null,
    searchQuery: "",
    isSearchSuggestion: false,
    pickerId: function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "uid_";
      return i()(e)
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
  d = (e, t, n) => {
    (0, s.j)(() => u.setState({
      activeView: e,
      activeViewType: t,
      activeChannelId: n,
      lastActiveView: u.getState().activeView
    }))
  },
  f = (e, t) => {
    let n = u.getState();
    (true === e || e === n.activeViewType) && (true === t || t === n.activeChannelId) && null !== n.activeView && (0, s.j)(() => u.setState({
      activeView: null,
      activeViewType: null,
      activeChannelId: null,
      lastActiveView: n.activeView
    }))
  },
  p = (e, t) => {
    let n = u.getState();
    if (null == n.activeView) {
      var r;
      d(null != (r = n.lastActiveView) ? r : l.X1.EMOJI, e, t)
    } else f()
  },
  _ = (e, t, n) => {
    u.getState().activeView === e ? f() : d(e, t, n)
  },
  m = e => {
    (0, s.j)(() => u.setState({
      activeView: e,
      lastActiveView: u.getState().activeView
    }))
  },
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    (0, s.j)(() => u.setState({
      searchQuery: e,
      isSearchSuggestion: t
    }))
  },
  g = u