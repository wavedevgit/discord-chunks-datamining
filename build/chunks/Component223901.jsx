/** Chunk was on 36970 **/
/** chunk id: 223901, original params: a,e,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91159 = require("./91159.js"),
  Chunk593130 = require("./593130.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk225079 = require("./225079.js");

function d(a) {
  let {
    channel: e,
    onClose: s,
    transitionState: d
  } = a;
  return r.useEffect(() => {
    (0, o.U4)()
  }, []), (0, n.jsx)(t.Y0X, {
    className: c.modal,
    transitionState: d,
    "aria-label": l.intl.string(l.t.B2panJ),
    size: t.CgR.DYNAMIC,
    parentComponent: "ThreadBrowserModal",
    children: (0, n.jsx)(i.Z, {
      className: c.browser,
      channel: e,
      onClose: s
    })
  })
}