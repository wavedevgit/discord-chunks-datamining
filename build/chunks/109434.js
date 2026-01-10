/** Chunk was on 87646 **/
/** chunk id: 109434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => x,
  v: () => O
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk663042 = require("./663042.js"),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk559241 = require("./559241.js");

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
let f = new Set,
  p = {
    layoutType: Chunk313361.X.LIST,
    sortOrder: Chunk683860.z.CREATION_DATE,
    tagFilter: f,
    scrollPosition: 0,
    tagSetting: Chunk697988.z.MATCH_SOME
  };
class v {
  constructor(e, t) {
    g(this, "set", true), g(this, "get", true), g(this, "channelStates", true), g(this, "setChannelState", true), g(this, "getChannelState", true), g(this, "toggleTagFilter", true), g(this, "setTagFilter", true), g(this, "setSortOrder", true), g(this, "setLayoutType", true), g(this, "setTagSetting", true), g(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let n = this.get(),
        i = this.getChannelState(e),
        s = m({}, n.channelStates);
      s[e] = m({}, i, t), (0, c.j)(() => this.set({
        channelStates: s
      }))
    }, this.getChannelState = e => {
      if (null == e) return p;
      let {
        channelStates: t
      } = this.get(), n = t[e];
      if (null == n) {
        let t = d.Z.getChannel(e);
        s()(null != t, "[Forum Channel Store] The channel should not be missing."), n = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: f,
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
      }), h.Z.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), h.Z.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), h.Z.setLayout(t)
    }, this.setTagSetting = (e, t) => {
      this.setChannelState(e, {
        tagSetting: t
      }), h.Z.setTagSetting(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let b = (0, Chunk663042.U)((e, t) => new v(e, t)),
  x = e => {
    let t = b();
    return null == (0, u.e7)([d.Z], () => d.Z.getChannel(e)) ? p : t.getChannelState(e)
  },
  O = () => b