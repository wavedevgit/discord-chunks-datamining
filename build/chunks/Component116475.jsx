/** Chunk was on web.js **/
/** chunk id: 116475, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk358458 = require("./358458.js"),
  Chunk393238 = require("./393238.js"),
  Chunk254109 = require("./254109.js"),
  Chunk212459 = require("./212459.js");
let c = 400;

function u(e) {
  let {
    width: t,
    height: n,
    offset: r,
    delta: i
  } = e, a = t > window.innerWidth, o = n > window.innerHeight, s = (window.innerWidth - t) / 2 + r.x, l = (window.innerHeight - n) / 2 + r.y, c = (window.innerWidth + t) / 2 + r.x, u = (window.innerHeight + n) / 2 + r.y, {
    x: d,
    y: f
  } = r;
  return a && (d += i.x, s + i.x > 0 && (d = (t - window.innerWidth) / 2), c + i.x < window.innerWidth && (d = (window.innerWidth - t) / 2)), o && (f += i.y, l + i.y > 0 && (f = (n - window.innerHeight) / 2), u + i.y < window.innerHeight && (f = (window.innerHeight - n) / 2)), {
    x: d,
    y: f
  }
}

function d(e) {
  let {
    children: t
  } = e, {
    scale: n,
    x: d,
    y: f,
    setOffset: _,
    zoomed: p,
    setZoomed: h
  } = (0, l.Y)(), {
    ref: m,
    width: g,
    height: E
  } = (0, o.ZP)(), [b, y] = [null != g ? g : 0, null != E ? E : 0], O = i.useRef(false), [v, I] = i.useState({
    x: 0,
    y: 0
  }), T = (e, t) => {
    let r = u({
      width: b * n.goal,
      height: y * n.goal,
      offset: {
        x: d.goal,
        y: f.goal
      },
      delta: {
        x: e,
        y: t
      }
    });
    _(r.x, r.y, {
      immediate: true
    })
  }, S = e => {
    p && 0 === e.button && (e.preventDefault(), O.current = true, I({
      x: e.clientX,
      y: e.clientY
    }))
  }, A = e => {
    if (!p) {
      if (0 === e.button) {
        (0, s.yg)(s.uG.ZOOM_IN_IMAGE_PRESSED), h(true);
        let t = e.clientX - window.innerWidth / 2,
          r = e.clientY - window.innerHeight / 2,
          i = u({
            width: b * n.goal,
            height: y * n.goal,
            offset: {
              x: 0,
              y: 0
            },
            delta: {
              x: -t * (n.goal - 1),
              y: -r * (n.goal - 1)
            }
          });
        _(i.x, i.y)
      }
      return
    }(e.clientX - v.x) ** 2 + (e.clientY - v.y) ** 2 < c && ((0, s.yg)(s.uG.ZOOM_OUT_IMAGE_PRESSED), h(false)), O.current = false
  };
  return (0, r.jsx)(a.animated.div, {
    ref: m,
    onMouseDown: S,
    onMouseUp: A,
    onMouseMove: e => O.current && T(e.movementX, e.movementY),
    onWheel: e => !e.ctrlKey && T(-e.deltaX, -e.deltaY),
    onMouseLeave: () => O.current = false,
    onClick: e => e.stopPropagation(),
    style: {
      scale: n,
      x: d,
      y: f,
      cursor: p ? "zoom-out" : "zoom-in"
    },
    children: t
  })
}
let f = Chunk647438.memo(d)