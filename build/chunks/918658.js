/** Chunk was on 91365 **/
n.d(t, {
  Z: () => R,
  d: () => N
});
var r = n(200651);
n(192379);
var o = n(120356),
  i = n.n(o),
  a = n(442837),
  l = n(692547),
  c = n(481060),
  s = n(549817),
  d = n(819553),
  u = n(17181),
  _ = n(303737),
  b = n(434404),
  g = n(703656),
  m = n(944486),
  p = n(914010),
  f = n(671533),
  h = n(259580),
  C = n(358085),
  S = n(962086),
  O = n(160404),
  v = n(889695),
  y = n(981631),
  x = n(176505),
  P = n(302463),
  w = n(293810),
  I = n(388032),
  T = n(800515);

function k(e) {
  let {
    className: t,
    onClick: n,
    children: o
  } = e;
  return (0, r.jsx)(c.zxk, {
    className: i()(T.button, t),
    innerClassName: T.buttonInner,
    look: c.zxk.Looks.OUTLINED,
    color: c.zxk.Colors.WHITE,
    size: c.zxk.Sizes.NONE,
    onClick: n,
    children: o
  })
}

function j(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(k, {
    onClick: t,
    children: I.NW.string(I.t.R9GHyc)
  })
}

function R() {
  let e = (0, a.e7)([p.Z], () => p.Z.getGuildId()),
    t = (0, a.e7)([m.Z], () => m.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: o,
      isFullServerPreview: i,
      isServerShopPreview: C
    } = (0, a.cj)([O.Z], () => ({
      viewingRoles: null != e ? O.Z.getViewingRoles(e) : null,
      backNavigationSection: O.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && O.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && O.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let R = function(e) {
      switch (e) {
        case y.pNK.INTEGRATIONS:
          return I.NW.string(I.t.k7LGdn);
        case y.pNK.ROLE_SUBSCRIPTIONS:
          return I.NW.string(I.t.bRqiqa);
        case y.pNK.ONBOARDING:
          return I.NW.string(I.t.qZpU3d);
        default:
          return I.NW.string(I.t.MTIXho)
      }
    }(o),
    N = o === y.pNK.ROLE_SUBSCRIPTIONS ? I.NW.string(I.t.hZUCzc) : I.NW.string(I.t["/djIh4"]),
    B = t === x.oC.GUILD_ONBOARDING,
    Z = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (O.Z.isFullServerPreview(e) && (0, g.uL)(y.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, u.EI)(e)), (0, S.mL)(e), n && b.Z.open(e, o), o === y.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: T.notice,
    children: [(0, r.jsxs)(k, {
      onClick: () => Z({
        backToSettings: !0
      }),
      className: T.backButton,
      children: [(0, r.jsx)(f.Z, {
        width: 16,
        height: 16,
        direction: f.Z.Directions.LEFT,
        className: T.backArrow
      }), R]
    }), B && i ? (0, r.jsx)("div", {
      className: T.noticeContents,
      children: (0, r.jsx)("div", {
        className: T.noticeText,
        children: I.NW.string(I.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: T.noticeContents,
      children: [(0, r.jsx)("div", {
        className: T.noticeText,
        children: i ? I.NW.formatToPlainString(I.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : I.NW.formatToPlainString(I.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(c.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(v.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(k, {
            onClick: t,
            children: [N, (0, r.jsx)(h.Z, {
              width: 16,
              height: 16,
              direction: h.Z.Directions.DOWN,
              className: T.selectCaret
            })]
          })
        }
      }), i && (0, r.jsx)(c.DY3, {
        className: T.previewWarning,
        text: I.NW.string(I.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), C && (0, r.jsx)(c.DY3, {
        className: T.previewWarning,
        text: I.NW.formatToPlainString(I.t.eummvb, {
          maxTiers: w.fF,
          maxProducts: P.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), i || o === y.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(j, {
      onClick: () => Z({
        backToSettings: !1
      })
    })]
  })
}

function N(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([O.Z], () => O.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: i()(T.settingsWrapper, {
      [T.windows]: (0, C.isWindows)(),
      [T.osx]: (0, C.isMac)()
    }),
    children: (0, r.jsx)(R, {})
  }) : null
}