/** Chunk was on 1272 **/
/** chunk id: 498164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk772848 = require("./772848.js"),
  Chunk756647 = require("./756647.js"),
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
  Chunk937797 = require("./937797.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk46140 = require("./46140.js");

function w(e) {
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

function L(e, t) {
  null != e && S.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, l.s)(e),
    link_type: t
  })
}
let R = {
  [Chunk981631.Etm.INVITE_BROWSER]: {
    scope: Chunk186901.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return await (0, j.T)(t, "Desktop Modal")
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
      if (null == I.default.getCurrentUser()) return;
      let {
        guildTemplate: i
      } = await _.Z.resolveGuildTemplate(t);
      if (null == i) throw new P.Z({
        errorCode: A.lTL.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return N.ZP.focus(), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = w({}, t), l = l = {
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
        o.Z.wait(() => {
          p.Z.resolveGiftCode(t, true, true).then(i => {
            let {
              giftCode: l
            } = i;
            N.ZP.focus(), S.default.track(A.rMx.OPEN_MODAL, {
              type: "gift_accept",
              location: A.SaU
            }), (0, a.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("92446"), n.e("49227")]).then(n.bind(n, 409858));
              return n => (0, r.jsx)(e, w({
                code: t
              }, n))
            }), e({
              giftCode: l
            })
          }).catch(() => i(new P.Z({
            errorCode: A.lTL.INVALID_GIFT_CODE
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
      switch (N.ZP.focus(), t) {
        case x.jE.USER_SETTINGS:
          null != n && ((0, y.dL)({
            pathname: A.Z5c.SETTINGS(n.section, n.subsection),
            search: n.search
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.CHANGELOG:
          null != n && ((0, y.dL)(T.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.LIBRARY:
          (0, y.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && L(n.fingerprint, (0, x.O)(t));
          break;
        case x.jE.STORE_HOME:
          (0, y.dL)(A.Z5c.APPLICATION_STORE), null != n && L(n.fingerprint, (0, x.O)(t));
          break;
        case x.jE.STORE_LISTING:
          null != n && ((0, y.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.PICK_GUILD_SETTINGS:
          null != n && ((0, y.dL)({
            pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.CHANNEL:
          null != n && ((0, y.dL)({
            pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.QUEST_HOME: {
          let {
            enabled: e
          } = E.m8.getConfig({
            location: Z.dr.QUEST_DEEP_LINK_UTIL
          });
          null != n ? ((0, y.dL)({
            pathname: e ? A.Z5c.QUEST_HOME_V2 : A.Z5c.QUEST_HOME,
            hash: n.questId
          }), L(n.fingerprint, (0, x.O)(t))) : (0, y.dL)(e ? A.Z5c.QUEST_HOME_V2 : A.Z5c.QUEST_HOME);
          break
        }
        case x.jE.DISCOVERY_GAME_RESULTS:
          null != n && ((0, y.dL)({
            pathname: A.Z5c.GLOBAL_DISCOVERY_SERVERS,
            search: "?game=".concat(n.gameId)
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.OAUTH2:
          let r = new URL(A.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
          r.search = n.search;
          let l = (0, O.getOAuth2AuthorizeProps)(r.toString());
          if (null != l) return (0, O.openOAuth2ModalWithCreateGuildModal)(l), true;
          returnfalse;
        case x.jE.SHOP:
          null != n && ((0, y.dL)({
            pathname: A.Z5c.COLLECTIBLES_SHOP,
            search: n.search
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.FEATURES:
        case x.jE.SHOP:
          (null == n ? true : n.path) != null && ((0, y.dL)({
            pathname: n.path
          }), L(n.fingerprint, (0, x.O)(t)));
          break;
        case x.jE.ACTIVITIES:
          if (null != n) {
            let e = n.attemptId || (0, i.Z)();
            return async function(e, t, n) {
              try {
                var r, i;
                let l = f.ZP.getCurrentEmbeddedActivity();
                if ((null == l ? true : l.applicationId) === e) return void S.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "activity_already_running",
                  attempt_id: n
                });
                let a = await b.ZP.fetchApplication(e),
                  o = null == a || null == (r = a.bot) ? true : r.id;
                if (null == o) return void S.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "no_bot_user",
                  attempt_id: n
                });
                let s = await u.Z.openPrivateChannel({
                    recipientIds: o
                  }),
                  c = new URL(t),
                  d = null != (i = c.searchParams.get("referrer_id")) ? i : true,
                  {
                    customId: p
                  } = await (0, g.ur)(e, c.searchParams.get("link_id"), c.searchParams.get("custom_id"));
                await (0, h.Z)({
                  targetApplicationId: e,
                  channelId: s,
                  analyticsLocations: [m.Z.DEEPLINK],
                  customId: p,
                  referrerId: d
                }), S.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: true,
                  failure_reason: null,
                  attempt_id: n
                })
              } catch (t) {
                S.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "launch_failed",
                  attempt_id: n
                })
              }
            }(n.applicationId, n.url, e), L(n.fingerprint, (0, x.O)(t)), true
          }
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
      N.ZP.focus(null, true), (0, c.lx)(t, n)
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
      if (!v.Z.hasPendingAuthorizedState(l)) throw new P.Z({
        errorCode: A.lTL.INVALID_CONNECTION_CALLBACK_STATE
      }, "Provider authorization did not originate from this discord client");
      try {
        return v.Z.deletePendingAuthorizedState(l), await d.Z.callback(t, {
          code: n,
          openid_params: r,
          iss: i,
          state: l
        })
      } catch (e) {
        if ((null == e ? true : e.status) === 400) throw new P.Z({
          errorCode: A.lTL.BAD_REQUEST_FOR_PROVIDER
        }, "Bad request for provider");
        throw C.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e
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
      return (0, s.rt)({
        paymentSourceType: A.HeQ.PAYPAL,
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
      return (0, s.rt)({
        paymentSourceType: i,
        state: t,
        path: n,
        query: r
      })
    }
  }
}