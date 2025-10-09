/** Chunk was on 46746 **/
/** chunk id: 810013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk938475 = require("./938475.js"),
  Chunk499596 = require("./499596.jsx"),
  Chunk537135 = require("./537135.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542257 = require("./542257.js");

function f(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([s.default], () => s.default.getId()), f = (0, i.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t), [t]);
  return (0, r.jsx)("div", {
    className: u.modalContent,
    children: (0, r.jsx)(l.gNt, {
      label: d.intl.string(d.t.KPuWsr),
      children: (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(a.Z, {
          channel: t,
          users: f.filter(e => {
            let {
              user: t
            } = e;
            return t.id !== n
          }).map(e => {
            let {
              user: t
            } = e;
            return t
          })
        })
      })
    })
  })
}