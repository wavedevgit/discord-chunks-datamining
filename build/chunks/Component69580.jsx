/** Chunk was on web.js **/
/** chunk id: 69580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  OAuth2AuthorizeModal: () => el,
  OAuth2AuthorizePage: () => es,
  getOAuth2AuthorizeProps: () => ep,
  openOAuth2Modal: () => e_,
  openOAuth2ModalWithCreateGuildModal: () => ef,
  useOAuth2AuthorizeForm: () => eu
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./415506.js"), require("./642613.js"), require("./997841.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js"),
  Chunk373793 = require("./373793.js"),
  Chunk243814 = require("./243814.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk680018 = require("./680018.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk434650 = require("./434650.js"),
  Chunk367907 = require("./367907.js"),
  Chunk702493 = require("./702493.js"),
  Chunk162685 = require("./162685.js"),
  Chunk728345 = require("./728345.js"),
  Chunk979200 = require("./979200.js"),
  Chunk589414 = require("./589414.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk560067 = require("./560067.js"),
  Chunk353926 = require("./353926.js"),
  Chunk341298 = require("./341298.js"),
  Chunk703656 = require("./703656.js"),
  Chunk973616 = require("./973616.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk630388 = require("./630388.js"),
  Chunk700785 = require("./700785.js"),
  Chunk591759 = require("./591759.js"),
  Chunk807675 = require("./807675.js"),
  Chunk489863 = require("./489863.js"),
  Chunk228763 = require("./228763.js"),
  Chunk422559 = require("./422559.js"),
  Chunk713938 = require("./713938.js"),
  Chunk166148 = require("./166148.js"),
  Chunk807989 = require("./807989.jsx"),
  Chunk627799 = require("./627799.jsx"),
  Chunk260430 = require("./260430.jsx"),
  Chunk668185 = require("./668185.jsx"),
  Chunk407546 = require("./407546.jsx"),
  Chunk41259 = require("./41259.jsx"),
  Chunk28752 = require("./28752.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk574384 = require("./574384.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk565870 = require("./565870.js");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function es() {
  let e = (0, Chunk843611.TH)(),
    t = Chunk647438.useMemo(() => (0, Chunk807675.y)(module.search), [module.search]);
  (0, Chunk702493.Z)();
  let a = !module.search.includes("response_type"),
    [o, c] = Chunk647438.useState(false),
    u = Chunk647438.useRef(false),
    [d, f] = Chunk647438.useState(null),
    _ = !Chunk873546.tq && !o && (Chunk120356 || !Chunk314897.default.isAuthenticated());
  if (Chunk647438.useEffect(() => {
      if (Chunk873546.eL && Chunk120356) {
        let t = new URL("discord://action/oauth2/authorize");
        exports.search = module.search, window.open(exports.toString(), "_self")
      } else Chunk873546.tq || !Chunk120356 && Chunk314897.default.isAuthenticated() || Chunk243814.current || (Chunk243814.current = true, Promise.resolve().then(require.bind(require, 536285)).then(t => {
        let {
          default: n
        } = t;
        if (a) n.request($.Etm.DEEP_LINK, {
          type: ee.jE.OAUTH2,
          params: {
            search: e.search
          }
        }).then(e => {
          f(null != e && e)
        }).catch(() => f(false)).then(() => n.disconnect());
        else {
          f(true);
          let t = new URLSearchParams(e.search);
          n.request($.Etm.AUTHORIZE, {
            client_id: t.get("client_id"),
            scope: t.get("scope"),
            response_type: t.get("response_type"),
            redirect_uri: t.get("redirect_uri"),
            code_challenge: t.get("code_challenge"),
            code_challenge_method: t.get("code_challenge_method"),
            state: t.get("state"),
            permissions: t.get("permissions"),
            guild_id: t.get("guild_id"),
            channel_id: t.get("channel_id"),
            prompt: t.get("prompt"),
            disable_guild_select: t.get("disable_guild_select"),
            integration_type: t.get("integration_type"),
            nonce: t.get("nonce")
          }).then(e => {
            let {
              location: t
            } = e;
            t && (window.location.href = t)
          }).catch(() => f(false)).then(() => n.disconnect())
        }
      }))
    }, [module.search, Chunk120356]), Chunk952265 && false !== Chunk149765) {
    let e;
    return e = true === Chunk149765 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t.csrAMD)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk120356 ? Chunk388032.intl.string(Chunk388032.t["m1+IBg"]) : Chunk388032.intl.string(Chunk388032.t.kRzrSE)
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => Chunk373793(true),
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["Z+hCVV"])
      }), (0, Chunk951288.jsx)(Chunk922770.$, {})]
    }), (0, Chunk951288.jsx)(Chunk787025.G, {
      removeChildWrapper: true,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk565870.deepLinkContainer,
        children: module
      })
    })
  }
  return (0, Chunk951288.jsx)(Chunk787025.G, {
    removeChildWrapper: true,
    children: (0, Chunk951288.jsx)(el, eo(ei({
      transitionState: Chunk257465.D.ENTERED
    }, exports), {
      showLogout: true,
      isExternalStandaloneOAuthPage: true,
      hideHeader: true
    }))
  })
}

function el(e) {
  let {
    label: t,
    title: n,
    subtitle: i,
    header: a,
    body: s,
    actions: l,
    nextStep: c,
    appDetails: u,
    hasContentBackground: d,
    noPadding: f,
    modalSize: _
  } = eu(ei({}, e)), p = v.w.useExperiment({
    location: "oauth2_authorize"
  }), h = null != a || null != s || null != u ? (0, r.jsxs)("div", {
    className: en.authorize,
    children: [a, (0, r.jsxs)("div", {
      className: en.contentWrapper,
      children: [(0, r.jsxs)("div", {
        className: o()(en.content, d ? en.contentBackground : null, f ? en.noPadding : null),
        children: [s, null != c || p.enabled ? null : u]
      }), null == c && p.enabled ? (0, r.jsx)("div", {
        className: o()(en.content, d ? en.contentBackground : null, f ? en.noPadding : null),
        children: u
      }) : null]
    })]
  }) : null;
  return (0, r.jsx)(X.j, eo(ei({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: _,
    actions: l,
    title: n,
    subtitle: i,
    "aria-label": t,
    children: h
  }))
}

function ec() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk565870.loadingContainer,
    children: (0, Chunk951288.jsx)(Chunk922770.$, {
      className: Chunk565870.spinner
    })
  })
}

function eu(e) {
  var t, n, a, o, l, _, p;
  let h, m, O, A, C, {
      clientId: R,
      responseType: X,
      redirectUri: ee,
      codeChallenge: er,
      codeChallengeMethod: ei,
      state: ea,
      nonce: eo,
      prompt: es,
      authorizations: el,
      scopes: eu,
      permissions: ed,
      guildId: ef,
      channelId: e_,
      integrationType: ep,
      disableGuildSelect: eh = false,
      showLogout: em = false,
      cancelCompletesFlow: eg = true,
      isTrustedName: eE = false,
      isEmbeddedFlow: eb = false,
      callback: ey,
      callbackWithoutPost: eO,
      onClose: ev,
      disclosures: eI,
      isExternalStandaloneOAuthPage: eT = false,
      isTwoWayLinkDiscordConsent: eS = false
    } = e,
    eA = null != ep ? null == el ? true : el.get(ep) : true,
    eC = (0, s.TH)(),
    eN = (0, f.e7)([N.Z], () => N.Z.hasLoadedExperiments);
  i.useEffect(() => {
    x.default.isAuthenticated() && !eN && E.Z.getExperiments()
  }, [eN]);
  let [eR, eP] = i.useState(null), [ew, eD] = i.useState(null), [ex, eL] = i.useState(null), [ej, eM] = i.useState(false), [ek, eU] = i.useState(false), eG = null == eR ? true : eR.guilds, [eB, eZ] = i.useState(null != ef ? ef : null), [eF, eV] = i.useState(null != e_ ? e_ : null), [eH, eY] = i.useState(j.Hn), [eW, eK] = i.useState(false), ez = i.useMemo(() => (null == eR ? true : eR.user) != null ? new D.Z(eR.user) : null, [null == eR ? true : eR.user]), eq = (0, S.Z)(null != (t = null == eR ? true : eR.application) ? t : null), eX = i.useMemo(() => null == eG ? true : eG.find(e => e.id === eB), [eG, eB]), [eQ, eJ] = i.useState(null), e$ = i.useMemo(() => {
    var e;
    return null == eA && null == ep && (null != (e = null == eu ? true : eu.length) ? e : 0) === 0 && null == ee
  }, [eA, null == eu ? true : eu.length, ee, ep]), [e0, e1] = i.useState(null);
  i.useEffect(() => {
    e$ && I.ZP.fetchApplication(R).then(e => e1(w.ZP.createFromServer(e)))
  }, [R, e$]);
  let e2 = i.useMemo(() => {
      var e, t;
      return null == eQ ? null : null == e0 || null == (t = e0.integrationTypesConfig) || null == (e = t[eQ]) ? true : e.oauth2InstallParams
    }, [null == e0 ? true : e0.integrationTypesConfig, eQ]),
    e3 = v.w.useExperiment({
      location: "oauth2_authorize"
    }),
    {
      requestedScopes: e4,
      accountScopes: e8
    } = i.useMemo(() => {
      let e = e$ ? null == e2 ? true : e2.scopes : eu,
        t = (0, k.K)(null != e ? e : []),
        n = Z.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == e2 ? true : e2.scopes, eu, e$]),
    e5 = i.useMemo(() => {
      var e;
      let t = e$ ? d.vB(null != (e = null == e2 ? true : e2.permissions) ? e : 0) : ed;
      return null != t ? t : j.Hn
    }, [null == e2 ? true : e2.permissions, ed, e$]),
    e6 = i.useRef(false),
    [e7, e9] = i.useState(null != eI ? eI : []),
    [te, tt] = i.useState(null != eI && eI.length > 0);
  i.useEffect(() => {
    if (e6.current) return;
    let e = async () => {
      e6.current = true;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, T.de)(R);
        tt(!t), e9(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) return void(0, U.c$)(eC, "oauth2_error_failed_disclosures");
        eL(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e6.current = false
      }
    };
    if (null == eI) {
      if (!x.default.isAuthenticated()) return void(0, U.c$)(eC, "oauth2_error_not_authenticated");
      e()
    }
  }, [R, eC, eI, e9, eL, tt, eD]);
  let tn = i.useCallback(async e => {
      if (null != eO) {
        eM(true), eO(e);
        return
      }
      if (!e && !eg) {
        null != ey && (ey({
          application: null == eR ? true : eR.application,
          guild: eX
        }), null == ev || ev());
        return
      }
      if (null == eQ) return void eL(Error("No integration type was selected."));
      try {
        eM(true);
        let n = await (0, U.Iq)({
          authorize: e,
          clientId: R,
          scopes: e4,
          responseType: X,
          redirectUri: ee,
          codeChallenge: er,
          codeChallengeMethod: ei,
          state: ea,
          nonce: eo,
          integrationType: eQ,
          permissions: d.Od(e5, eH),
          guildId: eQ === c.Y.GUILD_INSTALL && null != eB ? eB : true,
          channelId: eQ === c.Y.GUILD_INSTALL && null != eF ? eF : true,
          dmSettings: {
            allowMobilePush: eW
          }
        });
        if (e && await (0, T.x9)(R, e7), null != ey) ey({
          application: null == eR ? true : eR.application,
          location: n.location,
          guild: eX
        }), null == ev || ev();
        else if (null != n.location) {
          var t;
          let e = null == (t = M.Z.toURLSafe(n.location)) ? true : t.pathname;
          M.Z.isDiscordUrl(n.location) && e === $.Z5c.OAUTH2_AUTHORIZED ? (0, P.uL)($.Z5c.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eR ? true : eR.application,
              guild: eX
            }
          }) : window.location = n.location
        } else eM(false)
      } catch (t) {
        let e = t.body;
        (null == e ? true : e.message) != null && "" !== e.message ? eL(Error(e.message)) : eL(e), eD("AUTHORIZE_SCOPES"), eM(false)
      }
    }, [eO, eg, ey, null == eR ? true : eR.application, eX, ev, R, e4, X, ee, er, ei, ea, eo, e5, eH, eB, eQ, eF, e7, eW]),
    tr = i.useRef(false),
    ti = i.useCallback(async () => {
      if (!x.default.isAuthenticated()) return void(0, U.c$)(eC, "oauth2_error_not_authenticated");
      if (!e6.current && !tr.current) {
        tr.current = true;
        try {
          let e = null != eA ? eA : await (0, U.Ww)({
            clientId: R,
            scopes: e4,
            responseType: X,
            redirectUri: ee,
            codeChallenge: er,
            codeChallengeMethod: ei,
            state: ea,
            nonce: eo,
            integrationType: null != eQ ? eQ : true
          });
          eP((0, G.d)(e)), es === F.s.NONE && e.authorized && !te && tn(true), (0, y.yw)($.rMx.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id,
            mobile_push_notification_default_setting: false
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) return void(0, U.c$)(eC, "oauth2_error_unauthorized");
          eL(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
        } finally {
          tr.current = false
        }
      }
    }, [eC, eA, R, e4, X, ee, er, ei, ea, eo, eQ, es, tn, te]),
    ta = i.useMemo(() => {
      var e;
      return null != e0 && e$ ? Object.entries(null != (e = e0.integrationTypesConfig) ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [e0, e$]),
    to = i.useRef(null);
  i.useEffect(() => {
    ew !== to.current && (to.current = ew, (0, y.yw)($.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
      step: ew,
      application_id: R,
      integration_type: eQ,
      scopes: e4,
      permissions: e5.toString(),
      mobile_push_notification_default_setting: false
    }))
  }, [R, eQ, e5, e4, ew]), i.useEffect(() => {
    if (null == ew && (!e$ || null != e0) && eN)
      if (null != eA) {
        var e;
        eJ(null != (e = eA.integration_type) ? e : c.Y.GUILD_INSTALL), eD("AUTHORIZE_SCOPES")
      } else ta.length > 1 ? eD("SELECT_INSTALL_TYPE") : (1 === ta.length ? eJ(ta[0]) : null != ep ? eJ(ep) : eJ(c.Y.GUILD_INSTALL), eD("AUTHORIZE_SCOPES"))
  }, [eA, ta, e0, e$, ep, ew, eN]), i.useEffect(() => {
    if (null == eQ || null != eR || null != ex) return;
    eQ === c.Y.USER_INSTALL && (eZ(null), eV(null));
    let e = e4.filter(e => !Z.ak.includes(e));
    0 === e4.length ? eL(Error("No scopes were provided.")) : e.length > 0 ? eL(Error("Invalid scope: ".concat(e[0]))) : (0, B._$)(e5) ? eL(Error("Invalid permission(s) provided.")) : ti()
  }, [te, ti, e4, e5, eQ, eR, ex]);
  let ts = i.useCallback(e => {
      e && eU(true)
    }, []),
    tl = (0, b.O)(ts);
  if (ex instanceof Error) return eT ? {
    body: (0, r.jsx)(Q.Lk, {
      message: ex.message
    })
  } : eS ? {
    label: et.intl.string(et.t.j2d6Ki),
    header: (0, r.jsx)(g.Text, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: et.intl.string(et.t.j2d6Ki)
    }),
    body: (0, r.jsx)(g.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: ex.message
    }),
    actions: [{
      onClick: ev,
      text: et.intl.string(et.t.cpT0Cg)
    }],
    noPadding: true
  } : {
    title: et.intl.string(et.t.j2d6Ki),
    subtitle: ex.message,
    actions: [{
      onClick: ev,
      text: et.intl.string(et.t.cpT0Cg)
    }]
  };
  let tc = e => {
      eJ(e), eP(null), eD("AUTHORIZE_SCOPES")
    },
    tu = (e, t) => {
      eY(n => e ? d.Od(n, t) : d.IH(n, t))
    },
    td = false,
    tf = false,
    t_ = true,
    tp = true,
    th = true,
    tm = false;
  switch (ew) {
    case null:
      return {
        label: et.intl.string(et.t.ZTNur6), body: (0, r.jsx)(ec, {})
      };
    case "SELECT_INSTALL_TYPE":
      if (null == e0) return {
        label: et.intl.string(et.t.ZTNur6),
        body: (0, r.jsx)(ec, {})
      };
      h = (0, r.jsx)(q.Z, {
        application: e0,
        onSelect: tc
      }), t_ = false, tp = false, th = false, tm = true;
      break;
    case "AUTHORIZE_SCOPES":
      if (null == eR || null == ez || null == eQ) return {
        label: et.intl.string(et.t.ZTNur6),
        body: (0, r.jsx)(ec, {})
      };
      let tg = null == ex || ex instanceof Error ? {} : ex,
        tE = null == eG ? true : eG.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        tb = eQ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
        ty = tb || eQ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS)),
        tO = (0, L.yE)(null != (n = eR.application.flags) ? n : 0, $.udG.EMBEDDED) && eQ === c.Y.USER_INSTALL && e3.enabled;
      h = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(H.Z, {
          application: eR.application,
          accountScopes: e8
        }), (0, r.jsx)(Y.Z, {
          application: eR.application,
          accountScopes: e8,
          requestedScopes: e4,
          integrationType: eQ,
          errors: tg,
          isTrustedName: eE || eq,
          noDivider: !tO && !ty && !tb && e3.enabled
        }), tO ? (0, r.jsx)(g.j7V, {
          hideBorder: true,
          onChange: eK,
          className: en.mobilePushContainer,
          note: et.intl.string(et.t.hw1nKS),
          value: eW,
          children: (0, r.jsx)(g.Text, {
            variant: "text-sm/medium",
            children: et.intl.string(et.t["Pkw//v"])
          })
        }) : null, (0, r.jsx)("div", {
          className: en.intObserver,
          ref: tl
        }), ty ? (0, r.jsx)(K.Z, {
          error: (null != (o = null != (a = tg[u.x.BOT]) ? a : tg[u.x.APPLICATIONS_COMMANDS]) ? o : [])[0],
          selectedGuildId: eB,
          onGuildChange: eZ,
          guilds: null != tE ? tE : [],
          disabled: "" !== eB && null != eB && true === eh
        }) : null, tb ? (0, r.jsx)(J.Z, {
          error: (null != (l = tg[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
          selectedChannelId: eF,
          selectedGuildId: eB,
          onChannelChange: eV
        }) : null]
      }), e4.includes(u.x.BOT) && !d.fS(e5, j.Hn) && (O = "AUTHORIZE_BOT_PERMISSIONS"), ta.length > 1 && (m = "SELECT_INSTALL_TYPE"), tf = ty && null == eX || tb && null == eF, td = true;
      break;
    case "AUTHORIZE_BOT_PERMISSIONS":
      if (null == eR) return {
        label: et.intl.string(et.t.ZTNur6),
        body: (0, r.jsx)(ec, {})
      };
      h = (0, r.jsx)(W.Z, {
        application: eR.application,
        permissions: e5,
        deniedPermissions: eH,
        onPermissionsChange: tu,
        guild: eX
      }), m = "AUTHORIZE_SCOPES", td = true
  }
  let tv = [];
  if (t_ && null != eR) {
    let e = null == (_ = eR.bot) ? true : _.approximate_guild_count;
    A = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(V.Z, {
        application: eR.application,
        scopes: e4,
        disclosures: e7,
        redirectUri: null != (p = eR.redirect_uri) ? p : null,
        approximateGuildCount: true !== e ? e : null,
        isEmbeddedFlow: eb
      }), (0, r.jsx)("div", {
        className: en.intObserver,
        ref: tl
      })]
    })
  }
  return tp && null != eR && null != ez && (C = (0, r.jsx)(z.Z, {
    user: ez,
    application: eR.application,
    bot: eR.bot,
    accountScopes: e8,
    showLogout: em || false,
    location: eC,
    scopes: e4
  })), th && (tv.push(null != m ? {
    variant: "secondary",
    onClick: () => eD(m),
    text: et.intl.string(et.t["13/7kZ"])
  } : {
    variant: "secondary",
    onClick: () => tn(false),
    text: et.intl.string(et.t["ETE/oK"])
  }), "SELECT_INSTALL_TYPE" !== ew && tv.push(ek ? {
    onClick: null != O ? () => eD(O) : () => tn(true),
    loading: ej,
    disabled: null == A || tf,
    text: tf ? et.intl.string(et.t.BwwiSE) : null != O ? et.intl.string(et.t["3PatS0"]) : et.intl.string(et.t["y+/PEx"])
  } : {
    disabled: true,
    loading: ej,
    text: et.intl.string(et.t.N22i9P),
    icon: g.cQm
  })), {
    header: C,
    body: h,
    actions: tv,
    nextStep: O,
    appDetails: A,
    sendAuthorize: tn,
    hasContentBackground: td,
    noPadding: tm
  }
}

function ed(e, t) {
  var n, i;
  if (null == t.location || null != e.callback && e.callback(t)) return;
  let {
    host: a,
    pathname: o,
    searchParams: s
  } = null != (n = M.Z.toURLSafe(t.location)) ? n : {}, l = M.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
  l && o === $.Z5c.OAUTH2_AUTHORIZED ? (0, _.h7)(e => (0, r.jsx)(Q.jO, ei({
    guild: t.guild,
    application: t.application
  }, e))) : l && (null == o ? true : o.startsWith($.Z5c.OAUTH2_ERROR)) ? (0, _.h7)(e => {
    var t, n;
    let i = null != (n = null != (t = null == s ? true : s.get("error_description")) ? t : null == s ? true : s.get("error")) ? n : et.intl.string(et.t["mqn87+"]);
    return Array.isArray(i) && (i = i[0]), (0, r.jsx)(X.j, eo(ei({}, e), {
      children: (0, r.jsx)(Q.Lk, {
        message: i,
        onClose: e.onClose
      })
    }))
  }) : null == (i = window.open(t.location, "_blank")) || i.focus()
}

function ef(e, t) {
  if ((0, R.g)("create-guild-and-oauth2-modal")) return void C.Z.openCreateGuildModal({
    onSuccess: n => e_(eo(ei({}, e), {
      guildId: n
    }), t)
  });
  e_(e, t)
}

function e_(e, t) {
  (0, _.h7)(t => (0, r.jsx)(el, eo(ei({}, t, e), {
    cancelCompletesFlow: false,
    callback: ed.bind(null, e)
  })), {
    onCloseCallback: t
  })
}

function ep(e) {
  var t;
  let {
    hostname: n = "",
    host: r,
    pathname: i,
    search: a
  } = null != (t = M.Z.toURLSafe(e)) ? t : {};
  return null != i && null != a && (M.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith("/api".concat($.ANM.OAUTH2_AUTHORIZE)) || i.startsWith($.Z5c.OAUTH2_AUTHORIZE)) ? (0, k.y)(a) : null
}