/** Chunk was on web.js **/
/** chunk id: 457227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk664134 = require("./664134.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk143526 = require("./143526.js");
let u = e => Object.values(e).sort((e, t) => e.order - t.order),
  d = e => {
    let {
      navBarSections: t,
      activeSectionId: n
    } = e, d = {
      [s.h.HOME]: l.intl.string(l.t.uGRXjS),
      [s.h.WHATS_NEW]: l.intl.string(l.t["mfcR/v"]),
      [s.h.BEST_OF_NITRO]: l.intl.string(l.t.xQKkE8),
      [s.h.PLANS]: l.intl.string(l.t.wyNMnm),
      [s.h.COMPARE]: l.intl.string(l.t.pwD7If)
    }, f = u(t);
    return (0, r.jsx)(a.Z, {
      className: c.navBar,
      transparent: true,
      children: (0, r.jsxs)("div", {
        className: c.navBarContent,
        children: [(0, r.jsxs)("div", {
          className: c.navBarSectionContentContainer,
          children: [(0, r.jsx)(i.SrA, {
            className: c.nitroWheelIcon,
            colorClass: c.nitroWheelIconColor
          }), (0, r.jsx)("div", {
            className: c.navBarSectionContent,
            children: f.map(e => {
              let t = n === e.id,
                a = d[e.id];
              return (0, r.jsxs)(i.P3F, {
                className: c.sectionClickable,
                onClick: e.scrollToSection,
                children: [(0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "text-primary",
                  children: a
                }), t && (0, r.jsx)("div", {
                  className: c.sectionUnderline
                })]
              }, a)
            })
          })]
        }), (0, r.jsx)(o.Z, {
          size: "sm",
          variant: "overlay-secondary"
        })]
      })
    })
  }