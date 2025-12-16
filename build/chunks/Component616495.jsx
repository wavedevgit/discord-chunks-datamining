/** Chunk was on web.js **/
/** chunk id: 616495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk325067 = require("./325067.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk335094 = require("./335094.js"),
  Chunk478411 = require("./478411.js");

function p(e) {
  let {
    code: {
      code: t,
      consumed: n
    }
  } = e, o = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), s = i.useRef(null), l = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && c.wS) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, c.JG)(o), null == s || null == (t = s.current) || t.focus()
    }
  }, [o]);
  return (0, r.jsx)("li", {
    className: f.marginBottom20,
    children: (0, r.jsxs)(a.P3F, {
      innerRef: s,
      className: d.backupCode,
      onKeyDown: l,
      children: [(0, r.jsx)(a.FZ5, {
        checked: n
      }), (0, r.jsx)("span", {
        className: d.code,
        children: o
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
    let e = l.Z.getVerificationKey();
    await o.Z.confirmViewBackupCodes(e, true)
  }, []);
  return (0, r.jsxs)(a.gNt, {
    label: u.intl.string(u.t.GfqHPn),
    description: u.intl.format(u.t.OhmvYt, {}),
    children: [(0, r.jsxs)(s.Z, {
      children: [(0, r.jsx)(s.Z.Child, {
        children: (0, r.jsx)("ul", {
          className: d.checkboxGroup,
          children: n(t.slice(0, t.length / 2))
        })
      }), (0, r.jsx)(s.Z.Child, {
        children: (0, r.jsx)("ul", {
          className: d.checkboxGroup,
          children: n(t.slice(t.length / 2))
        })
      })]
    }), (0, r.jsx)(a.Avr, {
      textVariant: "text-sm/medium",
      onClick: c,
      text: u.intl.string(u.t.RIThUu)
    })]
  })
}