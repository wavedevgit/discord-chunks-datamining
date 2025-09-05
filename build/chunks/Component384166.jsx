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
  Chunk973301 = require("./973301.js");

function g() {
  let [e, t] = Chunk647438.useState(false), n = (0, Chunk442837.Wu)([Chunk224724.Z], () => {
    var e;
    return null != (e = Chunk224724.Z.getSaveablePendingWidgets()) ? module : []
  }), a = (0, Chunk442837.e7)([Chunk224724.Z], () => Chunk224724.Z.hasSaveablePendingChanges()), g = (0, Chunk442837.e7)([Chunk224724.Z], () => Chunk224724.Z.isSubmitting);
  Chunk647438.useEffect(() => {
    let e = null;

    function n() {
      exports(true), e = setTimeout(() => exports(false), 500)
    }
    return Chunk585483.S.subscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.EMPHASIZE_NOTICE, require), null !== module && clearTimeout(module)
    }
  }, []);
  let E = Chunk647438.useCallback(async () => {
      if (Chunk120356) try {
        await Chunk592183.Z.savePendingWidgets(require)
      } catch (e) {
        (0, Chunk872269.L$)(Chunk228168.qb.WIDGET_SAVE_FAILURE)
      }
    }, [Chunk120356, require]),
    b = Chunk647438.useCallback(() => {
      Chunk592183.Z.clearPendingWidgets()
    }, []);
  return Chunk120356 ? (0, Chunk951288.jsx)("div", {
    className: o()(Chunk973301.container, {
      [Chunk973301.visible]: Chunk120356
    }),
    role: "status",
    children: (0, Chunk951288.jsxs)("div", {
      className: o()(Chunk973301.content, {
        [Chunk973301.emphasized]: module
      }),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk973301.message,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: Chunk388032.intl.string(Chunk388032.t["/lQiX1"])
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk973301.actions,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t.yBZMsb),
          onClick: b
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.R3BPHx),
          onClick: E,
          loading: g,
          disabled: g
        })]
      })]
    })
  }) : null
}