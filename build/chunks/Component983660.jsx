/** Chunk was on 63141 **/
/** chunk id: 983660, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303010 = require("./303010.js"),
  Chunk215916 = require("./215916.js");

function p(e) {
  let {
    locked: t
  } = e, [n, p] = (0, l.US)(t ? [] : [o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], true, true);
  return (r.useEffect(() => {
    if (!t && n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX) return () => {
      n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && p(a.L.AUTO_DISMISS)
    }
  }, [t, p, n]), t || n !== o.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX) ? null : (0, i.jsx)("div", {
    className: d.overlayInprocessBackgroundNux,
    children: (0, i.jsxs)("div", {
      className: d.mainContainer,
      children: [(0, i.jsxs)("div", {
        className: d.mainTitleContainer,
        children: [(0, i.jsx)(s.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          className: d.mainTitle,
          children: c.intl.format(c.t.Eg5ybE, {})
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: d.mainTitleBody,
          children: c.intl.format(c.t.KkM0s8, {})
        })]
      }), (0, i.jsxs)("div", {
        className: d.widgetCalloutContainer,
        children: [(0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(s.qjv, {}), (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.intl.string(c.t.S6VRyK)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(s.Dkj, {}), (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.intl.string(c.t.xq8CKY)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(s.Odl, {}), (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.intl.string(c.t.GwpRe0)
          })]
        }), (0, i.jsxs)("div", {
          className: d.widgetCallout,
          children: [(0, i.jsx)(s.KY1, {}), (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "interactive-normal",
            children: c.intl.string(c.t.VUoC5F)
          })]
        })]
      }), (0, i.jsx)("div", {
        children: (0, i.jsx)("img", {
          src: u.Z,
          alt: c.intl.string(c.t.mdXZh1),
          className: d.nuxImage
        })
      })]
    })
  })
}