/** Chunk was on 30412 **/
/** chunk id: 807431, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk961973 = require("./961973.js"),
  Chunk997509 = require("./997509.js"),
  Chunk36942 = require("./36942.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    guild: t,
    onSelect: n
  } = e, c = (0, u.A)(t.id), h = (0, a.rs)(t.id);
  return (0, l.jsx)(i.W1t, {
    "data-menu-mixed": true,
    onSelect: n,
    navId: "guild-browse-channels-context-menu",
    "aria-label": o.intl.string(o.t.ogxXGq),
    onClose: r.Z_,
    children: (0, l.jsxs)(i.rXV, {
      children: [h && (0, l.jsx)(i.Drp, {
        id: "go-to-settings",
        label: o.intl.string(o.t.X70lV6),
        action: () => {
          s.A.open(t.id, d.BEX.ONBOARDING)
        }
      }), c]
    })
  })
}