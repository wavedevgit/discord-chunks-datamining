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
  f = n(703656),
  g = n(944486),
  _ = n(914010),
  h = n(671533),
  m = n(259580),
  O = n(358085),
  y = n(962086),
  P = n(160404),
  S = n(889695),
  v = n(981631),
  C = n(176505),
  w = n(302463),
  I = n(293810),
  x = n(388032),
  j = n(800515);

function E(e) {
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

function N(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(E, {
    onClick: t,
    children: x.intl.string(x.t.R9GHyc)
  })
}

function T() {
  let e = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
    t = (0, l.e7)([g.Z], () => g.Z.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: o,
      isServerShopPreview: O
    } = (0, l.cj)([P.Z], () => ({
      viewingRoles: null != e ? P.Z.getViewingRoles(e) : null,
      backNavigationSection: P.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && P.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && P.Z.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let T = function(e) {
      switch (e) {
        case v.pNK.INTEGRATIONS:
          return x.intl.string(x.t.k7LGdn);
        case v.pNK.ROLE_SUBSCRIPTIONS:
          return x.intl.string(x.t.bRqiqa);
        case v.pNK.ONBOARDING:
          return x.intl.string(x.t.qZpU3d);
        default:
          return x.intl.string(x.t.MTIXho)
      }
    }(i),
    Z = i === v.pNK.ROLE_SUBSCRIPTIONS ? x.intl.string(x.t.hZUCzc) : x.intl.string(x.t["/djIh4"]),
    R = t === C.oC.GUILD_ONBOARDING,
    A = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (P.Z.isFullServerPreview(e) && (0, f.uL)(v.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.EI)(e)), (0, y.mL)(e), n && p.Z.open(e, i), i === v.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: j.notice,
    children: [(0, r.jsxs)(E, {
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
        children: x.intl.string(x.t.PxbiAQ)
      })
    }) : (0, r.jsxs)("div", {
      className: j.noticeContents,
      children: [(0, r.jsx)("div", {
        className: j.noticeText,
        children: o ? x.intl.formatToPlainString(x.t["0PHahI"], {
          numRoles: Object.keys(n).length
        }) : x.intl.formatToPlainString(x.t.vMlK8v, {
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(c.yRy, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(S.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(E, {
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
        text: x.intl.string(x.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), O && (0, r.jsx)(c.DY3, {
        className: j.previewWarning,
        text: x.intl.formatToPlainString(x.t.eummvb, {
          maxTiers: I.fF,
          maxProducts: w.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: a.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), o || i === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(N, {
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
  return (0, l.e7)([P.Z], () => P.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(j.settingsWrapper, {
      [j.windows]: (0, O.isWindows)(),
      [j.osx]: (0, O.isMac)()
    }),
    children: (0, r.jsx)(T, {})
  }) : null
}