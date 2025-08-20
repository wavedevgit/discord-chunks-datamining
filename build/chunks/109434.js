/** Chunk was on 46653 **/
/** chunk id: 109434, original params: t,e,i (module,exports,require) **/
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

function p(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}

function g(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), n.forEach(function(e) {
      p(t, e, i[e])
    })
  }
  return t
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
  constructor(t, e) {
    p(this, "set", true), p(this, "get", true), p(this, "channelStates", true), p(this, "setChannelState", true), p(this, "getChannelState", true), p(this, "toggleTagFilter", true), p(this, "setTagFilter", true), p(this, "setSortOrder", true), p(this, "setLayoutType", true), p(this, "setTagSetting", true), p(this, "setScrollPosition", true), this.set = t, this.get = e, this.channelStates = {}, this.setChannelState = (t, e) => {
      let i = this.get(),
        n = this.getChannelState(t),
        r = g({}, i.channelStates);
      r[t] = g({}, n, e), (0, d.j)(() => this.set({
        channelStates: r
      }))
    }, this.getChannelState = t => {
      if (null == t) return f;
      let {
        channelStates: e
      } = this.get(), i = e[t];
      if (null == i) {
        let e = u.Z.getChannel(t);
        r()(null != e, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: e.getDefaultLayout(),
          sortOrder: e.getDefaultSortOrder(),
          tagFilter: m,
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
      }), h.Z.setFilterTagIds(e)
    }, this.setSortOrder = (t, e) => {
      this.setChannelState(t, {
        sortOrder: e
      }), h.Z.setSortOrder(e)
    }, this.setLayoutType = (t, e) => {
      this.setChannelState(t, {
        layoutType: e
      }), h.Z.setLayout(e)
    }, this.setTagSetting = (t, e) => {
      this.setChannelState(t, {
        tagSetting: e
      }), h.Z.setTagSetting(e)
    }, this.setScrollPosition = (t, e) => {
      this.setChannelState(t, {
        scrollPosition: e
      })
    }
  }
}
let O = (0, Chunk879690.U)((t, e) => new v(t, e)),
  b = t => {
    let e = O();
    return null == (0, c.e7)([u.Z], () => u.Z.getChannel(t)) ? f : e.getChannelState(t)
  },
  y = () => O