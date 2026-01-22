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
  return (0, e.jsx)(r.W1t, {
    navId: "video-background-context",
    onClose: d.Z_,
    onSelect: n,
    "aria-label": o.intl.string(o.t.ptxALO),
    children: (0, e.jsx)(r.Drp, {
      id: "remove",
      action: () => {
        (0, l.d1)(i) && ((0, a.pW)(i), (0, l.Eo)(i))
      },
      label: (0, l.d1)(i) ? s ? o.intl.string(o.t["xh/P/8"]) : o.intl.string(o.t.oKuPwe) : o.intl.string(o.t.hFYUDN),
      disabled: !(0, l.d1)(i) || s,
      color: "danger"
    })
  })
}