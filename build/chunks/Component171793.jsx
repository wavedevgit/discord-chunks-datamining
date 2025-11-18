/** Chunk was on 19345 **/
/** chunk id: 171793, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let {
    transitionState: n,
    onClose: i,
    onGIFSelected: u,
    onSend: c,
    hideFavorites: d = false,
    defaultText: p = o.intl.string(o.t.OrwKgi)
  } = t, [h, C] = l.useState(null), [k, g] = l.useState(p), x = l.useCallback(t => {
    C(t), null == u || u(t)
  }, [u]), S = l.useCallback(() => {
    null != h && (null == c || c(h, k), i())
  }, [h, k, c, i]);
  return (0, e.jsx)(a.Modal, {
    transitionState: n,
    onClose: i,
    title: o.intl.string(o.t["0VinIJ"]),
    input: (0, e.jsx)(s.Kx8, {
      value: k,
      onChange: t => g(t),
      placeholder: p
    }),
    actions: [{
      variant: "secondary",
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: i
    }, {
      variant: "primary",
      text: o.intl.string(o.t.TXNS7S),
      onClick: S,
      loading: false
    }],
    children: (0, e.jsx)(r.Z, {
      hideFavorites: d,
      onSelectGIF: x,
      selectedGIF: h
    })
  })
}