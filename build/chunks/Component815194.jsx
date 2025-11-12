/** Chunk was on 9452 **/
/** chunk id: 815194, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk595373 = require("./595373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk53179 = require("./53179.js");

function I() {
  let t = (0, Chunk442837.e7)([Chunk131951.Z], () => {
    let {
      shortcut: t
    } = Chunk131951.Z.getModeOptions();
    return module
  });
  return (0, Chunk951288.jsx)(Chunk793030.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t["o+BJQR"]),
    layout: "horizontal",
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk53179.keybindContainer,
      children: (0, Chunk951288.jsx)(Chunk825209.Z, {
        defaultValue: module,
        onChange: t => r.Z.setMode(d.pM4.PUSH_TO_TALK, {
          shortcut: t
        })
      })
    })
  })
}
let g = (0, Chunk509613.ON)(Chunk313789.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
  usePredicate: Chunk595373.p,
  render: () => (0, Chunk951288.jsx)(I, {}),
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)]
})