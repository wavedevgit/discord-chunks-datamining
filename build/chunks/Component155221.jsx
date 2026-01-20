/** Chunk was on web.js **/
/** chunk id: 155221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el,
  a: () => q
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk828700 = require("./828700.js"),
  Chunk990547 = require("./990547.js"),
  Chunk719711 = require("./719711.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk799656 = require("./799656.jsx"),
  Chunk765717 = require("./765717.jsx"),
  Chunk663993 = require("./663993.js"),
  Chunk329816 = require("./329816.jsx"),
  Chunk554608 = require("./554608.js"),
  Chunk83949 = require("./83949.js"),
  Chunk137412 = require("./137412.js"),
  Chunk893607 = require("./893607.js"),
  Chunk218543 = require("./218543.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk690032 = require("./690032.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk188785 = require("./188785.js"),
  Chunk436620 = require("./436620.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./928518.js"), require("./972830.js"), require("./704806.js");
let j = (0, Chunk663993.Un)({
    createPromise: () => n.e("47620").then(n.bind(n, 576184)),
    webpackId: 576184,
    name: "UnsupportedBrowser"
  }),
  M = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583)),
    webpackId: 431583,
    name: "DownloadApps"
  }),
  k = (0, Chunk663993.Un)({
    createPromise: () => n.e("81226").then(n.bind(n, 484097)),
    webpackId: 484097,
    name: "InviteProxy"
  }),
  U = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("800"), n.e("30556")]).then(n.bind(n, 675207)),
    webpackId: 675207,
    name: "VerifyConnectedAccount"
  }),
  G = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("800"), n.e("3809")]).then(n.bind(n, 301001)),
    webpackId: 301001,
    name: "VerifyConnectedAccountSuccess"
  }),
  Z = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("800"), n.e("1544")]).then(n.bind(n, 926665)),
    webpackId: 926665,
    name: "VerifyConnectedAccountError"
  }),
  F = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("800"), n.e("67127")]).then(n.bind(n, 832462)),
    webpackId: 832462,
    name: "LinkConnectedAccount"
  }),
  B = (0, Chunk663993.Un)({
    createPromise: () => n.e("46455").then(n.bind(n, 924339)),
    webpackId: 924339,
    name: "LinkAuthorize"
  }),
  V = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("86980"), n.e("69773")]).then(n.bind(n, 197528)),
    webpackId: 197528,
    name: "ActivateDevice"
  }),
  H = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("53870"), n.e("57804"), n.e("50448"), n.e("82821"), n.e("35535"), n.e("23706"), n.e("72748"), n.e("51417"), n.e("90508"), n.e("49049"), n.e("33285"), n.e("63575"), n.e("38697"), n.e("96795"), n.e("39206"), n.e("68294"), n.e("93375"), n.e("6915"), n.e("91689"), n.e("69937"), n.e("22516"), n.e("6164"), n.e("30634"), n.e("92091"), n.e("76676"), n.e("13873"), n.e("77069"), n.e("11010"), n.e("37220"), n.e("83772"), n.e("87646"), n.e("83243"), n.e("91315"), n.e("77803"), n.e("89929"), n.e("81985"), n.e("22979"), n.e("92504"), n.e("29709"), n.e("74969"), n.e("13532"), n.e("32996"), n.e("1272")]).then(n.bind(n, 457094)),
    webpackId: 457094,
    name: "ViewsWithMainInterface",
    memo: true,
    id: 457094
  }),
  Y = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("86980"), n.e("52030"), n.e("13873"), n.e("10778"), n.e("12581"), n.e("41619"), n.e("13532"), n.e("27978")]).then(n.bind(n, 822699)),
    webpackId: 822699,
    name: "ViewsWithAuth"
  }),
  W = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("12581"), n.e("96858")]).then(n.bind(n, 285773)),
    webpackId: 285773,
    name: "ViewsWithOAuth2"
  }),
  K = (0, Chunk663993.Un)({
    createPromise: () => n.e("57047").then(n.bind(n, 549652)),
    webpackId: 549652,
    name: "BrowserHandoff"
  }),
  z = (0, Chunk663993.Un)({
    createPromise: () => n.e("71747").then(n.bind(n, 573276)),
    webpackId: 573276,
    name: "MobileWebHandoffFallback"
  }),
  q = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("53870"), n.e("57804"), n.e("35535"), n.e("72748"), n.e("90508"), n.e("49049"), n.e("33285"), n.e("63575"), n.e("38697"), n.e("96795"), n.e("39206"), n.e("68294"), n.e("93375"), n.e("6915"), n.e("69937"), n.e("6164"), n.e("92091"), n.e("76676"), n.e("13873"), n.e("11010"), n.e("37220"), n.e("83772"), n.e("87646"), n.e("91315"), n.e("81985"), n.e("63141")]).then(n.bind(n, 290161)),
    webpackId: 290161,
    name: "Overlay"
  }),
  Q = (0, Chunk663993.Un)({
    createPromise: () => n.e("75347").then(n.bind(n, 430075)),
    webpackId: 430075,
    name: "SuspendedUserSafetyHubPage"
  }),
  X = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("78374"), n.e("10125")]).then(n.bind(n, 630107)),
    webpackId: 630107,
    name: "QuestsLandingPage"
  }),
  J = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("78374"), n.e("41734")]).then(n.bind(n, 792459)),
    webpackId: 792459,
    name: "QuestPreviewLandingPage"
  }),
  $ = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("800"), n.e("58131")]).then(n.bind(n, 531338)),
    webpackId: 531338,
    name: "ConnectionsAuthorizeContinue"
  }),
  ee = (0, Chunk663993.Un)({
    createPromise: () => n.e("78449").then(n.bind(n, 684572)),
    webpackId: 684572,
    name: "ApplicationDirectoryRoutes"
  }),
  et = (0, Chunk663993.Un)({
    createPromise: () => n.e("20501").then(n.bind(n, 332116)),
    webpackId: 332116,
    name: "ApplicationDirectoryGlobalDiscoveryRoutes"
  }),
  en = () => (0, r.jsx)(H, {}),
  er = new Set([Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.INVITE_LOGIN(":inviteCode"), Chunk981631.Z5c.GIFT_CODE_LOGIN(":giftCode"), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

function ei(e, t) {
  return t ? e.filter(e => !er.has(e)) : e
}
class ea extends Chunk473749.Component {
  componentDidMount() {
    let {
      isAuthenticated: e
    } = this.props;
    A.ZP.cleanupDisplaySleep(), b.Z.initialize(), O.Z.wasAuthenticated = e
  }
  componentWillUnmount() {
    b.Z.terminate()
  }
  render() {
    let e, {
      isAuthenticated: t,
      migrationStatus: n,
      skipsSettingDefaultPageTitle: i
    } = this.props;
    return e = n === g.P.IN_PROGRESS ? null : w.KO ? C.isPlatformEmbedded ? (0, r.jsxs)(o.rs, {
      children: [t ? null : (0, r.jsx)(o.AW, {
        path: N.Z5c.ACCOUNT_STANDING,
        component: Q
      }), (0, r.jsx)(o.AW, {
        exact: true,
        path: N.Z5c.INDEX,
        render: () => (0, r.jsx)(p.Z, {})
      }), (0, r.jsx)(_.Z, {
        exact: true,
        path: N.Z5c.APPS,
        component: M
      }), (0, r.jsx)(o.AW, {
        path: ei([N.Z5c.LOGIN, N.Z5c.REGISTER, N.Z5c.INVITE(":inviteCode"), N.Z5c.INVITE_LOGIN(":inviteCode"), N.Z5c.GIFT_CODE(":giftCode"), N.Z5c.GIFT_CODE_LOGIN(":giftCode"), N.Z5c.RESET], P.aA),
        component: Y
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.INVITE_PROXY(y.Hw.channelId()),
        component: k
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.INVITE(""),
        to: N.Z5c.LOGIN
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.GIFT_CODE(""),
        to: N.Z5c.LOGIN
      }), (0, r.jsx)(o.AW, {
        render: en
      })]
    }) : (0, r.jsxs)(o.rs, {
      children: [(0, r.jsx)(_.Z, {
        exact: true,
        path: N.Z5c.INDEX,
        render: () => (0, r.jsx)(p.Z, {})
      }), (0, r.jsx)(o.AW, {
        path: ei([N.Z5c.LOGIN_ONE_TIME, N.Z5c.LOGIN, N.Z5c.LOGIN_HANDOFF, N.Z5c.REGISTER, N.Z5c.BILLING_PREFIX, N.Z5c.BILLING_PROMOTION_REDEMPTION(":code"), N.Z5c.INVITE(":inviteCode"), N.Z5c.INVITE_LOGIN(":inviteCode"), N.Z5c.GIFT_CODE(":giftCode"), N.Z5c.GIFT_CODE_LOGIN(":giftCode"), N.Z5c.GUILD_TEMPLATE(":guildTemplateCode"), N.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), N.Z5c.DISABLE_EMAIL_NOTIFICATIONS, N.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, N.Z5c.RESET, N.Z5c.REPORT, N.Z5c.REPORT_SECOND_LOOK, N.Z5c.ACCOUNT_REVERT(":token")], P.aA),
        component: Y
      }), t ? null : (0, r.jsx)(o.AW, {
        path: N.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        component: Y
      }), t ? null : (0, r.jsx)(o.AW, {
        path: N.Z5c.CHANNEL(y.Hw.guildId(), y.Hw.channelId({
          optional: true
        }), ":messageId?"),
        component: Y
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.INVITE(""),
        to: N.Z5c.LOGIN
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.INVITE_PROXY(y.Hw.channelId()),
        component: k
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.GIFT_CODE(""),
        to: N.Z5c.LOGIN
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.QUESTS(":questId"),
        component: X,
        impressionName: s.ImpressionNames.QUESTS_LANDING_PAGE,
        impressionProperties: e => {
          let {
            computedMatch: t
          } = e;
          return {
            quest_id: t.params.questId
          }
        }
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.QUEST_PREVIEW(":questId"),
        component: J
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.HANDOFF,
        component: K
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.MOBILE_WEB_HANDOFF,
        component: z
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTION_LINK(":type"),
        component: F
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTION_LINK_AUTHORIZE(":type"),
        component: B
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.ACTIVATE,
        component: V
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.ACTIVATE_HANDOFF,
        component: V
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
        component: $
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTIONS_SUCCESS(":type"),
        component: G
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTIONS_ERROR(":type"),
        component: Z
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.CONNECTIONS(":type"),
        component: U
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.DOWNLOAD_QR_CODE_REDIRECT,
        render: () => {
          var e, t, n;
          let r = null == (e = S.default.getSuperProperties()) ? true : e.os,
            i = (0, a.parse)((null != (n = window.location.search) ? n : "").substr(1)),
            o = null == (t = i.referring_location) ? true : t.toString();
          return ("iOS" === r || "Android" === r) && S.default.track(N.rMx.DOWNLOAD_APP, {
            platform: r,
            ptb: false,
            released: true,
            has_e_mail: "true" === i.has_e_mail,
            referring_location: o,
            qr_code: true
          }), window.location.href = (0, I.Gn)(null != o && "" !== o ? o : "qr_code", r), null
        }
      }), (0, r.jsx)(_.Z, {
        path: N.Z5c.OPEN_APP_FROM_EMAIL,
        render: () => {
          var e, t;
          let n = null == (e = S.default.getSuperProperties()) ? true : e.os,
            i = (0, T.o)(null != (t = window.location.search) ? t : "");
          if ("iOS" !== n && "Android" !== n) return (0, r.jsx)(o.l_, {
            to: null != i.desktop ? "".concat(i.desktop.pathname).concat(i.desktop.search) : N.Z5c.APP
          });
          {
            let e = (0, I.Gn)("app_open_from_email", n, i.mobile),
              t = (0, c.zS)(e);
            null != t && S.default.track(N.rMx.DEEP_LINK_CLICKED, {
              fingerprint: (0, u.K)(t.fingerprint),
              attempt_id: t.attemptId,
              source: t.utmSource,
              destination: null != i.mobile ? i.mobile.toString() : null
            }), window.location.href = e
          }
        }
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.CONNECT_AUTHORIZE,
        to: L(D({}, location), {
          pathname: N.Z5c.OAUTH2_AUTHORIZE
        })
      }), (0, r.jsx)(o.AW, {
        path: [N.Z5c.OAUTH2_AUTHORIZED, N.Z5c.OAUTH2_AUTHORIZE, N.Z5c.OAUTH2_ERROR, N.Z5c.OAUTH2_WHITELIST_ACCEPT],
        component: W
      }), t ? null : (0, r.jsx)(o.AW, {
        path: [N.Z5c.ACCOUNT_STANDING],
        component: Q
      }), t ? null : (0, r.jsx)(o.AW, {
        path: [N.Z5c.APPLICATION_DIRECTORY],
        component: ee
      }), t ? null : (0, r.jsx)(o.AW, {
        path: [N.Z5c.GLOBAL_DISCOVERY_APPS],
        component: et
      }), (0, r.jsx)(o.AW, {
        render: en
      }), (0, r.jsx)(o.l_, {
        from: N.Z5c.ACCOUNT_REVERT(""),
        to: N.Z5c.LOGIN
      })]
    }) : (0, r.jsx)(o.rs, {
      children: (0, r.jsx)(_.Z, {
        component: j
      })
    }), (0, r.jsxs)(m.Z, {
      skipsSettingDefaultPageTitle: i,
      children: [e, C.isPlatformEmbedded && (n === g.P.NOT_STARTED || n === g.P.IN_PROGRESS) && true !== f.K.get(l.SV) ? (0, r.jsx)(E.Z, {}) : null]
    })
  }
}

function eo() {
  let {
    pathname: e
  } = (0, o.TH)();
  return null != (0, o.LX)(e, {
    path: N.Z5c.APPLICATION_DIRECTORY
  })
}

function es(e) {
  let t = eo();
  return (0, r.jsx)(ea, L(D({}, e), {
    skipsSettingDefaultPageTitle: t
  }))
}
let el = Chunk442837.ZP.connectStores([Chunk314897.default, Chunk554608.Z], () => ({
  isAuthenticated: v.default.isAuthenticated(),
  migrationStatus: g.Z.getMigrationStatus()
}), {
  forwardRef: true
})(es)