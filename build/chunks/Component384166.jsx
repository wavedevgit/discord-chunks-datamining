/** Chunk was on web.js **/
/** chunk id: 384166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461671 = require("./461671.js");

function g() {
  let [e, t] = Chunk647438.useState(false), {
    hasPendingChanges: n,
    pendingWidgets: a
  } = (0, Chunk442837.cj)([Chunk224724.Z], () => ({
    hasPendingChanges: Chunk224724.Z.hasPendingChanges(),
    pendingWidgets: Chunk224724.Z.getPendingWidgets()
  }));
  Chunk647438.useEffect(() => {
    let e = null;

    function n() {
      exports(true), e = setTimeout(() => exports(false), 500)
    }
    return Chunk585483.S.subscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), null !== module && clearTimeout(module)
    }
  }, []);
  let g = Chunk647438.useCallback(async () => {
      if (null !== Chunk120356) try {
        await Chunk592183.Z.savePendingWidgets(Chunk120356)
      } catch (e) {
        (0, Chunk872269.L$)(Chunk228168.qb.WIDGET_SAVE_FAILURE)
      }
    }, [Chunk120356]),
    E = Chunk647438.useCallback(() => {
      Chunk592183.Z.clearPendingWidgets()
    }, []);
  return require ? (0, Chunk951288.jsx)("div", {
    className: o()(Chunk461671.container, {
      [Chunk461671.visible]: require
    }),
    role: "status",
    children: (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk461671.content, {
        [Chunk461671.emphasized]: module
      }),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk461671.message,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: Chunk388032.intl.string(Chunk388032.t["/lQiX1"])
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk461671.actions,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t.yBZMsb),
          onClick: E
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
          onClick: g
        })]
      })]
    })
  }) : null
}