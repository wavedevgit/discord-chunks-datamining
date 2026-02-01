/** Chunk was on web.js **/
/** chunk id: 200330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  OAuth2AuthorizeModal: () => es,
  OAuth2AuthorizePage: () => eo,
  getOAuth2AuthorizeProps: () => ep,
  openOAuth2Modal: () => ef,
  openOAuth2ModalWithCreateGuildModal: () => ed,
  useOAuth2AuthorizeForm: () => ec
}), require("./747238.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js"), require("./638769.js"), require("./938796.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk172218 = require("./172218.js"),
  Chunk607399 = require("./607399.js"),
  Chunk485845 = require("./485845.js"),
  Chunk179771 = require("./179771.js"),
  Chunk136722 = require("./136722.js"),
  Chunk665260 = require("./665260.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk58149 = require("./58149.js"),
  Chunk269815 = require("./269815.js"),
  Chunk537569 = require("./537569.js"),
  Chunk627363 = require("./627363.js"),
  Chunk224750 = require("./224750.js"),
  Chunk62447 = require("./62447.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk272613 = require("./272613.js"),
  Chunk49463 = require("./49463.js"),
  Chunk14509 = require("./14509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk611010 = require("./611010.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk488926 = require("./488926.js"),
  Chunk998218 = require("./998218.js"),
  Chunk123677 = require("./123677.js"),
  Chunk716965 = require("./716965.js"),
  Chunk332934 = require("./332934.js"),
  Chunk376092 = require("./376092.js"),
  Chunk647053 = require("./647053.js"),
  Chunk671523 = require("./671523.js"),
  Chunk774363 = require("./774363.jsx"),
  Chunk404035 = require("./404035.jsx"),
  Chunk864721 = require("./864721.jsx"),
  Chunk629442 = require("./629442.jsx"),
  Chunk54605 = require("./54605.jsx"),
  Chunk189880 = require("./189880.jsx"),
  Chunk991054 = require("./991054.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk595244 = require("./595244.jsx"),
  Chunk618865 = require("./618865.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk283872 = require("./283872.js");

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
  let e = (0, s.zy)(),
    t = i.useMemo(() => (0, j._)(e.search), [e.search]);
  (0, O.A)();
  let a = !e.search.includes("response_type"),
    [o, l] = i.useState(false),
    u = i.useRef(false),
    [d, f] = i.useState(null),
    p = !c.Fr && !o && (a || !L.default.isAuthenticated());
  if (i.useEffect(() => {
      if (c.Ct && a) {
        let t = new URL("discord://action/oauth2/authorize");
        t.search = e.search, window.open(t.toString(), "_self")
      } else c.Fr || !a && L.default.isAuthenticated() || u.current || (u.current = true, Promise.resolve().then(n.bind(n, 129014)).then(t => {
        let {
          default: n
        } = t;
        if (a) n.request(J.e$_.DEEP_LINK, {
          type: $.XK.OAUTH2,
          params: {
            search: e.search
          }
        }).then(e => {
          f(null != e && e)
        }).catch(() => f(false)).then(() => n.disconnect());
        else {
          f(true);
          let t = new URLSearchParams(e.search);
          n.request(J.e$_.AUTHORIZE, {
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
    }, [e.search, a]), p && false !== d) {
    let e;
    return e = true === d ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T.hE, {
        children: ee.intl.string(ee.t.csrAMJ)
      }), (0, r.jsx)(T.tK, {
        children: a ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO)
      }), (0, r.jsx)(g.$nd, {
        onClick: () => l(true),
        variant: "primary",
        text: ee.intl.string(ee.t.fIv16B)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T.hE, {
        children: ee.intl.string(ee.t["Z+hCVU"])
      }), (0, r.jsx)(E.y$y, {})]
    }), (0, r.jsx)(Z.$, {
      removeChildWrapper: true,
      children: (0, r.jsx)("div", {
        className: et.ah,
        children: e
      })
    })
  }
  return (0, r.jsx)(Z.$, {
    removeChildWrapper: true,
    children: (0, r.jsx)(es, ea(er({
      transitionState: _.ip4.ENTERED
    }, t), {
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
    modalSize: p
  } = ec(er({}, e)), _ = v.v.useExperiment({
    location: "oauth2_authorize"
  }), h = null != a || null != s || null != u ? (0, r.jsxs)("div", {
    className: et.Gq,
    children: [a, (0, r.jsxs)("div", {
      className: et.FG,
      children: [(0, r.jsxs)("div", {
        className: o()(et.Qs, d ? et.cw : null, f ? et.pN : null),
        children: [s, null != c || _.enabled ? null : u]
      }), null == c && _.enabled ? (0, r.jsx)("div", {
        className: o()(et.Qs, d ? et.cw : null, f ? et.pN : null),
        children: u
      }) : null]
    })]
  }) : null;
  return (0, r.jsx)(Z.f, ea(er({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: p,
    actions: l,
    title: n,
    subtitle: i,
    "aria-label": t,
    children: h
  }))
}

function el() {
  return (0, r.jsx)("div", {
    className: et.g4,
    children: (0, r.jsx)(E.y$y, {
      className: et.u1
    })
  })
}

function ec(e) {
  var t, n, a, o, c, _, m, g;
  let O, T, C, w, Z, {
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
      guildId: ep,
      channelId: e_,
      integrationType: eh,
      disableGuildSelect: em = false,
      showLogout: eg = false,
      cancelCompletesFlow: eE = true,
      isTrustedName: ey = false,
      isEmbeddedFlow: eb = false,
      callback: eO,
      callbackWithoutPost: ev,
      onClose: eA,
      disclosures: eI,
      isExternalStandaloneOAuthPage: eS = false,
      isTwoWayLinkDiscordConsent: eT = false
    } = e,
    eC = null != eh ? null == eu ? true : eu.get(eh) : true,
    eN = (0, s.zy)(),
    ew = (0, h.bG)([N.A], () => N.A.hasLoadedExperiments);
  i.useEffect(() => {
    L.default.isAuthenticated() && !ew && y.A.getExperiments()
  }, [ew]);
  let [eR, eP] = i.useState(null), [eD, eL] = i.useState(null), [ex, eM] = i.useState(null), [ej, ek] = i.useState(false), [eU, eG] = i.useState(false), eV = null == eR ? true : eR.guilds, [eF, eB] = i.useState(null != ep ? ep : null), [eH, eY] = i.useState(null != e_ ? e_ : null), [eW, eK] = i.useState(x.x3), [ez, eq] = i.useState(false), eZ = i.useMemo(() => (null == eR ? true : eR.user) != null ? new D.A(eR.user) : null, [null == eR ? true : eR.user]), eQ = (0, S.A)(null != (t = null == eR ? true : eR.application) ? t : null), eX = i.useMemo(() => null == eV ? true : eV.find(e => e.id === eF), [eV, eF]), [eJ, e$] = i.useState(null), e0 = i.useMemo(() => {
    var e;
    return null == eC && null == eh && (null != (e = null == ed ? true : ed.length) ? e : 0) === 0 && null == er
  }, [eC, null == ed ? true : ed.length, er, eh]), [e1, e2] = i.useState(null);
  i.useEffect(() => {
    e0 && A.Ay.fetchApplication($).then(e => e2(P.Ay.createFromServer(e)))
  }, [$, e0]);
  let e3 = i.useMemo(() => {
      var e, t;
      return null == eJ ? null : null == e1 || null == (t = e1.integrationTypesConfig) || null == (e = t[eJ]) ? true : e.oauth2InstallParams
    }, [null == e1 ? true : e1.integrationTypesConfig, eJ]),
    e6 = v.v.useExperiment({
      location: "oauth2_authorize"
    }),
    {
      requestedScopes: e4,
      accountScopes: e5
    } = i.useMemo(() => {
      let e = e0 ? null == e3 ? true : e3.scopes : ed,
        t = (0, j.e)(null != e ? e : []),
        n = V.k$.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == e3 ? true : e3.scopes, ed, e0]),
    e7 = i.useMemo(() => {
      var e;
      let t = e0 ? f.iu(null != (e = null == e3 ? true : e3.permissions) ? e : 0) : ef;
      return null != t ? t : x.x3
    }, [null == e3 ? true : e3.permissions, ef, e0]),
    e8 = i.useRef(false),
    [e9, te] = i.useState(null != eI ? eI : []),
    [tt, tn] = i.useState(null != eI && eI.length > 0);
  i.useEffect(() => {
    if (e8.current) return;
    let e = async () => {
      e8.current = true;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, I.vG)($);
        tn(!t), te(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) return void(0, k.Vh)(eN, "oauth2_error_failed_disclosures");
        eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e8.current = false
      }
    };
    if (null == eI) {
      if (!L.default.isAuthenticated()) return void(0, k.Vh)(eN, "oauth2_error_not_authenticated");
      e()
    }
  }, [$, eN, eI, te, eM, tn, eL]);
  let tr = i.useCallback(async e => {
      if (null != ev) {
        ek(true), ev(e);
        return
      }
      if (!e && !eE) {
        null != eO && (eO({
          application: null == eR ? true : eR.application,
          guild: eX
        }), null == eA || eA());
        return
      }
      if (null == eJ) return void eM(Error("No integration type was selected."));
      try {
        ek(true);
        let n = await (0, k.Gq)({
          authorize: e,
          clientId: $,
          scopes: e4,
          responseType: en,
          redirectUri: er,
          codeChallenge: ei,
          codeChallengeMethod: ea,
          state: eo,
          nonce: es,
          integrationType: eJ,
          permissions: f.TF(e7, eW),
          guildId: eJ === u.b.GUILD_INSTALL && null != eF ? eF : true,
          channelId: eJ === u.b.GUILD_INSTALL && null != eH ? eH : true,
          dmSettings: {
            allowMobilePush: ez
          }
        });
        if (e && await (0, I.Yx)($, e9), null != eO) eO({
          application: null == eR ? true : eR.application,
          location: n.location,
          guild: eX
        }), null == eA || eA();
        else if (null != n.location) {
          var t;
          let e = null == (t = M.A.toURLSafe(n.location)) ? true : t.pathname;
          M.A.isDiscordUrl(n.location) && e === J.BVt.OAUTH2_AUTHORIZED ? (0, R.pX)(J.BVt.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eR ? true : eR.application,
              guild: eX
            }
          }) : window.location = n.location
        } else ek(false)
      } catch (t) {
        let e = t.body;
        (null == e ? true : e.message) != null && "" !== e.message ? eM(Error(e.message)) : eM(e), eL("AUTHORIZE_SCOPES"), ek(false)
      }
    }, [ev, eE, eO, null == eR ? true : eR.application, eX, eA, $, e4, en, er, ei, ea, eo, es, e7, eW, eF, eJ, eH, e9, ez]),
    ti = i.useRef(false),
    ta = i.useCallback(async () => {
      if (!L.default.isAuthenticated()) return void(0, k.Vh)(eN, "oauth2_error_not_authenticated");
      if (!e8.current && !ti.current) {
        ti.current = true;
        try {
          let e = null != eC ? eC : await (0, k.qY)({
            clientId: $,
            scopes: e4,
            responseType: en,
            redirectUri: er,
            codeChallenge: ei,
            codeChallengeMethod: ea,
            state: eo,
            nonce: es,
            integrationType: null != eJ ? eJ : true
          });
          eP((0, U._)(e)), ec === F.l.NONE && e.authorized && !tt && tr(true), (0, b.zV)(J.HAw.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id,
            mobile_push_notification_default_setting: false
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) return void(0, k.Vh)(eN, "oauth2_error_unauthorized");
          eM(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
        } finally {
          ti.current = false
        }
      }
    }, [eN, eC, $, e4, en, er, ei, ea, eo, es, eJ, ec, tr, tt]),
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
    eD !== ts.current && (ts.current = eD, (0, b.zV)(J.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
      step: eD,
      application_id: $,
      integration_type: eJ,
      scopes: e4,
      permissions: e7.toString(),
      mobile_push_notification_default_setting: false
    }))
  }, [$, eJ, e7, e4, eD]), i.useEffect(() => {
    if (null == eD && (!e0 || null != e1) && ew)
      if (null != eC) {
        var e;
        e$(null != (e = eC.integration_type) ? e : u.b.GUILD_INSTALL), eL("AUTHORIZE_SCOPES")
      } else to.length > 1 ? eL("SELECT_INSTALL_TYPE") : (1 === to.length ? e$(to[0]) : null != eh ? e$(eh) : e$(u.b.GUILD_INSTALL), eL("AUTHORIZE_SCOPES"))
  }, [eC, to, e1, e0, eh, eD, ew]), i.useEffect(() => {
    if (null == eJ || null != eR || null != ex) return;
    eJ === u.b.USER_INSTALL && (eB(null), eY(null));
    let e = e4.filter(e => !V.gX.includes(e));
    0 === e4.length ? eM(Error("No scopes were provided.")) : e.length > 0 ? eM(Error("Invalid scope: ".concat(e[0]))) : (0, G.F7)(e7) ? eM(Error("Invalid permission(s) provided.")) : ta()
  }, [tt, ta, e4, e7, eJ, eR, ex]);
  let tl = i.useCallback(e => {
      e && eG(true)
    }, []),
    tc = (0, l.K)(tl);
  if (ex instanceof Error) return eS ? {
    body: (0, r.jsx)(Q.gz, {
      message: ex.message
    })
  } : eT ? {
    label: ee.intl.string(ee.t.j2d6Km),
    header: (0, r.jsx)(E.Text, {
      variant: "text-lg/bold",
      color: "text-strong",
      children: ee.intl.string(ee.t.j2d6Km)
    }),
    body: (0, r.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: ex.message
    }),
    actions: [{
      onClick: eA,
      text: ee.intl.string(ee.t.cpT0Cq)
    }],
    noPadding: true
  } : {
    title: ee.intl.string(ee.t.j2d6Km),
    subtitle: ex.message,
    actions: [{
      onClick: eA,
      text: ee.intl.string(ee.t.cpT0Cq)
    }]
  };
  let tu = e => {
      e$(e), eP(null), eL("AUTHORIZE_SCOPES")
    },
    td = (e, t) => {
      eK(n => e ? f.TF(n, t) : f.WQ(n, t))
    },
    tf = false,
    tp = false,
    t_ = true,
    th = true,
    tm = true,
    tg = false;
  switch (eD) {
    case null:
      return {
        label: ee.intl.string(ee.t.ZTNur7), body: (0, r.jsx)(el, {})
      };
    case "SELECT_INSTALL_TYPE":
      if (null == e1) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      O = (0, r.jsx)(q.A, {
        application: e1,
        onSelect: tu
      }), t_ = false, th = false, tm = false, tg = true;
      break;
    case "AUTHORIZE_SCOPES":
      if (null == eR || null == eZ || null == eJ) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      let tE = null == ex || ex instanceof Error ? {} : ex,
        ty = null == eV ? true : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        tb = eJ === u.b.GUILD_INSTALL && e4.includes(d.F.WEBHOOK_INCOMING),
        tO = tb || eJ === u.b.GUILD_INSTALL && (e4.includes(d.F.BOT) || e4.includes(d.F.APPLICATIONS_COMMANDS)),
        tv = (0, p.Lt)(null != (n = eR.application.flags) ? n : 0, J.gfo.EMBEDDED) && eJ === u.b.USER_INSTALL && e6.enabled;
      O = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(H.A, {
          application: eR.application,
          accountScopes: e5
        }), (0, r.jsx)(Y.A, {
          application: eR.application,
          accountScopes: e5,
          requestedScopes: e4,
          integrationType: eJ,
          errors: tE,
          isTrustedName: ey || eQ,
          noDivider: !tv && !tO && !tb && e6.enabled
        }), tv ? (0, r.jsx)("div", {
          className: et._j,
          children: (0, r.jsx)(E.dOG, {
            label: ee.intl.string(ee.t["Pkw//o"]),
            onChange: eq,
            description: ee.intl.string(ee.t.hw1nKf),
            checked: ez
          })
        }) : null, (0, r.jsx)("div", {
          className: et.sL,
          ref: tc
        }), tO ? (0, r.jsx)(K.A, {
          error: (null != (a = null != (o = tE[d.F.BOT]) ? o : tE[d.F.APPLICATIONS_COMMANDS]) ? a : [])[0],
          selectedGuildId: eF,
          onGuildChange: eB,
          guilds: null != ty ? ty : [],
          disabled: "" !== eF && null != eF && true === em
        }) : null, tb ? (0, r.jsx)(X.A, {
          error: (null != (c = tE[d.F.WEBHOOK_INCOMING]) ? c : [])[0],
          selectedChannelId: eH,
          selectedGuildId: eF,
          onChannelChange: eY
        }) : null]
      }), e4.includes(d.F.BOT) && !f.aI(e7, x.x3) && (C = "AUTHORIZE_BOT_PERMISSIONS"), to.length > 1 && (T = "SELECT_INSTALL_TYPE"), tp = tO && null == eX || tb && null == eH, tf = true;
      break;
    case "AUTHORIZE_BOT_PERMISSIONS":
      if (null == eR) return {
        label: ee.intl.string(ee.t.ZTNur7),
        body: (0, r.jsx)(el, {})
      };
      O = (0, r.jsx)(W.A, {
        application: eR.application,
        permissions: e7,
        deniedPermissions: eW,
        onPermissionsChange: td,
        guild: eX
      }), T = "AUTHORIZE_SCOPES", tf = true
  }
  let tA = [];
  if (t_ && null != eR) {
    let e = null != (_ = null == eR ? true : eR.application.approximate_guild_count) ? _ : null == eR || null == (g = eR.bot) ? true : g.approximate_guild_count;
    w = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(B.A, {
        application: eR.application,
        scopes: e4,
        disclosures: e9,
        redirectUri: null != (m = eR.redirect_uri) ? m : null,
        approximateGuildCount: true !== e ? e : null,
        isEmbeddedFlow: eb
      }), (0, r.jsx)("div", {
        className: et.sL,
        ref: tc
      })]
    })
  }
  return th && null != eR && null != eZ && (Z = (0, r.jsx)(z.A, {
    user: eZ,
    application: eR.application,
    bot: eR.bot,
    accountScopes: e5,
    showLogout: eg || false,
    location: eN,
    scopes: e4
  })), tm && (tA.push(null != T ? {
    variant: "secondary",
    onClick: () => eL(T),
    text: ee.intl.string(ee.t["13/7kX"])
  } : {
    variant: "secondary",
    onClick: () => tr(false),
    text: ee.intl.string(ee.t["ETE/oC"])
  }), "SELECT_INSTALL_TYPE" !== eD && tA.push(eU ? {
    onClick: null != C ? () => eL(C) : () => tr(true),
    loading: ej,
    disabled: null == w || tp,
    text: tp ? ee.intl.string(ee.t.BwwiSM) : null != C ? ee.intl.string(ee.t["3PatSz"]) : ee.intl.string(ee.t["y+/PE9"])
  } : {
    disabled: true,
    loading: ej,
    text: ee.intl.string(ee.t.N22i9F),
    icon: E.MFz
  })), {
    header: Z,
    body: O,
    actions: tA,
    nextStep: C,
    appDetails: w,
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
  } = null != (n = M.A.toURLSafe(t.location)) ? n : {}, l = M.A.isDiscordHostname(null != a ? a : null) || window.location.host === a;
  l && o === J.BVt.OAUTH2_AUTHORIZED ? (0, m.openModal)(e => (0, r.jsx)(Q.dR, er({
    guild: t.guild,
    application: t.application
  }, e))) : l && (null == o ? true : o.startsWith(J.BVt.OAUTH2_ERROR)) ? (0, m.openModal)(e => {
    var t, n;
    let i = null != (t = null != (n = null == s ? true : s.get("error_description")) ? n : null == s ? true : s.get("error")) ? t : ee.intl.string(ee.t.mqn873);
    return Array.isArray(i) && (i = i[0]), (0, r.jsx)(Z.f, ea(er({}, e), {
      children: (0, r.jsx)(Q.gz, {
        message: i,
        onClose: e.onClose
      })
    }))
  }) : null == (i = window.open(t.location, "_blank")) || i.focus()
}

function ed(e, t) {
  (0, w._9)() ? C.A.openCreateGuildModal({
    onSuccess: n => ef(ea(er({}, e), {
      guildId: n
    }), t)
  }): ef(e, t)
}

function ef(e, t) {
  (0, m.openModal)(t => (0, r.jsx)(es, ea(er({}, t, e), {
    cancelCompletesFlow: false,
    callback: eu.bind(null, e)
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
  } = null != (t = M.A.toURLSafe(e)) ? t : {};
  return null != i && null != a && (M.A.isDiscordHostname(n) || r === window.location.host) && (i.startsWith("/api".concat(J.Rsh.OAUTH2_AUTHORIZE)) || i.startsWith(J.BVt.OAUTH2_AUTHORIZE)) ? (0, j._)(a) : null
}