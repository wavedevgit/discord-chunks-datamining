/** Chunk was on 45929 **/
/** chunk id: 200623, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk258609 = require("./258609.js"),
  Chunk259408 = require("./259408.js"),
  Chunk893387 = require("./893387.js"),
  Chunk927923 = require("./927923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk751394 = require("./751394.js");

function _(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return (0, n.jsxs)("div", {
    className: x.cardRow,
    children: [(0, n.jsx)("div", {
      className: x.stepNumberContainer,
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/semibold",
        className: x.stepNumber,
        children: t
      })
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: x.instructions,
      children: r
    })]
  })
}

function g(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: g
  } = e, y = (0, o.e7)([u.default], () => null != u.default.getRemoteSessionId()), C = (0, f.Z)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    y && g()
  }, [y, g]), s.useEffect(() => {
    (0, p.Z)(t.id, m.YE.XBOX)
  }, [t.id]), (0, n.jsx)(i.Modal, {
    title: b.intl.string(b.t["f+Aijo"]),
    subtitle: b.intl.string(b.t.mYFmDQ),
    actions: [],
    onClose: g,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: x.card,
      children: [(0, n.jsxs)("div", {
        className: x.cardText,
        children: [(0, n.jsxs)(a.Text, {
          variant: "text-lg/semibold",
          color: "header-primary",
          className: x.cardRow,
          children: [(0, n.jsx)(l.Z, {
            className: x.cardHeaderIcon
          }), b.intl.string(b.t.ZNlYbG)]
        }), (0, n.jsx)(_, {
          step: 1,
          instructions: b.intl.string(b.t.dDtkl5)
        }), (0, n.jsx)(_, {
          step: 2,
          instructions: b.intl.string(b.t.IWuXjI)
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(a.Anchor, {
            className: x.learnMore,
            href: d.Z.getArticleURL(h.BhN.XBOX_CONNECTION),
            children: b.intl.string(b.t.hvVgAQ)
          })
        })]
      }), (0, n.jsx)(c.ZP, {
        className: x.qrCode,
        size: 120,
        text: C
      })]
    })
  })
}