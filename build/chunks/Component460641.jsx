/** Chunk was on 21968 **/
/** chunk id: 460641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk267001 = require("./267001.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk436057 = require("./436057.js"),
  Chunk734087 = require("./734087.js"),
  Chunk609621 = require("./609621.js");

function m(e) {
  var t;
  let n, {
      followedChannelWebhooks: m,
      editedWebhook: g,
      selectableWebhookChannels: h,
      errors: x,
      canNavigate: j
    } = e,
    O = (0, a.Ay)();
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: u.intl.format(u.t["5u+aV1"], {
        helpdeskArticle: o.A.getArticleURL(d.MVz.CHANNEL_FOLLOWING)
      })
    }), (0, i.jsx)(l.cGx, {
      className: b.zN
    }), m.length > 0 ? (0, i.jsx)(c.A, {
      webhooks: m,
      editedWebhook: g,
      selectableWebhookChannels: h,
      errors: x,
      canNavigate: j
    }) : (t = () => open(o.A.getArticleURL(d.MVz.CHANNEL_FOLLOWING)), n = (0, r.Mw)(O) ? f : p, (0, i.jsxs)(s.A, {
      direction: s.A.Direction.VERTICAL,
      align: s.A.Align.CENTER,
      children: [(0, i.jsx)("img", {
        alt: "",
        src: n,
        className: b.QT
      }), (0, i.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: u.intl.string(u.t.gzuVH0)
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.nM,
        children: (0, i.jsx)(l.Button, {
          variant: "primary",
          text: u.intl.string(u.t["ZwSt+T"]),
          onClick: t
        })
      })]
    }))]
  })
}