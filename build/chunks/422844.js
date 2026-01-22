/** Chunk was on 48898 **/
/** chunk id: 422844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => A,
  p: () => O
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk353640 = require("./353640.js"),
  Chunk371444 = require("./371444.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk679804 = require("./679804.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let p = new Set,
  f = {
    layoutType: Chunk371444.C.LIST,
    sortOrder: Chunk602137.T.CREATION_DATE,
    tagFilter: p,
    scrollPosition: 0,
    tagSetting: Chunk392421.n.MATCH_SOME
  };
class v {
  constructor(e, t) {
    g(this, "set", true), g(this, "get", true), g(this, "channelStates", true), g(this, "setChannelState", true), g(this, "getChannelState", true), g(this, "toggleTagFilter", true), g(this, "setTagFilter", true), g(this, "setSortOrder", true), g(this, "setLayoutType", true), g(this, "setTagSetting", true), g(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let n = this.get(),
        i = this.getChannelState(e),
        s = m({}, n.channelStates);
      s[e] = m({}, i, t), (0, c.r)(() => this.set({
        channelStates: s
      }))
    }, this.getChannelState = e => {
      if (null == e) return f;
      let {
        channelStates: t
      } = this.get(), n = t[e];
      if (null == n) {
        let t = u.A.getChannel(e);
        s()(null != t, "[Forum Channel Store] The channel should not be missing."), n = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: p,
          scrollPosition: 0,
          tagSetting: t.getDefaultTagSetting()
        }
      }
      return n
    }, this.toggleTagFilter = (e, t) => {
      let n = new Set(this.getChannelState(e).tagFilter);
      n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), h.A.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), h.A.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), h.A.setLayout(t)
    }, this.setTagSetting = (e, t) => {
      this.setChannelState(e, {
        tagSetting: t
      }), h.A.setTagSetting(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let b = (0, Chunk353640.v)((e, t) => new v(e, t)),
  A = e => {
    let t = b();
    return null == (0, d.bG)([u.A], () => u.A.getChannel(e)) ? f : t.getChannelState(e)
  },
  O = () => b