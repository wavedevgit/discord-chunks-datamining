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
  let e = r.dN.useSetting(),
    t = r.R$.useSetting();
  return e ? null : (0, i.jsx)(l.S89, {
    id: "preview-markdown-toggle",
    label: s.intl.string(s.t.sHJ9wZ),
    action: () => {
      let e = !t;
      a.default.track(o.rMx.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: o.jXE.SETTINGS_CONTEXT_MENU
        }
      }), r.R$.updateSetting(e)
    },
    checked: t
  })
}