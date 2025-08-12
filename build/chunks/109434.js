/** Chunk was on 77410 **/
/** chunk id: 109434, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  H: () => C,
  v: () => S
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  n = require.n(Chunk512722),
  Chunk97519 = require("./97519.js"),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk559241 = require("./559241.js");

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}

function p(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      s = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), s.forEach(function(e) {
      g(t, e, i[e])
    })
  }
  return t
}
let f = new Set,
  m = {
    layoutType: Chunk313361.X.LIST,
    sortOrder: Chunk683860.z.CREATION_DATE,
    tagFilter: f,
    scrollPosition: 0,
    tagSetting: Chunk697988.z.MATCH_SOME
  };
class b {
  constructor(t, e) {
    g(this, "set", true), g(this, "get", true), g(this, "channelStates", true), g(this, "setChannelState", true), g(this, "getChannelState", true), g(this, "toggleTagFilter", true), g(this, "setTagFilter", true), g(this, "setSortOrder", true), g(this, "setLayoutType", true), g(this, "setTagSetting", true), g(this, "setScrollPosition", true), this.set = t, this.get = e, this.channelStates = {}, this.setChannelState = (t, e) => {
      let i = this.get(),
        s = this.getChannelState(t),
        n = p({}, i.channelStates);
      n[t] = p({}, s, e), (0, h.j)(() => this.set({
        channelStates: n
      }))
    }, this.getChannelState = t => {
      if (null == t) return m;
      let {
        channelStates: e
      } = this.get(), i = e[t];
      if (null == i) {
        let e = u.Z.getChannel(t);
        n()(null != e, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: e.getDefaultLayout(),
          sortOrder: e.getDefaultSortOrder(),
          tagFilter: f,
          scrollPosition: 0,
          tagSetting: e.getDefaultTagSetting()
        }
      }
      return i
    }, this.toggleTagFilter = (t, e) => {
      let i = new Set(this.getChannelState(t).tagFilter);
      i.has(e) ? i.delete(e) : i.add(e), this.setTagFilter(t, i)
    }, this.setTagFilter = (t, e) => {
      this.setChannelState(t, {
        tagFilter: e
      }), c.Z.setFilterTagIds(e)
    }, this.setSortOrder = (t, e) => {
      this.setChannelState(t, {
        sortOrder: e
      }), c.Z.setSortOrder(e)
    }, this.setLayoutType = (t, e) => {
      this.setChannelState(t, {
        layoutType: e
      }), c.Z.setLayout(e)
    }, this.setTagSetting = (t, e) => {
      this.setChannelState(t, {
        tagSetting: e
      }), c.Z.setTagSetting(e)
    }, this.setScrollPosition = (t, e) => {
      this.setChannelState(t, {
        scrollPosition: e
      })
    }
  }
}
let v = (0, Chunk97519.U)((t, e) => new b(t, e)),
  C = t => {
    let e = v();
    return null == (0, d.e7)([u.Z], () => u.Z.getChannel(t)) ? m : e.getChannelState(t)
  },
  S = () => v