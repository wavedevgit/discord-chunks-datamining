/** Chunk was on 5606 **/
/** chunk id: 912615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let f = /^\d+$|^$/;

function b(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: b,
    authorizationError: h,
    authorizing: A
  } = (0, s.cf)([p.A], () => ({
    authorizedApplicationId: p.A.testModeApplicationId,
    authorizationError: p.A.error,
    authorizing: p.A.isFetchingAuthorization
  })), [E, x] = i.useState(null != b ? b : ""), [O, C] = i.useState("8080"), [y, j] = i.useState("localhost"), T = f.test(E);
  async function v() {
    c.SH();
    let e = function(e, t, n) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, d.Ay)(n)
      }
    }(y, O, E);
    null != await c.q1(E, e) && t()
  }
  i.useEffect(() => () => o.h.wait(() => c.SH()), []);
  let S = null != b && b === E,
    I = S ? function() {
      c.cL(), x(""), j(null)
    } : v,
    N = i.useMemo(() => [{
      loading: A,
      disabled: !T || 0 === E.length || "localhost" === y && 0 === O.length,
      variant: S ? "critical-primary" : "active",
      text: S ? _.intl.string(_.t.d6TR3I) : _.intl.string(_.t.qwuK5I),
      onClick: I
    }], [E.length, A, S, T, O.length, I, y]);
  return (0, r.jsxs)(l.Modal, {
    title: _.intl.string(_.t.f8fzky),
    subtitle: _.intl.string(_.t.a6Vill),
    actions: N,
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
          label: _.intl.string(_.t.P6TzgI),
          required: true,
          value: E,
          maxLength: 19,
          error: T ? null : _.intl.string(_.t.gPNgKO),
          onChange: function(e) {
            x(e)
          },
          disabled: A
        })
      }), (0, r.jsx)("div", {
        className: m.I,
        children: (0, r.jsx)(a.l6P, {
          selectionMode: "single",
          label: _.intl.string(_.t["/GTqXG"]),
          disabled: !T || "" === E,
          value: y,
          options: [{
            value: "localhost",
            label: _.intl.string(_.t["+Y9Y6r"]),
            id: "localhost"
          }, {
            value: "proxy",
            label: _.intl.string(_.t.uaksyW),
            id: "proxy"
          }],
          onSelectionChange: function(e) {
            j(e)
          },
          placeholder: "URL Origin Type"
        })
      }), "localhost" !== y ? null : (0, r.jsx)("div", {
        className: m.I,
        children: (0, r.jsx)(a.ksK, {
          required: true,
          label: _.intl.string(_.t.fF4zxq),
          value: O,
          maxLength: 5,
          onChange: e => C(e),
          disabled: A
        })
      })]
    })]
  })
}