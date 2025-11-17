/** Chunk was on 2535 **/
/** chunk id: 594791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c() {
  let e = Chunk695346.dN.useSetting(),
    t = Chunk695346.R$.useSetting();
  return module ? null : (0, Chunk54381.jsx)(Chunk481060.S89, {
    id: "preview-markdown-toggle",
    label: Chunk388032.intl.string(Chunk388032.t.sHJ9wZ),
    action: () => {
      let e = !exports;
      Chunk626135.default.track(Chunk981631.rMx.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: module,
        location: {
          section: Chunk981631.jXE.SETTINGS_CONTEXT_MENU
        }
      }), Chunk695346.R$.updateSetting(module)
    },
    checked: exports
  })
}