/** Chunk was on web.js **/
/** chunk id: 182134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353562 = require("./353562.js");

function d(e) {
  let {
    type: t,
    options: n,
    required: a
  } = e, d = i.useMemo(() => {
    var e;
    return null == (e = n.find(e => e.default)) ? true : e.value
  }, [n]), {
    state: f,
    executeStateUpdate: p
  } = (0, l.Ee)(e, null != d ? {
    type: t,
    value: d
  } : true), _ = i.useMemo(() => (null == f ? true : f.type) === t ? f.value : null, [f, t]), h = null != _, m = i.useMemo(() => n.map(e => ({
    name: e.label,
    value: e.value,
    desc: e.description
  })), [n]), g = e => {
    p({
      type: t,
      value: e
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.FXm, {
      options: m,
      value: null != _ ? _ : "",
      onChange: g,
      required: a
    }), !a && (0, r.jsx)("div", {
      className: o()(u.clearButtonContainer, {
        [u.clearButtonContainerHidden]: !h
      }),
      "aria-hidden": !h,
      children: (0, r.jsx)(s.Button, {
        text: c.intl.string(c.t["5uAtZN"]),
        variant: "secondary",
        size: "sm",
        onClick: () => g(null)
      })
    })]
  })
}