/** Chunk was on web.js **/
/** chunk id: 69580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  OAuth2AuthorizeModal: () => es,
  OAuth2AuthorizePage: () => eo,
  getOAuth2AuthorizeProps: () => e_,
  openOAuth2Modal: () => ef,
  openOAuth2ModalWithCreateGuildModal: () => ed,
  useOAuth2AuthorizeForm: () => ec
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./415506.js"), require("./642613.js"), require("./997841.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk907331 = require("./907331.js"),
  Chunk873546 = require("./873546.js"),
  Chunk373793 = require("./373793.js"),
  Chunk243814 = require("./243814.js"),
  Chunk149765 = require("./149765.js"),
  Chunk95015 = require("./95015.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
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

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ei(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eo() {
  let e = (0, Chunk828700.TH)(),
    t = Chunk473749.useMemo(() => (0, Chunk807675.y)(module.search), [module.search]);
  (0, Chunk702493.Z)();
  let a = !module.search.includes("response_type"),
    [o, l] = Chunk473749.useState(false),
    u = Chunk473749.useRef(false),
    [d, f] = Chunk473749.useState(null),
    _ = !Chunk873546.tq && !o && (Chunk120356 || !Chunk314897.default.isAuthenticated());
  if (Chunk473749.useEffect(() => {
      if (Chunk873546.eL && Chunk120356) {
        let t = new URL("discord://action/oauth2/authorize");
        exports.search = module.search, window.open(exports.toString(), "_self")
      } else Chunk873546.tq || !Chunk120356 && Chunk314897.default.isAuthenticated() || Chunk373793.current || (Chunk373793.current = true, Promise.resolve().then(require.bind(require, 536285)).then(t => {
        let {
          default: n
        } = t;
        if (a) n.request(J.Etm.DEEP_LINK, {
          type: $.jE.OAUTH2,
          params: {
            search: e.search
          }
        }).then(e => {
          f(null != e && e)
        }).catch(() => f(false)).then(() => n.disconnect());
        else {
          f(true);
          let t = new URLSearchParams(e.search);
          n.request(J.Etm.AUTHORIZE, {
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
    }, [module.search, Chunk120356]), Chunk95015 && false !== Chunk243814) {
    let e;
    return e = true === Chunk243814 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t.csrAMJ)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk120356 ? Chunk388032.intl.string(Chunk388032.t["m1+IBn"]) : Chunk388032.intl.string(Chunk388032.t.kRzrSO)
      }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
        onClick: () => Chunk907331(true),
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.fIv16B)
      })]
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t["Z+hCVU"])
      }), (0, Chunk54381.jsx)(Chunk481060.$jN, {})]
    }), (0, Chunk54381.jsx)(Chunk787025.G, {
      removeChildWrapper: true,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk565870.deepLinkContainer,
        children: module
      })
    })
  }
  return (0, Chunk54381.jsx)(Chunk787025.G, {
    removeChildWrapper: true,
    children: (0, Chunk54381.jsx)(es, ea(er({
      transitionState: Chunk793030.Dvm.ENTERED
    }, exports), {
      showLogout: true,
      isExternalStandaloneOAuthPage: true,
      hideHeader: true
    }))
  })
}

function es(e) {
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
  } = ec(er({}, e)), p = v.w.useExperiment({
    location: "oauth2_authorize"
  }), h = null != a || null != s || null != u ? (0, r.jsxs)("div", {
    className: et.authorize,
    children: [a, (0, r.jsxs)("div", {
      className: et.contentWrapper,
      children: [(0, r.jsxs)("div", {
        className: o()(et.content, d ? et.contentBackground : null, f ? et.noPadding : null),
        children: [s, null != c || p.enabled ? null : u]
      }), null == c && p.enabled ? (0, r.jsx)("div", {
        className: o()(et.content, d ? et.contentBackground : null, f ? et.noPadding : null),
        children: u
      }) : null]
    })]
  }) : null;
  return (0, r.jsx)(q.j, ea(er({}, e), {
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

function el() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk565870.loadingContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
      className: Chunk565870.spinner
    })
  })
}

function ec(e) {
  var t, n, a, o, c, p, m, g;
  let O, A, C, R, q, {
      clientId: $,
      responseType: en,
      redirectUri: er,
      codeChallenge: ei,
      codeChallengeMethod: ea,
      state: eo,
      nonce: es,
      prompt: ec,
      authorizations: eu,
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
    eC = null != eh ? null == eu ? true : eu.get(eh) : true,
    eN = (0, s.TH)(),
    eR = (0, h.e7)([N.Z], () => N.Z.hasLoadedExperiments);
  i.useEffect(() => {
    L.default.isAuthenticated() && !eR && b.Z.getExperiments()
  }, [eR]);
  let [eP, eD] = i.useState(null), [ew, eL] = i.useState(null), [ex, eM] = i.useState(null), [ek, ej] = i.useState(false), [eU, eG] = i.useState(false), eB = null == eP ? true : eP.guilds, [eZ, eF] = i.useState(null != e_ ? e_ : null), [eV, eH] = i.useState(null != ep ? ep : null), [eW, eY] = i.useState(x.Hn), [eK, ez] = i.useState(false), eq = i.useMemo(() => (null == eP ? true : eP.user) != null ? new w.Z(eP.user) : null, [null == eP ? true : eP.user]), eX = (0, S.Z)(null != (t = null == eP ? true : eP.application) ? t : null), eQ = i.useMemo(() => null == eB ? true : eB.find(e => e.id === eZ), [eB, eZ]), [eJ, e$] = i.useState(null), e0 = i.useMemo(() => {
    var e;
    return null == eC && null == eh && (null != (e = null == ed ? true : ed.length) ? e : 0) === 0 && null == er
  }, [eC, null == ed ? true : ed.length, er, eh]), [e1, e3] = i.useState(null);
  i.useEffect(() => {
    e0 && I.ZP.fetchApplication($).then(e => e3(D.ZP.createFromServer(e)))
  }, [$, e0]);
  let e2 = i.useMemo(() => {
      var e, t;
      return null == eJ ? null : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ]) ? true : e.oauth2InstallParams
    }, [null == e1 ? true : e1.integrationTypesConfig, eJ]),
    e4 = v.w.useExperiment({
      location: "oauth2_authorize"
    }),
    {
      requestedScopes: e5,
      accountScopes: e8
    } = i.useMemo(() => {
      let e = e0 ? null == e2 ? true : e2.scopes : ed,
        t = (0, k.K)(null != e ? e : []),
        n = B.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == e2 ? true : e2.scopes, ed, e0]),
    e6 = i.useMemo(() => {
      var e;
      let t = e0 ? f.vB(null != (e = null == e2 ? true : e2.permissions) ? e : 0) : ef;
      return null != t ? t : x.Hn
    }, [null == e2 ? true : e2.permissions, ef, e0]),
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
        } = await (0, T.de)($);
        tn(!t), te(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) return void(0, j.c$)(eN, "oauth2_error_failed_disclosures");
        eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e7.current = false
      }
    };
    if (null == eT) {
      if (!L.default.isAuthenticated()) return void(0, j.c$)(eN, "oauth2_error_not_authenticated");
      e()
    }
  }, [$, eN, eT, te, eM, tn, eL]);
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
        let n = await (0, j.Iq)({
          authorize: e,
          clientId: $,
          scopes: e5,
          responseType: en,
          redirectUri: er,
          codeChallenge: ei,
          codeChallengeMethod: ea,
          state: eo,
          nonce: es,
          integrationType: eJ,
          permissions: f.Od(e6, eW),
          guildId: eJ === u.Y.GUILD_INSTALL && null != eZ ? eZ : true,
          channelId: eJ === u.Y.GUILD_INSTALL && null != eV ? eV : true,
          dmSettings: {
            allowMobilePush: eK
          }
        });
        if (e && await (0, T.x9)($, e9), null != eO) eO({
          application: null == eP ? true : eP.application,
          location: n.location,
          guild: eQ
        }), null == eI || eI();
        else if (null != n.location) {
          var t;
          let e = null == (t = M.Z.toURLSafe(n.location)) ? true : t.pathname;
          M.Z.isDiscordUrl(n.location) && e === J.Z5c.OAUTH2_AUTHORIZED ? (0, P.uL)(J.Z5c.OAUTH2_AUTHORIZED, {
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
    }, [ev, eE, eO, null == eP ? true : eP.application, eQ, eI, $, e5, en, er, ei, ea, eo, es, e6, eW, eZ, eJ, eV, e9, eK]),
    ti = i.useRef(false),
    ta = i.useCallback(async () => {
      if (!L.default.isAuthenticated()) return void(0, j.c$)(eN, "oauth2_error_not_authenticated");
      if (!e7.current && !ti.current) {
        ti.current = true;
        try {
          let e = null != eC ? eC : await (0, j.Ww)({
            clientId: $,
            scopes: e5,
            responseType: en,
            redirectUri: er,
            codeChallenge: ei,
            codeChallengeMethod: ea,
            state: eo,
            nonce: es,
            integrationType: null != eJ ? eJ : true
          });
          eD((0, U.d)(e)), ec === Z.s.NONE && e.authorized && !tt && tr(true), (0, y.yw)(J.rMx.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id,
            mobile_push_notification_default_setting: false
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) return void(0, j.c$)(eN, "oauth2_error_unauthorized");
          eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
        } finally {
          ti.current = false
        }
      }
    }, [eN, eC, $, e5, en, er, ei, ea, eo, es, eJ, ec, tr, tt]),
    to = i.useMemo(() => {
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
    ew !== ts.current && (ts.current = ew, (0, y.yw)(J.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
      step: ew,
      application_id: $,
      integration_type: eJ,
      scopes: e5,
      permissions: e6.toString(),
      mobile_push_notification_default_setting: false
    }))
  }, [$, eJ, e6, e5, ew]), i.useEffect(() => {
    if (null == ew && (!e0 || null != e1) && eR)
      if (null != eC) {
        var e;
        e$(null != (e = eC.integration_type) ? e : u.Y.GUILD_INSTALL), eL("AUTHORIZE_SCOPES")
      } else to.length > 1 ? eL("SELECT_INSTALL_TYPE") : (1 === to.length ? e$(to[0]) : null != eh ? e$(eh) : e$(u.Y.GUILD_INSTALL), eL("AUTHORIZE_SCOPES"))
  }, [eC, to, e1, e0, eh, ew, eR]), i.useEffect(() => {
    if (null == eJ || null != eP || null != ex) return;
    eJ === u.Y.USER_INSTALL && (eF(null), eH(null));
    let e = e5.filter(e => !B.ak.includes(e));
    0 === e5.length ? eM(Error("No scopes were provided.")) : e.length > 0 ? eM(Error("Invalid scope: ".concat(e[0]))) : (0, G._$)(e6) ? eM(Error("Invalid permission(s) provided.")) : ta()
  }, [tt, ta, e5, e6, eJ, eP, ex]);
  let tl = i.useCallback(e => {
      e && eG(true)
    }, []),
    tc = (0, l.O)(tl);
  if (ex instanceof Error) return eS ? {
    body: (0, r.jsx)(X.Lk, {
      message: ex.message
    })
  } : eA ? {
    label: ee.intl.string(ee.t.j2d6Km),
    header: (0, r.jsx)(E.Text, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: ee.intl.string(ee.t.j2d6Km)
    }),
    body: (0, r.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: ex.message
    }),
    actions: [{
      onClick: eI,
      text: ee.intl.string(ee.t.cpT0Cq)
    }],
    noPadding: true
  } : {
    title: ee.intl.string(ee.t.j2d6Km),
    subtitle: ex.message,
    actions: [{
      onClick: eI,
      text: ee.intl.string(ee.t.cpT0Cq)
    }]
  };
  let tu = e => {
      e$(e), eD(null), eL("AUTHORIZE_SCOPES")
    },
    td = (e, t) => {
      eY(n => e ? f.Od(n, t) : f.IH(n, t))
    },
    tf = false,
    t_ = false,
    tp = true,
    th = true,
    tm = true,
    tg = false;
  switch (ew) {
    case null:
      return {
        label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(el, {})
      };
    case "SELECT_INSTALL_TYPE":
      if (null == e1) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      O = (0, r.jsx)(z.Z, {
        application: e1,
        onSelect: tu
      }), tp = false, th = false, tm = false, tg = true;
      break;
    case "AUTHORIZE_SCOPES":
      if (null == eP || null == eq || null == eJ) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      let tE = null == ex || ex instanceof Error ? {} : ex,
        tb = null == eB ? true : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        ty = eJ === u.Y.GUILD_INSTALL && e5.includes(d.x.WEBHOOK_INCOMING),
        tO = ty || eJ === u.Y.GUILD_INSTALL && (e5.includes(d.x.BOT) || e5.includes(d.x.APPLICATIONS_COMMANDS)),
        tv = (0, _.yE)(null != (n = eP.application.flags) ? n : 0, J.udG.EMBEDDED) && eJ === u.Y.USER_INSTALL && e4.enabled;
      O = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(V.Z, {
          application: eP.application,
          accountScopes: e8
        }), (0, r.jsx)(H.Z, {
          application: eP.application,
          accountScopes: e8,
          requestedScopes: e5,
          integrationType: eJ,
          errors: tE,
          isTrustedName: eb || eX,
          noDivider: !tv && !tO && !ty && e4.enabled
        }), tv ? (0, r.jsx)("div", {
          className: et.mobilePushContainer,
          children: (0, r.jsx)(E.rsf, {
            label: ee.intl.string(ee.t["Pkw//o"]),
            onChange: ez,
            description: ee.intl.string(ee.t.hw1nKf),
            checked: eK
          })
        }) : null, (0, r.jsx)("div", {
          className: et.intObserver,
          ref: tc
        }), tO ? (0, r.jsx)(Y.Z, {
          error: (null != (o = null != (a = tE[d.x.BOT]) ? a : tE[d.x.APPLICATIONS_COMMANDS]) ? o : [])[0],
          selectedGuildId: eZ,
          onGuildChange: eF,
          guilds: null != tb ? tb : [],
          disabled: "" !== eZ && null != eZ && true === em
        }) : null, ty ? (0, r.jsx)(Q.Z, {
          error: (null != (c = tE[d.x.WEBHOOK_INCOMING]) ? c : [])[0],
          selectedChannelId: eV,
          selectedGuildId: eZ,
          onChannelChange: eH
        }) : null]
      }), e5.includes(d.x.BOT) && !f.fS(e6, x.Hn) && (C = "AUTHORIZE_BOT_PERMISSIONS"), to.length > 1 && (A = "SELECT_INSTALL_TYPE"), t_ = tO && null == eQ || ty && null == eV, tf = true;
      break;
    case "AUTHORIZE_BOT_PERMISSIONS":
      if (null == eP) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      O = (0, r.jsx)(W.Z, {
        application: eP.application,
        permissions: e6,
        deniedPermissions: eW,
        onPermissionsChange: td,
        guild: eQ
      }), A = "AUTHORIZE_SCOPES", tf = true
  }
  let tI = [];
  if (tp && null != eP) {
    let e = null != (m = null == eP ? true : eP.application.approximate_guild_count) ? m : null == eP || null == (p = eP.bot) ? true : p.approximate_guild_count;
    R = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(F.Z, {
        application: eP.application,
        scopes: e5,
        disclosures: e9,
        redirectUri: null != (g = eP.redirect_uri) ? g : null,
        approximateGuildCount: true !== e ? e : null,
        isEmbeddedFlow: ey
      }), (0, r.jsx)("div", {
        className: et.intObserver,
        ref: tc
      })]
    })
  }
  return th && null != eP && null != eq && (q = (0, r.jsx)(K.Z, {
    user: eq,
    application: eP.application,
    bot: eP.bot,
    accountScopes: e8,
    showLogout: eg || false,
    location: eN,
    scopes: e5
  })), tm && (tI.push(null != A ? {
    variant: "secondary",
    onClick: () => eL(A),
    text: ee.intl.string(ee.t["13/7kX"])
  } : {
    variant: "secondary",
    onClick: () => tr(false),
    text: ee.intl.string(ee.t["ETE/oC"])
  }), "SELECT_INSTALL_TYPE" !== ew && tI.push(eU ? {
    onClick: null != C ? () => eL(C) : () => tr(true),
    loading: ek,
    disabled: null == R || t_,
    text: t_ ? ee.intl.string(ee.t.BwwiSM) : null != C ? ee.intl.string(ee.t["3PatSz"]) : ee.intl.string(ee.t["y+/PE9"])
  } : {
    disabled: true,
    loading: ek,
    text: ee.intl.string(ee.t.N22i9F),
    icon: E.cQm
  })), {
    header: q,
    body: O,
    actions: tI,
    nextStep: C,
    appDetails: R,
    sendAuthorize: tr,
    hasContentBackground: tf,
    noPadding: tg
  }
}

function eu(e, t) {
  var n, i;
  if (null == t.location || null != e.callback && e.callback(t)) return;
  let {
    host: a,
    pathname: o,
    searchParams: s
  } = null != (n = M.Z.toURLSafe(t.location)) ? n : {}, l = M.Z.isDiscordHostname(null != a ? a : null) || window.location.host === a;
  l && o === J.Z5c.OAUTH2_AUTHORIZED ? (0, m.h7)(e => (0, r.jsx)(X.jO, er({
    guild: t.guild,
    application: t.application
  }, e))) : l && (null == o ? true : o.startsWith(J.Z5c.OAUTH2_ERROR)) ? (0, m.h7)(e => {
    var t, n;
    let i = null != (n = null != (t = null == s ? true : s.get("error_description")) ? t : null == s ? true : s.get("error")) ? n : ee.intl.string(ee.t.mqn873);
    return Array.isArray(i) && (i = i[0]), (0, r.jsx)(q.j, ea(er({}, e), {
      children: (0, r.jsx)(X.Lk, {
        message: i,
        onClose: e.onClose
      })
    }))
  }) : null == (i = window.open(t.location, "_blank")) || i.focus()
}

function ed(e, t) {
  if ((0, R.g)()) return void C.Z.openCreateGuildModal({
    onSuccess: n => ef(ea(er({}, e), {
      guildId: n
    }), t)
  });
  ef(e, t)
}

function ef(e, t) {
  (0, m.h7)(t => (0, r.jsx)(es, ea(er({}, t, e), {
    cancelCompletesFlow: false,
    callback: eu.bind(null, e)
  })), {
    onCloseCallback: t
  })
}

function e_(e) {
  var t;
  let {
    hostname: n = "",
    host: r,
    pathname: i,
    search: a
  } = null != (t = M.Z.toURLSafe(e)) ? t : {};
  return null != i && null != a && (M.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith("/api".concat(J.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(J.Z5c.OAUTH2_AUTHORIZE)) ? (0, k.y)(a) : null
}