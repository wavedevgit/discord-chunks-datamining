/** Chunk was on 93886 **/
/** chunk id: 608934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk575043 = require("./575043.js");

function i(e) {
  let {
    isUploading: t,
    isSuccess: n,
    errorMessage: i,
    onClick: s,
    title: o
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.zxk, {
      variant: "primary",
      onClick: s,
      loading: t,
      disabled: t,
      text: t ? "Uploading…" : o
    }), null != i && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: l.statusText,
      children: i
    }), n && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-positive",
      className: l.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}