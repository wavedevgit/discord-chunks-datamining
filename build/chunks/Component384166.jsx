/** Chunk was on web.js **/
/** chunk id: 384166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk967187 = require("./967187.js");

function h() {
  let [e, t] = Chunk73800.useState(false), {
    hasPendingChanges: n,
    pendingWidgets: o
  } = (0, Chunk442837.cj)([Chunk224724.Z], () => ({
    hasPendingChanges: Chunk224724.Z.hasPendingChanges(),
    pendingWidgets: Chunk224724.Z.getPendingWidgets()
  }));
  Chunk73800.useEffect(() => {
    let e = null;

    function n() {
      exports(true), e = setTimeout(() => exports(false), 500)
    }
    return Chunk585483.S.subscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), null !== module && clearTimeout(module)
    }
  }, []);
  let h = Chunk73800.useCallback(async () => {
      null !== Chunk120356 && await Chunk592183.Z.savePendingWidgets(Chunk120356)
    }, [Chunk120356]),
    m = Chunk73800.useCallback(() => {
      Chunk592183.Z.clearPendingWidgets()
    }, []);
  return require ? (0, Chunk255367.jsx)("div", {
    className: a()(Chunk967187.container, {
      [Chunk967187.visible]: require
    }),
    role: "status",
    children: (0, Chunk255367.jsxs)("div", {
      className: a()(Chunk967187.content, {
        [Chunk967187.emphasized]: module
      }),
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk967187.message,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: Chunk388032.intl.string(Chunk388032.t["/lQiX1"])
        })
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk967187.actions,
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t.yBZMsb),
          onClick: m
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
          onClick: h
        })]
      })]
    })
  }) : null
}