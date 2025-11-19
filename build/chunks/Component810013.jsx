/** Chunk was on 4093 **/
/** chunk id: 810013, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk938475 = require("./938475.js"),
  Chunk499596 = require("./499596.jsx"),
  Chunk537135 = require("./537135.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542257 = require("./542257.js");

function m(e) {
  let {
    channel: n
  } = e, t = (0, r.e7)([s.default], () => s.default.getId()), m = (0, r.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(n), [n]);
  return (0, l.jsx)("div", {
    className: d.modalContent,
    children: (0, l.jsx)(i.gNt, {
      label: u.intl.string(u.t.KPuWsm),
      children: (0, l.jsx)(o.Z, {
        children: (0, l.jsx)(c.Z, {
          channel: n,
          users: m.filter(e => {
            let {
              user: n
            } = e;
            return n.id !== t
          }).map(e => {
            let {
              user: n
            } = e;
            return n
          })
        })
      })
    })
  })
}