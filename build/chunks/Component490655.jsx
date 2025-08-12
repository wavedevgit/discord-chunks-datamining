/** Chunk was on 8725 **/
/** chunk id: 490655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk231757 = require("./231757.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk106976 = require("./106976.js"),
  Chunk488915 = require("./488915.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk919196 = require("./919196.jsx"),
  Chunk731072 = require("./731072.jsx"),
  Chunk494118 = require("./494118.jsx"),
  Chunk37607 = require("./37607.jsx"),
  Chunk351644 = require("./351644.jsx"),
  Chunk108053 = require("./108053.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661574 = require("./661574.js");

function w(e, t) {
  switch (e) {
    case N.b4C.APPLICATION:
      var n;
      return null != (n = null == t ? true : t.application.name) ? n : "";
    case N.b4C.OVERVIEW:
      return S.intl.string(S.t.s69NLC);
    case N.b4C.CHANNEL_FOLLOWING:
      return S.intl.string(S.t.OrV60t);
    case N.b4C.TWITCH:
      return S.intl.string(S.t.q4pBGx);
    case N.b4C.WEBHOOKS:
      return S.intl.string(S.t.xOg4SE);
    case N.b4C.YOUTUBE:
      return S.intl.string(S.t.aS6cKy);
    case N.b4C.LOBBIES_LINKED:
      return S.intl.string(S.t.tqtDXF);
    default:
      return ""
  }
}
let Z = Chunk73800.memo(function(e) {
  let {
    section: t,
    sectionId: n,
    guild: l,
    channel: Z,
    integrations: E,
    editedIntegration: P,
    webhooks: T,
    editedWebhook: k,
    isFetchingWebhooks: A,
    refToScroller: R,
    errors: D,
    hasChanges: L
  } = e, M = (0, a.e7)([g.ZP], () => null != l ? g.ZP.getDefaultChannel(l.id) : null), B = (0, a.cj)([g.ZP], () => g.ZP.getChannels(null == l ? true : l.id)), U = (0, a.cj)([f.Z], () => o().keyBy(B.SELECTABLE.map(e => e.channel).filter(e => f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)), "id")), W = (0, a.cj)([f.Z], () => o().keyBy(B.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)), "id")), H = null != Z ? Z : M, G = t === N.b4C.APPLICATION ? n : null, [z, F] = r.useState(d.$x), V = r.useCallback(() => L() ? (h.S.dispatch(N.CkL.SHAKE_APP, {
    duration: 300,
    intensity: z
  }), F(Math.min(z + d.d7, d.w6)), h.S.dispatch(N.CkL.EMPHASIZE_NOTICE), false) : (F(d.$x), true), [L, z]), K = r.useCallback(e => !!V() && (c.Z.setSection(e), true), [V]), {
    applicationIntegrations: q,
    applicationBotIds: Y,
    builtInIntegrations: X,
    customWebhooks: $,
    followedChannelWebhooks: J
  } = r.useMemo(() => {
    let e = {},
      t = {},
      n = {},
      i = [],
      r = [];
    if (null != E)
      for (let i of E)
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
    for (let t of T)(t.channel_id in U || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === N.ylB.CHANNEL_FOLLOWER ? r.push(t) : i.push(t));
    return {
      applicationIntegrations: e,
      applicationBotIds: t,
      builtInIntegrations: n,
      customWebhooks: i,
      followedChannelWebhooks: r
    }
  }, [E, U, W, T]);
  r.useEffect(() => {
    if (!A) switch (t) {
      case N.b4C.TWITCH:
        null == X[N.ABu.TWITCH] && c.Z.setSection(N.b4C.OVERVIEW);
        break;
      case N.b4C.YOUTUBE:
        null == X[N.ABu.YOUTUBE] && c.Z.setSection(N.b4C.OVERVIEW);
        break;
      case N.b4C.APPLICATION:
        null != G && (G in Y || G in q) || c.Z.setSection(N.b4C.OVERVIEW)
    }
  }, [q, Y, X, G, t, A]), r.useEffect(() => {
    (null == l ? true : l.id) != null && b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED && m.i1(l.id)
  }, [null == l ? true : l.id]), r.useEffect(() => () => {
    c.Z.setSection(N.b4C.OVERVIEW, null)
  }, []);
  let Q = null;
  switch (t) {
    case N.b4C.TWITCH:
      null != X[N.ABu.TWITCH] && (Q = (0, i.jsx)(v.Z, {
        guild: l,
        integrations: X[N.ABu.TWITCH],
        editedIntegration: P,
        labelText: S.intl.string(S.t.q4pBGx),
        platformType: N.ABu.TWITCH,
        descriptionText: S.intl.string(S.t.V9kNqq),
        helpText: S.intl.format(S.t.ro1jEB, {
          connectAction: () => (0, u.Z)({
            platformType: N.ABu.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: x.Z.getArticleURL(N.BhN.TWITCH_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case N.b4C.YOUTUBE:
      null != X[N.ABu.YOUTUBE] && (Q = (0, i.jsx)(v.Z, {
        guild: l,
        integrations: X[N.ABu.YOUTUBE],
        editedIntegration: P,
        labelText: S.intl.string(S.t.aS6cKy),
        platformType: N.ABu.YOUTUBE,
        descriptionText: S.intl.string(S.t["7Tv7JC"]),
        helpText: S.intl.format(S.t["4OSAQ0"], {
          connectAction: () => (0, u.Z)({
            platformType: N.ABu.YOUTUBE
          }),
          helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION)
        }),
        canNavigate: V
      }));
      break;
    case N.b4C.APPLICATION:
      var ee;
      let et = null != G ? null != (ee = q[Y[G]]) ? ee : q[G] : null;
      null != et && (Q = (0, i.jsx)(j.Z, {
        guild: l,
        applicationIntegration: et,
        editedWebhook: k,
        selectableWebhookChannels: U,
        errors: D,
        canNavigate: V
      }));
      break;
    case N.b4C.CHANNEL_FOLLOWING:
      Q = (0, i.jsx)(O.Z, {
        followedChannelWebhooks: J,
        editedWebhook: k,
        selectableWebhookChannels: U,
        canNavigate: V,
        errors: D
      });
      break;
    case N.b4C.WEBHOOKS:
      Q = (0, i.jsx)(C.Z, {
        guild: l,
        channel: Z,
        customWebhooks: $,
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
        }({}, U, W),
        canNavigate: V,
        refToScroller: R,
        errors: D
      });
      break;
    case N.b4C.LOBBIES_LINKED:
      Q = (0, i.jsx)(y.Z, {
        guild: l
      });
      break;
    default:
      Q = (0, i.jsx)(_.Z, {
        guild: l,
        channel: Z,
        applicationIntegrations: q,
        builtInIntegrations: X,
        customWebhooks: $,
        followedChannelWebhooks: J,
        isLoadingWebhooks: A || null == l,
        canCreateWebhook: null != H,
        onManageCustomWebhooks: () => {
          c.Z.setSection(N.b4C.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          c.Z.setSection(N.b4C.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          c.Z.setSection(N.b4C.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case N.ABu.TWITCH:
              c.Z.setSection(N.b4C.TWITCH);
              break;
            case N.ABu.YOUTUBE:
              c.Z.setSection(N.b4C.YOUTUBE)
          }
        },
        onManageLobbiesLinked: () => {
          c.Z.setSection(N.b4C.LOBBIES_LINKED)
        }
      })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(p.Z, {
      align: p.Z.Align.CENTER,
      className: I.breadcrumbs,
      children: t === N.b4C.OVERVIEW ? (0, i.jsx)(s.vwX, {
        tag: "h1",
        children: w(N.b4C.OVERVIEW)
      }) : (0, i.jsx)(s.OoM, {
        activeId: t.toString(),
        breadcrumbs: [N.b4C.OVERVIEW, t].map(e => ({
          id: e.toString(),
          label: w(e, q[G])
        })),
        onBreadcrumbClick: e => {
          t !== parseInt(e.id) && K(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, t) => (0, i.jsx)(s.vwX, {
          tag: "h1",
          className: t ? I.breadcrumbActive : I.breadcrumbInactive,
          children: e.label
        })
      })
    }), Q]
  })
})