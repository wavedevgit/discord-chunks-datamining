/** Chunk was on 93886 **/
/** chunk id: 763577, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk836459 = require("./836459.js"),
  Chunk396704 = require("./396704.js"),
  Chunk861066 = require("./861066.jsx"),
  Chunk481060 = require("./481060.js");

function d() {
  let e = Object.keys(Chunk836459).map(e => (0, n.jsx)(u, {
    riveName: e
  }, e));
  return (0, Chunk951288.jsx)(Chunk793030.Kq, {
    gap: 24,
    padding: 8,
    style: {
      boxSizing: "border-box"
    },
    children: module
  })
}

function u(e) {
  let {
    riveName: t
  } = e, a = i[t].riveSrc, d = r.useRef(null), u = (0, s.o8)(a);
  return (0, n.jsxs)(l.Kq, {
    gap: 8,
    children: [(0, n.jsx)("label", {
      children: t
    }), (0, n.jsxs)(l.Kq, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      children: [(0, n.jsx)("input", {
        type: "file",
        accept: ".riv",
        onChange: e => {
          var t;
          let n = null == (t = e.target.files) ? true : t[0];
          if (null == n) return;
          let r = new FileReader;
          r.onload = e => {
            var t;
            let n = null == (t = e.target) ? true : t.result;
            (0, s.JG)(a, n)
          }, r.readAsArrayBuffer(n)
        },
        ref: d
      }), (0, n.jsx)(o.h, {
        "aria-label": "Clear override for ".concat(t),
        onClick: () => {
          null != d.current && (d.current.value = ""), (0, s.JG)(a, null)
        },
        icon: c.XHJ,
        variant: "critical-primary",
        size: "sm",
        disabled: null == u
      })]
    })]
  }, t)
}