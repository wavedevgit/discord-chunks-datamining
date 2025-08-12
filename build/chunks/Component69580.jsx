/** Chunk was on web.js **/
/** chunk id: 69580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  OAuth2AuthorizeModal: () => ec,
  OAuth2AuthorizePage: () => el,
  getOAuth2AuthorizeProps: () => eh,
  openOAuth2Modal: () => ep,
  openOAuth2ModalWithCreateGuildModal: () => e_,
  useOAuth2AuthorizeForm: () => ed
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./415506.js"), require("./642613.js"), require("./997841.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk114858 = require("./114858.js"),
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
  Chunk384275 = require("./384275.js"),
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
  Chunk343400 = require("./343400.js");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
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

function es(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function el() {
  let e = (0, Chunk114858.TH)(),
    t = Chunk73800.useMemo(() => (0, Chunk807675.y)(module.search), [module.search]);
  (0, Chunk702493.Z)();
  let o = !module.search.includes("response_type"),
    [a, c] = Chunk73800.useState(false),
    u = Chunk73800.useRef(false),
    [d, f] = Chunk73800.useState(null),
    _ = !Chunk873546.tq && !a && (Chunk120356 || !Chunk314897.default.isAuthenticated());
  if (Chunk73800.useEffect(() => {
      if (Chunk873546.eL && Chunk120356) {
        let t = new URL("discord://action/oauth2/authorize");
        exports.search = module.search, window.open(exports.toString(), "_self")
      } else Chunk873546.tq || !Chunk120356 && Chunk314897.default.isAuthenticated() || Chunk243814.current || (Chunk243814.current = true, Promise.resolve().then(require.bind(require, 536285)).then(t => {
        let {
          default: n
        } = t;
        if (o) n.request(ee.Etm.DEEP_LINK, {
          type: et.jE.OAUTH2,
          params: {
            search: e.search
          }
        }).then(e => {
          f(null != e && e)
        }).catch(() => f(false)).then(() => n.disconnect());
        else {
          f(true);
          let t = new URLSearchParams(e.search);
          n.request(ee.Etm.AUTHORIZE, {
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
    return e = true === Chunk149765 ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t.csrAMD)
      }), (0, Chunk255367.jsx)(Chunk388905.DK, {
        children: Chunk120356 ? Chunk388032.intl.string(Chunk388032.t["m1+IBg"]) : Chunk388032.intl.string(Chunk388032.t.kRzrSE)
      }), (0, Chunk255367.jsx)(Chunk680018.z, {
        onClick: () => Chunk373793(true),
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    }) : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["Z+hCVV"])
      }), (0, Chunk255367.jsx)(Chunk922770.$, {})]
    }), (0, Chunk255367.jsx)(Chunk787025.G, {
      removeChildWrapper: true,
      children: (0, Chunk255367.jsx)("div", {
        className: Chunk343400.deepLinkContainer,
        children: module
      })
    })
  }
  return (0, Chunk255367.jsx)(Chunk787025.G, {
    removeChildWrapper: true,
    children: (0, Chunk255367.jsx)(ec, es(eo({
      transitionState: Chunk257465.D.ENTERED
    }, exports), {
      showLogout: true,
      isExternalStandaloneOAuthPage: true,
      hideHeader: true
    }))
  })
}

function ec(e) {
  let {
    label: t,
    title: n,
    subtitle: i,
    header: o,
    body: s,
    actions: l,
    nextStep: c,
    appDetails: u,
    hasContentBackground: d,
    noPadding: f,
    modalSize: _
  } = ed(eo({}, e)), p = I.w.useExperiment({
    location: "oauth2_authorize"
  }), h = null != o ? (0, r.jsx)("div", {
    className: a()(er.fakeHeader, {
      [er.moveUp]: !e.hideHeader
    }),
    children: o
  }) : true, m = null != o || null != s || null != u ? (0, r.jsxs)("div", {
    className: er.authorize,
    children: [(0, r.jsxs)("div", {
      className: a()(er.content, d ? er.contentBackground : null, f ? er.noPadding : null),
      children: [s, null != c || p.enabled ? null : u]
    }), null == c && p.enabled ? (0, r.jsx)("div", {
      className: a()(er.content, d ? er.contentBackground : null, f ? er.noPadding : null),
      children: u
    }) : null]
  }) : null;
  return (0, r.jsx)(Q.j, es(eo({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: _,
    actions: l,
    title: n,
    subtitle: i,
    input: h,
    "aria-label": t,
    children: m
  }))
}

function eu() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk343400.loadingContainer,
    children: (0, Chunk255367.jsx)(Chunk922770.$, {
      className: Chunk343400.spinner
    })
  })
}

function ed(e) {
  var t, n, o, a, l, _, p;
  let h, m, v, N, C, {
      clientId: P,
      responseType: Q,
      redirectUri: et,
      codeChallenge: ei,
      codeChallengeMethod: eo,
      state: ea,
      nonce: es,
      prompt: el,
      authorizations: ec,
      scopes: ed,
      permissions: ef,
      guildId: e_,
      channelId: ep,
      integrationType: eh,
      disableGuildSelect: em = false,
      showLogout: eg = false,
      cancelCompletesFlow: eE = true,
      isTrustedName: eb = false,
      isEmbeddedFlow: ey = false,
      callback: eO,
      callbackWithoutPost: ev,
      onClose: eI,
      disclosures: eT,
      isExternalStandaloneOAuthPage: eS = false,
      isTwoWayLinkDiscordConsent: eA = false
    } = e,
    eN = null != eh ? null == ec ? true : ec.get(eh) : true,
    eC = (0, s.TH)(),
    eR = (0, f.e7)([R.Z], () => R.Z.hasLoadedExperiments);
  i.useEffect(() => {
    x.default.isAuthenticated() && !eR && E.Z.getExperiments()
  }, [eR]);
  let [eP, ew] = i.useState(null), [eD, eL] = i.useState(null), [ex, eM] = i.useState(null), [ek, ej] = i.useState(false), [eU, eG] = i.useState(false), eB = null == eP ? true : eP.guilds, [eZ, eF] = i.useState(null != e_ ? e_ : null), [eV, eH] = i.useState(null != ep ? ep : null), [eY, eW] = i.useState(k.Hn), [eK, ez] = i.useState(false), eq = i.useMemo(() => (null == eP ? true : eP.user) != null ? new L.Z(eP.user) : null, [null == eP ? true : eP.user]), eX = (0, A.Z)(null != (t = null == eP ? true : eP.application) ? t : null), eQ = i.useMemo(() => null == eB ? true : eB.find(e => e.id === eZ), [eB, eZ]), [eJ, e$] = i.useState(null), e0 = i.useMemo(() => {
    var e;
    return null == eN && null == eh && (null != (e = null == ed ? true : ed.length) ? e : 0) === 0 && null == et
  }, [eN, null == ed ? true : ed.length, et, eh]), [e1, e2] = i.useState(null);
  i.useEffect(() => {
    e0 && T.ZP.fetchApplication(P).then(e => e2(D.ZP.createFromServer(e)))
  }, [P, e0]);
  let e3 = i.useMemo(() => {
      var e, t;
      return null == eJ ? null : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ]) ? true : e.oauth2InstallParams
    }, [null == e1 ? true : e1.integrationTypesConfig, eJ]),
    e5 = I.w.useExperiment({
      location: "oauth2_authorize"
    }),
    {
      requestedScopes: e4,
      accountScopes: e6
    } = i.useMemo(() => {
      let e = e0 ? null == e3 ? true : e3.scopes : ed,
        t = (0, U.K)(null != e ? e : []),
        n = F.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == e3 ? true : e3.scopes, ed, e0]),
    e8 = i.useMemo(() => {
      var e;
      let t = e0 ? d.vB(null != (e = null == e3 ? true : e3.permissions) ? e : 0) : ef;
      return null != t ? t : k.Hn
    }, [null == e3 ? true : e3.permissions, ef, e0]),
    e7 = i.useRef(false),
    [e9, te] = i.useState(null != eT ? eT : []),
    [tt, tn] = i.useState(null != eT && eT.length > 0);
  i.useEffect(() => {
    if (e7.current) return;
    let e = async () => {
      e7.current = true;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, S.de)(P);
        tn(!t), te(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) return void(0, G.c$)(eC, "oauth2_error_failed_disclosures");
        eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e7.current = false
      }
    };
    if (null == eT) {
      if (!x.default.isAuthenticated()) return void(0, G.c$)(eC, "oauth2_error_not_authenticated");
      e()
    }
  }, [P, eC, eT, te, eM, tn, eL]);
  let tr = i.useCallback(async e => {
      if (null != ev) {
        ej(true), ev(e);
        return
      }
      if (!e && !eE) {
        null != eO && (eO({
          application: null == eP ? true : eP.application,
          guild: eQ
        }), null == eI || eI());
        return
      }
      if (null == eJ) return void eM(Error("No integration type was selected."));
      try {
        ej(true);
        let n = await (0, G.Iq)({
          authorize: e,
          clientId: P,
          scopes: e4,
          responseType: Q,
          redirectUri: et,
          codeChallenge: ei,
          codeChallengeMethod: eo,
          state: ea,
          nonce: es,
          integrationType: eJ,
          permissions: d.Od(e8, eY),
          guildId: eJ === c.Y.GUILD_INSTALL && null != eZ ? eZ : true,
          channelId: eJ === c.Y.GUILD_INSTALL && null != eV ? eV : true,
          dmSettings: {
            allowMobilePush: eK
          }
        });
        if (e && (await (0, S.x9)(P, e9), setTimeout(() => {
            b.Z.fetch()
          }, 100)), null != eO) eO({
          application: null == eP ? true : eP.application,
          location: n.location,
          guild: eQ
        }), null == eI || eI();
        else if (null != n.location) {
          var t;
          let e = null == (t = j.Z.toURLSafe(n.location)) ? true : t.pathname;
          j.Z.isDiscordUrl(n.location) && e === ee.Z5c.OAUTH2_AUTHORIZED ? (0, w.uL)(ee.Z5c.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eP ? true : eP.application,
              guild: eQ
            }
          }) : window.location = n.location
        } else ej(false)
      } catch (t) {
        let e = t.body;
        (null == e ? true : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e), eL("AUTHORIZE_SCOPES"), ej(false)
      }
    }, [ev, eE, eO, null == eP ? true : eP.application, eQ, eI, P, e4, Q, et, ei, eo, ea, es, e8, eY, eZ, eJ, eV, e9, eK]),
    ti = i.useRef(false),
    to = i.useCallback(async () => {
      if (!x.default.isAuthenticated()) return void(0, G.c$)(eC, "oauth2_error_not_authenticated");
      if (!e7.current && !ti.current) {
        ti.current = true;
        try {
          let e = null != eN ? eN : await (0, G.Ww)({
            clientId: P,
            scopes: e4,
            responseType: Q,
            redirectUri: et,
            codeChallenge: ei,
            codeChallengeMethod: eo,
            state: ea,
            nonce: es,
            integrationType: null != eJ ? eJ : true
          });
          ew((0, B.d)(e)), el === V.s.NONE && e.authorized && !tt && tr(true), (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id,
            mobile_push_notification_default_setting: false
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) return void(0, G.c$)(eC, "oauth2_error_unauthorized");
          eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
        } finally {
          ti.current = false
        }
      }
    }, [eC, eN, P, e4, Q, et, ei, eo, ea, es, eJ, el, tr, tt]),
    ta = i.useMemo(() => {
      var e;
      return null != e1 && e0 ? Object.entries(null != (e = e1.integrationTypesConfig) ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [e1, e0]),
    ts = i.useRef(null);
  i.useEffect(() => {
    eD !== ts.current && (ts.current = eD, (0, O.yw)(ee.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
      step: eD,
      application_id: P,
      integration_type: eJ,
      scopes: e4,
      permissions: e8.toString(),
      mobile_push_notification_default_setting: false
    }))
  }, [P, eJ, e8, e4, eD]), i.useEffect(() => {
    if (null == eD && (!e0 || null != e1) && eR)
      if (null != eN) {
        var e;
        e$(null != (e = eN.integration_type) ? e : c.Y.GUILD_INSTALL), eL("AUTHORIZE_SCOPES")
      } else ta.length > 1 ? eL("SELECT_INSTALL_TYPE") : (1 === ta.length ? e$(ta[0]) : null != eh ? e$(eh) : e$(c.Y.GUILD_INSTALL), eL("AUTHORIZE_SCOPES"))
  }, [eN, ta, e1, e0, eh, eD, eR]), i.useEffect(() => {
    if (null == eJ || null != eP || null != ex) return;
    eJ === c.Y.USER_INSTALL && (eF(null), eH(null));
    let e = e4.filter(e => !F.ak.includes(e));
    0 === e4.length ? eM(Error("No scopes were provided.")) : e.length > 0 ? eM(Error("Invalid scope: ".concat(e[0]))) : (0, Z._$)(e8) ? eM(Error("Invalid permission(s) provided.")) : to()
  }, [tt, to, e4, e8, eJ, eP, ex]);
  let tl = i.useCallback(e => {
      e && eG(true)
    }, []),
    tc = (0, y.O)(tl);
  if (ex instanceof Error) return eS ? {
    body: (0, r.jsx)(J.Lk, {
      message: ex.message
    })
  } : eA ? {
    label: en.intl.string(en.t.j2d6Ki),
    header: (0, r.jsx)(g.Text, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: en.intl.string(en.t.j2d6Ki)
    }),
    body: (0, r.jsx)(g.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: ex.message
    }),
    actions: [{
      onClick: eI,
      text: en.intl.string(en.t.cpT0Cg)
    }],
    noPadding: true
  } : {
    title: en.intl.string(en.t.j2d6Ki),
    subtitle: ex.message,
    actions: [{
      onClick: eI,
      text: en.intl.string(en.t.cpT0Cg)
    }]
  };
  let tu = e => {
      e$(e), ew(null), eL("AUTHORIZE_SCOPES")
    },
    td = (e, t) => {
      eW(n => e ? d.Od(n, t) : d.IH(n, t))
    },
    tf = false,
    t_ = false,
    tp = true,
    th = true,
    tm = true,
    tg = false;
  switch (eD) {
    case null:
      return {
        label: en.intl.string(en.t.ZTNur6), body: (0, r.jsx)(eu, {})
      };
    case "SELECT_INSTALL_TYPE":
      if (null == e1) return {
        label: en.intl.string(en.t.ZTNur6),
        body: (0, r.jsx)(eu, {})
      };
      h = (0, r.jsx)(X.Z, {
        application: e1,
        onSelect: tu
      }), tp = false, th = false, tm = false, tg = true;
      break;
    case "AUTHORIZE_SCOPES":
      if (null == eP || null == eq || null == eJ) return {
        label: en.intl.string(en.t.ZTNur6),
        body: (0, r.jsx)(eu, {})
      };
      let tE = null == ex || ex instanceof Error ? {} : ex,
        tb = null == eB ? true : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        ty = eJ === c.Y.GUILD_INSTALL && e4.includes(u.x.WEBHOOK_INCOMING),
        tO = ty || eJ === c.Y.GUILD_INSTALL && (e4.includes(u.x.BOT) || e4.includes(u.x.APPLICATIONS_COMMANDS)),
        tv = (0, M.yE)(null != (n = eP.application.flags) ? n : 0, ee.udG.EMBEDDED) && eJ === c.Y.USER_INSTALL && e5.enabled;
      m = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y.Z, {
          application: eP.application,
          accountScopes: e6
        }), (0, r.jsx)(W.Z, {
          application: eP.application,
          accountScopes: e6,
          requestedScopes: e4,
          integrationType: eJ,
          errors: tE,
          isTrustedName: eb || eX,
          noDivider: !tv && !tO && !ty && e5.enabled
        }), tv ? (0, r.jsx)(g.j7V, {
          hideBorder: true,
          onChange: ez,
          className: er.mobilePushContainer,
          note: en.intl.string(en.t.hw1nKS),
          value: eK,
          children: (0, r.jsx)(g.Text, {
            variant: "text-sm/medium",
            children: en.intl.string(en.t["Pkw//v"])
          })
        }) : null, (0, r.jsx)("div", {
          className: er.intObserver,
          ref: tc
        }), tO ? (0, r.jsx)(z.Z, {
          error: (null != (a = null != (o = tE[u.x.BOT]) ? o : tE[u.x.APPLICATIONS_COMMANDS]) ? a : [])[0],
          selectedGuildId: eZ,
          onGuildChange: eF,
          guilds: null != tb ? tb : [],
          disabled: "" !== eZ && null != eZ && true === em
        }) : null, ty ? (0, r.jsx)($.Z, {
          error: (null != (l = tE[u.x.WEBHOOK_INCOMING]) ? l : [])[0],
          selectedChannelId: eV,
          selectedGuildId: eZ,
          onChannelChange: eH
        }) : null]
      }), e4.includes(u.x.BOT) && !d.fS(e8, k.Hn) && (N = "AUTHORIZE_BOT_PERMISSIONS"), ta.length > 1 && (v = "SELECT_INSTALL_TYPE"), t_ = tO && null == eQ || ty && null == eV, tf = true;
      break;
    case "AUTHORIZE_BOT_PERMISSIONS":
      if (null == eP) return {
        label: en.intl.string(en.t.ZTNur6),
        body: (0, r.jsx)(eu, {})
      };
      m = (0, r.jsx)(K.Z, {
        application: eP.application,
        permissions: e8,
        deniedPermissions: eY,
        onPermissionsChange: td,
        guild: eQ
      }), v = "AUTHORIZE_SCOPES", tf = true
  }
  let tI = [];
  if (tp && null != eP) {
    let e = null == (_ = eP.bot) ? true : _.approximate_guild_count;
    C = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(H.Z, {
        application: eP.application,
        scopes: e4,
        disclosures: e9,
        redirectUri: null != (p = eP.redirect_uri) ? p : null,
        approximateGuildCount: true !== e ? e : null,
        isEmbeddedFlow: ey
      }), (0, r.jsx)("div", {
        className: er.intObserver,
        ref: tc
      })]
    })
  }
  return th && null != eP && null != eq && (h = (0, r.jsx)(q.Z, {
    user: eq,
    application: eP.application,
    bot: eP.bot,
    accountScopes: e6,
    showLogout: eg || false,
    location: eC,
    scopes: e4
  })), tm && (tI.push(null != v ? {
    variant: "secondary",
    onClick: () => eL(v),
    text: en.intl.string(en.t["13/7kZ"])
  } : {
    variant: "secondary",
    onClick: () => tr(false),
    text: en.intl.string(en.t["ETE/oK"])
  }), "SELECT_INSTALL_TYPE" !== eD && tI.push(eU ? {
    onClick: null != N ? () => eL(N) : () => tr(true),
    loading: ek,
    disabled: null == C || t_,
    text: t_ ? en.intl.string(en.t.BwwiSE) : null != N ? en.intl.string(en.t["3PatS0"]) : en.intl.string(en.t["y+/PEx"])
  } : {
    disabled: true,
    loading: ek,
    text: en.intl.string(en.t.N22i9P),
    icon: g.cQm
  })), {
    header: h,
    body: m,
    actions: tI,
    nextStep: N,
    appDetails: C,
    sendAuthorize: tr,
    hasContentBackground: tf,
    noPadding: tg
  }
}

function ef(e, t) {
  var n, i;
  if (null == t.location || null != e.callback && e.callback(t)) return;
  let {
    host: o,
    pathname: a,
    searchParams: s
  } = null != (n = j.Z.toURLSafe(t.location)) ? n : {}, l = j.Z.isDiscordHostname(null != o ? o : null) || window.location.host === o;
  l && a === ee.Z5c.OAUTH2_AUTHORIZED ? (0, _.h7)(e => (0, r.jsx)(J.jO, eo({
    guild: t.guild,
    application: t.application
  }, e))) : l && (null == a ? true : a.startsWith(ee.Z5c.OAUTH2_ERROR)) ? (0, _.h7)(e => {
    var t, n;
    let i = null != (n = null != (t = null == s ? true : s.get("error_description")) ? t : null == s ? true : s.get("error")) ? n : en.intl.string(en.t["mqn87+"]);
    return Array.isArray(i) && (i = i[0]), (0, r.jsx)(Q.j, es(eo({}, e), {
      children: (0, r.jsx)(J.Lk, {
        message: i,
        onClose: e.onClose
      })
    }))
  }) : null == (i = window.open(t.location, "_blank")) || i.focus()
}

function e_(e, t) {
  if ((0, P.g)("create-guild-and-oauth2-modal")) return void C.Z.openCreateGuildModal({
    onSuccess: n => ep(es(eo({}, e), {
      guildId: n
    }), t)
  });
  ep(e, t)
}

function ep(e, t) {
  (0, _.h7)(t => (0, r.jsx)(ec, es(eo({}, t, e), {
    cancelCompletesFlow: false,
    callback: ef.bind(null, e)
  })), {
    onCloseCallback: t
  })
}

function eh(e) {
  var t;
  let {
    hostname: n = "",
    host: r,
    pathname: i,
    search: o
  } = null != (t = j.Z.toURLSafe(e)) ? t : {};
  return null != i && null != o && (j.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith("/api".concat(ee.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ee.Z5c.OAUTH2_AUTHORIZE)) ? (0, U.y)(o) : null
}