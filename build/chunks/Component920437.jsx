/** Chunk was on 78528 **/
/** chunk id: 920437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk857182 = require("./857182.js"),
  Chunk686956 = require("./686956.js"),
  Chunk775602 = require("./775602.js"),
  Chunk315982 = require("./315982.jsx"),
  Chunk624458 = require("./624458.js"),
  Chunk821124 = require("./821124.js"),
  Chunk202384 = require("./202384.js"),
  Chunk513461 = require("./513461.js"),
  Chunk709977 = require("./709977.js"),
  Chunk212455 = require("./212455.js"),
  Chunk466244 = require("./466244.jsx"),
  Chunk158476 = require("./158476.js"),
  Chunk857071 = require("./857071.js"),
  Chunk552227 = require("./552227.jsx"),
  Chunk698405 = require("./698405.jsx"),
  Chunk557722 = require("./557722.js"),
  Chunk976860 = require("./976860.js"),
  Chunk544028 = require("./544028.js"),
  Chunk560010 = require("./560010.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk137577 = require("./137577.js"),
  Chunk786051 = require("./786051.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk53516 = require("./53516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk32385 = require("./32385.js");

function K(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
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
class Y extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      isFollowable: e,
      channelFollowingUsersSeen: t,
      channel: n
    } = this.props;
    e && null == t && p.A.fetchChannelFollowerStats(n.id)
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
      notPhoneVerified: l,
      notEmailVerified: i,
      newMember: s,
      memberDeadline: a,
      newAccount: o,
      accountDeadline: c,
      theme: d,
      children: p,
      canSendMessages: h,
      channelFollowingUsersSeen: f,
      showLurkerModeUpsellPopout: g,
      showMemberVerificationModal: m,
      useReducedMotion: b,
      isStaff: A,
      guildJoinRequest: _,
      showLinkedLobbyApplicationLoadingIndicator: O,
      requiredLinkedLobbyApplication: j
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: v,
      shouldShowLurkerModeSuccessPopout: x
    } = this.state, E = {
      theme: d,
      useReducedMotion: b
    };
    if (e && !h) {
      if (E.message = F.intl.string(F.t.Hl0Mqh), null != f && f >= 1e3) {
        let e = 1e3 * Math.floor(f / 1e3);
        E.subtitle = F.intl.formatToPlainString(F.t.C5bgrC, {
          count: e.toLocaleString()
        })
      }
      E.buttonText = F.intl.string(F.t["3aOv+h"]), E.onButtonClick = this.handleFollowAnnouncement, t && (E.onSecondaryButtonClick = this.handleJoinServer, E.secondaryButtonText = F.intl.string(F.t.RLch70))
    } else if (n) E.message = F.intl.string(F.t["Eg3/c9"]), E.buttonText = F.intl.string(F.t.fiNVin), E.onButtonClick = m ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (m) switch (null == _ ? true : _.applicationStatus) {
        case y.B5.SUBMITTED:
          E.message = F.intl.string(F.t["5iLvSx"]), E.subtitle = F.intl.string(F.t.FdsK4h), E.buttonText = F.intl.string(F.t.mqtdmQ), E.onButtonClick = this.handleCancelApplication;
          break;
        case y.B5.REJECTED:
          E.message = F.intl.string(F.t.lk30cY), E.buttonText = F.intl.string(F.t["8RrsHr"]), E.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          E.message = F.intl.string(F.t.rEBKvg), E.buttonText = F.intl.string(F.t["r8/DT+"]), E.buttonVariant = "primary", E.onButtonClick = this.handleShowMemberVerification
      } else if (O || null == j) l && !A ? (E.message = F.intl.string(F.t["2dThMM"]), E.buttonText = F.intl.string(F.t["50gfOv"]), E.onButtonClick = this.handleVerifyPhone) : i ? (E.message = F.intl.string(F.t.FkGPS5), E.buttonText = F.intl.string(F.t.lm1UKt), E.onButtonClick = this.handleResendVerification) : s ? (E.message = F.intl.formatToPlainString(F.t.IH7RMF, {
        min: G.$8o.MEMBER_AGE
      }), E.countdown = a) : o && (E.message = F.intl.formatToPlainString(F.t["2JA2GH"], {
        min: G.$8o.ACCOUNT_AGE
      }), E.countdown = c);
      else {
        var C;
        E.imageSrc = null != (C = j.getIconURL(B.iu.SMALL)) ? C : true, E.message = F.intl.format(F.t.EvDn1D, {
          name: j.name
        }), null != j.connectionEntrypointUrl && (E.buttonText = F.intl.string(F.t.S0W8Z5), E.onButtonClick = () => {
          window.open(j.connectionEntrypointUrl, "_blank")
        })
      } return (0, r.jsx)(u.YNO, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: x,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, r.jsx)(U.A, z(W({}, E), {
        children: (0, r.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), g ? (0, r.jsx)(u.YNO, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: v,
            position: "top",
            children: e => (0, r.jsx)(u.DUT, z(W({
              innerRef: this.upsellTargetRef
            }, e), {
              className: H._,
              onClick: this.handleTextAreaClick,
              children: p
            }))
          }) : p]
        })
      }))
    })
  }
  constructor(...e) {
    super(...e), K(this, "state", {
      submitting: false,
      shouldShowLurkerModeUpsellPopout: false,
      shouldShowLurkerModeSuccessPopout: false
    }), K(this, "textAreaContainerRef", l.createRef()), K(this, "upsellTargetRef", l.createRef()), K(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return s()(null != n, "This guildID cannot be null"), (0, r.jsx)(E.A, {
        onClose: t,
        guild: n
      })
    }), K(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.A)({
        title: F.intl.string(F.t.aIz1oV),
        subtitle: F.intl.string(F.t["13tjTU"]),
        variant: "primary",
        confirmText: F.intl.string(F.t["cY+Oob"]),
        onConfirm: () => m.A.removeGuildJoinRequest(e.id)
      })
    }), K(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, u.mMO)(async () => {
        let {
          default: t
        } = await n.e("37548").then(n.bind(n, 856103));
        return n => (0, r.jsx)(t, W({
          guildId: e.id
        }, n))
      })
    }), K(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, A.Ze)(e.id)
    }), K(this, "handleClaimAccount", () => {
      g.R()
    }), K(this, "handleVerifyPhone", () => {
      (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
        return t => (0, r.jsx)(e, W({
          reason: S.d.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: V.V
      })
    }), K(this, "handleResendVerification", () => {
      var e;
      d.A.verifyResend();
      let t = null == (e = M.default.getCurrentUser()) ? true : e.email;
      null != t && (0, o.A)({
        title: F.intl.string(F.t.LykQYk),
        subtitle: F.intl.format(F.t.azKEPy, {
          email: t
        })
      })
    }), K(this, "handleTextAreaClick", () => {
      let {
        showLurkerModeUpsellPopout: e
      } = this.props;
      this.setState({
        shouldShowLurkerModeUpsellPopout: e
      })
    }), K(this, "handleJoinServer", async () => {
      this.setState({
        submitting: true
      });
      let e = this.props.channel.getGuildId();
      try {
        await h.A.joinGuild(e, {
          source: G.Q4z.CHAT_INPUT_BLOCKER
        })
      } catch (e) {
        this.setState({
          submitting: false
        })
      }
    }), K(this, "handleGoBack", () => {
      this.setState({
        submitting: true
      }), (0, I.JK)().goBack()
    }), K(this, "handleFollowAnnouncement", () => {
      let {
        channel: e
      } = this.props;
      (0, u.mMO)(async () => {
        let {
          default: t
        } = await n.e("66464").then(n.bind(n, 464035));
        return n => (0, r.jsx)(t, W({
          channel: e
        }, n))
      })
    }), K(this, "closeLurkerModeUpsellPopout", () => {
      this.setState({
        shouldShowLurkerModeUpsellPopout: false
      })
    }), K(this, "renderLurkerModeUpsellPopout", () => {
      let {
        guild: e
      } = this.props;
      return s()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, r.jsx)(C.A, {
        type: C.w.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), K(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === y.B5.APPROVED;
      if (null == e || null == t || !n || (0, b.NK)(t)) return null;
      let l = () => {
        m.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, r.jsx)(u.aFV, {
        renderModal: t => (0, r.jsx)(j.A, z(W({}, t), {
          onAccept: l,
          guildName: e.name
        })),
        onCloseRequest: l
      })
    })
  }
}

function q(e) {
  var t, n;
  let {
    channel: l,
    children: i
  } = e, s = l.getGuildId(), o = (0, a.bG)([w.A], () => w.A.getGuild(s)), c = (0, a.bG)([R.A], () => R.A.getCheck(s)), u = l.type === G.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(G.GuildFeatures.NEWS), d = (0, a.bG)([T.A], () => u ? T.A.getFollowerStatsForChannel(l.id) : null), p = (0, a.bG)([x.A], () => x.A.isLurking(s)), h = (0, a.bG)([M.default], () => M.default.getCurrentUser()), g = null != (t = null == h ? true : h.isStaff()) && t, m = (0, a.bG)([P.Ay], () => {
    var e, t;
    return null != h && null != (e = null == (t = P.Ay.getMember(s, h.id)) ? true : t.isPending) && e
  }), b = !!(0, _.Qd)(o), A = (0, a.bG)([v.A], () => v.A.shouldShowPopout(s)), j = (0, a.bG)([D.A], () => D.A.can(G.xBc.SEND_MESSAGES, l)), E = (0, a.bG)([O.A], () => O.A.getRequest(s)), {
    showLinkedLobbyApplicationLoadingIndicator: C,
    requiredLinkedLobbyApplication: S
  } = (0, k.A)(l.linkedLobby), I = z(W({}, c), {
    guild: o,
    isLurking: p,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: A,
    showLurkerModeUpsellPopout: p && null != o && L.MJ(G.xBc.SEND_MESSAGES, l),
    theme: N.A.theme,
    canSendMessages: j,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: b,
    showMemberVerificationModal: m && b,
    guildJoinRequestStatus: null != (n = null == E ? true : E.applicationStatus) ? n : y.B5.STARTED,
    guildJoinRequest: E,
    showLinkedLobbyApplicationLoadingIndicator: C,
    requiredLinkedLobbyApplication: S,
    useReducedMotion: f.A.useReducedMotion,
    isStaff: g
  });
  return (0, r.jsx)(Y, z(W({}, I), {
    channel: l,
    children: i
  }))
}