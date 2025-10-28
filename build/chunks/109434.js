/** Chunk was on 91053 **/
/** chunk id: 109434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => y,
  v: () => v
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk191336 = require("./191336.js"),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk559241 = require("./559241.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = new Set,
  m = {
    layoutType: Chunk313361.X.LIST,
    sortOrder: Chunk683860.z.CREATION_DATE,
    tagFilter: g,
    scrollPosition: 0,
    tagSetting: Chunk697988.z.MATCH_SOME
  };
class b {
  constructor(e, t) {
    h(this, "set", true), h(this, "get", true), h(this, "channelStates", true), h(this, "setChannelState", true), h(this, "getChannelState", true), h(this, "toggleTagFilter", true), h(this, "setTagFilter", true), h(this, "setSortOrder", true), h(this, "setLayoutType", true), h(this, "setTagSetting", true), h(this, "setScrollPosition", true), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let n = this.get(),
        r = this.getChannelState(e),
        i = f({}, n.channelStates);
      i[e] = f({}, r, t), (0, c.j)(() => this.set({
        channelStates: i
      }))
    }, this.getChannelState = e => {
      if (null == e) return m;
      let {
        channelStates: t
      } = this.get(), n = t[e];
      if (null == n) {
        let t = u.Z.getChannel(e);
        i()(null != t, "[Forum Channel Store] The channel should not be missing."), n = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: g,
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
      }), p.Z.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), p.Z.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), p.Z.setLayout(t)
    }, this.setTagSetting = (e, t) => {
      this.setChannelState(e, {
        tagSetting: t
      }), p.Z.setTagSetting(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let _ = (0, Chunk191336.U)((e, t) => new b(e, t)),
  y = e => {
    let t = _();
    return null == (0, d.e7)([u.Z], () => u.Z.getChannel(e)) ? m : t.getChannelState(e)
  },
  v = () => _