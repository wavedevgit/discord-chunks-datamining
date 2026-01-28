/** Chunk was on 78528 **/
/** chunk id: 659195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk975571 = require("./975571.js"),
  Chunk36491 = require("./36491.js"),
  Chunk209100 = require("./209100.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk179783 = require("./179783.js");

function b(e) {
  let {
    threadId: t
  } = e, n = (0, i.bG)([o.A], () => o.A.getChannel(t)), b = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? true : n.parent_id)), A = l.useCallback(() => {
    null != n && null != b && ((0, a.zV)(f.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.C)((0, c.af)(n, b)))
  }, [n, b]);
  return (0, r.jsxs)("div", {
    className: m.BQ,
    children: [(0, r.jsx)(h.A, {}), (0, r.jsxs)("div", {
      className: m.BB,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: g.intl.string(g.t["5uAO7d"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: g.intl.format(g.t.WnfPV3, {
          helpArticleUrl: d.A.getCreatorSupportArticleURL(f.MVz.MEDIA_CHANNEL)
        })
      }), (0, r.jsx)(s.hKd, {
        size: 4
      }), (0, r.jsx)(s.Button, {
        text: g.intl.string(g.t.C5UQC9),
        variant: "primary",
        icon: s.qYV,
        onClick: A
      })]
    }), (0, r.jsx)(s.DUT, {
      className: m.b,
      onClick: () => {
        (0, p.sF)(t)
      },
      "aria-label": g.intl.string(g.t["0+xZH0"]),
      children: (0, r.jsx)(s.PGe, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}