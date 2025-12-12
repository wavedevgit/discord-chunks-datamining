/** Chunk was on web.js **/
/** chunk id: 709692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y0: () => Chunk466377.Y0,
  hz: () => Chunk466377.hz,
  mz: () => Chunk466377.mz,
  u_: () => u,
  xB: () => Chunk466377.xB
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk97613 = require("./97613.js"),
  a = require.n(Chunk97613),
  Chunk493773 = require("./493773.js"),
  Chunk952265 = require("./952265.js"),
  Chunk307616 = require("./307616.jsx"),
  Chunk466377 = require("./466377.jsx");

function u(e) {
  let {
    renderModal: t,
    onCloseRequest: n,
    onCloseCallback: i
  } = e, [c] = r.useState(() => a()()), u = (0, l.v)();
  (0, o.Ng)(() => ((0, s.openModal)(t, {
    modalKey: c,
    onCloseRequest: n,
    onCloseCallback: i
  }, u), () => {
    (0, s.closeModal)(c, u)
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
    d.current || (0, s.updateModal)(r, t, n, i, e), d.current = false
  }, [t, n]), null
}