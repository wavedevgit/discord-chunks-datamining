/** Chunk was on 3020 **/
/** chunk id: 608934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk530146 = require("./530146.js");

function r(e) {
  let {
    isUploading: t,
    isSuccess: n,
    errorMessage: r,
    onClick: s,
    title: o
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: s,
      loading: t,
      disabled: t,
      text: t ? "Uploading…" : o
    }), null != r && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: l.statusText,
      children: r
    }), n && (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-positive",
      className: l.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}