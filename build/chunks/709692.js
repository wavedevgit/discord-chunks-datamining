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
var Chunk73800 = require("./73800.js"),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk493773 = require("./493773.js"),
  Chunk952265 = require("./952265.js"),
  Chunk307616 = require("./307616.jsx"),
  Chunk466377 = require("./466377.jsx");

function u(e) {
  let {
    renderModal: t,
    onCloseRequest: n,
    onCloseCallback: i
  } = e, [c] = r.useState(() => o()()), u = (0, l.v)();
  (0, a.Ng)(() => ((0, s.h7)(t, {
    modalKey: c,
    onCloseRequest: n,
    onCloseCallback: i
  }, u), () => {
    (0, s.Mr)(c, u)
  }));
  let d = r.useRef(true),
    f = {
      contextKey: u,
      modalKey: c,
      onCloseCallback: i
    },
    _ = r.useRef(f);
  return r.useEffect(() => {
    _.current = f
  }), r.useLayoutEffect(() => {
    let {
      contextKey: e,
      modalKey: r,
      onCloseCallback: i
    } = _.current;
    d.current || (0, s.o)(r, t, n, i, e), d.current = false
  }, [t, n]), null
}