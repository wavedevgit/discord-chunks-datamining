/** Chunk was on 87549 **/
/** chunk id: 913962, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk746246 = require("./746246.js"),
  Chunk38880 = require("./38880.js");

function b(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, b = (0, r.Dt)();

  function _() {
    n(), (0, c.openUserSettings)(l.n.ACCESSIBILITY_PANEL, {
      section: x.oAB.ACCESSIBILITY,
      scrollPosition: p.rP.LEGACY_CHAT_INPUT
    })
  }
  return (0, i.jsxs)(a.Y0X, {
    transitionState: e,
    "aria-labelledby": b,
    parentComponent: "LegacyChatInputExplanationModal",
    children: [(0, i.jsx)("img", {
      className: h.art,
      src: C,
      alt: ""
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsxs)(s.Z, {
        direction: s.Z.Direction.VERTICAL,
        justify: s.Z.Justify.CENTER,
        children: [(0, i.jsx)(a.X6q, {
          id: b,
          variant: "heading-lg/semibold",
          className: h.title,
          children: u.intl.string(u.t.G9HG5O)
        }), (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          className: h.body,
          children: u.intl.format(u.t.ZtUieH, {
            openSettingsHook: (t, n) => (0, i.jsx)(a.eee, {
              onClick: _,
              children: t
            }, n)
          })
        })]
      })
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(a.zxk, {
          variant: "primary",
          text: u.intl.string(u.t.VdzwlJ),
          type: "button",
          onClick: function() {
            d.default.track(x.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
              enabled: false,
              location: "LegacyChatInputExplanationModal"
            }), o.dN.updateSetting(false), n()
          }
        }), (0, i.jsx)(a.zxk, {
          variant: "secondary",
          text: u.intl.string(u.t.f3Pet7),
          type: "button",
          onClick: n
        })]
      })
    })]
  })
}