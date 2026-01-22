/** Chunk was on 67248 **/
/** chunk id: 911539, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk168622 = require("./168622.js");

function d(t) {
  let {
    source: e,
    onClose: s,
    transitionState: d
  } = t;
  return a.useEffect(() => {
    c.default.track(n.HAw.OPEN_MODAL, {
      type: n.JJy.CONTACT_SYNC_NC_MODAL,
      source: {
        location: e
      }
    })
  }, [e]), (0, i.jsx)(r.kpP, {
    transitionState: d,
    graphic: {
      src: u,
      type: "image"
    },
    title: p.intl.string(p.t.fdR8Hf),
    subtitle: p.intl.string(p.t["JXyNq+"]),
    onClose: s
  })
}