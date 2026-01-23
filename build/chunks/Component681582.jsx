/** Chunk was on web.js **/
/** chunk id: 681582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk311907 = require("./311907.js"),
  Chunk309010 = require("./309010.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk851110 = require("./851110.js"),
  Chunk469427 = require("./469427.js");

function d(e) {
  let {
    children: t
  } = e, [n, d] = i.useState(null), [f, p] = i.useState(null), _ = i.useRef(new Set), [h, m] = i.useState(false), g = (0, s.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()), E = i.useCallback(e => {
    _.current.delete(e), m(_.current.size > 0)
  }, []), y = i.useCallback(e => (_.current.add(e), m(true), () => E(e)), [E]), b = i.useCallback((e, t) => {
    for (let n of _.current) n(e, t)
  }, []);
  return i.useEffect(() => {
    null == f || f.clearConfetti()
  }, [f, g]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.k, {
      confettiCanvas: f,
      spriteCanvas: n,
      baseConfig: c.Mw,
      addClickListener: y,
      removeClickListener: E,
      children: t
    }), (0, r.jsx)(a.Fk, {
      ref: p,
      className: u.J,
      environment: c.XA,
      onClick: h ? b : true
    }), (0, r.jsx)(a.K_, {
      ref: d,
      colors: c._t,
      sprites: c.uI,
      spriteWidth: c.wn,
      spriteHeight: c.wn
    })]
  })
}