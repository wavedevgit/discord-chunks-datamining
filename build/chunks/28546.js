/** Chunk was on web.js **/
/** chunk id: 28546, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Iu: () => b,
  PG: () => _,
  RO: () => m,
  _Q: () => p,
  hr: () => g,
  j9: () => h,
  ql: () => E
});
var Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk296574 = require("./296574.js"),
  Chunk362383 = require("./362383.js"),
  Chunk731965 = require("./731965.js"),
  Chunk182501 = require("./182501.js"),
  Chunk957825 = require("./957825.js");
let d = Object.freeze({
    activeView: null,
    lastActiveView: null,
    activeViewType: null,
    searchQuery: "",
    isSearchSuggestion: false,
    pickerId: function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "uid_";
      return o()(module)
    }(),
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  }),
  f = (0, Chunk362383.F)()((0, Chunk296574.tJ)((e, t) => d, {
    name: "expression-picker-last-active-view",
    partialize: e => ({
      lastActiveView: e.lastActiveView
    })
  })),
  _ = (e, t) => {
    if (e === u.X1.GIF) {
      if (null != r) return;
      let {
        enabled: n,
        delayMs: i
      } = (0, c.Kr)("gif-picker");
      if (n) {
        r = setTimeout(() => {
          r = null, (0, l.j)(() => f.setState({
            activeView: e,
            activeViewType: t,
            lastActiveView: f.getState().activeView
          }))
        }, i);
        return
      }
    } else null != r && (clearTimeout(r), r = null);
    (0, l.j)(() => f.setState({
      activeView: e,
      activeViewType: t,
      lastActiveView: f.getState().activeView
    }))
  },
  p = e => {
    let t = f.getState();
    (true === e || e === t.activeViewType) && null !== t.activeView && (0, l.j)(() => f.setState({
      activeView: null,
      activeViewType: null,
      lastActiveView: t.activeView
    }))
  },
  h = e => {
    let t = f.getState();
    if (null == t.activeView) {
      var n;
      _(null != (n = t.lastActiveView) ? n : u.X1.EMOJI, e)
    } else p()
  },
  m = (e, t) => {
    f.getState().activeView === e ? p() : _(e, t)
  },
  g = e => {
    (0, l.j)(() => f.setState({
      activeView: e,
      lastActiveView: f.getState().activeView
    }))
  },
  E = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    (0, l.j)(() => f.setState({
      searchQuery: e,
      isSearchSuggestion: t
    }))
  },
  b = f