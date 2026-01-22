/** Chunk was on 39522 **/
/** chunk id: 231003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk964486 = require("./964486.js"),
  Chunk954571 = require("./954571.js"),
  Chunk577015 = require("./577015.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    onReject: t,
    analyticsType: r = "Guild Join Captcha"
  } = e, s = n.useRef(true);
  return (0, a.Ay)(() => () => {
    s.current && (null == t || t(o.CaptchaError.CANCEL))
  }), n.useEffect(() => (i.default.track(c.HAw.OPEN_MODAL, {
    type: r
  }), () => {
    s.current && i.default.track(c.HAw.MODAL_DISMISSED, {
      type: r
    })
  }), [r]), () => {
    s.current = false
  }
}