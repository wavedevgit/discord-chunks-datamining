/** Chunk was on 16169 **/
/** chunk id: 935333, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk812226 = require("./812226.js");
let c = t => {
  let {
    transitionState: e,
    processFiles: n,
    onClose: c
  } = t;
  return a.useEffect(() => {
    (async () => {
      e === s.Dvm.ENTERED && (await n(), c())
    })()
  }, [c, n, e]), (0, i.jsx)(s.Y0X, {
    transitionState: e,
    size: s.CgR.SMALL,
    "aria-label": l.intl.string(l.t["B/HSDQ"]),
    parentComponent: "ImageInputUploadModal",
    children: (0, i.jsxs)(s.hzk, {
      className: r.modalContent,
      children: [(0, i.jsx)(s.$jN, {
        className: r.spinner
      }), (0, i.jsx)(s.hjN, {
        tag: s.RB0.H1,
        titleClassName: r.title,
        title: l.intl.string(l.t["B/HSDQ"]),
        className: r.__invalid_content,
        children: (0, i.jsx)(s.R94, {
          type: s.geA.DESCRIPTION,
          className: r.description,
          children: l.intl.string(l.t.k7OALi)
        })
      })]
    })
  })
}