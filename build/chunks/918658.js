/** Chunk was on 46086 **/
n.d(t, {
  Z: () => A,
  d: () => R
});
var r = n(200651);
n(192379);
var o = n(120356),
  i = n.n(o),
  a = n(442837),
  l = n(692547),
  c = n(481060),
  s = n(549817),
  u = n(819553),
  d = n(17181),
  _ = n(303737),
  g = n(434404),
  b = n(703656),
  p = n(944486),
  m = n(914010),
  f = n(671533),
  O = n(259580),
  h = n(358085),
  S = n(962086),
  v = n(160404),
  C = n(889695),
  I = n(981631),
  E = n(176505),
  T = n(302463),
  P = n(293810),
  N = n(388032),
  L = n(441489);

function x(e) {
  let {
    className: t,
    onClick: n,
    children: o
  } = e;
  return (0, r.jsx)(c.zxk, {
    className: i()(L.button, t),
    innerClassName: L.buttonInner,
    look: c.zxk.Looks.OUTLINED,
    color: c.zxk.Colors.WHITE,
    size: c.zxk.Sizes.NONE,
    onClick: n,
    children: o
  })
}

function y(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(x, {
    onClick: t,
    children: N.NW.string(N.t.R9GHyc)
  })
}

function A() {
  let e = (0, a.e7)([m.Z], () => m.Z.getGuildId()),
    t = (0, a.e7)([p.Z], () => p.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: o,
      isFullServerPreview: i,
      isServerShopPreview: h
    } = (0, a.cj)([v.Z], () => ({
      viewingRoles: null != e ? v.Z.getViewingRoles(e) : null,
      backNavigationSection: v.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && v.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && v.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let A = function(e) {
      switch (e) {
        case I.pNK.INTEGRATIONS:
          return N.NW.string(N.t.k7LGdn);
        case I.pNK.ROLE_SUBSCRIPTIONS:
          return N.NW.string(N.t.bRqiqa);
        case I.pNK.ONBOARDING:
          return N.NW.string(N.t.qZpU3d);
        default:
          return N.NW.string(N.t.MTIXho)
      }
    }(o),
    R = o === I.pNK.ROLE_SUBSCRIPTIONS ? N.NW.string(N.t.hZUCzc) : N.NW.string(N.t["/djIh4"]),
    w = t === E.oC.GUILD_ONBOARDING,
    k = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (v.Z.isFullServerPreview(e) && (0, b.uL)(I.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, S.mL)(e), n && g.Z.open(e, o), o === I.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: L.notice,
    children: [(0, r.jsxs)(x, {
      onClick: () => k({
        backToSettings: !0
      }),
      className: L.backButton,
      children: [(0, r.jsx)(f.Z, {
        width: 16,
        height: 16,
        direction: f.Z.Directions.LEFT,
        className: L.backArrow
      }), A]
    }), w && i ? (0, r.jsx)("div", {
      className: L.noticeContents,
      children: (0, r.jsx)("div", {
        className: L.noticeText,
        children: N.NW.string(N.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: L.noticeContents,
      children: [(0, r.jsx)("div", {
        className: L.noticeText,
        children: i ? N.NW.formatToPlainString(N.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : N.NW.formatToPlainString(N.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(c.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(C.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(x, {
            onClick: t,
            children: [R, (0, r.jsx)(O.Z, {
              width: 16,
              height: 16,
              direction: O.Z.Directions.DOWN,
              className: L.selectCaret
            })]
          })
        }
      }), i && (0, r.jsx)(c.DY3, {
        className: L.previewWarning,
        text: N.NW.string(N.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), h && (0, r.jsx)(c.DY3, {
        className: L.previewWarning,
        text: N.NW.formatToPlainString(N.t.eummvb, {
          maxTiers: P.fF,
          maxProducts: T.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), i || o === I.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(y, {
      onClick: () => k({
        backToSettings: !1
      })
    })]
  })
}

function R(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([v.Z], () => v.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: i()(L.settingsWrapper, {
      [L.windows]: (0, h.isWindows)(),
      [L.osx]: (0, h.isMac)()
    }),
    children: (0, r.jsx)(A, {})
  }) : null
}