/** Chunk was on 85664 **/
i.d(e, {
  H: () => C,
  v: () => S
}), i(388685);
var s = i(512722),
  n = i.n(s),
  a = i(97519),
  o = i(313361),
  r = i(697988),
  l = i(683860),
  h = i(731965),
  d = i(442837),
  u = i(592125),
  c = i(559241);

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    layoutType: o.X.LIST,
    sortOrder: l.z.CREATION_DATE,
    tagFilter: f,
    scrollPosition: 0,
    tagSetting: r.z.MATCH_SOME
  };
class b {
  constructor(t, e) {
    g(this, "set", void 0), g(this, "get", void 0), g(this, "channelStates", void 0), g(this, "setChannelState", void 0), g(this, "getChannelState", void 0), g(this, "toggleTagFilter", void 0), g(this, "setTagFilter", void 0), g(this, "setSortOrder", void 0), g(this, "setLayoutType", void 0), g(this, "setTagSetting", void 0), g(this, "setScrollPosition", void 0), this.set = t, this.get = e, this.channelStates = {}, this.setChannelState = (t, e) => {
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
let v = (0, a.U)((t, e) => new b(t, e)),
  C = t => {
    let e = v();
    return null == (0, d.e7)([u.Z], () => u.Z.getChannel(t)) ? m : e.getChannelState(t)
  },
  S = () => v