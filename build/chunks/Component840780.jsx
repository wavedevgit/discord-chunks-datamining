/** Chunk was on 71832 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e_
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
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
  Chunk20471 = require("./20471.js"),
  Chunk835473 = require("./835473.js"),
  Chunk413523 = require("./413523.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk550532 = require("./550532.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk243778 = require("./243778.jsx"),
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
  Chunk667105 = require("./667105.jsx"),
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
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk381096 = require("./381096.js"),
  Chunk345243 = require("./345243.jsx"),
  Chunk115530 = require("./115530.jsx"),
  Chunk339144 = require("./339144.jsx"),
  Chunk441248 = require("./441248.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754947 = require("./754947.js");

function em(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      em(e, t, n[t])
    })
  }
  return e
}
let eO = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(eo.Z, {
    children: t
  })
});
class ey extends Chunk647438.PureComponent {
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
      className: Chunk754947.sparkleContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Fmz, {
        importData: exports,
        shouldAnimate: !module,
        className: Chunk754947.sparkles
      })
    })
  }
  renderActions() {
    return (0, Chunk951288.jsx)(Chunk339144.J, eb({}, this.props))
  }
  renderPostAccountLinkPopover() {
    let {
      accountLinkExperimentEnabled: e,
      hasAlreadyLinked: t,
      blockAccountLinkDismissibleContent: n
    } = this.props, i = [];
    return module && exports && !require && Chunk647438.push(Chunk704215.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER), (0, Chunk951288.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk647438,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        if (t === u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER) return (0, r.jsx)(d.J2, {
          title: eh.intl.string(eh.t.MxAlrK),
          body: eh.intl.string(eh.t["/UTTEh"]),
          targetElementRef: this.accountLinkUpsellTargetRef,
          position: "top",
          align: "left",
          caretConfig: {
            align: "start"
          },
          actions: [{
            text: eh.intl.string(eh.t.aRIFWF),
            onClick: () => {
              n(ep.L.TAKE_ACTION), window.open(er.Z.getArticleURL(eu.BhN.IN_GAME_FEATURES), "_blank")
            }
          }],
          shouldShow: true,
          onRequestClose: () => n(ep.L.USER_DISMISS)
        })
      }
    })
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
      setIsForceShowSharingPopout: Chunk120356,
      ref: this.accountLinkUpsellTargetRef
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
      className: Chunk754947.gameWrapper,
      ref: this.accountLinkUpsellTargetRef,
      children: [module ? (0, Chunk951288.jsx)(Chunk165393.Z, {
        title: Chunk120356,
        icon: null == exports ? true : exports.sourceIcon
      }) : (0, Chunk951288.jsx)(Chunk194082.ZP, {
        look: Chunk194082.ZP.Looks.GRAY,
        size: Chunk194082.ZP.Sizes.SMALL,
        className: Chunk754947.liveIndicator
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk754947.info,
        children: [(0, Chunk951288.jsx)(Chunk115530.Z, {
          children: Chunk647438
        }), null != require && (0, Chunk951288.jsxs)("div", {
          className: Chunk754947.perksDemoContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
            size: "xxs",
            color: Chunk436774.JX.PREMIUM_TIER_2
          }), (0, Chunk951288.jsx)(Chunk759198.Z, {
            className: Chunk754947.perksDemoText,
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
    null != o && null != Chunk647438 ? (e = Chunk981631.Z5c.CHANNEL(o.id, Chunk647438.id), u = "".concat(Chunk704215, " / ").concat(o.name)) : null != Chunk647438 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk647438.id));
    let d = (0, Chunk951288.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk951288.jsx)(Chunk345243.Z, {
          className: Chunk754947.channel,
          children: Chunk704215
        })
      }),
      p = (0, Chunk951288.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleApplicationLinkClick,
        children: (0, Chunk951288.jsx)(Chunk115530.Z, {
          className: Chunk754947.underlineOnHover,
          children: exports.name
        })
      }),
      f = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk925329.Z, {
          className: Chunk754947.gameIcon,
          game: exports,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk951288.jsx)(Chunk736409.j, {
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: s,
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk754947.info,
            children: [Chunk481060, null != Chunk647438 && (0, Chunk131704.Qm)(Chunk647438.type) ? Chunk907862 : (0, Chunk951288.jsx)(eO, {
              timestamps: Chunk442837
            })]
          })
        })]
      });
    return (0, Chunk951288.jsx)("div", {
      className: Chunk754947.gameWrapper,
      children: Chunk570140
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
      className: o()(Chunk754947.panel, Chunk442837),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk754947.body,
        children: [Chunk704215(), this.renderActions(), this.renderPostAccountLinkPopover()]
      })
    })
  }
  constructor(...e) {
    super(...e), em(this, "activityPopoutTargetRef", i.createRef()), em(this, "accountLinkUpsellTargetRef", i.createRef()), em(this, "handleApplicationLinkClick", () => {
      let {
        isActivityPopoutOpen: e
      } = this.props;
      this.handleChannelLinkClick(), e && f.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      })
    }), em(this, "handleChannelLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n,
        isActivityPopoutOpen: r
      } = this.props;
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eu.ME, t.id), !r && ((0, H.vd)(t.type) && h.Z.selectParticipant(t.id, (0, S.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, H.Qm)(t.type) && (0, _.tg)(ed.Ez.PANEL))
    })
  }
}
let e_ = (0, Chunk730749.Z)(function(e) {
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
  let s = (0, c.e7)([W.default], () => W.default.getId()),
    u = (0, c.e7)([T.ZP, en.Z], () => (0, k.Z)(T.ZP, en.Z)),
    d = (0, c.e7)([ee.Z, K.Z], () => K.Z.getChannel(ee.Z.getVoiceChannelId())),
    p = (0, c.e7)([j.ZP], () => j.ZP.getConnectedActivityChannelId()),
    f = (0, c.e7)([K.Z], () => K.Z.getChannel(p)),
    h = (0, c.e7)([q.Z], () => q.Z.getGuild(null == f ? true : f.guild_id)),
    [g, m] = (0, c.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
    b = (0, c.e7)([O.Z], () => O.Z.useReducedMotion),
    _ = (0, c.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
    x = (0, c.e7)([q.Z, Q.Z, Y.ZP], () => null != d ? R.JL(d, q.Z, Q.Z, false) : null != o && R.h_(Y.ZP.getChannels(o), q.Z, Q.Z).length > 0),
    [S] = (0, E.Z)([null != (l = null != m && null != m.id ? m.id : null != u && null != u.id ? u.id : null != _ ? _.applicationId : true) ? l : ""]),
    I = (0, c.e7)([N.Z], () => N.Z.getFakeGameData()),
    Z = (0, c.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
    w = (0, v.Z)() && null != Z && (0, y.R)(),
    A = (0, c.e7)([X.Z], () => (0, D.Z)(X.Z) && (0, ei.isWindows)()),
    M = (0, c.e7)([J.Z], () => null != s ? J.Z.findActivity(s, e => e.type === eu.IIU.PLAYING) : null),
    L = null != g && g.ownerId === s && g.state !== eu.jm8.ENDED,
    U = (0, c.e7)([et.default, $.Z], () => null != f ? (0, P.F6)(f, et.default, $.Z) : true),
    V = (0, B.Z)(),
    [H, er] = i.useState(false),
    eo = (0, c.e7)([G.Z], () => G.Z.getWindowOpen(eu.KJ3.ACTIVITY_POPOUT)),
    {
      hasAlreadyLinked: ea
    } = (0, C.F)(S),
    {
      isQuestBarEmpty: es,
      hasLoadedQuestBar: ec
    } = (0, F.Ws)({
      location: ef.dr.CONFLICT_CHECKS
    }),
    ed = el.Z.useConfig({
      location: "RunningGameCard"
    }).enabled;
  return (0, r.jsx)(ey, (t = eb({}, a), n = n = {
    guildId: o,
    canGoLive: A || w || true !== I,
    activity: M,
    embeddedActivity: _,
    userId: s,
    runningGame: null != I ? I : u,
    application: S,
    useReducedMotion: b,
    isStreaming: L,
    channel: f,
    canStream: x,
    stream: g,
    streamMetadata: m,
    channelName: U,
    guildForConnectedChannel: h,
    streamQualityIndicator: V,
    isForceShowSharingPopout: H,
    setIsForceShowSharingPopout: er,
    isActivityPopoutOpen: eo,
    hasAlreadyLinked: ea,
    blockAccountLinkDismissibleContent: !ec || !es,
    accountLinkExperimentEnabled: ed
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