/** Chunk was on 67670 **/
/** chunk id: 188072, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => y
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

function x(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return (0, n.jsxs)("div", {
    className: h.RA,
    children: [(0, n.jsx)("div", {
      className: h.RY,
      children: (0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        className: h.CD,
        children: t
      })
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-strong",
      className: h.GA,
      children: r
    })]
  })
}

function y(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: y
  } = e, O = (0, i.bG)([d.default], () => null != d.default.getRemoteSessionId()), j = (0, u.A)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    O && y()
  }, [O, y]), s.useEffect(() => {
    (0, p.A)(t.id, b.f$.XBOX)
  }, [t.id]), (0, n.jsx)(a.Modal, {
    title: g.intl.string(g.t["f+Aijq"]),
    subtitle: g.intl.string(g.t.mYFmDY),
    actions: [],
    onClose: y,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: h.Nr,
      children: [(0, n.jsxs)("div", {
        className: h.O,
        children: [(0, n.jsxs)(l.Text, {
          variant: "text-lg/semibold",
          color: "text-strong",
          className: h.RA,
          children: [(0, n.jsx)(c.A, {
            className: h.Fp
          }), g.intl.string(g.t.ZNlYbK)]
        }), (0, n.jsx)(x, {
          step: 1,
          instructions: g.intl.string(g.t.dDtkl9)
        }), (0, n.jsx)(x, {
          step: 2,
          instructions: g.intl.string(g.t.IWuXjC)
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(l.MzZ, {
            className: h.C2,
            href: f.A.getArticleURL(m.MVz.XBOX_CONNECTION),
            children: g.intl.string(g.t.hvVgAZ)
          })
        })]
      }), (0, n.jsx)(o.Ay, {
        className: h.JB,
        size: 120,
        text: j
      })]
    })
  })
}