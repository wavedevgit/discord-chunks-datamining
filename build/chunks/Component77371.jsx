/** Chunk was on 28979 **/
/** chunk id: 77371, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  C: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk903427 = require("./903427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk755087 = require("./755087.js");
let g = (0, Chunk419954.E2)(Chunk780964.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
  useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
  usePredicate: Chunk903427.P,
  Component: function() {
    let t = (0, s.bG)([o.A], () => {
        let {
          shortcut: t
        } = o.A.getModeOptions();
        return t
      }),
      e = E.intl.format(E.t.HVvn5T, {
        onClick: () => (0, A.openUserSettings)(T.X.KEYBINDS_PANEL, {
          section: S.nc_.KEYBINDS
        })
      });
    return (0, n.jsx)(l.D0$, {
      label: E.intl.string(E.t["o+BJQR"]),
      description: e,
      layout: "horizontal-responsive",
      children: (0, n.jsx)("div", {
        className: _.e,
        children: (0, n.jsx)(u.A, {
          defaultValue: t,
          onChange: t => r.A.setMode(S.TBI.PUSH_TO_TALK, {
            shortcut: t
          })
        })
      })
    })
  }
})