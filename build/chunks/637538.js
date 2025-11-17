/** Chunk was on 12192 **/
/** chunk id: 637538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk353250 = require("./353250.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    onReject: t,
    analyticsType: n = "Guild Join Captcha"
  } = e, s = r.useRef(true);
  return (0, a.ZP)(() => () => {
    s.current && (null == t || t(o.CaptchaError.CANCEL))
  }), r.useEffect(() => (i.default.track(c.rMx.OPEN_MODAL, {
    type: n
  }), () => {
    s.current && i.default.track(c.rMx.MODAL_DISMISSED, {
      type: n
    })
  }), [n]), () => {
    s.current = false
  }
}