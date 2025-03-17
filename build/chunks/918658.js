/** Chunk was on 79536 **/
n.d(t, {
  Z: () => k,
  d: () => E
});
var r = n(200651);
n(192379);
var o = n(120356),
  i = n.n(o),
  a = n(442837),
  c = n(692547),
  l = n(481060),
  s = n(549817),
  u = n(819553),
  d = n(17181),
  _ = n(303737),
  b = n(434404),
  g = n(703656),
  f = n(944486),
  p = n(914010),
  m = n(671533),
  h = n(259580),
  O = n(358085),
  C = n(962086),
  S = n(160404),
  v = n(889695),
  y = n(981631),
  P = n(176505),
  x = n(302463),
  T = n(293810),
  N = n(388032),
  I = n(230206);

function w(e) {
  let {
    className: t,
    onClick: n,
    children: o
  } = e;
  return (0, r.jsx)(l.zxk, {
    className: i()(I.button, t),
    innerClassName: I.buttonInner,
    look: l.zxk.Looks.OUTLINED,
    color: l.zxk.Colors.WHITE,
    size: l.zxk.Sizes.NONE,
    onClick: n,
    children: o
  })
}

function j(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(w, {
    onClick: t,
    children: N.NW.string(N.t.R9GHyc)
  })
}

function k() {
  let e = (0, a.e7)([p.Z], () => p.Z.getGuildId()),
    t = (0, a.e7)([f.Z], () => f.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: o,
      isFullServerPreview: i,
      isServerShopPreview: O
    } = (0, a.cj)([S.Z], () => ({
      viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
      backNavigationSection: S.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && S.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let k = function(e) {
      switch (e) {
        case y.pNK.INTEGRATIONS:
          return N.NW.string(N.t.k7LGdn);
        case y.pNK.ROLE_SUBSCRIPTIONS:
          return N.NW.string(N.t.bRqiqa);
        case y.pNK.ONBOARDING:
          return N.NW.string(N.t.qZpU3d);
        default:
          return N.NW.string(N.t.MTIXho)
      }
    }(o),
    E = o === y.pNK.ROLE_SUBSCRIPTIONS ? N.NW.string(N.t.hZUCzc) : N.NW.string(N.t["/djIh4"]),
    R = t === P.oC.GUILD_ONBOARDING,
    A = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (S.Z.isFullServerPreview(e) && (0, g.uL)(y.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, C.mL)(e), n && b.Z.open(e, o), o === y.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(l.qXd, {
    color: l.DM8.BRAND,
    className: I.notice,
    children: [(0, r.jsxs)(w, {
      onClick: () => A({
        backToSettings: !0
      }),
      className: I.backButton,
      children: [(0, r.jsx)(m.Z, {
        width: 16,
        height: 16,
        direction: m.Z.Directions.LEFT,
        className: I.backArrow
      }), k]
    }), R && i ? (0, r.jsx)("div", {
      className: I.noticeContents,
      children: (0, r.jsx)("div", {
        className: I.noticeText,
        children: N.NW.string(N.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: I.noticeContents,
      children: [(0, r.jsx)("div", {
        className: I.noticeText,
        children: i ? N.NW.formatToPlainString(N.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : N.NW.formatToPlainString(N.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(l.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(v.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(w, {
            onClick: t,
            children: [E, (0, r.jsx)(h.Z, {
              width: 16,
              height: 16,
              direction: h.Z.Directions.DOWN,
              className: I.selectCaret
            })]
          })
        }
      }), i && (0, r.jsx)(l.DY3, {
        className: I.previewWarning,
        text: N.NW.string(N.t.mW4DUF),
        children: (0, r.jsx)(l.P4T, {
          size: "xs",
          color: c.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), O && (0, r.jsx)(l.DY3, {
        className: I.previewWarning,
        text: N.NW.formatToPlainString(N.t.eummvb, {
          maxTiers: T.fF,
          maxProducts: x.dD
        }),
        children: (0, r.jsx)(l.P4T, {
          size: "xs",
          color: c.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), i || o === y.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(j, {
      onClick: () => A({
        backToSettings: !1
      })
    })]
  })
}

function E(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([S.Z], () => S.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: i()(I.settingsWrapper, {
      [I.windows]: (0, O.isWindows)(),
      [I.osx]: (0, O.isMac)()
    }),
    children: (0, r.jsx)(k, {})
  }) : null
}