/** Chunk was on 7602 **/
/** chunk id: 422844, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  R: () => A,
  p: () => b
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  n = require.n(Chunk284009),
  Chunk353640 = require("./353640.js"),
  Chunk371444 = require("./371444.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk679804 = require("./679804.js");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = s, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
      return Object.getOwnPropertyDescriptor(s, e).enumerable
    }))), i.forEach(function(t) {
      g(e, t, s[t])
    })
  }
  return e
}
let v = new Set,
  p = {
    layoutType: Chunk371444.C.LIST,
    sortOrder: Chunk602137.T.CREATION_DATE,
    tagFilter: v,
    scrollPosition: 0,
    tagSetting: Chunk392421.n.MATCH_SOME
  };
class f {
  constructor(e, t) {
    g(this, "set", true), g(this, "get", true), g(this, "channelStates", true), g(this, "setChannelState", true), g(this, "getChannelState", true), g(this, "toggleTagFilter", true), g(this, "setTagFilter", true), g(this, "setSortOrder", true), g(this, "setLayoutType", true), g(this, "setTagSetting", true), g(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let s = this.get(),
        i = this.getChannelState(e),
        n = m({}, s.channelStates);
      n[e] = m({}, i, t), (0, d.r)(() => this.set({
        channelStates: n
      }))
    }, this.getChannelState = e => {
      if (null == e) return p;
      let {
        channelStates: t
      } = this.get(), s = t[e];
      if (null == s) {
        let t = c.A.getChannel(e);
        n()(null != t, "[Forum Channel Store] The channel should not be missing."), s = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: v,
          scrollPosition: 0,
          tagSetting: t.getDefaultTagSetting()
        }
      }
      return s
    }, this.toggleTagFilter = (e, t) => {
      let s = new Set(this.getChannelState(e).tagFilter);
      s.has(t) ? s.delete(t) : s.add(t), this.setTagFilter(e, s)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), u.A.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), u.A.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), u.A.setLayout(t)
    }, this.setTagSetting = (e, t) => {
      this.setChannelState(e, {
        tagSetting: t
      }), u.A.setTagSetting(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let x = (0, Chunk353640.v)((e, t) => new f(e, t)),
  A = e => {
    let t = x();
    return null == (0, h.bG)([c.A], () => c.A.getChannel(e)) ? p : t.getChannelState(e)
  },
  b = () => x