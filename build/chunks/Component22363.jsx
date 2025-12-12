/** Chunk was on web.js **/
/** chunk id: 22363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk646574 = require("./646574.jsx"),
  Chunk543241 = require("./543241.js"),
  Chunk912648 = require("./912648.jsx"),
  Chunk747613 = require("./747613.jsx"),
  Chunk533432 = require("./533432.jsx"),
  Chunk149203 = require("./149203.js"),
  Chunk185923 = require("./185923.js"),
  Chunk101972 = require("./101972.js");
let _ = e => {
  let {
    channel: t,
    accessory: n,
    pickerIntention: i,
    headerClassName: _,
    emojiListRef: m,
    onKeyDown: h,
    onFocus: g,
    autoFocus: E,
    searchBarRef: b,
    diversitySurrogate: y,
    isBurstReaction: O,
    onBurstReactionToggle: v,
    renderHeader: S,
    showAddEmojiButton: I = false
  } = e, T = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      emojiListRef: m,
      gridNavigatorId: d.Vr,
      onKeyDown: h,
      ref: b,
      onFocus: g,
      autoFocus: E,
      defaultSearchPlaceholder: (0, s.nV)(i, O)
    }), i === f.Hz.REACTION ? (0, r.jsx)(o.Z, {
      checked: O,
      onClick: v
    }) : null, null != n ? n : (0, r.jsx)(c.Z, {
      searchBarRef: b,
      className: p.diversitySelector,
      selectedSurrogate: y
    }), I && (0, r.jsx)(l.Z, {
      channel: t
    })]
  });
  return (0, r.jsx)("div", {
    className: a()(p.header, _),
    children: null != S ? S(T) : T
  })
}