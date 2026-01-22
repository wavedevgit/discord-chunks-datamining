/** Chunk was on 52210 **/
/** chunk id: 862377, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk478437 = require("./478437.js"),
  Chunk732955 = require("./732955.js"),
  Chunk47167 = require("./47167.js"),
  Chunk985018 = require("./985018.jsx");
let o = t => {
  let i, {
      channel: n,
      onClose: o,
      onConfirm: c,
      transitionState: p
    } = t,
    {
      title: d,
      body: h,
      confirm: u
    } = (i = (0, l.Ay)(n, true), n.type === a.r.GUILD_CATEGORY ? {
      title: e.intl.string(e.t["4VpUw8"]),
      body: e.intl.format(e.t.GuhMa5, {
        channelName: i
      }),
      confirm: e.intl.string(e.t.xOscRh)
    } : {
      title: e.intl.string(e.t["4VpUw8"]),
      body: e.intl.format(e.t["2z/hBg"], {
        channelName: i
      }),
      confirm: e.intl.string(e.t.gGs6TT)
    });
  return (0, r.jsx)(s.aFV, {
    title: d,
    subtitle: h,
    actions: [{
      text: e.intl.string(e.t["ETE/oC"]),
      onClick: o,
      variant: "secondary"
    }, {
      text: u,
      onClick: c,
      variant: "critical-primary"
    }],
    onClose: o,
    transitionState: p
  })
}