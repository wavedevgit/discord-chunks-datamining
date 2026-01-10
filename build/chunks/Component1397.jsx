/** Chunk was on 81985 **/
/** chunk id: 1397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
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
class K extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    e && null == t && p.Z.fetchChannelFollowerStats(n.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: r
    } = this.props;
    r || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
      shouldShowLurkerModeSuccessPopout: true
    })
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: n,
      notPhoneVerified: i,
      notEmailVerified: l,
      newMember: a,
      memberDeadline: o,
      newAccount: s,
      accountDeadline: c,
      theme: d,
      children: p,
      canSendMessages: f,
      channelFollowingUsersSeen: h,
      showLurkerModeUpsellPopout: g,
      showMemberVerificationModal: m,
      useReducedMotion: b,
      isStaff: y,
      guildJoinRequest: O,
      showLinkedLobbyApplicationLoadingIndicator: j,
      requiredLinkedLobbyApplication: x
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: C,
      shouldShowLurkerModeSuccessPopout: E
    } = this.state, S = {
      theme: d,
      useReducedMotion: b
    };
    if (e && !f) {
      if (S.message = F.intl.string(F.t.Hl0Mqh), null != h && h >= 1e3) {
        let e = 1e3 * Math.floor(h / 1e3);
        S.subtitle = F.intl.formatToPlainString(F.t.C5bgrC, {
          count: e.toLocaleString()
        })
      }
      S.buttonText = F.intl.string(F.t["3aOv+h"]), S.onButtonClick = this.handleFollowAnnouncement, t && (S.onSecondaryButtonClick = this.handleJoinServer, S.secondaryButtonText = F.intl.string(F.t.RLch70))
    } else if (n) S.message = F.intl.string(F.t["Eg3/c9"]), S.buttonText = F.intl.string(F.t.fiNVin), S.onButtonClick = m ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (m) switch (null == O ? true : O.applicationStatus) {
        case v.wB.SUBMITTED:
          S.message = F.intl.string(F.t["5iLvSx"]), S.subtitle = F.intl.string(F.t.FdsK4h), S.buttonText = F.intl.string(F.t.mqtdmQ), S.onButtonClick = this.handleCancelApplication;
          break;
        case v.wB.REJECTED:
          S.message = F.intl.string(F.t.lk30cY), S.buttonText = F.intl.string(F.t["8RrsHr"]), S.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          S.message = F.intl.string(F.t.rEBKvg), S.buttonText = F.intl.string(F.t["r8/DT+"]), S.buttonVariant = "primary", S.onButtonClick = this.handleShowMemberVerification
      } else if (j || null == x) i && !y ? (S.message = F.intl.string(F.t["2dThMM"]), S.buttonText = F.intl.string(F.t["50gfOv"]), S.onButtonClick = this.handleVerifyPhone) : l ? (S.message = F.intl.string(F.t.FkGPS5), S.buttonText = F.intl.string(F.t.lm1UKt), S.onButtonClick = this.handleResendVerification) : a ? (S.message = F.intl.formatToPlainString(F.t.IH7RMF, {
        min: U.YeM.MEMBER_AGE
      }), S.countdown = o) : s && (S.message = F.intl.formatToPlainString(F.t["2JA2GH"], {
        min: U.YeM.ACCOUNT_AGE
      }), S.countdown = c);
      else {
        var _;
        S.imageSrc = null != (_ = x.getIconURL(G.Si.SMALL)) ? _ : true, S.message = F.intl.format(F.t.EvDn1D, {
          name: x.name
        }), null != x.connectionEntrypointUrl && (S.buttonText = F.intl.string(F.t.S0W8Z5), S.onButtonClick = () => {
          window.open(x.connectionEntrypointUrl, "_blank")
        })
      } return (0, r.jsx)(u.yRy, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: E,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, r.jsx)(L.Z, W(z({}, S), {
        children: (0, r.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), g ? (0, r.jsx)(u.yRy, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: C,
            position: "top",
            children: e => (0, r.jsx)(u.P3F, W(z({
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
    }), V(this, "textAreaContainerRef", i.createRef()), V(this, "upsellTargetRef", i.createRef()), V(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return a()(null != n, "This guildID cannot be null"), (0, r.jsx)(S.Z, {
        onClose: t,
        guild: n
      })
    }), V(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.Z)({
        title: F.intl.string(F.t.aIz1oV),
        subtitle: F.intl.string(F.t["13tjTU"]),
        variant: "primary",
        confirmText: F.intl.string(F.t["cY+Oob"]),
        onConfirm: () => m.Z.removeGuildJoinRequest(e.id)
      })
    }), V(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, u.ZDy)(async () => {
        let {
          default: t
        } = await n.e("3378").then(n.bind(n, 76075));
        return n => (0, r.jsx)(t, z({
          guildId: e.id
        }, n))
      })
    }), V(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, y.hk)(e.id)
    }), V(this, "handleClaimAccount", () => {
      g.j()
    }), V(this, "handleVerifyPhone", () => {
      (0, u.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, r.jsx)(e, z({
          reason: I.L.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: B.M
      })
    }), V(this, "handleResendVerification", () => {
      var e;
      d.Z.verifyResend();
      let t = null == (e = D.default.getCurrentUser()) ? true : e.email;
      null != t && (0, s.Z)({
        title: F.intl.string(F.t.LykQYk),
        subtitle: F.intl.format(F.t.azKEPy, {
          email: t
        })
      })
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
        await f.Z.joinGuild(e, {
          source: U.vtS.CHAT_INPUT_BLOCKER
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
      (0, u.ZDy)(async () => {
        let {
          default: t
        } = await n.e("96964").then(n.bind(n, 807007));
        return n => (0, r.jsx)(t, z({
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
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, r.jsx)(_.Z, {
        type: _.s.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), V(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === v.wB.APPROVED;
      if (null == e || null == t || !n || (0, b.d3)(t)) return null;
      let i = () => {
        m.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, r.jsx)(u.u_l, {
        renderModal: t => (0, r.jsx)(x.Z, W(z({}, t), {
          onAccept: i,
          guildName: e.name
        })),
        onCloseRequest: i
      })
    })
  }
}

function Y(e) {
  var t, n;
  let {
    channel: i,
    children: l
  } = e, a = i.getGuildId(), s = (0, o.e7)([A.Z], () => A.Z.getGuild(a)), c = (0, o.e7)([w.Z], () => w.Z.getCheck(a)), u = i.type === U.d4z.GUILD_ANNOUNCEMENT && null != s && s.features.has(U.GuildFeatures.NEWS), d = (0, o.e7)([N.Z], () => u ? N.Z.getFollowerStatsForChannel(i.id) : null), p = (0, o.e7)([E.Z], () => E.Z.isLurking(a)), f = (0, o.e7)([D.default], () => D.default.getCurrentUser()), g = null != (t = null == f ? true : f.isStaff()) && t, m = (0, o.e7)([T.ZP], () => {
    var e, t;
    return null != f && null != (t = null == (e = T.ZP.getMember(a, f.id)) ? true : e.isPending) && t
  }), b = !!(0, O.Dc)(s), y = (0, o.e7)([C.Z], () => C.Z.shouldShowPopout(a)), x = (0, o.e7)([R.Z], () => R.Z.can(U.Plq.SEND_MESSAGES, i)), S = (0, o.e7)([j.Z], () => j.Z.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: _,
    requiredLinkedLobbyApplication: I
  } = (0, k.Z)(i.linkedLobby), P = W(z({}, c), {
    guild: s,
    isLurking: p,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: y,
    showLurkerModeUpsellPopout: p && null != s && M.Uu(U.Plq.SEND_MESSAGES, i),
    theme: Z.Z.theme,
    canSendMessages: x,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: b,
    showMemberVerificationModal: m && b,
    guildJoinRequestStatus: null != (n = null == S ? true : S.applicationStatus) ? n : v.wB.STARTED,
    guildJoinRequest: S,
    showLinkedLobbyApplicationLoadingIndicator: _,
    requiredLinkedLobbyApplication: I,
    useReducedMotion: h.Z.useReducedMotion,
    isStaff: g
  });
  return (0, r.jsx)(K, W(z({}, P), {
    channel: i,
    children: l
  }))
}