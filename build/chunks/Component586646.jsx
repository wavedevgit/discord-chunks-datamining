/** Chunk was on 69813 **/
/** chunk id: 586646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk321835 = require("./321835.js");

function m(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([o.Z], () => {
    var e;
    return null == (e = o.Z.getSecureFramesState()) ? true : e.epochAuthenticator
  }), m = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: p.y6,
    desiredLength: p.YP
  }), h = l.useCallback(() => {
    (0, c.PM)({
      channelId: t
    })
  }, [t]);
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsxs)("div", {
      className: b.tag,
      children: [(0, r.jsx)(a.mBM, {
        size: "xxs",
        color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: g.intl.string(g.t["3BogKe"])
      })]
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      children: g.intl.string(g.t.B9JNsl)
    }), (0, r.jsxs)("div", {
      className: b.header,
      children: [(0, r.jsx)(a.Heading, {
        variant: "text-sm/bold",
        color: "text-strong",
        children: g.intl.string(g.t.cTQI5t)
      }), null != m && (0, r.jsx)(f.H, {
        chunks: m,
        color: a.TVs.colors.INTERACTIVE_TEXT_DEFAULT.css,
        onCopy: h
      })]
    }), (0, r.jsx)(d.b, {
      className: b.code,
      chunks: m,
      columns: p.WK
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      children: g.intl.format(g.t.wKxADe, {
        helpArticle: (0, s.uV)()
      })
    })]
  })
}