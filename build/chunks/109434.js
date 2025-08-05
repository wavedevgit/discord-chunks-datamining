/** Chunk was on 57932 **/
i.d(e, {
  H: () => C,
  v: () => S
}), i(388685);
var s = i(512722),
  a = i.n(s),
  n = i(97519),
  o = i(313361),
  r = i(697988),
  l = i(683860),
  d = i(731965),
  h = i(442837),
  u = i(592125),
  g = i(559241);

function c(t, e, i) {
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
      c(t, e, i[e])
    })
  }
  return t
}
let b = new Set,
  m = {
    layoutType: o.X.LIST,
    sortOrder: l.z.CREATION_DATE,
    tagFilter: b,
    scrollPosition: 0,
    tagSetting: r.z.MATCH_SOME
  };
class f {
  constructor(t, e) {
    c(this, "set", void 0), c(this, "get", void 0), c(this, "channelStates", void 0), c(this, "setChannelState", void 0), c(this, "getChannelState", void 0), c(this, "toggleTagFilter", void 0), c(this, "setTagFilter", void 0), c(this, "setSortOrder", void 0), c(this, "setLayoutType", void 0), c(this, "setTagSetting", void 0), c(this, "setScrollPosition", void 0), this.set = t, this.get = e, this.channelStates = {}, this.setChannelState = (t, e) => {
      let i = this.get(),
        s = this.getChannelState(t),
        a = p({}, i.channelStates);
      a[t] = p({}, s, e), (0, d.j)(() => this.set({
        channelStates: a
      }))
    }, this.getChannelState = t => {
      if (null == t) return m;
      let {
        channelStates: e
      } = this.get(), i = e[t];
      if (null == i) {
        let e = u.Z.getChannel(t);
        a()(null != e, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: e.getDefaultLayout(),
          sortOrder: e.getDefaultSortOrder(),
          tagFilter: b,
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
      }), g.Z.setFilterTagIds(e)
    }, this.setSortOrder = (t, e) => {
      this.setChannelState(t, {
        sortOrder: e
      }), g.Z.setSortOrder(e)
    }, this.setLayoutType = (t, e) => {
      this.setChannelState(t, {
        layoutType: e
      }), g.Z.setLayout(e)
    }, this.setTagSetting = (t, e) => {
      this.setChannelState(t, {
        tagSetting: e
      }), g.Z.setTagSetting(e)
    }, this.setScrollPosition = (t, e) => {
      this.setChannelState(t, {
        scrollPosition: e
      })
    }
  }
}
let v = (0, n.U)((t, e) => new f(t, e)),
  C = t => {
    let e = v();
    return null == (0, h.e7)([u.Z], () => u.Z.getChannel(t)) ? m : e.getChannelState(t)
  },
  S = () => v