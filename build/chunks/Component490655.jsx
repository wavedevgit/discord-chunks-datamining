/** Chunk was on 9414 **/
/** chunk id: 490655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk720764 = require("./720764.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk429220 = require("./429220.js");

function E(e, t) {
  switch (e) {
    case S.b4C.APPLICATION:
      var n;
      return null != (n = null == t ? true : t.application.name) ? n : "";
    case S.b4C.OVERVIEW:
      return I.intl.string(I.t.s69NLF);
    case S.b4C.CHANNEL_FOLLOWING:
      return I.intl.string(I.t.OrV60r);
    case S.b4C.TWITCH:
      return I.intl.string(I.t.q4pBG3);
    case S.b4C.WEBHOOKS:
      return I.intl.string(I.t.xOg4SP);
    case S.b4C.YOUTUBE:
      return I.intl.string(I.t.aS6cK4);
    case S.b4C.LOBBIES_LINKED:
      return I.intl.string(I.t.tqtDXC);
    default:
      return ""
  }
}
let Z = Chunk473749.memo(function(e) {
  let {
    section: t,
    sectionId: n,
    guild: l,
    channel: Z,
    integrations: w,
    editedIntegration: P,
    webhooks: _,
    editedWebhook: k,
    isFetchingWebhooks: A,
    refToScroller: D,
    errors: R,
    hasChanges: L
  } = e, M = (0, o.e7)([g.ZP], () => null != l ? g.ZP.getDefaultChannel(l.id) : null), U = (0, o.cj)([g.ZP], () => g.ZP.getChannels(null == l ? true : l.id)), B = (0, o.cj)([f.Z], () => a().keyBy(U.SELECTABLE.map(e => e.channel).filter(e => f.Z.can(S.Plq.MANAGE_WEBHOOKS, e)), "id")), W = (0, o.cj)([f.Z], () => a().keyBy(U.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && f.Z.can(S.Plq.MANAGE_WEBHOOKS, e)), "id")), H = null != Z ? Z : M, G = t === S.b4C.APPLICATION ? n : null, [F, K] = r.useState(d.$x), z = r.useCallback(() => L() ? (h.S.dispatch(S.CkL.SHAKE_APP, {
    duration: 300,
    intensity: F
  }), K(Math.min(F + d.d7, d.w6)), h.S.dispatch(S.CkL.EMPHASIZE_NOTICE), false) : (K(d.$x), true), [L, F]), V = r.useCallback(e => !!z() && (c.Z.setSection(e), true), [z]), {
    applicationIntegrations: q,
    applicationBotIds: Y,
    builtInIntegrations: J,
    customWebhooks: Q,
    followedChannelWebhooks: X
  } = r.useMemo(() => {
    let e = {},
      t = {},
      n = {},
      i = [],
      r = [];
    if (null != w)
      for (let i of w)
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
    for (let t of _)(t.channel_id in B || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === S.ylB.CHANNEL_FOLLOWER ? r.push(t) : i.push(t));
    return {
      applicationIntegrations: e,
      applicationBotIds: t,
      builtInIntegrations: n,
      customWebhooks: i,
      followedChannelWebhooks: r
    }
  }, [w, B, W, _]);
  r.useEffect(() => {
    if (!A) switch (t) {
      case S.b4C.TWITCH:
        null == J[S.ABu.TWITCH] && c.Z.setSection(S.b4C.OVERVIEW);
        break;
      case S.b4C.YOUTUBE:
        null == J[S.ABu.YOUTUBE] && c.Z.setSection(S.b4C.OVERVIEW);
        break;
      case S.b4C.APPLICATION:
        null != G && (G in Y || G in q) || c.Z.setSection(S.b4C.OVERVIEW)
    }
  }, [q, Y, J, G, t, A]), r.useEffect(() => {
    (null == l ? true : l.id) != null && p.Z.getEntitlementsForGuildFetchState(l.id) === p.M.NOT_FETCHED && b.i1(l.id)
  }, [null == l ? true : l.id]), r.useEffect(() => () => {
    c.Z.setSection(S.b4C.OVERVIEW, null)
  }, []);
  let $ = null;
  switch (t) {
    case S.b4C.TWITCH:
      null != J[S.ABu.TWITCH] && ($ = (0, i.jsx)(v.Z, {
        guild: l,
        integrations: J[S.ABu.TWITCH],
        editedIntegration: P,
        labelText: I.intl.string(I.t.q4pBG3),
        platformType: S.ABu.TWITCH,
        descriptionText: I.intl.string(I.t.V9kNqt),
        helpText: I.intl.format(I.t.ro1jEN, {
          connectAction: () => (0, u.Z)({
            platformType: S.ABu.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: x.Z.getArticleURL(S.BhN.TWITCH_INTEGRATION)
        }),
        errors: R,
        canNavigate: z
      }));
      break;
    case S.b4C.YOUTUBE:
      null != J[S.ABu.YOUTUBE] && ($ = (0, i.jsx)(v.Z, {
        guild: l,
        integrations: J[S.ABu.YOUTUBE],
        editedIntegration: P,
        labelText: I.intl.string(I.t.aS6cK4),
        platformType: S.ABu.YOUTUBE,
        descriptionText: I.intl.string(I.t["7Tv7JK"]),
        helpText: I.intl.format(I.t["4OSAQ9"], {
          connectAction: () => (0, u.Z)({
            platformType: S.ABu.YOUTUBE
          }),
          helpdeskArticle: x.Z.getArticleURL(S.BhN.YOUTUBE_INTEGRATION)
        }),
        errors: R,
        canNavigate: z
      }));
      break;
    case S.b4C.APPLICATION:
      var ee;
      let et = null != G ? null != (ee = q[Y[G]]) ? ee : q[G] : null;
      null != et && ($ = (0, i.jsx)(j.Z, {
        guild: l,
        applicationIntegration: et,
        editedWebhook: k,
        selectableWebhookChannels: B,
        errors: R,
        canNavigate: z
      }));
      break;
    case S.b4C.CHANNEL_FOLLOWING:
      $ = (0, i.jsx)(O.Z, {
        followedChannelWebhooks: X,
        editedWebhook: k,
        selectableWebhookChannels: B,
        canNavigate: z,
        errors: R
      });
      break;
    case S.b4C.WEBHOOKS:
      $ = (0, i.jsx)(N.Z, {
        guild: l,
        channel: Z,
        customWebhooks: Q,
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
        canNavigate: z,
        refToScroller: D,
        errors: R
      });
      break;
    case S.b4C.LOBBIES_LINKED:
      $ = (0, i.jsx)(y.Z, {
        guild: l
      });
      break;
    default:
      $ = (0, i.jsx)(C.Z, {
        guild: l,
        channel: Z,
        applicationIntegrations: q,
        builtInIntegrations: J,
        customWebhooks: Q,
        followedChannelWebhooks: X,
        isLoadingWebhooks: A || null == l,
        canCreateWebhook: null != H,
        onManageCustomWebhooks: () => {
          c.Z.setSection(S.b4C.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          c.Z.setSection(S.b4C.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          c.Z.setSection(S.b4C.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case S.ABu.TWITCH:
              c.Z.setSection(S.b4C.TWITCH);
              break;
            case S.ABu.YOUTUBE:
              c.Z.setSection(S.b4C.YOUTUBE)
          }
        },
        onManageLobbiesLinked: () => {
          c.Z.setSection(S.b4C.LOBBIES_LINKED)
        }
      })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.Z, {
      align: m.Z.Align.CENTER,
      className: T.breadcrumbs,
      children: t === S.b4C.OVERVIEW ? (0, i.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: E(S.b4C.OVERVIEW)
      }) : (0, i.jsx)(s.OoM, {
        activeId: t.toString(),
        breadcrumbs: [S.b4C.OVERVIEW, t].map(e => ({
          id: e.toString(),
          label: E(e, q[G])
        })),
        onBreadcrumbClick: e => {
          t !== parseInt(e.id) && V(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, t) => (0, i.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          className: t ? T.breadcrumbActive : T.breadcrumbInactive,
          children: e.label
        })
      })
    }), $]
  })
})