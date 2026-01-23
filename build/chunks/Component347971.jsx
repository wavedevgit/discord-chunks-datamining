/** Chunk was on 22477 **/
/** chunk id: 347971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk839214 = require("./839214.js"),
  Chunk849823 = require("./849823.js"),
  Chunk840065 = require("./840065.jsx");
let d = (0, Chunk839214.D)(() => ({
  urlString: "",
  error: null
}));

function u() {
  let e = d.useField("error"),
    t = l.useCallback(() => {
      let e = d.getField("urlString");
      if (null == e || "" === e) return void d.setState({
        error: "URL is required"
      });
      let t = (0, o.default)(e);
      null == t ? d.setState({
        error: "String did not match expected format"
      }) : (0, c.openUserSettingsFromParsedUrl)({
        match: t,
        urlOrigin: "devtools"
      })
    }, []);
  return (0, a.jsxs)(r.nVY, {
    label: "Settings Deep Link Tool",
    children: [(0, a.jsx)(i.ksK, {
      label: "URL",
      placeholder: "e.g. /settings/appearance",
      onChange: e => d.setState({
        urlString: e,
        error: null
      })
    }), (0, a.jsx)(r.$nd, {
      variant: "primary",
      onClick: t,
      text: "Open User Settings for URL"
    }), null != e && (0, a.jsx)(r.EYj, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: e
    })]
  })
}