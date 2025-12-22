/** Chunk was on 67000 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ew
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk889441 = require("./889441.js"),
  Chunk736409 = require("./736409.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
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
  Chunk165393 = require("./165393.jsx"),
  Chunk989941 = require("./989941.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk231664 = require("./231664.js"),
  Chunk759198 = require("./759198.jsx"),
  Chunk659302 = require("./659302.jsx"),
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
  Chunk689678 = require("./689678.js"),
  Chunk345243 = require("./345243.jsx"),
  Chunk115530 = require("./115530.jsx"),
  Chunk339144 = require("./339144.jsx"),
  Chunk441248 = require("./441248.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk921944 = require("./921944.js"),
  Chunk408491 = require("./408491.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436323 = require("./436323.js");

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      e_(e, t, n[t])
    })
  }
  return e
}

function eP(e, t) {
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
class eZ extends Chunk473749.PureComponent {
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
      className: Chunk436323.sparkleContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Fmz, {
        importData: exports,
        shouldAnimate: !module,
        className: Chunk436323.sparkles
      })
    })
  }
  renderActions() {
    return (0, Chunk54381.jsx)(Chunk339144.J, eP(eI({}, this.props), {
      inviteButtonRef: this.inviteButtonRef
    }))
  }
  renderAccountLinkPopover() {
    let {
      hasAlreadyLinked: e,
      accountLinkCopyConfig: t,
      blockAccountLinkDismissibleContent: n,
      application: i,
      activity: l,
      embeddedActivity: a,
      analyticsContext: o,
      runningGame: c,
      parentAnalyticsLocation: u,
      analyticsLocations: p,
      canStartAuthorization: g,
      accountLinkButtonRef: m,
      startAuthorization: y,
      didStartAuthorization: O
    } = this.props, v = (0, Chunk339144.y)(Chunk473749, Chunk120356, a), j = [];
    return require ? null : (module && Chunk438139 ? Chunk730749 && null == a ? Chunk110924.push(Chunk704215.z.ACCOUNT_LINK_INVITE_FRIENDS) : Chunk110924.push(Chunk704215.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : Chunk570140 && null != Chunk473749 && Chunk110924.push(Chunk704215.z.ACCOUNT_LINK_PROMPT), (0, Chunk54381.jsx)(Chunk243778.ZP, {
      contentTypes: Chunk110924,
      groupName: Chunk921944.R.ACCOUNT_NAME_ZONE,
      bypassAutoDismiss: true,
      children: e => {
        let {
          visibleContent: n,
          markAsDismissed: a
        } = e;
        return n === d.z.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(h.J2, {
          title: eE.intl.string(eE.t["0l2pEt"]),
          body: eE.intl.string(eE.t["DSZUK/"]),
          targetElementRef: this.inviteButtonRef,
          align: "right",
          shouldShow: true,
          onRequestClose: () => a(ej.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eE.intl.string(eE.t.YdkBCH),
            onClick: () => {
              var e;
              a(ej.L.TAKE_ACTION), s()(null != l, "Received null activity"), ed.default.track(eO.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "invite_to_game",
                game_id: null != (e = null == c ? true : c.id) ? e : null,
                application_id: l.application_id
              }), (0, T.v)(u, T.d.INVITE), ed.default.track(eO.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: l.application_id,
                location: o.location
              }), (0, b.h7)(l, false)
            }
          }]
        }) : n === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(h.J2, {
          title: eE.intl.string(eE.t.MxAlrB),
          body: eE.intl.string(eE.t["/UTTEg"]),
          targetElementRef: this.accountLinkUpsellTargetRef,
          position: "top",
          align: "left",
          caretConfig: {
            align: "start"
          },
          actions: [{
            text: eE.intl.string(eE.t.aRIFWD),
            onClick: () => {
              a(ej.L.TAKE_ACTION), window.open(ef.Z.getArticleURL(eO.BhN.IN_GAME_FEATURES), "_blank")
            }
          }],
          shouldShow: true,
          onRequestClose: () => a(ej.L.USER_DISMISS)
        }) : n === d.z.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(h.J2, {
          graphic: {
            type: "dynamic",
            component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
            props: {
              application: i
            }
          },
          title: eE.intl.formatToPlainString(t.altTitle ? eE.t.hUbQT2 : eE.t["lo6H6+"], {
            gameName: i.name
          }),
          body: eE.intl.string(t.altBody ? eE.t["JKqu+4"] : eE.t.qYAzOp),
          targetElementRef: m,
          align: "right",
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => a(ej.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eE.intl.string(t.altCta ? eE.t.jynBQ5 : eE.t.lw71Nf),
            onClick: () => {
              a(ej.L.TAKE_ACTION), y({
                analyticsLocations: p
              })
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
      className: Chunk436323.gameWrapper,
      ref: this.accountLinkUpsellTargetRef,
      children: [module ? (0, Chunk54381.jsx)(Chunk165393.Z, {
        title: Chunk120356,
        icon: null == exports ? true : exports.sourceIcon
      }) : (0, Chunk54381.jsx)(Chunk194082.ZP, {
        look: Chunk194082.ZP.Looks.GRAY,
        size: Chunk194082.ZP.Sizes.SMALL,
        className: Chunk436323.liveIndicator
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk436323.info,
        children: [(0, Chunk54381.jsx)(Chunk115530.Z, {
          children: Chunk473749
        }), null != require && (0, Chunk54381.jsxs)("div", {
          className: Chunk436323.perksDemoContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.SrA, {
            size: "xxs",
            color: Chunk436774.JX.PREMIUM_TIER_2
          }), (0, Chunk54381.jsx)(Chunk759198.Z, {
            className: Chunk436323.perksDemoText,
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
      guildForConnectedChannel: a,
      isForceShowSharingPopout: o,
      setIsForceShowSharingPopout: s
    } = this.props;
    if (null == require || null == exports) return null;
    let c = {
        start: require.connectedSince
      },
      u = Chunk120356;
    null != a && null != Chunk473749 ? (e = Chunk981631.Z5c.CHANNEL(a.id, Chunk473749.id), u = "".concat(Chunk442837, " / ").concat(a.name)) : null != Chunk473749 && (e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, Chunk473749.id));
    let d = (0, Chunk54381.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleChannelLinkClick,
        children: (0, Chunk54381.jsx)(Chunk345243.Z, {
          className: Chunk436323.channel,
          children: Chunk442837
        })
      }),
      f = (0, Chunk54381.jsx)(Chunk690221.Z, {
        href: module,
        onClick: this.handleApplicationLinkClick,
        children: (0, Chunk54381.jsx)(Chunk115530.Z, {
          className: Chunk436323.underlineOnHover,
          children: exports.name
        })
      }),
      h = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
          className: Chunk436323.gameIcon,
          game: exports,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk54381.jsx)(Chunk736409.j, {
          popoutTargetRef: this.activityPopoutTargetRef,
          isForceShowSharingPopout: Chunk512722,
          setIsForceShowSharingPopout: s,
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk436323.info,
            children: [Chunk198168, null != Chunk473749 && (0, Chunk131704.Qm)(Chunk473749.type) ? Chunk704215 : (0, Chunk54381.jsx)(eN, {
              timestamps: Chunk907331
            })]
          })
        })]
      });
    return (0, Chunk54381.jsx)("div", {
      className: Chunk436323.gameWrapper,
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
        className: Chunk436323.frameApplicationNameTitleClickable,
        children: (0, Chunk54381.jsx)(Chunk115530.Z, {
          className: Chunk436323.underlineOnHover,
          children: module.name
        })
      }),
      l = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
          className: Chunk436323.gameIcon,
          game: module,
          size: Chunk925329.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk436323.info,
          children: [Chunk473749, (0, Chunk54381.jsx)(eN, {
            timestamps: require
          })]
        })]
      });
    return (0, Chunk54381.jsx)("div", {
      className: Chunk436323.gameWrapper,
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
      streamMetadata: o,
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
      className: a()(Chunk436323.panel, Chunk442837),
      ref: this.activityPopoutTargetRef,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk436323.body,
        children: [Chunk704215(), this.renderActions(), this.renderAccountLinkPopover()]
      })
    })
  }
  constructor(...e) {
    super(...e), e_(this, "activityPopoutTargetRef", i.createRef()), e_(this, "accountLinkUpsellTargetRef", i.createRef()), e_(this, "inviteButtonRef", i.createRef()), e_(this, "handleApplicationLinkClick", () => {
      let {
        isActivityPopoutOpen: e
      } = this.props;
      this.handleChannelLinkClick(), e && g.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      })
    }), e_(this, "handleChannelLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n,
        isActivityPopoutOpen: r
      } = this.props;
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), y.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eO.ME, t.id), !r && ((0, J.vd)(t.type) && m.Z.selectParticipant(t.id, (0, w.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, J.Qm)(t.type) && (0, E.tg)(ev.Ez.PANEL))
    }), e_(this, "handleFrameLinkClick", () => {
      let {
        frame: e
      } = this.props;
      s()(null != e, "Frame cannot be null during navigation click"), k.Z.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: eC.U.FOCUSED
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
  let a = (0, u.e7)([ee.default], () => ee.default.getId()),
    o = (0, u.e7)([U.ZP, eu.Z], () => (0, z.Z)(U.ZP, eu.Z)),
    s = (0, u.e7)([es.Z, et.Z], () => et.Z.getChannel(es.Z.getVoiceChannelId())),
    d = (0, u.e7)([S.ZP], () => S.ZP.getConnectedActivityChannelId()),
    f = (0, u.e7)([et.Z], () => et.Z.getChannel(d)),
    h = (0, u.e7)([er.Z], () => er.Z.getGuild(null == f ? true : f.guild_id)),
    [p, g] = (0, u.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
    b = (0, u.e7)([C.Z], () => C.Z.useReducedMotion),
    m = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
    y = (0, u.e7)([G.Z], () => G.Z.getConnectedFrame()),
    O = (0, u.e7)([er.Z, el.Z, en.ZP], () => null != s ? F.JL(s, er.Z, el.Z, false) : null != n && F.h_(en.ZP.getChannels(n), er.Z, el.Z).length > 0),
    [v] = (0, Z.Z)([null != (t = null != g && null != g.id ? g.id : null != o && null != o.id ? o.id : null != m ? m.applicationId : null != y ? y.applicationId : true) ? t : ""]),
    E = (0, u.e7)([D.Z], () => D.Z.getFakeGameData()),
    I = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
    w = (0, _.Z)() && null != I && (0, x.R)(),
    T = (0, u.e7)([ei.Z], () => (0, V.Z)(ei.Z) && (0, eh.isWindows)()),
    R = (0, u.e7)([ea.Z], () => null != a ? ea.Z.findActivity(a, e => e.type === eO.IIU.PLAYING) : null),
    M = null != p && p.ownerId === a && p.state !== eO.jm8.ENDED,
    L = (0, u.e7)([ec.default, eo.Z], () => null != f ? (0, A.F6)(f, ec.default, eo.Z) : true),
    k = (0, q.Z)(),
    [B, H] = i.useState(false),
    W = (0, u.e7)([Y.Z], () => Y.Z.getWindowOpen(eO.KJ3.ACTIVITY_POPOUT)),
    {
      hasAlreadyLinked: K,
      canStartAuthorization: Q,
      connectionApp: J,
      startAuthorization: ef
    } = (0, N.FG)(v, {
      allowedFlows: [N.ro.RPC, N.ro.WEB]
    }),
    [eg, eb] = i.useState(false),
    em = (0, j.Z)(null == v ? true : v.id);
  i.useEffect(() => {
    em !== (null == v ? true : v.id) && eb(false)
  }, [v, em]);
  let {
    isQuestBarEmpty: ey,
    hasLoadedQuestBar: ev
  } = (0, X.Ws)({
    location: ex.dr.CONFLICT_CHECKS
  }), {
    parentAnalyticsLocation: ej,
    analyticsLocations: eC
  } = (0, P.ZP)(), eE = ep.Z.useConfig({
    location: "ActivityPanelGameCard"
  }), eS = (0, c.O)(e => {
    if (e && null != J) {
      var t;
      ed.default.track(eO.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
        game_id: null != (t = null == o ? true : o.id) ? t : null,
        application_id: J.id
      })
    }
  });
  return (0, r.jsx)(eZ, eP(eI({}, l), {
    guildId: n,
    canGoLive: T || w || true !== E,
    activity: R,
    embeddedActivity: m,
    frame: y,
    userId: a,
    runningGame: null != E ? E : o,
    application: v,
    useReducedMotion: b,
    isStreaming: M,
    channel: f,
    canStream: O,
    stream: p,
    streamMetadata: g,
    channelName: L,
    guildForConnectedChannel: h,
    streamQualityIndicator: k,
    isForceShowSharingPopout: B,
    setIsForceShowSharingPopout: H,
    isActivityPopoutOpen: W,
    hasAlreadyLinked: K,
    blockAccountLinkDismissibleContent: !ev || !ey,
    accountLinkCopyConfig: eE,
    parentAnalyticsLocation: ej,
    analyticsLocations: eC,
    canStartAuthorization: Q,
    accountLinkButtonRef: eS,
    startAuthorization: function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return eb(true), ef(...t)
    },
    didStartAuthorization: eg,
    connectionApp: J
  }))
})