/** Chunk was on web.js **/
/** chunk id: 260035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk442837 = require("./442837.js"),
  Chunk944486 = require("./944486.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk675654 = require("./675654.js"),
  Chunk95896 = require("./95896.js");

function d(e) {
  let {
    children: t
  } = e, [n, d] = i.useState(null), [f, p] = i.useState(null), _ = i.useRef(new Set), [m, h] = i.useState(false), g = (0, o.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()), E = i.useCallback(e => {
    _.current.delete(e), h(_.current.size > 0)
  }, []), b = i.useCallback(e => (_.current.add(e), h(true), () => E(e)), [E]), y = i.useCallback((e, t) => {
    for (let n of _.current) n(e, t)
  }, []);
  return i.useEffect(() => {
    null == f || f.clearConfetti()
  }, [f, g]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.d, {
      confettiCanvas: f,
      spriteCanvas: n,
      baseConfig: c.We,
      addClickListener: b,
      removeClickListener: E,
      children: t
    }), (0, r.jsx)(a.O_, {
      ref: p,
      className: u.canvas,
      environment: c.rq,
      onClick: m ? y : true
    }), (0, r.jsx)(a.Ji, {
      ref: d,
      colors: c.Br,
      sprites: c.CA,
      spriteWidth: c.Ko,
      spriteHeight: c.Ko
    })]
  })
}