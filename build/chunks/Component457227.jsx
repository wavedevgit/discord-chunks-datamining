/** Chunk was on 75708 **/
/** chunk id: 457227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./642613.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk664134 = require("./664134.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk60503 = require("./60503.js");
let d = e => Object.values(e).sort((e, t) => e.order - t.order),
  u = e => {
    let {
      navBarSections: t,
      activeSectionId: n
    } = e, u = {
      [l.h.HOME]: o.intl.string(o.t.uGRXjY),
      [l.h.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
      [l.h.BEST_OF_NITRO]: o.intl.string(o.t.xQKkEx),
      [l.h.PLANS]: o.intl.string(o.t.wyNMnp),
      [l.h.COMPARE]: o.intl.string(o.t.pwD7IS)
    }, m = d(t);
    return (0, i.jsx)(s.Z, {
      className: c.navBar,
      transparent: true,
      children: (0, i.jsxs)("div", {
        className: c.navBarContent,
        children: [(0, i.jsxs)("div", {
          className: c.navBarSectionContentContainer,
          children: [(0, i.jsx)(r.SrA, {
            className: c.nitroWheelIcon,
            colorClass: c.nitroWheelIconColor
          }), (0, i.jsx)("div", {
            className: c.navBarSectionContent,
            children: m.map(e => {
              let t = n === e.id,
                s = u[e.id];
              return (0, i.jsxs)(r.P3F, {
                className: c.sectionClickable,
                onClick: e.scrollToSection,
                children: [(0, i.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  color: "text-primary",
                  children: s
                }), t && (0, i.jsx)("div", {
                  className: c.sectionUnderline
                })]
              }, s)
            })
          })]
        }), (0, i.jsx)(a.Z, {
          size: "sm",
          variant: "overlay-secondary"
        })]
      })
    })
  }