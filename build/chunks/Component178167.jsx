/** Chunk was on 36878 **/
/** chunk id: 178167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk873546 = require("./873546.js"),
  Chunk861066 = require("./861066.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990757 = require("./990757.js");

function c(e) {
  let {
    icon: t,
    label: n,
    onClick: l,
    disabled: o
  } = e;
  return (0, i.jsx)(r.h, {
    onClick: l,
    disabled: o,
    "aria-label": n,
    icon: t,
    size: "sm",
    variant: "icon-only"
  })
}

function d(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsx)("div", {
    className: u.topBar,
    children: (0, i.jsx)(s.TF, {
      trailing: l.tq && (0, i.jsx)(c, {
        icon: o.Dio,
        label: a.intl.string(a.t.cpT0Cg),
        onClick: t
      })
    })
  })
}