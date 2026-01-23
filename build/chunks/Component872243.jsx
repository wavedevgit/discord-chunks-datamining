/** Chunk was on 83504 **/
/** chunk id: 872243, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(t) {
  let {
    channelId: n,
    onClose: e,
    transitionState: p,
    heading: m,
    formTitle: f,
    allowReset: k = false
  } = t, v = (0, l.bG)([o.A], () => o.A.getChannel(n)), C = (0, c.Ay)(v), g = u.A.getNickname(n), [b, j] = i.useState(null != g ? g : "");

  function y(t) {
    t.preventDefault(), (0, d.w6)(n, b), e()
  }
  return (0, a.jsx)("form", {
    onSubmit: y,
    children: (0, a.jsxs)(s.aFV, {
      title: m,
      actions: [{
        text: x.intl.string(x.t["ETE/oC"]),
        onClick: e,
        variant: "secondary"
      }, {
        text: m,
        onClick: y,
        variant: "primary",
        type: "submit"
      }],
      onClose: e,
      transitionState: p,
      children: [(0, a.jsx)(r.ksK, {
        label: f,
        value: b,
        onChange: j,
        placeholder: null != C ? C : true,
        maxLength: 100,
        autoFocus: true
      }), k && null != g ? (0, a.jsx)("div", {
        className: h.c,
        children: (0, a.jsx)(r.QWc, {
          text: x.intl.string(x.t.aE02Rz),
          onClick: function() {
            (0, d.w6)(n, null), e()
          },
          textVariant: "text-sm/normal"
        })
      }) : null, (0, a.jsx)(r.Text, {
        className: h.h,
        variant: "text-sm/normal",
        color: "text-default",
        children: x.intl.string(x.t["2vyz+N"])
      })]
    })
  })
}