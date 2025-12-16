/** Chunk was on 29725 **/
/** chunk id: 608934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk605716 = require("./605716.js");

function i(e) {
  let {
    isUploading: t,
    isSuccess: n,
    errorMessage: i,
    onClick: s,
    title: o
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Button, {
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