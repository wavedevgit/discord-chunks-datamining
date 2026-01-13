/** Chunk was on 22979 **/
/** chunk id: 603673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk972959 = require("./972959.js"),
  Chunk722589 = require("./722589.js"),
  Chunk518596 = require("./518596.jsx");
let d = (0, Chunk972959.H)(() => ({
  urlString: "",
  error: null
}));

function u() {
  let e = d.useField("error"),
    t = r.useCallback(() => {
      let e = d.getField("urlString");
      if (null == e || "" === e) return void d.setState({
        error: "URL is required"
      });
      let t = (0, o.default)(e);
      if (null == t) return void d.setState({
        error: "String did not match expected format"
      });
      (0, c.openUserSettingsFromParsedUrl)({
        match: t,
        urlOrigin: "devtools"
      })
    }, []);
  return (0, a.jsxs)(i.C3N, {
    label: "Settings Deep Link Tool",
    children: [(0, a.jsx)(l.oil, {
      label: "URL",
      placeholder: "e.g. /settings/appearance",
      onChange: e => d.setState({
        urlString: e,
        error: null
      })
    }), (0, a.jsx)(i.zxk, {
      variant: "primary",
      onClick: t,
      text: "Open User Settings for URL"
    }), null != e && (0, a.jsx)(i.xvT, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: e
    })]
  })
}