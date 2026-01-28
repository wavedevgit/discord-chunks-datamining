/** Chunk was on 5606 **/
/** chunk id: 230084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk385612 = require("./385612.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk897570 = require("./897570.js");
let g = [{
  name: "gif",
  extensions: ["gif"]
}];

function f(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: l,
    sectionTitle: f,
    changeAvatarButtonText: b,
    guildId: h,
    className: A,
    disabled: E = false,
    isTryItOut: x = false,
    forcedDivider: O,
    withHighlight: C = false
  } = e, {
    newestAnalyticsLocation: y
  } = (0, c.Ay)(), j = C ? o.wLn : a.$n, T = i.useCallback(() => {
    (0, d.XD)({
      uploadType: p.HL.AVATAR,
      analyticsSource: y,
      filters: x ? g : true,
      guildId: h,
      isTryItOut: x
    })
  }, [h, y, x]);
  return (0, r.jsx)(u.A, {
    className: A,
    title: f,
    errors: n,
    disabled: E,
    forcedDivider: O,
    children: (0, r.jsxs)("div", {
      className: m.NC,
      children: [(0, r.jsx)(j, {
        className: s()({
          [m.yj]: C
        }),
        size: a.$n.Sizes.SMALL,
        onClick: T,
        children: null != b ? b : _.intl.string(_.t["4OynCD"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: null != h ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
          onClick: () => l(null)
        })
      })]
    })
  })
}