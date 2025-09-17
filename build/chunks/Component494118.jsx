/** Chunk was on 8360 **/
/** chunk id: 494118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk725875 = require("./725875.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845525 = require("./845525.js"),
  Chunk893916 = require("./893916.js"),
  Chunk408942 = require("./408942.js");

function g(e) {
  let {
    followedChannelWebhooks: t,
    editedWebhook: n,
    selectableWebhookChannels: g,
    errors: f,
    canNavigate: h
  } = e, x = (0, a.ZP)();
  return (0, i.jsxs)(l.hjN, {
    children: [(0, i.jsx)(l.R94, {
      type: l.geA.DESCRIPTION,
      children: u.intl.format(u.t["5u+aV1"], {
        helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)
      })
    }), (0, i.jsx)(l.$i$, {
      className: p.headerDivider
    }), t.length > 0 ? (0, i.jsx)(c.Z, {
      webhooks: t,
      editedWebhook: n,
      selectableWebhookChannels: g,
      errors: f,
      canNavigate: h
    }) : function(e, t) {
      let n = (0, r.wj)(e) ? m : b;
      return (0, i.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        align: o.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: n,
          className: p.emptyStateImage
        }), (0, i.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          children: u.intl.string(u.t.gzuVHx)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.emptyStateButton,
          children: (0, i.jsx)(l.zxk, {
            variant: "primary",
            text: u.intl.string(u.t["ZwSt+f"]),
            onClick: t
          })
        })]
      })
    }(x, () => open(s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)))]
  })
}