/** Chunk was on 51724 **/
n.d(t, {
  Z: () => C
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  c = n(607070),
  d = n(100527),
  u = n(906732),
  m = n(66595),
  p = n(535322),
  g = n(477734),
  h = n(626135),
  f = n(881100),
  x = n(981631),
  b = n(388032),
  N = n(969676);
let _ = e => e ? b.NW.string(b.t.QX14gI) : b.NW.string(b.t.RGadQU),
  E = e => {
    let {
      isShowingAll: t,
      onClick: n
    } = e;
    return (0, r.jsxs)(o.P3F, {
      onClick: n,
      className: N.customButton,
      children: [t ? b.NW.string(b.t.maZaNz) : b.NW.string(b.t["37C26e"]), t ? (0, r.jsx)(o.u04, {
        size: "md",
        color: "currentColor",
        className: N.arrow
      }) : (0, r.jsx)(o.CJ0, {
        size: "md",
        color: "currentColor",
        className: N.arrow
      })]
    })
  },
  j = e => {
    let {
      title: t,
      description: n,
      className: i,
      imageSource: s,
      imageClassName: l,
      titleBadge: c,
      isNew: g = !1,
      isEarlyAccess: h = !1
    } = e, {
      analyticsLocations: f
    } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, r.jsx)(u.Gt, {
      value: f,
      children: (0, r.jsxs)("div", {
        className: a()(N.perkCard, i),
        children: [g ? (0, r.jsx)(p.Z, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, h ? (0, r.jsx)(m.Z, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, r.jsx)("img", {
          src: s,
          alt: "",
          className: a()(l, N.perksCardArt)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)(o.X6q, {
            variant: "heading-lg/extrabold",
            className: N.perkCardHeading,
            children: [t, " ", c]
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: N.perkCardDescription,
            children: "function" == typeof n ? n(f) : n
          })]
        })]
      })
    })
  },
  C = e => {
    let {
      className: t,
      isSubscriberNitroHome: n = !1
    } = e, [s, d] = i.useState(!1), m = (0, f.N)({
      styles: N
    }), p = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
      analyticsLocations: b
    } = (0, u.ZP)(), C = (0, g._f)(), O = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, C ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
    return (0, r.jsxs)("div", {
      className: a()(N.perksContainer, t, {
        [N.partiallyHidden]: n && !s,
        [N.subscriberNitroHome]: n,
        [N.reducedMotion]: p
      }),
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-xxl/extrabold",
        className: N.perksTitle,
        children: _(n)
      }), (0, r.jsx)("div", {
        className: a()(N.perkCardContainer, {
          [N.perkCardContainerExpanded]: s
        }),
        children: O.map(e => null != e && (0, r.jsx)(j, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), e.title))
      }), n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a()({
            [N.sizeGizmo]: !s,
            [N.sizeGizmoExpanded]: s
          }),
          children: (0, r.jsx)(E, {
            onClick: () => {
              h.default.track(x.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                location_stack: b,
                was_expanded: s
              }), d(!s)
            },
            isShowingAll: s
          })
        }), (0, r.jsx)("div", {
          className: a()(N.cover, {
            [N.hidden]: s
          })
        })]
      })]
    })
  }