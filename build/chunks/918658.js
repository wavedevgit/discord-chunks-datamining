/** Chunk was on 86668 **/
n.d(t, {
  Z: () => T,
  d: () => Z
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(442837),
  a = n(692547),
  c = n(481060),
  s = n(549817),
  u = n(819553),
  d = n(17181),
  b = n(303737),
  p = n(434404),
  g = n(703656),
  f = n(944486),
  _ = n(914010),
  h = n(671533),
  m = n(259580),
  O = n(358085),
  y = n(962086),
  S = n(160404),
  P = n(889695),
  v = n(981631),
  C = n(176505),
  w = n(302463),
  N = n(293810),
  I = n(388032),
  j = n(800515);

function x(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(c.zxk, {
    className: o()(j.button, t),
    innerClassName: j.buttonInner,
    look: c.zxk.Looks.OUTLINED,
    color: c.zxk.Colors.WHITE,
    size: c.zxk.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function E(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(x, {
    onClick: t,
    children: I.NW.string(I.t.R9GHyc)
  })
}

function T() {
  let e = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
    t = (0, l.e7)([f.Z], () => f.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: o,
      isServerShopPreview: O
    } = (0, l.cj)([S.Z], () => ({
      viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
      backNavigationSection: S.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && S.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let T = function(e) {
      switch (e) {
        case v.pNK.INTEGRATIONS:
          return I.NW.string(I.t.k7LGdn);
        case v.pNK.ROLE_SUBSCRIPTIONS:
          return I.NW.string(I.t.bRqiqa);
        case v.pNK.ONBOARDING:
          return I.NW.string(I.t.qZpU3d);
        default:
          return I.NW.string(I.t.MTIXho)
      }
    }(i),
    Z = i === v.pNK.ROLE_SUBSCRIPTIONS ? I.NW.string(I.t.hZUCzc) : I.NW.string(I.t["/djIh4"]),
    R = t === C.oC.GUILD_ONBOARDING,
    A = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (S.Z.isFullServerPreview(e) && (0, g.uL)(v.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, y.mL)(e), n && p.Z.open(e, i), i === v.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: j.notice,
    children: [(0, r.jsxs)(x, {
      onClick: () => A({
        backToSettings: !0
      }),
      className: j.backButton,
      children: [(0, r.jsx)(h.Z, {
        width: 16,
        height: 16,
        direction: h.Z.Directions.LEFT,
        className: j.backArrow
      }), T]
    }), R && o ? (0, r.jsx)("div", {
      className: j.noticeContents,
      children: (0, r.jsx)("div", {
        className: j.noticeText,
        children: I.NW.string(I.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: j.noticeContents,
      children: [(0, r.jsx)("div", {
        className: j.noticeText,
        children: o ? I.NW.formatToPlainString(I.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : I.NW.formatToPlainString(I.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(c.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(P.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(x, {
            onClick: t,
            children: [Z, (0, r.jsx)(m.Z, {
              width: 16,
              height: 16,
              direction: m.Z.Directions.DOWN,
              className: j.selectCaret
            })]
          })
        }
      }), o && (0, r.jsx)(c.DY3, {
        className: j.previewWarning,
        text: I.NW.string(I.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), O && (0, r.jsx)(c.DY3, {
        className: j.previewWarning,
        text: I.NW.formatToPlainString(I.t.eummvb, {
          maxTiers: N.fF,
          maxProducts: w.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), o || i === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(E, {
      onClick: () => A({
        backToSettings: !1
      })
    })]
  })
}

function Z(e) {
  let {
    guildId: t
  } = e;
  return (0, l.e7)([S.Z], () => S.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(j.settingsWrapper, {
      [j.windows]: (0, O.isWindows)(),
      [j.osx]: (0, O.isMac)()
    }),
    children: (0, r.jsx)(T, {})
  }) : null
}