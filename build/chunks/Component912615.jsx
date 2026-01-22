/** Chunk was on web.js **/
/** chunk id: 912615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk271866 = require("./271866.js"),
  Chunk956518 = require("./956518.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk147964 = require("./147964.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk361151 = require("./361151.js"),
  Chunk473169 = require("./473169.js");
let m = /^\d+$|^$/;

function g(e, t, n) {
  if (null == e) return null;
  switch (e) {
    case "localhost":
      return "https://localhost:".concat(t);
    case "proxy":
      return (0, u.Ay)(n)
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
  } = (0, s.cf)([f.A], () => ({
    authorizedApplicationId: f.A.testModeApplicationId,
    authorizationError: f.A.error,
    authorizing: f.A.isFetchingAuthorization
  })), [y, O] = i.useState(null != u ? u : ""), [A, v] = i.useState("8080"), [S, I] = i.useState("localhost"), T = m.test(y);
  async function C() {
    c.SH();
    let e = g(S, A, y);
    null != await c.q1(y, e) && t()
  }

  function N() {
    c.cL(), O(""), I(null)
  }

  function R(e) {
    O(e)
  }

  function w(e) {
    I(e)
  }

  function P() {
    return null == E ? null : (0, r.jsx)("div", {
      className: h.SX,
      children: (0, r.jsx)(o.wx6, {
        type: "critical",
        children: E
      })
    })
  }

  function D() {
    return "localhost" !== S ? null : (0, r.jsx)("div", {
      className: _.I,
      children: (0, r.jsx)(o.ksK, {
        required: true,
        label: p.intl.string(p.t.fF4zxq),
        value: A,
        maxLength: 5,
        onChange: e => v(e),
        disabled: b
      })
    })
  }
  i.useEffect(() => () => l.h.wait(() => c.SH()), []);
  let x = null != u && u === y,
    L = x ? N : C,
    j = i.useMemo(() => [{
      loading: b,
      disabled: !T || 0 === y.length || "localhost" === S && 0 === A.length,
      variant: x ? "critical-primary" : "active",
      text: x ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
      onClick: L
    }], [y.length, b, x, T, A.length, L, S]);
  return (0, r.jsxs)(a.Modal, {
    title: p.intl.string(p.t.f8fzky),
    subtitle: p.intl.string(p.t.a6Vill),
    actions: j,
    onClose: t,
    transitionState: n,
    children: [P(), (0, r.jsxs)(d.A, {
      direction: d.A.Direction.VERTICAL,
      align: d.A.Align.START,
      children: [(0, r.jsx)("div", {
        className: _.I,
        children: (0, r.jsx)(o.ksK, {
          label: p.intl.string(p.t.P6TzgI),
          required: true,
          value: y,
          maxLength: 19,
          error: T ? null : p.intl.string(p.t.gPNgKO),
          onChange: R,
          disabled: b
        })
      }), (0, r.jsx)("div", {
        className: _.I,
        children: (0, r.jsx)(o.l6P, {
          selectionMode: "single",
          label: p.intl.string(p.t["/GTqXG"]),
          disabled: !T || "" === y,
          value: S,
          options: [{
            value: "localhost",
            label: p.intl.string(p.t["+Y9Y6r"]),
            id: "localhost"
          }, {
            value: "proxy",
            label: p.intl.string(p.t.uaksyW),
            id: "proxy"
          }],
          onSelectionChange: w,
          placeholder: "URL Origin Type"
        })
      }), D()]
    })]
  })
}