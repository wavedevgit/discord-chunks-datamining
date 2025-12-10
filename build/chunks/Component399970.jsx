/** Chunk was on web.js **/
/** chunk id: 399970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk401430 = require("./401430.js"),
  Chunk155268 = require("./155268.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk695103 = require("./695103.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39205 = require("./39205.js"),
  Chunk197571 = require("./197571.js");
let g = /^\d+$|^$/;

function E(e, t, n) {
  if (null == e) return null;
  switch (e) {
    case "localhost":
      return "https://localhost:".concat(t);
    case "proxy":
      return (0, d.ZP)(n)
  }
}

function b(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: d,
    authorizationError: b,
    authorizing: y
  } = (0, o.cj)([p.Z], () => ({
    authorizedApplicationId: p.Z.testModeApplicationId,
    authorizationError: p.Z.error,
    authorizing: p.Z.isFetchingAuthorization
  })), [O, v] = i.useState(null != d ? d : ""), [S, I] = i.useState("8080"), [T, C] = i.useState("localhost"), A = g.test(O);
  async function N() {
    u.q$();
    let e = E(T, S, O);
    null != await u.Wt(O, e) && t()
  }

  function P() {
    u.mc(), v(""), C(null)
  }

  function R(e) {
    v(e)
  }

  function w(e) {
    C(e)
  }

  function D() {
    return null == b ? null : (0, r.jsx)("div", {
      className: h.marginBottom20,
      children: (0, r.jsx)(l.M14, {
        type: "critical",
        children: b
      })
    })
  }

  function x() {
    return "localhost" !== T ? null : (0, r.jsx)("div", {
      className: m.inputWrapper,
      children: (0, r.jsx)(l.oil, {
        required: true,
        label: _.intl.string(_.t.fF4zxq),
        value: S,
        maxLength: 5,
        onChange: e => I(e),
        disabled: y
      })
    })
  }
  i.useEffect(() => () => c.Z.wait(() => u.q$()), []);
  let L = null != d && d === O,
    j = L ? P : N,
    M = i.useMemo(() => [{
      loading: y,
      disabled: !A || 0 === O.length || "localhost" === T && 0 === S.length,
      variant: L ? "critical-primary" : "active",
      text: L ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
      onClick: j
    }], [O.length, y, L, A, S.length, j, T]);
  return (0, r.jsxs)(a.Modal, {
    title: _.intl.string(_.t.f8fzky),
    subtitle: _.intl.string(_.t.a6Vill),
    actions: M,
    onClose: t,
    transitionState: n,
    children: [D(), (0, r.jsxs)(f.Z, {
      direction: f.Z.Direction.VERTICAL,
      align: f.Z.Align.START,
      children: [(0, r.jsx)("div", {
        className: m.inputWrapper,
        children: (0, r.jsx)(l.oil, {
          label: _.intl.string(_.t.P6TzgI),
          required: true,
          value: O,
          maxLength: 19,
          error: A ? null : _.intl.string(_.t.gPNgKO),
          onChange: R,
          disabled: y
        })
      }), (0, r.jsx)("div", {
        className: m.inputWrapper,
        children: (0, r.jsx)(s.y6, {
          label: _.intl.string(_.t["/GTqXG"]),
          isDisabled: !A || "" === O,
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
          onChange: w,
          placeholder: "URL Origin Type"
        })
      }), x()]
    })]
  })
}