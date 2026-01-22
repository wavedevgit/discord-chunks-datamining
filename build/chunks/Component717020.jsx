/** Chunk was on 76429 **/
/** chunk id: 717020, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk575621 = require("./575621.js");

function _(t) {
  let {
    onClose: n,
    transitionState: i
  } = t;

  function _() {
    n();
    let t = (0, r.WJ)("LegacyChatInputExplanationModal");
    (0, c.openUserSettings)(t ? l.X.ENABLE_LEGACY_CHAT_INPUT : l.X.ACCESSIBILITY_PANEL, {
      section: C.nc_.ACCESSIBILITY,
      scrollPosition: t ? true : d.Yu.LEGACY_CHAT_INPUT
    })
  }
  return (0, e.jsx)(a.ExpressiveModal, {
    transitionState: i,
    title: u.intl.string(u.t.G9HG5O),
    subtitle: u.intl.format(u.t.ZtUieE, {
      openSettingsHook: (t, n) => (0, e.jsx)(o.MzZ, {
        onClick: _,
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
        p.default.track(C.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: false,
          location: "LegacyChatInputExplanationModal"
        }), s.D_.updateSetting(false), n()
      }
    }]
  })
}