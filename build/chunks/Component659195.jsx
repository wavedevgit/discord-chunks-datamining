/** Chunk was on 97492 **/
/** chunk id: 659195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    threadId: t
  } = e, n = (0, i.bG)([o.A], () => o.A.getChannel(t)), m = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? true : n.parent_id)), A = l.useCallback(() => {
    null != n && null != m && ((0, s.zV)(h.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.C)((0, c.af)(n, m)))
  }, [n, m]);
  return (0, r.jsxs)("div", {
    className: g.BQ,
    children: [(0, r.jsx)(p.A, {}), (0, r.jsxs)("div", {
      className: g.BB,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: b.intl.string(b.t["5uAO7d"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: b.intl.format(b.t.WnfPV3, {
          helpArticleUrl: d.A.getCreatorSupportArticleURL(h.MVz.MEDIA_CHANNEL)
        })
      }), (0, r.jsx)(a.hKd, {
        size: 4
      }), (0, r.jsx)(a.Button, {
        text: b.intl.string(b.t.C5UQC9),
        variant: "primary",
        icon: a.qYV,
        onClick: A
      })]
    }), (0, r.jsx)(a.DUT, {
      className: g.b,
      onClick: () => {
        (0, f.sF)(t)
      },
      "aria-label": b.intl.string(b.t["0+xZH0"]),
      children: (0, r.jsx)(a.PGe, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}