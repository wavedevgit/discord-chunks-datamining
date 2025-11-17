/** Chunk was on 60831 **/
/** chunk id: 586646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function E(e) {
  let {
    channelId: t
  } = e, n = (0, r.e7)([o.Z], () => {
    var e;
    return null == (e = o.Z.getSecureFramesState()) ? true : e.epochAuthenticator
  }), E = (0, c.W)({
    fingerprintBase64: n,
    chunkSize: g.y6,
    desiredLength: g.YP
  }), N = i.useCallback(() => {
    (0, s.PM)({
      channelId: t
    })
  }, [t]);
  return (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsxs)("div", {
      className: p.tag,
      children: [(0, l.jsx)(a.mBM, {
        size: "xxs",
        color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: h.intl.string(h.t["3BogKe"])
      })]
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: h.intl.string(h.t.B9JNsl)
    }), (0, l.jsxs)("div", {
      className: p.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: h.intl.string(h.t.cTQI5t)
      }), null != E && (0, l.jsx)(f.H, {
        chunks: E,
        color: a.TVs.colors.INTERACTIVE_NORMAL.css,
        onCopy: N
      })]
    }), (0, l.jsx)(d.b, {
      className: p.code,
      chunks: E,
      columns: g.WK
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: h.intl.format(h.t.wKxADe, {
        helpArticle: (0, u.uV)()
      })
    })]
  })
}