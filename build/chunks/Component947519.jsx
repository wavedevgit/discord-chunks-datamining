/** Chunk was on web.js **/
/** chunk id: 947519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk608787 = require("./608787.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk906467 = require("./906467.js"),
  Chunk358085 = require("./358085.js"),
  Chunk31336 = require("./31336.js"),
  Chunk19759 = require("./19759.js"),
  Chunk981631 = require("./981631.js");
let _ = (0, Chunk608787.Un)({
  createPromise: () => Promise.all([require.e("50448"), require.e("82821"), require.e("23032"), require.e("63575"), require.e("62856"), require.e("35129"), require.e("43342"), require.e("83615"), require.e("30634"), require.e("9452"), require.e("72472"), require.e("83243"), require.e("78825"), require.e("39380"), require.e("837"), require.e("93886")]).then(require.bind(require, 678717)),
  webpackId: 678717
});

function p(e) {
  let {
    mobile: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.isDeveloper), a = (0, o.e7)([d.Z], () => d.Z.displayTools), p = (0, o.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)), h = i.useCallback(e => {
    ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.SO)()
  }, []);
  return (i.useLayoutEffect(() => (window.addEventListener("keydown", h), () => {
    window.removeEventListener("keydown", h)
  }), [h]), (t ? n : a) && !p) ? (0, r.jsx)(_, {
    mobile: t
  }) : null
}