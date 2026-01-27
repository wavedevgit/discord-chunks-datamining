/** Chunk was on 41727 **/
/** chunk id: 391257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    channel: t
  } = e, n = (0, a.Ay)(t, true), m = (0, l.bG)([u.A], () => u.A.can(p.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
  return (0, r.jsxs)(d.Ay, {
    channelId: t.id,
    children: [(0, r.jsx)(d.WK, {
      channelType: t.type
    }), (0, r.jsx)(d.cr, {
      children: h.intl.format(h.t.I3R7Vn, {
        channelName: n
      })
    }), (0, r.jsx)(d.j1, {
      className: g.PT,
      children: h.intl.format(h.t.pYMVRT, {
        channelName: n,
        topicHook: () => o.A.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), m ? (0, r.jsx)("div", {
      className: f.U,
      children: (0, r.jsx)(i.Button, {
        size: "sm",
        variant: "secondary",
        text: h.intl.string(h.t["3gUsJb"]),
        onClick: () => {
          s.Ay.open(t.id)
        },
        icon: i.R2l
      })
    }) : null]
  })
}