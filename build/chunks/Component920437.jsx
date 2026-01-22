/** Chunk was on 97492 **/
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
    e && null == t && f.A.fetchChannelFollowerStats(n.id)
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
      newMember: a,
      memberDeadline: s,
      newAccount: o,
      accountDeadline: c,
      theme: d,
      children: f,
      canSendMessages: p,
      channelFollowingUsersSeen: h,
      showLurkerModeUpsellPopout: b,
      showMemberVerificationModal: g,
      useReducedMotion: m,
      isStaff: A,
      guildJoinRequest: O,
      showLinkedLobbyApplicationLoadingIndicator: j,
      requiredLinkedLobbyApplication: v
    } = this.props, {
      shouldShowLurkerModeUpsellPopout: x,
      shouldShowLurkerModeSuccessPopout: E
    } = this.state, _ = {
      theme: d,
      useReducedMotion: m
    };
    if (e && !p) {
      if (_.message = H.intl.string(H.t.Hl0Mqh), null != h && h >= 1e3) {
        let e = 1e3 * Math.floor(h / 1e3);
        _.subtitle = H.intl.formatToPlainString(H.t.C5bgrC, {
          count: e.toLocaleString()
        })
      }
      _.buttonText = H.intl.string(H.t["3aOv+h"]), _.onButtonClick = this.handleFollowAnnouncement, t && (_.onSecondaryButtonClick = this.handleJoinServer, _.secondaryButtonText = H.intl.string(H.t.RLch70))
    } else if (n) _.message = H.intl.string(H.t["Eg3/c9"]), _.buttonText = H.intl.string(H.t.fiNVin), _.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount;
    else if (g) switch (null == O ? true : O.applicationStatus) {
        case y.B5.SUBMITTED:
          _.message = H.intl.string(H.t["5iLvSx"]), _.subtitle = H.intl.string(H.t.FdsK4h), _.buttonText = H.intl.string(H.t.mqtdmQ), _.onButtonClick = this.handleCancelApplication;
          break;
        case y.B5.REJECTED:
          _.message = H.intl.string(H.t.lk30cY), _.buttonText = H.intl.string(H.t["8RrsHr"]), _.onButtonClick = this.handleViewApplicationRejection;
          break;
        default:
          _.message = H.intl.string(H.t.rEBKvg), _.buttonText = H.intl.string(H.t["r8/DT+"]), _.buttonVariant = "primary", _.onButtonClick = this.handleShowMemberVerification
      } else if (j || null == v) l && !A ? (_.message = H.intl.string(H.t["2dThMM"]), _.buttonText = H.intl.string(H.t["50gfOv"]), _.onButtonClick = this.handleVerifyPhone) : i ? (_.message = H.intl.string(H.t.FkGPS5), _.buttonText = H.intl.string(H.t.lm1UKt), _.onButtonClick = this.handleResendVerification) : a ? (_.message = H.intl.formatToPlainString(H.t.IH7RMF, {
        min: U.$8o.MEMBER_AGE
      }), _.countdown = s) : o && (_.message = H.intl.formatToPlainString(H.t["2JA2GH"], {
        min: U.$8o.ACCOUNT_AGE
      }), _.countdown = c);
      else {
        var C;
        _.imageSrc = null != (C = v.getIconURL(V.iu.SMALL)) ? C : true, _.message = H.intl.format(H.t.EvDn1D, {
          name: v.name
        }), null != v.connectionEntrypointUrl && (_.buttonText = H.intl.string(H.t.S0W8Z5), _.onButtonClick = () => {
          window.open(v.connectionEntrypointUrl, "_blank")
        })
      } return (0, r.jsx)(u.YNO, {
      targetElementRef: this.textAreaContainerRef,
      position: "top",
      align: "left",
      shouldShow: E,
      onRequestClose: () => this.setState({
        shouldShowLurkerModeSuccessPopout: false
      }),
      renderPopout: this.renderSuccessPopout,
      children: e => (0, r.jsx)(k.A, z(W({}, _), {
        children: (0, r.jsxs)("div", {
          ref: this.textAreaContainerRef,
          children: [this.renderMemberVerificationSuccessModal(), b ? (0, r.jsx)(u.YNO, {
            targetElementRef: this.upsellTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            shouldShow: x,
            position: "top",
            children: e => (0, r.jsx)(u.DUT, z(W({
              innerRef: this.upsellTargetRef
            }, e), {
              className: B._,
              onClick: this.handleTextAreaClick,
              children: f
            }))
          }) : f]
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
      return a()(null != n, "This guildID cannot be null"), (0, r.jsx)(_.A, {
        onClose: t,
        guild: n
      })
    }), K(this, "handleCancelApplication", () => {
      let {
        guild: e
      } = this.props;
      null != e && (0, c.A)({
        title: H.intl.string(H.t.aIz1oV),
        subtitle: H.intl.string(H.t["13tjTU"]),
        variant: "primary",
        confirmText: H.intl.string(H.t["cY+Oob"]),
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
      b.R()
    }), K(this, "handleVerifyPhone", () => {
      (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 615715));
        return t => (0, r.jsx)(e, W({
          reason: S.d.GUILD_PHONE_REQUIRED
        }, t))
      }, {
        modalKey: F.V
      })
    }), K(this, "handleResendVerification", () => {
      var e;
      d.A.verifyResend();
      let t = null == (e = M.default.getCurrentUser()) ? true : e.email;
      null != t && (0, o.A)({
        title: H.intl.string(H.t.LykQYk),
        subtitle: H.intl.format(H.t.azKEPy, {
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
          source: U.Q4z.CHAT_INPUT_BLOCKER
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
      return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, r.jsx)(C.A, {
        type: C.w.CHAT,
        guild: e,
        closePopout: this.closeLurkerModeUpsellPopout
      })
    }), K(this, "renderMemberVerificationSuccessModal", () => {
      let {
        guild: e,
        guildJoinRequest: t
      } = this.props, n = (null == t ? true : t.applicationStatus) === y.B5.APPROVED;
      if (null == e || null == t || !n || (0, m.NK)(t)) return null;
      let l = () => {
        g.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
      };
      return (0, r.jsx)(u.aFV, {
        renderModal: t => (0, r.jsx)(v.A, z(W({}, t), {
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
  } = e, a = l.getGuildId(), o = (0, s.bG)([w.A], () => w.A.getGuild(a)), c = (0, s.bG)([R.A], () => R.A.getCheck(a)), u = l.type === U.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(U.GuildFeatures.NEWS), d = (0, s.bG)([T.A], () => u ? T.A.getFollowerStatsForChannel(l.id) : null), f = (0, s.bG)([E.A], () => E.A.isLurking(a)), p = (0, s.bG)([M.default], () => M.default.getCurrentUser()), b = null != (t = null == p ? true : p.isStaff()) && t, g = (0, s.bG)([P.Ay], () => {
    var e, t;
    return null != p && null != (e = null == (t = P.Ay.getMember(a, p.id)) ? true : t.isPending) && e
  }), m = !!(0, O.Qd)(o), A = (0, s.bG)([x.A], () => x.A.shouldShowPopout(a)), v = (0, s.bG)([D.A], () => D.A.can(U.xBc.SEND_MESSAGES, l)), _ = (0, s.bG)([j.A], () => j.A.getRequest(a)), {
    showLinkedLobbyApplicationLoadingIndicator: C,
    requiredLinkedLobbyApplication: S
  } = (0, G.A)(l.linkedLobby), I = z(W({}, c), {
    guild: o,
    isLurking: f,
    isFollowable: u,
    shouldShowLurkerModeSuccessPopout: A,
    showLurkerModeUpsellPopout: f && null != o && L.MJ(U.xBc.SEND_MESSAGES, l),
    theme: N.A.theme,
    canSendMessages: v,
    channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
    hasVerificationGate: m,
    showMemberVerificationModal: g && m,
    guildJoinRequestStatus: null != (n = null == _ ? true : _.applicationStatus) ? n : y.B5.STARTED,
    guildJoinRequest: _,
    showLinkedLobbyApplicationLoadingIndicator: C,
    requiredLinkedLobbyApplication: S,
    useReducedMotion: h.A.useReducedMotion,
    isStaff: b
  });
  return (0, r.jsx)(Y, z(W({}, I), {
    channel: l,
    children: i
  }))
}