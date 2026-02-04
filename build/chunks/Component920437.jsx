/** Chunk was on 17869 **/
/** chunk id: 920437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
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
    e && null == t && h.A.fetchChannelFollowerStats(n.id)
  }
  componentDidUpdate(e) {
    let {
      shouldShowLurkerModeSuccessPopout: t,
      guild: n,
      showMemberVerificationModal: l
    } = this.props;
    l || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
      shouldShowLurkerModeSuccessPopout: true
    })
  }
  render() {
    let {
      isFollowable: e,
      isLurking: t,
      notClaimed: n,
      notPhoneVerified: r,
      notEmailVerified: i,
      newMember: a,
      memberDeadline: s,
      newAccount: o,
      accountDeadline: c,
      theme: d,
      children: h,
      canSendMessages: p,
      channelFollowingUsersSeen: f,
      showLurkerModeUpsellPopout: m,
      showMemberVerificationModal: g,
      useReducedMotion: A,
      isStaff: b,
      guildJoinRequest: y,
      showLinkedLobbyApplicationLoadingIndicator: E,
      requiredLinkedLobbyApplication: v
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: O,
      shouldShowLurkerModeSuccessPopout: C
    } = this.state, S = {
      theme: d,
      useReducedMotion: A
    };
    if (e && !p) {
      if (S.message = B.intl.string(B.t.Hl0Mqh), null != f && f >= 1e3) {
        let e = 1e3 * Math.floor(f / 1e3);
        S.subtitle = B.intl.formatToPlainString(B.t.C5bgrC, {
          count: e.toLocaleString()
        })
      }
      S.buttonText = B.intl.string(B.t["3aOv+h"]), S.onButtonClick = this.handleFollowAnnouncement, t && (S.onSecondaryButtonClick = this.handleJoinServer, S.secondaryButtonText = B.intl.string(B.t.RLch70))
    } else if (n) S.message = B.intl.string(B.t["Eg3/c9"]), S.buttonText = B.intl.string(B.t.fiNVin), S.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (g) switch (null == y ? true : y.applicationStatus) {
        case _.B5.SUBMITTED:
          S.message = B.intl.string(B.t["5iLvSx"]), S.subtitle = B.intl.string(B.t.FdsK4h), S.buttonText = B.intl.string(B.t.mqtdmQ), S.onButtonClick = this.handleCancelApplication;
          break;
        case _.B5.REJECTED:
          S.message = B.intl.string(B.t.lk30cY), S.buttonText = B.intl.string(B.t["8RrsHr"]), S.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          S.message = B.intl.string(B.t.rEBKvg), S.buttonText = B.intl.string(B.t["r8/DT+"]), S.buttonVariant = "primary", S.onButtonClick = this.handleShowMemberVerification
      } else if (E || null == v) r && !b ? (S.message = B.intl.string(B.t["2dThMM"]), S.buttonText = B.intl.string(B.t["50gfOv"]), S.onButtonClick = this.handleVerifyPhone) : i ? (S.message = B.intl.string(B.t.FkGPS5), S.buttonText = B.intl.string(B.t.lm1UKt), S.onButtonClick = this.handleResendVerification) : a ? (S.message = B.intl.formatToPlainString(B.t.IH7RMF, {
        min: G.$8o.MEMBER_AGE
      }), S.countdown = s) : o && (S.message = B.intl.formatToPlainString(B.t["2JA2GH"], {
        min: G.$8o.ACCOUNT_AGE
      }), S.countdown = c);
      else {
        var x;
        S.imageSrc = null != (x = v.getIconURL(F.iu.SMALL)) ? x : true, S.message = B.intl.format(B.t.EvDn1D, {
          name: v.name
        }), null != v.connectionEntrypointUrl && (S.buttonText = B.intl.string(B.t.S0W8Z5), S.onButtonClick = () => {
          window.open(v.connectionEntrypointUrl, "_blank")
        })
      } return (0, l.jsx)(u.YNO, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: C,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, l.jsx)(U.A, z(W({}, S), {
        children: (0, l.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), m ? (0, l.jsx)(u.YNO, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: O,
            position: "top",
            children: e => (0, l.jsx)(u.DUT, z(W({
              innerRef: this.upsellTargetRef
            }, e), {
              className: V._,
              onClick: this.handleTextAreaClick,
              children: h
            }))
          }) : h]
        })
      }))
    })
  }
  constructor(...e) {
    super(...e), K(this, "state", {
      submitting: false,
      shouldShowLurkerModeUpsellPopout: false,
      shouldShowLurkerModeSuccessPopout: false
    }), K(this, "textAreaContainerRef", r.createRef()), K(this, "upsellTargetRef", r.createRef()), K(this, "renderSuccessPopout", e => {
      let {
        closePopout: t
      } = e, {
        guild: n
      } = this.props;
      return a()(null != n, "This guildID cannot be null"), (0, l.jsx)(S.A, {
        onClose: t,
        guild: n
      })
    }), K(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.A)({
        title: B.intl.string(B.t.aIz1oV),
        subtitle: B.intl.string(B.t["13tjTU"]),
        variant: "primary",
        confirmText: B.intl.string(B.t["cY+Oob"]),
        onConfirm: () => g.A.removeGuildJoinRequest(e.id)
      })
    }), K(this, "handleViewApplicationRejection", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, u.mMO)(async () => {
        let {
          default: t
        } = await n.e("37548").then(n.bind(n, 856103));
        return n => (0, l.jsx)(t, W({
          guildId: e.id
        }, n))
      })
    }), K(this, "handleShowMemberVerification", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, b.Ze)(e.id)
    }), K(this, "handleClaimAccount", () => {
      m.R()
    }), K(this, "handleVerifyPhone", () => {
      (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
        return t => (0, l.jsx)(e, W({
          reason: j.d.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: H.V
      })
    }), K(this, "handleResendVerification", () => {
      var e;
      d.A.verifyResend();
      let t = null == (e = M.default.getCurrentUser()) ? true : e.email;
      null != t && (0, o.A)({
        title: B.intl.string(B.t.LykQYk),
        subtitle: B.intl.format(B.t.azKEPy, {
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
        await p.A.joinGuild(e, {
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
        return n => (0, l.jsx)(t, W({
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
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, l.jsx)(x.A, {
        type: x.w.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), K(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === _.B5.APPROVED;
      if (null == e || null == t || !n || (0, A.NK)(t)) return null;
      let r = () => {
        g.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, l.jsx)(u.aFV, {
        renderModal: t => (0, l.jsx)(v.A, z(W({}, t), {
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
    children: i
  } = e, a = r.getGuildId(), o = (0, s.bG)([w.A], () => w.A.getGuild(a)), c = (0, s.bG)([R.A], () => R.A.getCheck(a)), u = r.type === G.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(G.GuildFeatures.NEWS), d = (0, s.bG)([N.A], () => u ? N.A.getFollowerStatsForChannel(r.id) : null), h = (0, s.bG)([C.A], () => C.A.isLurking(a)), p = (0, s.bG)([M.default], () => M.default.getCurrentUser()), m = null != (t = null == p ? true : p.isStaff()) && t, g = (0, s.bG)([P.Ay], () => {
    var e, t;
    return null != p && null != (e = null == (t = P.Ay.getMember(a, p.id)) ? true : t.isPending) && e
  }), A = !!(0, y.Qd)(o), b = (0, s.bG)([O.A], () => O.A.shouldShowPopout(a)), v = (0, s.bG)([D.A], () => D.A.can(G.xBc.SEND_MESSAGES, r)), S = (0, s.bG)([E.A], () => E.A.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: x,
    requiredLinkedLobbyApplication: j
  } = (0, k.A)(r.linkedLobby), I = z(W({}, c), {
    guild: o,
    isLurking: h,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: b,
    showLurkerModeUpsellPopout: h && null != o && L.MJ(G.xBc.SEND_MESSAGES, r),
    theme: T.A.theme,
    canSendMessages: v,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: A,
    showMemberVerificationModal: g && A,
    guildJoinRequestStatus: null != (n = null == S ? true : S.applicationStatus) ? n : _.B5.STARTED,
    guildJoinRequest: S,
    showLinkedLobbyApplicationLoadingIndicator: x,
    requiredLinkedLobbyApplication: j,
    useReducedMotion: f.A.useReducedMotion,
    isStaff: m
  });
  return (0, l.jsx)(Y, z(W({}, I), {
    channel: r,
    children: i
  }))
}