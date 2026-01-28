/** Chunk was on 95153 **/
/** chunk id: 850060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s() {
  let e = a.D_.useSetting(),
    t = a.SI.useSetting();
  return e ? null : (0, r.jsx)(l.sLh, {
    id: "preview-markdown-toggle",
    label: c.intl.string(c.t.sHJ9wZ),
    action: () => {
      let e = !t;
      i.default.track(o.HAw.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: o.JJy.SETTINGS_CONTEXT_MENU
        }
      }), a.SI.updateSetting(e)
    },
    checked: t
  })
}