/** Chunk was on web.js **/
/** chunk id: 725570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => c.$m,
  EO: () => c.EO,
  aF: () => u,
  jl: () => c.jl,
  rQ: () => c.rQ
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk296489 = require("./296489.js"),
  a = require.n(Chunk296489),
  Chunk964486 = require("./964486.js"),
  Chunk192308 = require("./192308.js"),
  Chunk638495 = require("./638495.jsx"),
  Chunk935462 = require("./935462.jsx");

function u(e) {
  let {
    renderModal: t,
    onCloseRequest: n,
    onCloseCallback: i
  } = e, [c] = r.useState(() => a()()), u = (0, l.k)();
  (0, s.u5)(() => ((0, o.openModal)(t, {
    modalKey: c,
    onCloseRequest: n,
    onCloseCallback: i
  }, u), () => {
    (0, o.closeModal)(c, u)
  }));
  let d = r.useRef(true),
    f = {
      contextKey: u,
      modalKey: c,
      onCloseCallback: i
    },
    p = r.useRef(f);
  return r.useEffect(() => {
    p.current = f
  }), r.useLayoutEffect(() => {
    let {
      contextKey: e,
      modalKey: r,
      onCloseCallback: i
    } = p.current;
    d.current || (0, o.updateModal)(r, t, n, i, e), d.current = false
  }, [t, n]), null
}