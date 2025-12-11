/** Chunk was on 45929 **/
/** chunk id: 200623, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk337016 = require("./337016.js");

function g(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return (0, n.jsxs)("div", {
    className: x.cardRow,
    children: [(0, n.jsx)("div", {
      className: x.stepNumberContainer,
      children: (0, n.jsx)(i.Text, {
        variant: "text-sm/semibold",
        className: x.stepNumber,
        children: t
      })
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: x.instructions,
      children: r
    })]
  })
}

function C(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: C
  } = e, y = (0, a.e7)([u.default], () => null != u.default.getRemoteSessionId()), O = (0, f.Z)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    y && C()
  }, [y, C]), s.useEffect(() => {
    (0, p.Z)(t.id, m.YE.XBOX)
  }, [t.id]), (0, n.jsx)(c.Modal, {
    title: b.intl.string(b.t["f+Aijq"]),
    subtitle: b.intl.string(b.t.mYFmDY),
    actions: [],
    onClose: C,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: x.card,
      children: [(0, n.jsxs)("div", {
        className: x.cardText,
        children: [(0, n.jsxs)(i.Text, {
          variant: "text-lg/semibold",
          color: "header-primary",
          className: x.cardRow,
          children: [(0, n.jsx)(l.Z, {
            className: x.cardHeaderIcon
          }), b.intl.string(b.t.ZNlYbK)]
        }), (0, n.jsx)(g, {
          step: 1,
          instructions: b.intl.string(b.t.dDtkl9)
        }), (0, n.jsx)(g, {
          step: 2,
          instructions: b.intl.string(b.t.IWuXjC)
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(i.Anchor, {
            className: x.learnMore,
            href: d.Z.getArticleURL(h.BhN.XBOX_CONNECTION),
            children: b.intl.string(b.t.hvVgAZ)
          })
        })]
      }), (0, n.jsx)(o.ZP, {
        className: x.qrCode,
        size: 120,
        text: O
      })]
    })
  })
}