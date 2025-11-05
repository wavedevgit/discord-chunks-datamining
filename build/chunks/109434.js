/** Chunk was on 48890 **/
/** chunk id: 109434, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  H: () => _,
  v: () => y
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk191336 = require("./191336.js"),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk559241 = require("./559241.js");

function g(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      g(e, t, i[t])
    })
  }
  return e
}
let b = new Set,
  f = {
    layoutType: Chunk313361.X.LIST,
    sortOrder: Chunk683860.z.CREATION_DATE,
    tagFilter: b,
    scrollPosition: 0,
    tagSetting: Chunk697988.z.MATCH_SOME
  };
class m {
  constructor(e, t) {
    g(this, "set", true), g(this, "get", true), g(this, "channelStates", true), g(this, "setChannelState", true), g(this, "getChannelState", true), g(this, "toggleTagFilter", true), g(this, "setTagFilter", true), g(this, "setSortOrder", true), g(this, "setLayoutType", true), g(this, "setTagSetting", true), g(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let i = this.get(),
        n = this.getChannelState(e),
        s = p({}, i.channelStates);
      s[e] = p({}, n, t), (0, d.j)(() => this.set({
        channelStates: s
      }))
    }, this.getChannelState = e => {
      if (null == e) return f;
      let {
        channelStates: t
      } = this.get(), i = t[e];
      if (null == i) {
        let t = c.Z.getChannel(e);
        s()(null != t, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: b,
          scrollPosition: 0,
          tagSetting: t.getDefaultTagSetting()
        }
      }
      return i
    }, this.toggleTagFilter = (e, t) => {
      let i = new Set(this.getChannelState(e).tagFilter);
      i.has(t) ? i.delete(t) : i.add(t), this.setTagFilter(e, i)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), u.Z.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), u.Z.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), u.Z.setLayout(t)
    }, this.setTagSetting = (e, t) => {
      this.setChannelState(e, {
        tagSetting: t
      }), u.Z.setTagSetting(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let v = (0, Chunk191336.U)((e, t) => new m(e, t)),
  _ = e => {
    let t = v();
    return null == (0, h.e7)([c.Z], () => c.Z.getChannel(e)) ? f : t.getChannelState(e)
  },
  y = () => v