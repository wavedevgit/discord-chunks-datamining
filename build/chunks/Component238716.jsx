/** Chunk was on 46161 **/
/** chunk id: 238716, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk589253 = require("./589253.js");

function h(t) {
  let {
    channelId: n,
    onClose: e,
    transitionState: h,
    heading: m,
    formTitle: f,
    allowReset: v = false
  } = t, C = (0, a.e7)([c.Z], () => c.Z.getChannel(n)), k = (0, o.ZP)(C), g = u.Z.getNickname(n), [j, b] = l.useState(null != g ? g : "");

  function _(t) {
    t.preventDefault(), (0, d.UT)(n, j), e()
  }
  return (0, i.jsx)("form", {
    onSubmit: _,
    children: (0, i.jsxs)(s.u_l, {
      title: m,
      actions: [{
        text: x.intl.string(x.t["ETE/oC"]),
        onClick: e,
        variant: "secondary"
      }, {
        text: m,
        onClick: _,
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
        className: p.reset,
        children: (0, i.jsx)(r.Avr, {
          text: x.intl.string(x.t.aE02Rz),
          onClick: function() {
            (0, d.UT)(n, null), e()
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