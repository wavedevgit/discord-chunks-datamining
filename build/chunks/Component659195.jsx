/** Chunk was on 17869 **/
/** chunk id: 659195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    threadId: t
  } = e, n = (0, i.bG)([o.A], () => o.A.getChannel(t)), A = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? true : n.parent_id)), b = r.useCallback(() => {
    null != n && null != A && ((0, s.zV)(f.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, u.C)((0, c.af)(n, A)))
  }, [n, A]);
  return (0, l.jsxs)("div", {
    className: g.BQ,
    children: [(0, l.jsx)(p.A, {}), (0, l.jsxs)("div", {
      className: g.BB,
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: m.intl.string(m.t["5uAO7d"])
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: m.intl.format(m.t.WnfPV3, {
          helpArticleUrl: d.A.getCreatorSupportArticleURL(f.MVz.MEDIA_CHANNEL)
        })
      }), (0, l.jsx)(a.hKd, {
        size: 4
      }), (0, l.jsx)(a.Button, {
        text: m.intl.string(m.t.C5UQC9),
        variant: "primary",
        icon: a.qYV,
        onClick: b
      })]
    }), (0, l.jsx)(a.DUT, {
      className: g.b,
      onClick: () => {
        (0, h.sF)(t)
      },
      "aria-label": m.intl.string(m.t["0+xZH0"]),
      children: (0, l.jsx)(a.PGe, {
        color: "currentColor",
        size: "xs"
      })
    })]
  })
}