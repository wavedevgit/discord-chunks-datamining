/** Chunk was on 63141 **/
n.d(t, {
  Z: () => b
});
var i = n(192379),
  r = n(149765),
  o = n(442837),
  l = n(367907),
  a = n(731429),
  s = n(188471),
  d = n(318885),
  c = n(592125),
  u = n(984933),
  p = n(271383),
  h = n(430824),
  f = n(496675),
  v = n(944486),
  m = n(914010),
  E = n(594174),
  y = n(237997),
  O = n(145597),
  _ = n(981631);

function g(e) {
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
class Z extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: r,
      postableChannelCount: o
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending)) {
      var u, p;
      (0, d.Q)(_.rMx.GUILD_VIEWED, (u = g({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), p = p = {
        postable_channels: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(p)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(p, e))
      }), u)), (0, s.a)(_.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, a.K)(c.Z.getChannel(n), !0);
      (0, d.Q)(_.rMx.CHANNEL_OPENED, g({}, e, (0, l.$H)(n))), (0, s.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let b = o.ZP.connectStores([m.Z, v.Z, h.Z, E.default, y.default, u.ZP, f.Z, p.ZP], () => {
  var e, t, n;
  let i = m.Z.getGuildId(),
    o = v.Z.getChannelId(i),
    l = h.Z.getGuild(i),
    a = E.default.getCurrentUser(),
    s = null !== (t = u.ZP.getChannels(null == l ? void 0 : l.id)[u.sH]) && void 0 !== t ? t : [],
    d = s.length > 0 ? s.filter(e => {
      let {
        channel: t
      } = e;
      return f.Z.can(r.$e(_.Plq.SEND_MESSAGES, _.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    c = null != a && null != i && null !== (n = null === (e = p.ZP.getMember(i, a.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: o,
    locked: y.default.isLocked((0, O.getPID)()),
    hasPreviewEnabled: null == l ? void 0 : l.features.has(_.oNc.PREVIEW_ENABLED),
    isMemberPending: c,
    postableChannelCount: d
  }
})(Z)