/** Chunk was on 21968 **/
/** chunk id: 875264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk882997 = require("./882997.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk143582 = require("./143582.js"),
  Chunk607940 = require("./607940.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk975571 = require("./975571.js"),
  Chunk971157 = require("./971157.jsx"),
  Chunk12994 = require("./12994.jsx"),
  Chunk460641 = require("./460641.jsx"),
  Chunk969756 = require("./969756.jsx"),
  Chunk930238 = require("./930238.jsx"),
  Chunk761437 = require("./761437.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk874090 = require("./874090.js");

function C(e, t) {
  switch (e) {
    case N.wLn.APPLICATION:
      var n;
      return null != (n = null == t ? true : t.application.name) ? n : "";
    case N.wLn.OVERVIEW:
      return E.intl.string(E.t.s69NLF);
    case N.wLn.CHANNEL_FOLLOWING:
      return E.intl.string(E.t.OrV60r);
    case N.wLn.TWITCH:
      return E.intl.string(E.t.q4pBG3);
    case N.wLn.WEBHOOKS:
      return E.intl.string(E.t.xOg4SP);
    case N.wLn.YOUTUBE:
      return E.intl.string(E.t.aS6cK4);
    case N.wLn.LOBBIES_LINKED:
      return E.intl.string(E.t.tqtDXC);
    default:
      return ""
  }
}
let w = Chunk64700.memo(function(e) {
  let {
    section: t,
    sectionId: n,
    guild: l,
    channel: w,
    integrations: S,
    editedIntegration: I,
    webhooks: P,
    editedWebhook: k,
    isFetchingWebhooks: R,
    refToScroller: L,
    errors: D,
    hasChanges: M
  } = e, G = (0, s.bG)([b.Ay], () => null != l ? b.Ay.getDefaultChannel(l.id) : null), U = (0, s.cf)([b.Ay], () => b.Ay.getChannels(null == l ? true : l.id)), B = (0, s.cf)([f.A], () => a().keyBy(U.SELECTABLE.map(e => e.channel).filter(e => f.A.can(N.xBc.MANAGE_WEBHOOKS, e)), "id")), W = (0, s.cf)([f.A], () => a().keyBy(U.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && f.A.can(N.xBc.MANAGE_WEBHOOKS, e)), "id")), H = null != w ? w : G, V = t === N.wLn.APPLICATION ? n : null, [z, K] = r.useState(d.n3), F = r.useCallback(() => M() ? (h._.dispatch(N.jej.SHAKE_APP, {
    duration: 300,
    intensity: z
  }), K(Math.min(z + d.pe, d.OZ)), h._.dispatch(N.jej.EMPHASIZE_NOTICE), false) : (K(d.n3), true), [M, z]), Y = r.useCallback(e => !!F() && (c.A.setSection(e), true), [F]), {
    applicationIntegrations: q,
    applicationBotIds: J,
    builtInIntegrations: Q,
    customWebhooks: Z,
    followedChannelWebhooks: X
  } = r.useMemo(() => {
    let e = {},
      t = {},
      n = {},
      i = [],
      r = [];
    if (null != S)
      for (let i of S)
        if ("discord" === i.type) {
          if (null != i.application) {
            var l;
            e[i.application.id] = {
              application: i.application,
              integration: i,
              webhooks: []
            }, (null == (l = i.application.bot) ? true : l.id) !== true && (t[i.application.bot.id] = i.application.id)
          }
        } else i.type in n || (n[i.type] = []), n[i.type].push(i);
    for (let t of P)(t.channel_id in B || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === N.NH1.CHANNEL_FOLLOWER ? r.push(t) : i.push(t));
    return {
      applicationIntegrations: e,
      applicationBotIds: t,
      builtInIntegrations: n,
      customWebhooks: i,
      followedChannelWebhooks: r
    }
  }, [S, B, W, P]);
  r.useEffect(() => {
    if (!R) switch (t) {
      case N.wLn.TWITCH:
        null == Q[N.fg2.TWITCH] && c.A.setSection(N.wLn.OVERVIEW);
        break;
      case N.wLn.YOUTUBE:
        null == Q[N.fg2.YOUTUBE] && c.A.setSection(N.wLn.OVERVIEW);
        break;
      case N.wLn.APPLICATION:
        null != V && (V in J || V in q) || c.A.setSection(N.wLn.OVERVIEW)
    }
  }, [q, J, Q, V, t, R]), r.useEffect(() => {
    (null == l ? true : l.id) == null || g.A.getEntitlementsForGuildFetchState(l.id) === g.e.NOT_FETCHED && m.f5(l.id)
  }, [null == l ? true : l.id]), r.useEffect(() => () => {
    c.A.setSection(N.wLn.OVERVIEW, null)
  }, []);
  let $ = null;
  switch (t) {
    case N.wLn.TWITCH:
      null != Q[N.fg2.TWITCH] && ($ = (0, i.jsx)(O.A, {
        guild: l,
        integrations: Q[N.fg2.TWITCH],
        editedIntegration: I,
        labelText: E.intl.string(E.t.q4pBG3),
        platformType: N.fg2.TWITCH,
        descriptionText: E.intl.string(E.t.V9kNqt),
        helpText: E.intl.format(E.t.ro1jEN, {
          connectAction: () => (0, u.A)({
            platformType: N.fg2.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: x.A.getArticleURL(N.MVz.TWITCH_INTEGRATION)
        }),
        errors: D,
        canNavigate: F
      }));
      break;
    case N.wLn.YOUTUBE:
      null != Q[N.fg2.YOUTUBE] && ($ = (0, i.jsx)(O.A, {
        guild: l,
        integrations: Q[N.fg2.YOUTUBE],
        editedIntegration: I,
        labelText: E.intl.string(E.t.aS6cK4),
        platformType: N.fg2.YOUTUBE,
        descriptionText: E.intl.string(E.t["7Tv7JK"]),
        helpText: E.intl.format(E.t["4OSAQ9"], {
          connectAction: () => (0, u.A)({
            platformType: N.fg2.YOUTUBE
          }),
          helpdeskArticle: x.A.getArticleURL(N.MVz.YOUTUBE_INTEGRATION)
        }),
        errors: D,
        canNavigate: F
      }));
      break;
    case N.wLn.APPLICATION:
      var ee;
      let et = null != V ? null != (ee = q[J[V]]) ? ee : q[V] : null;
      null != et && ($ = (0, i.jsx)(j.A, {
        guild: l,
        applicationIntegration: et,
        editedWebhook: k,
        selectableWebhookChannels: B,
        errors: D,
        canNavigate: F
      }));
      break;
    case N.wLn.CHANNEL_FOLLOWING:
      $ = (0, i.jsx)(y.A, {
        followedChannelWebhooks: X,
        editedWebhook: k,
        selectableWebhookChannels: B,
        canNavigate: F,
        errors: D
      });
      break;
    case N.wLn.WEBHOOKS:
      $ = (0, i.jsx)(_.A, {
        guild: l,
        channel: w,
        customWebhooks: Z,
        editedWebhook: k,
        selectableWebhookChannels: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, B, W),
        canNavigate: F,
        refToScroller: L,
        errors: D
      });
      break;
    case N.wLn.LOBBIES_LINKED:
      $ = (0, i.jsx)(A.A, {
        guild: l
      });
      break;
    default:
      $ = (0, i.jsx)(v.A, {
        guild: l,
        channel: w,
        applicationIntegrations: q,
        builtInIntegrations: Q,
        customWebhooks: Z,
        followedChannelWebhooks: X,
        isLoadingWebhooks: R || null == l,
        canCreateWebhook: null != H,
        onManageCustomWebhooks: () => {
          c.A.setSection(N.wLn.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          c.A.setSection(N.wLn.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          c.A.setSection(N.wLn.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case N.fg2.TWITCH:
              c.A.setSection(N.wLn.TWITCH);
              break;
            case N.fg2.YOUTUBE:
              c.A.setSection(N.wLn.YOUTUBE)
          }
        },
        onManageLobbiesLinked: () => {
          c.A.setSection(N.wLn.LOBBIES_LINKED)
        }
      })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(p.A, {
      align: p.A.Align.CENTER,
      className: T.jD,
      children: t === N.wLn.OVERVIEW ? (0, i.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: C(N.wLn.OVERVIEW)
      }) : (0, i.jsx)(o.BIu, {
        activeId: t.toString(),
        breadcrumbs: [N.wLn.OVERVIEW, t].map(e => ({
          id: e.toString(),
          label: C(e, q[V])
        })),
        onBreadcrumbClick: e => {
          t !== parseInt(e.id) && Y(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, t) => (0, i.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: t ? T.q3 : T.fd,
          children: e.label
        })
      })
    }), $]
  })
})