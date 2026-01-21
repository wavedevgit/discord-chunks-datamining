/** Chunk was on 82124 **/
/** chunk id: 840780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eN
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

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function e_(e) {
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
let eP = (0, Chunk438139.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(eh.Z, {
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
      } = await n.e("5217").then(n.t.bind(n, 801048, 19));
      return e
    }
    return (0, r.jsx)("div", {
      className: eE.sparkleContainer,
      children: (0, r.jsx)(h.Fmz, {
        importData: t,
        shouldAnimate: !e,
        className: eE.sparkles
      })
    })
  }
  renderActions() {
    return (0, r.jsx)(em.J, eI(e_({}, this.props), {
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
      analyticsLocations: h,
      canStartAuthorization: g,
      accountLinkButtonRef: b,
      startAuthorization: y,
      didStartAuthorization: v
    } = this.props, O = (0, em.y)(i, l, a), j = [];
    return n ? null : (e && v ? O && null == a ? j.push(d.z.ACCOUNT_LINK_INVITE_FRIENDS) : j.push(d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : g && null != i && j.push(d.z.ACCOUNT_LINK_PROMPT), (0, r.jsx)(k.ZP, {
      contentTypes: j,
      groupName: eO.R.ACCOUNT_NAME_ZONE,
      bypassAutoDismiss: true,
      children: e => {
        let {
          visibleContent: n,
          markAsDismissed: a
        } = e;
        return n === d.z.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(f.J2, {
          title: eC.intl.string(eC.t["0l2pEt"]),
          body: eC.intl.string(eC.t["DSZUK/"]),
          targetElementRef: this.inviteButtonRef,
          align: "right",
          shouldShow: true,
          onRequestClose: () => a(eO.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eC.intl.string(eC.t.YdkBCH),
            onClick: () => {
              var e;
              a(eO.L.TAKE_ACTION), s()(null != l, "Received null activity"), eu.default.track(ey.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "invite_to_game",
                game_id: null != (e = null == c ? true : c.id) ? e : null,
                application_id: l.application_id
              }), (0, A.v)(u, A.d.INVITE), eu.default.track(ey.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: l.application_id,
                location: o.location
              }), (0, m.h7)(l, false)
            }
          }]
        }) : n === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(f.J2, {
          title: eC.intl.string(eC.t.MxAlrB),
          body: eC.intl.string(eC.t["/UTTEg"]),
          targetElementRef: this.accountLinkUpsellTargetRef,
          position: "top",
          align: "left",
          caretConfig: {
            align: "start"
          },
          actions: [{
            text: eC.intl.string(eC.t.aRIFWD),
            onClick: () => {
              a(eO.L.TAKE_ACTION), window.open(ed.Z.getArticleURL(ey.BhN.IN_GAME_FEATURES), "_blank")
            }
          }],
          shouldShow: true,
          onRequestClose: () => a(eO.L.USER_DISMISS)
        }) : n === d.z.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(f.J2, {
          graphic: {
            type: "dynamic",
            component: p.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
            props: {
              application: i
            }
          },
          title: eC.intl.formatToPlainString(t.altTitle ? eC.t.hUbQT2 : eC.t["lo6H6+"], {
            gameName: i.name
          }),
          body: eC.intl.string(t.altBody ? eC.t["JKqu+4"] : eC.t.qYAzOp),
          targetElementRef: b,
          align: "right",
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => a(eO.L.USER_DISMISS),
          caretConfig: {
            align: "end"
          },
          actions: [{
            text: eC.intl.string(t.altCta ? eC.t.jynBQ5 : eC.t.lw71Nf),
            onClick: () => {
              a(eO.L.TAKE_ACTION), y({
                analyticsLocations: h
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
    return (0, r.jsx)(eb.k, {
      isStreaming: e,
      application: t,
      game: n,
      onClickNotSharing: () => l(true),
      isForceShowSharingPopout: i,
      setIsForceShowSharingPopout: l,
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
    } = (0, V.Z)(t);
    return (0, r.jsxs)("div", {
      className: eE.gameWrapper,
      ref: this.accountLinkUpsellTargetRef,
      children: [e ? (0, r.jsx)(z.Z, {
        title: l,
        icon: null == t ? true : t.sourceIcon
      }) : (0, r.jsx)(R.ZP, {
        look: R.ZP.Looks.GRAY,
        size: R.ZP.Sizes.SMALL,
        className: eE.liveIndicator
      }), (0, r.jsxs)("div", {
        className: eE.info,
        children: [(0, r.jsx)(eg.Z, {
          children: i
        }), null != n && (0, r.jsxs)("div", {
          className: eE.perksDemoContainer,
          children: [(0, r.jsx)(h.SrA, {
            size: "xxs",
            color: M.JX.PREMIUM_TIER_2
          }), (0, r.jsx)(X.Z, {
            className: eE.perksDemoText,
            variant: "text-xxs/semibold",
            children: n
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
    if (null == n || null == t) return null;
    let c = {
        start: n.connectedSince
      },
      u = l;
    null != a && null != i ? (e = ey.Z5c.CHANNEL(a.id, i.id), u = "".concat(u, " / ").concat(a.name)) : null != i && (e = ey.Z5c.CHANNEL(ey.ME, i.id));
    let d = (0, r.jsx)(K.Z, {
        href: e,
        onClick: this.handleChannelLinkClick,
        children: (0, r.jsx)(eh.Z, {
          className: eE.channel,
          children: u
        })
      }),
      p = (0, r.jsx)(K.Z, {
        href: e,
        onClick: this.handleApplicationLinkClick,
        children: (0, r.jsx)(eg.Z, {
          className: eE.underlineOnHover,
          children: t.name
        })
      }),
      f = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(B.Z, {
          className: eE.gameIcon,
          game: t,
          size: B.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, r.jsx)(I.j, {
          popoutTargetRef: this.activityPopoutTargetRef,
          isForceShowSharingPopout: o,
          setIsForceShowSharingPopout: s,
          children: (0, r.jsxs)("div", {
            className: eE.info,
            children: [p, null != i && (0, J.Qm)(i.type) ? d : (0, r.jsx)(eP, {
              timestamps: c
            })]
          })
        })]
      });
    return (0, r.jsx)("div", {
      className: eE.gameWrapper,
      children: f
    })
  }
  renderFrame() {
    let {
      application: e,
      frame: t
    } = this.props;
    if (null == t || null == e) return null;
    let n = {
        start: t.connectedSince
      },
      i = (0, r.jsx)(h.P3F, {
        onClick: this.handleFrameLinkClick,
        onMouseDown: e => {
          e.stopPropagation()
        },
        className: eE.frameApplicationNameTitleClickable,
        children: (0, r.jsx)(eg.Z, {
          className: eE.underlineOnHover,
          children: e.name
        })
      }),
      l = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(B.Z, {
          className: eE.gameIcon,
          game: e,
          size: B.A.SMALL,
          ref: this.accountLinkUpsellTargetRef
        }), (0, r.jsxs)("div", {
          className: eE.info,
          children: [i, (0, r.jsx)(eP, {
            timestamps: n
          })]
        })]
      });
    return (0, r.jsx)("div", {
      className: eE.gameWrapper,
      children: l
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
    if (!l && (!(0, em.y)(s, c, t) && ! function(e) {
        let {
          application: t,
          frame: n
        } = e;
        return null != t && null != n && n.applicationId === t.id
      }({
        application: s,
        frame: n
      }) && !e || null == i && null == t && null == n)) return null;
    let d = () => null == i || l && (null == o ? true : o.pid) == null ? null != t ? this.renderEmbeddedActivity() : null != n ? this.renderFrame() : this.renderScreenshare() : this.renderGame();
    return (0, r.jsx)("div", {
      className: a()(eE.panel, u),
      ref: this.activityPopoutTargetRef,
      children: (0, r.jsxs)("div", {
        className: eE.body,
        children: [d(), this.renderActions(), this.renderAccountLinkPopover()]
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
      s()(null != n, "Activity cannot be null during navigation click"), s()(null != t, "Channel cannot be null during navigation click"), y.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ey.ME, t.id), !r && ((0, J.vd)(t.type) && b.Z.selectParticipant(t.id, (0, T.gN)({
        applicationId: n.applicationId,
        instanceId: n.compositeInstanceId
      })), (0, J.Qm)(t.type) && (0, E.tg)(ev.Ez.PANEL))
    }), eS(this, "handleFrameLinkClick", () => {
      let {
        frame: e,
        isActivityPopoutOpen: t
      } = this.props;
      if (s()(null != e, "Frame cannot be null during navigation click"), t) return void g.Z.dispatch({
        type: "ACTIVITY_POPOUT_WINDOW_OPEN"
      });
      L.Z.updateFrameLayoutMode({
        applicationId: e.applicationId,
        layoutMode: ej.U.FOCUSED
      })
    })
  }
}
let eN = (0, Chunk730749.Z)(function(e) {
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
    o = (0, u.e7)([G.ZP, ec.Z], () => (0, W.Z)(G.ZP, ec.Z)),
    s = (0, u.e7)([eo.Z, et.Z], () => et.Z.getChannel(eo.Z.getVoiceChannelId())),
    d = (0, u.e7)([S.ZP], () => S.ZP.getConnectedActivityChannelId()),
    p = (0, u.e7)([et.Z], () => et.Z.getChannel(d)),
    f = (0, u.e7)([en.Z], () => en.Z.getGuild(null == p ? true : p.guild_id)),
    [h, g] = (0, u.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
    m = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
    b = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
    y = (0, u.e7)([U.Z], () => U.Z.getConnectedFrame()),
    v = (0, u.e7)([en.Z, ei.Z], () => null == s || F.JL(s, en.Z, ei.Z, false)),
    [O] = (0, N.Z)([null != (t = null != g && null != g.id ? g.id : null != o && null != o.id ? o.id : null != b ? b.applicationId : null != y ? y.applicationId : true) ? t : ""]),
    E = (0, u.e7)([D.Z], () => D.Z.getFakeGameData()),
    I = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
    T = (0, _.Z)() && null != I && (0, C.R)(),
    A = (0, u.e7)([er.Z], () => (0, H.Z)(er.Z) && (0, ep.isWindows)()),
    R = (0, u.e7)([el.Z], () => null != a ? el.Z.findActivity(a, e => e.type === ey.IIU.PLAYING) : null),
    M = null != h && h.ownerId === a && h.state !== ey.jm8.ENDED,
    k = (0, u.e7)([es.default, ea.Z], () => null != p ? (0, w.F6)(p, es.default, ea.Z) : true),
    L = (0, q.Z)(),
    [B, V] = i.useState(false),
    z = (0, u.e7)([Y.Z], () => Y.Z.getWindowOpen(ey.KJ3.ACTIVITY_POPOUT)),
    {
      hasAlreadyLinked: K,
      canStartAuthorization: X,
      connectionApp: J,
      startAuthorization: ed
    } = (0, Z.FG)(O, {
      allowedFlows: [Z.ro.RPC, Z.ro.WEB]
    }),
    [eh, eg] = i.useState(false),
    em = (0, j.Z)(null == O ? true : O.id);
  i.useEffect(() => {
    em !== (null == O ? true : O.id) && eg(false)
  }, [O, em]);
  let {
    isQuestBarEmpty: eb,
    hasLoadedQuestBar: ev
  } = (0, Q.Ws)({
    location: ex.dr.CONFLICT_CHECKS
  }), {
    parentAnalyticsLocation: eO,
    analyticsLocations: ej
  } = (0, P.ZP)(), eC = ef.Z.useConfig({
    location: "ActivityPanelGameCard"
  }), eE = (0, c.O)(e => {
    if (e && null != J) {
      var t;
      eu.default.track(ey.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
        game_id: null != (t = null == o ? true : o.id) ? t : null,
        application_id: J.id
      })
    }
  });
  return (0, r.jsx)(eZ, eI(e_({}, l), {
    guildId: n,
    canGoLive: A || T || true !== E,
    activity: R,
    embeddedActivity: b,
    frame: y,
    userId: a,
    runningGame: null != E ? E : o,
    application: O,
    useReducedMotion: m,
    isStreaming: M,
    channel: p,
    canStream: v,
    stream: h,
    streamMetadata: g,
    channelName: k,
    guildForConnectedChannel: f,
    streamQualityIndicator: L,
    isForceShowSharingPopout: B,
    setIsForceShowSharingPopout: V,
    isActivityPopoutOpen: z,
    hasAlreadyLinked: K,
    blockAccountLinkDismissibleContent: !ev || !eb,
    accountLinkCopyConfig: eC,
    parentAnalyticsLocation: eO,
    analyticsLocations: ej,
    canStartAuthorization: X,
    accountLinkButtonRef: eE,
    startAuthorization: function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return eg(true), ed(...t)
    },
    didStartAuthorization: eh,
    connectionApp: J
  }))
})