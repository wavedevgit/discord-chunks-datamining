/** Chunk was on web.js **/
/** chunk id: 947519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk608787 = require("./608787.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk906467 = require("./906467.js"),
  Chunk358085 = require("./358085.js"),
  Chunk31336 = require("./31336.js"),
  Chunk19759 = require("./19759.js"),
  Chunk981631 = require("./981631.js");
let _ = (0, Chunk608787.Un)({
  createPromise: () => Promise.all([require.e("14006"), require.e("91584"), require.e("85911"), require.e("8895"), require.e("70791"), require.e("50448"), require.e("80451"), require.e("31422"), require.e("70274"), require.e("25292"), require.e("8016"), require.e("80417"), require.e("31978"), require.e("22878"), require.e("74891"), require.e("85372"), require.e("6380"), require.e("28467"), require.e("8739"), require.e("86282"), require.e("12830"), require.e("17938"), require.e("38626"), require.e("30243"), require.e("37447"), require.e("53937"), require.e("63575"), require.e("34082"), require.e("76540"), require.e("40694"), require.e("55719"), require.e("91173"), require.e("96750"), require.e("54157"), require.e("94136"), require.e("49508"), require.e("22646"), require.e("64838"), require.e("25183"), require.e("79312"), require.e("3940"), require.e("27458"), require.e("21046"), require.e("31930"), require.e("84533"), require.e("48091"), require.e("88712"), require.e("30419"), require.e("66317"), require.e("89001"), require.e("18824"), require.e("16766"), require.e("88876"), require.e("62332"), require.e("66181"), require.e("4067"), require.e("6565"), require.e("7171"), require.e("14861"), require.e("64679"), require.e("92922"), require.e("30634"), require.e("72853"), require.e("93886")]).then(require.bind(require, 678717)),
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