/** Chunk was on 87549 **/
/** chunk id: 913962, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38880 = require("./38880.js");

function g(t) {
  let {
    onClose: n,
    transitionState: i
  } = t;

  function g() {
    n(), (0, c.openUserSettings)(r.n.ACCESSIBILITY_PANEL, {
      section: p.oAB.ACCESSIBILITY,
      scrollPosition: d.rP.LEGACY_CHAT_INPUT
    })
  }
  return (0, e.jsx)(a.ExpressiveModal, {
    transitionState: i,
    title: u.intl.string(u.t.G9HG5O),
    subtitle: u.intl.format(u.t.ZtUieE, {
      openSettingsHook: (t, n) => (0, e.jsx)(o.eee, {
        onClick: g,
        children: t
      }, n)
    }),
    onClose: n,
    graphic: {
      type: "image",
      src: C
    },
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t.f3Pet9),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.VdzwlA),
      onClick: function() {
        l.default.track(p.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: false,
          location: "LegacyChatInputExplanationModal"
        }), s.dN.updateSetting(false), n()
      }
    }]
  })
}