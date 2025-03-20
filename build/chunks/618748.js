/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => W
}), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(204875),
  l = n(715796),
  o = n(434404),
  A = n(999382),
  c = n(962086),
  d = n(225675),
  u = n(703656),
  g = n(577275),
  f = n(430824),
  m = n(594174),
  p = n(823379),
  h = n(730647),
  C = n(584825),
  b = n(723047),
  v = n(303737),
  x = n(568074),
  N = n(411667),
  j = n(903773),
  E = n(822531),
  I = n(909656),
  O = n(210591),
  y = n(927731),
  w = n(798680),
  P = n(509026),
  B = n(981631),
  D = n(176505),
  T = n(829857),
  S = n(388032),
  L = n(248022);

function R(e) {
  let {
    application: t,
    guild: n
  } = e, s = (0, C.YB)(n.id), a = (0, C.qi)(n.id), l = a.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, i.e7)([f.Z], () => f.Z.getRoles(n.id)), A = a.map(e => o[e.role_id]).some(e => null != e && 0 !== e.color), c = a.some(e => e.role_benefits.benefits.length > 0), d = null != t && n.hasFeature(B.oNc.ROLE_SUBSCRIPTIONS_ENABLED), u = [{
    title: S.NW.string(S.t.p2Rsdn),
    items: [{
      description: S.NW.string(S.t.zbO7fX),
      completed: d
    }]
  }, {
    title: S.NW.string(S.t["/CfKoK"]),
    items: [{
      description: S.NW.string(S.t.zvuI3d),
      completed: !0
    }, {
      description: S.NW.string(S.t.cVcEYG),
      completed: (null == s ? void 0 : s.description) != null && "" !== s.description
    }, {
      description: S.NW.string(S.t["88XnXF"]),
      completed: (null == s ? void 0 : s.cover_image_asset) != null
    }]
  }, {
    title: S.NW.string(S.t.pXbGYW),
    items: [{
      description: S.NW.string(S.t.pCxWKC),
      completed: l
    }, {
      description: S.NW.string(S.t["+amv5e"]),
      completed: A
    }, {
      description: S.NW.string(S.t["/P03Cw"]),
      completed: c
    }]
  }];
  return (0, r.jsx)(O.Z, {
    children: u
  })
}

function Q(e) {
  let {
    application: t
  } = e, {
    teams: n
  } = (0, g.Z)({
    refreshOnDepChange: !1
  }), i = n.find(e => {
    var n;
    return e.id === (null == t ? void 0 : null === (n = t.team) || void 0 === n ? void 0 : n.id)
  }), a = [T.C.ACTION_REQUIRED, T.C.BLOCKED, T.C.SUSPENDED];
  return (null == i ? void 0 : i.payout_account_status) != null && a.includes(null == i ? void 0 : i.payout_account_status) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.LZC, {
      size: 16
    }), (0, r.jsx)(j.Z, {
      children: S.NW.format(S.t.Yo0ZBw, {
        url: B.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id)
      })
    }), (0, r.jsx)(s.LZC, {
      size: 16
    })]
  }) : null
}

function W(e) {
  let t, {
      guild: n,
      application: s
    } = e,
    a = (0, i.e7)([A.Z], () => A.Z.getProps().subsection),
    o = null != s && n.hasFeature(B.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, l.P)(n), t = o ? a === B.KsC.ROLE_SUBSCRIPTION_EMOJI ? w.ue.EMOJIS : w.ue.TIERS : w.ue.PAYMENT, (0, r.jsx)(h.l, {
    guildId: n.id,
    refetchOnMount: !0,
    children: (0, r.jsx)(b.in, {
      guildId: n.id,
      children: (0, r.jsx)(w.M7, {
        initialTab: t,
        children: (0, r.jsx)(Z, {
          guild: n,
          application: s
        })
      })
    })
  })
}

function Z(e) {
  let t, {
      guild: n,
      application: l
    } = e,
    A = null != l && n.hasFeature(B.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: g,
      setCurrentTab: C
    } = (0, w.dw)(),
    b = (0, h.f)(),
    j = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
    O = (0, x.Z)(n.id),
    T = n.isOwner(j),
    W = () => {
      let e = f.Z.getRole(n.id, n.getEveryoneRoleId());
      if (null == e) return;
      o.Z.close();
      let t = {
        [e.id]: e
      };
      (0, c.iD)(n.id, {
        type: d.z.SERVER_SHOP,
        roles: t,
        initialTab: "role_subscriptions",
        returnToSection: B.pNK.ROLE_SUBSCRIPTIONS
      }), (0, v.be)(n.id), (0, u.uL)(B.Z5c.CHANNEL(n.id, D.oC.ROLE_SUBSCRIPTIONS))
    };
  if (!b) return (0, r.jsx)(s.$jN, {});
  switch (g) {
    case w.ue.BASIC_INFO:
      t = (0, r.jsx)(I.Z, {
        guild: n
      });
      break;
    case w.ue.TIERS:
      t = (0, r.jsx)(y.Z, {
        guildId: n.id
      });
      break;
    case w.ue.PAYMENT:
      t = (0, r.jsx)(E.Z, {
        guild: n
      });
      break;
    case w.ue.EMOJIS:
      t = (0, r.jsx)(P.Z, {
        guild: n
      });
      break;
    default:
      (0, p.vE)(g)
  }
  return (0, r.jsxs)("div", {
    className: L.container,
    children: [(0, r.jsxs)("div", {
      className: L.mainContent,
      children: [(0, r.jsx)(s.vwX, {
        tag: "h1",
        children: S.NW.string(S.t["KzCF//"])
      }), (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        children: S.NW.string(S.t.KyGv0t)
      }), (0, r.jsx)(N.Z, {
        guild: n
      }), A && (0, r.jsx)(Q, {
        application: l
      }), (0, r.jsxs)("div", {
        className: L.tabBarContainer,
        children: [(0, r.jsxs)(s.njP, {
          className: L.tabBar,
          "aria-label": S.NW.string(S.t["+1H47u"]),
          selectedItem: g,
          type: "top",
          look: "brand",
          onItemSelect: C,
          children: [(0, r.jsx)(a.Z, {
            id: w.ue.BASIC_INFO,
            disabledTooltip: S.NW.string(S.t.NVDuUV),
            disabled: !A,
            children: S.NW.string(S.t["/CfKoK"])
          }), (0, r.jsx)(a.Z, {
            id: w.ue.TIERS,
            disabledTooltip: S.NW.string(S.t.NVDuUV),
            disabled: !A,
            children: S.NW.string(S.t.pXbGYW)
          }), (0, r.jsx)(a.Z, {
            id: w.ue.EMOJIS,
            disabledTooltip: S.NW.string(S.t.NVDuUV),
            disabled: !A,
            children: S.NW.string(S.t.XBkDoK)
          }), T ? (0, r.jsx)(s.njP.Item, {
            className: L.__invalid_tabBarItem,
            id: w.ue.PAYMENT,
            children: S.NW.string(S.t.p2Rsdn)
          }) : null]
        }), A && (0, r.jsx)("div", {
          className: L.previewButton,
          children: (0, r.jsx)(s.ua7, {
            text: S.NW.string(S.t["1wCH4O"]),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(s.zxk, {
                disabled: O,
                onMouseEnter: O ? t : void 0,
                onMouseLeave: O ? n : void 0,
                onClick: W,
                color: s.zxk.Colors.PRIMARY,
                size: s.zxk.Sizes.SMALL,
                grow: !O,
                look: s.zxk.Looks.OUTLINED,
                className: L.previewButton,
                children: S.NW.string(S.t.vM81yc)
              })
            }
          })
        })]
      }), t]
    }), (0, r.jsx)(R, {
      application: l,
      guild: n
    })]
  })
}