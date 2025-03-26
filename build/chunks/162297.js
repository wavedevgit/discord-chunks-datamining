/** Chunk was on 52272 **/
n.d(t, {
  Z: () => F
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(990547),
  a = n(373793),
  l = n(399606),
  s = n(481060),
  c = n(434650),
  u = n(778569),
  d = n(182906),
  p = n(100527),
  m = n(367907),
  f = n(906732),
  h = n(213609),
  g = n(915346),
  _ = n(783097),
  b = n(176412),
  v = n(213459),
  x = n(581364),
  y = n(220082),
  E = n(749681),
  O = n(258971),
  N = n(240991),
  j = n(592125),
  C = n(496675),
  I = n(944486),
  S = n(914010),
  T = n(768581),
  P = n(135431),
  A = n(728345),
  w = n(812206),
  Z = n(321231),
  k = n(230171),
  R = n(981631),
  D = n(49898),
  L = n(388032),
  M = n(149723),
  W = n(413097),
  U = n(970952);

function F(e) {
  let {
    applicationId: t,
    embedUrl: n
  } = e, [o, a, s] = (0, l.Wu)([w.Z], () => [w.Z.getApplication(t), w.Z.isFetchingApplication(t), w.Z.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != o || a || s || A.ZP.fetchApplication(t)
  }, [o, a, s, t]), null != o && (0, P.Eb)({
    customInstallUrl: o.customInstallUrl,
    installParams: o.installParams,
    integrationTypesConfig: o.integrationTypesConfig
  })) ? (0, r.jsx)(B, {
    application: o,
    embedUrl: n
  }) : null
}

function B(e) {
  var t;
  let {
    application: n,
    embedUrl: u
  } = e, d = null === (t = n.bot) || void 0 === t ? void 0 : t.id, y = (0, _.ye)(n) && null != d, T = (0, l.e7)([S.Z], () => {
    var e;
    return null !== (e = S.Z.getGuildId()) && void 0 !== e ? e : void 0
  }), {
    iconURL: A,
    name: w,
    description: F
  } = i.useMemo(() => (0, _.sl)(n, {
    fakeAppIconURL: W,
    size: 56
  }), [n]), B = i.useMemo(() => null != F ? (0, N.parseBioReact)(F) : null, [F]), [H, V] = i.useState(!1), z = i.useCallback(e => {
    e && V(!0)
  }, []), K = (0, c.O)(z), Y = i.useCallback(() => {
    (0, h.h)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: n.id
      }
    })
  }, [n.id]);
  i.useEffect(() => {
    H && Y()
  }, [H, Y]);
  let X = (0, x.TK)(n.id, (0, v.PL)(!0, !1)),
    q = (0, x.TK)(n.id, (0, v.LD)(T, !1)),
    Q = X || q,
    J = n.isVerified && n.isDiscoverable,
    $ = (0, l.e7)([I.Z, j.Z], () => j.Z.getChannel(I.Z.getChannelId())),
    ee = (0, l.e7)([C.Z], () => (null == $ ? void 0 : $.isPrivate()) || C.Z.can(R.Plq.SEND_MESSAGES, $)),
    {
      analyticsLocations: et
    } = (0, f.ZP)(p.Z.APP_OAUTH2_LINK_EMBED),
    en = async () => {
      if (null != d) try {
        await (0, g.W)({
          appId: n.id,
          botId: d,
          analyticsLocations: et
        })
      } catch (e) {}
    }, {
      enabled: er
    } = Z.G.useExperiment({
      location: "ApplicationOAuth2Embed"
    });
  return er ? (0, r.jsx)(k.O, {
    app: n,
    embedUrl: u,
    linkType: k.U.OAUTH,
    onView: Y
  }) : (0, r.jsxs)("div", {
    ref: K,
    className: M.embedContainer,
    children: [(0, r.jsx)(G, {
      application: n,
      iconUrl: A
    }), (0, r.jsx)("img", {
      className: M.icon,
      alt: n.name,
      src: null != A ? A : U,
      "aria-hidden": !0,
      draggable: !1
    }), (0, r.jsxs)("div", {
      className: M.body,
      children: [(0, r.jsxs)("div", {
        className: M.details,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-lg/bold",
          color: "interactive-active",
          children: w
        }), null != B && (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: B
        })]
      }), (0, r.jsxs)("div", {
        className: M.buttonContainer,
        children: [y && (0, r.jsx)(s.zxk, {
          color: s.zxk.Colors.BRAND,
          type: "button",
          size: s.zxk.Sizes.MEDIUM,
          onClick: en,
          children: L.NW.string(L.t.RscU7O)
        }), (Q || J) && ee && (0, r.jsx)(s.zxk, {
          color: y ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
          type: "button",
          size: s.zxk.Sizes.MEDIUM,
          onClick: () => {
            var e;
            a.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || Q ? (0, b.X)(n.id) : (0, E.transitionToGlobalDiscovery)({
              tab: D.GlobalDiscoveryTab.APPS,
              applicationId: n.id,
              newSessionState: {
                guildId: T,
                entrypoint: {
                  name: O.xF.OAUTH2_EMBED
                }
              }
            })
          },
          children: L.NW.string(L.t.fbcCzc)
        }), !y && !Q && (0, r.jsx)(s.zxk, {
          color: s.zxk.Colors.PRIMARY,
          type: "button",
          size: s.zxk.Sizes.MEDIUM,
          onClick: () => {
            m.ZP.trackWithMetadata(R.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, {
              application_id: n.id
            }), (0, P.LO)({
              applicationId: n.id,
              customInstallUrl: n.customInstallUrl,
              installParams: n.installParams,
              integrationTypesConfig: n.integrationTypesConfig,
              guildId: T,
              source: "app_oauth2_link_embed"
            })
          },
          children: L.NW.string(L.t.NgXl3N)
        })]
      })]
    })]
  })
}

function G(e) {
  let {
    application: t,
    iconUrl: n
  } = e, i = (0, u.Z)({
    applicationId: t.id,
    size: 280,
    names: ["embedded_cover"]
  }), o = (0, y.ZP)(n, ""), a = t.bot, l = null, s = {};
  if ((0, _.ye)(t)) l = (0, r.jsx)(d.Z, {
    imageBackground: i,
    applicationName: t.name,
    imageClassName: M.bannerImage,
    imageNotFoundClassName: M.bannerImage
  });
  else if ((null == a ? void 0 : a.banner) != null) {
    let e = (0, T.aN)({
      id: a.id,
      banner: a.banner,
      size: 280,
      canAnimate: !1
    });
    l = (0, r.jsx)("img", {
      alt: t.name,
      src: e,
      className: M.bannerImage
    })
  } else s = {
    backgroundColor: o
  };
  return (0, r.jsx)("div", {
    className: M.banner,
    style: s,
    children: l
  })
}