/** Chunk was on 40184 **/
/** chunk id: 1397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk528963 = require("./528963.js"),
  Chunk749210 = require("./749210.js"),
  Chunk607070 = require("./607070.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk881952 = require("./881952.js"),
  Chunk305325 = require("./305325.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk937111 = require("./937111.js"),
  Chunk270801 = require("./270801.jsx"),
  Chunk652730 = require("./652730.js"),
  Chunk41776 = require("./41776.js"),
  Chunk657352 = require("./657352.jsx"),
  Chunk33154 = require("./33154.jsx"),
  Chunk144114 = require("./144114.js"),
  Chunk703656 = require("./703656.js"),
  Chunk210887 = require("./210887.js"),
  Chunk606956 = require("./606956.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk413251 = require("./413251.js"),
  Chunk862679 = require("./862679.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk309957 = require("./309957.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class q extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    module && null == exports && Chunk528963.Z.fetchChannelFollowerStats(require.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: i
    } = this.props;
    i || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
      shouldShowLurkerModeSuccessPopout: true
    })
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: n,
      notPhoneVerified: r,
      notEmailVerified: l,
      newMember: a,
      memberDeadline: o,
      newAccount: s,
      accountDeadline: c,
      theme: d,
      children: p,
      canSendMessages: f,
      channelFollowingUsersSeen: h,
      showLurkerModeUpsellPopout: m,
      showMemberVerificationModal: g,
      useReducedMotion: b,
      isStaff: C,
      guildJoinRequest: v,
      showLinkedLobbyApplicationLoadingIndicator: x,
      requiredLinkedLobbyApplication: O
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: E,
      shouldShowLurkerModeSuccessPopout: j
    } = this.state, S = {
      theme: Chunk893776,
      useReducedMotion: Chunk881952
    };
    if (module && !Chunk749210) {
      if (Chunk657352.message = Chunk388032.intl.string(Chunk388032.t.Hl0Mqh), null != Chunk607070 && Chunk607070 >= 1e3) {
        let e = 1e3 * Math.floor(Chunk607070 / 1e3);
        Chunk657352.subtitle = Chunk388032.intl.formatToPlainString(Chunk388032.t.C5bgrC, {
          count: module.toLocaleString()
        })
      }
      Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t["3aOv+h"]), Chunk657352.onButtonClick = this.handleFollowAnnouncement, exports && (Chunk657352.onSecondaryButtonClick = this.handleJoinServer, Chunk657352.secondaryButtonText = Chunk388032.intl.string(Chunk388032.t.RLch70))
    } else if (require) Chunk657352.message = Chunk388032.intl.string(Chunk388032.t["Eg3/c9"]), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t.fiNVin), Chunk657352.onButtonClick = Chunk693546 ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (Chunk693546) switch (null == Chunk983736 ? true : Chunk983736.applicationStatus) {
        case Chunk246364.wB.SUBMITTED:
          Chunk657352.message = Chunk388032.intl.string(Chunk388032.t["5iLvSx"]), Chunk657352.subtitle = Chunk388032.intl.string(Chunk388032.t.FdsK4h), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t.mqtdmQ), Chunk657352.onButtonClick = this.handleCancelApplication;
          break;
        case Chunk246364.wB.REJECTED:
          Chunk657352.message = Chunk388032.intl.string(Chunk388032.t.lk30cY), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t["8RrsHr"]), Chunk657352.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          Chunk657352.message = Chunk388032.intl.string(Chunk388032.t.rEBKvg), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t["r8/DT+"]), Chunk657352.buttonVariant = "primary", Chunk657352.onButtonClick = this.handleShowMemberVerification
      } else if (Chunk937111 || null == Chunk270801) Chunk473749 && !Chunk305325 ? (Chunk657352.message = Chunk388032.intl.string(Chunk388032.t["2dThMM"]), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t["50gfOv"]), Chunk657352.onButtonClick = this.handleVerifyPhone) : Chunk512722 ? (Chunk657352.message = Chunk388032.intl.string(Chunk388032.t.FkGPS5), Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t.lm1UKt), Chunk657352.onButtonClick = this.handleResendVerification) : a ? (Chunk657352.message = Chunk388032.intl.formatToPlainString(Chunk388032.t.IH7RMF, {
        min: Chunk981631.YeM.MEMBER_AGE
      }), Chunk657352.countdown = Chunk442837) : Chunk885387 && (Chunk657352.message = Chunk388032.intl.formatToPlainString(Chunk388032.t["2JA2GH"], {
        min: Chunk981631.YeM.ACCOUNT_AGE
      }), Chunk657352.countdown = Chunk248514);
      else {
        var _;
        Chunk657352.imageSrc = null != (_ = Chunk270801.getIconURL(Chunk701488.Si.SMALL)) ? Chunk33154 : true, Chunk657352.message = Chunk388032.intl.format(Chunk388032.t.EvDn1D, {
          name: Chunk270801.name
        }), null != Chunk270801.connectionEntrypointUrl && (Chunk657352.buttonText = Chunk388032.intl.string(Chunk388032.t.S0W8Z5), Chunk657352.onButtonClick = () => {
          window.open(Chunk270801.connectionEntrypointUrl, "_blank")
        })
      } return (0, Chunk54381.jsx)(Chunk481060.yRy, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: Chunk41776,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, i.jsx)(k.Z, z(W({}, S), {
        children: (0, i.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), m ? (0, i.jsx)(u.yRy, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: E,
            position: "top",
            children: e => (0, i.jsx)(u.P3F, z(W({
              innerRef: this.upsellTargetRef
            }, e), {
              className: B.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: p
            }))
          }) : p]
        })
      }))
    })
  }
  constructor(...e) {
    super(...e), G(this, "state", {
      submitting: false,
      shouldShowLurkerModeUpsellPopout: false,
      shouldShowLurkerModeSuccessPopout: false
    }), G(this, "textAreaContainerRef", r.createRef()), G(this, "upsellTargetRef", r.createRef()), G(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return a()(null != n, "This guildID cannot be null"), (0, i.jsx)(S.Z, {
        onClose: t,
        guild: n
      })
    }), G(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.Z)({
        title: H.intl.string(H.t.aIz1oV),
        subtitle: H.intl.string(H.t["13tjTU"]),
        variant: "primary",
        confirmText: H.intl.string(H.t["cY+Oob"]),
        onConfirm: () => g.Z.removeGuildJoinRequest(e.id)
      })
    }), G(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, u.ZDy)(async () => {
        let {
          default: t
        } = await n.e("3378").then(n.bind(n, 76075));
        return n => (0, i.jsx)(t, W({
          guildId: e.id
        }, n))
      })
    }), G(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, C.hk)(e.id)
    }), G(this, "handleClaimAccount", () => {
      m.j()
    }), G(this, "handleVerifyPhone", () => {
      (0, u.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, i.jsx)(e, W({
          reason: P.L.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: F.M
      })
    }), G(this, "handleResendVerification", () => {
      var e;
      d.Z.verifyResend();
      let t = null == (e = R.default.getCurrentUser()) ? true : e.email;
      null != t && (0, s.Z)({
        title: H.intl.string(H.t.LykQYk),
        subtitle: H.intl.format(H.t.azKEPy, {
          email: t
        })
      })
    }), G(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), G(this, "handleJoinServer", async () => {
      this.setState({
        submitting: true
      });
      let e = this.props.channel.getGuildId();
      try {
        await f.Z.joinGuild(e, {
          source: U.vtS.CHAT_INPUT_BLOCKER
        })
      } catch (e) {
        this.setState({
          submitting: false
        })
      }
    }), G(this, "handleGoBack", () => {
      this.setState({
        submitting: true
      }), (0, I.s1)().goBack()
    }), G(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, u.ZDy)(async () => {
        let {
          default: t
        } = await n.e("96964").then(n.bind(n, 807007));
        return n => (0, i.jsx)(t, W({
          channel: e
        }, n))
      })
    }), G(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: false
      })
    }), G(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, i.jsx)(_.Z, {
        type: _.s.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), G(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === y.wB.APPROVED;
      if (null == e || null == t || !n || (0, b.d3)(t)) return null;
      let r = () => {
        g.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, i.jsx)(u.u_l, {
        renderModal: t => (0, i.jsx)(O.Z, z(W({}, t), {
          onAccept: r,
          guildName: e.name
        })),
        onCloseRequest: r
      })
    })
  }
}

function K(e) {
  var t, n;
  let {
    channel: r,
    children: l
  } = e, a = r.getGuildId(), s = (0, o.e7)([A.Z], () => A.Z.getGuild(a)), c = (0, o.e7)([w.Z], () => w.Z.getCheck(a)), u = r.type === U.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(U.GuildFeatures.NEWS), d = (0, o.e7)([T.Z], () => u ? T.Z.getFollowerStatsForChannel(r.id) : null), p = (0, o.e7)([j.Z], () => j.Z.isLurking(a)), f = (0, o.e7)([R.default], () => R.default.getCurrentUser()), m = null != (t = null == f ? true : f.isStaff()) && t, g = (0, o.e7)([N.ZP], () => {
    var e, t;
    return null != f && null != (t = null == (e = N.ZP.getMember(a, f.id)) ? true : e.isPending) && t
  }), b = !!(0, v.Dc)(s), C = (0, o.e7)([E.Z], () => E.Z.shouldShowPopout(a)), O = (0, o.e7)([M.Z], () => M.Z.can(U.Plq.SEND_MESSAGES, r)), S = (0, o.e7)([x.Z], () => x.Z.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: _,
    requiredLinkedLobbyApplication: P
  } = (0, L.Z)(r.linkedLobby), I = z(W({}, c), {
    guild: s,
    isLurking: p,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: C,
    showLurkerModeUpsellPopout: p && null != s && D.Uu(U.Plq.SEND_MESSAGES, r),
    theme: Z.Z.theme,
    canSendMessages: O,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: b,
    showMemberVerificationModal: g && b,
    guildJoinRequestStatus: null != (n = null == S ? true : S.applicationStatus) ? n : y.wB.STARTED,
    guildJoinRequest: S,
    showLinkedLobbyApplicationLoadingIndicator: _,
    requiredLinkedLobbyApplication: P,
    useReducedMotion: h.Z.useReducedMotion,
    isStaff: m
  });
  return (0, i.jsx)(q, z(W({}, I), {
    channel: r,
    children: l
  }))
}