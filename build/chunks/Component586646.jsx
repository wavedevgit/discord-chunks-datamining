/** Chunk was on 84927 **/
/** chunk id: 586646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk19780 = require("./19780.js"),
  Chunk571826 = require("./571826.js"),
  Chunk630759 = require("./630759.js"),
  Chunk301107 = require("./301107.js"),
  Chunk785792 = require("./785792.jsx"),
  Chunk190054 = require("./190054.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk506317 = require("./506317.js");

function O(e) {
  let {
    channelId: t
  } = e, n = (0, s.e7)([a.Z], () => {
    var e;
    return null == (e = a.Z.getSecureFramesState()) ? true : e.epochAuthenticator
  }), O = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: f.y6,
    desiredLength: f.YP
  }), y = l.useCallback(() => {
    (0, o.PM)({
      channelId: t
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsxs)("div", {
      className: p.tag,
      children: [(0, r.jsx)(i.mBM, {
        size: "xxs",
        color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE
      }), (0, r.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: g.intl.string(g.t["3BogKS"])
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: g.intl.string(g.t.B9JNsr)
    }), (0, r.jsxs)("div", {
      className: p.header,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: g.intl.string(g.t.cTQI5u)
      }), null != O && (0, r.jsx)(h.H, {
        chunks: O,
        color: i.TVs.colors.INTERACTIVE_NORMAL.css,
        onCopy: y
      })]
    }), (0, r.jsx)(d.b, {
      className: p.code,
      chunks: O,
      columns: f.WK
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: g.intl.format(g.t.wKxADQ, {
        helpArticle: (0, c.uV)()
      })
    })]
  })
}