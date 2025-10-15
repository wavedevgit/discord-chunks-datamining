/** Chunk was on 27978 **/
/** chunk id: 344295, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk533800 = require("./533800.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk298444 = require("./298444.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk899370 = require("./899370.js"),
  Chunk267394 = require("./267394.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk639946 = require("./639946.jsx"),
  Chunk792766 = require("./792766.jsx"),
  Chunk362762 = require("./362762.js"),
  Chunk978684 = require("./978684.js"),
  Chunk264229 = require("./264229.js"),
  Chunk929809 = require("./929809.js"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk701190 = require("./701190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk63063 = require("./63063.js"),
  Chunk782605 = require("./782605.js"),
  Chunk954824 = require("./954824.js"),
  Chunk588705 = require("./588705.jsx"),
  Chunk781428 = require("./781428.jsx"),
  Chunk423527 = require("./423527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk188785 = require("./188785.js"),
  Chunk701476 = require("./701476.js"),
  Chunk436620 = require("./436620.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
let F = "Accept Invite Page",
  z = "register",
  V = "login";
async function K(e) {
  let {
    invite: t
  } = await d.ZP.resolveInvite(e, F);
  null != t && (0, p.A)(t)
}
class H extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      isUnderage: e,
      login: t,
      inviteKey: n
    } = this.props;
    if (Chunk626135.default.track(Chunk981631.rMx.INVITE_VIEWED, {
        invite_code: require
      }, {
        flush: true
      }), (0, Chunk108427.e)("invite"), !Chunk436620.KO) {
      let e = this.getInviteKey();
      Chunk954824.Z.launch("discord://" + Chunk981631.Z5c.INVITE(module), () => true)
    }
    if (!exports && module) {
      let e = this.getInviteKey(),
        {
          baseCode: t
        } = (0, Chunk264229.fU)(module);
      (0, Chunk703656.dL)(Chunk981631.Z5c.INVITE_LOGIN(exports))
    }
  }
  componentDidUpdate(e) {
    let {
      invite: t,
      nativeAppState: n,
      authenticated: r,
      transitionTo: i
    } = this.props, s = this.getInviteKey();
    if (s !== this.getInviteKey(e)) K(s);
    else if (t.state === w.r2o.APP_NOT_OPENED) this.handleContinue();
    else if (this.getMode() === V && r !== e.authenticated && r) {
      let e = N.default.getFingerprint();
      if (null != e) {
        let t = (0, o.s)(e);
        this.track(w.rMx.INVITE_LOGIN_SUCCESSFUL, true, {
          prev_user_id: t
        })
      }
      d.ZP.acceptInvite({
        inviteKey: s,
        context: this.getAcceptInviteContext(F),
        skipOnboarding: true,
        callback: this.handleContinue
      })
    }
    if (n !== e.nativeAppState && n === w.kEZ.OPEN && this.track(w.rMx.INVITE_APP_INVOKED, false), this.getMode() === z && r && !e.authenticated) {
      let {
        channel: e
      } = t;
      if (null != e)
        if ((0, b.c)(k.M5.INVITE_UNCLAIMED), null != t.guild) {
          var l, c, u;
          let e = (0, C.yE)(null != (u = t.flags) ? u : 0, a.$.IS_APPLICATION_BYPASS),
            n = (null == (l = t.guild.features) ? true : l.includes(w.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (c = t.guild.features) ? true : c.includes(w.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL));
          i(!e && n ? w.Z5c.GUILD_MEMBER_VERIFICATION(t.guild.id) : w.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
        } else d.ZP.transitionToInvite(t, i)
    }
  }
  getInviteKey() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return module.inviteKey
  }
  getMode() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return Chunk188785.a ? z : module.login ? V : z
  }
  track(e, t, n) {
    let {
      invite: r
    } = this.props, i = this.getInviteKey(), s = (0, v.jX)(i), l = t ? {
      guild_id: null != r.guild ? r.guild.id : null,
      channel_id: null != r.channel ? r.channel.id : null,
      inviter_id: null != r.inviter ? r.inviter.id : null,
      invite_code: s
    } : {
      invite_code: s
    };
    S.default.track(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          B(e, t, n[t])
        })
      }
      return e
    }({}, l, n))
  }
  renderSpinner(e) {
    return (0, r.jsxs)(m.ZP, {
      children: [(0, r.jsx)(m.Dx, {
        children: e
      }), (0, r.jsx)(m.Hh, {})]
    })
  }
  renderInvalidInvite() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./167969.js"),
        className: Chunk197571.marginBottom8
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: l()(Chunk197571.marginTop8, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.kux01N)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: module ? Chunk388032.intl.string(Chunk388032.t["5AkWAQ"]) : Chunk388032.intl.string(Chunk388032.t["+qUJAg"])
      }), this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O)), (0, Chunk951288.jsx)(Chunk388905.zx, {
        onClick: () => window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.INVALID_INVITES), "_blank"),
        look: Chunk388905.zx.Looks.LINK,
        color: Chunk388905.zx.Colors.LINK,
        className: Chunk197571.marginTop8,
        children: Chunk388032.intl.string(Chunk388032.t.urIwn5)
      })]
    })
  }
  renderErrorInvite() {
    var e, t;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk588705.Z, {
        invite: this.props.invite,
        error: null == (e = this.state.error) ? true : module.message
      }), (null == (t = this.state.error) ? true : exports.code) === Chunk981631.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O)) : this.renderButton(Chunk388032.intl.string(Chunk388032.t.ohMvm5), this.handleAccept)]
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
    return (0, r.jsxs)(m.ZP, {
      children: [(0, r.jsx)(m.Dx, {
        className: G.marginBottom8,
        children: U.intl.string(U.t.csrAMD)
      }), (0, r.jsx)(m.DK, {
        children: U.intl.string(U.t["m1+IBg"])
      }), this.renderButton(U.intl.string(U.t.fIv16O), () => t())]
    })
  }
  renderAuthenticatedHeader() {
    let {
      invite: e
    } = this.props;
    return null != module.guild_scheduled_event ? (0, Chunk951288.jsx)(Chunk639946.r, {
      channel: module.channel,
      guildScheduledEvent: module.guild_scheduled_event
    }) : (0, Chunk951288.jsx)(Chunk588705.Z, {
      invite: module
    })
  }
  renderAuthenicatedFooter() {
    let {
      invite: e
    } = this.props;
    return null != module.guild_scheduled_event && null != module.guild ? (0, Chunk951288.jsx)(Chunk388905.ZP, {
      className: Chunk197571.marginTop20,
      children: (0, Chunk951288.jsx)(Chunk792766.y, {
        guild: module.guild,
        onlineCount: module.approximate_presence_count
      })
    }) : null
  }
  renderAuthenticatedOrDownload() {
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsxs)(Chunk388905.ZP, {
        children: [this.renderAuthenticatedHeader(), this.renderButton(Chunk388032.intl.string(Chunk388032.t.ohMvm5), this.handleAccept)]
      }), this.renderAuthenicatedFooter()]
    })
  }
  renderContinue() {
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t.fOc4go)
      }), this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O))]
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
    if (exports === Chunk981631.kEZ.OPEN) return this.renderAppOpened();
    switch (module.state) {
      case Chunk981631.r2o.APP_OPENED:
        return this.renderAppOpened();
      case Chunk981631.r2o.APP_NOT_OPENED:
        return this.renderContinue();
      case Chunk981631.r2o.RESOLVING:
        return Chunk188785.a ? this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.MKDeyM)) : this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVV"]));
      case Chunk981631.r2o.APP_OPENING:
        return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVV"]));
      case Chunk981631.r2o.RESOLVED:
        var l;
        if (require && (0, Chunk630388.yE)(null != (l = module.flags) ? l : 0, Chunk533800.$.IS_GUEST_INVITE)) return Chunk447543.ZP.openApp(module.code), Chunk298444.x.set(Chunk978684.J, module.code), this.renderAppOpened(() => Chunk647438(Chunk981631.Z5c.APP));
        if (require || !Chunk436620.KO) return this.renderAuthenticatedOrDownload();
        if (this.getMode() === V) return (0, Chunk951288.jsx)(Chunk781428.Z, {
          invite: module,
          transitionTo: Chunk647438,
          location: Chunk120356
        });
        else return (0, Chunk951288.jsx)(Chunk423527.Z, {
          invite: module,
          onLoginStart: () => this.track(Chunk981631.rMx.INVITE_LOGIN, true),
          location: Chunk120356,
          transitionTo: Chunk647438
        });
      case Chunk981631.r2o.ACCEPTING:
        return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["6wsY19"]));
      case Chunk981631.r2o.EXPIRED:
        return this.renderExpiredInvite();
      case Chunk981631.r2o.BANNED:
        return this.renderBannedInvite();
      case Chunk981631.r2o.ERROR:
        return this.renderErrorInvite();
      case Chunk981631.r2o.ACCEPTED:
      default:
        return null
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, B(this, "state", {
      error: null
    }), B(this, "getAcceptInviteContext", e => d.ZP.getInviteContext(e, this.props.invite)), B(this, "handleContinue", e => {
      let {
        invite: t,
        transitionTo: n
      } = this.props;
      if (null != t.channel || (null == e ? true : e.channel) != null) {
        var r;
        (null == (r = t.guild) ? true : r.id) != null ? n(w.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.ZP.transitionToInvite(null != e ? e : t, n)
      }
    }), B(this, "handleAccept", () => {
      this.setState({
        error: null
      });
      let e = this.getInviteKey();
      d.ZP.acceptInvite({
        inviteKey: e,
        context: this.getAcceptInviteContext(F),
        skipOnboarding: true,
        callback: t => {
          (0, p.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id)
        }
      }).catch(e => {
        if (e instanceof h.yZ || e instanceof h.Hx) {
          let t = (0, T.O)(e.code);
          this.setState({
            error: {
              code: e.code,
              message: t
            }
          })
        } else this.setState({
          error: {
            code: e.code,
            message: U.intl.string(U.t.dDZRd3)
          }
        })
      })
    }), B(this, "handleDefaultTransition", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }), B(this, "renderButton", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
        {
          invite: i
        } = t.props,
        s = null != i.guild_scheduled_event;
      return M.KO ? (0, r.jsx)(m.zx, {
        className: s ? G.marginTop20 : G.marginTop40,
        onClick: n,
        color: s ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
        children: e
      }) : (0, r.jsx)(m.v6, {
        className: G.marginTop40
      })
    })
  }
}
let W = Chunk442837.ZP.connectStores([Chunk701190.Z, Chunk896797.Z, Chunk314897.default, Chunk362762.Z, Chunk899370.Z], e => {
  var t;
  let {
    inviteKey: n
  } = e;
  return {
    invite: null != (t = y.Z.getInvite(n)) ? t : {},
    nativeAppState: x.Z.getState(n),
    authenticated: N.default.isAuthenticated(),
    defaultRoute: O.Z.defaultRoute,
    isUnderage: g.Z.isUnderageAnonymous()
  }
})(H)