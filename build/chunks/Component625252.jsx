/** Chunk was on 7384 **/
/** chunk id: 625252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk410030 = require("./410030.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk154115 = require("./154115.js"),
  Chunk66094 = require("./66094.js");

function x() {
  let e = (0, Chunk780384.wj)((0, Chunk410030.ZP)()),
    t = Chunk73800.useMemo(() => ({
      backgroundImage: "url(".concat("https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png", ")")
    }), []),
    n = Chunk73800.useCallback(() => {
      (0, Chunk37234.xf)(), (0, Chunk110560.navigateToQuestHome)({
        fromContent: Chunk497505.jn.QUEST_HOME_MOVE_CALLOUT
      }), Chunk626135.default.track(Chunk981631.rMx.QUEST_CONTENT_CLICKED, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        cta_name: Chunk617136.jZ.VIEW_QUESTS,
        click_id: (0, Chunk772848.Z)(),
        is_targeted: false
      }, (0, Chunk617136.mH)(Chunk497505.jn.QUEST_HOME_MOVE_CALLOUT)))
    }, []);
  return (0, Chunk255367.jsx)("div", {
    className: Chunk154115.container,
    style: exports,
    children: (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
      className: Chunk154115.textContainer,
      justify: "space-between",
      children: [(0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk154115.headerContainer,
          children: [(0, Chunk255367.jsx)("img", {
            alt: "",
            src: Chunk66094,
            className: Chunk154115.icon
          }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: Chunk388032.intl.string(Chunk388032.t.z8YP2N)
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-secondary",
          children: Chunk388032.intl.string(Chunk388032.t.IqmRZ2)
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: module ? "primary" : "overlay-primary",
        text: Chunk388032.intl.string(Chunk388032.t.GURBQk),
        onClick: require
      })]
    })
  })
}