/** Chunk was on 91394 **/
/** chunk id: 608934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk530146 = require("./530146.js");

function i(e) {
  let {
    isUploading: t,
    isSuccess: n,
    errorMessage: i,
    onClick: s,
    title: o
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: s,
      loading: t,
      disabled: t,
      text: t ? "Uploading…" : o
    }), null != i && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: r.statusText,
      children: i
    }), n && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-positive",
      className: r.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}