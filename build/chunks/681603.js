/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => _
});
var i = n(192379),
  r = n(149765),
  o = n(442837),
  a = n(367907),
  s = n(731429),
  l = n(188471),
  c = n(318885),
  d = n(592125),
  u = n(984933),
  f = n(271383),
  p = n(430824),
  h = n(496675),
  v = n(944486),
  E = n(914010),
  m = n(594174),
  x = n(237997),
  O = n(145597),
  y = n(981631);

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
      var u, f;
      (0, c.Q)(y.rMx.GUILD_VIEWED, (u = g({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), f = f = {
        postable_channels: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(f)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(f, e))
      }), u)), (0, l.a)(y.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, s.K)(d.Z.getChannel(n), !0);
      (0, c.Q)(y.rMx.CHANNEL_OPENED, g({}, e, (0, a.$H)(n))), (0, l.a)(y.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let _ = o.ZP.connectStores([E.Z, v.Z, p.Z, m.default, x.Z, u.ZP, h.Z, f.ZP], () => {
  var e, t, n;
  let i = E.Z.getGuildId(),
    o = v.Z.getChannelId(i),
    a = p.Z.getGuild(i),
    s = m.default.getCurrentUser(),
    l = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
    c = l.length > 0 ? l.filter(e => {
      let {
        channel: t
      } = e;
      return h.Z.can(r.$e(y.Plq.SEND_MESSAGES, y.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != s && null != i && null !== (n = null === (e = f.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: o,
    locked: x.Z.isLocked((0, O.QF)()),
    hasPreviewEnabled: null == a ? void 0 : a.features.has(y.oNc.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(Z)