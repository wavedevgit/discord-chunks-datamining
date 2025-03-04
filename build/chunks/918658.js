/** Chunk was on 61564 **/
n.d(t, {
  Z: () => k,
  d: () => w
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
  g = n(434404),
  b = n(703656),
  m = n(944486),
  f = n(914010),
  p = n(671533),
  h = n(259580),
  O = n(358085),
  C = n(962086),
  S = n(160404),
  v = n(889695),
  I = n(981631),
  N = n(176505),
  T = n(302463),
  x = n(293810),
  P = n(388032),
  E = n(230206);

function L(e) {
  let {
    className: t,
    onClick: n,
    children: o
  } = e;
  return (0, r.jsx)(l.zxk, {
    className: i()(E.button, t),
    innerClassName: E.buttonInner,
    look: l.zxk.Looks.OUTLINED,
    color: l.zxk.Colors.WHITE,
    size: l.zxk.Sizes.NONE,
    onClick: n,
    children: o
  })
}

function y(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(L, {
    onClick: t,
    children: P.NW.string(P.t.R9GHyc)
  })
}

function k() {
  let e = (0, a.e7)([f.Z], () => f.Z.getGuildId()),
    t = (0, a.e7)([m.Z], () => m.Z.getChannelId(e)),
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
        case I.pNK.INTEGRATIONS:
          return P.NW.string(P.t.k7LGdn);
        case I.pNK.ROLE_SUBSCRIPTIONS:
          return P.NW.string(P.t.bRqiqa);
        case I.pNK.ONBOARDING:
          return P.NW.string(P.t.qZpU3d);
        default:
          return P.NW.string(P.t.MTIXho)
      }
    }(o),
    w = o === I.pNK.ROLE_SUBSCRIPTIONS ? P.NW.string(P.t.hZUCzc) : P.NW.string(P.t["/djIh4"]),
    A = t === N.oC.GUILD_ONBOARDING,
    R = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (S.Z.isFullServerPreview(e) && (0, b.uL)(I.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, C.mL)(e), n && g.Z.open(e, o), o === I.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(l.qXd, {
    color: l.DM8.BRAND,
    className: E.notice,
    children: [(0, r.jsxs)(L, {
      onClick: () => R({
        backToSettings: !0
      }),
      className: E.backButton,
      children: [(0, r.jsx)(p.Z, {
        width: 16,
        height: 16,
        direction: p.Z.Directions.LEFT,
        className: E.backArrow
      }), k]
    }), A && i ? (0, r.jsx)("div", {
      className: E.noticeContents,
      children: (0, r.jsx)("div", {
        className: E.noticeText,
        children: P.NW.string(P.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: E.noticeContents,
      children: [(0, r.jsx)("div", {
        className: E.noticeText,
        children: i ? P.NW.formatToPlainString(P.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : P.NW.formatToPlainString(P.t.vMlK8v, {
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
          return (0, r.jsxs)(L, {
            onClick: t,
            children: [w, (0, r.jsx)(h.Z, {
              width: 16,
              height: 16,
              direction: h.Z.Directions.DOWN,
              className: E.selectCaret
            })]
          })
        }
      }), i && (0, r.jsx)(l.DY3, {
        className: E.previewWarning,
        text: P.NW.string(P.t.mW4DUF),
        children: (0, r.jsx)(l.P4T, {
          size: "xs",
          color: c.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), O && (0, r.jsx)(l.DY3, {
        className: E.previewWarning,
        text: P.NW.formatToPlainString(P.t.eummvb, {
          maxTiers: x.fF,
          maxProducts: T.dD
        }),
        children: (0, r.jsx)(l.P4T, {
          size: "xs",
          color: c.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), i || o === I.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(y, {
      onClick: () => R({
        backToSettings: !1
      })
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([S.Z], () => S.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: i()(E.settingsWrapper, {
      [E.windows]: (0, O.isWindows)(),
      [E.osx]: (0, O.isMac)()
    }),
    children: (0, r.jsx)(k, {})
  }) : null
}