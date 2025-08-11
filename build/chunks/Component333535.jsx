/** Chunk was on web.js **/
/** chunk id: 333535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk684885 = require("./684885.js");

function g(e) {
  let {
    threadId: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.getChannel(t)), g = (0, o.e7)([l.Z], () => l.Z.getChannel(null == n ? true : n.parent_id)), E = i.useCallback(() => {
    null != n && null != g && ((0, s.yw)(p.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.JG)((0, c.EO)(n, g)))
  }, [n, g]), b = () => {
    (0, f.fn)(t)
  };
  return (0, r.jsxs)("div", {
    className: m.sharePromptContainer,
    children: [(0, r.jsx)(_.Z, {}), (0, r.jsxs)("div", {
      className: m.sharePromptContent,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: h.intl.string(h.t["5uAO7e"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: h.intl.format(h.t.WnfPV1, {
          helpArticleUrl: d.Z.getCreatorSupportArticleURL(p.BhN.MEDIA_CHANNEL)
        })
      }), (0, r.jsx)(a.LZC, {
        size: 4
      }), (0, r.jsx)(a.zxk, {
        text: h.intl.string(h.t.C5UQCw),
        variant: "primary",
        icon: a.xPt,
        onClick: E
      })]
    }), (0, r.jsx)(a.P3F, {
      className: m.closeButton,
      onClick: b,
      "aria-label": h.intl.string(h.t["0+xZHx"]),
      children: (0, r.jsx)(a.Dio, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}