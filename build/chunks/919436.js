/** Chunk was on 30829 **/
n.d(t, {
  Z: () => R
}), n(411104), n(47120);
var r, i = n(200651),
  l = n(192379),
  o = n(642128),
  a = n(91192),
  s = n(442837),
  c = n(481060),
  u = n(239091),
  d = n(358221),
  p = n(43267),
  h = n(933557),
  f = n(540059),
  g = n(93687),
  m = n(266076),
  b = n(199902),
  v = n(19780),
  y = n(306680),
  O = n(944486),
  j = n(594174),
  _ = n(451478),
  C = n(276952),
  x = n(682662),
  P = n(662146),
  N = n(674552),
  S = n(981631),
  I = n(704857);

function Z(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {
  friction: 28,
  tension: 600
};

function D(e) {
  switch (e) {
    case "height":
    case "opacity":
      return w({
        duration: 150
      }, T);
    case "scale":
      return w({}, T);
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class A extends(r = l.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !_.Z.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: D
    }).start().then(() => this.setState({
      animating: !1
    }))
  }
  componentWillAppear(e) {
    let {
      controller: t
    } = this.state;
    t.update({
      immediate: !0,
      scale: 1,
      opacity: 1,
      height: 1,
      config: D
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !_.Z.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: D
    }).start().then(e))
  }
  componentWillUnmount() {
    this.state.controller.dispose()
  }
  getAnimatedStyle() {
    let {
      size: e
    } = this.props, {
      controller: t
    } = this.state, {
      opacity: n,
      height: r,
      scale: i
    } = t.springs;
    return {
      opacity: n,
      height: r.to([0, 1], [0, e]),
      transform: i.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = e.type === S.d4z.DM ? j.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, p.x)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: r,
      audio: l,
      video: s,
      stream: u,
      isCurrentUserInThisDMCall: d,
      unread: p,
      isGDMFacepileEnabled: h,
      isVisualRefreshEnabled: f
    } = this.props, {
      hovered: g,
      animating: b
    } = this.state, v = e.isMultiUserDM() && null == e.icon && h;
    return (0, i.jsx)(o.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, i.jsxs)(x.H, {
        children: [(0, i.jsx)(C.Z, {
          hovered: !b && g,
          selected: !b && n,
          unread: !b && p,
          className: I.pill
        }), (0, i.jsx)(P.Z, {
          text: null != t ? t : "",
          selected: n,
          children: (0, i.jsx)(c.aRk, {
            rounded: f,
            selected: !f && (n || g),
            lowerBadge: r > 0 ? (0, N.Ne)(r) : null,
            upperBadge: (0, N.Or)({
              audio: l,
              video: s,
              screenshare: u,
              isCurrentUserConnected: d
            }),
            lowerBadgeSize: {
              width: (0, c.OVM)(r)
            },
            children: (0, i.jsx)(a.mh, {
              id: e.id,
              children: r => (0, i.jsx)(c.LYs, w({
                to: S.Z5c.CHANNEL(S.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                selected: n || g,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                icon: v ? void 0 : this.getChannelIcon(),
                backgroundStyle: v ? "on-hover" : "always",
                children: v ? (0, i.jsx)(m.Z, {
                  channel: e,
                  size: c.EFr.SIZE_48,
                  facepileSizeOverride: c.EFr.SIZE_32,
                  experimentLocation: "unread_gdm",
                  "aria-hidden": !0
                }) : void 0
              }, r))
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), Z(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new o.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: D
      })
    }), Z(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, r = t.type === S.d4z.DM ? j.default.getUser(t.getRecipientId()) : null;
      null != r ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("69151")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, E(w({}, n), {
          channel: t,
          user: r
        }))
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421"), n.e("71582")]).then(n.bind(n, 354741));
        return n => (0, i.jsx)(e, E(w({}, n), {
          channel: t,
          selected: !1
        }))
      })
    })
  }
}
Z(A, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
});
let R = l.forwardRef(function(e, t) {
  let n = e.channel.id,
    r = (0, h.ZP)(e.channel),
    l = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
    o = (0, s.e7)([d.Z], () => null != l ? d.Z.getMode(l) : S.WtW.VOICE, [l]),
    a = (0, s.e7)([b.Z], () => b.Z.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, s.e7)([O.Z], () => O.Z.getChannelId(), []),
    p = (0, s.e7)([y.ZP], () => y.ZP.getMentionCount(n), [n]),
    {
      isFacepileEnabled: m
    } = g.Z.useExperiment({
      location: "unread_direct_message"
    }, {
      autoTrackExposure: !1
    }),
    j = l === n,
    _ = !1,
    C = !1;
  j && (_ = o === S.WtW.VOICE, C = o === S.WtW.VIDEO);
  let x = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE),
    P = (0, f.Q3)("DirectMessage");
  return (0, i.jsx)(A, E(w({}, e), {
    ref: t,
    channelName: r,
    unread: p > 0,
    selected: u === n,
    badge: p,
    audio: _,
    video: C,
    stream: a,
    isCurrentUserInThisDMCall: j,
    isGDMFacepileEnabled: m,
    size: P ? x : 56,
    isVisualRefreshEnabled: P
  }))
})