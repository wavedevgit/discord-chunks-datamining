/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  r: () => x
});
var r = n(200651),
  i = n(192379),
  s = n(580685),
  a = n(793030),
  l = n(442837),
  o = n(481060),
  A = n(944163),
  c = n(65361),
  d = n(910200),
  u = n(434404),
  g = n(600553),
  f = n(999382),
  m = n(548522),
  p = n(651390),
  h = n(981631),
  C = n(388032),
  b = n(653990);
let v = {
  id: "0",
  name: "",
  description: "",
  icon: "",
  customBanner: null,
  onlineCount: 0,
  memberCount: 0,
  traits: [],
  gameApplicationIds: [],
  gameActivity: {},
  visibility: s.k.RESTRICTED,
  brandColorPrimary: null,
  tag: null,
  badge: null,
  badgeColorPrimary: null,
  badgeColorSecondary: null
};

function x(e) {
  let {
    pendingFields: t
  } = e, {
    guild: n,
    guildProfile: x
  } = (0, l.cj)([f.Z], () => ({
    guild: f.Z.getGuild(),
    guildProfile: f.Z.getGuildProfile()
  })), N = null == n ? void 0 : n.id, j = (0, l.e7)([A.Z], () => A.Z.get(N)), {
    fetchGuildProfile: E
  } = (0, c.u)(N), I = (null == x ? void 0 : x.visibility) == null || !s.Y.VISIBLE.has(null == x ? void 0 : x.visibility), O = (null == x ? void 0 : x.visibility) === s.k.PUBLIC_WITH_RECRUITMENT, y = (0, g.Dj)({
    guildId: N,
    location: "recruitment"
  });
  i.useEffect(() => {
    null != N && E()
  }, [N, E]);
  let w = i.useMemo(() => null == n || null == x ? v : x, [n, x]),
    P = i.useCallback(() => {
      (null == n ? void 0 : n.id) != null && (O ? u.Z.updateGuildProfile(n.id, {
        visibility: s.k.PUBLIC
      }) : u.Z.updateGuildProfile(n.id, {
        visibility: s.k.PUBLIC_WITH_RECRUITMENT
      }))
    }, [null == n ? void 0 : n.id, O]),
    B = i.useCallback(() => {
      u.Z.setSection(h.pNK.PROFILE)
    }, []);
  if (null == n) return null;
  let D = null != t ? t : null == j ? void 0 : j.formFields;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: C.NW.string(C.t.AHJddH)
    }), (0, r.jsx)(a.xv, {
      tag: "p",
      variant: "text-sm/medium",
      color: "text-secondary",
      className: b.applicationBody,
      children: C.NW.string(C.t.Z7TCtb)
    }), (0, r.jsx)(p.c, {
      guildId: n.id
    }), (0, r.jsx)("div", {
      className: b.form,
      children: null != D ? (0, r.jsx)(m.y, {
        guild: n,
        formFields: D
      }) : (0, r.jsx)(o.$jN, {})
    }), y ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: b.divider
      }), (0, r.jsxs)(o.hjN, {
        className: b.twoColumnContainer,
        children: [(0, r.jsxs)("div", {
          className: b.column,
          children: [(0, r.jsx)(o.j7V, {
            onChange: P,
            value: O,
            hideBorder: !0,
            disabled: I,
            children: C.NW.string(C.t["N/0239"])
          }), (0, r.jsx)(a.xv, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: C.NW.string(C.t["3TSZYG"])
          }), I && (0, r.jsx)(a.xv, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: C.NW.format(C.t.Bk0VOj, {
              profileLink: (e, t) => (0, r.jsx)(o.eee, {
                onClick: B,
                children: e
              }, t)
            })
          })]
        }), (0, r.jsx)("div", {
          className: b.column,
          children: (0, r.jsxs)("div", {
            className: b.previewWrapper,
            children: [(0, r.jsx)("div", {
              className: b.gradient
            }), (0, r.jsx)(d.ZP, {
              className: b.preview,
              profile: w,
              CTAOverride: (0, r.jsx)(o.zxk, {
                className: b.previewButton,
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                children: C.NW.string(C.t["7XdMW1"])
              })
            })]
          })
        })]
      })]
    }) : null]
  })
}