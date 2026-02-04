/** Chunk was on 86142 **/
/** chunk id: 111549, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk362474 = require("./362474.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk198982 = require("./198982.js"),
  Chunk17841 = require("./17841.js"),
  Chunk829691 = require("./829691.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk359438 = require("./359438.jsx"),
  Chunk383302 = require("./383302.jsx"),
  Chunk10088 = require("./10088.js"),
  Chunk921037 = require("./921037.js"),
  Chunk21599 = require("./21599.js"),
  Chunk942614 = require("./942614.js"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk299091 = require("./299091.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk4274 = require("./4274.js"),
  Chunk877062 = require("./877062.js"),
  Chunk890698 = require("./890698.jsx"),
  Chunk129851 = require("./129851.jsx"),
  Chunk229 = require("./229.jsx"),
  Chunk652215 = require("./652215.js");
require("./436317.js");
var Chunk172799 = require("./172799.js"),
  Chunk771016 = require("./771016.js"),
  Chunk396574 = require("./396574.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
let K = "register",
  z = "login";
async function Q(e) {
  let {
    invite: t
  } = await g.Ay.resolveInvite(e, U.S3d.INVITE);
  null != t && (0, m.v)(t)
}
class q extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      isUnderage: e,
      login: t,
      inviteKey: n
    } = this.props, r = S.default.getAnalyticsToken();
    if (null != r && p.h.dispatch({
        type: "SET_ANALYTICS_TOKEN",
        analyticsToken: r,
        userId: S.default.getId()
      }), R.default.track(U.HAw.INVITE_VIEWED, {
        invite_code: n
      }, {
        flush: true
      }), (0, I.d)("invite"), !F.VP) {
      let e = this.getInviteKey();
      k.A.launch("discord://" + U.BVt.INVITE(e), () => true)
    }
    if (!t && e) {
      let e = this.getInviteKey(),
        {
          baseCode: t
        } = (0, b.y$)(e);
      (0, O.bG)(U.BVt.INVITE_LOGIN(t))
    }
  }
  componentDidUpdate(e) {
    let {
      invite: t,
      nativeAppState: n,
      authenticated: r,
      transitionTo: i
    } = this.props, s = this.getInviteKey();
    if (s !== this.getInviteKey(e)) Q(s);
    else if (t.state === U.elq.APP_NOT_OPENED) this.handleContinue();
    else if (this.getMode() === z && r !== e.authenticated && r) {
      let e = S.default.getFingerprint();
      if (null != e) {
        let t = (0, c.d)(e);
        this.track(U.HAw.INVITE_LOGIN_SUCCESSFUL, {
          prev_user_id: t
        })
      }
      g.Ay.acceptInvite({
        inviteKey: s,
        context: this.getAcceptInviteContext(U.S3d.INVITE),
        skipOnboarding: true,
        callback: this.handleContinue
      })
    }
    if (n !== e.nativeAppState && n === U.fAW.OPEN && this.track(U.HAw.INVITE_APP_INVOKED, {
        user_is_member: null != t.guild && null != C.A.getGuild(t.guild.id),
        size_total: t.approximate_member_count,
        invite_type: null != t.type ? G.Xd[t.type] : true
      }), this.getMode() === K && r && !e.authenticated) {
      let {
        channel: e
      } = t;
      if (null != e)
        if ((0, j.C)(M.zY.INVITE_UNCLAIMED), null != t.guild) {
          var l, u, d;
          let e = (0, o.Lt)(null != (l = t.flags) ? l : 0, a.Q.IS_APPLICATION_BYPASS),
            n = (null == (u = t.guild.features) ? true : u.includes(U.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (d = t.guild.features) ? true : d.includes(U.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
          i(!e && n ? U.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id) : U.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
        } else g.Ay.transitionToInvite(t, i)
    }
  }
  getInviteKey() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return e.inviteKey
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return e.login ? z : K
  }
  track(e, t) {
    let {
      invite: n
    } = this.props, r = (0, b.m0)(this.getInviteKey());
    R.default.track(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          H(e, t, n[t])
        })
      }
      return e
    }({
      guild_id: null != n.guild ? n.guild.id : null,
      channel_id: null != n.channel ? n.channel.id : null,
      inviter_id: null != n.inviter ? n.inviter.id : null,
      invite_code: r
    }, t))
  }
  renderSpinner(e) {
    return (0, r.jsxs)(A.Ay, {
      children: [(0, r.jsx)(A.hE, {
        children: e
      }), (0, r.jsx)(A.CK, {})]
    })
  }
  renderInvalidInvite() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, r.jsxs)(A.Ay, {
      children: [(0, r.jsx)(A._V, {
        src: n(428721),
        className: W.QB
      }), (0, r.jsx)(A.hE, {
        className: l()(W.Ot, W.QB),
        children: V.intl.string(V.t.kux01N)
      }), (0, r.jsx)(A.tK, {
        children: e ? V.intl.string(V.t["5AkWAd"]) : V.intl.string(V.t["+qUJAj"])
      }), this.renderButton(V.intl.string(V.t.fIv16B)), (0, r.jsx)("div", {
        className: W.Ot,
        style: {
          textAlign: "left"
        },
        children: (0, r.jsx)(h.QWc, {
          size: "sm",
          textVariant: "text-sm/medium",
          text: V.intl.string(V.t.urIwn4),
          onClick: () => window.open(w.A.getArticleURL(U.MVz.INVALID_INVITES), "_blank")
        })
      })]
    })
  }
  renderErrorInvite() {
    var e, t;
    return (0, r.jsx)(A.Ay, {
      children: (0, r.jsxs)(h.BJc, {
        direction: "vertical",
        gap: 24,
        children: [(0, r.jsx)(L.A, {
          invite: this.props.invite,
          error: null == (e = this.state.error) ? true : e.message
        }), (null == (t = this.state.error) ? true : t.code) === U.t02.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(V.intl.string(V.t.fIv16B)) : this.renderButton(V.intl.string(V.t.ohMvm1), this.handleAccept)]
      })
    })
  }
  renderExpiredInvite() {
    return this.renderInvalidInvite(false)
  }
  renderBannedInvite() {
    return this.renderInvalidInvite(true)
  }
  renderAppOpened(e) {
    let t = null != e ? e : this.handleContinue;
    return (0, r.jsxs)(A.Ay, {
      children: [(0, r.jsx)(A.hE, {
        className: W.QB,
        children: V.intl.string(V.t.csrAMJ)
      }), (0, r.jsx)(A.tK, {
        children: V.intl.string(V.t["m1+IBn"])
      }), this.renderButton(V.intl.string(V.t.fIv16B), () => t())]
    })
  }
  renderAuthenticatedHeader() {
    let {
      invite: e
    } = this.props;
    return null != e.guild_scheduled_event ? (0, r.jsx)(x.X, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, r.jsx)("div", {
      className: W.S3,
      children: (0, r.jsx)(L.A, {
        invite: e
      })
    })
  }
  renderAuthenicatedFooter() {
    let {
      invite: e
    } = this.props;
    return null != e.guild_scheduled_event && null != e.guild ? (0, r.jsx)(A.Ay, {
      className: W.QX,
      children: (0, r.jsx)(E.N, {
        guild: e.guild,
        onlineCount: e.approximate_presence_count
      })
    }) : null
  }
  renderAuthenticatedOrDownload() {
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(A.Ay, {
        children: [this.renderAuthenticatedHeader(), this.renderButton(V.intl.string(V.t.ohMvm1), this.handleAccept)]
      }), this.renderAuthenicatedFooter()]
    })
  }
  renderContinue() {
    return (0, r.jsxs)(A.Ay, {
      children: [(0, r.jsx)(A.hE, {
        children: V.intl.string(V.t.fOc4gn)
      }), this.renderButton(V.intl.string(V.t.fIv16B))]
    })
  }
  render() {
    let {
      invite: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: i,
      location: s
    } = this.props;
    if (t === U.fAW.OPEN) return this.renderAppOpened();
    switch (e.state) {
      case U.elq.APP_OPENED:
        return this.renderAppOpened();
      case U.elq.APP_NOT_OPENED:
        return this.renderContinue();
      case U.elq.RESOLVING:
      case U.elq.APP_OPENING:
        return this.renderSpinner(V.intl.string(V.t["Z+hCVU"]));
      case U.elq.RESOLVED:
        var l;
        if (n && (0, o.Lt)(null != (l = e.flags) ? l : 0, a.Q.IS_GUEST_INVITE)) return g.Ay.openApp(e.code), d.u.set(y.B, e.code), this.renderAppOpened(() => i(U.BVt.APP));
        if (n || !F.VP) return this.renderAuthenticatedOrDownload();
        if (this.getMode() === z) return (0, r.jsx)(D.A, {
          invite: e,
          transitionTo: i,
          location: s
        });
        else return (0, r.jsx)(B.A, {
          invite: e,
          onLoginStart: () => this.track(U.HAw.INVITE_LOGIN),
          location: s,
          transitionTo: i
        });
      case U.elq.ACCEPTING:
        return this.renderSpinner(V.intl.string(V.t["6wsY16"]));
      case U.elq.EXPIRED:
        return this.renderExpiredInvite();
      case U.elq.BANNED:
        return this.renderBannedInvite();
      case U.elq.ERROR:
        return this.renderErrorInvite();
      case U.elq.ACCEPTED:
      default:
        return null
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, H(this, "state", {
      error: null
    }), H(this, "getAcceptInviteContext", e => g.Ay.getInviteContext(e, this.props.invite)), H(this, "handleContinue", e => {
      let {
        invite: t,
        transitionTo: n
      } = this.props;
      if (null != t.channel || (null == e ? true : e.channel) != null) {
        var r;
        (null == (r = t.guild) ? true : r.id) != null ? n(U.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : g.Ay.transitionToInvite(null != e ? e : t, n)
      }
    }), H(this, "handleAccept", () => {
      this.setState({
        error: null
      });
      let e = this.getInviteKey();
      g.Ay.acceptInvite({
        inviteKey: e,
        context: this.getAcceptInviteContext(U.S3d.INVITE),
        skipOnboarding: true,
        callback: t => {
          (0, m.v)(t), null != t.channel && g.Ay.openApp(e, t.channel.id)
        }
      }).catch(e => {
        if (e instanceof f.Wl || e instanceof f.LG) {
          let t = (0, P.s)(e.code);
          this.setState({
            error: {
              code: e.code,
              message: t
            }
          })
        } else this.setState({
          error: {
            code: e.code,
            message: V.intl.string(V.t.dDZRdy)
          }
        })
      })
    }), H(this, "handleDefaultTransition", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }), H(this, "renderButton", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
        {
          invite: i
        } = t.props,
        s = null != i.guild_scheduled_event;
      return F.VP ? (0, r.jsx)("div", {
        className: s ? W.QX : W.eT,
        children: (0, r.jsx)(h.Button, {
          text: e,
          onClick: n,
          variant: s ? "active" : "primary",
          fullWidth: true
        })
      }) : (0, r.jsx)(A.KE, {
        className: W.eT
      })
    })
  }
}
let Y = Chunk311907.Ay.connectStores([Chunk299091.A, Chunk650048.A, Chunk961350.default, Chunk10088.A, Chunk17841.A], e => {
  var t;
  let {
    inviteKey: n
  } = e;
  return {
    invite: null != (t = T.A.getInvite(n)) ? t : {},
    nativeAppState: v.A.getState(n),
    authenticated: S.default.isAuthenticated(),
    defaultRoute: N.A.defaultRoute,
    isUnderage: _.A.isUnderageAnonymous()
  }
})(q)