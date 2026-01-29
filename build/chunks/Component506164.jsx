/** Chunk was on 1113 **/
/** chunk id: 506164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk847599 = require("./847599.js"),
  Chunk263518 = require("./263518.js");
let o = function(e) {
  let {
    title: t,
    description: n,
    agreement: o,
    disagreement: c,
    onAgree: u,
    onDisagree: d,
    modalType: h,
    channelId: p,
    guildId: g
  } = e;
  l.useEffect(() => {
    (0, s.Bf)(h, p, g)
  }, [h, p, g]);
  let f = l.useCallback(() => {
      (0, s.mU)(s.IY.NSFW_CHANNEL_DISAGREE_CTA, h, p, g), null == d || d()
    }, [d, h, p, g]),
    m = l.useCallback(() => {
      (0, s.mU)(s.IY.NSFW_CHANNEL_AGREE_CTA, h, p, g), null == u || u()
    }, [u, h, p, g]);
  return (0, r.jsxs)(i.BJc, {
    justify: "center",
    align: "center",
    direction: "vertical",
    gap: 16,
    className: a.XG,
    children: [(0, r.jsxs)(i.BJc, {
      gap: 8,
      justify: "center",
      align: "center",
      direction: "vertical",
      children: [(0, r.jsx)(i.Text, {
        variant: "text-lg/semibold",
        className: a.DD,
        children: t
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        className: a.h_,
        color: "text-muted",
        children: n
      })]
    }), (0, r.jsxs)(i.BJc, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != c && null != d ? (0, r.jsx)(i.Button, {
        variant: "secondary",
        text: c,
        onClick: f
      }) : null, null != o && null != u ? (0, r.jsx)(i.Button, {
        onClick: m,
        text: o
      }) : null]
    })]
  })
}