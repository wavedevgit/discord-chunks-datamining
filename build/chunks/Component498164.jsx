/** Chunk was on 1272 **/
/** chunk id: 498164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk756647 = require("./756647.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk899742 = require("./899742.js"),
  Chunk493683 = require("./493683.js"),
  Chunk457330 = require("./457330.js"),
  Chunk533307 = require("./533307.js"),
  Chunk317381 = require("./317381.js"),
  Chunk122613 = require("./122613.js"),
  Chunk649256 = require("./649256.js"),
  Chunk100527 = require("./100527.js"),
  Chunk728345 = require("./728345.js"),
  Chunk962220 = require("./962220.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk553795 = require("./553795.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk591759 = require("./591759.js"),
  Chunk998502 = require("./998502.js"),
  Chunk996106 = require("./996106.js"),
  Chunk109815 = require("./109815.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function x(e, t) {
  null != e && v.default.track(j.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, i.s)(e),
    link_type: t
  })
}
let Z = {
  [Chunk981631.Etm.INVITE_BROWSER]: {
    scope: Chunk186901.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return await (0, T.T)(t, "Desktop Modal")
    }
  },
  [Chunk981631.Etm.GUILD_TEMPLATE_BROWSER]: {
    scope: Chunk186901.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == y.default.getCurrentUser()) return;
      let {
        guildTemplate: i
      } = await b.Z.resolveGuildTemplate(t);
      if (null == i) throw new N.Z({
        errorCode: j.lTL.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return S.ZP.focus(), (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = A({}, t), l = l = {
            guildTemplate: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      }), {
        guildTemplate: i,
        code: t
      }
    }
  },
  [Chunk981631.Etm.GIFT_CODE_BROWSER]: {
    scope: Chunk186901.cE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, i) => {
        a.Z.wait(() => {
          d.Z.resolveGiftCode(t, true, true).then(i => {
            let {
              giftCode: a
            } = i;
            S.ZP.focus(), v.default.track(j.rMx.OPEN_MODAL, {
              type: "gift_accept",
              location: j.SaU
            }), (0, l.ZDy)(async () => {
              let {
                default: e
              } = await n.e("38029").then(n.bind(n, 409858));
              return n => (0, r.jsx)(e, A({
                code: t
              }, n))
            }), e({
              giftCode: a
            })
          }).catch(() => i(new N.Z({
            errorCode: j.lTL.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [Chunk981631.Etm.DEEP_LINK]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.cE, Chunk186901.lH]
    },
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (S.ZP.focus(), t) {
        case P.jE.USER_SETTINGS:
          null != n && ((0, O.dL)(j.Z5c.SETTINGS(n.section, n.subsection)), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.CHANGELOG:
          null != n && ((0, O.dL)(C.Z.formatPathWithQuery(j.Z5c.CHANGELOGS(n.date), n.query)), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.LIBRARY:
          (0, O.dL)(j.Z5c.APPLICATION_LIBRARY), null != n && x(n.fingerprint, (0, P.O)(t));
          break;
        case P.jE.STORE_HOME:
          (0, O.dL)(j.Z5c.APPLICATION_STORE), null != n && x(n.fingerprint, (0, P.O)(t));
          break;
        case P.jE.STORE_LISTING:
          null != n && ((0, O.dL)(j.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.PICK_GUILD_SETTINGS:
          null != n && ((0, O.dL)({
            pathname: j.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.CHANNEL:
          null != n && ((0, O.dL)({
            pathname: j.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.QUEST_HOME:
          null != n ? ((0, O.dL)({
            pathname: j.Z5c.QUEST_HOME,
            hash: n.questId
          }), x(n.fingerprint, (0, P.O)(t))) : (0, O.dL)(j.Z5c.QUEST_HOME);
          break;
        case P.jE.DISCOVERY_GAME_RESULTS:
          null != n && ((0, O.dL)({
            pathname: j.Z5c.GLOBAL_DISCOVERY_SERVERS,
            search: "?game=".concat(n.gameId)
          }), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.OAUTH2:
          let r = new URL(j.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
          r.search = n.search;
          let i = (0, _.getOAuth2AuthorizeProps)(r.toString());
          if (null != i) return (0, _.openOAuth2ModalWithCreateGuildModal)(i), true;
          returnfalse;
        case P.jE.SHOP:
          null != n && ((0, O.dL)({
            pathname: j.Z5c.COLLECTIBLES_SHOP,
            search: n.search
          }), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.FEATURES:
        case P.jE.SHOP:
          (null == n ? true : n.path) != null && ((0, O.dL)({
            pathname: n.path
          }), x(n.fingerprint, (0, P.O)(t)));
          break;
        case P.jE.ACTIVITIES:
          if (null != n) return async function(e, t) {
            var r, i;
            let l = p.ZP.getCurrentEmbeddedActivity();
            if ((null == l ? true : l.applicationId) === e) return;
            let a = await m.ZP.fetchApplication(n.applicationId),
              o = null == a || null == (r = a.bot) ? true : r.id;
            if (null == o) return;
            let s = await c.Z.openPrivateChannel({
                recipientIds: o
              }),
              u = new URL(t),
              d = null != (i = u.searchParams.get("referrer_id")) ? i : true,
              {
                customId: b
              } = await (0, h.ur)(e, u.searchParams.get("link_id"), u.searchParams.get("custom_id"));
            await (0, f.Z)({
              targetApplicationId: e,
              channelId: s,
              analyticsLocations: [g.Z.DEEPLINK],
              customId: b,
              referrerId: d
            })
          }(n.applicationId, n.url), x(n.fingerprint, (0, P.O)(t)), true;
          returnfalse
      }
    }
  },
  [Chunk981631.Etm.BROWSER_HANDOFF]: {
    scope: Chunk186901.CN,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      S.ZP.focus(null, true), (0, s.lx)(t, n)
    }
  },
  [Chunk981631.Etm.CONNECTIONS_CALLBACK]: {
    scope: Chunk186901.cE,
    handler: async e => {
      let {
        args: {
          providerType: t,
          code: n,
          openid_params: r,
          iss: i,
          state: l
        }
      } = e;
      if (!E.Z.hasPendingAuthorizedState(l)) throw new N.Z({
        errorCode: j.lTL.INVALID_CONNECTION_CALLBACK_STATE
      }, "Provider authorization did not originate from this discord client");
      try {
        return E.Z.deletePendingAuthorizedState(l), await u.Z.callback(t, {
          code: n,
          openid_params: r,
          iss: i,
          state: l
        })
      } catch (e) {
        if ((null == e ? true : e.status) === 400) throw new N.Z({
          errorCode: j.lTL.BAD_REQUEST_FOR_PROVIDER
        }, "Bad request for provider");
        throw I.S.dispatch(j.CkL.CONNECTIONS_CALLBACK_ERROR), e
      }
    }
  },
  [Chunk981631.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: Chunk186901.cE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: r
        }
      } = e;
      return (0, o.rt)({
        paymentSourceType: j.HeQ.PAYPAL,
        state: t,
        path: n,
        query: r
      })
    }
  },
  [Chunk981631.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: Chunk186901.cE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: r,
          payment_source_type: i
        }
      } = e;
      return (0, o.rt)({
        paymentSourceType: i,
        state: t,
        path: n,
        query: r
      })
    }
  }
}