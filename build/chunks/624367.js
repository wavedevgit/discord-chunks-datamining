/** Chunk was on 76030 **/
n.d(t, {
  Z: () => P
}), n(47120), n(266796), n(566702);
var r = n(200651);
n(192379);
var i = n(666572),
  a = n(373793),
  o = n(399606),
  l = n(477690),
  s = n(481060),
  c = n(100527),
  d = n(906732),
  u = n(783097),
  p = n(606192),
  m = n(213459),
  f = n(321231),
  h = n(230171),
  g = n(835473),
  _ = n(749681),
  b = n(258971),
  v = n(914010),
  y = n(624138),
  x = n(135431),
  E = n(365415),
  O = n(147865),
  j = n(778569),
  N = n(50523),
  C = n(49898),
  I = n(388032),
  S = n(587494);
let T = (0, y.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function P(e) {
  var t, n, l, y;
  let {
    applicationId: P,
    customId: A,
    referrerId: w,
    embedUrl: Z,
    linkId: k
  } = e, {
    analyticsLocations: R
  } = (0, d.ZP)(c.Z.ACTIVITY_BOOKMARK), [D] = (0, g.Z)([P]), L = (0, o.e7)([v.Z], () => {
    var e;
    return null !== (e = v.Z.getGuildId()) && void 0 !== e ? e : void 0
  }), M = null == D ? void 0 : null === (t = D.bot) || void 0 === t ? void 0 : t.id, W = null != D && (0, u.ye)(D), F = (0, O.ZP)(null !== (l = null == D ? void 0 : D.maxParticipants) && void 0 !== l ? l : 0), U = (0, j.Z)({
    applicationId: P,
    size: T,
    names: ["embedded_cover"]
  }), B = null !== (y = null == D ? void 0 : D.id) && void 0 !== y ? y : "0", G = (0, x.TK)(B, (0, m.PL)(!0, !1)), H = (0, x.TK)(B, (0, m.LD)(L, !1)), V = async () => {
    if (null != M && (null == D ? void 0 : D.id) != null) try {
      await (0, p.W)({
        appId: D.id,
        botId: M,
        analyticsLocations: R,
        customId: A,
        referrerId: w
      })
    } catch (e) {}
  }, {
    enabled: z
  } = f.G.useExperiment({
    location: "ActivityBookmarkEmbed"
  }), K = (0, i._)(k), {
    data: Y,
    error: X
  } = (0, E.h)(null == D ? void 0 : D.id, K);
  return null == D || !1 === W ? null : null != k && null == X ? null == Y ? null : (0, r.jsx)(N.b, {
    application: D,
    customId: A,
    customLink: Y,
    embedUrl: Z,
    referrerId: w
  }) : z ? (0, r.jsx)(d.Gt, {
    value: R,
    children: (0, r.jsx)(h.O, {
      app: D,
      embedUrl: Z,
      linkType: h.U.ACTIVITY,
      activityCustomId: A,
      activityReferrerId: w
    })
  }) : (0, r.jsx)(d.Gt, {
    value: R,
    children: (0, r.jsxs)("div", {
      className: S.container,
      children: [(0, r.jsx)("div", {
        className: S.imgContainer,
        children: (0, r.jsx)("img", {
          className: S.img,
          alt: D.name,
          src: U.url
        })
      }), (0, r.jsxs)("div", {
        className: S.content,
        children: [(0, r.jsx)(s.X6q, {
          className: S.heading,
          variant: "heading-xl/semibold",
          children: D.name
        }), (0, r.jsx)(s.X6q, {
          className: S.description,
          variant: "heading-sm/medium",
          children: null === (n = D.description) || void 0 === n ? void 0 : n.trim()
        }), (0, r.jsxs)("div", {
          className: S.cta,
          children: [(0, r.jsxs)("div", {
            className: S.maxParticipants,
            children: [(0, r.jsx)(s.BFJ, {
              size: "md",
              color: "currentColor",
              className: S.peopleIcon
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/semibold",
              children: F
            })]
          }), (0, r.jsxs)("div", {
            className: S.buttonWrapper,
            children: [null != D && (0, r.jsx)(s.zxk, {
              onClick: () => {
                var e;
                null != D && (a.Y.USER_INSTALL in (null !== (e = D.integrationTypesConfig) && void 0 !== e ? e : {}) || G || H ? (0, u.X)(D.id) : (0, _.transitionToGlobalDiscovery)({
                  tab: C.GlobalDiscoveryTab.APPS,
                  applicationId: D.id,
                  newSessionState: {
                    entrypoint: {
                      name: b.xF.OAUTH2_EMBED
                    },
                    guildId: L
                  }
                }))
              },
              className: S.button,
              color: s.Ttl.PRIMARY,
              children: I.NW.string(I.t.fbcCzc)
            }), (0, r.jsx)(s.zxk, {
              onClick: V,
              className: S.button,
              color: s.Ttl.GREEN,
              children: I.NW.string(I.t.RscU7O)
            })]
          })]
        })]
      })]
    })
  })
}