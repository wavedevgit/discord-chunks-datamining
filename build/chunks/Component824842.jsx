/** Chunk was on web.js **/
/** chunk id: 824842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk813516 = require("./813516.jsx"),
  Chunk931664 = require("./931664.js"),
  Chunk631576 = require("./631576.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk115424 = require("./115424.js");

function p(e) {
  var t;
  let {
    channelId: n,
    chatInputType: p
  } = e, [_, h] = i.useState(null), m = (0, a.bG)([l.A], () => l.A.getStickerPreview(n, p.drafts.type));
  return (null == (t = p.stickers) ? true : t.allowSending) && null != m && 0 !== m.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.Tz,
      children: m.map(e => (0, r.jsxs)("div", {
        className: f.dp,
        children: [(0, r.jsx)(o.DUT, {
          onFocus: () => h(e.id),
          onBlur: () => h(null),
          className: f.b,
          "aria-label": d.intl.formatToPlainString(d.t.BGAQRd, {
            name: e.name
          }),
          onClick: () => (0, c.x5)(n, p.drafts.type),
          children: (0, r.jsx)("div", {
            className: f.Nk,
            children: (0, r.jsx)(o.aXh, {
              size: "md",
              color: "currentColor",
              className: f.ut
            })
          })
        }), (0, r.jsx)(u.A, {
          isInteracting: _ === e.id,
          className: f.UV,
          size: 48,
          sticker: e
        })]
      }, e.id))
    }), (0, r.jsx)(s.A, {
      className: f.R
    })]
  }) : null
}
let _ = Chunk64700.memo(p)