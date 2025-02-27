/** Chunk was on 49750 **/
n.d(t, {
  Z: () => x,
  d: () => D
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  s = n(692547),
  a = n(481060),
  c = n(549817),
  u = n(819553),
  d = n(17181),
  _ = n(303737),
  E = n(434404),
  p = n(703656),
  m = n(944486),
  h = n(914010),
  f = n(671533),
  g = n(259580),
  N = n(358085),
  O = n(962086),
  I = n(160404),
  b = n(889695),
  T = n(981631),
  C = n(176505),
  S = n(302463),
  y = n(293810),
  P = n(388032),
  R = n(230206);

function A(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(a.zxk, {
    className: l()(R.button, t),
    innerClassName: R.buttonInner,
    look: a.zxk.Looks.OUTLINED,
    color: a.zxk.Colors.WHITE,
    size: a.zxk.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function v(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(A, {
    onClick: t,
    children: P.NW.string(P.t.R9GHyc)
  })
}

function x() {
  let e = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
    t = (0, o.e7)([m.Z], () => m.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: N
    } = (0, o.cj)([I.Z], () => ({
      viewingRoles: null != e ? I.Z.getViewingRoles(e) : null,
      backNavigationSection: I.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && I.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && I.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let x = function(e) {
      switch (e) {
        case T.pNK.INTEGRATIONS:
          return P.NW.string(P.t.k7LGdn);
        case T.pNK.ROLE_SUBSCRIPTIONS:
          return P.NW.string(P.t.bRqiqa);
        case T.pNK.ONBOARDING:
          return P.NW.string(P.t.qZpU3d);
        default:
          return P.NW.string(P.t.MTIXho)
      }
    }(i),
    D = i === T.pNK.ROLE_SUBSCRIPTIONS ? P.NW.string(P.t.hZUCzc) : P.NW.string(P.t["/djIh4"]),
    L = t === C.oC.GUILD_ONBOARDING,
    k = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (I.Z.isFullServerPreview(e) && (0, p.uL)(T.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.EI)(e)), (0, O.mL)(e), n && E.Z.open(e, i), i === T.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.BRAND,
    className: R.notice,
    children: [(0, r.jsxs)(A, {
      onClick: () => k({
        backToSettings: !0
      }),
      className: R.backButton,
      children: [(0, r.jsx)(f.Z, {
        width: 16,
        height: 16,
        direction: f.Z.Directions.LEFT,
        className: R.backArrow
      }), x]
    }), L && l ? (0, r.jsx)("div", {
      className: R.noticeContents,
      children: (0, r.jsx)("div", {
        className: R.noticeText,
        children: P.NW.string(P.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: R.noticeContents,
      children: [(0, r.jsx)("div", {
        className: R.noticeText,
        children: l ? P.NW.formatToPlainString(P.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : P.NW.formatToPlainString(P.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(a.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(b.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(A, {
            onClick: t,
            children: [D, (0, r.jsx)(g.Z, {
              width: 16,
              height: 16,
              direction: g.Z.Directions.DOWN,
              className: R.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(a.DY3, {
        className: R.previewWarning,
        text: P.NW.string(P.t.mW4DUF),
        children: (0, r.jsx)(a.P4T, {
          size: "xs",
          color: s.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), N && (0, r.jsx)(a.DY3, {
        className: R.previewWarning,
        text: P.NW.formatToPlainString(P.t.eummvb, {
          maxTiers: y.fF,
          maxProducts: S.dD
        }),
        children: (0, r.jsx)(a.P4T, {
          size: "xs",
          color: s.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(v, {
      onClick: () => k({
        backToSettings: !1
      })
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e;
  return (0, o.e7)([I.Z], () => I.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(R.settingsWrapper, {
      [R.windows]: (0, N.isWindows)(),
      [R.osx]: (0, N.isMac)()
    }),
    children: (0, r.jsx)(x, {})
  }) : null
}