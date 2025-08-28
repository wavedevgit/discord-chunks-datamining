/** Chunk was on 56011 **/
/** chunk id: 333535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk235391 = require("./235391.js");

function b(e) {
  let {
    threadId: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getChannel(t)), b = (0, l.e7)([s.Z], () => s.Z.getChannel(null == n ? true : n.parent_id)), y = i.useCallback(() => {
    null != n && null != b && ((0, o.yw)(f.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.JG)((0, c.EO)(n, b)))
  }, [n, b]);
  return (0, r.jsxs)("div", {
    className: g.sharePromptContainer,
    children: [(0, r.jsx)(h.Z, {}), (0, r.jsxs)("div", {
      className: g.sharePromptContent,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: m.intl.string(m.t["5uAO7e"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: m.intl.format(m.t.WnfPV1, {
          helpArticleUrl: d.Z.getCreatorSupportArticleURL(f.BhN.MEDIA_CHANNEL)
        })
      }), (0, r.jsx)(a.LZC, {
        size: 4
      }), (0, r.jsx)(a.zxk, {
        text: m.intl.string(m.t.C5UQCw),
        variant: "primary",
        icon: a.xPt,
        onClick: y
      })]
    }), (0, r.jsx)(a.P3F, {
      className: g.closeButton,
      onClick: () => {
        (0, p.fn)(t)
      },
      "aria-label": m.intl.string(m.t["0+xZHx"]),
      children: (0, r.jsx)(a.Dio, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}