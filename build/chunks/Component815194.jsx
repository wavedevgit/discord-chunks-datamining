/** Chunk was on 77069 **/
/** chunk id: 815194, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => g
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
let g = (0, Chunk509613.ON)(Chunk313789.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
  useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
  usePredicate: Chunk595373.J,
  Component: function() {
    let t = (0, s.e7)([o.Z], () => {
        let {
          shortcut: t
        } = o.Z.getModeOptions();
        return t
      }),
      e = d.intl.format(d.t.HVvn5T, {
        onClick: () => (0, S.openUserSettings)(T.n.KEYBINDS_PANEL, {
          section: E.oAB.KEYBINDS
        })
      });
    return (0, i.jsx)(l.gNt, {
      label: d.intl.string(d.t["o+BJQR"]),
      description: e,
      layout: "horizontal-responsive",
      children: (0, i.jsx)("div", {
        className: _.keybindContainer,
        children: (0, i.jsx)(r.Z, {
          defaultValue: t,
          onChange: t => u.Z.setMode(E.pM4.PUSH_TO_TALK, {
            shortcut: t
          })
        })
      })
    })
  }
})