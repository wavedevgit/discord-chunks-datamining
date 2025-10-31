/** Chunk was on web.js **/
/** chunk id: 796027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk920293 = require("./920293.js");
let f = function(e) {
  var t;
  let {
    message: n,
    errorMessage: f,
    submitting: _,
    onReset: p,
    onSave: h,
    onSaveText: m,
    onResetText: g,
    onSaveButtonColor: E,
    disabled: b,
    saveButtonTooltip: y
  } = e, O = i.useRef(null), [v, I] = i.useState(false);
  return i.useEffect(() => {
    function e() {
      I(true), setTimeout(() => I(false), 1e3)
    }
    return l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e), () => {
      l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: d.container,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: d.flexContainer,
      ref: O,
      children: (0, r.jsxs)(s.JcV, {
        containerRef: O,
        children: [(0, r.jsx)("div", {
          className: d.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: d.message,
            children: null != (t = null != f ? f : n) ? t : u.intl.string(u.t.GP7JLE)
          })
        }), (0, r.jsxs)("div", {
          className: d.actions,
          children: [null != p && (0, r.jsx)(o.zx, {
            className: d.resetButton,
            size: o.zx.Sizes.SMALL,
            color: o.zx.Colors.PRIMARY,
            look: o.zx.Looks.LINK,
            onClick: p,
            children: (0, r.jsx)("span", {
              children: null != g ? g : u.intl.string(u.t.yBZMsQ)
            })
          }), null != h ? (0, r.jsx)(a.u, {
            text: y,
            children: (0, r.jsx)(o.zx, {
              size: o.zx.Sizes.SMALL,
              color: null != E ? E : o.zx.Colors.GREEN,
              submitting: _,
              disabled: b,
              onClick: h,
              children: null != m ? m : u.intl.string(u.t.K344S7)
            })
          }) : null]
        })]
      })
    })
  })
}