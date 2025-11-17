/** Chunk was on 65354 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eZ
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk907331 = require("./907331.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk198168 = require("./198168.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk24124 = require("./24124.js"),
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
  Chunk906732 = require("./906732.jsx"),
  Chunk535139 = require("./535139.js"),
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

function eE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eE(e, t, n[t])
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
let eP = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(eh.Z, {
    children: t
  })
});
class eN extends Chunk473749.PureComponent {
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
    return (0, Chunk54381.jsx)("div", {
      className: Chunk800339.sparkleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Fmz, {
        importData: exports,
        shouldAnimate: !module,
        className: Chunk800339.sparkles
      })
    })
  }
  renderActions() {
    return (0, Chunk54381.jsx)(Chunk339144.J, eI(eS({}, this.props), {
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
      parentAnalyticsLocation: u,
      canStartAuthorization: h,
      accountLinkButtonRef: g,
      startAuthorization: b
    } = this.props, _ = (0, Chunk339144.y)(Chunk473749, Chunk120356, o), y = [];
    return require || !module ? null : (exports ? Chunk925549 && null == o ? Chunk438139.push(Chunk704215.z.ACCOUNT_LINK_INVITE_FRIENDS) : Chunk438139.push(Chunk704215.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : Chunk481060 && null != Chunk473749 && Chunk438139.push(Chunk704215.z.ACCOUNT_LINK_PROMPT), (0, Chunk54381.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk438139,
      groupName: Chunk921944.R.ACCOUNT_NAME_ZONE,
      bypassAutoDismiss: true,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        return t === d.z.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(f.J2, {
          title: ex.intl.string(ex.t["0l2pEt"]),
          body: ex.intl.string(ex.t["DSZUK/"]),
          targetElementRef: this.inviteButtonRef,
          align: "right",
          shouldShow: true,
          onRequestClose: () => n(eO.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: ex.intl.string(ex.t.YdkBCH),
            onClick: () => {
              var e;
              n(eO.L.TAKE_ACTION), s()(null != l, "Received null activity"), eu.default.track(e_.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "invite_to_game",
                game_id: null != (e = null == c ? true : c.id) ? e : null,
                application_id: l.application_id
              }), (0, w.v)(u, w.d.INVITE), eu.default.track(e_.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: l.application_id,
                location: a.location
              }), (0, m.h7)(l, false)
            }
          }]
        }) : t === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(f.J2, {
          title: ex.intl.string(ex.t.MxAlrB),
          body: ex.intl.string(ex.t["/UTTEg"]),
          targetElementRef: this.accountLinkUpsellTargetRef,
          position: "top",
          align: "left",
          caretConfig: {
            align: "start"
          },
          actions: [{
            text: ex.intl.string(ex.t.aRIFWD),
            onClick: () => {
              n(eO.L.TAKE_ACTION), window.open(ed.Z.getArticleURL(e_.BhN.IN_GAME_FEATURES), "_blank")
            }
          }],
          shouldShow: true,
          onRequestClose: () => n(eO.L.USER_DISMISS)
        }) : t === d.z.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(f.J2, {
          graphic: {
            type: "dynamic",
            component: p.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
            props: {
              application: i
            }
          },
          title: ex.intl.formatToPlainString(ex.t["lo6H6+"], {
            gameName: i.name
          }),
          body: ex.intl.string(ex.t.qYAzOp),
          targetElementRef: g,
          align: "right",
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => n(eO.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: ex.intl.string(ex.t.lw71Nf),
            onClick: () => {
              n(eO.L.TAKE_ACTION), b()
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
    return (0, Chunk54381.jsx)(Chunk441248.k, {
      isStreaming: module,
      application: exports,
      game: require,
      onClickNotSharing: () => Chunk120356(true),
      isForceShowSharingPopout: Chunk473749,
      setIsForceShowSharingPopout: Chunk120356,
      ref: this.accountLinkUpsellTargetRef,
      popoutTargetRef: this.activityPopoutTargetRef
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
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk800339.gameWrapper,
      ref: this.accountLinkUpsellTargetRef,
      children: [module ? (0, Chunk54381.jsx)(Chunk662304.Z, {
        title: Chunk120356,
        icon: null == exports ? true : exports.sourceIcon
      }) : (0, Chunk54381.jsx)(Chunk194082.ZP, {
        look: Chunk194082.ZP.Looks.GRAY,
        size: Chunk194082.ZP.Sizes.SMALL,
        className: Chunk800339.liveIndicator
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk800339.info,
        children: [(0, Chunk54381.jsx)(Chunk115530.Z, {
          children: Chunk473749
        }), null != require && (0, Chunk54381.jsxs)("div", {
          className: Chunk800339.perksDemoContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.SrA, {
            size: "xxs",
            color: Chunk436774.JX.PREMIUM_TIER_2
          }), (0, Chunk54381.jsx)(Chunk759198.Z, {
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
    null != o && null != Chunk473749 ? (e = Chunk981631.Z5c.CHANNEL(o.id, Chunk473749.id), u = "".concat(Chunk442837, " / ").concat(o.name)) : null != Chunk473749 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk473749.id));
    let d = (0, Chunk54381.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk54381.jsx)(Chunk345243.Z, {
          className: Chunk800339.channel,
          children: Chunk442837
        })
      }),
      p = (0, Chunk54381.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleApplicationLinkClick,
        children: (0, Chunk54381.jsx)(Chunk115530.Z, {
          className: Chunk800339.underlineOnHover,
          children: exports.name
        })
      }),
      f = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
          className: Chunk800339.gameIcon,
          game: exports,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk54381.jsx)(Chunk736409.j, {
          popoutTargetRef: this.activityPopoutTargetRef,
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: s,
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk800339.info,
            children: [Chunk198168, null != Chunk473749 && (0, Chunk131704.Qm)(Chunk473749.type) ? Chunk704215 : (0, Chunk54381.jsx)(eP, {
              timestamps: Chunk907331
            })]
          })
        })]
      });
    return (0, Chunk54381.jsx)("div", {
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
      i = (0, Chunk54381.jsx)(Chunk481060.P3F, {
        onClick: this.handleFrameLinkClick,
        onMouseDown: e => {
          e.stopPropagation()
        },
        className: Chunk800339.frameApplicationNameTitleClickable,
        children: (0, Chunk54381.jsx)(Chunk115530.Z, {
          className: Chunk800339.underlineOnHover,
          children: module.name
        })
      }),
      l = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
          className: Chunk800339.gameIcon,
          game: module,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk800339.info,
          children: [Chunk473749, (0, Chunk54381.jsx)(eP, {
            timestamps: require
          })]
        })]
      });
    return (0, Chunk54381.jsx)("div", {
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
    if (!Chunk120356 && (!(0, Chunk339144.y)(s, Chunk907331, exports) && ! function(e) {
        let {
          application: t,
          frame: n
        } = e;
        return null != t && null != n && n.applicationId === t.id
      }({
        application: s,
        frame: require
      }) && !module || null == Chunk473749 && null == exports && null == require)) return null;
    let d = () => null == Chunk473749 || Chunk120356 && (null == Chunk512722 ? true : Chunk512722.pid) == null ? null != exports ? this.renderEmbeddedActivity() : null != require ? this.renderFrame() : this.renderScreenshare() : this.renderGame();
    return (0, Chunk54381.jsx)("div", {
      className: o()(Chunk800339.panel, Chunk442837),
      ref: this.activityPopoutTargetRef,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk800339.body,
        children: [Chunk704215(), this.renderActions(), this.renderAccountLinkPopover()]
      })
    })
  }
  constructor(...e) {
    super(...e), eE(this, "activityPopoutTargetRef", i.createRef()), eE(this, "accountLinkUpsellTargetRef", i.createRef()), eE(this, "inviteButtonRef", i.createRef()), eE(this, "handleApplicationLinkClick", () => {
      let {
        isActivityPopoutOpen: e
      } = this.props;
      this.handleChannelLinkClick(), e && g.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      })
    }), eE(this, "handleChannelLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n,
        isActivityPopoutOpen: r
      } = this.props;
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), _.Z.channelListScrollTo(null != (e = t.guild_id) ? e : e_.ME, t.id), !r && ((0, Q.vd)(t.type) && b.Z.selectParticipant(t.id, (0, Z.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, Q.Qm)(t.type) && (0, x.tg)(ey.Ez.PANEL))
    }), eE(this, "handleFrameLinkClick", () => {
      let {
        frame: e
      } = this.props;
      s()(null != e, "Frame cannot be null during navigation click"), M.Z.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: ev.U.FOCUSED
      })
    })
  }
}
let eZ = (0, Chunk730749.Z)(function(e) {
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
  let o = (0, u.e7)([$.default], () => $.default.getId()),
    a = (0, u.e7)([G.ZP, ec.Z], () => (0, z.Z)(G.ZP, ec.Z)),
    s = (0, u.e7)([ea.Z, ee.Z], () => ee.Z.getChannel(ea.Z.getVoiceChannelId())),
    d = (0, u.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
    p = (0, u.e7)([ee.Z], () => ee.Z.getChannel(d)),
    f = (0, u.e7)([en.Z], () => en.Z.getGuild(null == p ? true : p.guild_id)),
    [h, g] = (0, u.Wu)([J.Z], () => [J.Z.getCurrentUserActiveStream(), J.Z.getStreamerActiveStreamMetadata()]),
    m = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
    b = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
    _ = (0, u.e7)([k.Z], () => k.Z.getConnectedFrame()),
    y = (0, u.e7)([en.Z, ei.Z, et.ZP], () => null != s ? B.JL(s, en.Z, ei.Z, false) : null != n && B.h_(et.ZP.getChannels(n), en.Z, ei.Z).length > 0),
    [O] = (0, N.Z)([null != (t = null != g && null != g.id ? g.id : null != a && null != a.id ? a.id : null != b ? b.applicationId : null != _ ? _.applicationId : true) ? t : ""]),
    x = (0, u.e7)([R.Z], () => R.Z.getFakeGameData()),
    S = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
    Z = (0, E.Z)() && null != S && (0, j.R)(),
    w = (0, u.e7)([er.Z], () => (0, F.Z)(er.Z) && (0, ep.isWindows)()),
    A = (0, u.e7)([el.Z], () => null != o ? el.Z.findActivity(o, e => e.type === e_.IIU.PLAYING) : null),
    D = null != h && h.ownerId === o && h.state !== e_.jm8.ENDED,
    L = (0, u.e7)([es.default, eo.Z], () => null != p ? (0, T.F6)(p, es.default, eo.Z) : true),
    M = (0, Y.Z)(),
    [U, V] = i.useState(false),
    H = (0, u.e7)([K.Z], () => K.Z.getWindowOpen(e_.KJ3.ACTIVITY_POPOUT)),
    {
      hasAlreadyLinked: W,
      canStartAuthorization: q,
      connectionApp: Q,
      startAuthorization: ed
    } = (0, P.F)(O, {
      allowedFlows: [P.r.RPC, P.r.WEB]
    }),
    {
      isQuestBarEmpty: eh,
      hasLoadedQuestBar: eg
    } = (0, X.Ws)({
      location: ej.dr.CONFLICT_CHECKS
    }),
    em = ef.Z.useConfig({
      location: "RunningGameCard"
    }).enabled,
    {
      parentAnalyticsLocation: eb
    } = (0, I.ZP)(),
    ey = (0, c.O)(e => {
      if (e && null != Q) {
        var t;
        eu.default.track(e_.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
          game_id: null != (t = null == a ? true : a.id) ? t : null,
          application_id: Q.id
        })
      }
    });
  return (0, r.jsx)(eN, eI(eS({}, l), {
    guildId: n,
    canGoLive: w || Z || true !== x,
    activity: A,
    embeddedActivity: b,
    frame: _,
    userId: o,
    runningGame: null != x ? x : a,
    application: O,
    useReducedMotion: m,
    isStreaming: D,
    channel: p,
    canStream: y,
    stream: h,
    streamMetadata: g,
    channelName: L,
    guildForConnectedChannel: f,
    streamQualityIndicator: M,
    isForceShowSharingPopout: U,
    setIsForceShowSharingPopout: V,
    isActivityPopoutOpen: H,
    hasAlreadyLinked: W,
    blockAccountLinkDismissibleContent: !eg || !eh,
    accountLinkExperimentEnabled: em,
    parentAnalyticsLocation: eb,
    canStartAuthorization: q,
    accountLinkButtonRef: ey,
    startAuthorization: ed
  }))
})