/** Chunk was on 63141 **/
n.d(t, {
  Z: () => O
});
var i = n(192379),
  r = n(149765),
  a = n(442837),
  o = n(367907),
  s = n(731429),
  l = n(188471),
  c = n(318885),
  d = n(592125),
  _ = n(984933),
  u = n(271383),
  f = n(430824),
  p = n(496675),
  h = n(944486),
  m = n(914010),
  v = n(594174),
  g = n(237997),
  y = n(145597),
  b = n(981631);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}
class C extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: r,
      postableChannelCount: a
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending)) {
      var _, u;
      (0, c.Q)(b.rMx.GUILD_VIEWED, (_ = E({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), u = u = {
        postable_channels: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(u, e))
      }), _)), (0, l.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, s.K)(d.Z.getChannel(n), !0);
      (0, c.Q)(b.rMx.CHANNEL_OPENED, E({}, e, (0, o.$H)(n))), (0, l.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let O = a.ZP.connectStores([m.Z, h.Z, f.Z, v.default, g.default, _.ZP, p.Z, u.ZP], () => {
  var e, t, n;
  let i = m.Z.getGuildId(),
    a = h.Z.getChannelId(i),
    o = f.Z.getGuild(i),
    s = v.default.getCurrentUser(),
    l = null !== (t = _.ZP.getChannels(null == o ? void 0 : o.id)[_.sH]) && void 0 !== t ? t : [],
    c = l.length > 0 ? l.filter(e => {
      let {
        channel: t
      } = e;
      return p.Z.can(r.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != s && null != i && null !== (n = null === (e = u.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: a,
    locked: g.default.isLocked((0, y.getPID)()),
    hasPreviewEnabled: null == o ? void 0 : o.features.has(b.oNc.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(C)