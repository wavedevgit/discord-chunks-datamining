/** Chunk was on web.js **/
/** chunk id: 260035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk944486 = require("./944486.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk675654 = require("./675654.js"),
  Chunk504086 = require("./504086.js");

function d(e) {
  let {
    children: t
  } = e, [n, d] = i.useState(null), [f, _] = i.useState(null), p = i.useRef(new Set), [h, m] = i.useState(false), g = (0, o.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()), E = i.useCallback(e => {
    p.current.delete(e), m(p.current.size > 0)
  }, []), b = i.useCallback(e => (p.current.add(e), m(true), () => E(e)), [E]), y = i.useCallback((e, t) => {
    for (let n of p.current) n(e, t)
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
      ref: _,
      className: u.canvas,
      environment: c.rq,
      onClick: h ? y : true
    }), (0, r.jsx)(a.Ji, {
      ref: d,
      colors: c.Br,
      sprites: c.CA,
      spriteWidth: c.Ko,
      spriteHeight: c.Ko
    })]
  })
}