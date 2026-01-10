/** Chunk was on 81985 **/
/** chunk id: 986035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk410507 = require("./410507.js");
let s = function(e) {
  let {
    title: t,
    description: n,
    agreement: s,
    disagreement: c,
    onAgree: u,
    onDisagree: d,
    modalType: p,
    channelId: f,
    guildId: h
  } = e;
  i.useEffect(() => {
    (0, a.YT)(p, f, h)
  }, [p, f, h]);
  let g = i.useCallback(() => {
      (0, a.qd)(a.iP.NSFW_CHANNEL_DISAGREE_CTA, p, f, h), null == d || d()
    }, [d, p, f, h]),
    m = i.useCallback(() => {
      (0, a.qd)(a.iP.NSFW_CHANNEL_AGREE_CTA, p, f, h), null == u || u()
    }, [u, p, f, h]);
  return (0, r.jsxs)(l.Kqy, {
    justify: "center",
    align: "center",
    direction: "vertical",
    gap: 16,
    className: o.gatedContent,
    children: [(0, r.jsxs)(l.Kqy, {
      gap: 8,
      justify: "center",
      align: "center",
      direction: "vertical",
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/semibold",
        className: o.title,
        children: t
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        className: o.description,
        color: "text-muted",
        children: n
      })]
    }), (0, r.jsxs)(l.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != c && null != d ? (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: c,
        onClick: g
      }) : null, null != s && null != u ? (0, r.jsx)(l.Button, {
        onClick: m,
        text: s
      }) : null]
    })]
  })
}