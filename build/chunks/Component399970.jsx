/** Chunk was on web.js **/
/** chunk id: 399970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk401430 = require("./401430.js"),
  Chunk155268 = require("./155268.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
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
      return (0, u.ZP)(n)
  }
}

function b(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: u,
    authorizationError: b,
    authorizing: y
  } = (0, o.cj)([_.Z], () => ({
    authorizedApplicationId: _.Z.testModeApplicationId,
    authorizationError: _.Z.error,
    authorizing: _.Z.isFetchingAuthorization
  })), [O, v] = i.useState(null != u ? u : ""), [I, T] = i.useState("8080"), [S, A] = i.useState("localhost"), C = (0, f.Dt)(), N = g.test(O);
  async function R() {
    c.q$();
    let e = E(S, I, O);
    null != await c.Wt(O, e) && t()
  }

  function P() {
    c.mc(), v(""), A(null)
  }

  function w(e) {
    v(e)
  }

  function D(e) {
    A(e)
  }

  function x() {
    return null == b ? null : (0, r.jsx)(s.kzN, {
      className: m.marginBottom20,
      children: b
    })
  }

  function L() {
    return "localhost" !== S ? null : (0, r.jsx)(s.xJW, {
      className: h.inputWrapper,
      title: p.intl.string(p.t.fF4zxs),
      required: true,
      children: (0, r.jsx)(s.oil, {
        value: I,
        maxLength: 5,
        onChange: e => T(e),
        disabled: y
      })
    })
  }
  i.useEffect(() => () => l.Z.wait(() => c.q$()), []);
  let j = null != u && u === O,
    k = j ? P : R;
  return (0, r.jsxs)(s.Y0X, {
    "aria-labelledby": C,
    transitionState: n,
    parentComponent: "TestModeModal",
    children: [(0, r.jsxs)(s.xBx, {
      justify: d.Z.Justify.BETWEEN,
      separator: false,
      children: [(0, r.jsx)(s.vwX, {
        id: C,
        tag: "h1",
        className: m.marginReset,
        children: p.intl.string(p.t.f8fzk5)
      }), (0, r.jsx)(s.olH, {
        onClick: t
      })]
    }), (0, r.jsxs)(s.hzk, {
      className: h.modalContent,
      children: [(0, r.jsx)(s.R94, {
        className: m.marginBottom20,
        type: s.R94.Types.DESCRIPTION,
        children: p.intl.string(p.t.a6Vilp)
      }), x(), (0, r.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), k()
        },
        children: (0, r.jsxs)(d.Z, {
          direction: d.Z.Direction.VERTICAL,
          align: d.Z.Align.START,
          children: [(0, r.jsx)(s.xJW, {
            className: h.inputWrapper,
            title: p.intl.string(p.t.P6TzgI),
            required: true,
            children: (0, r.jsx)(s.oil, {
              value: O,
              maxLength: 19,
              error: N ? null : p.intl.string(p.t.gPNgKC),
              onChange: w,
              disabled: y
            })
          }), (0, r.jsx)(s.xJW, {
            className: h.inputWrapper,
            title: p.intl.string(p.t["/GTqXF"]),
            children: (0, r.jsx)(s.q4e, {
              isDisabled: !N || "" === O,
              value: S,
              options: [{
                value: "localhost",
                label: p.intl.string(p.t["+Y9Y6u"]),
                key: "localhost"
              }, {
                value: "proxy",
                label: p.intl.string(p.t.uaksyc),
                key: "proxy"
              }],
              onChange: D,
              placeholder: "URL Origin Type"
            })
          }), L(), (0, r.jsx)(a.zx, {
            submitting: y,
            type: "submit",
            disabled: !N || 0 === O.length || "localhost" === S && 0 === I.length,
            color: j ? a.zx.Colors.RED : a.zx.Colors.GREEN,
            children: j ? p.intl.string(p.t.d6TR3N) : p.intl.string(p.t.qwuK5O)
          })]
        })
      })]
    })]
  })
}