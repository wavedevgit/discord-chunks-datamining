/** Chunk was on 67670 **/
/** chunk id: 188072, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk643501 = require("./643501.js"),
  Chunk271872 = require("./271872.js"),
  Chunk350701 = require("./350701.js"),
  Chunk544105 = require("./544105.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536518 = require("./536518.js");

function h(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return (0, n.jsxs)("div", {
    className: g.RA,
    children: [(0, n.jsx)("div", {
      className: g.RY,
      children: (0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        className: g.CD,
        children: t
      })
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-strong",
      className: g.GA,
      children: r
    })]
  })
}

function b(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: b
  } = e, O = (0, i.bG)([u.default], () => null != u.default.getRemoteSessionId()), _ = (0, f.A)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    O && b()
  }, [O, b]), s.useEffect(() => {
    (0, p.A)(t.id, m.f$.XBOX)
  }, [t.id]), (0, n.jsx)(o.Modal, {
    title: y.intl.string(y.t["f+Aijq"]),
    subtitle: y.intl.string(y.t.mYFmDY),
    actions: [],
    onClose: b,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: g.Nr,
      children: [(0, n.jsxs)("div", {
        className: g.O,
        children: [(0, n.jsxs)(l.Text, {
          variant: "text-lg/semibold",
          color: "text-strong",
          className: g.RA,
          children: [(0, n.jsx)(c.A, {
            className: g.Fp
          }), y.intl.string(y.t.ZNlYbK)]
        }), (0, n.jsx)(h, {
          step: 1,
          instructions: y.intl.string(y.t.dDtkl9)
        }), (0, n.jsx)(h, {
          step: 2,
          instructions: y.intl.string(y.t.IWuXjC)
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(l.MzZ, {
            className: g.C2,
            href: d.A.getArticleURL(x.MVz.XBOX_CONNECTION),
            children: y.intl.string(y.t.hvVgAZ)
          })
        })]
      }), (0, n.jsx)(a.Ay, {
        className: g.JB,
        size: 120,
        text: _
      })]
    })
  })
}