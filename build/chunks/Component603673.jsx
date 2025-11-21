/** Chunk was on 43605 **/
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
    t = Chunk473749.useCallback(() => {
      let e = d.getField("urlString");
      if (null == module || "" === module) return void d.setState({
        error: "URL is required"
      });
      let t = (0, Chunk722589.default)(module);
      if (null == exports) return void d.setState({
        error: "String did not match expected format"
      });
      (0, Chunk518596.openUserSettingsFromParsedUrl)({
        match: exports,
        urlOrigin: "devtools"
      })
    }, []);
  return (0, Chunk54381.jsxs)(Chunk793030.C3N, {
    label: "Settings Deep Link Tool",
    children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
      label: "URL",
      placeholder: "e.g. /settings/appearance",
      onChange: e => d.setState({
        urlString: e,
        error: null
      })
    }), (0, Chunk54381.jsx)(Chunk793030.zxk, {
      variant: "primary",
      onClick: exports,
      text: "Open User Settings for URL"
    }), null != module && (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: module
    })]
  })
}