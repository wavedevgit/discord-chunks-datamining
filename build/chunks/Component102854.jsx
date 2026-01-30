/** Chunk was on web.js **/
/** chunk id: 102854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk156828 = require("./156828.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk540999 = require("./540999.js"),
  Chunk723702 = require("./723702.js"),
  Chunk538064 = require("./538064.js"),
  Chunk265059 = require("./265059.js"),
  Chunk652215 = require("./652215.js");
let p = (0, Chunk156828.Fe)({
  createPromise: () => Promise.all([n.e("54809"), n.e("38939"), n.e("94678"), n.e("896"), n.e("84511"), n.e("92777"), n.e("3795"), n.e("28936"), n.e("40396"), n.e("13088"), n.e("48330"), n.e("92414"), n.e("62175"), n.e("97283"), n.e("94857"), n.e("88332"), n.e("7034"), n.e("49559"), n.e("37372"), n.e("67923"), n.e("3183"), n.e("64935"), n.e("2292"), n.e("45586"), n.e("62733"), n.e("83518"), n.e("52199"), n.e("47995"), n.e("44411"), n.e("49862"), n.e("34749"), n.e("44667"), n.e("7803"), n.e("84704"), n.e("67646"), n.e("2827"), n.e("59541"), n.e("40198"), n.e("16865"), n.e("83898"), n.e("95782"), n.e("4787"), n.e("20545"), n.e("4670"), n.e("32502"), n.e("20725"), n.e("74492"), n.e("10253"), n.e("87557"), n.e("31294")]).then(n.bind(n, 902592)),
  webpackId: 902592
});

function _(e) {
  let {
    mobile: t
  } = e, n = (0, o.bG)([l.A], () => l.A.isDeveloper), a = (0, o.bG)([d.A], () => d.A.displayTools), _ = (0, o.bG)([s.A], () => s.A.getWindowOpen(f.MLl.DEVTOOLS_POPOUT)), h = i.useCallback(e => {
    ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.pf)()
  }, []);
  return (i.useLayoutEffect(() => (window.addEventListener("keydown", h), () => {
    window.removeEventListener("keydown", h)
  }), [h]), (t ? n : a) && !_) ? (0, r.jsx)(p, {
    mobile: t
  }) : null
}