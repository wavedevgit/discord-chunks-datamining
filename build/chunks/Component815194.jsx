/** Chunk was on 77069 **/
/** chunk id: 815194, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk595373 = require("./595373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk318120 = require("./318120.js");
let I = (0, Chunk509613.ON)(Chunk313789.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)],
  usePredicate: Chunk595373.J,
  Component: function() {
    let t = (0, Chunk442837.e7)([Chunk131951.Z], () => {
        let {
          shortcut: t
        } = Chunk131951.Z.getModeOptions();
        return module
      }),
      e = Chunk388032.intl.format(Chunk388032.t.HVvn5T, {
        onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.KEYBINDS_PANEL, {
          section: Chunk981631.oAB.KEYBINDS
        })
      });
    return (0, Chunk54381.jsx)(Chunk793030.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t["o+BJQR"]),
      description: exports,
      layout: "horizontal-responsive",
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk318120.keybindContainer,
        children: (0, Chunk54381.jsx)(Chunk825209.Z, {
          defaultValue: module,
          onChange: t => u.Z.setMode(S.pM4.PUSH_TO_TALK, {
            shortcut: t
          })
        })
      })
    })
  }
})