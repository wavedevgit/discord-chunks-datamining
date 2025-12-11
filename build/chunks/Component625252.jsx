/** Chunk was on web.js **/
/** chunk id: 625252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk342386 = require("./342386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk861526 = require("./861526.js"),
  Chunk66094 = require("./66094.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let y = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";

function O() {
  let e = (0, Chunk780384.wj)((0, Chunk410030.ZP)()),
    t = Chunk473749.useMemo(() => ({
      backgroundImage: "url(".concat(y, ")")
    }), []),
    n = Chunk473749.useCallback(() => {
      (0, Chunk342386.default)(), (0, Chunk110560.navigateToQuestHome)({
        fromContent: Chunk49436.jn.QUEST_HOME_MOVE_CALLOUT
      }), Chunk626135.default.track(Chunk981631.rMx.QUEST_CONTENT_CLICKED, b({
        cta_name: Chunk617136.jZ.VIEW_QUESTS,
        click_id: (0, Chunk772848.Z)(),
        is_targeted: false
      }, (0, Chunk617136.mH)(Chunk49436.jn.QUEST_HOME_MOVE_CALLOUT)))
    }, []);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk861526.container,
    style: exports,
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      className: Chunk861526.textContainer,
      justify: "space-between",
      children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk861526.headerContainer,
          children: [(0, Chunk54381.jsx)("img", {
            alt: "",
            src: Chunk66094,
            className: Chunk861526.icon
          }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: Chunk388032.intl.string(Chunk388032.t.z8YP2A)
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: Chunk388032.intl.string(Chunk388032.t.HdKh65)
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: module ? "primary" : "overlay-primary",
        text: Chunk388032.intl.string(Chunk388032.t.GURBQl),
        onClick: require
      })]
    })
  })
}