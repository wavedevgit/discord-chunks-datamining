/** Chunk was on 91394 **/
/** chunk id: 608934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    children: [(0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: s,
      loading: t,
      disabled: t,
      text: t ? "Uploading…" : o
    }), null != r && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: i.statusText,
      children: r
    }), n && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-positive",
      className: i.statusText,
      children: "Logs uploaded successfully"
    })]
  })
}