/** Chunk was on web.js **/
/** chunk id: 135564, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => p
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk964892 = require("./964892.jsx"),
  Chunk600000 = require("./600000.jsx"),
  Chunk795127 = require("./795127.js"),
  Chunk887266 = require("./887266.js");
let d = 12,
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 240,
      n = t / 2 - d;
    return Math.max(-n, Math.min(n, e))
  };

function p(e) {
  let {
    className: t
  } = e, n = i.useContext(s.e);
  if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
  let {
    position: a,
    caretConfig: d
  } = n, p = (0, c.g)(a), {
    align: _,
    customOffset: h
  } = d, m = "custom" === _ && true !== h ? {
    "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? "".concat(f(h), "px") : "0px",
    "--custom-caret-offset-y": ["left", "right"].includes(p) ? "".concat(f(h), "px") : "0px"
  } : true, g = o()(u.caret, u["caret--".concat(p)], u["caret--".concat(_)], t);
  return (0, r.jsx)("div", {
    className: g,
    style: m,
    children: (0, r.jsx)(l.S, {})
  })
}