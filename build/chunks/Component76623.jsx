/** Chunk was on web.js **/
/** chunk id: 76623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk834730 = require("./834730.jsx"),
  Chunk927057 = require("./927057.jsx"),
  Chunk151282 = require("./151282.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk745315 = require("./745315.js");

function d(e) {
  let {
    pendingScheduledMessage: t
  } = e, {
    channelId: n,
    scheduledTimestamp: i
  } = t;

  function d(e) {
    e.stopPropagation(), (0, l.Ps)(n)
  }
  return (0, r.jsx)("div", {
    className: u.e1,
    children: (0, r.jsx)("div", {
      className: u.kL,
      children: (0, r.jsxs)("div", {
        className: u.g3,
        children: [(0, r.jsx)(s.E, {
          color: "text-default",
          className: a()(u.Qq, u.a3),
          variant: "text-sm/normal",
          children: c.intl.formatToPlainString(c.t["MQcRX/"], {
            timestamp: new Date(i).valueOf()
          })
        }), (0, r.jsx)("div", {
          className: u.o1,
          children: (0, r.jsx)(o.x, {
            onClick: d
          })
        })]
      })
    })
  })
}