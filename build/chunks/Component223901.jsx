/** Chunk was on 59505 **/
/** chunk id: 223901, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91159 = require("./91159.js"),
  Chunk593130 = require("./593130.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk137642 = require("./137642.js");

function d(e) {
  let {
    channel: t,
    onClose: a,
    transitionState: d
  } = e;
  return r.useEffect(() => {
    (0, c.U4)()
  }, []), (0, n.jsx)(o.Y0X, {
    className: i.modal,
    transitionState: d,
    "aria-label": _.intl.string(_.t.B2panJ),
    size: o.CgR.DYNAMIC,
    parentComponent: "ThreadBrowserModal",
    children: (0, n.jsx)(s.Z, {
      className: i.browser,
      channel: t,
      onClose: a
    })
  })
}