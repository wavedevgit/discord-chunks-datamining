/** Chunk was on 37720 **/
/** chunk id: 357632, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk106351 = require("./106351.js"),
  Chunk159691 = require("./159691.js"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => {
  let {
    channel: i,
    onClose: n,
    onConfirm: o,
    transitionState: c
  } = t, {
    title: u,
    body: p,
    confirm: d
  } = function(t) {
    let i = (0, s.ZP)(t, true);
    return t.type === a.d.GUILD_CATEGORY ? {
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
    }
  }(i);
  return (0, r.jsx)(l.u_l, {
    title: u,
    subtitle: p,
    actions: [{
      text: e.intl.string(e.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: d,
      onClick: o,
      variant: "critical-primary"
    }],
    onClose: n,
    transitionState: c
  })
}