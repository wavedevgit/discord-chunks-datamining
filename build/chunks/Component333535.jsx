/** Chunk was on 81985 **/
/** chunk id: 333535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk158222 = require("./158222.js"),
  Chunk523900 = require("./523900.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545020 = require("./545020.js");

function b(e) {
  let {
    threadId: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getChannel(t)), b = (0, l.e7)([s.Z], () => s.Z.getChannel(null == n ? true : n.parent_id)), y = i.useCallback(() => {
    null != n && null != b && ((0, o.yw)(h.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.JG)((0, c.EO)(n, b)))
  }, [n, b]);
  return (0, r.jsxs)("div", {
    className: m.sharePromptContainer,
    children: [(0, r.jsx)(f.Z, {}), (0, r.jsxs)("div", {
      className: m.sharePromptContent,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: g.intl.string(g.t["5uAO7d"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: g.intl.format(g.t.WnfPV3, {
          helpArticleUrl: d.Z.getCreatorSupportArticleURL(h.BhN.MEDIA_CHANNEL)
        })
      }), (0, r.jsx)(a.LZC, {
        size: 4
      }), (0, r.jsx)(a.Button, {
        text: g.intl.string(g.t.C5UQC9),
        variant: "primary",
        icon: a.xPt,
        onClick: y
      })]
    }), (0, r.jsx)(a.P3F, {
      className: m.closeButton,
      onClick: () => {
        (0, p.fn)(t)
      },
      "aria-label": g.intl.string(g.t["0+xZH0"]),
      children: (0, r.jsx)(a.Dio, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}