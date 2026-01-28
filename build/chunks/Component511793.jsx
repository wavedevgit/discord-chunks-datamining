/** Chunk was on web.js **/
/** chunk id: 511793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => es,
  h: () => q
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk488428 = require("./488428.js"),
  Chunk960488 = require("./960488.js"),
  Chunk110259 = require("./110259.js"),
  Chunk279194 = require("./279194.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk417876 = require("./417876.jsx"),
  Chunk549711 = require("./549711.jsx"),
  Chunk268218 = require("./268218.js"),
  Chunk701663 = require("./701663.jsx"),
  Chunk7143 = require("./7143.js"),
  Chunk404787 = require("./404787.js"),
  Chunk411199 = require("./411199.js"),
  Chunk463347 = require("./463347.js"),
  Chunk614792 = require("./614792.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk53505 = require("./53505.js"),
  Chunk374400 = require("./374400.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");
require("./436317.js");
var Chunk396574 = require("./396574.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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

function D(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./869146.js"), require("./507263.js"), require("./851581.js");
let x = (0, Chunk268218.Fe)({
    createPromise: () => n.e("99681").then(n.bind(n, 224116)),
    webpackId: 224116,
    name: "UnsupportedBrowser"
  }),
  M = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482)),
    webpackId: 987482,
    name: "DownloadApps"
  }),
  j = (0, Chunk268218.Fe)({
    createPromise: () => n.e("84809").then(n.bind(n, 312625)),
    webpackId: 312625,
    name: "InviteProxy"
  }),
  k = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("34917"), n.e("46391")]).then(n.bind(n, 556074)),
    webpackId: 556074,
    name: "VerifyConnectedAccount"
  }),
  U = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("34917"), n.e("63832")]).then(n.bind(n, 744185)),
    webpackId: 744185,
    name: "VerifyConnectedAccountSuccess"
  }),
  G = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("34917"), n.e("50033")]).then(n.bind(n, 885338)),
    webpackId: 885338,
    name: "VerifyConnectedAccountError"
  }),
  F = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("34917"), n.e("52986")]).then(n.bind(n, 97649)),
    webpackId: 97649,
    name: "LinkConnectedAccount"
  }),
  V = (0, Chunk268218.Fe)({
    createPromise: () => n.e("65893").then(n.bind(n, 599128)),
    webpackId: 599128,
    name: "LinkAuthorize"
  }),
  B = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("82832"), n.e("16864")]).then(n.bind(n, 60883)),
    webpackId: 60883,
    name: "ActivateDevice"
  }),
  H = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("54809"), n.e("87093"), n.e("38939"), n.e("10614"), n.e("49681"), n.e("94678"), n.e("896"), n.e("73924"), n.e("92777"), n.e("63"), n.e("87440"), n.e("3795"), n.e("99011"), n.e("28936"), n.e("40215"), n.e("40396"), n.e("13088"), n.e("48330"), n.e("92414"), n.e("62175"), n.e("97283"), n.e("94857"), n.e("28136"), n.e("7034"), n.e("20941"), n.e("37372"), n.e("67923"), n.e("3183"), n.e("92917"), n.e("2292"), n.e("45586"), n.e("62733"), n.e("83518"), n.e("22726"), n.e("5152"), n.e("52199"), n.e("78572"), n.e("3911"), n.e("34749"), n.e("44667"), n.e("7803"), n.e("84704"), n.e("8018"), n.e("67646"), n.e("5606"), n.e("72271"), n.e("49862"), n.e("60989"), n.e("24202"), n.e("33818"), n.e("79149"), n.e("38985"), n.e("36290"), n.e("59541"), n.e("49107"), n.e("88974"), n.e("15172"), n.e("83898"), n.e("4787"), n.e("33563"), n.e("6502"), n.e("79023"), n.e("38660"), n.e("28979"), n.e("31748"), n.e("44384"), n.e("52390"), n.e("1636"), n.e("48898"), n.e("74492"), n.e("34160"), n.e("78528"), n.e("65298"), n.e("28636"), n.e("46636"), n.e("71853"), n.e("94531"), n.e("56423"), n.e("21738")]).then(n.bind(n, 885041)),
    webpackId: 885041,
    name: "ViewsWithMainInterface",
    memo: true,
    id: 885041
  }),
  Y = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("82832"), n.e("48330"), n.e("37372"), n.e("88890"), n.e("79023"), n.e("7726"), n.e("99673"), n.e("34078"), n.e("94531"), n.e("86142")]).then(n.bind(n, 998643)),
    webpackId: 998643,
    name: "ViewsWithAuth"
  }),
  W = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("99673"), n.e("13419")]).then(n.bind(n, 39960)),
    webpackId: 39960,
    name: "ViewsWithOAuth2"
  }),
  K = (0, Chunk268218.Fe)({
    createPromise: () => n.e("30514").then(n.bind(n, 146088)),
    webpackId: 146088,
    name: "BrowserHandoff"
  }),
  z = (0, Chunk268218.Fe)({
    createPromise: () => n.e("74272").then(n.bind(n, 569710)),
    webpackId: 569710,
    name: "MobileWebHandoffFallback"
  }),
  q = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("54809"), n.e("87093"), n.e("38939"), n.e("10614"), n.e("49681"), n.e("73924"), n.e("63"), n.e("3795"), n.e("99011"), n.e("28936"), n.e("40215"), n.e("40396"), n.e("13088"), n.e("48330"), n.e("92414"), n.e("62175"), n.e("97283"), n.e("94857"), n.e("28136"), n.e("7034"), n.e("20941"), n.e("37372"), n.e("67923"), n.e("3183"), n.e("92917"), n.e("2292"), n.e("45586"), n.e("62733"), n.e("83518"), n.e("22726"), n.e("5152"), n.e("52199"), n.e("78572"), n.e("3911"), n.e("34749"), n.e("44667"), n.e("7803"), n.e("84704"), n.e("8018"), n.e("67646"), n.e("5606"), n.e("72271"), n.e("49862"), n.e("60989"), n.e("24202"), n.e("33818"), n.e("38985"), n.e("59541"), n.e("49107"), n.e("88974"), n.e("15172"), n.e("83898"), n.e("6502"), n.e("79023"), n.e("38660"), n.e("31748"), n.e("44384"), n.e("52390"), n.e("1636"), n.e("48898"), n.e("34160"), n.e("78528"), n.e("84018")]).then(n.bind(n, 611861)),
    webpackId: 611861,
    name: "Overlay"
  }),
  Z = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("83518"), n.e("7803"), n.e("66708")]).then(n.bind(n, 303174)),
    webpackId: 303174,
    name: "SuspendedUserSafetyHubPage"
  }),
  Q = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("91227"), n.e("71791")]).then(n.bind(n, 125820)),
    webpackId: 125820,
    name: "QuestsLandingPage"
  }),
  X = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("91227"), n.e("44900")]).then(n.bind(n, 589877)),
    webpackId: 589877,
    name: "QuestPreviewLandingPage"
  }),
  J = (0, Chunk268218.Fe)({
    createPromise: () => Promise.all([n.e("34917"), n.e("81881")]).then(n.bind(n, 519716)),
    webpackId: 519716,
    name: "ConnectionsAuthorizeContinue"
  }),
  $ = (0, Chunk268218.Fe)({
    createPromise: () => n.e("15243").then(n.bind(n, 998345)),
    webpackId: 998345,
    name: "ApplicationDirectoryRoutes"
  }),
  ee = (0, Chunk268218.Fe)({
    createPromise: () => n.e("38217").then(n.bind(n, 149755)),
    webpackId: 149755,
    name: "ApplicationDirectoryGlobalDiscoveryRoutes"
  }),
  et = () => (0, r.jsx)(H, {}),
  en = new Set([Chunk652215.BVt.LOGIN, Chunk652215.BVt.LOGIN_HANDOFF, Chunk652215.BVt.INVITE_LOGIN(":inviteCode"), Chunk652215.BVt.GIFT_CODE_LOGIN(":giftCode"), Chunk652215.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

function er(e, t) {
  return t ? e.filter(e => !en.has(e)) : e
}
class ei extends Chunk64700.Component {
  componentDidMount() {
    let {
      isAuthenticated: e
    } = this.props;
    C.Ay.cleanupDisplaySleep(), y.A.initialize(), O.A.wasAuthenticated = e
  }
  componentWillUnmount() {
    y.A.terminate()
  }
  render() {
    let e, {
      isAuthenticated: t,
      migrationStatus: n,
      skipsSettingDefaultPageTitle: i
    } = this.props;
    return e = n === g.p.IN_PROGRESS ? null : w.VP ? T.isPlatformEmbedded ? (0, r.jsxs)(o.dO, {
      children: [t ? null : (0, r.jsx)(o.qh, {
        path: N.BVt.ACCOUNT_STANDING,
        component: Z
      }), (0, r.jsx)(o.qh, {
        exact: true,
        path: N.BVt.INDEX,
        render: () => (0, r.jsx)(p.A, {})
      }), (0, r.jsx)(_.A, {
        exact: true,
        path: N.BVt.APPS,
        component: M
      }), (0, r.jsx)(o.qh, {
        path: er([N.BVt.LOGIN, N.BVt.REGISTER, N.BVt.INVITE(":inviteCode"), N.BVt.INVITE_LOGIN(":inviteCode"), N.BVt.GIFT_CODE(":giftCode"), N.BVt.GIFT_CODE_LOGIN(":giftCode"), N.BVt.RESET], false),
        component: Y
      }), (0, r.jsx)(_.A, {
        path: N.BVt.INVITE_PROXY(b.pv.channelId()),
        component: j
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.INVITE(""),
        to: N.BVt.LOGIN
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.GIFT_CODE(""),
        to: N.BVt.LOGIN
      }), (0, r.jsx)(o.qh, {
        render: et
      })]
    }) : (0, r.jsxs)(o.dO, {
      children: [(0, r.jsx)(_.A, {
        exact: true,
        path: N.BVt.INDEX,
        render: () => (0, r.jsx)(p.A, {})
      }), (0, r.jsx)(o.qh, {
        path: er([N.BVt.LOGIN_ONE_TIME, N.BVt.LOGIN, N.BVt.LOGIN_HANDOFF, N.BVt.REGISTER, N.BVt.BILLING_PREFIX, N.BVt.BILLING_PROMOTION_REDEMPTION(":code"), N.BVt.INVITE(":inviteCode"), N.BVt.INVITE_LOGIN(":inviteCode"), N.BVt.GIFT_CODE(":giftCode"), N.BVt.GIFT_CODE_LOGIN(":giftCode"), N.BVt.GUILD_TEMPLATE(":guildTemplateCode"), N.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), N.BVt.DISABLE_EMAIL_NOTIFICATIONS, N.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, N.BVt.RESET, N.BVt.REPORT, N.BVt.REPORT_SECOND_LOOK, N.BVt.ACCOUNT_REVERT(":token")], false),
        component: Y
      }), t ? null : (0, r.jsx)(o.qh, {
        path: N.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        component: Y
      }), t ? null : (0, r.jsx)(o.qh, {
        path: N.BVt.CHANNEL(b.pv.guildId(), b.pv.channelId({
          optional: true
        }), ":messageId?"),
        component: Y
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.INVITE(""),
        to: N.BVt.LOGIN
      }), (0, r.jsx)(_.A, {
        path: N.BVt.INVITE_PROXY(b.pv.channelId()),
        component: j
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.GIFT_CODE(""),
        to: N.BVt.LOGIN
      }), (0, r.jsx)(_.A, {
        path: N.BVt.QUESTS(":questId"),
        component: Q,
        impressionName: s.ImpressionNames.QUESTS_LANDING_PAGE,
        impressionProperties: e => {
          let {
            computedMatch: t
          } = e;
          return {
            quest_id: t.params.questId
          }
        }
      }), (0, r.jsx)(_.A, {
        path: N.BVt.QUEST_PREVIEW(":questId"),
        component: X
      }), (0, r.jsx)(_.A, {
        path: N.BVt.HANDOFF,
        component: K
      }), (0, r.jsx)(_.A, {
        path: N.BVt.MOBILE_WEB_HANDOFF,
        component: z
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTION_LINK(":type"),
        component: F
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTION_LINK_AUTHORIZE(":type"),
        component: V
      }), (0, r.jsx)(_.A, {
        path: N.BVt.ACTIVATE,
        component: B
      }), (0, r.jsx)(_.A, {
        path: N.BVt.ACTIVATE_HANDOFF,
        component: B
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
        component: J
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTIONS_SUCCESS(":type"),
        component: U
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTIONS_ERROR(":type"),
        component: G
      }), (0, r.jsx)(_.A, {
        path: N.BVt.CONNECTIONS(":type"),
        component: k
      }), (0, r.jsx)(_.A, {
        path: N.BVt.DOWNLOAD_QR_CODE_REDIRECT,
        render: () => {
          var e, t, n;
          let r = null == (t = A.default.getSuperProperties()) ? true : t.os,
            i = (0, a.parse)((null != (e = window.location.search) ? e : "").substr(1)),
            o = null == (n = i.referring_location) ? true : n.toString();
          return ("iOS" === r || "Android" === r) && A.default.track(N.HAw.DOWNLOAD_APP, {
            platform: r,
            ptb: false,
            released: true,
            has_e_mail: "true" === i.has_e_mail,
            referring_location: o,
            qr_code: true
          }), window.location.href = (0, I.b$)(null != o && "" !== o ? o : "qr_code", r), null
        }
      }), (0, r.jsx)(_.A, {
        path: N.BVt.OPEN_APP_FROM_EMAIL,
        render: () => {
          var e, t;
          let n = null == (t = A.default.getSuperProperties()) ? true : t.os,
            i = (0, S.Z)(null != (e = window.location.search) ? e : "");
          if ("iOS" !== n && "Android" !== n) return (0, r.jsx)(o.rd, {
            to: null != i.desktop ? "".concat(i.desktop.pathname).concat(i.desktop.search) : N.BVt.APP
          });
          {
            let e = (0, I.b$)("app_open_from_email", n, i.mobile),
              t = (0, c.X7)(e);
            null != t && A.default.track(N.HAw.DEEP_LINK_CLICKED, {
              fingerprint: (0, u.v)(t.fingerprint),
              attempt_id: t.attemptId,
              source: t.utmSource,
              destination: null != i.mobile ? i.mobile.toString() : null
            }), window.location.href = e
          }
        }
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.CONNECT_AUTHORIZE,
        to: L(P({}, location), {
          pathname: N.BVt.OAUTH2_AUTHORIZE
        })
      }), (0, r.jsx)(o.qh, {
        path: [N.BVt.OAUTH2_AUTHORIZED, N.BVt.OAUTH2_AUTHORIZE, N.BVt.OAUTH2_ERROR, N.BVt.OAUTH2_WHITELIST_ACCEPT],
        component: W
      }), t ? null : (0, r.jsx)(o.qh, {
        path: [N.BVt.ACCOUNT_STANDING],
        component: Z
      }), t ? null : (0, r.jsx)(o.qh, {
        path: [N.BVt.APPLICATION_DIRECTORY],
        component: $
      }), t ? null : (0, r.jsx)(o.qh, {
        path: [N.BVt.GLOBAL_DISCOVERY_APPS],
        component: ee
      }), (0, r.jsx)(o.qh, {
        render: et
      }), (0, r.jsx)(o.rd, {
        from: N.BVt.ACCOUNT_REVERT(""),
        to: N.BVt.LOGIN
      })]
    }) : (0, r.jsx)(o.dO, {
      children: (0, r.jsx)(_.A, {
        component: x
      })
    }), (0, r.jsxs)(m.A, {
      skipsSettingDefaultPageTitle: i,
      children: [e, T.isPlatformEmbedded && (n === g.p.NOT_STARTED || n === g.p.IN_PROGRESS) && true !== f.w.get(l.qx) ? (0, r.jsx)(E.A, {}) : null]
    })
  }
}

function ea() {
  let {
    pathname: e
  } = (0, o.zy)();
  return null != (0, o.B6)(e, {
    path: N.BVt.APPLICATION_DIRECTORY
  })
}

function eo(e) {
  let t = ea();
  return (0, r.jsx)(ei, L(P({}, e), {
    skipsSettingDefaultPageTitle: t
  }))
}
let es = Chunk311907.Ay.connectStores([Chunk961350.default, Chunk7143.A], () => ({
  isAuthenticated: v.default.isAuthenticated(),
  migrationStatus: g.A.getMigrationStatus()
}), {
  forwardRef: true
})(eo)