/** Chunk was on 49559 **/
/** chunk id: 324877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./228524.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function y(e) {
  let {
    media: t,
    spoiler: n,
    description: a
  } = e, y = (0, u.wz)(t), h = (0, o.Lt)(t.flags, c.e5.IS_ANIMATED), {
    gifAutoPlay: j
  } = (0, d.X)(), [g, A] = l.useState(n), [v, E] = l.useState(n);
  n !== g && (A(n), E(n));
  let C = e => {
    var n, l;
    return "IMAGE" !== y ? (0, r.jsx)(f.m, {
      className: b.Dg,
      media: t,
      placeholderWidth: 85,
      placeholderHeight: 85,
      maxWidth: 85,
      maxHeight: 85,
      hiddenSpoilers: e
    }) : (0, r.jsx)(p.LL, {
      containerClassName: i()(b.Dg, {
        [b.rP]: e
      }),
      imageClassName: b._8,
      src: t.proxyUrl,
      alt: a,
      original: t.url,
      placeholder: t.placeholder,
      placeholderVersion: t.placeholderVersion,
      width: null != (n = t.width) ? n : 0,
      height: null != (l = t.height) ? l : 0,
      hiddenSpoilers: e,
      maxWidth: 170,
      maxHeight: 170,
      minWidth: 85,
      minHeight: 85,
      autoPlay: j && !e,
      mediaLayoutType: O.dG.MOSAIC,
      reducedSizeAltTextButton: true,
      srcIsAnimated: h
    })
  };
  return n ? (0, r.jsx)(m.Ay, {
    type: m.Ay.Types.ATTACHMENT,
    reason: s.Oc.SPOILER,
    obscured: v,
    onToggleObscurity: () => E(e => !e),
    children: e => C(e)
  }) : C(false)
}