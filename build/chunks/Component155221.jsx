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

function w(e, t, n) {
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
      w(e, t, n[t])
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
    createPromise: () => require.e("47620").then(require.bind(require, 576184)),
    webpackId: 576184,
    name: "UnsupportedBrowser"
  }),
  M = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583)),
    webpackId: 431583,
    name: "DownloadApps"
  }),
  k = (0, Chunk663993.Un)({
    createPromise: () => require.e("81226").then(require.bind(require, 484097)),
    webpackId: 484097,
    name: "InviteProxy"
  }),
  U = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("800"), require.e("30556")]).then(require.bind(require, 675207)),
    webpackId: 675207,
    name: "VerifyConnectedAccount"
  }),
  G = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("800"), require.e("3809")]).then(require.bind(require, 301001)),
    webpackId: 301001,
    name: "VerifyConnectedAccountSuccess"
  }),
  Z = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("800"), require.e("1544")]).then(require.bind(require, 926665)),
    webpackId: 926665,
    name: "VerifyConnectedAccountError"
  }),
  B = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("800"), require.e("67127")]).then(require.bind(require, 832462)),
    webpackId: 832462,
    name: "LinkConnectedAccount"
  }),
  F = (0, Chunk663993.Un)({
    createPromise: () => require.e("46455").then(require.bind(require, 924339)),
    webpackId: 924339,
    name: "LinkAuthorize"
  }),
  V = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("10695"), require.e("69773")]).then(require.bind(require, 197528)),
    webpackId: 197528,
    name: "ActivateDevice"
  }),
  H = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("61924"), require.e("57804"), require.e("50448"), require.e("82821"), require.e("49552"), require.e("42604"), require.e("23032"), require.e("49894"), require.e("90508"), require.e("49049"), require.e("38697"), require.e("6915"), require.e("33285"), require.e("63575"), require.e("89250"), require.e("62856"), require.e("66201"), require.e("43342"), require.e("39206"), require.e("93375"), require.e("91315"), require.e("24358"), require.e("38342"), require.e("91689"), require.e("41700"), require.e("48615"), require.e("22516"), require.e("37220"), require.e("43778"), require.e("22173"), require.e("20598"), require.e("30634"), require.e("95546"), require.e("13873"), require.e("40184"), require.e("77069"), require.e("60831"), require.e("51333"), require.e("83243"), require.e("77803"), require.e("5410"), require.e("23736"), require.e("82477"), require.e("92504"), require.e("29709"), require.e("74969"), require.e("13532"), require.e("32996"), require.e("1272")]).then(require.bind(require, 457094)),
    webpackId: 457094,
    name: "ViewsWithMainInterface",
    memo: true,
    id: 457094
  }),
  Y = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("10695"), require.e("52030"), require.e("13873"), require.e("10778"), require.e("12581"), require.e("41619"), require.e("13532"), require.e("27978")]).then(require.bind(require, 822699)),
    webpackId: 822699,
    name: "ViewsWithAuth"
  }),
  W = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("12581"), require.e("96858")]).then(require.bind(require, 285773)),
    webpackId: 285773,
    name: "ViewsWithOAuth2"
  }),
  K = (0, Chunk663993.Un)({
    createPromise: () => require.e("57047").then(require.bind(require, 549652)),
    webpackId: 549652,
    name: "BrowserHandoff"
  }),
  z = (0, Chunk663993.Un)({
    createPromise: () => require.e("71747").then(require.bind(require, 573276)),
    webpackId: 573276,
    name: "MobileWebHandoffFallback"
  }),
  q = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("61924"), require.e("57804"), require.e("49552"), require.e("42604"), require.e("90508"), require.e("49049"), require.e("38697"), require.e("6915"), require.e("33285"), require.e("63575"), require.e("89250"), require.e("62856"), require.e("66201"), require.e("43342"), require.e("39206"), require.e("93375"), require.e("91315"), require.e("24358"), require.e("38342"), require.e("41700"), require.e("48615"), require.e("37220"), require.e("43778"), require.e("22173"), require.e("20598"), require.e("95546"), require.e("13873"), require.e("40184"), require.e("60831"), require.e("51333"), require.e("82477"), require.e("63141")]).then(require.bind(require, 290161)),
    webpackId: 290161,
    name: "Overlay"
  }),
  Q = (0, Chunk663993.Un)({
    createPromise: () => require.e("75347").then(require.bind(require, 430075)),
    webpackId: 430075,
    name: "SuspendedUserSafetyHubPage"
  }),
  X = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("78374"), require.e("10125")]).then(require.bind(require, 630107)),
    webpackId: 630107,
    name: "QuestsLandingPage"
  }),
  J = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("78374"), require.e("41734")]).then(require.bind(require, 792459)),
    webpackId: 792459,
    name: "QuestPreviewLandingPage"
  }),
  $ = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("800"), require.e("58131")]).then(require.bind(require, 531338)),
    webpackId: 531338,
    name: "ConnectionsAuthorizeContinue"
  }),
  ee = (0, Chunk663993.Un)({
    createPromise: () => require.e("78449").then(require.bind(require, 684572)),
    webpackId: 684572,
    name: "ApplicationDirectoryRoutes"
  }),
  et = (0, Chunk663993.Un)({
    createPromise: () => require.e("20501").then(require.bind(require, 332116)),
    webpackId: 332116,
    name: "ApplicationDirectoryGlobalDiscoveryRoutes"
  }),
  en = () => (0, Chunk54381.jsx)(H, {}),
  er = new Set([Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.INVITE_LOGIN(":inviteCode"), Chunk981631.Z5c.GIFT_CODE_LOGIN(":giftCode"), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

function ei(e, t) {
  return t ? e.filter(e => !er.has(e)) : e
}
class ea extends Chunk473749.Component {
  componentDidMount() {
    let {
      isAuthenticated: e
    } = this.props;
    Chunk998502.ZP.cleanupDisplaySleep(), Chunk137412.Z.initialize(), Chunk218543.Z.wasAuthenticated = module
  }
  componentWillUnmount() {
    Chunk137412.Z.terminate()
  }
  render() {
    let e, {
      isAuthenticated: t,
      migrationStatus: n,
      skipsSettingDefaultPageTitle: i
    } = this.props;
    return e = require === Chunk554608.P.IN_PROGRESS ? null : Chunk436620.KO ? Chunk358085.isPlatformEmbedded ? (0, Chunk54381.jsxs)(Chunk828700.rs, {
      children: [exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: Chunk981631.Z5c.ACCOUNT_STANDING,
        component: Q
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        exact: true,
        path: Chunk981631.Z5c.INDEX,
        render: () => (0, Chunk54381.jsx)(Chunk799656.Z, {})
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        exact: true,
        path: Chunk981631.Z5c.APPS,
        component: M
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: ei([Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.REGISTER, Chunk981631.Z5c.INVITE(":inviteCode"), Chunk981631.Z5c.INVITE_LOGIN(":inviteCode"), Chunk981631.Z5c.GIFT_CODE(":giftCode"), Chunk981631.Z5c.GIFT_CODE_LOGIN(":giftCode"), Chunk981631.Z5c.RESET], Chunk188785.a),
        component: Y
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.INVITE_PROXY(Chunk893607.Hw.channelId()),
        component: k
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.INVITE(""),
        to: Chunk981631.Z5c.LOGIN
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.GIFT_CODE(""),
        to: Chunk981631.Z5c.LOGIN
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        render: en
      })]
    }) : (0, Chunk54381.jsxs)(Chunk828700.rs, {
      children: [(0, Chunk54381.jsx)(Chunk765717.Z, {
        exact: true,
        path: Chunk981631.Z5c.INDEX,
        render: () => (0, Chunk54381.jsx)(Chunk799656.Z, {})
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: ei([Chunk981631.Z5c.LOGIN_ONE_TIME, Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.LOGIN_HANDOFF, Chunk981631.Z5c.REGISTER, Chunk981631.Z5c.BILLING_PREFIX, Chunk981631.Z5c.BILLING_PROMOTION_REDEMPTION(":code"), Chunk981631.Z5c.INVITE(":inviteCode"), Chunk981631.Z5c.INVITE_LOGIN(":inviteCode"), Chunk981631.Z5c.GIFT_CODE(":giftCode"), Chunk981631.Z5c.GIFT_CODE_LOGIN(":giftCode"), Chunk981631.Z5c.GUILD_TEMPLATE(":guildTemplateCode"), Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), Chunk981631.Z5c.DISABLE_EMAIL_NOTIFICATIONS, Chunk981631.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Chunk981631.Z5c.RESET, Chunk981631.Z5c.REPORT, Chunk981631.Z5c.REPORT_SECOND_LOOK, Chunk981631.Z5c.ACCOUNT_REVERT(":token")], Chunk188785.a),
        component: Y
      }), exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: Chunk981631.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        component: Y
      }), exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: Chunk981631.Z5c.CHANNEL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
          optional: true
        }), ":messageId?"),
        component: Y
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.INVITE(""),
        to: Chunk981631.Z5c.LOGIN
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.INVITE_PROXY(Chunk893607.Hw.channelId()),
        component: k
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.GIFT_CODE(""),
        to: Chunk981631.Z5c.LOGIN
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.QUESTS(":questId"),
        component: X,
        impressionName: Chunk990547.ImpressionNames.QUESTS_LANDING_PAGE,
        impressionProperties: e => {
          let {
            computedMatch: t
          } = e;
          return {
            quest_id: t.params.questId
          }
        }
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.QUEST_PREVIEW(":questId"),
        component: J
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.HANDOFF,
        component: K
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.MOBILE_WEB_HANDOFF,
        component: z
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTION_LINK(":type"),
        component: B
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTION_LINK_AUTHORIZE(":type"),
        component: F
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.ACTIVATE,
        component: V
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.ACTIVATE_HANDOFF,
        component: V
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
        component: $
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTIONS_SUCCESS(":type"),
        component: G
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTIONS_ERROR(":type"),
        component: Z
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CONNECTIONS(":type"),
        component: U
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.DOWNLOAD_QR_CODE_REDIRECT,
        render: () => {
          var e, t, n;
          let r = null == (e = Chunk626135.default.getSuperProperties()) ? true : module.os,
            i = (0, Chunk664751.parse)((null != (n = window.location.search) ? require : "").substr(1)),
            o = null == (t = Chunk473749.referring_location) ? true : exports.toString();
          return ("iOS" === Chunk54381 || "Android" === Chunk54381) && Chunk626135.default.track(Chunk981631.rMx.DOWNLOAD_APP, {
            platform: Chunk54381,
            ptb: false,
            released: true,
            has_e_mail: "true" === Chunk473749.has_e_mail,
            referring_location: Chunk828700,
            qr_code: true
          }), window.location.href = (0, Chunk361207.Gn)(null != Chunk828700 && "" !== Chunk828700 ? Chunk828700 : "qr_code", Chunk54381), null
        }
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.OPEN_APP_FROM_EMAIL,
        render: () => {
          var e, t;
          let n = null == (e = Chunk626135.default.getSuperProperties()) ? true : module.os,
            i = (0, Chunk690032.o)(null != (t = window.location.search) ? exports : "");
          if ("iOS" !== require && "Android" !== require) return (0, Chunk54381.jsx)(Chunk828700.l_, {
            to: null != Chunk473749.desktop ? "".concat(Chunk473749.desktop.pathname).concat(Chunk473749.desktop.search) : Chunk981631.Z5c.APP
          });
          {
            let e = (0, Chunk361207.Gn)("app_open_from_email", require, Chunk473749.mobile),
              t = (0, Chunk271579.zS)(module);
            null != exports && Chunk626135.default.track(Chunk981631.rMx.DEEP_LINK_CLICKED, {
              fingerprint: (0, Chunk756647.K)(exports.fingerprint),
              attempt_id: exports.attemptId,
              source: exports.utmSource,
              destination: null != Chunk473749.mobile ? Chunk473749.mobile.toString() : null
            }), window.location.href = module
          }
        }
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.CONNECT_AUTHORIZE,
        to: L(D({}, location), {
          pathname: Chunk981631.Z5c.OAUTH2_AUTHORIZE
        })
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: [Chunk981631.Z5c.OAUTH2_AUTHORIZED, Chunk981631.Z5c.OAUTH2_AUTHORIZE, Chunk981631.Z5c.OAUTH2_ERROR, Chunk981631.Z5c.OAUTH2_WHITELIST_ACCEPT],
        component: W
      }), exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: [Chunk981631.Z5c.ACCOUNT_STANDING],
        component: Q
      }), exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: [Chunk981631.Z5c.APPLICATION_DIRECTORY],
        component: ee
      }), exports ? null : (0, Chunk54381.jsx)(Chunk828700.AW, {
        path: [Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS],
        component: et
      }), (0, Chunk54381.jsx)(Chunk828700.AW, {
        render: en
      }), (0, Chunk54381.jsx)(Chunk828700.l_, {
        from: Chunk981631.Z5c.ACCOUNT_REVERT(""),
        to: Chunk981631.Z5c.LOGIN
      })]
    }) : (0, Chunk54381.jsx)(Chunk828700.rs, {
      children: (0, Chunk54381.jsx)(Chunk765717.Z, {
        component: j
      })
    }), (0, Chunk54381.jsxs)(Chunk329816.Z, {
      skipsSettingDefaultPageTitle: Chunk473749,
      children: [module, Chunk358085.isPlatformEmbedded && (require === Chunk554608.P.NOT_STARTED || require === Chunk554608.P.IN_PROGRESS) && true !== Chunk433517.K.get(Chunk719711.SV) ? (0, Chunk54381.jsx)(Chunk83949.Z, {}) : null]
    })
  }
}

function eo() {
  let {
    pathname: e
  } = (0, Chunk828700.TH)();
  return null != (0, Chunk828700.LX)(module, {
    path: Chunk981631.Z5c.APPLICATION_DIRECTORY
  })
}

function es(e) {
  let t = eo();
  return (0, r.jsx)(ea, L(D({}, e), {
    skipsSettingDefaultPageTitle: t
  }))
}
let el = Chunk442837.ZP.connectStores([Chunk314897.default, Chunk554608.Z], () => ({
  isAuthenticated: Chunk314897.default.isAuthenticated(),
  migrationStatus: Chunk554608.Z.getMigrationStatus()
}), {
  forwardRef: true
})(es)