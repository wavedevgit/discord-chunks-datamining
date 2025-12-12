/** Chunk was on 46161 **/
/** chunk id: 238716, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231009 = require("./231009.js");

function f(t) {
  let {
    channelId: e,
    onClose: n,
    transitionState: f,
    heading: h,
    formTitle: m,
    allowReset: v = false
  } = t, C = (0, l.e7)([c.Z], () => c.Z.getChannel(e)), k = (0, o.ZP)(C), g = u.Z.getNickname(e), [j, b] = a.useState(null != g ? g : "");

  function y(t) {
    t.preventDefault(), (0, d.UT)(e, j), n()
  }
  return (0, i.jsx)("form", {
    onSubmit: y,
    children: (0, i.jsxs)(s.u_l, {
      title: h,
      actions: [{
        text: x.intl.string(x.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
      }, {
        text: h,
        onClick: y,
        variant: "primary",
        type: "submit"
      }],
      onClose: n,
      transitionState: f,
      children: [(0, i.jsx)(r.oil, {
        label: m,
        value: j,
        onChange: b,
        placeholder: null != k ? k : true,
        maxLength: 100,
        autoFocus: true
      }), v && null != g ? (0, i.jsx)("div", {
        className: p.reset,
        children: (0, i.jsx)(r.Avr, {
          text: x.intl.string(x.t.aE02Rz),
          onClick: function() {
            (0, d.UT)(e, null), n()
          },
          textVariant: "text-sm/normal"
        })
      }) : null, (0, i.jsx)(r.Text, {
        className: p.description,
        variant: "text-sm/normal",
        color: "text-default",
        children: x.intl.string(x.t["2vyz+N"])
      })]
    })
  })
}