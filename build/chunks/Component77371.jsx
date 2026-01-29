/** Chunk was on 4670 **/
/** chunk id: 77371, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  C: () => E
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
  Chunk903427 = require("./903427.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk755087 = require("./755087.js");
let E = (0, Chunk419954.E2)(Chunk780964.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
  useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
  usePredicate: Chunk903427.P,
  Component: function() {
    let e = (0, s.bG)([o.A], () => {
        let {
          shortcut: e
        } = o.A.getModeOptions();
        return e
      }),
      t = S.intl.format(S.t.HVvn5T, {
        onClick: () => (0, T.openUserSettings)(d.X.KEYBINDS_PANEL, {
          section: A.nc_.KEYBINDS
        })
      });
    return (0, n.jsx)(l.D0$, {
      label: S.intl.string(S.t["o+BJQR"]),
      description: t,
      layout: "horizontal-responsive",
      children: (0, n.jsx)("div", {
        className: _.e,
        children: (0, n.jsx)(a.A, {
          defaultValue: e,
          onChange: e => r.A.setMode(A.TBI.PUSH_TO_TALK, {
            shortcut: e
          })
        })
      })
    })
  }
})