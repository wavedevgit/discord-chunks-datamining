/** Chunk was on 6502 **/
/** chunk id: 345254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  return r.p5 ? (0, i.jsx)(l.Drp, {
    id: "copy-link",
    label: o.intl.string(o.t.Xrt5Po),
    leadingAccessory: {
      type: "icon",
      icon: l.qYV
    },
    icon: l.qYV,
    action: () => {
      (0, r.C)("".concat(location.protocol, "//").concat(location.host).concat(a.BVt.CHANNEL(t.guild_id, t.id, e.id))), s.default.track(a.HAw.MESSAGE_LINK_COPIED, {
        message_id: e.id,
        channel: e.channel_id
      })
    }
  }) : null
}