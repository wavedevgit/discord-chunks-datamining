/** Chunk was on 81985 **/
/** chunk id: 919436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk620389 = require("./620389.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk358221 = require("./358221.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk19780 = require("./19780.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk451478 = require("./451478.js"),
  Chunk37411 = require("./37411.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk455172 = require("./455172.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729074 = require("./729074.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
let R = {
  friction: 28,
  tension: 600
};

function D(e) {
  switch (e) {
    case "height":
    case "opacity":
      return A({
        duration: 150
      }, R);
    case "scale":
      return A({}, R);
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class M extends(r = Chunk473749.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !j.Z.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: D
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
      config: D
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: true
    }, () => t.update({
      immediate: !j.Z.isFocused(),
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
    } = this.props, t = e.type === P.d4z.DM ? v.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(true, 48, false) : (0, p.x)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: r,
      audio: l,
      video: o,
      stream: s,
      isCurrentUserInThisDMCall: u,
      unread: d,
      treeItemProps: p,
      statusIndicatorsEnabled: f
    } = this.props, {
      hovered: g,
      animating: m
    } = this.state, b = e.isMultiUserDM() && null == e.icon, y = () => (0, i.jsx)(c.LYs, A({
      to: P.Z5c.CHANNEL(P.ME, e.id),
      onMouseEnter: () => this.setState({
        hovered: true
      }),
      onMouseLeave: () => this.setState({
        hovered: false
      }),
      selected: n || g,
      ariaLabel: null != t ? Z.intl.formatToPlainString(Z.t.hKarnZ, {
        mentions: r,
        name: t
      }) : "",
      onContextMenu: this.handleContextMenu,
      icon: b ? true : this.getChannelIcon(),
      backgroundStyle: b ? "on-hover" : "always",
      children: b ? (0, i.jsx)(h.Z, {
        channel: e,
        size: c.EFr.SIZE_40,
        facepileSizeOverride: c.EFr.SIZE_32,
        "aria-hidden": true
      }) : true
    }, p)), v = (0, i.jsx)(c.aRk, {
      rounded: true,
      selected: false,
      lowerBadge: r > 0 ? (0, I.Ne)(r, true, true) : null,
      upperBadge: (0, I.Or)({
        audio: l,
        video: o,
        screenshare: s,
        isCurrentUserConnected: u
      }),
      lowerBadgeSize: {
        width: (0, c.OVM)(r)
      },
      children: y()
    }), O = f ? (0, i.jsx)(E.Z, {
      channel: e,
      children: v
    }) : (0, i.jsx)(_.Z, {
      text: null != t ? t : "",
      selected: n,
      children: v
    });
    return (0, i.jsx)(a.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, i.jsxs)(S.H, {
        children: [(0, i.jsx)(C.Z, {
          hovered: !m && g,
          selected: !m && n,
          unread: !m && d,
          className: N.pill
        }), O]
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      hovered: false,
      animating: true,
      controller: new a.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: D
      })
    }), T(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, r = t.type === P.d4z.DM ? v.default.getUser(t.getRecipientId()) : null;
      null != r ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("4040"), n.e("56826"), n.e("93896")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, w(A({}, n), {
          channel: t,
          user: r
        }))
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, i.jsx)(e, w(A({}, n), {
          channel: t,
          selected: false
        }))
      })
    })
  }
}
T(M, "defaultProps", {
  badge: 0,
  audio: false,
  video: false,
  isCurrentUserInThisDMCall: false
});
let k = Chunk473749.forwardRef(function(e, t) {
  let n = e.channel.id,
    r = (0, f.ZP)(e.channel),
    l = (0, o.Ie)(n, 2),
    a = (0, s.e7)([m.Z], () => m.Z.getChannelId(), []),
    u = (0, s.e7)([d.Z], () => d.Z.getMode(n), [n]),
    p = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
    h = (0, s.e7)([O.ZP], () => O.ZP.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
    v = (0, s.e7)([y.Z], () => y.Z.getChannelId(), []),
    j = (0, s.e7)([b.ZP], () => b.ZP.getMentionCount(n), [n]),
    {
      enabled: C
    } = (0, x.p)({
      location: "DirectMessage"
    }),
    E = a === n,
    S = false,
    _ = false;
  (E || C && h) && (S = u === P.WtW.VOICE, _ = u === P.WtW.VIDEO);
  let I = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, i.jsx)(M, w(A({}, e), {
    ref: t,
    channelName: r,
    unread: j > 0,
    selected: v === n,
    badge: j,
    audio: S,
    video: _,
    stream: p,
    isCurrentUserInThisDMCall: E,
    size: I,
    treeItemProps: l,
    statusIndicatorsEnabled: C
  }))
})