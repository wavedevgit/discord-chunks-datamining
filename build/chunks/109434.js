/** Chunk was on 46653 **/
/** chunk id: 109434, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  H: () => b,
  v: () => y
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk879690 = require("./879690.js"),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk559241 = require("./559241.js");

function p(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      p(e, t, i[t])
    })
  }
  return e
}
let m = new Set,
  f = {
    layoutType: Chunk313361.X.LIST,
    sortOrder: Chunk683860.z.CREATION_DATE,
    tagFilter: m,
    scrollPosition: 0,
    tagSetting: Chunk697988.z.MATCH_SOME
  };
class v {
  constructor(e, t) {
    p(this, "set", true), p(this, "get", true), p(this, "channelStates", true), p(this, "setChannelState", true), p(this, "getChannelState", true), p(this, "toggleTagFilter", true), p(this, "setTagFilter", true), p(this, "setSortOrder", true), p(this, "setLayoutType", true), p(this, "setTagSetting", true), p(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let i = this.get(),
        n = this.getChannelState(e),
        r = g({}, i.channelStates);
      r[e] = g({}, n, t), (0, d.j)(() => this.set({
        channelStates: r
      }))
    }, this.getChannelState = e => {
      if (null == e) return f;
      let {
        channelStates: t
      } = this.get(), i = t[e];
      if (null == i) {
        let t = u.Z.getChannel(e);
        r()(null != t, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: m,
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
let O = (0, Chunk879690.U)((e, t) => new v(e, t)),
  b = e => {
    let t = O();
    return null == (0, c.e7)([u.Z], () => u.Z.getChannel(e)) ? f : t.getChannelState(e)
  },
  y = () => O