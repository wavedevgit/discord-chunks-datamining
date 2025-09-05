/** Chunk was on 87549 **/
/** chunk id: 913962, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk746246 = require("./746246.js"),
  Chunk38880 = require("./38880.js");

function C(t) {
  let {
    onClose: n,
    transitionState: a
  } = t, C = (0, o.Dt)();

  function b() {
    n(), r.Z.open(d.oAB.ACCESSIBILITY, null, {
      scrollPosition: x.rP.LEGACY_CHAT_INPUT
    })
  }
  return (0, e.jsxs)(i.Y0X, {
    transitionState: a,
    "aria-labelledby": C,
    parentComponent: "LegacyChatInputExplanationModal",
    children: [(0, e.jsx)("img", {
      className: u.art,
      src: h,
      alt: ""
    }), (0, e.jsx)(i.hzk, {
      children: (0, e.jsxs)(s.Z, {
        direction: s.Z.Direction.VERTICAL,
        justify: s.Z.Justify.CENTER,
        children: [(0, e.jsx)(i.X6q, {
          id: C,
          variant: "heading-lg/semibold",
          className: u.title,
          children: p.intl.string(p.t.G9HG5O)
        }), (0, e.jsx)(i.Text, {
          variant: "text-md/normal",
          className: u.body,
          children: p.intl.format(p.t.ZtUieH, {
            openSettingsHook: (t, n) => (0, e.jsx)(i.eee, {
              onClick: b,
              children: t
            }, n)
          })
        })]
      })
    }), (0, e.jsx)(i.mzw, {
      children: (0, e.jsxs)(i.hE2, {
        direction: "horizontal-reverse",
        children: [(0, e.jsx)(i.zxk, {
          variant: "primary",
          text: p.intl.string(p.t.VdzwlJ),
          type: "button",
          onClick: function() {
            c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
              enabled: false,
              location: "LegacyChatInputExplanationModal"
            }), l.dN.updateSetting(false), n()
          }
        }), (0, e.jsx)(i.zxk, {
          variant: "secondary",
          text: p.intl.string(p.t.f3Pet7),
          type: "button",
          onClick: n
        })]
      })
    })]
  })
}