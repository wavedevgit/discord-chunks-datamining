/** Chunk was on 67684 **/
n.d(t, {
  Z: () => j,
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
  d = n(819553),
  u = n(17181),
  _ = n(303737),
  b = n(434404),
  g = n(703656),
  f = n(944486),
  m = n(914010),
  p = n(671533),
  h = n(259580),
  C = n(358085),
  S = n(962086),
  O = n(160404),
  v = n(889695),
  x = n(981631),
  P = n(176505),
  T = n(302463),
  y = n(293810),
  N = n(388032),
  I = n(230206);

function w(e) {
  let {
    className: t,
    onClick: n,
    children: o
  } = e;
  return (0, r.jsx)(c.zxk, {
    className: i()(I.button, t),
    innerClassName: I.buttonInner,
    look: c.zxk.Looks.OUTLINED,
    color: c.zxk.Colors.WHITE,
    size: c.zxk.Sizes.NONE,
    onClick: n,
    children: o
  })
}

function k(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(w, {
    onClick: t,
    children: N.NW.string(N.t.R9GHyc)
  })
}

function j() {
  let e = (0, a.e7)([m.Z], () => m.Z.getGuildId()),
    t = (0, a.e7)([f.Z], () => f.Z.getChannelId(e)),
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
  let j = function(e) {
      switch (e) {
        case x.pNK.INTEGRATIONS:
          return N.NW.string(N.t.k7LGdn);
        case x.pNK.ROLE_SUBSCRIPTIONS:
          return N.NW.string(N.t.bRqiqa);
        case x.pNK.ONBOARDING:
          return N.NW.string(N.t.qZpU3d);
        default:
          return N.NW.string(N.t.MTIXho)
      }
    }(o),
    R = o === x.pNK.ROLE_SUBSCRIPTIONS ? N.NW.string(N.t.hZUCzc) : N.NW.string(N.t["/djIh4"]),
    E = t === P.oC.GUILD_ONBOARDING,
    A = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (O.Z.isFullServerPreview(e) && (0, g.uL)(x.Z5c.CHANNEL(e)), d.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, u.EI)(e)), (0, S.mL)(e), n && b.Z.open(e, o), o === x.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, r.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: I.notice,
    children: [(0, r.jsxs)(w, {
      onClick: () => A({
        backToSettings: !0
      }),
      className: I.backButton,
      children: [(0, r.jsx)(p.Z, {
        width: 16,
        height: 16,
        direction: p.Z.Directions.LEFT,
        className: I.backArrow
      }), j]
    }), E && i ? (0, r.jsx)("div", {
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
      }), (0, r.jsx)(c.yRy, {
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
            children: [R, (0, r.jsx)(h.Z, {
              width: 16,
              height: 16,
              direction: h.Z.Directions.DOWN,
              className: I.selectCaret
            })]
          })
        }
      }), i && (0, r.jsx)(c.DY3, {
        className: I.previewWarning,
        text: N.NW.string(N.t.mW4DUF),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), C && (0, r.jsx)(c.DY3, {
        className: I.previewWarning,
        text: N.NW.formatToPlainString(N.t.eummvb, {
          maxTiers: y.fF,
          maxProducts: T.dD
        }),
        children: (0, r.jsx)(c.P4T, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), i || o === x.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(k, {
      onClick: () => A({
        backToSettings: !1
      })
    })]
  })
}

function R(e) {
  let {
    guildId: t
  } = e;
  return (0, a.e7)([O.Z], () => O.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: i()(I.settingsWrapper, {
      [I.windows]: (0, C.isWindows)(),
      [I.osx]: (0, C.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}