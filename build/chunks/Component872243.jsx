/** Chunk was on 83504 **/
/** chunk id: 872243, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(t) {
  let {
    channelId: e,
    onClose: n,
    transitionState: m,
    heading: p,
    formTitle: f,
    allowReset: k = false
  } = t, v = (0, i.bG)([o.A], () => o.A.getChannel(e)), C = (0, c.Ay)(v), b = u.A.getNickname(e), [g, j] = l.useState(null != b ? b : "");

  function y(t) {
    t.preventDefault(), (0, d.w6)(e, g), n()
  }
  return (0, a.jsx)("form", {
    onSubmit: y,
    children: (0, a.jsxs)(s.aFV, {
      title: p,
      actions: [{
        text: x.intl.string(x.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
      }, {
        text: p,
        onClick: y,
        variant: "primary",
        type: "submit"
      }],
      onClose: n,
      transitionState: m,
      children: [(0, a.jsx)(r.ksK, {
        label: f,
        value: g,
        onChange: j,
        placeholder: null != C ? C : true,
        maxLength: 100,
        autoFocus: true
      }), k && null != b ? (0, a.jsx)("div", {
        className: h.c,
        children: (0, a.jsx)(r.QWc, {
          text: x.intl.string(x.t.aE02Rz),
          onClick: function() {
            (0, d.w6)(e, null), n()
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