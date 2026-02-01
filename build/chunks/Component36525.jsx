/** Chunk was on 76719 **/
/** chunk id: 36525, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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
let h = function(e) {
  var t;
  let {
    message: n,
    errorMessage: h,
    submitting: p,
    onReset: g,
    onSave: f,
    onSaveText: C,
    onResetText: y,
    onSaveButtonColor: v,
    disabled: b,
    saveButtonTooltip: m
  } = e, S = s.useRef(null), [O, E] = s.useState(false);
  return s.useEffect(() => {
    function e() {
      E(true), setTimeout(() => E(false), 1e3)
    }
    return a._.subscribe(d.jej.EMPHASIZE_NOTICE, e), () => {
      a._.unsubscribe(d.jej.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, i.jsx)("div", {
    className: c.kL,
    "data-emphasized": O,
    children: (0, i.jsx)("div", {
      className: c.nP,
      ref: S,
      children: (0, i.jsxs)(o.xpW, {
        containerRef: S,
        children: [(0, i.jsx)("div", {
          className: c.Xk,
          children: (0, i.jsx)("div", {
            className: c.iU,
            children: null != (t = null != h ? h : n) ? t : u.intl.string(u.t.GP7JLE)
          })
        }), (0, i.jsxs)("div", {
          className: c.o1,
          children: [null != g && (0, i.jsx)(l.$n, {
            className: c.WA,
            size: l.$n.Sizes.SMALL,
            color: l.$n.Colors.PRIMARY,
            look: l.$n.Looks.LINK,
            onClick: g,
            children: (0, i.jsx)("span", {
              children: null != y ? y : u.intl.string(u.t.yBZMsQ)
            })
          }), null != f ? (0, i.jsx)(r.m, {
            text: m,
            children: (0, i.jsx)(l.$n, {
              size: l.$n.Sizes.SMALL,
              color: null != v ? v : l.$n.Colors.GREEN,
              submitting: p,
              disabled: b,
              onClick: f,
              children: null != C ? C : u.intl.string(u.t.K344S7)
            })
          }) : null]
        })]
      })
    })
  })
}