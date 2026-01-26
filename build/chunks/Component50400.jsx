/** Chunk was on 97887 **/
/** chunk id: 50400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./65821.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk313961 = require("./313961.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk383501 = require("./383501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk531685 = require("./531685.js"),
  Chunk967978 = require("./967978.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk375855 = require("./375855.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk65611 = require("./65611.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308294 = require("./308294.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
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
let D = {
  friction: 28,
  tension: 600
};

function M(e) {
  switch (e) {
    case "height":
    case "opacity":
      return w({
        duration: 150
      }, D);
    case "scale":
      return w({}, D);
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class L extends(r = Chunk64700.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !O.A.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: M
    }).start().then(() => this.setState({
      animating: false
    }))
  }
  componentWillAppear(e) {
    let {
      controller: t
    } = this.state;
    t.update({
      immediate: true,
      scale: 1,
      opacity: 1,
      height: 1,
      config: M
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: true
    }, () => t.update({
      immediate: !O.A.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: M
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
      scale: l
    } = t.springs;
    return {
      opacity: n,
      height: r.to([0, 1], [0, e]),
      transform: l.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = e.type === I.rbe.DM ? y.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(true, 48, false) : (0, p.Y)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: r,
      audio: i,
      video: a,
      stream: o,
      isCurrentUserInThisDMCall: u,
      unread: d,
      treeItemProps: p,
      statusIndicatorsEnabled: h
    } = this.props, {
      hovered: g,
      animating: m
    } = this.state, b = e.isMultiUserDM() && null == e.icon, A = () => (0, l.jsx)(c.jlP, w({
      to: I.BVt.CHANNEL(I.ME, e.id),
      onMouseEnter: () => this.setState({
        hovered: true
      }),
      onMouseLeave: () => this.setState({
        hovered: false
      }),
      selected: n || g,
      ariaLabel: null != t ? N.intl.formatToPlainString(N.t.hKarnZ, {
        mentions: r,
        name: t
      }) : "",
      onContextMenu: this.handleContextMenu,
      icon: b ? true : this.getChannelIcon(),
      backgroundStyle: b ? "on-hover" : "always",
      children: b ? (0, l.jsx)(f.A, {
        channel: e,
        size: c._3J.SIZE_40,
        facepileSizeOverride: c._3J.SIZE_32,
        "aria-hidden": true
      }) : true
    }, p)), y = (0, l.jsx)(c.Qk9, {
      rounded: true,
      selected: false,
      lowerBadge: r > 0 ? (0, S.wN)(r, true, true) : null,
      upperBadge: (0, S.oi)({
        audio: i,
        video: a,
        screenshare: o,
        isCurrentUserConnected: u
      }),
      lowerBadgeSize: {
        width: (0, c.o6S)(r)
      },
      children: A()
    }), _ = h ? (0, l.jsx)(x.A, {
      channel: e,
      children: y
    }) : (0, l.jsx)(C.A, {
      text: null != t ? t : "",
      selected: n,
      children: y
    });
    return (0, l.jsx)(s.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, l.jsxs)(E.c, {
        children: [(0, l.jsx)(v.A, {
          hovered: !m && g,
          selected: !m && n,
          unread: !m && d,
          className: T.I
        }), _]
      })
    })
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      hovered: false,
      animating: true,
      controller: new s.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: M
      })
    }), P(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, r = t.type === I.rbe.DM ? y.default.getUser(t.getRecipientId()) : null;
      null != r ? (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("39778"), n.e("54266")]).then(n.bind(n, 385913));
        return n => (0, l.jsx)(e, R(w({}, n), {
          channel: t,
          user: r
        }))
      }) : (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
        return n => (0, l.jsx)(e, R(w({}, n), {
          channel: t,
          selected: false
        }))
      })
    })
  }
}
P(L, "defaultProps", {
  badge: 0,
  audio: false,
  video: false,
  isCurrentUserInThisDMCall: false
});
let k = Chunk64700.forwardRef(function(e, t) {
  let n = e.channel.id,
    r = (0, h.Ay)(e.channel),
    i = (0, a.Vd)(n, 2),
    s = (0, o.bG)([m.A], () => m.A.getChannelId(), []),
    u = (0, o.bG)([d.A], () => d.A.getMode(n), [n]),
    p = (0, o.bG)([g.A], () => g.A.getAllApplicationStreamsForChannel(n).length > 0),
    f = (0, o.bG)([_.Ay], () => _.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
    y = (0, o.bG)([A.A], () => A.A.getChannelId(), []),
    O = (0, o.bG)([b.Ay], () => b.Ay.getMentionCount(n), [n]),
    {
      enabled: v
    } = (0, j.r)({
      location: "DirectMessage"
    }),
    x = s === n,
    E = false,
    C = false;
  (x || v && f) && (E = u === I._Of.VOICE, C = u === I._Of.VIDEO);
  let S = (0, c.rdh)(c.LU0.modules.guildbar.AVATAR_SIZE);
  return (0, l.jsx)(L, R(w({}, e), {
    ref: t,
    channelName: r,
    unread: O > 0,
    selected: y === n,
    badge: O,
    audio: E,
    video: C,
    stream: p,
    isCurrentUserInThisDMCall: x,
    size: S,
    treeItemProps: i,
    statusIndicatorsEnabled: v
  }))
})