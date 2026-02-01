/** Chunk was on 9207 **/
/** chunk id: 230084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: l,
    sectionTitle: A,
    changeAvatarButtonText: f,
    guildId: b,
    className: h,
    disabled: E = false,
    isTryItOut: O = false,
    forcedDivider: x,
    withHighlight: C = false
  } = e, {
    newestAnalyticsLocation: S
  } = (0, c.Ay)(), T = C ? o.wLn : a.$n, I = i.useCallback(() => {
    (0, d.XD)({
      uploadType: _.HL.AVATAR,
      analyticsSource: S,
      filters: O ? g : true,
      guildId: b,
      isTryItOut: O
    })
  }, [b, S, O]);
  return (0, r.jsx)(u.A, {
    className: h,
    title: A,
    errors: n,
    disabled: E,
    forcedDivider: x,
    children: (0, r.jsxs)("div", {
      className: m.NC,
      children: [(0, r.jsx)(T, {
        className: s()({
          [m.yj]: C
        }),
        size: a.$n.Sizes.SMALL,
        onClick: I,
        children: null != f ? f : p.intl.string(p.t["4OynCD"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: null != b ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
          onClick: () => l(null)
        })
      })]
    })
  })
}