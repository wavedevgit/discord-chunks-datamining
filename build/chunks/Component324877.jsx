/** Chunk was on web.js **/
/** chunk id: 324877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./228524.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk665260 = require("./665260.js"),
  Chunk338717 = require("./338717.js"),
  Chunk731068 = require("./731068.js"),
  Chunk448381 = require("./448381.js"),
  Chunk564107 = require("./564107.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk632656 = require("./632656.jsx"),
  Chunk838541 = require("./838541.js"),
  Chunk913941 = require("./913941.js");
let g = 85;

function E(e) {
  let {
    media: t,
    spoiler: n,
    description: a
  } = e, E = (0, u.wz)(t), b = (0, o.Lt)(t.flags, c.e5.IS_ANIMATED), {
    gifAutoPlay: y
  } = (0, d.X)(), [O, A] = i.useState(n), [v, S] = i.useState(n);
  n !== O && (A(n), S(n));
  let I = e => {
    var n, i;
    return "IMAGE" !== E ? (0, r.jsx)(_.m, {
      className: m.Dg,
      media: t,
      placeholderWidth: g,
      placeholderHeight: g,
      maxWidth: g,
      maxHeight: g,
      hiddenSpoilers: e
    }) : (0, r.jsx)(f.LL, {
      containerClassName: s()(m.Dg, {
        [m.rP]: e
      }),
      imageClassName: m._8,
      src: t.proxyUrl,
      alt: a,
      original: t.url,
      placeholder: t.placeholder,
      placeholderVersion: t.placeholderVersion,
      width: null != (n = t.width) ? n : 0,
      height: null != (i = t.height) ? i : 0,
      hiddenSpoilers: e,
      maxWidth: 2 * g,
      maxHeight: 2 * g,
      minWidth: g,
      minHeight: g,
      autoPlay: y && !e,
      mediaLayoutType: h.dG.MOSAIC,
      reducedSizeAltTextButton: true,
      srcIsAnimated: b
    })
  };
  return n ? (0, r.jsx)(p.Ay, {
    type: p.Ay.Types.ATTACHMENT,
    reason: l.Oc.SPOILER,
    obscured: v,
    onToggleObscurity: () => S(e => !e),
    children: e => I(e)
  }) : I(false)
}