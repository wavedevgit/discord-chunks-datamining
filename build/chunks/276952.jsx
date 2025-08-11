/** Chunk was on web.js **/
/** chunk id: 276952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821020 = require("./821020.js"),
  Chunk736670 = require("./736670.js"),
  Chunk527018 = require("./527018.js");
let d = Object.freeze({
    tension: 400,
    friction: 30
  }),
  f = Object.freeze({
    opacity: 0,
    height: 8,
    x: false
  });

function _(e) {
  let {
    selected: t = false,
    hovered: n = false,
    unread: i = false,
    disabled: _ = false,
    className: p
  } = e;
  t = !_ && t, n = !_ && n, i = !_ && i;
  let h = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      x: 0
    },
    m = (0, s.Yzy)(t || n || i, {
      config: d,
      keys: e => e ? "pill" : "empty",
      initial: t || n || i ? h : null,
      from: f,
      leave: f,
      enter: h,
      update: h
    }, n || document.hasFocus() ? "animate-always" : "animate-never"),
    g = (0, l.pN)({
      location: "AnimatedHalfPill"
    }),
    E = (0, c.Z)(e => e.isOpen) && g.notificationCenterVariant === l.jP.POPOUT && g.entrypoint === l.u3.TITLE_BAR_LEFT;
  return <div className={o()(p, u.wrapper, {
      [u.dimmed]: E
    })} aria-hidden={true}>{m((e, t) => t && (0, r.jsx)(a.animated.span, {
      className: u.item,
      style: e
    }))}</div>
}