/** Chunk was on 522 **/
/** chunk id: 200623, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => C
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

function h(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return (0, n.jsxs)("div", {
    className: g.cardRow,
    children: [(0, n.jsx)("div", {
      className: g.stepNumberContainer,
      children: (0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        className: g.stepNumber,
        children: t
      })
    }), (0, n.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: g.instructions,
      children: r
    })]
  })
}

function C(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: C
  } = e, _ = (0, i.e7)([u.default], () => null != u.default.getRemoteSessionId()), j = (0, f.Z)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    _ && C()
  }, [_, C]), s.useEffect(() => {
    (0, m.Z)(t.id, p.YE.XBOX)
  }, [t.id]), (0, n.jsx)(a.Modal, {
    title: b.intl.string(b.t["f+Aijo"]),
    subtitle: b.intl.string(b.t.mYFmDQ),
    actions: [],
    onClose: C,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: g.card,
      children: [(0, n.jsxs)("div", {
        className: g.cardText,
        children: [(0, n.jsxs)(c.Text, {
          variant: "text-lg/semibold",
          color: "header-primary",
          className: g.cardRow,
          children: [(0, n.jsx)(l.Z, {
            className: g.cardHeaderIcon
          }), b.intl.string(b.t.ZNlYbG)]
        }), (0, n.jsx)(h, {
          step: 1,
          instructions: b.intl.string(b.t.dDtkl5)
        }), (0, n.jsx)(h, {
          step: 2,
          instructions: b.intl.string(b.t.IWuXjI)
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: (0, n.jsx)(c.eee, {
            className: g.learnMore,
            href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
            children: b.intl.string(b.t.hvVgAQ)
          })
        })]
      }), (0, n.jsx)(o.ZP, {
        className: g.qrCode,
        size: 120,
        text: j
      })]
    })
  })
}