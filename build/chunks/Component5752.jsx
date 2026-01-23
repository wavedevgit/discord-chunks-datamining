/** Chunk was on 22305 **/
/** chunk id: 5752, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk987384 = require("./987384.js"),
  Chunk965162 = require("./965162.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    onSelect: n,
    backgroundOption: i,
    optionIsInUse: s
  } = t;
  return (0, e.jsx)(a.W1t, {
    "data-menu-migration-ready": true,
    navId: "video-background-context",
    onClose: r.Z_,
    onSelect: n,
    "aria-label": l.intl.string(l.t.ptxALO),
    children: (0, e.jsx)(a.Drp, {
      id: "remove",
      action: () => {
        (0, o.d1)(i) && ((0, d.pW)(i), (0, o.Eo)(i))
      },
      label: (0, o.d1)(i) ? s ? l.intl.string(l.t["xh/P/8"]) : l.intl.string(l.t.oKuPwe) : l.intl.string(l.t.hFYUDN),
      disabled: !(0, o.d1)(i) || s,
      color: "danger"
    })
  })
}