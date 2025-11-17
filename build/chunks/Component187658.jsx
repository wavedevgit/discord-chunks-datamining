/** Chunk was on 99414 **/
/** chunk id: 187658, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk716161 = require("./716161.js"),
  Chunk647177 = require("./647177.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    onSelect: n,
    backgroundOption: i,
    optionIsInUse: d
  } = t;
  return (0, r.jsx)(e.v2r, {
    navId: "video-background-context",
    onClose: a.Zy,
    onSelect: n,
    "aria-label": o.intl.string(o.t.ptxALO),
    children: (0, r.jsx)(e.sNh, {
      id: "remove",
      action: () => {
        (0, l.rD)(i) && ((0, s.KH)(i), (0, l.$w)(i))
      },
      label: (0, l.rD)(i) ? d ? o.intl.string(o.t["xh/P/8"]) : o.intl.string(o.t.oKuPwe) : o.intl.string(o.t.hFYUDN),
      disabled: !(0, l.rD)(i) || d,
      color: "danger"
    })
  })
}