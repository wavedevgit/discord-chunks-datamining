/** Chunk was on web.js **/
/** chunk id: 22363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
  Chunk359175 = require("./359175.js");
let p = e => {
  let {
    channel: t,
    accessory: n,
    pickerIntention: i,
    headerClassName: p,
    emojiListRef: h,
    onKeyDown: m,
    onFocus: g,
    autoFocus: E,
    searchBarRef: b,
    diversitySurrogate: y,
    isBurstReaction: O,
    onBurstReactionToggle: v,
    renderHeader: I,
    showAddEmojiButton: T = false
  } = e, S = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      emojiListRef: h,
      gridNavigatorId: d.Vr,
      onKeyDown: m,
      ref: b,
      onFocus: g,
      autoFocus: E,
      defaultSearchPlaceholder: (0, s.nV)(i, O)
    }), i === f.Hz.REACTION ? (0, r.jsx)(o.Z, {
      checked: O,
      onClick: v
    }) : null, null != n ? n : (0, r.jsx)(c.Z, {
      searchBarRef: b,
      className: _.diversitySelector,
      selectedSurrogate: y
    }), T && (0, r.jsx)(l.Z, {
      channel: t
    })]
  });
  return (0, r.jsx)("div", {
    className: a()(_.header, p),
    children: null != I ? I(S) : S
  })
}