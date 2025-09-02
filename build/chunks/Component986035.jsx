/** Chunk was on 62987 **/
/** chunk id: 986035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk469438 = require("./469438.js"),
  Chunk197571 = require("./197571.js");
let p = function(e) {
  let {
    title: t,
    description: n,
    agreement: l,
    disagreement: p,
    onAgree: h,
    onDisagree: f,
    imageClassName: m,
    agreementButtonColor: g = o.zx.Colors.RED,
    modalType: b,
    channelId: y,
    guildId: _
  } = e;
  i.useEffect(() => {
    (0, c.YT)(b, y, _)
  }, [b, y, _]);
  let C = i.useCallback(() => {
      (0, c.qd)(c.iP.NSFW_CHANNEL_DISAGREE_CTA, b, y, _), null == f || f()
    }, [f, b, y, _]),
    x = i.useCallback(() => {
      (0, c.qd)(c.iP.NSFW_CHANNEL_AGREE_CTA, b, y, _), null == h || h()
    }, [h, b, y, _]);
  return (0, r.jsxs)(s.Kqy, {
    className: u.gatedContent,
    justify: "center",
    align: "center",
    direction: "vertical",
    children: [(0, r.jsx)("div", {
      className: a()(u.image, m)
    }), (0, r.jsx)("div", {
      className: a()(u.title, d.marginBottom8),
      children: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: a()(u.description, d.marginBottom20),
      children: n
    }), (0, r.jsxs)(s.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != p && null != f ? (0, r.jsx)(s.zxk, {
        variant: "secondary",
        text: p,
        onClick: C
      }) : null, null != l && null != h ? (0, r.jsx)(o.zx, {
        color: g,
        onClick: x,
        children: l
      }) : null]
    })]
  })
}