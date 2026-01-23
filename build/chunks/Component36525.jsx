/** Chunk was on web.js **/
/** chunk id: 36525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk614221 = require("./614221.js");
let f = function(e) {
  var t;
  let {
    message: n,
    errorMessage: f,
    submitting: p,
    onReset: _,
    onSave: h,
    onSaveText: m,
    onResetText: g,
    onSaveButtonColor: E,
    disabled: y,
    saveButtonTooltip: b
  } = e, O = i.useRef(null), [v, A] = i.useState(false);
  return i.useEffect(() => {
    function e() {
      A(true), setTimeout(() => A(false), 1e3)
    }
    return l._.subscribe(c.jej.EMPHASIZE_NOTICE, e), () => {
      l._.unsubscribe(c.jej.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: d.kL,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: d.nP,
      ref: O,
      children: (0, r.jsxs)(o.xpW, {
        containerRef: O,
        children: [(0, r.jsx)("div", {
          className: d.Xk,
          children: (0, r.jsx)("div", {
            className: d.iU,
            children: null != (t = null != f ? f : n) ? t : u.intl.string(u.t.GP7JLE)
          })
        }), (0, r.jsxs)("div", {
          className: d.o1,
          children: [null != _ && (0, r.jsx)(s.$n, {
            className: d.WA,
            size: s.$n.Sizes.SMALL,
            color: s.$n.Colors.PRIMARY,
            look: s.$n.Looks.LINK,
            onClick: _,
            children: (0, r.jsx)("span", {
              children: null != g ? g : u.intl.string(u.t.yBZMsQ)
            })
          }), null != h ? (0, r.jsx)(a.m, {
            text: b,
            children: (0, r.jsx)(s.$n, {
              size: s.$n.Sizes.SMALL,
              color: null != E ? E : s.$n.Colors.GREEN,
              submitting: p,
              disabled: y,
              onClick: h,
              children: null != m ? m : u.intl.string(u.t.K344S7)
            })
          }) : null]
        })]
      })
    })
  })
}