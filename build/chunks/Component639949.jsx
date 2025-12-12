/** Chunk was on web.js **/
/** chunk id: 639949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481743 = require("./481743.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk324060 = require("./324060.js"),
  Chunk989392 = require("./989392.js"),
  Chunk414003 = require("./414003.js");

function p(e) {
  let {
    onClick: t,
    children: n,
    className: o,
    contentClassName: p,
    active: _ = false,
    muteSound: m = false,
    disabled: h = false
  } = e, g = i.useContext(u.Q), E = (0, c.dQu)(g.primaryColor).hex(), b = (0, c.dQu)(g.secondaryColor).hex(), y = (0, d.T)(s.Z), O = i.useCallback(() => {
    h || (m || y(), null == t || t())
  }, [t, m, y, h]);
  return (0, r.jsx)(l.P3F, {
    className: a()(o, f.outerButton, {
      [f.active]: _,
      [f.disabled]: h
    }),
    style: {
      backgroundColor: E
    },
    onClick: O,
    children: (0, r.jsx)("div", {
      className: a()(p, f.innerButton),
      style: {
        borderColor: b
      },
      children: n
    })
  })
}