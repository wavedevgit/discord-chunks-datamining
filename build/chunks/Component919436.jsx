/** Chunk was on 51235 **/
/** chunk id: 919436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467721 = require("./467721.js"),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
      return T({
        duration: 150
      }, R);
    case "scale":
      return T({}, R);
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
    } = exports.springs;
    return {
      opacity: require,
      height: r.to([0, 1], [0, module]),
      transform: Chunk54381.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = module.type === Chunk981631.d4z.DM ? Chunk594174.default.getUser(module.getRecipientId()) : null;
    return null != exports ? exports.getAvatarURL(true, 48, false) : (0, Chunk43267.x)(module)
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
      treeItemProps: f,
      statusIndicatorsEnabled: h
    } = this.props, {
      hovered: g,
      animating: b
    } = this.state, m = module.isMultiUserDM() && null == module.icon, y = () => (0, Chunk54381.jsx)(Chunk481060.LYs, T({
      to: Chunk981631.Z5c.CHANNEL(Chunk981631.ME, module.id),
      onMouseEnter: () => this.setState({
        hovered: true
      }),
      onMouseLeave: () => this.setState({
        hovered: false
      }),
      selected: require || Chunk199902,
      ariaLabel: null != exports ? Chunk388032.intl.formatToPlainString(Chunk388032.t.hKarnZ, {
        mentions: r,
        name: exports
      }) : "",
      onContextMenu: this.handleContextMenu,
      icon: Chunk306680 ? true : this.getChannelIcon(),
      backgroundStyle: Chunk306680 ? "on-hover" : "always",
      children: Chunk306680 ? (0, Chunk54381.jsx)(Chunk266076.Z, {
        channel: module,
        size: Chunk481060.EFr.SIZE_40,
        facepileSizeOverride: Chunk481060.EFr.SIZE_32,
        "aria-hidden": true
      }) : true
    }, Chunk43267)), O = (0, Chunk54381.jsx)(Chunk481060.aRk, {
      rounded: true,
      selected: false,
      lowerBadge: r > 0 ? (0, Chunk674552.Ne)(r, true, true) : null,
      upperBadge: (0, Chunk674552.Or)({
        audio: Chunk473749,
        video: Chunk91192,
        screenshare: Chunk442837,
        isCurrentUserConnected: Chunk239091
      }),
      lowerBadgeSize: {
        width: (0, Chunk481060.OVM)(r)
      },
      children: Chunk944486()
    }), v = Chunk933557 ? (0, Chunk54381.jsx)(Chunk455172.Z, {
      channel: module,
      children: Chunk594174
    }) : (0, Chunk54381.jsx)(Chunk662146.Z, {
      text: null != exports ? exports : "",
      selected: require,
      children: Chunk594174
    });
    return (0, Chunk54381.jsx)(Chunk467721.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, Chunk54381.jsxs)(Chunk682662.H, {
        children: [(0, Chunk54381.jsx)(Chunk276952.Z, {
          hovered: !Chunk19780 && Chunk199902,
          selected: !Chunk19780 && require,
          unread: !Chunk19780 && Chunk358221,
          className: Chunk729074.pill
        }), Chunk938475]
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "state", {
      hovered: false,
      animating: true,
      controller: new a.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: D
      })
    }), w(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, r = t.type === P.d4z.DM ? O.default.getUser(t.getRecipientId()) : null;
      null != r ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("93896")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, A(T({}, n), {
          channel: t,
          user: r
        }))
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, i.jsx)(e, A(T({}, n), {
          channel: t,
          selected: false
        }))
      })
    })
  }
}
w(M, "defaultProps", {
  badge: 0,
  audio: false,
  video: false,
  isCurrentUserInThisDMCall: false
});
let L = Chunk473749.forwardRef(function(e, t) {
  let n = e.channel.id,
    r = (0, h.ZP)(e.channel),
    l = (0, o.Ie)(n, 2),
    a = (0, s.e7)([b.Z], () => b.Z.getChannelId(), []),
    u = (0, s.e7)([d.Z], () => d.Z.getMode(n), [n]),
    f = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
    p = (0, s.e7)([v.ZP], () => v.ZP.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
    O = (0, s.e7)([y.Z], () => y.Z.getChannelId(), []),
    j = (0, s.e7)([m.ZP], () => m.ZP.getMentionCount(n), [n]),
    {
      enabled: x
    } = (0, C.p)({
      location: "DirectMessage"
    }),
    E = a === n,
    S = false,
    I = false;
  (E || x && p) && (S = u === P.WtW.VOICE, I = u === P.WtW.VIDEO);
  let _ = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, i.jsx)(M, A(T({}, e), {
    ref: t,
    channelName: r,
    unread: j > 0,
    selected: O === n,
    badge: j,
    audio: S,
    video: I,
    stream: f,
    isCurrentUserInThisDMCall: E,
    size: _,
    treeItemProps: l,
    statusIndicatorsEnabled: x
  }))
})