/** Chunk was on 60667 **/
/** chunk id: 912615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let A = /^\d+$|^$/;

function f(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: f,
    authorizationError: h,
    authorizing: b
  } = (0, s.cf)([_.A], () => ({
    authorizedApplicationId: _.A.testModeApplicationId,
    authorizationError: _.A.error,
    authorizing: _.A.isFetchingAuthorization
  })), [E, x] = i.useState(null != f ? f : ""), [O, C] = i.useState("8080"), [T, I] = i.useState("localhost"), S = A.test(E);
  async function j() {
    c.SH();
    let e = function(e, t, n) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, d.Ay)(n)
      }
    }(T, O, E);
    null != await c.q1(E, e) && t()
  }
  i.useEffect(() => () => o.h.wait(() => c.SH()), []);
  let v = null != f && f === E,
    N = v ? function() {
      c.cL(), x(""), I(null)
    } : j,
    y = i.useMemo(() => [{
      loading: b,
      disabled: !S || 0 === E.length || "localhost" === T && 0 === O.length,
      variant: v ? "critical-primary" : "active",
      text: v ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
      onClick: N
    }], [E.length, b, v, S, O.length, N, T]);
  return (0, r.jsxs)(l.Modal, {
    title: p.intl.string(p.t.f8fzky),
    subtitle: p.intl.string(p.t.a6Vill),
    actions: y,
    onClose: t,
    transitionState: n,
    children: [null == h ? null : (0, r.jsx)("div", {
      className: g.SX,
      children: (0, r.jsx)(a.wx6, {
        type: "critical",
        children: h
      })
    }), (0, r.jsxs)(u.A, {
      direction: u.A.Direction.VERTICAL,
      align: u.A.Align.START,
      children: [(0, r.jsx)("div", {
        className: m.I,
        children: (0, r.jsx)(a.ksK, {
          label: p.intl.string(p.t.P6TzgI),
          required: true,
          value: E,
          maxLength: 19,
          error: S ? null : p.intl.string(p.t.gPNgKO),
          onChange: function(e) {
            x(e)
          },
          disabled: b
        })
      }), (0, r.jsx)("div", {
        className: m.I,
        children: (0, r.jsx)(a.l6P, {
          selectionMode: "single",
          label: p.intl.string(p.t["/GTqXG"]),
          disabled: !S || "" === E,
          value: T,
          options: [{
            value: "localhost",
            label: p.intl.string(p.t["+Y9Y6r"]),
            id: "localhost"
          }, {
            value: "proxy",
            label: p.intl.string(p.t.uaksyW),
            id: "proxy"
          }],
          onSelectionChange: function(e) {
            I(e)
          },
          placeholder: "URL Origin Type"
        })
      }), "localhost" !== T ? null : (0, r.jsx)("div", {
        className: m.I,
        children: (0, r.jsx)(a.ksK, {
          required: true,
          label: p.intl.string(p.t.fF4zxq),
          value: O,
          maxLength: 5,
          onChange: e => C(e),
          disabled: b
        })
      })]
    })]
  })
}