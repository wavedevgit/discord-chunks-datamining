/** Chunk was on 31748 **/
/** chunk id: 857341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk383501 = require("./383501.js"),
  Chunk798286 = require("./798286.js"),
  Chunk814278 = require("./814278.js"),
  Chunk998759 = require("./998759.js"),
  Chunk75811 = require("./75811.jsx"),
  Chunk930840 = require("./930840.jsx");
require("./603266.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk922401 = require("./922401.js");

function g(e) {
  let {
    channelId: t
  } = e, n = (0, i.bG)([s.A], () => {
    var e;
    return null == (e = s.A.getSecureFramesState()) ? true : e.epochAuthenticator
  }), g = (0, u.z)({
    fingerprintBase64: n,
    chunkSize: 5,
    desiredLength: 30
  }), m = r.useCallback(() => {
    (0, o.k0)({
      channelId: t
    })
  }, [t]);
  return (0, l.jsxs)("div", {
    className: b.kL,
    children: [(0, l.jsxs)("div", {
      className: b.Tc,
      children: [(0, l.jsx)(a.XAi, {
        size: "xxs",
        color: a.LU0.colors.TEXT_FEEDBACK_POSITIVE
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: p.intl.string(p.t["3BogKe"])
      })]
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      children: p.intl.string(p.t.B9JNsl)
    }), (0, l.jsxs)("div", {
      className: b.wx,
      children: [(0, l.jsx)(a.Heading, {
        variant: "text-sm/bold",
        color: "text-strong",
        children: p.intl.string(p.t.cTQI5t)
      }), null != g && (0, l.jsx)(f.c, {
        chunks: g,
        color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css,
        onCopy: m
      })]
    }), (0, l.jsx)(d.j, {
      className: b.aY,
      chunks: g,
      columns: 3
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      children: p.intl.format(p.t.wKxADe, {
        helpArticle: (0, c.aW)()
      })
    })]
  })
}