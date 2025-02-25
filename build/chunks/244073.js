/** Chunk was on 48799 **/
n.d(t, {
  Z: () => D
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(120356),
  s = n.n(o),
  l = n(568611),
  a = n(442837),
  c = n(481060),
  d = n(846027),
  u = n(925549),
  h = n(287734),
  p = n(933557),
  f = n(600164),
  g = n(870569),
  m = n(345243),
  y = n(873596),
  _ = n(917405),
  v = n(430824),
  O = n(131951),
  b = n(699516),
  S = n(594174),
  x = n(979651),
  Z = n(362446),
  E = n(518084),
  N = n(981631),
  j = n(388032),
  C = n(204346),
  I = n(347363);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class T extends r.PureComponent {
  handleDisconnect() {
    h.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, p.F6)(e, S.default, b.Z), r = null != t ? "".concat(n, " / ").concat(t.name) : n, o = null != t ? t.id : N.ME;
    return (0, i.jsx)(l.rU, {
      to: N.Z5c.CHANNEL(o),
      onClick: t => {
        t.stopPropagation(), u.Z.channelListScrollTo(o, e.id)
      },
      children: (0, i.jsx)(m.Z, {
        className: I.channel,
        children: r
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: r,
      channel: o,
      quality: l,
      lastPing: a,
      hasVideo: d,
      connectionState: u,
      deaf: h,
      mute: p
    } = this.props;
    return null == o ? null : (0, i.jsx)(E.ZP.Bar, {
      className: s()(e, C.controls, {
        [C.unpinned]: !n
      }),
      children: (0, i.jsxs)(E.ZP.Content, {
        className: s()(t, C.content),
        dynamicSize: !0,
        children: [(0, i.jsx)("div", {
          className: I.inner,
          children: (0, i.jsx)(c.yRy, {
            renderPopout: () => this.renderPopout(o.id),
            position: "top",
            children: e => (0, i.jsx)(c.P3F, k(w({}, e), {
              children: (0, i.jsx)(_.Z, {
                channelId: o.id,
                quality: l,
                lastPing: a,
                hasVideo: d,
                state: u,
                children: this.renderChannelLink(o)
              })
            }))
          })
        }), (0, i.jsxs)(f.Z, {
          grow: 0,
          children: [(0, i.jsx)(g.Z, {
            tooltipText: p ? j.NW.string(j.t.YqAjX1) : j.NW.string(j.t["w4m94+"]),
            icon: p ? c.nRN : c.S6n,
            iconForeground: p ? C.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(g.Z, {
            tooltipText: h ? j.NW.string(j.t["2US87+"]) : j.NW.string(j.t.wjcRFR),
            icon: h ? c.wE8 : c.VWR,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? C.strikethrough : null
          }), null == r && (0, i.jsx)(g.Z, {
            tooltipText: j.NW.string(j.t["6vrfgo"]),
            onClick: this.handleDisconnect,
            icon: c.gkL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfMute({
        context: e,
        location: "Overlay Controls"
      })
    }), P(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfDeaf({
        context: e,
        location: "Overlay Controls"
      })
    }), P(this, "renderPopout", e => {
      let {
        lobbyId: t
      } = this.props;
      return (0, i.jsx)(y.Z, {
        channelId: e,
        lobbyId: t,
        isOverlay: !0
      })
    })
  }
}

function D(e) {
  var {
    context: t,
    lobbyId: n,
    channel: r
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["context", "lobbyId", "channel"]);
  let s = (0, a.e7)([v.Z], () => v.Z.getGuild(null == r ? void 0 : r.getGuildId())),
    l = (0, a.e7)([x.Z], () => null != r && x.Z.hasVideo(r.id)),
    [c, d] = (0, a.Wu)([O.Z], () => [O.Z.isSelfMute(t) || O.Z.isSelfMutedTemporarily(t), O.Z.isSelfDeaf(t)]),
    [u, h, p] = (0, a.Wu)([Z.Z], () => [Z.Z.getConnectionState(n), Z.Z.getLastPing(n), Z.Z.getQuality(n)]);
  return (0, i.jsx)(T, k(w({}, o), {
    context: t,
    lobbyId: n,
    channel: r,
    guild: s,
    hasVideo: l,
    mute: c,
    deaf: d,
    connectionState: u,
    lastPing: h,
    quality: p
  }))
}