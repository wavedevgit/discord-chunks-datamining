/** Chunk was on 34740 **/
/** chunk id: 1397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
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
  Chunk97508 = require("./97508.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      V(e, t, n[t])
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
class W extends Chunk473749.PureComponent {
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
      accountDeadline: u,
      theme: d,
      children: p,
      canSendMessages: h,
      channelFollowingUsersSeen: f,
      showLurkerModeUpsellPopout: m,
      showMemberVerificationModal: g,
      useReducedMotion: b,
      isStaff: C,
      guildJoinRequest: v,
      showLinkedLobbyApplicationLoadingIndicator: _,
      requiredLinkedLobbyApplication: O
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: x,
      shouldShowLurkerModeSuccessPopout: j
    } = this.state, E = {
      theme: Chunk528963,
      useReducedMotion: Chunk305325
    };
    if (module && !Chunk607070) {
      if (Chunk33154.message = Chunk388032.intl.string(Chunk388032.t.Hl0Mqh), null != Chunk391650 && Chunk391650 >= 1e3) {
        let e = 1e3 * Math.floor(Chunk391650 / 1e3);
        Chunk33154.subtitle = Chunk388032.intl.formatToPlainString(Chunk388032.t.C5bgrC, {
          count: module.toLocaleString()
        })
      }
      Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t["3aOv+h"]), Chunk33154.onButtonClick = this.handleFollowAnnouncement, exports && (Chunk33154.onSecondaryButtonClick = this.handleJoinServer, Chunk33154.secondaryButtonText = Chunk388032.intl.string(Chunk388032.t.RLch70))
    } else if (require) Chunk33154.message = Chunk388032.intl.string(Chunk388032.t["Eg3/c9"]), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t.fiNVin), Chunk33154.onButtonClick = Chunk881952 ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (Chunk881952) switch (null == Chunk937111 ? true : Chunk937111.applicationStatus) {
        case Chunk246364.wB.SUBMITTED:
          Chunk33154.message = Chunk388032.intl.string(Chunk388032.t["5iLvSx"]), Chunk33154.subtitle = Chunk388032.intl.string(Chunk388032.t.FdsK4h), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t.mqtdmQ), Chunk33154.onButtonClick = this.handleCancelApplication;
          break;
        case Chunk246364.wB.REJECTED:
          Chunk33154.message = Chunk388032.intl.string(Chunk388032.t.lk30cY), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t["8RrsHr"]), Chunk33154.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          Chunk33154.message = Chunk388032.intl.string(Chunk388032.t.rEBKvg), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t["r8/DT+"]), Chunk33154.buttonVariant = "primary", Chunk33154.onButtonClick = this.handleShowMemberVerification
      } else if (Chunk270801 || null == Chunk652730) Chunk473749 && !Chunk983736 ? (Chunk33154.message = Chunk388032.intl.string(Chunk388032.t["2dThMM"]), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t["50gfOv"]), Chunk33154.onButtonClick = this.handleVerifyPhone) : Chunk512722 ? (Chunk33154.message = Chunk388032.intl.string(Chunk388032.t.FkGPS5), Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t.lm1UKt), Chunk33154.onButtonClick = this.handleResendVerification) : a ? (Chunk33154.message = Chunk388032.intl.formatToPlainString(Chunk388032.t.IH7RMF, {
        min: Chunk981631.YeM.MEMBER_AGE
      }), Chunk33154.countdown = Chunk442837) : Chunk693789 && (Chunk33154.message = Chunk388032.intl.formatToPlainString(Chunk388032.t["2JA2GH"], {
        min: Chunk981631.YeM.ACCOUNT_AGE
      }), Chunk33154.countdown = Chunk893776);
      else {
        var S;
        Chunk33154.imageSrc = null != (S = Chunk652730.getIconURL(Chunk701488.Si.SMALL)) ? Chunk144114 : true, Chunk33154.message = Chunk388032.intl.format(Chunk388032.t.EvDn1D, {
          name: Chunk652730.name
        }), null != Chunk652730.connectionEntrypointUrl && (Chunk33154.buttonText = Chunk388032.intl.string(Chunk388032.t.S0W8Z5), Chunk33154.onButtonClick = () => {
          window.open(Chunk652730.connectionEntrypointUrl, "_blank")
        })
      } return (0, Chunk54381.jsx)(Chunk481060.yRy, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: Chunk657352,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, i.jsx)(D.Z, z(G({}, E), {
        children: (0, i.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), m ? (0, i.jsx)(c.yRy, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: x,
            position: "top",
            children: e => (0, i.jsx)(c.P3F, z(G({
              innerRef: this.upsellTargetRef
            }, e), {
              className: H.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: p
            }))
          }) : p]
        })
      }))
    })
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      submitting: false,
      shouldShowLurkerModeUpsellPopout: false,
      shouldShowLurkerModeSuccessPopout: false
    }), V(this, "textAreaContainerRef", r.createRef()), V(this, "upsellTargetRef", r.createRef()), V(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return a()(null != n, "This guildID cannot be null"), (0, i.jsx)(j.Z, {
        onClose: t,
        guild: n
      })
    }), V(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.h7j)(t => (0, i.jsx)(c.ConfirmModal, z(G({
        header: B.intl.string(B.t.aIz1oV),
        confirmText: B.intl.string(B.t["cY+Oob"]),
        cancelText: B.intl.string(B.t["ETE/oC"]),
        onConfirm: () => m.Z.removeGuildJoinRequest(e.id),
        confirmButtonColor: s.Tt.BRAND
      }, t), {
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: B.intl.string(B.t["13tjTU"])
        })
      })))
    }), V(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("3378").then(n.bind(n, 76075));
        return n => (0, i.jsx)(t, G({
          guildId: e.id
        }, n))
      })
    }), V(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, b.hk)(e.id)
    }), V(this, "handleClaimAccount", () => {
      f.j()
    }), V(this, "handleVerifyPhone", () => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, i.jsx)(e, G({
          reason: S.L.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: F.M
      })
    }), V(this, "handleResendVerification", () => {
      var e;
      u.Z.verifyResend();
      let t = null == (e = M.default.getCurrentUser()) ? true : e.email;
      null != t && (0, c.h7j)(e => (0, i.jsx)(c.ConfirmModal, z(G({}, e), {
        header: B.intl.string(B.t.LykQYk),
        confirmText: B.intl.string(B.t.BddRzS),
        confirmButtonColor: s.Tt.BRAND,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: B.intl.format(B.t.azKEPy, {
            email: t
          })
        })
      })))
    }), V(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), V(this, "handleJoinServer", async () => {
      this.setState({
        submitting: true
      });
      let e = this.props.channel.getGuildId();
      try {
        await p.Z.joinGuild(e, {
          source: k.vtS.CHAT_INPUT_BLOCKER
        })
      } catch (e) {
        this.setState({
          submitting: false
        })
      }
    }), V(this, "handleGoBack", () => {
      this.setState({
        submitting: true
      }), (0, P.s1)().goBack()
    }), V(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("96964").then(n.bind(n, 807007));
        return n => (0, i.jsx)(t, G({
          channel: e
        }, n))
      })
    }), V(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: false
      })
    }), V(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, i.jsx)(E.Z, {
        type: E.s.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), V(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === y.wB.APPROVED;
      if (null == e || null == t || !n || (0, g.d3)(t)) return null;
      let r = () => {
        m.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, i.jsx)(c.u_l, {
        renderModal: t => (0, i.jsx)(_.Z, z(G({}, t), {
          onAccept: r,
          guildName: e.name
        })),
        onCloseRequest: r
      })
    })
  }
}

function q(e) {
  var t, n;
  let {
    channel: r,
    children: l
  } = e, a = r.getGuildId(), s = (0, o.e7)([N.Z], () => N.Z.getGuild(a)), c = (0, o.e7)([A.Z], () => A.Z.getCheck(a)), u = r.type === k.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(k.GuildFeatures.NEWS), d = (0, o.e7)([Z.Z], () => u ? Z.Z.getFollowerStatsForChannel(r.id) : null), p = (0, o.e7)([x.Z], () => x.Z.isLurking(a)), f = (0, o.e7)([M.default], () => M.default.getCurrentUser()), m = null != (t = null == f ? true : f.isStaff()) && t, g = (0, o.e7)([T.ZP], () => {
    var e, t;
    return null != f && null != (t = null == (e = T.ZP.getMember(a, f.id)) ? true : e.isPending) && t
  }), b = !!(0, C.Dc)(s), _ = (0, o.e7)([O.Z], () => O.Z.shouldShowPopout(a)), j = (0, o.e7)([w.Z], () => w.Z.can(k.Plq.SEND_MESSAGES, r)), E = (0, o.e7)([v.Z], () => v.Z.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: S,
    requiredLinkedLobbyApplication: P
  } = (0, L.Z)(r.linkedLobby), D = z(G({}, c), {
    guild: s,
    isLurking: p,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: _,
    showLurkerModeUpsellPopout: p && null != s && R.Uu(k.Plq.SEND_MESSAGES, r),
    theme: I.Z.theme,
    canSendMessages: j,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: b,
    showMemberVerificationModal: g && b,
    guildJoinRequestStatus: null != (n = null == E ? true : E.applicationStatus) ? n : y.wB.STARTED,
    guildJoinRequest: E,
    showLinkedLobbyApplicationLoadingIndicator: S,
    requiredLinkedLobbyApplication: P,
    useReducedMotion: h.Z.useReducedMotion,
    isStaff: m
  });
  return (0, i.jsx)(W, z(G({}, D), {
    channel: r,
    children: l
  }))
}