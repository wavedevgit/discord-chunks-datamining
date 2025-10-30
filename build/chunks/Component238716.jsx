/** Chunk was on 46161 **/
/** chunk id: 238716, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk380041 = require("./380041.js");

function h(t) {
  let {
    channelId: n,
    onClose: e,
    transitionState: h,
    heading: m,
    formTitle: f,
    allowReset: v = false
  } = t, C = (0, l.e7)([c.Z], () => c.Z.getChannel(n)), k = (0, o.ZP)(C), g = u.Z.getNickname(n), [j, b] = a.useState(null != g ? g : "");

  function y(t) {
    t.preventDefault(), (0, d.UT)(n, j), e()
  }
  return (0, i.jsx)("form", {
    onSubmit: y,
    children: (0, i.jsxs)(s.u_l, {
      title: m,
      actions: [{
        text: p.intl.string(p.t["ETE/oC"]),
        onClick: e,
        variant: "secondary"
      }, {
        text: m,
        onClick: y,
        variant: "primary",
        type: "submit"
      }],
      onClose: e,
      transitionState: h,
      children: [(0, i.jsx)(r.oil, {
        label: f,
        value: j,
        onChange: b,
        placeholder: null != k ? k : true,
        maxLength: 100,
        autoFocus: true
      }), v && null != g ? (0, i.jsx)("div", {
        className: x.reset,
        children: (0, i.jsx)(r.Avr, {
          text: p.intl.string(p.t.aE02Rz),
          onClick: function() {
            (0, d.UT)(n, null), e()
          },
          textVariant: "text-sm/normal"
        })
      }) : null, (0, i.jsx)(r.Text, {
        className: x.description,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: p.intl.string(p.t["2vyz+N"])
      })]
    })
  })
}