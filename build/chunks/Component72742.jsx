/** Chunk was on web.js **/
/** chunk id: 72742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk378570 = require("./378570.js"),
  Chunk323443 = require("./323443.js"),
  Chunk233993 = require("./233993.js"),
  Chunk82149 = require("./82149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    activity: t,
    onAction: n,
    onClose: m
  } = e, {
    themeType: g
  } = (0, f.E)(), E = g === _.d.MODAL_V2, b = (0, l.UW)(t), {
    channelId: y,
    guildId: O
  } = null != b ? b : {}, A = (0, i.bG)([d.A], () => null != y && d.A.isInChannel(y), [y]), v = (0, i.bG)([c.A], () => null != y ? c.A.getChannel(y) : null, [y]), S = (0, i.bG)([u.A], () => null != v && u.A.can(o.Gk, v), [v]);
  if (!(0, l.Cy)(t) || !S || null == O || null == y) return null;
  let I = e => {
    e.stopPropagation(), null == n || n({
      action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON"
    }), s.CH(O, y), (0, a.iN)(y), null == m || m()
  };
  return (0, r.jsx)(p.FD, {
    text: h.intl.string(h.t.ZYO5OK),
    fullWidth: !E,
    disabled: A,
    onClick: I
  })
}