/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(704215),
  a = n(481060),
  s = n(243778),
  l = n(921944),
  c = n(388032),
  d = n(968714),
  u = n(215916);

function f(e) {
  let {
    locked: t
  } = e, [n, f] = (0, s.US)(t ? [] : [o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], void 0, !0);
  return (r.useEffect(() => {
    if (!t && n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX) return () => {
      n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && f(l.L.AUTO_DISMISS)
    }
  }, [t, f, n]), t || n !== o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX) ? null : (0, i.jsx)("div", {
    className: d.overlayInprocessBackgroundNux,
    children: (0, i.jsxs)("div", {
      className: d.mainContainer,
      children: [(0, i.jsxs)("div", {
        className: d.mainTitleContainer,
        children: [(0, i.jsx)(a.X6q, {
          variant: "heading-xl/medium",
          color: "header-primary",
          className: d.mainTitle,
          children: c.NW.format(c.t.Eg5ybG, {})
        }), (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: d.mainTitleBody,
          children: c.NW.format(c.t.KkM0s7, {})
        })]
      }), (0, i.jsxs)("div", {
        className: d.widgetCalloutContainer,
        children: [(0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(a.qjv, {}), (0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.NW.string(c.t.S6VRyM)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(a.Dkj, {}), (0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.NW.string(c.t.xq8CKS)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(a.Odl, {}), (0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.NW.string(c.t.GwpRe3)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(a.KY1, {}), (0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.NW.string(c.t.VUoC5O)
          })]
        })]
      }), (0, i.jsx)("div", {
        children: (0, i.jsx)("img", {
          src: u.Z,
          alt: c.NW.string(c.t.mdXZh4),
          className: d.nuxImage
        })
      })]
    })
  })
}