/** Chunk was on 1272 **/
/** chunk id: 498164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk53144 = require("./53144.jsx"),
  Chunk313481 = require("./313481.js"),
  Chunk36243 = require("./36243.js"),
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
  Chunk324805 = require("./324805.js");

function R(e) {
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

function D(e, t) {
  null != e && T.default.track(w.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, l.s)(e),
    link_type: t
  })
}
let M = {
  [Chunk981631.Etm.INVITE_BROWSER]: {
    scope: Chunk186901.cE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return await (0, A.T)(t, "Desktop Modal")
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
      if (null == S.default.getCurrentUser()) return;
      let {
        guildTemplate: i
      } = await b.Z.resolveGuildTemplate(t);
      if (null == i) throw new x.Z({
        errorCode: w.lTL.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return P.ZP.focus(), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = R({}, t), l = l = {
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
        s.Z.wait(() => {
          p.Z.resolveGiftCode(t, true, true).then(i => {
            let {
              giftCode: l
            } = i;
            P.ZP.focus(), T.default.track(w.rMx.OPEN_MODAL, {
              type: "gift_accept",
              location: w.SaU
            }), (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("38029").then(n.bind(n, 409858));
              return n => (0, r.jsx)(e, R({
                code: t
              }, n))
            }), e({
              giftCode: l
            })
          }).catch(() => i(new x.Z({
            errorCode: w.lTL.INVALID_GIFT_CODE
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
      switch (P.ZP.focus(), t) {
        case Z.jE.USER_SETTINGS:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.SETTINGS(n.section, n.subsection),
            search: n.search
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.CHANGELOG:
          null != n && ((0, I.dL)(j.Z.formatPathWithQuery(w.Z5c.CHANGELOGS(n.date), n.query)), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.LIBRARY:
          (0, I.dL)(w.Z5c.APPLICATION_LIBRARY), null != n && D(n.fingerprint, (0, Z.O)(t));
          break;
        case Z.jE.STORE_HOME:
          (0, I.dL)(w.Z5c.APPLICATION_STORE), null != n && D(n.fingerprint, (0, Z.O)(t));
          break;
        case Z.jE.STORE_LISTING:
          null != n && ((0, I.dL)(w.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.PICK_GUILD_SETTINGS:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.CHANNEL:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.GAME_SHOP:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.CHANNELS_GAME_SHOP(n.guildId, n.pageIndex, n.skuId, n.slug)
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.QUEST_HOME:
          if (null != n) {
            let e = new URLSearchParams;
            null != n.sort && e.set(v.tR.SORT, n.sort), null != n.filter && e.set(v.tR.FILTER, n.filter), (0, I.dL)({
              pathname: w.Z5c.QUEST_HOME_V2,
              hash: n.questId,
              search: "?".concat(e.toString())
            }), D(n.fingerprint, (0, Z.O)(t))
          } else(0, I.dL)(w.Z5c.QUEST_HOME_V2);
          break;
        case Z.jE.QUEST_PREVIEW_TOOL:
          if ((0, y.T)({
              location: L.dr.QUEST_PREVIEW_TOOL_2
            }) && null != n) {
            let e = new URLSearchParams;
            e.set(v.tR.TAB, v.e5.PREVIEW_TOOL), null != n.questId && e.set(v.tR.QUEST_ID, n.questId), (0, I.dL)({
              pathname: w.Z5c.QUEST_HOME_V2,
              search: "?".concat(e.toString())
            }), D(n.fingerprint, (0, Z.O)(t))
          }
          break;
        case Z.jE.DISCOVERY_GAME_RESULTS:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.GLOBAL_DISCOVERY_SERVERS,
            search: "?game=".concat(n.gameId)
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.OAUTH2:
          let r = new URL(w.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
          r.search = n.search;
          let l = (0, E.getOAuth2AuthorizeProps)(r.toString());
          if (null != l) return (0, E.openOAuth2ModalWithCreateGuildModal)(l), true;
          returnfalse;
        case Z.jE.ONE_TIME_LOGIN:
          if (null != n) return (0, O.Y)({
            token: n.token
          }), D(n.fingerprint, (0, Z.O)(t)), true;
          returnfalse;
        case Z.jE.SHOP:
          null != n && ((0, I.dL)({
            pathname: w.Z5c.COLLECTIBLES_SHOP,
            search: n.search
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.FEATURES:
          (null == n ? true : n.path) != null && ((0, I.dL)({
            pathname: n.path
          }), D(n.fingerprint, (0, Z.O)(t)));
          break;
        case Z.jE.ACTIVITIES:
          if (null != n) {
            let e = n.attemptId || (0, i.Z)();
            return async function(e, t, n) {
              try {
                var r, i;
                let l = f.ZP.getCurrentEmbeddedActivity();
                if ((null == l ? true : l.applicationId) === e) return void T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "activity_already_running",
                  attempt_id: n
                });
                let a = await _.ZP.fetchApplication(e),
                  s = null == a || null == (r = a.bot) ? true : r.id;
                if (null == s) return void T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "no_bot_user",
                  attempt_id: n
                });
                let o = await u.Z.openPrivateChannel({
                    recipientIds: s
                  }),
                  c = new URL(t),
                  d = null != (i = c.searchParams.get("referrer_id")) ? i : true,
                  {
                    customId: p
                  } = await (0, g.ur)(e, c.searchParams.get("link_id"), c.searchParams.get("custom_id"));
                await (0, h.Z)({
                  targetApplicationId: e,
                  channelId: o,
                  analyticsLocations: [m.Z.DEEPLINK],
                  customId: p,
                  referrerId: d
                }), T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: true,
                  failure_reason: null,
                  attempt_id: n
                })
              } catch (t) {
                T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "launch_failed",
                  attempt_id: n
                })
              }
            }(n.applicationId, n.url, e), D(n.fingerprint, (0, Z.O)(t)), true
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
      P.ZP.focus(null, true), (0, c.lx)(t, n)
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
      if (!C.Z.hasPendingAuthorizedState(l)) throw new x.Z({
        errorCode: w.lTL.INVALID_CONNECTION_CALLBACK_STATE
      }, "Provider authorization did not originate from this discord client");
      try {
        return C.Z.deletePendingAuthorizedState(l), await d.Z.callback(t, {
          code: n,
          openid_params: r,
          iss: i,
          state: l
        })
      } catch (e) {
        if ((null == e ? true : e.status) === 400) throw new x.Z({
          errorCode: w.lTL.BAD_REQUEST_FOR_PROVIDER
        }, "Bad request for provider");
        throw N.S.dispatch(w.CkL.CONNECTIONS_CALLBACK_ERROR), e
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
        paymentSourceType: w.HeQ.PAYPAL,
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