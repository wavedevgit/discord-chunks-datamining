/** Chunk was on 27978 **/
n.d(t, {
  Z: () => H
}), n(789020), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(533800),
  s = n(756647),
  c = n(442837),
  u = n(298444),
  d = n(447543),
  h = n(881052),
  p = n(899370),
  g = n(267394),
  _ = n(388905),
  m = n(639946),
  f = n(792766),
  b = n(362762),
  x = n(978684),
  N = n(264229),
  v = n(929809),
  I = n(703656),
  E = n(108427),
  C = n(314897),
  j = n(896797),
  O = n(701190),
  S = n(626135),
  y = n(630388),
  T = n(63063),
  P = n(782605),
  A = n(954824),
  Z = n(588705),
  R = n(781428),
  w = n(423527),
  L = n(981631),
  D = n(188785),
  k = n(701476),
  W = n(436620),
  B = n(388032),
  M = n(802138);

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
c.ZP.initialize();
let U = "Accept Invite Page",
  F = {
    REGISTER: "register",
    LOGIN: "login"
  };
async function z(e) {
  let {
    invite: t
  } = await d.ZP.resolveInvite(e, U);
  null != t && (0, g.A)(t)
}
class V extends i.PureComponent {
  componentDidMount() {
    let {
      isUnderage: e,
      login: t,
      inviteKey: n
    } = this.props;
    if (S.default.track(L.rMx.INVITE_VIEWED, {
        invite_code: n
      }, {
        flush: !0
      }), (0, E.e)("invite"), !W.KO) {
      let e = this.getInviteKey();
      A.Z.launch("discord://" + L.Z5c.INVITE(e), () => void 0)
    }
    if (!t && e) {
      let e = this.getInviteKey(),
        {
          baseCode: t
        } = (0, N.fU)(e);
      (0, I.dL)(L.Z5c.INVITE_LOGIN(t))
    }
  }
  componentDidUpdate(e) {
    let {
      invite: t,
      nativeAppState: n,
      authenticated: r,
      transitionTo: i
    } = this.props, o = this.getInviteKey();
    if (o !== this.getInviteKey(e)) z(o);
    else if (t.state === L.r2o.APP_NOT_OPENED) this.handleContinue();
    else if (this.getMode() === F.LOGIN && r !== e.authenticated && r) {
      let e = C.default.getFingerprint();
      if (null != e) {
        let t = (0, s.s)(e);
        this.track(L.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
          prev_user_id: t
        })
      }
      d.ZP.acceptInvite({
        inviteKey: o,
        context: this.getAcceptInviteContext(U),
        skipOnboarding: !0,
        callback: this.handleContinue
      })
    }
    if (n !== e.nativeAppState && n === L.kEZ.OPEN && this.track(L.rMx.INVITE_APP_INVOKED, !1), this.getMode() === F.REGISTER && r && !e.authenticated) {
      let {
        channel: e
      } = t;
      null != e && ((0, v.c)(k.M5.INVITE_UNCLAIMED), null != t.guild ? i(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.ZP.transitionToInvite(t, i))
    }
  }
  getInviteKey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.inviteKey
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return D.a ? F.REGISTER : e.login ? F.LOGIN : F.REGISTER
  }
  track(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      {
        invite: r
      } = this.props,
      i = this.getInviteKey(),
      o = (0, N.jX)(i),
      a = t ? {
        guild_id: null != r.guild ? r.guild.id : null,
        channel_id: null != r.channel ? r.channel.id : null,
        inviter_id: null != r.inviter ? r.inviter.id : null,
        invite_code: o
      } : {
        invite_code: o
      };
    S.default.track(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          G(e, t, n[t])
        })
      }
      return e
    }({}, a, n))
  }
  renderSpinner(e) {
    return (0, r.jsxs)(_.ZP, {
      children: [(0, r.jsx)(_.Dx, {
        children: e
      }), (0, r.jsx)(_.Hh, {})]
    })
  }
  renderInvalidInvite() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, r.jsxs)(_.ZP, {
      children: [(0, r.jsx)(_.Ee, {
        src: n(167969),
        className: M.marginBottom8
      }), (0, r.jsx)(_.Dx, {
        className: a()(M.marginTop8, M.marginBottom8),
        children: B.NW.string(B.t.kux01N)
      }), (0, r.jsx)(_.DK, {
        children: e ? B.NW.string(B.t["5AkWAQ"]) : B.NW.string(B.t["+qUJAg"])
      }), this.renderButton(B.NW.string(B.t.fIv16O)), (0, r.jsx)(_.zx, {
        onClick: () => window.open(T.Z.getArticleURL(L.BhN.INVALID_INVITES), "_blank"),
        look: _.zx.Looks.LINK,
        color: _.zx.Colors.LINK,
        className: M.marginTop8,
        children: B.NW.string(B.t.urIwn5)
      })]
    })
  }
  renderErrorInvite() {
    var e, t;
    return (0, r.jsxs)(_.ZP, {
      children: [(0, r.jsx)(Z.Z, {
        invite: this.props.invite,
        error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
      }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === L.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(B.NW.string(B.t.fIv16O)) : this.renderButton(B.NW.string(B.t.ohMvm5), this.handleAccept)]
    })
  }
  renderExpiredInvite() {
    return this.renderInvalidInvite(!1)
  }
  renderBannedInvite() {
    return this.renderInvalidInvite(!0)
  }
  renderAppOpened(e) {
    let t = null != e ? e : this.handleContinue;
    return (0, r.jsxs)(_.ZP, {
      children: [(0, r.jsx)(_.Dx, {
        className: M.marginBottom8,
        children: B.NW.string(B.t.csrAMD)
      }), (0, r.jsx)(_.DK, {
        children: B.NW.string(B.t["m1+IBg"])
      }), this.renderButton(B.NW.string(B.t.fIv16O), () => t())]
    })
  }
  renderAuthenticatedHeader() {
    let {
      invite: e
    } = this.props;
    return null != e.stage_instance && null != e.guild ? (0, r.jsx)(f.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : null != e.guild_scheduled_event ? (0, r.jsx)(m.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, r.jsx)(Z.Z, {
      invite: e
    })
  }
  renderAuthenicatedFooter() {
    let {
      invite: e
    } = this.props;
    return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, r.jsx)(_.ZP, {
      className: M.marginTop20,
      children: (0, r.jsx)(f.y, {
        guild: e.guild,
        onlineCount: e.approximate_presence_count
      })
    }) : null
  }
  renderAuthenticatedOrDownload() {
    let {
      invite: e
    } = this.props, t = null != e.stage_instance ? B.NW.string(B.t["5UKyUl"]) : B.NW.string(B.t.ohMvm5);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(_.ZP, {
        children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
      }), this.renderAuthenicatedFooter()]
    })
  }
  renderContinue() {
    return (0, r.jsxs)(_.ZP, {
      children: [(0, r.jsx)(_.Dx, {
        children: B.NW.string(B.t.fOc4go)
      }), this.renderButton(B.NW.string(B.t.fIv16O))]
    })
  }
  render() {
    let {
      invite: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: i,
      location: o
    } = this.props;
    if (t === L.kEZ.OPEN) return this.renderAppOpened();
    switch (e.state) {
      case L.r2o.APP_OPENED:
        return this.renderAppOpened();
      case L.r2o.APP_NOT_OPENED:
        return this.renderContinue();
      case L.r2o.RESOLVING:
        return D.a ? this.renderSpinner(B.NW.string(B.t.MKDeyM)) : this.renderSpinner(B.NW.string(B.t["Z+hCVV"]));
      case L.r2o.APP_OPENING:
        return this.renderSpinner(B.NW.string(B.t["Z+hCVV"]));
      case L.r2o.RESOLVED:
        var a;
        if (n && (0, y.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, l.$.IS_GUEST_INVITE)) return d.ZP.openApp(e.code), u.x.set(x.J, e.code), this.renderAppOpened(() => i(L.Z5c.APP));
        if (n || !W.KO) return this.renderAuthenticatedOrDownload();
        if (this.getMode() === F.LOGIN) return (0, r.jsx)(R.Z, {
          invite: e,
          transitionTo: i,
          location: o
        });
        else return (0, r.jsx)(w.Z, {
          invite: e,
          onLoginStart: () => this.track(L.rMx.INVITE_LOGIN, !0),
          location: o,
          transitionTo: i
        });
      case L.r2o.ACCEPTING:
        return this.renderSpinner(B.NW.string(B.t["6wsY19"]));
      case L.r2o.EXPIRED:
        return this.renderExpiredInvite();
      case L.r2o.BANNED:
        return this.renderBannedInvite();
      case L.r2o.ERROR:
        return this.renderErrorInvite();
      case L.r2o.ACCEPTED:
      default:
        return null
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, G(this, "state", {
      error: null
    }), G(this, "getAcceptInviteContext", e => d.ZP.getInviteContext(e, this.props.invite)), G(this, "handleContinue", e => {
      let {
        invite: t,
        transitionTo: n
      } = this.props;
      if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
        var r;
        (null === (r = t.guild) || void 0 === r ? void 0 : r.id) != null ? n(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.ZP.transitionToInvite(null != e ? e : t, n)
      }
    }), G(this, "handleAccept", () => {
      this.setState({
        error: null
      });
      let e = this.getInviteKey();
      d.ZP.acceptInvite({
        inviteKey: e,
        context: this.getAcceptInviteContext(U),
        skipOnboarding: !0,
        callback: t => {
          (0, g.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id)
        }
      }).catch(e => {
        if (e instanceof h.yZ || e instanceof h.Hx) {
          let t = (0, P.O)(e.code);
          this.setState({
            error: {
              code: e.code,
              message: t
            }
          })
        } else this.setState({
          error: {
            code: e.code,
            message: B.NW.string(B.t.dDZRd3)
          }
        })
      })
    }), G(this, "handleDefaultTransition", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }), G(this, "renderButton", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
        {
          invite: i
        } = t.props,
        o = null != i.stage_instance || null != i.guild_scheduled_event;
      return W.KO ? (0, r.jsx)(_.zx, {
        className: o ? M.marginTop20 : M.marginTop40,
        onClick: n,
        color: o ? _.zx.Colors.GREEN : _.zx.Colors.BRAND,
        children: e
      }) : (0, r.jsx)(_.v6, {
        className: M.marginTop40
      })
    })
  }
}
let H = c.ZP.connectStores([O.Z, j.Z, C.default, b.Z, p.Z], e => {
  var t;
  let {
    inviteKey: n
  } = e;
  return {
    invite: null !== (t = O.Z.getInvite(n)) && void 0 !== t ? t : {},
    nativeAppState: b.Z.getState(n),
    authenticated: C.default.isAuthenticated(),
    defaultRoute: j.Z.defaultRoute,
    isUnderage: p.Z.isUnderageAnonymous()
  }
})(V)