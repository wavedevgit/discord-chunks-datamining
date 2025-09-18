/** Chunk was on 11160 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ew
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk198168 = require("./198168.jsx"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk24124 = require("./24124.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk434650 = require("./434650.js"),
  Chunk607070 = require("./607070.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk889441 = require("./889441.js"),
  Chunk736409 = require("./736409.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk20471 = require("./20471.js"),
  Chunk835473 = require("./835473.js"),
  Chunk413523 = require("./413523.js"),
  Chunk522651 = require("./522651.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk550532 = require("./550532.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
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
  Chunk626135 = require("./626135.js"),
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
  Chunk408491 = require("./408491.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800339 = require("./800339.js");

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eS(e, t, n[t])
    })
  }
  return e
}

function eI(e, t) {
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
let eN = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(eg.Z, {
    children: t
  })
});
class eZ extends Chunk647438.PureComponent {
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
    return (0, Chunk951288.jsx)(Chunk339144.J, eI(eP({}, this.props), {
      inviteButtonRef: this.inviteButtonRef
    }))
  }
  renderAccountLinkPopover() {
    let {
      accountLinkExperimentEnabled: e,
      hasAlreadyLinked: t,
      blockAccountLinkDismissibleContent: n,
      application: i,
      activity: l,
      embeddedActivity: o,
      analyticsContext: a,
      runningGame: c,
      parentAnalyticsLocation: d,
      canStartAuthorization: h,
      accountLinkButtonRef: g,
      startAuthorization: b
    } = this.props, O = (0, Chunk339144.y)(Chunk647438, Chunk120356, o), y = [];
    return require || !module ? null : (exports ? Chunk925549 && null == o ? Chunk438139.push(Chunk704215.z.ACCOUNT_LINK_INVITE_FRIENDS) : Chunk438139.push(Chunk704215.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : Chunk481060 && null != Chunk647438 && Chunk438139.push(Chunk704215.z.ACCOUNT_LINK_PROMPT), (0, Chunk951288.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk438139,
      groupName: Chunk921944.R.ACCOUNT_NAME_ZONE,
      bypassAutoDismiss: true,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        return t === u.z.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(f.J2, {
          title: eC.intl.string(eC.t["0l2pEh"]),
          body: eC.intl.string(eC.t.DSZUKy),
          targetElementRef: this.inviteButtonRef,
          align: "right",
          shouldShow: true,
          onRequestClose: () => n(ev.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eC.intl.string(eC.t.YdkBCA),
            onClick: () => {
              var e;
              n(ev.L.TAKE_ACTION), s()(null != l, "Received null activity"), ed.default.track(ey.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "invite_to_game",
                game_id: null != (e = null == c ? true : c.id) ? e : null,
                application_id: l.application_id
              }), (0, T.v)(d, T.d.INVITE), ed.default.track(ey.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: l.application_id,
                location: a.location
              }), (0, m.h7)(l, false)
            }
          }]
        }) : t === u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(f.J2, {
          title: eC.intl.string(eC.t.MxAlrK),
          body: eC.intl.string(eC.t["/UTTEh"]),
          targetElementRef: this.accountLinkUpsellTargetRef,
          position: "top",
          align: "left",
          caretConfig: {
            align: "start"
          },
          actions: [{
            text: eC.intl.string(eC.t.aRIFWF),
            onClick: () => {
              n(ev.L.TAKE_ACTION), window.open(ep.Z.getArticleURL(ey.BhN.IN_GAME_FEATURES), "_blank")
            }
          }],
          shouldShow: true,
          onRequestClose: () => n(ev.L.USER_DISMISS)
        }) : t === u.z.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(f.J2, {
          graphic: {
            type: "dynamic",
            component: p.P3.ACCOUNT_LINK_DISPLAY,
            props: {
              application: i
            }
          },
          title: eC.intl.formatToPlainString(eC.t["lo6H6+"], {
            gameName: i.name
          }),
          body: eC.intl.string(eC.t.qYAzOj),
          targetElementRef: g,
          align: "right",
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => n(ev.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eC.intl.string(eC.t.lw71NT),
            onClick: () => {
              n(ev.L.TAKE_ACTION), b()
            }
          }]
        }) : true
      }
    }))
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
      className: Chunk800339.gameWrapper,
      ref: this.accountLinkUpsellTargetRef,
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
    null != o && null != Chunk647438 ? (e = Chunk981631.Z5c.CHANNEL(o.id, Chunk647438.id), u = "".concat(Chunk704215, " / ").concat(o.name)) : null != Chunk647438 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk647438.id));
    let d = (0, Chunk951288.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk951288.jsx)(Chunk345243.Z, {
          className: Chunk800339.channel,
          children: Chunk704215
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
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk951288.jsx)(Chunk736409.j, {
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: s,
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk800339.info,
            children: [Chunk198168, null != Chunk647438 && (0, Chunk131704.Qm)(Chunk647438.type) ? Chunk1561 : (0, Chunk951288.jsx)(eN, {
              timestamps: Chunk442837
            })]
          })
        })]
      });
    return (0, Chunk951288.jsx)("div", {
      className: Chunk800339.gameWrapper,
      children: Chunk907862
    })
  }
  renderFrame() {
    let {
      application: e,
      frame: t
    } = this.props;
    if (null == exports || null == module) return null;
    let n = {
        start: exports.connectedSince
      },
      i = (0, Chunk951288.jsx)(Chunk1561.P, {
        onClick: this.handleFrameLinkClick,
        onMouseDown: e => {
          e.stopPropagation()
        },
        className: Chunk800339.frameApplicationNameTitleClickable,
        children: (0, Chunk951288.jsx)(Chunk115530.Z, {
          className: Chunk800339.underlineOnHover,
          children: module.name
        })
      }),
      l = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk925329.Z, {
          className: Chunk800339.gameIcon,
          game: module,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk800339.info,
          children: [Chunk647438, (0, Chunk951288.jsx)(eN, {
            timestamps: require
          })]
        })]
      });
    return (0, Chunk951288.jsx)("div", {
      className: Chunk800339.gameWrapper,
      children: Chunk120356
    })
  }
  render() {
    let {
      canGoLive: e,
      embeddedActivity: t,
      frame: n,
      runningGame: i,
      isStreaming: l,
      streamMetadata: a,
      application: s,
      activity: c,
      className: u
    } = this.props;
    if (!Chunk120356 && (!(0, Chunk339144.y)(s, Chunk442837, exports) && ! function(e) {
        let {
          application: t,
          frame: n
        } = e;
        return null != t && null != n && n.applicationId === t.id
      }({
        application: s,
        frame: require
      }) && !module || null == Chunk647438 && null == exports && null == require)) return null;
    let d = () => null == Chunk647438 || Chunk120356 && (null == Chunk512722 ? true : Chunk512722.pid) == null ? null != exports ? this.renderEmbeddedActivity() : null != require ? this.renderFrame() : this.renderScreenshare() : this.renderGame();
    return (0, Chunk951288.jsx)("div", {
      className: o()(Chunk800339.panel, Chunk704215),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk800339.body,
        children: [Chunk1561(), this.renderActions(), this.renderAccountLinkPopover()]
      })
    })
  }
  constructor(...e) {
    super(...e), eS(this, "activityPopoutTargetRef", i.createRef()), eS(this, "accountLinkUpsellTargetRef", i.createRef()), eS(this, "inviteButtonRef", i.createRef()), eS(this, "handleApplicationLinkClick", () => {
      let {
        isActivityPopoutOpen: e
      } = this.props;
      this.handleChannelLinkClick(), e && g.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      })
    }), eS(this, "handleChannelLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n,
        isActivityPopoutOpen: r
      } = this.props;
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), O.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ey.ME, t.id), !r && ((0, J.vd)(t.type) && b.Z.selectParticipant(t.id, (0, w.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, J.Qm)(t.type) && (0, C.tg)(e_.Ez.PANEL))
    }), eS(this, "handleFrameLinkClick", () => {
      let {
        frame: e
      } = this.props;
      s()(null != e, "Frame cannot be null during navigation click"), k.Z.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: ej.U.FOCUSED
      })
    })
  }
}
let ew = (0, Chunk730749.Z)(function(e) {
  var t, {
      guildId: n
    } = e,
    l = function(e, t) {
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
  let o = (0, c.e7)([ee.default], () => ee.default.getId()),
    a = (0, c.e7)([G.ZP, eu.Z], () => (0, W.Z)(G.ZP, eu.Z)),
    s = (0, c.e7)([es.Z, et.Z], () => et.Z.getChannel(es.Z.getVoiceChannelId())),
    u = (0, c.e7)([E.ZP], () => E.ZP.getConnectedActivityChannelId()),
    d = (0, c.e7)([et.Z], () => et.Z.getChannel(u)),
    p = (0, c.e7)([er.Z], () => er.Z.getGuild(null == d ? true : d.guild_id)),
    [f, h] = (0, c.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
    g = (0, c.e7)([j.Z], () => j.Z.useReducedMotion),
    m = (0, c.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
    b = (0, c.e7)([U.Z], () => U.Z.getConnectedFrame()),
    O = (0, c.e7)([er.Z, el.Z, en.ZP], () => null != s ? V.JL(s, er.Z, el.Z, false) : null != n && V.h_(en.ZP.getChannels(n), er.Z, el.Z).length > 0),
    [y] = (0, Z.Z)([null != (t = null != h && null != h.id ? h.id : null != a && null != a.id ? a.id : null != m ? m.applicationId : null != b ? b.applicationId : true) ? t : ""]),
    _ = (0, c.e7)([D.Z], () => D.Z.getFakeGameData()),
    C = (0, c.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
    P = (0, S.Z)() && null != C && (0, x.R)(),
    w = (0, c.e7)([ei.Z], () => (0, F.Z)(ei.Z) && (0, ef.isWindows)()),
    T = (0, c.e7)([eo.Z], () => null != o ? eo.Z.findActivity(o, e => e.type === ey.IIU.PLAYING) : null),
    R = null != f && f.ownerId === o && f.state !== ey.jm8.ENDED,
    L = (0, c.e7)([ec.default, ea.Z], () => null != d ? (0, A.F6)(d, ec.default, ea.Z) : true),
    M = (0, q.Z)(),
    [k, B] = i.useState(false),
    H = (0, c.e7)([Y.Z], () => Y.Z.getWindowOpen(ey.KJ3.ACTIVITY_POPOUT)),
    {
      hasAlreadyLinked: z,
      canStartAuthorization: K,
      connectionApp: X,
      startAuthorization: J
    } = (0, N.F)(y),
    {
      isQuestBarEmpty: ep,
      hasLoadedQuestBar: eg
    } = (0, Q.Ws)({
      location: ex.dr.CONFLICT_CHECKS
    }),
    em = eh.Z.useConfig({
      location: "RunningGameCard"
    }).enabled,
    {
      parentAnalyticsLocation: eb
    } = (0, I.ZP)(),
    eO = (0, v.O)(e => {
      if (e && null != X) {
        var t;
        ed.default.track(ey.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
          game_id: null != (t = null == a ? true : a.id) ? t : null,
          application_id: X.id
        })
      }
    });
  return (0, r.jsx)(eZ, eI(eP({}, l), {
    guildId: n,
    canGoLive: w || P || true !== _,
    activity: T,
    embeddedActivity: m,
    frame: b,
    userId: o,
    runningGame: null != _ ? _ : a,
    application: y,
    useReducedMotion: g,
    isStreaming: R,
    channel: d,
    canStream: O,
    stream: f,
    streamMetadata: h,
    channelName: L,
    guildForConnectedChannel: p,
    streamQualityIndicator: M,
    isForceShowSharingPopout: k,
    setIsForceShowSharingPopout: B,
    isActivityPopoutOpen: H,
    hasAlreadyLinked: z,
    blockAccountLinkDismissibleContent: !eg || !ep,
    accountLinkExperimentEnabled: em,
    parentAnalyticsLocation: eb,
    canStartAuthorization: K,
    accountLinkButtonRef: eO,
    startAuthorization: J
  }))
})