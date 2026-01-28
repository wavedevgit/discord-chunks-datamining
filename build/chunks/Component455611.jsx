/** Chunk was on 5606 **/
/** chunk id: 455611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk670492 = require("./670492.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk139674 = require("./139674.js"),
  Chunk473169 = require("./473169.js");

function _(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, s = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), a = i.useRef(null), o = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && c.p5) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, c.C)(s), null == a || null == (t = a.current) || t.focus()
    }
  }, [s]);
  return (0, r.jsx)("li", {
    className: p.SX,
    children: (0, r.jsxs)(l.DUT, {
      innerRef: a,
      className: u.Uc,
      onKeyDown: o,
      children: [(0, r.jsx)(l.P7L, {
        checked: n
      }), (0, r.jsx)("span", {
        className: u.aY,
        children: s
      })]
    })
  })
}

function m(e) {
  let {
    backupCodes: t
  } = e, n = i.useCallback(e => e.map(e => (0, r.jsx)(_, {
    code: e
  }, e.code)), []), c = i.useCallback(async () => {
    let e = o.A.getVerificationKey();
    await s.A.confirmViewBackupCodes(e, true)
  }, []);
  return (0, r.jsxs)(l.D0$, {
    label: d.intl.string(d.t.GfqHPn),
    description: d.intl.format(d.t.OhmvYt, {}),
    children: [(0, r.jsxs)(a.A, {
      children: [(0, r.jsx)(a.A.Child, {
        children: (0, r.jsx)("ul", {
          className: u.Pm,
          children: n(t.slice(0, t.length / 2))
        })
      }), (0, r.jsx)(a.A.Child, {
        children: (0, r.jsx)("ul", {
          className: u.Pm,
          children: n(t.slice(t.length / 2))
        })
      })]
    }), (0, r.jsx)(l.QWc, {
      textVariant: "text-sm/medium",
      onClick: c,
      text: d.intl.string(d.t.RIThUu)
    })]
  })
}