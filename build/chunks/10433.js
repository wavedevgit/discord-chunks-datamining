/** Chunk was on 52272 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(873546),
  a = n(373793),
  l = n(399606),
  s = n(481060),
  c = n(434650),
  u = n(321231),
  d = n(230171),
  p = n(749681),
  m = n(955415),
  f = n(706454),
  h = n(973616),
  g = n(914010),
  _ = n(626135),
  b = n(135431),
  v = n(471518),
  x = n(370210),
  y = n(258971),
  E = n(981631),
  O = n(49898),
  N = n(388032),
  j = n(997408);

function C(e) {
  var t, n, C;
  let {
    code: I,
    message: S,
    embedUrl: T
  } = e, {
    enabled: P
  } = u.G.useExperiment({
    location: "ApplicationDirectoryProfileEmbed"
  }), [A, w, Z] = (0, l.Wu)([x.Z], () => [x.Z.getApplication(I), x.Z.isInvalidApplication(I), x.Z.getApplicationFetchState(I)], [I]), k = (0, l.e7)([f.default], () => f.default.locale), R = (0, l.e7)([g.Z], () => {
    var e;
    return null !== (e = g.Z.getGuildId()) && void 0 !== e ? e : void 0
  }), [D, L] = i.useState(!1), M = i.useCallback(e => {
    e && L(!0)
  }, []), W = (0, c.O)(M), U = i.useCallback(() => {
    _.default.track(E.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: I,
      device_platform: o.tq ? "mobile_web" : "desktop_web",
      sender_user_id: S.author.id,
      guild_id: R,
      channel_id: S.channel_id
    })
  }, [I, R, S.author.id, S.channel_id]);
  i.useEffect(() => {
    (0, v.gZ)(I)
  }, [I]), i.useEffect(() => {
    D && Z === x.M.FETCHED && U()
  }, [D, Z, U]), i.useEffect(() => {
    D && w && _.default.track(E.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: o.tq ? "mobile_web" : "desktop_web",
      sender_user_id: S.author.id,
      guild_id: R,
      channel_id: S.channel_id
    })
  }, [D, R, w, S.author.id, S.channel_id]);
  let F = e => {
    _.default.track(E.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: I,
      device_platform: o.tq ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: R,
      channel_id: S.channel_id
    }), (0, p.transitionToGlobalDiscovery)({
      tab: O.GlobalDiscoveryTab.APPS,
      applicationId: I,
      newSessionState: {
        guildId: R,
        entrypoint: {
          name: y.xF.APPLICATION_DIRECTORY_PROFILE_EMBED
        }
      }
    })
  };
  if (P && null != A) return (0, r.jsx)(d.O, {
    app: h.ZP.createFromServer(A),
    embedUrl: T,
    linkType: d.U.APP_DISCOVERY,
    onView: U
  });
  if (w) return (0, r.jsxs)(m.Z, {
    containerRef: W,
    children: [(0, r.jsx)(m.Z.Header, {
      text: N.NW.string(N.t.j4KtLS)
    }), (0, r.jsx)(m.Z.Body, {
      children: (0, r.jsxs)("div", {
        className: j.invalidBody,
        children: [(0, r.jsx)(m.Z.Icon, {
          expired: !0
        }), (0, r.jsx)(m.Z.Info, {
          expired: !0,
          title: N.NW.string(N.t.NaQLEx),
          children: N.NW.string(N.t["0H5OT0"])
        })]
      })
    })]
  });
  if (null == A || Z === x.M.FETCHING) return (0, r.jsxs)(m.Z, {
    containerRef: W,
    children: [(0, r.jsx)(m.Z.Header, {
      text: N.NW.string(N.t.m9hXGR)
    }), (0, r.jsx)(m.Z.Body, {
      resolving: !0
    })]
  });
  let B = new Intl.NumberFormat(k, {
      notation: "compact",
      compactDisplay: "short"
    }),
    G = null !== (n = null === (t = A.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
    H = (0, b.Eb)({
      customInstallUrl: A.custom_install_url,
      installParams: A.install_params,
      integrationTypesConfig: A.integration_types_config
    }),
    V = a.Y.GUILD_INSTALL in (null !== (C = A.integration_types_config) && void 0 !== C ? C : {}) && H;
  return (0, r.jsxs)(m.Z, {
    containerRef: W,
    children: [(0, r.jsx)(m.Z.Header, {
      text: N.NW.string(N.t.KC1oZ2)
    }), (0, r.jsxs)(m.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: j.applicationInfoContainer,
        children: [(0, r.jsx)(m.Z.Icon, {
          application: h.ZP.createFromServer(A),
          className: j.applicationIcon,
          onClick: () => F("application_icon")
        }), (0, r.jsx)(m.Z.Info, {
          title: (0, r.jsx)(s.P3F, {
            onClick: () => F("application_name"),
            children: A.name
          }),
          children: G > 0 && V && (0, r.jsxs)(s.P3F, {
            className: j.guildCountContainer,
            onClick: () => F("application_guild_count"),
            children: [(0, r.jsx)(s.Jmo, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: j.guildCountIcon
            }), N.NW.format(N.t["6IW6Wl"], {
              guildCount: B.format(G)
            })]
          })
        })]
      }), H && (0, r.jsx)(m.Z.Button, {
        onClick: () => {
          null != A && (0, b.LO)({
            applicationId: I,
            customInstallUrl: A.custom_install_url,
            installParams: A.install_params,
            integrationTypesConfig: A.integration_types_config,
            guildId: R,
            source: "app_directory_profile_embed"
          })
        },
        color: m.Z.Button.Colors.GREEN,
        children: N.NW.string(N.t.NgXl3N)
      })]
    })]
  })
}