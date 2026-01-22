/** Chunk was on 35023 **/
/** chunk id: 148210, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  let {
    initialCustomMessage: n,
    onSubmit: i,
    onClose: c,
    transitionState: u
  } = t, [d, h] = s.useState(n);
  return (0, e.jsx)(a.Modal, {
    onClose: c,
    transitionState: u,
    title: o.intl.string(o.t.Df4aUN),
    subtitle: o.intl.string(o.t.eOWEmL),
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: () => {
        c()
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.bt75uw),
      onClick: () => {
        i(d)
      }
    }],
    children: (0, e.jsx)(l.fs1, {
      placeholder: o.intl.string(o.t.gDZw7A),
      value: d,
      onChange: h,
      maxLength: r.TZ
    })
  })
}