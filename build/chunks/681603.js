/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => b
});
var i = n(192379),
  r = n(149765),
  o = n(442837),
  l = n(367907),
  s = n(731429),
  a = n(188471),
  c = n(318885),
  d = n(592125),
  u = n(984933),
  h = n(271383),
  p = n(430824),
  v = n(496675),
  f = n(944486),
  m = n(914010),
  y = n(594174),
  O = n(237997),
  E = n(145597),
  g = n(981631);

function _(e) {
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
      var u, h;
      (0, c.Q)(g.rMx.GUILD_VIEWED, (u = _({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), h = h = {
        postable_channels: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(h)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(h, e))
      }), u)), (0, a.a)(g.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, s.K)(d.Z.getChannel(n), !0);
      (0, c.Q)(g.rMx.CHANNEL_OPENED, _({}, e, (0, l.$H)(n))), (0, a.a)(g.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let b = o.ZP.connectStores([m.Z, f.Z, p.Z, y.default, O.default, u.ZP, v.Z, h.ZP], () => {
  var e, t, n;
  let i = m.Z.getGuildId(),
    o = f.Z.getChannelId(i),
    l = p.Z.getGuild(i),
    s = y.default.getCurrentUser(),
    a = null !== (t = u.ZP.getChannels(null == l ? void 0 : l.id)[u.sH]) && void 0 !== t ? t : [],
    c = a.length > 0 ? a.filter(e => {
      let {
        channel: t
      } = e;
      return v.Z.can(r.$e(g.Plq.SEND_MESSAGES, g.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != s && null != i && null !== (n = null === (e = h.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: o,
    locked: O.default.isLocked((0, E.getPID)()),
    hasPreviewEnabled: null == l ? void 0 : l.features.has(g.oNc.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(Z)