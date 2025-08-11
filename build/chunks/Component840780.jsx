/** Chunk was on 34779 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eu
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  Chunk165393 = require("./165393.jsx"),
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
  Chunk864989 = require("./864989.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
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
let ea = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)($.Z, {
    children: t
  })
});
class ec extends Chunk73800.PureComponent {
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
    return (0, Chunk255367.jsx)("div", {
      className: Chunk864989.sparkleContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.Fmz, {
        importData: exports,
        shouldAnimate: !module,
        className: Chunk864989.sparkles
      })
    })
  }
  renderActions() {
    return (0, Chunk255367.jsx)(Chunk339144.J, es({}, this.props))
  }
  renderGame() {
    let {
      isStreaming: e,
      application: t,
      runningGame: n,
      isForceShowSharingPopout: i,
      setIsForceShowSharingPopout: l
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk441248.k, {
      isStreaming: module,
      application: exports,
      game: require,
      onClickNotSharing: () => Chunk120356(true),
      isForceShowSharingPopout: Chunk73800,
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
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk864989.gameWrapper,
      children: [module ? (0, Chunk255367.jsx)(Chunk165393.Z, {
        title: Chunk120356,
        icon: null == exports ? true : exports.sourceIcon
      }) : (0, Chunk255367.jsx)(Chunk194082.ZP, {
        look: Chunk194082.ZP.Looks.GRAY,
        size: Chunk194082.ZP.Sizes.SMALL,
        className: Chunk864989.liveIndicator
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk864989.info,
        children: [(0, Chunk255367.jsx)(Chunk115530.Z, {
          children: Chunk73800
        }), null != require && (0, Chunk255367.jsxs)("div", {
          className: Chunk864989.perksDemoContainer,
          children: [(0, Chunk255367.jsx)(Chunk481060.SrA, {
            size: "xxs",
            color: Chunk436774.JX.PREMIUM_TIER_2
          }), (0, Chunk255367.jsx)(Chunk759198.Z, {
            className: Chunk864989.perksDemoText,
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
      isForceShowSharingPopout: s,
      setIsForceShowSharingPopout: a
    } = this.props;
    if (null == require || null == exports) return null;
    let c = {
        start: require.connectedSince
      },
      u = Chunk120356;
    null != o && null != Chunk73800 ? (e = Chunk981631.Z5c.CHANNEL(o.id, Chunk73800.id), u = "".concat(Chunk481060, " / ").concat(o.name)) : null != Chunk73800 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk73800.id));
    let d = (0, Chunk255367.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk255367.jsx)(Chunk345243.Z, {
          className: Chunk864989.channel,
          children: Chunk481060
        })
      }),
      h = (0, Chunk255367.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleApplicationLinkClick,
        children: (0, Chunk255367.jsx)(Chunk115530.Z, {
          className: Chunk864989.underlineOnHover,
          children: exports.name
        })
      }),
      p = (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk925329.Z, {
          className: Chunk864989.gameIcon,
          game: exports,
          size: Chunk925329.Z.Sizes.SMALL
        }), (0, Chunk255367.jsx)(Chunk736409.j, {
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: a,
          children: (0, Chunk255367.jsxs)("div", {
            className: Chunk864989.info,
            children: [Chunk475179, null != Chunk73800 && (0, Chunk131704.Qm)(Chunk73800.type) ? Chunk570140 : (0, Chunk255367.jsx)(ea, {
              timestamps: Chunk442837
            })]
          })
        })]
      });
    return (0, Chunk255367.jsx)("div", {
      className: Chunk864989.gameWrapper,
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
      application: s,
      activity: a,
      className: c
    } = this.props;
    return Chunk73800 || ((0, Chunk339144.y)(Chunk512722, a, exports) || module) && (null != require || null != exports) ? (0, Chunk255367.jsx)("div", {
      className: o()(Chunk864989.panel, Chunk442837),
      children: (0, Chunk255367.jsxs)("div", {
        className: Chunk864989.body,
        children: [null == require || Chunk73800 && (null == Chunk120356 ? true : Chunk120356.pid) == null ? null != exports ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame(), this.renderActions()]
      })
    }) : null
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
      a()(null != n, "Activity cannot be null during navigation click"), a()(null != t, "Channel cannot be null during navigation click"), p.Z.channelListScrollTo(null != (e = t.guild_id) ? e : er.ME, t.id), !r && ((0, U.vd)(t.type) && h.Z.selectParticipant(t.id, (0, j.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, U.Qm)(t.type) && (0, O.tg)(ei.Ez.PANEL))
    })
  }
}
let eu = (0, Chunk730749.Z)(function(e) {
  var t, n, l, {
      guildId: o
    } = e,
    s = function(e, t) {
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
  let a = (0, c.e7)([B.default], () => B.default.getId()),
    u = (0, c.e7)([P.ZP, Q.Z], () => (0, R.Z)(P.ZP, Q.Z)),
    d = (0, c.e7)([q.Z, V.Z], () => V.Z.getChannel(q.Z.getVoiceChannelId())),
    h = (0, c.e7)([_.ZP], () => _.ZP.getConnectedActivityChannelId()),
    p = (0, c.e7)([V.Z], () => V.Z.getChannel(h)),
    f = (0, c.e7)([H.Z], () => H.Z.getGuild(null == p ? true : p.guild_id)),
    [g, O] = (0, c.Wu)([G.Z], () => [G.Z.getCurrentUserActiveStream(), G.Z.getStreamerActiveStreamMetadata()]),
    C = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
    j = (0, c.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
    S = (0, c.e7)([H.Z, W.Z, F.ZP], () => null != d ? w.JL(d, H.Z, W.Z, false) : null != o && w.h_(F.ZP.getChannels(o), H.Z, W.Z).length > 0),
    [I] = (0, v.Z)([null != (l = null != O && null != O.id ? O.id : null != u && null != u.id ? u.id : null != j ? j.applicationId : true) ? l : ""]),
    N = (0, c.e7)([x.Z], () => x.Z.getFakeGameData()),
    T = (0, c.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
    A = (0, y.Z)() && null != T && (0, b.R)(),
    D = (0, c.e7)([z.Z], () => (0, Z.Z)(z.Z) && (0, J.isWindows)()),
    k = (0, c.e7)([K.Z], () => null != a ? K.Z.findActivity(a, e => e.type === er.IIU.PLAYING) : null),
    U = null != g && g.ownerId === a && g.state !== er.jm8.ENDED,
    $ = (0, c.e7)([X.default, Y.Z], () => null != p ? (0, E.F6)(p, X.default, Y.Z) : true),
    ee = (0, M.Z)(),
    [et, en] = i.useState(false),
    ei = (0, c.e7)([L.Z], () => L.Z.getWindowOpen(er.KJ3.ACTIVITY_POPOUT));
  return (0, r.jsx)(ec, (t = es({}, s), n = n = {
    guildId: o,
    canGoLive: D || A || true !== N,
    activity: k,
    embeddedActivity: j,
    userId: a,
    runningGame: null != N ? N : u,
    application: I,
    useReducedMotion: C,
    isStreaming: U,
    channel: p,
    canStream: S,
    stream: g,
    streamMetadata: O,
    channelName: $,
    guildForConnectedChannel: f,
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