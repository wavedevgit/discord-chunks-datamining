/** Chunk was on 21738 **/
/** chunk id: 985603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./747238.js"), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./638769.js"), require("./693327.js"), require("./554719.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk835245 = require("./835245.js"),
  Chunk80703 = require("./80703.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk6981 = require("./6981.js"),
  Chunk308528 = require("./308528.js"),
  Chunk77468 = require("./77468.js"),
  Chunk869038 = require("./869038.js"),
  Chunk933958 = require("./933958.js"),
  Chunk956549 = require("./956549.js"),
  Chunk257269 = require("./257269.js"),
  Chunk793574 = require("./793574.js"),
  Chunk627363 = require("./627363.js"),
  Chunk121623 = require("./121623.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk708281 = require("./708281.jsx"),
  Chunk807876 = require("./807876.js"),
  Chunk890687 = require("./890687.js"),
  Chunk976860 = require("./976860.js"),
  Chunk962173 = require("./962173.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk998218 = require("./998218.js"),
  Chunk837921 = require("./837921.js"),
  Chunk636401 = require("./636401.js"),
  Chunk43203 = require("./43203.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk654487 = require("./654487.js");

function D(e) {
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

function M(e, t) {
  null != e && C.default.track(L.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, l.d)(e),
    link_type: t
  })
}
let k = {
  [Chunk652215.e$_.INVITE_BROWSER]: {
    scope: Chunk613057.LQ,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return await (0, P.$)(t, "Desktop Modal")
    }
  },
  [Chunk652215.e$_.GUILD_TEMPLATE_BROWSER]: {
    scope: Chunk613057.LQ,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == S.default.getCurrentUser()) return;
      let {
        guildTemplate: i
      } = await _.A.resolveGuildTemplate(t);
      if (null == i) throw new x.A({
        errorCode: L.Lw6.INVALID_GUILD_TEMPLATE
      }, "Invalid guild template id: ".concat(t));
      return j.Ay.focus(), (0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = D({}, t), l = l = {
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
  [Chunk652215.e$_.GIFT_CODE_BROWSER]: {
    scope: Chunk613057.LQ,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, i) => {
        s.h.wait(() => {
          p.A.resolveGiftCode(t, true, true).then(i => {
            let {
              giftCode: l
            } = i;
            j.Ay.focus(), C.default.track(L.HAw.OPEN_MODAL, {
              type: "gift_accept",
              location: L.$OG
            }), (0, a.mMO)(async () => {
              let {
                default: e
              } = await n.e("14439").then(n.bind(n, 67327));
              return n => (0, r.jsx)(e, D({
                code: t
              }, n))
            }), e({
              giftCode: l
            })
          }).catch(() => i(new x.A({
            errorCode: L.Lw6.INVALID_GIFT_CODE
          }, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [Chunk652215.e$_.DEEP_LINK]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.LQ, Chunk613057.hj]
    },
    handler(e) {
      let {
        args: {
          type: t,
          params: r
        }
      } = e;
      switch (j.Ay.focus(), t) {
        case w.XK.USER_SETTINGS:
          null != r && ((0, I.bG)({
            pathname: L.BVt.SETTINGS(r.section, r.subsection),
            search: r.search
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.CHANGELOG:
          null != r && ((0, I.bG)(T.A.formatPathWithQuery(L.BVt.CHANGELOGS(r.date), r.query)), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.LIBRARY:
          (0, I.bG)(L.BVt.APPLICATION_LIBRARY), null != r && M(r.fingerprint, (0, w.OE)(t));
          break;
        case w.XK.STORE_HOME:
          (0, I.bG)(L.BVt.APPLICATION_STORE), null != r && M(r.fingerprint, (0, w.OE)(t));
          break;
        case w.XK.STORE_LISTING:
          null != r && ((0, I.bG)(L.BVt.APPLICATION_STORE_LISTING_SKU(r.skuId, r.slug)), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.PICK_GUILD_SETTINGS:
          null != r && ((0, I.bG)({
            pathname: L.BVt.PICK_GUILD_SETTINGS(r.section, r.subsection),
            search: r.search
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.CHANNEL:
          null != r && ((0, I.bG)({
            pathname: L.BVt.CHANNEL(r.guildId, r.channelId, r.messageId),
            search: r.search
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.GAME_SHOP:
          null != r && ((0, I.bG)({
            pathname: L.BVt.CHANNELS_GAME_SHOP(r.guildId, r.pageIndex, r.skuId, r.slug)
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.QUEST_HOME:
          if (null != r) {
            let e = new URLSearchParams;
            null != r.sort && e.set(y.L1.SORT, r.sort), null != r.filter && e.set(y.L1.FILTER, r.filter), null != r.tab && e.set(y.L1.TAB, r.tab), (0, I.bG)({
              pathname: L.BVt.QUEST_HOME_V2,
              hash: r.questId,
              search: "?".concat(e.toString())
            }), M(r.fingerprint, (0, w.OE)(t))
          } else(0, I.bG)(L.BVt.QUEST_HOME_V2);
          break;
        case w.XK.QUEST_PREVIEW_TOOL:
          if ((0, O.U)({
              location: R.rE.QUEST_PREVIEW_TOOL_2
            }) && null != r) {
            let e = new URLSearchParams;
            e.set(y.L1.TAB, y.NC.PREVIEW_TOOL), null != r.questId && e.set(y.L1.QUEST_ID, r.questId), (0, I.bG)({
              pathname: L.BVt.QUEST_HOME_V2,
              search: "?".concat(e.toString())
            }), M(r.fingerprint, (0, w.OE)(t))
          }
          break;
        case w.XK.DISCOVERY_GAME_RESULTS:
          null != r && ((0, I.bG)({
            pathname: L.BVt.GLOBAL_DISCOVERY_SERVERS,
            search: "?game=".concat(r.gameId)
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.OAUTH2:
          let l = new URL(L.BVt.OAUTH2_AUTHORIZE, window.location.origin);
          l.search = r.search;
          let a = (0, b.getOAuth2AuthorizeProps)(l.toString());
          if (null != a) return (0, b.openOAuth2ModalWithCreateGuildModal)(a), true;
          returnfalse;
        case w.XK.ONE_TIME_LOGIN:
          if (null != r) return (0, E.N)({
            token: r.token
          }), M(r.fingerprint, (0, w.OE)(t)), true;
          returnfalse;
        case w.XK.SHOP:
          null != r && ((0, I.bG)({
            pathname: L.BVt.COLLECTIBLES_SHOP,
            search: r.search
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.FEATURES:
          (null == r ? true : r.path) != null && ((0, I.bG)({
            pathname: r.path
          }), M(r.fingerprint, (0, w.OE)(t)));
          break;
        case w.XK.ACTIVITIES:
          if (null != r) {
            let e = r.attemptId || (0, i.A)();
            return async function(e, t, n) {
              try {
                var r, i;
                let l = h.Ay.getCurrentEmbeddedActivity();
                if ((null == l ? true : l.applicationId) === e) return void C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "activity_already_running",
                  attempt_id: n
                });
                let a = await A.Ay.fetchApplication(e),
                  s = null == a || null == (i = a.bot) ? true : i.id;
                if (null == s) return void C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "no_bot_user",
                  attempt_id: n
                });
                let o = await u.A.openPrivateChannel({
                    recipientIds: s
                  }),
                  c = new URL(t),
                  d = null != (r = c.searchParams.get("referrer_id")) ? r : true,
                  {
                    customId: p
                  } = await (0, m.d9)(e, c.searchParams.get("link_id"), c.searchParams.get("custom_id"));
                await (0, g.A)({
                  targetApplicationId: e,
                  channelId: o,
                  analyticsLocations: [f.A.DEEPLINK],
                  customId: p,
                  referrerId: d
                }), C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: true,
                  failure_reason: null,
                  attempt_id: n
                })
              } catch (t) {
                C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                  application_id: e,
                  success: false,
                  failure_reason: "launch_failed",
                  attempt_id: n
                })
              }
            }(r.applicationId, r.url, e), M(r.fingerprint, (0, w.OE)(t)), true
          }
          returnfalse;
        case w.XK.PLAYGROUND:
          if (null != r) {
            let {
              openPlayground: e
            } = n(965042);
            e(r.collection, r.story), M(r.fingerprint, (0, w.OE)(t))
          }
      }
    }
  },
  [Chunk652215.e$_.BROWSER_HANDOFF]: {
    scope: Chunk613057.kw,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      j.Ay.focus(null, true), (0, c.mZ)(t, n)
    }
  },
  [Chunk652215.e$_.CONNECTIONS_CALLBACK]: {
    scope: Chunk613057.LQ,
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
      if (!v.A.hasPendingAuthorizedState(l)) throw new x.A({
        errorCode: L.Lw6.INVALID_CONNECTION_CALLBACK_STATE
      }, "Provider authorization did not originate from this discord client");
      try {
        return v.A.deletePendingAuthorizedState(l), await d.A.callback(t, {
          code: n,
          openid_params: r,
          iss: i,
          state: l
        })
      } catch (e) {
        if ((null == e ? true : e.status) === 400) throw new x.A({
          errorCode: L.Lw6.BAD_REQUEST_FOR_PROVIDER
        }, "Bad request for provider");
        throw N._.dispatch(L.jej.CONNECTIONS_CALLBACK_ERROR), e
      }
    }
  },
  [Chunk652215.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: Chunk613057.LQ,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: r
        }
      } = e;
      return (0, o.re)({
        paymentSourceType: L.hes.PAYPAL,
        state: t,
        path: n,
        query: r
      })
    }
  },
  [Chunk652215.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: Chunk613057.LQ,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: r,
          payment_source_type: i
        }
      } = e;
      return (0, o.re)({
        paymentSourceType: i,
        state: t,
        path: n,
        query: r
      })
    }
  }
}