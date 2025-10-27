/** Chunk was on web.js **/
/** chunk id: 399970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk401430 = require("./401430.js"),
  Chunk155268 = require("./155268.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk695103 = require("./695103.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39205 = require("./39205.js"),
  Chunk197571 = require("./197571.js");
let m = /^\d+$|^$/;

function g(e, t, n) {
  if (null == e) return null;
  switch (e) {
    case "localhost":
      return "https://localhost:".concat(t);
    case "proxy":
      return (0, u.ZP)(n)
  }
}

function E(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: u,
    authorizationError: E,
    authorizing: b
  } = (0, o.cj)([f.Z], () => ({
    authorizedApplicationId: f.Z.testModeApplicationId,
    authorizationError: f.Z.error,
    authorizing: f.Z.isFetchingAuthorization
  })), [y, O] = i.useState(null != u ? u : ""), [v, I] = i.useState("8080"), [T, S] = i.useState("localhost"), A = m.test(y);
  async function C() {
    c.q$();
    let e = g(T, v, y);
    null != await c.Wt(y, e) && t()
  }

  function N() {
    c.mc(), O(""), S(null)
  }

  function R(e) {
    O(e)
  }

  function P(e) {
    S(e)
  }

  function D() {
    return null == E ? null : (0, r.jsx)("div", {
      className: h.marginBottom20,
      children: (0, r.jsx)(s.M14, {
        type: "critical",
        children: E
      })
    })
  }

  function w() {
    return "localhost" !== T ? null : (0, r.jsx)("div", {
      className: p.inputWrapper,
      children: (0, r.jsx)(s.oil, {
        required: true,
        label: _.intl.string(_.t.fF4zxq),
        value: v,
        maxLength: 5,
        onChange: e => I(e),
        disabled: b
      })
    })
  }
  i.useEffect(() => () => l.Z.wait(() => c.q$()), []);
  let L = null != u && u === y,
    x = L ? N : C,
    M = i.useMemo(() => [{
      loading: b,
      disabled: !A || 0 === y.length || "localhost" === T && 0 === v.length,
      variant: L ? "critical-primary" : "active",
      text: L ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
      onClick: x
    }], [y.length, b, L, A, v.length, x, T]);
  return (0, r.jsxs)(a.Modal, {
    title: _.intl.string(_.t.f8fzky),
    subtitle: _.intl.string(_.t.a6Vill),
    actions: M,
    onClose: t,
    transitionState: n,
    children: [D(), (0, r.jsxs)(d.Z, {
      direction: d.Z.Direction.VERTICAL,
      align: d.Z.Align.START,
      children: [(0, r.jsx)("div", {
        className: p.inputWrapper,
        children: (0, r.jsx)(s.oil, {
          label: _.intl.string(_.t.P6TzgI),
          required: true,
          value: y,
          maxLength: 19,
          error: A ? null : _.intl.string(_.t.gPNgKO),
          onChange: R,
          disabled: b
        })
      }), (0, r.jsx)("div", {
        className: p.inputWrapper,
        children: (0, r.jsx)(s.q4e, {
          label: _.intl.string(_.t["/GTqXG"]),
          isDisabled: !A || "" === y,
          value: T,
          options: [{
            value: "localhost",
            label: _.intl.string(_.t["+Y9Y6r"]),
            key: "localhost"
          }, {
            value: "proxy",
            label: _.intl.string(_.t.uaksyW),
            key: "proxy"
          }],
          onChange: P,
          placeholder: "URL Origin Type"
        })
      }), w()]
    })]
  })
}