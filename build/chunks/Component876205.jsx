/** Chunk was on 63141 **/
/** chunk id: 876205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372452 = require("./372452.js");
let d = {
  [Chunk981631.kg4.TOGGLE_MUTE]: {
    slash: Chunk481060.nRN,
    default: Chunk481060.S6n
  }
};

function u(e) {
  let {
    value: t,
    action: n,
    shouldShow: a
  } = e, u = (0, r.e7)([l.ZP], () => l.ZP.getKeybindForAction(n, false, true));
  if (null == u || !a) return null;
  let h = s.BB(u.shortcut),
    p = d[n],
    f = t ? p.slash : p.default;
  return (0, i.jsxs)("div", {
    className: c.keybindIndicator,
    children: [(0, i.jsx)(f, {
      className: c.keybindIcon,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(o.Text, {
      variant: "text-xxs/semibold",
      className: c.keybindIndicatorText,
      children: h
    })]
  })
}