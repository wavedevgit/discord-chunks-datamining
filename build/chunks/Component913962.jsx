/** Chunk was on 87549 **/
/** chunk id: 913962, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38880 = require("./38880.js");

function A(t) {
  let {
    onClose: n,
    transitionState: i
  } = t;

  function A() {
    n();
    let t = (0, l.Gl)("LegacyChatInputExplanationModal");
    (0, c.openUserSettings)(t ? r.n.ENABLE_LEGACY_CHAT_INPUT : r.n.ACCESSIBILITY_PANEL, {
      section: d.oAB.ACCESSIBILITY,
      scrollPosition: t ? true : C.rP.LEGACY_CHAT_INPUT
    })
  }
  return (0, e.jsx)(a.ExpressiveModal, {
    transitionState: i,
    title: u.intl.string(u.t.G9HG5O),
    subtitle: u.intl.format(u.t.ZtUieE, {
      openSettingsHook: (t, n) => (0, e.jsx)(o.eee, {
        onClick: A,
        children: t
      }, n)
    }),
    onClose: n,
    graphic: {
      type: "image",
      src: E
    },
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t.f3Pet9),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.VdzwlA),
      onClick: function() {
        p.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: false,
          location: "LegacyChatInputExplanationModal"
        }), s.dN.updateSetting(false), n()
      }
    }]
  })
}