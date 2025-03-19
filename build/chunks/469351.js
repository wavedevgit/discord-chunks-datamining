/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  t: () => w
}), n(47120), n(627341);
var r = n(200651),
  i = n(192379),
  s = n(278074),
  a = n(399606),
  l = n(481060),
  o = n(76535),
  c = n(395586),
  A = n(204875),
  d = n(715796),
  u = n(411667),
  g = n(434404),
  f = n(962086),
  m = n(225675),
  p = n(703656),
  h = n(430824),
  C = n(594174),
  b = n(63063),
  v = n(267101),
  x = n(294294),
  N = n(310800),
  j = n(833695),
  E = n(981631),
  I = n(176505),
  O = n(388032),
  y = n(570216);

function w(e) {
  let {
    guildId: t,
    hasValidApplication: n
  } = e, {
    listingsLoaded: w
  } = (0, v.eD)(t), P = (0, a.e7)([h.Z], () => h.Z.getGuild(t)), B = (0, a.e7)([C.default], () => C.default.getCurrentUser()), D = (null == P ? void 0 : P.isOwner(B)) === !0, {
    loading: T
  } = (0, o.H)(t), [S, L] = i.useState(n ? "manage_listings" : "payment");
  (0, d.P)(P);
  let R = i.useCallback(() => {
    if (null == P) return;
    let e = h.Z.getRole(P.id, P.getEveryoneRoleId());
    if (null == e) return;
    g.Z.close();
    let t = {
      [e.id]: e
    };
    (0, f.iD)(P.id, {
      type: m.z.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: E.pNK.GUILD_PRODUCTS
    }), (0, p.uL)(E.Z5c.CHANNEL(P.id, I.oC.GUILD_SHOP))
  }, [P]);
  if (!w || T) return (0, r.jsx)(l.$jN, {});
  if (null == P) return null;
  let Q = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.vwX, {
        tag: l.RB0.H1,
        children: O.NW.string(O.t.X6h2g4)
      }), (0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        children: O.NW.format(O.t.xiYuDg, {
          monetizationPolicyLink: b.Z.getArticleURL(E.BhN.CREATOR_POLICY),
          serverProductsSupportLink: b.Z.getCreatorSupportArticleURL(E.BhN.SERVER_PRODUCTS)
        })
      })]
    }),
    Z = (0, r.jsxs)(l.njP, {
      type: "top",
      look: "brand",
      className: y.tabBar,
      "aria-label": O.NW.string(O.t.X6h2g4),
      selectedItem: S,
      onItemSelect: L,
      children: [(0, r.jsx)(A.Z, {
        id: "basic_info",
        disabledTooltip: O.NW.string(O.t.NVDuUV),
        disabled: !n,
        children: O.NW.string(O.t.w27QAQ)
      }), (0, r.jsx)(A.Z, {
        id: "manage_listings",
        disabledTooltip: O.NW.string(O.t.NVDuUV),
        disabled: !n,
        children: O.NW.string(O.t.wlZ1mp)
      }), D ? (0, r.jsx)(l.njP.Item, {
        id: "payment",
        className: y.tabBarItem,
        children: O.NW.string(O.t.YBrFe3)
      }) : null, n ? (0, r.jsx)("div", {
        className: y.previewButton,
        children: (0, r.jsx)(l.zxk, {
          onClick: R,
          color: l.zxk.Colors.PRIMARY,
          size: l.zxk.Sizes.SMALL,
          look: l.zxk.Looks.OUTLINED,
          children: O.NW.string(O.t.vM81yc)
        })
      }) : null]
    }),
    W = (0, s.EQ)(S).with("basic_info", () => (0, r.jsx)(x.Z, {
      guildId: t
    })).with("manage_listings", () => (0, r.jsx)(N.Z, {
      guildId: t
    })).with("payment", () => (0, r.jsx)(j.Z, {
      guildId: t
    })).exhaustive(),
    k = w ? (0, r.jsx)(l.njP.Panel, {
      id: S,
      children: W
    }) : (0, r.jsx)(l.$jN, {});
  return (0, r.jsxs)(c.AL, {
    guildId: t,
    children: [Q, (0, r.jsx)(u.Z, {
      guild: P
    }), (0, r.jsx)("div", {
      className: y.tabBarContainer,
      children: Z
    }), k]
  })
}