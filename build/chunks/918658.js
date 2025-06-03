/** Chunk was on 90202 **/
n.d(t, {
  Z: () => M,
  d: () => k
});
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(692547),
  c = n(481060),
  u = n(549817),
  E = n(819553),
  d = n(17181),
  _ = n(303737),
  I = n(434404),
  O = n(703656),
  T = n(944486),
  N = n(914010),
  S = n(671533),
  p = n(259580),
  R = n(358085),
  A = n(962086),
  P = n(160404),
  C = n(889695),
  f = n(981631),
  D = n(176505),
  h = n(302463),
  m = n(293810),
  y = n(388032),
  g = n(800515);

function U(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: l
  } = e;
  return (0, r.jsx)(c.zxk, {
    buttonRef: l,
    className: o()(g.button, t),
    innerClassName: g.buttonInner,
    look: c.zxk.Looks.OUTLINED,
    color: c.zxk.Colors.WHITE,
    size: c.zxk.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function b(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(U, {
    onClick: t,
    children: y.intl.string(y.t.R9GHyc)
  })
}

function M() {
  let e = i.useRef(null),
    t = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
    n = (0, a.e7)([T.Z], () => T.Z.getChannelId(t)),
    {
      viewingRoles: l,
      backNavigationSection: o,
      isFullServerPreview: R,
      isServerShopPreview: M
    } = (0, a.cj)([P.Z], () => ({
      viewingRoles: null != t ? P.Z.getViewingRoles(t) : null,
      backNavigationSection: P.Z.getBackNavigationSection(t),
      isFullServerPreview: null != t && P.Z.isFullServerPreview(t),
      isServerShopPreview: null != t && P.Z.isViewingServerShop(t)
    }));
  if (null == l || null == t) return null;
  let k = function(e) {
      switch (e) {
        case f.pNK.INTEGRATIONS:
          return y.intl.string(y.t.k7LGdn);
        case f.pNK.ROLE_SUBSCRIPTIONS:
          return y.intl.string(y.t.bRqiqa);
        case f.pNK.ONBOARDING:
          return y.intl.string(y.t.qZpU3d);
        default:
          return y.intl.string(y.t.MTIXho)
      }
    }(o),
    Z = o === f.pNK.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzc) : y.intl.string(y.t["/djIh4"]),
    j = n === D.oC.GUILD_ONBOARDING,
    v = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (P.Z.isFullServerPreview(t) && (0, O.uL)(f.Z5c.CHANNEL(t)), E.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, d.EI)(t)), (0, A.mL)(t), n && I.Z.open(t, o), o === f.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(t))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: g.notice,
    children: [(0, r.jsxs)(U, {
      onClick: () => v({
        backToSettings: !0
      }),
      className: g.backButton,
      children: [(0, r.jsx)(S.Z, {
        width: 16,
        height: 16,
        direction: S.Z.Directions.LEFT,
        className: g.backArrow
      }), k]
    }), j && R ? (0, r.jsx)("div", {
      className: g.noticeContents,
      children: (0, r.jsx)("div", {
        className: g.noticeText,
        children: y.intl.string(y.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: g.noticeContents,
      children: [(0, r.jsx)("div", {
        className: g.noticeText,
        children: R ? y.intl.formatToPlainString(y.t["0PHahI"], {
          numRoles: Object.keys(l).length
        }) : y.intl.formatToPlainString(y.t.vMlK8v, {
          numRoles: Object.keys(l).length
        })
      }), (0, r.jsx)(c.yRy, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: () => (0, r.jsx)(C.Z, {
          guildId: t
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(U, {
            onClick: n,
            buttonRef: e,
            children: [Z, (0, r.jsx)(p.Z, {
              width: 16,
              height: 16,
              direction: p.Z.Directions.DOWN,
              className: g.selectCaret
            })]
          })
        }
      }), R && (0, r.jsx)(c.DY3, {
        className: g.previewWarning,
        text: y.intl.string(y.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: s.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), M && (0, r.jsx)(c.DY3, {
        className: g.previewWarning,
        text: y.intl.formatToPlainString(y.t.eummvb, {
          maxTiers: m.fF,
          maxProducts: h.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: s.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), R || o === f.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, {
      onClick: () => v({
        backToSettings: !1
      })
    })]
  })
}

function k(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([P.Z], () => P.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(g.settingsWrapper, {
      [g.windows]: (0, R.isWindows)(),
      [g.osx]: (0, R.isMac)()
    }),
    children: (0, r.jsx)(M, {})
  }) : null
}