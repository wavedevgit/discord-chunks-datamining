/** Chunk was on web.js **/
/** chunk id: 455611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function p(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, s = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), o = i.useRef(null), l = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && c.p5) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, c.C)(s), null == o || null == (t = o.current) || t.focus()
    }
  }, [s]);
  return (0, r.jsx)("li", {
    className: f.SX,
    children: (0, r.jsxs)(a.DUT, {
      innerRef: o,
      className: d.Uc,
      onKeyDown: l,
      children: [(0, r.jsx)(a.P7L, {
        checked: n
      }), (0, r.jsx)("span", {
        className: d.aY,
        children: s
      })]
    })
  })
}

function _(e) {
  let {
    backupCodes: t
  } = e, n = i.useCallback(e => e.map(e => (0, r.jsx)(p, {
    code: e
  }, e.code)), []), c = i.useCallback(async () => {
    let e = l.A.getVerificationKey();
    await s.A.confirmViewBackupCodes(e, true)
  }, []);
  return (0, r.jsxs)(a.D0$, {
    label: u.intl.string(u.t.GfqHPn),
    description: u.intl.format(u.t.OhmvYt, {}),
    children: [(0, r.jsxs)(o.A, {
      children: [(0, r.jsx)(o.A.Child, {
        children: (0, r.jsx)("ul", {
          className: d.Pm,
          children: n(t.slice(0, t.length / 2))
        })
      }), (0, r.jsx)(o.A.Child, {
        children: (0, r.jsx)("ul", {
          className: d.Pm,
          children: n(t.slice(t.length / 2))
        })
      })]
    }), (0, r.jsx)(a.QWc, {
      textVariant: "text-sm/medium",
      onClick: c,
      text: u.intl.string(u.t.RIThUu)
    })]
  })
}