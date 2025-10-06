/** Chunk was on 11324 **/
/** chunk id: 196345, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EK: () => m,
  G0: () => f,
  QC: () => h,
  dd: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162359 = require("./162359.js");

function m(e) {
  let {
    terms: t,
    channelId: n,
    className: l
  } = e;
  return (0, r.jsx)("div", {
    className: i()(d.termsFieldBody, l),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: d.termsRow,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: o.Z.parseGuildVerificationFormRule(e, true, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function f(e) {
  let {
    onChange: t,
    checked: n,
    disabled: l
  } = e;
  return (0, r.jsx)(s.VL, {
    checked: n,
    onChange: t,
    disabled: l,
    className: d.checkbox,
    label: u.intl.string(u.t["2EXfGB"])
  })
}

function h(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(c.Ih, {
    icon: a.snC,
    text: u.intl.string(u.t["2xbmoK"]),
    meetsRequirement: !!t.response
  })
}
let x = e => {
  let {
    channelId: t,
    formField: n,
    onChange: l
  } = e;
  return (0, r.jsxs)(c.hK, {
    title: u.intl.string(u.t.Q8OFNz),
    children: [(0, r.jsx)(m, {
      className: d.disabledFieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(f, {
      onChange: l,
      checked: n.response
    })]
  })
}