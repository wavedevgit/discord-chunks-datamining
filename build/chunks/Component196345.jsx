/** Chunk was on 77025 **/
/** chunk id: 196345, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EK: () => d,
  G0: () => m,
  QC: () => f,
  dd: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk667084 = require("./667084.js");

function d(e) {
  let {
    terms: t,
    channelId: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: l()(u.termsFieldBody, i),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: u.termsRow,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.termsRowContent,
        children: a.Z.parseGuildVerificationFormRule(e, true, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function m(e) {
  let {
    onChange: t,
    checked: n,
    disabled: i
  } = e;
  return (0, r.jsx)(s.XZJ, {
    size: 24,
    type: s.XZJ.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: i,
    style: {
      borderWidth: 2
    },
    className: u.checkbox,
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: c.intl.string(c.t["2EXfGB"])
    })
  })
}

function f(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(o.Ih, {
    icon: s.snC,
    text: c.intl.string(c.t["2xbmoK"]),
    meetsRequirement: !!t.response
  })
}
let h = e => {
  let {
    channelId: t,
    formField: n,
    onChange: i
  } = e;
  return (0, r.jsxs)(o.hK, {
    title: c.intl.string(c.t.Q8OFNz),
    children: [(0, r.jsx)(d, {
      className: u.disabledFieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(m, {
      onChange: i,
      checked: n.response
    })]
  })
}