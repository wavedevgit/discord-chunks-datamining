/** Chunk was on 49152 **/
/** chunk id: 986035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk352075 = require("./352075.js"),
  Chunk20493 = require("./20493.js");
let h = function(e) {
  let {
    title: t,
    description: n,
    agreement: l,
    disagreement: h,
    onAgree: p,
    onDisagree: f,
    imageClassName: g,
    agreementButtonColor: m = s.zx.Colors.RED,
    modalType: b,
    channelId: y,
    guildId: x
  } = e;
  i.useEffect(() => {
    (0, c.YT)(b, y, x)
  }, [b, y, x]);
  let _ = i.useCallback(() => {
      (0, c.qd)(c.iP.NSFW_CHANNEL_DISAGREE_CTA, b, y, x), null == f || f()
    }, [f, b, y, x]),
    j = i.useCallback(() => {
      (0, c.qd)(c.iP.NSFW_CHANNEL_AGREE_CTA, b, y, x), null == p || p()
    }, [p, b, y, x]);
  return (0, r.jsxs)(o.Kqy, {
    className: u.gatedContent,
    justify: "center",
    align: "center",
    direction: "vertical",
    children: [(0, r.jsx)("div", {
      className: a()(u.image, g)
    }), (0, r.jsx)("div", {
      className: a()(u.title, d.marginBottom8),
      children: t
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      className: a()(u.description, d.marginBottom20),
      children: n
    }), (0, r.jsxs)(o.Kqy, {
      direction: "horizontal",
      justify: "center",
      align: "center",
      gap: 16,
      children: [null != h && null != f ? (0, r.jsx)(o.zxk, {
        variant: "secondary",
        text: h,
        onClick: _
      }) : null, null != l && null != p ? (0, r.jsx)(s.zx, {
        color: m,
        onClick: j,
        children: l
      }) : null]
    })]
  })
}