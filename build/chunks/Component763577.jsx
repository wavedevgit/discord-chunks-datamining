/** Chunk was on 71874 **/
/** chunk id: 763577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk164617 = require("./164617.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js");

function c() {
  let e = Object.keys(Chunk164617).map(e => (0, a.jsx)(d, {
    riveName: e
  }, e));
  return (0, Chunk951288.jsx)(Chunk793030.Kqy, {
    gap: 24,
    padding: 8,
    style: {
      boxSizing: "border-box"
    },
    children: module
  })
}

function d(e) {
  let {
    riveName: t
  } = e, n = l[t].riveSrc, c = r.useRef(null), d = (0, s.o8M)(n);
  return (0, a.jsxs)(i.Kqy, {
    gap: 8,
    children: [(0, a.jsx)("label", {
      children: t
    }), (0, a.jsxs)(i.Kqy, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)("input", {
        type: "file",
        accept: ".riv",
        onChange: e => {
          var t;
          let a = null == (t = e.target.files) ? true : t[0];
          if (null == a) return;
          let r = new FileReader;
          r.onload = e => {
            var t;
            let a = null == (t = e.target) ? true : t.result;
            (0, s.JGI)(n, a)
          }, r.readAsArrayBuffer(a)
        },
        ref: c
      }), (0, a.jsx)(o.hU, {
        "aria-label": "Clear override for ".concat(t),
        onClick: () => {
          null != c.current && (c.current.value = ""), (0, s.JGI)(n, null)
        },
        icon: s.XHJ,
        variant: "critical-primary",
        size: "sm",
        disabled: null == d
      })]
    })]
  }, t)
}