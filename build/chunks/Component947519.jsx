/** Chunk was on web.js **/
/** chunk id: 947519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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
let p = (0, Chunk608787.Un)({
  createPromise: () => Promise.all([n.e("50448"), n.e("82821"), n.e("23706"), n.e("63575"), n.e("96795"), n.e("13478"), n.e("30634"), n.e("77069"), n.e("83772"), n.e("83243"), n.e("89929"), n.e("33131"), n.e("84249"), n.e("93886")]).then(n.bind(n, 678717)),
  webpackId: 678717
});

function _(e) {
  let {
    mobile: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.isDeveloper), a = (0, o.e7)([d.Z], () => d.Z.displayTools), _ = (0, o.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)), m = i.useCallback(e => {
    ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.SO)()
  }, []);
  return (i.useLayoutEffect(() => (window.addEventListener("keydown", m), () => {
    window.removeEventListener("keydown", m)
  }), [m]), (t ? n : a) && !_) ? (0, r.jsx)(p, {
    mobile: t
  }) : null
}