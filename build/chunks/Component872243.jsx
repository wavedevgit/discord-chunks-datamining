/** Chunk was on 83504 **/
/** chunk id: 872243, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk181079 = require("./181079.js"),
  Chunk422258 = require("./422258.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk129115 = require("./129115.js");

function v(t) {
  let {
    channelId: n,
    onClose: e,
    transitionState: v,
    heading: C,
    formTitle: E,
    allowReset: h = false
  } = t, A = (0, o.bG)([c.A], () => c.A.getChannel(n)), N = (0, s.Ay)(A), _ = u.A.getNickname(n), [I, m] = a.useState(null != _ ? _ : "");

  function R(t) {
    t.preventDefault(), (0, f.w6)(n, I), e()
  }
  return (0, i.jsx)("form", {
    onSubmit: R,
    children: (0, i.jsxs)(l.aFV, {
      title: C,
      actions: [{
        text: d.intl.string(d.t["ETE/oC"]),
        onClick: e,
        variant: "secondary"
      }, {
        text: C,
        onClick: R,
        variant: "primary",
        type: "submit"
      }],
      onClose: e,
      transitionState: v,
      children: [(0, i.jsx)(r.ksK, {
        label: E,
        value: I,
        onChange: m,
        placeholder: null != N ? N : true,
        maxLength: 100,
        autoFocus: true
      }), h && null != _ ? (0, i.jsx)("div", {
        className: p.c,
        children: (0, i.jsx)(r.QWc, {
          text: d.intl.string(d.t.aE02Rz),
          onClick: function() {
            (0, f.w6)(n, null), e()
          },
          textVariant: "text-sm/normal"
        })
      }) : null, (0, i.jsx)(r.Text, {
        className: p.h,
        variant: "text-sm/normal",
        color: "text-default",
        children: d.intl.string(d.t["2vyz+N"])
      })]
    })
  })
}