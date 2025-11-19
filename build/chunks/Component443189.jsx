/** Chunk was on 6074 **/
/** chunk id: 443189, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963705 = require("./963705.js");

function p(t) {
  let {
    source: e,
    onClose: s,
    transitionState: p
  } = t;
  return n.useEffect(() => {
    c.default.track(r.rMx.OPEN_MODAL, {
      type: r.jXE.CONTACT_SYNC_NC_MODAL,
      source: {
        location: e
      }
    })
  }, [e]), (0, i.jsx)(a.Ioy, {
    transitionState: p,
    graphic: {
      src: u,
      type: "image"
    },
    title: o.intl.string(o.t.fdR8Hf),
    subtitle: o.intl.string(o.t["JXyNq+"]),
    onClose: s
  })
}