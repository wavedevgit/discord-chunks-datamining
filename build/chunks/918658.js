/** Chunk was on 51837 **/
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
  f = n(703656),
  g = n(944486),
  _ = n(914010),
  h = n(671533),
  O = n(259580),
  m = n(358085),
  y = n(962086),
  S = n(160404),
  P = n(889695),
  v = n(981631),
  N = n(176505),
  w = n(302463),
  I = n(293810),
  j = n(388032),
  C = n(800515);

function x(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(c.zxk, {
    className: o()(C.button, t),
    innerClassName: C.buttonInner,
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
    children: j.NW.string(j.t.R9GHyc)
  })
}

function T() {
  let e = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
    t = (0, l.e7)([g.Z], () => g.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: o,
      isServerShopPreview: m
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
          return j.NW.string(j.t.k7LGdn);
        case v.pNK.ROLE_SUBSCRIPTIONS:
          return j.NW.string(j.t.bRqiqa);
        case v.pNK.ONBOARDING:
          return j.NW.string(j.t.qZpU3d);
        default:
          return j.NW.string(j.t.MTIXho)
      }
    }(i),
    Z = i === v.pNK.ROLE_SUBSCRIPTIONS ? j.NW.string(j.t.hZUCzc) : j.NW.string(j.t["/djIh4"]),
    R = t === N.oC.GUILD_ONBOARDING,
    L = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (S.Z.isFullServerPreview(e) && (0, f.uL)(v.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, y.mL)(e), n && p.Z.open(e, i), i === v.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: C.notice,
    children: [(0, r.jsxs)(x, {
      onClick: () => L({
        backToSettings: !0
      }),
      className: C.backButton,
      children: [(0, r.jsx)(h.Z, {
        width: 16,
        height: 16,
        direction: h.Z.Directions.LEFT,
        className: C.backArrow
      }), T]
    }), R && o ? (0, r.jsx)("div", {
      className: C.noticeContents,
      children: (0, r.jsx)("div", {
        className: C.noticeText,
        children: j.NW.string(j.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: C.noticeContents,
      children: [(0, r.jsx)("div", {
        className: C.noticeText,
        children: o ? j.NW.formatToPlainString(j.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : j.NW.formatToPlainString(j.t.vMlK8v, {
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
            children: [Z, (0, r.jsx)(O.Z, {
              width: 16,
              height: 16,
              direction: O.Z.Directions.DOWN,
              className: C.selectCaret
            })]
          })
        }
      }), o && (0, r.jsx)(c.DY3, {
        className: C.previewWarning,
        text: j.NW.string(j.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), m && (0, r.jsx)(c.DY3, {
        className: C.previewWarning,
        text: j.NW.formatToPlainString(j.t.eummvb, {
          maxTiers: I.fF,
          maxProducts: w.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), o || i === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(E, {
      onClick: () => L({
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
    className: o()(C.settingsWrapper, {
      [C.windows]: (0, m.isWindows)(),
      [C.osx]: (0, m.isMac)()
    }),
    children: (0, r.jsx)(T, {})
  }) : null
}