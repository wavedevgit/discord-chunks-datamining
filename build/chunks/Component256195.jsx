/** Chunk was on web.js **/
/** chunk id: 256195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk401843 = require("./401843.js"),
  Chunk315606 = require("./315606.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk200749 = require("./200749.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438823 = require("./438823.js");
let m = 175,
  g = 195,
  Chunk913516 = require("./913516.js");

function y(e) {
  let {
    participant: t,
    width: n,
    noArt: i = false,
    selected: y = false
  } = e, b = n < g, {
    defaultWatchMultipleStreams: O
  } = (0, u.W)({
    location: "StreamHidden"
  }), v = (0, s.bG)([d.A, f.default], () => d.A.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== f.default.getId()
  }));
  return (0, r.jsx)("div", {
    className: a()(h.Qs, h.FY),
    children: (0, r.jsx)(p.A, {
      className: h.FP,
      artURL: E,
      noArt: i,
      selected: y,
      size: (0, p.J)(n),
      header: b ? null : _.intl.string(_.t.epU4Ec),
      description: y ? null : (0, r.jsxs)("div", {
        className: a()(h.t2, {
          [h.y8]: !b
        }),
        children: [(0, r.jsx)("div", {
          className: h.lO,
          children: (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: b ? "sm" : "md",
            text: n < m ? _.intl.string(_.t.I6JG46) : _.intl.string(_.t["7Xq/nV"])
          })
        }), v && !O ? (0, r.jsx)("div", {
          className: a()(h.lO, h.EU),
          children: (0, r.jsx)(o.m_, {
            text: _.intl.string(_.t.wCrzut),
            children: (0, r.jsx)(l.K0, {
              variant: "secondary",
              size: b ? "sm" : "md",
              icon: l.vAm,
              "aria-label": _.intl.string(_.t.wCrzut),
              onClick: e => {
                e.stopPropagation(), (0, c.A9)(t.stream, {
                  forceMultiple: true
                })
              }
            })
          })
        }) : null]
      })
    })
  })
}