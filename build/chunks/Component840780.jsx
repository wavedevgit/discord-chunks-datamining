/** Chunk was on 85362 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eu
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk889441 = require("./889441.js"),
  Chunk736409 = require("./736409.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk413523 = require("./413523.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk550532 = require("./550532.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk74299 = require("./74299.js"),
  Chunk914923 = require("./914923.js"),
  Chunk662304 = require("./662304.jsx"),
  Chunk989941 = require("./989941.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk231664 = require("./231664.js"),
  Chunk759198 = require("./759198.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk345243 = require("./345243.jsx"),
  Chunk115530 = require("./115530.jsx"),
  Chunk339144 = require("./339144.jsx"),
  Chunk441248 = require("./441248.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk800339 = require("./800339.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}
let es = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)($.Z, {
    children: t
  })
});
class ec extends Chunk647438.PureComponent {
  renderSparkles() {
    let {
      useReducedMotion: e
    } = this.props;
    async function t() {
      let {
        default: e
      } = await require.e("5217").then(require.t.bind(require, 801048, 19));
      return module
    }
    return (0, Chunk951288.jsx)("div", {
      className: Chunk800339.sparkleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Fmz, {
        importData: exports,
        shouldAnimate: !module,
        className: Chunk800339.sparkles
      })
    })
  }
  renderActions() {
    return (0, Chunk951288.jsx)(Chunk339144.J, ea({}, this.props))
  }
  renderGame() {
    let {
      isStreaming: e,
      application: t,
      runningGame: n,
      isForceShowSharingPopout: i,
      setIsForceShowSharingPopout: l
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk441248.k, {
      isStreaming: module,
      application: exports,
      game: require,
      onClickNotSharing: () => Chunk120356(true),
      isForceShowSharingPopout: Chunk647438,
      setIsForceShowSharingPopout: Chunk120356
    })
  }
  renderScreenshare() {
    let {
      isStreaming: e,
      streamMetadata: t,
      streamQualityIndicator: n
    } = this.props, {
      title: i,
      sanitizedTitle: l
    } = (0, Chunk914923.Z)(exports);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk800339.gameWrapper,
      children: [module ? (0, Chunk951288.jsx)(Chunk662304.Z, {
        title: Chunk120356,
        icon: null == exports ? true : exports.sourceIcon
      }) : (0, Chunk951288.jsx)(Chunk194082.ZP, {
        look: Chunk194082.ZP.Looks.GRAY,
        size: Chunk194082.ZP.Sizes.SMALL,
        className: Chunk800339.liveIndicator
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk800339.info,
        children: [(0, Chunk951288.jsx)(Chunk115530.Z, {
          children: Chunk647438
        }), null != require && (0, Chunk951288.jsxs)("div", {
          className: Chunk800339.perksDemoContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
            size: "xxs",
            color: Chunk436774.JX.PREMIUM_TIER_2
          }), (0, Chunk951288.jsx)(Chunk759198.Z, {
            className: Chunk800339.perksDemoText,
            variant: "text-xxs/semibold",
            children: require
          })]
        })]
      })]
    })
  }
  renderEmbeddedActivity() {
    let e, {
      application: t,
      embeddedActivity: n,
      channel: i,
      channelName: l,
      guildForConnectedChannel: o,
      isForceShowSharingPopout: a,
      setIsForceShowSharingPopout: s
    } = this.props;
    if (null == require || null == exports) return null;
    let c = {
        start: require.connectedSince
      },
      u = Chunk120356;
    null != o && null != Chunk647438 ? (e = Chunk981631.Z5c.CHANNEL(o.id, Chunk647438.id), u = "".concat(Chunk481060, " / ").concat(o.name)) : null != Chunk647438 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk647438.id));
    let d = (0, Chunk951288.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk951288.jsx)(Chunk345243.Z, {
          className: Chunk800339.channel,
          children: Chunk481060
        })
      }),
      p = (0, Chunk951288.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleApplicationLinkClick,
        children: (0, Chunk951288.jsx)(Chunk115530.Z, {
          className: Chunk800339.underlineOnHover,
          children: exports.name
        })
      }),
      f = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk925329.Z, {
          className: Chunk800339.gameIcon,
          game: exports,
          size: Chunk925329.Z.Sizes.SMALL
        }), (0, Chunk951288.jsx)(Chunk736409.j, {
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: s,
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk800339.info,
            children: [Chunk475179, null != Chunk647438 && (0, Chunk131704.Qm)(Chunk647438.type) ? Chunk570140 : (0, Chunk951288.jsx)(es, {
              timestamps: Chunk442837
            })]
          })
        })]
      });
    return (0, Chunk951288.jsx)("div", {
      className: Chunk800339.gameWrapper,
      children: Chunk925549
    })
  }
  render() {
    let {
      canGoLive: e,
      embeddedActivity: t,
      runningGame: n,
      isStreaming: i,
      streamMetadata: l,
      application: a,
      activity: s,
      className: c
    } = this.props;
    if (!Chunk647438 && (!(0, Chunk339144.y)(Chunk512722, s, exports) && !module || null == require && null == exports)) return null;
    let u = () => null == require || Chunk647438 && (null == Chunk120356 ? true : Chunk120356.pid) == null ? null != exports ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame();
    return (0, Chunk951288.jsx)("div", {
      className: o()(Chunk800339.panel, Chunk442837),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk800339.body,
        children: [Chunk481060(), this.renderActions()]
      })
    })
  }
  constructor(...e) {
    super(...e), eo(this, "activityPopoutTargetRef", i.createRef()), eo(this, "handleApplicationLinkClick", () => {
      let {
        isActivityPopoutOpen: e
      } = this.props;
      this.handleChannelLinkClick(), e && d.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      })
    }), eo(this, "handleChannelLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n,
        isActivityPopoutOpen: r
      } = this.props;
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), f.Z.channelListScrollTo(null != (e = t.guild_id) ? e : er.ME, t.id), !r && ((0, U.vd)(t.type) && p.Z.selectParticipant(t.id, (0, C.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, U.Qm)(t.type) && (0, _.tg)(ei.Ez.PANEL))
    })
  }
}
let eu = (0, Chunk730749.Z)(function(e) {
  var t, n, l, {
      guildId: o
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["guildId"]);
  let s = (0, c.e7)([B.default], () => B.default.getId()),
    u = (0, c.e7)([P.ZP, Q.Z], () => (0, R.Z)(P.ZP, Q.Z)),
    d = (0, c.e7)([q.Z, V.Z], () => V.Z.getChannel(q.Z.getVoiceChannelId())),
    p = (0, c.e7)([O.ZP], () => O.ZP.getConnectedActivityChannelId()),
    f = (0, c.e7)([V.Z], () => V.Z.getChannel(p)),
    h = (0, c.e7)([F.Z], () => F.Z.getGuild(null == f ? true : f.guild_id)),
    [g, _] = (0, c.Wu)([G.Z], () => [G.Z.getCurrentUserActiveStream(), G.Z.getStreamerActiveStreamMetadata()]),
    v = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
    C = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
    x = (0, c.e7)([F.Z, W.Z, H.ZP], () => null != d ? w.JL(d, F.Z, W.Z, false) : null != o && w.h_(H.ZP.getChannels(o), F.Z, W.Z).length > 0),
    [I] = (0, j.Z)([null != (l = null != _ && null != _.id ? _.id : null != u && null != u.id ? u.id : null != C ? C.applicationId : true) ? l : ""]),
    N = (0, c.e7)([S.Z], () => S.Z.getFakeGameData()),
    T = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
    A = (0, y.Z)() && null != T && (0, b.R)(),
    D = (0, c.e7)([z.Z], () => (0, Z.Z)(z.Z) && (0, J.isWindows)()),
    k = (0, c.e7)([K.Z], () => null != s ? K.Z.findActivity(s, e => e.type === er.IIU.PLAYING) : null),
    U = null != g && g.ownerId === s && g.state !== er.jm8.ENDED,
    $ = (0, c.e7)([X.default, Y.Z], () => null != f ? (0, E.F6)(f, X.default, Y.Z) : true),
    ee = (0, M.Z)(),
    [et, en] = i.useState(false),
    ei = (0, c.e7)([L.Z], () => L.Z.getWindowOpen(er.KJ3.ACTIVITY_POPOUT));
  return (0, r.jsx)(ec, (t = ea({}, a), n = n = {
    guildId: o,
    canGoLive: D || A || true !== N,
    activity: k,
    embeddedActivity: C,
    userId: s,
    runningGame: null != N ? N : u,
    application: I,
    useReducedMotion: v,
    isStreaming: U,
    channel: f,
    canStream: x,
    stream: g,
    streamMetadata: _,
    channelName: $,
    guildForConnectedChannel: h,
    streamQualityIndicator: ee,
    isForceShowSharingPopout: et,
    setIsForceShowSharingPopout: en,
    isActivityPopoutOpen: ei
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
})