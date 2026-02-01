/** Chunk was on 61344 **/
/** chunk id: 391257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk47167 = require("./47167.js"),
  Chunk46054 = require("./46054.js"),
  Chunk95701 = require("./95701.js"),
  Chunk576705 = require("./576705.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk516261 = require("./516261.js"),
  Chunk206314 = require("./206314.js");

function g(e) {
  let {
    channel: t
  } = e, n = (0, s.Ay)(t, true), g = (0, r.bG)([u.A], () => u.A.can(h.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
  return (0, l.jsxs)(d.Ay, {
    channelId: t.id,
    children: [(0, l.jsx)(d.WK, {
      channelType: t.type
    }), (0, l.jsx)(d.cr, {
      children: p.intl.format(p.t.I3R7Vn, {
        channelName: n
      })
    }), (0, l.jsx)(d.j1, {
      className: m.PT,
      children: p.intl.format(p.t.pYMVRT, {
        channelName: n,
        topicHook: () => o.A.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), g ? (0, l.jsx)("div", {
      className: f.U,
      children: (0, l.jsx)(i.Button, {
        size: "sm",
        variant: "secondary",
        text: p.intl.string(p.t["3gUsJb"]),
        onClick: () => {
          a.Ay.open(t.id)
        },
        icon: i.R2l
      })
    }) : null]
  })
}