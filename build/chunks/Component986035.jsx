/** Chunk was on 91053 **/
/** chunk id: 986035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk469438 = require("./469438.js");
let o = function(e) {
  let {
    title: t,
    description: n,
    agreement: o,
    disagreement: c,
    onAgree: d,
    onDisagree: u,
    modalType: p,
    channelId: h,
    guildId: f
  } = e;
  i.useEffect(() => {
    (0, a.YT)(p, h, f)
  }, [p, h, f]);
  let g = i.useCallback(() => {
      (0, a.qd)(a.iP.NSFW_CHANNEL_DISAGREE_CTA, p, h, f), null == u || u()
    }, [u, p, h, f]),
    m = i.useCallback(() => {
      (0, a.qd)(a.iP.NSFW_CHANNEL_AGREE_CTA, p, h, f), null == d || d()
    }, [d, p, h, f]);
  return (0, r.jsxs)(l.Kqy, {
    justify: "center",
    align: "center",
    direction: "vertical",
    gap: 16,
    className: s.gatedContent,
    children: [(0, r.jsxs)(l.Kqy, {
      gap: 8,
      justify: "center",
      align: "center",
      direction: "vertical",
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/semibold",
        className: s.title,
        children: t
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        className: s.description,
        color: "text-muted",
        children: n
      })]
    }), (0, r.jsxs)(l.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != c && null != u ? (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: c,
        onClick: g
      }) : null, null != o && null != d ? (0, r.jsx)(l.Button, {
        onClick: m,
        text: o
      }) : null]
    })]
  })
}