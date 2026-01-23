/** Chunk was on web.js **/
/** chunk id: 230084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
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
let h = [{
  name: "gif",
  extensions: ["gif"]
}];

function m(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: a,
    sectionTitle: m,
    changeAvatarButtonText: g,
    guildId: E,
    className: y,
    disabled: b = false,
    isTryItOut: O = false,
    forcedDivider: v,
    withHighlight: A = false
  } = e, {
    newestAnalyticsLocation: I
  } = (0, c.Ay)(), S = A ? l.wLn : o.$n, T = i.useCallback(() => {
    (0, u.XD)({
      uploadType: f.HL.AVATAR,
      analyticsSource: I,
      filters: O ? h : true,
      guildId: E,
      isTryItOut: O
    })
  }, [E, I, O]);
  return (0, r.jsx)(d.A, {
    className: y,
    title: m,
    errors: n,
    disabled: b,
    forcedDivider: v,
    children: (0, r.jsxs)("div", {
      className: _.NC,
      children: [(0, r.jsx)(S, {
        className: s()({
          [_.yj]: A
        }),
        size: o.$n.Sizes.SMALL,
        onClick: T,
        children: null != g ? g : p.intl.string(p.t["4OynCD"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.DT,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != E ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
          onClick: () => a(null)
        })
      })]
    })
  })
}