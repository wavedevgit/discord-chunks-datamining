/** Chunk was on 27 **/
/** chunk id: 919436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk426322 = require("./426322.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk358221 = require("./358221.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk93687 = require("./93687.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk19780 = require("./19780.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk514483 = require("./514483.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
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
let T = {
  friction: 28,
  tension: 600
};

function A(e) {
  switch (e) {
    case "height":
    case "opacity":
      return Z({
        duration: 150
      }, T);
    case "scale":
      return Z({}, T);
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class R extends(r = Chunk647438.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !v.Z.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: A
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
      config: A
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: true
    }, () => t.update({
      immediate: !v.Z.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: A
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
      transform: Chunk951288.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
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
      video: a,
      stream: s,
      isCurrentUserInThisDMCall: u,
      unread: d,
      isGDMFacepileEnabled: p,
      treeItemProps: h
    } = this.props, {
      hovered: f,
      animating: m
    } = this.state, b = module.isMultiUserDM() && null == module.icon && Chunk43267, _ = () => (0, Chunk951288.jsx)(Chunk481060.LYs, Z({
      to: Chunk981631.Z5c.CHANNEL(Chunk981631.ME, module.id),
      onMouseEnter: () => this.setState({
        hovered: true
      }),
      onMouseLeave: () => this.setState({
        hovered: false
      }),
      selected: require || Chunk93687,
      ariaLabel: null != exports ? Chunk388032.intl.formatToPlainString(Chunk388032.t.hKarnZ, {
        mentions: r,
        name: exports
      }) : "",
      onContextMenu: this.handleContextMenu,
      icon: Chunk19780 ? true : this.getChannelIcon(),
      backgroundStyle: Chunk19780 ? "on-hover" : "always",
      children: Chunk19780 ? (0, Chunk951288.jsx)(Chunk266076.Z, {
        channel: module,
        size: Chunk481060.EFr.SIZE_40,
        facepileSizeOverride: Chunk481060.EFr.SIZE_32,
        experimentLocation: "unread_gdm",
        "aria-hidden": true
      }) : true
    }, Chunk933557));
    return (0, Chunk951288.jsx)(Chunk426322.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, Chunk951288.jsxs)(Chunk682662.H, {
        children: [(0, Chunk951288.jsx)(Chunk276952.Z, {
          hovered: !Chunk199902 && Chunk93687,
          selected: !Chunk199902 && require,
          unread: !Chunk199902 && Chunk358221,
          className: Chunk514483.pill
        }), (0, Chunk951288.jsx)(Chunk662146.Z, {
          text: null != exports ? exports : "",
          selected: require,
          children: (0, Chunk951288.jsx)(Chunk481060.aRk, {
            rounded: true,
            selected: false,
            lowerBadge: r > 0 ? (0, Chunk674552.Ne)(r, true, true) : null,
            upperBadge: (0, Chunk674552.Or)({
              audio: Chunk647438,
              video: Chunk91192,
              screenshare: Chunk442837,
              isCurrentUserConnected: Chunk239091
            }),
            lowerBadgeSize: {
              width: (0, Chunk481060.OVM)(r)
            },
            children: Chunk306680()
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      hovered: false,
      animating: true,
      controller: new o.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: A
      })
    }), N(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, r = t.type === S.d4z.DM ? O.default.getUser(t.getRecipientId()) : null;
      null != r ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("31899")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, w(Z({}, n), {
          channel: t,
          user: r
        }))
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, i.jsx)(e, w(Z({}, n), {
          channel: t,
          selected: false
        }))
      })
    })
  }
}
N(R, "defaultProps", {
  badge: 0,
  audio: false,
  video: false,
  isCurrentUserInThisDMCall: false
});
let D = Chunk647438.forwardRef(function(e, t) {
  let n = e.channel.id,
    r = (0, h.ZP)(e.channel),
    l = (0, a.Ie)(n, 2),
    o = (0, s.e7)([b.Z], () => b.Z.getChannelId(), []),
    u = (0, s.e7)([d.Z], () => null != o ? d.Z.getMode(o) : S.WtW.VOICE, [o]),
    p = (0, s.e7)([m.Z], () => m.Z.getAllApplicationStreamsForChannel(n).length > 0),
    g = (0, s.e7)([y.Z], () => y.Z.getChannelId(), []),
    O = (0, s.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
    {
      isFacepileEnabled: v
    } = f.Z.useExperiment({
      location: "unread_direct_message"
    }, {
      autoTrackExposure: false
    }),
    j = o === n,
    C = false,
    E = false;
  j && (C = u === S.WtW.VOICE, E = u === S.WtW.VIDEO);
  let x = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, i.jsx)(R, w(Z({}, e), {
    ref: t,
    channelName: r,
    unread: O > 0,
    selected: g === n,
    badge: O,
    audio: C,
    video: E,
    stream: p,
    isCurrentUserInThisDMCall: j,
    isGDMFacepileEnabled: v,
    size: x,
    treeItemProps: l
  }))
})