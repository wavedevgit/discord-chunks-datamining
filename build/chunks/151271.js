/** Chunk was on web.js **/
/** chunk id: 151271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RQ: () => g,
  Ri: () => m,
  U: () => h,
  bf: () => d,
  ed: () => p,
  r$: () => _,
  v8: () => f
});
var Chunk296489 = require("./296489.js"),
  i = require.n(Chunk296489),
  Chunk499867 = require("./499867.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk698279 = require("./698279.js");
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
  u = (0, Chunk265690.h)()((0, Chunk499867.Zr)((e, t) => c, {
    name: "expression-picker-last-active-view",
    partialize: e => ({
      lastActiveView: e.lastActiveView
    })
  })),
  d = (e, t, n) => {
    (0, o.r)(() => u.setState({
      activeView: e,
      activeViewType: t,
      activeChannelId: n,
      lastActiveView: u.getState().activeView
    }))
  },
  f = (e, t) => {
    let n = u.getState();
    true !== e && e !== n.activeViewType || true !== t && t !== n.activeChannelId || null !== n.activeView && (0, o.r)(() => u.setState({
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
      d(null != (r = n.lastActiveView) ? r : l.kx.EMOJI, e, t)
    } else f()
  },
  _ = (e, t, n) => {
    u.getState().activeView === e ? f() : d(e, t, n)
  },
  h = e => {
    (0, o.r)(() => u.setState({
      activeView: e,
      lastActiveView: u.getState().activeView
    }))
  },
  m = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    (0, o.r)(() => u.setState({
      searchQuery: e,
      isSearchSuggestion: t
    }))
  },
  g = u