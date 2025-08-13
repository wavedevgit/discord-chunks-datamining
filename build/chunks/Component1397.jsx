/** Chunk was on web.js **/
/** chunk id: 1397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk421865 = require("./421865.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
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

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class K extends Chunk73800.PureComponent {
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
      notEmailVerified: o,
      newMember: a,
      memberDeadline: s,
      newAccount: u,
      accountDeadline: d,
      theme: f,
      children: _,
      canSendMessages: p,
      channelFollowingUsersSeen: h,
      showLurkerModeUpsellPopout: m,
      showMemberVerificationModal: g,
      useReducedMotion: b,
      isStaff: y,
      guildJoinRequest: O,
      showLinkedLobbyApplicationLoadingIndicator: v,
      requiredLinkedLobbyApplication: I
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: T,
      shouldShowLurkerModeSuccessPopout: S
    } = this.state, A = {
      theme: Chunk749210,
      useReducedMotion: Chunk983736
    };
    if (module && !Chunk391650) {
      if (Chunk144114.message = Chunk388032.intl.string(Chunk388032.t.Hl0Mqq), null != Chunk693546 && Chunk693546 >= 1e3) {
        let e = 1e3 * Math.floor(Chunk693546 / 1e3);
        Chunk144114.subtitle = Chunk388032.intl.formatToPlainString(Chunk388032.t.C5bgrK, {
          count: module.toLocaleString()
        })
      }
      Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t["3aOv+v"]), Chunk144114.onButtonClick = this.handleFollowAnnouncement, exports && (Chunk144114.onSecondaryButtonClick = this.handleJoinServer, Chunk144114.secondaryButtonText = Chunk388032.intl.string(Chunk388032.t["RLch7+"]))
    } else if (require) Chunk144114.message = Chunk388032.intl.string(Chunk388032.t["Eg3/c3"]), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t.fiNVio), Chunk144114.onButtonClick = Chunk305325 ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (Chunk305325) switch (null == Chunk270801 ? true : Chunk270801.applicationStatus) {
        case Chunk246364.wB.SUBMITTED:
          Chunk144114.message = Chunk388032.intl.string(Chunk388032.t["5iLvS0"]), Chunk144114.subtitle = Chunk388032.intl.string(Chunk388032.t.FdsK4u), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t.mqtdmZ), Chunk144114.onButtonClick = this.handleCancelApplication;
          break;
        case Chunk246364.wB.REJECTED:
          Chunk144114.message = Chunk388032.intl.string(Chunk388032.t.lk30cX), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t["8RrsHh"]), Chunk144114.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          Chunk144114.message = Chunk388032.intl.string(Chunk388032.t.rEBKvr), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t["r8/DT0"]), Chunk144114.buttonColor = Chunk755721.Tt.BRAND, Chunk144114.onButtonClick = this.handleShowMemberVerification
      } else if (Chunk652730 || null == Chunk41776) Chunk73800 && !Chunk937111 ? (Chunk144114.message = Chunk388032.intl.string(Chunk388032.t["2dThMD"]), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t["50gfOj"]), Chunk144114.onButtonClick = this.handleVerifyPhone) : Chunk512722 ? (Chunk144114.message = Chunk388032.intl.string(Chunk388032.t.FkGPS0), Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t.lm1UKi), Chunk144114.onButtonClick = this.handleResendVerification) : a ? (Chunk144114.message = Chunk388032.intl.formatToPlainString(Chunk388032.t.IH7RMD, {
        min: Chunk981631.YeM.MEMBER_AGE
      }), Chunk144114.countdown = Chunk442837) : Chunk893776 && (Chunk144114.message = Chunk388032.intl.formatToPlainString(Chunk388032.t["2JA2GB"], {
        min: Chunk981631.YeM.ACCOUNT_AGE
      }), Chunk144114.countdown = Chunk528963);
      else {
        var N;
        Chunk144114.imageSrc = null != (N = Chunk41776.getIconURL(Chunk701488.Si.SMALL)) ? Chunk703656 : true, Chunk144114.message = Chunk388032.intl.format(Chunk388032.t.EvDn1N, {
          name: Chunk41776.name
        }), null != Chunk41776.connectionEntrypointUrl && (Chunk144114.buttonText = Chunk388032.intl.string(Chunk388032.t.S0W8Z2), Chunk144114.onButtonClick = () => {
          window.open(Chunk41776.connectionEntrypointUrl, "_blank")
        })
      } return (0, Chunk255367.jsx)(Chunk481060.yRy, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: Chunk33154,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, r.jsx)(k.Z, W(H({}, A), {
        children: (0, r.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), m ? (0, r.jsx)(c.yRy, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: T,
            position: "top",
            children: e => (0, r.jsx)(c.P3F, W(H({
              innerRef: this.upsellTargetRef
            }, e), {
              className: F.clickableChannelTextArea,
              onClick: this.handleTextAreaClick,
              children: _
            }))
          }) : _]
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
      return a()(null != n, "This guildID cannot be null"), (0, r.jsx)(T.Z, {
        onClose: t,
        guild: n
      })
    }), V(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.h7j)(t => (0, r.jsx)(c.ConfirmModal, W(H({
        header: Z.intl.string(Z.t.aIz1oa),
        confirmText: Z.intl.string(Z.t["cY+Ooa"]),
        cancelText: Z.intl.string(Z.t["ETE/oK"]),
        onConfirm: () => h.Z.removeGuildJoinRequest(e.id),
        confirmButtonColor: l.zx.Colors.BRAND
      }, t), {
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          children: Z.intl.string(Z.t["13tjTU"])
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
        return n => (0, r.jsx)(t, H({
          guildId: e.id
        }, n))
      })
    }), V(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, g.hk)(e.id)
    }), V(this, "handleClaimAccount", () => {
      p.j()
    }), V(this, "handleVerifyPhone", () => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("76540"), n.e("79861")]).then(n.bind(n, 607018));
        return t => (0, r.jsx)(e, H({
          reason: A.L.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: B.M
      })
    }), V(this, "handleResendVerification", () => {
      var e;
      u.Z.verifyResend();
      let t = null == (e = x.default.getCurrentUser()) ? true : e.email;
      null != t && (0, c.h7j)(e => (0, r.jsx)(c.ConfirmModal, W(H({}, e), {
        header: Z.intl.string(Z.t.LykQYm),
        confirmText: Z.intl.string(Z.t.BddRzc),
        confirmButtonColor: l.zx.Colors.BRAND,
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          children: Z.intl.format(Z.t.azKEPz, {
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
      }), (0, N.s1)().goBack()
    }), V(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("54642").then(n.bind(n, 720589));
        return n => (0, r.jsx)(t, H({
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
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, r.jsx)(S.Z, {
        type: S.s.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), V(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === E.wB.APPROVED;
      if (null == e || null == t || !n || (0, m.d3)(t)) return null;
      let i = () => {
        h.Z.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, r.jsx)(c.u_l, {
        renderModal: t => (0, r.jsx)(O.Z, W(H({}, t), {
          onAccept: i,
          guildName: e.name
        })),
        onCloseRequest: i
      })
    })
  }
}

function z(e) {
  var t, n;
  let {
    channel: i,
    children: o
  } = e, a = i.getGuildId(), l = (0, s.e7)([w.Z], () => w.Z.getGuild(a)), c = (0, s.e7)([D.Z], () => D.Z.getCheck(a)), u = i.type === U.d4z.GUILD_ANNOUNCEMENT && null != l && l.features.has(U.oNc.NEWS), d = (0, s.e7)([R.Z], () => u ? R.Z.getFollowerStatsForChannel(i.id) : null), f = (0, s.e7)([I.Z], () => I.Z.isLurking(a)), p = (0, s.e7)([x.default], () => x.default.getCurrentUser()), h = null != (t = null == p ? true : p.isStaff()) && t, m = (0, s.e7)([P.ZP], () => {
    var e, t;
    return null != p && null != (t = null == (e = P.ZP.getMember(a, p.id)) ? true : e.isPending) && t
  }), g = !!(0, b.Dc)(l), O = m && g, T = (0, s.e7)([v.Z], () => v.Z.shouldShowPopout(a)), S = (0, s.e7)([L.Z], () => L.Z.can(U.Plq.SEND_MESSAGES, i)), A = (0, s.e7)([y.Z], () => y.Z.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: N,
    requiredLinkedLobbyApplication: k
  } = (0, j.Z)(i.linkedLobby), G = W(H({}, c), {
    guild: l,
    isLurking: f,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: T,
    showLurkerModeUpsellPopout: f && null != l && M.Uu(U.Plq.SEND_MESSAGES, i),
    theme: C.Z.theme,
    canSendMessages: S,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: g,
    showMemberVerificationModal: O,
    guildJoinRequestStatus: null != (n = null == A ? true : A.applicationStatus) ? n : E.wB.STARTED,
    guildJoinRequest: A,
    showLinkedLobbyApplicationLoadingIndicator: N,
    requiredLinkedLobbyApplication: k,
    useReducedMotion: _.Z.useReducedMotion,
    isStaff: h
  });
  return (0, r.jsx)(K, W(H({}, G), {
    channel: i,
    children: o
  }))
}