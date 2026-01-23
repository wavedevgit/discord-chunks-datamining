/** Chunk was on web.js **/
/** chunk id: 867738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk780042 = require("./780042.jsx"),
  Chunk822123 = require("./822123.js"),
  Chunk207284 = require("./207284.jsx"),
  Chunk4703 = require("./4703.jsx"),
  Chunk672594 = require("./672594.jsx"),
  Chunk732139 = require("./732139.js"),
  Chunk307731 = require("./307731.js"),
  Chunk836553 = require("./836553.js");
let _ = e => {
  let {
    channel: t,
    accessory: n,
    pickerIntention: i,
    headerClassName: _,
    emojiListRef: h,
    onKeyDown: m,
    onFocus: g,
    autoFocus: E,
    searchBarRef: y,
    diversitySurrogate: b,
    isBurstReaction: O,
    onBurstReactionToggle: v,
    renderHeader: A
  } = e, I = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.A, {
      emojiListRef: h,
      gridNavigatorId: d.lq,
      onKeyDown: m,
      ref: y,
      onFocus: g,
      autoFocus: E,
      defaultSearchPlaceholder: (0, o.wT)(i, O)
    }), i === f.b_.REACTION ? (0, r.jsx)(s.A, {
      checked: O,
      onClick: v
    }) : null, null != n ? n : (0, r.jsx)(c.A, {
      searchBarRef: y,
      className: p.fx,
      selectedSurrogate: b
    }), (0, r.jsx)(l.A, {
      channel: t
    })]
  });
  return (0, r.jsx)("div", {
    className: a()(p.wx, _),
    children: null != A ? A(I) : I
  })
}