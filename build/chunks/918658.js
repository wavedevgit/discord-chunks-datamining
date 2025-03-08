/** Chunk was on 74329 **/
n.d(t, {
  Z: () => x,
  d: () => j
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(442837),
  a = n(692547),
  s = n(481060),
  c = n(549817),
  u = n(819553),
  d = n(17181),
  _ = n(303737),
  p = n(434404),
  E = n(703656),
  f = n(944486),
  m = n(914010),
  h = n(671533),
  b = n(259580),
  g = n(358085),
  O = n(962086),
  N = n(160404),
  I = n(889695),
  C = n(981631),
  T = n(176505),
  S = n(302463),
  y = n(293810),
  v = n(388032),
  P = n(230206);

function R(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(s.zxk, {
    className: o()(P.button, t),
    innerClassName: P.buttonInner,
    look: s.zxk.Looks.OUTLINED,
    color: s.zxk.Colors.WHITE,
    size: s.zxk.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function A(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(R, {
    onClick: t,
    children: v.NW.string(v.t.R9GHyc)
  })
}

function x() {
  let e = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
    t = (0, l.e7)([f.Z], () => f.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: o,
      isServerShopPreview: g
    } = (0, l.cj)([N.Z], () => ({
      viewingRoles: null != e ? N.Z.getViewingRoles(e) : null,
      backNavigationSection: N.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && N.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && N.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let x = function(e) {
      switch (e) {
        case C.pNK.INTEGRATIONS:
          return v.NW.string(v.t.k7LGdn);
        case C.pNK.ROLE_SUBSCRIPTIONS:
          return v.NW.string(v.t.bRqiqa);
        case C.pNK.ONBOARDING:
          return v.NW.string(v.t.qZpU3d);
        default:
          return v.NW.string(v.t.MTIXho)
      }
    }(i),
    j = i === C.pNK.ROLE_SUBSCRIPTIONS ? v.NW.string(v.t.hZUCzc) : v.NW.string(v.t["/djIh4"]),
    D = t === T.oC.GUILD_ONBOARDING,
    L = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (N.Z.isFullServerPreview(e) && (0, E.uL)(C.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.EI)(e)), (0, O.mL)(e), n && p.Z.open(e, i), i === C.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(s.qXd, {
    color: s.DM8.BRAND,
    className: P.notice,
    children: [(0, r.jsxs)(R, {
      onClick: () => L({
        backToSettings: !0
      }),
      className: P.backButton,
      children: [(0, r.jsx)(h.Z, {
        width: 16,
        height: 16,
        direction: h.Z.Directions.LEFT,
        className: P.backArrow
      }), x]
    }), D && o ? (0, r.jsx)("div", {
      className: P.noticeContents,
      children: (0, r.jsx)("div", {
        className: P.noticeText,
        children: v.NW.string(v.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: P.noticeContents,
      children: [(0, r.jsx)("div", {
        className: P.noticeText,
        children: o ? v.NW.formatToPlainString(v.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : v.NW.formatToPlainString(v.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(s.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(I.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(R, {
            onClick: t,
            children: [j, (0, r.jsx)(b.Z, {
              width: 16,
              height: 16,
              direction: b.Z.Directions.DOWN,
              className: P.selectCaret
            })]
          })
        }
      }), o && (0, r.jsx)(s.DY3, {
        className: P.previewWarning,
        text: v.NW.string(v.t.mW4DUF),
        children: (0, r.jsx)(s.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), g && (0, r.jsx)(s.DY3, {
        className: P.previewWarning,
        text: v.NW.formatToPlainString(v.t.eummvb, {
          maxTiers: y.fF,
          maxProducts: S.dD
        }),
        children: (0, r.jsx)(s.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), o || i === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(A, {
      onClick: () => L({
        backToSettings: !1
      })
    })]
  })
}

function j(e) {
  let {
    guildId: t
  } = e;
  return (0, l.e7)([N.Z], () => N.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(P.settingsWrapper, {
      [P.windows]: (0, g.isWindows)(),
      [P.osx]: (0, g.isMac)()
    }),
    children: (0, r.jsx)(x, {})
  }) : null
}