/** Chunk was on 35894 **/
/** chunk id: 273926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IJ: () => u,
  LK: () => f,
  Ot: () => b,
  xs: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712104 = require("./712104.js");

function u(e) {
  let {
    terms: t,
    channelId: n,
    className: l
  } = e;
  return (0, r.jsx)("div", {
    className: i()(d.qE, l),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: d.gJ,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: d.RQ,
        children: a.A.parseGuildVerificationFormRule(e, true, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function C(e) {
  let {
    onChange: t,
    checked: n,
    disabled: l
  } = e;
  return (0, r.jsx)("div", {
    className: d.kv,
    children: (0, r.jsx)(o.Checkbox, {
      checked: !!n,
      onChange: t,
      disabled: l,
      label: c.intl.string(c.t["2EXfGJ"])
    })
  })
}

function f(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(s.fu, {
    icon: o.B8Q,
    text: c.intl.string(c.t["2xbmoG"]),
    meetsRequirement: !!t.response
  })
}
let b = e => {
  let {
    channelId: t,
    formField: n,
    onChange: l
  } = e;
  return (0, r.jsxs)(s.cS, {
    title: c.intl.string(c.t["Q8OFN+"]),
    children: [(0, r.jsx)(u, {
      className: d.n_,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(C, {
      onChange: l,
      checked: n.response
    })]
  })
}