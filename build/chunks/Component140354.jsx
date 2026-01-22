/** Chunk was on 21738 **/
/** chunk id: 140354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk4616 = require("./4616.jsx"),
  Chunk743674 = require("./743674.js"),
  Chunk426660 = require("./426660.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk998304 = require("./998304.js"),
  Chunk817818 = require("./817818.js"),
  Chunk967305 = require("./967305.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk666088 = require("./666088.js"),
  Chunk22004 = require("./22004.js");

function O(e) {
  let {
    guildId: t,
    channelId: n
  } = e, {
    ref: l,
    width: O,
    height: y
  } = (0, c.Ay)(), I = i.useCallback(() => {
    null != t && null != n && ((0, g.sy)(t), (0, m.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]), v = (0, s.bG)([f.A], () => f.A.getGuild(t)), S = i.useMemo(() => null == v ? null : h.Ay.getGuildSplashURL({
    id: v.id,
    splash: v.splash
  }), [v]), C = (0, d.S)(S);
  return (0, r.jsxs)("div", {
    className: a()(_.kf, E.iW, {
      [E.Me]: null == S
    }),
    ref: l,
    children: [null != S ? (0, r.jsx)(u.A, {
      className: E.xX,
      src: S,
      width: O,
      height: y,
      imageClassName: E.Iv
    }) : (0, r.jsx)(p.A, {}), null != C && null != S && (0, r.jsx)("div", {
      className: E.D7,
      style: {
        background: "linear-gradient(180deg, ".concat((0, A.cb)(C, .16), " 0%, ").concat((0, A.cb)(C, 1), " 100%)")
      }
    }), null != S && (0, r.jsx)("div", {
      className: E.D7
    }), (0, r.jsxs)("div", {
      className: a()(_.Cj, _.Vw),
      children: [(0, r.jsxs)("div", {
        className: _.wx,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xxl/normal",
          color: "always-white",
          children: b.intl.string(b.t.CCmhpF)
        }), (0, r.jsx)(o.Text, {
          variant: "text-lg/normal",
          color: "always-white",
          children: b.intl.string(b.t.gRAHcZ)
        })]
      }), (0, r.jsx)(o.Button, {
        variant: "overlay-primary",
        size: "md",
        text: b.intl.string(b.t.VVFjAC),
        onClick: I
      })]
    })]
  })
}