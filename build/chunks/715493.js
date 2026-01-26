/** Chunk was on 46875 **/
/** chunk id: 715493, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Mm: () => o,
  eX: () => u,
  lV: () => s,
  p2: () => h,
  xA: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk635377 = require("./635377.js"),
  i = require.n(Chunk635377);
let a = 0,
  s = 4,
  o = 4,
  c = "absolute",
  d = new(i())({
    max: 100
  });

function u(e) {
  let {
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e;
  return r.useMemo(() => (function(e) {
    let {
      numAttachments: t,
      containerWidth: n,
      containerHeight: r
    } = e, l = "".concat(t, "-").concat(n, "-").concat(r), i = d.get(l);
    if (null != i) return i;
    {
      let e = ((e, t, n, r) => {
        if (0 === n) return [];
        if (1 === n) return [{
          width: e,
          height: t,
          top: 0,
          left: 0,
          position: c
        }];
        if (2 === n) {
          let n = Math.ceil((e - r) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: t
          }, {
            top: 0,
            left: n + r,
            position: c,
            width: n,
            height: t
          }]
        }
        if (3 === n) {
          let n = Math.ceil((e - r) / 2),
            l = Math.ceil((t - r) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: t
          }, {
            top: 0,
            left: n + r,
            position: c,
            width: n,
            height: l
          }, {
            top: l + r,
            left: n + r,
            position: c,
            width: n,
            height: l
          }]
        } {
          let n = Math.ceil((e - r) / 2),
            l = Math.ceil((t - r) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: l
          }, {
            top: l + r,
            left: 0,
            position: c,
            width: n,
            height: l
          }, {
            top: 0,
            left: n + r,
            position: c,
            width: n,
            height: l
          }, {
            top: l + r,
            left: n + r,
            position: c,
            width: n,
            height: l
          }]
        }
      })(n, r, t, 4);
      return d.set(l, e), e
    }
  })({
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  }), [t, n, l])
}

function m(e) {
  return e.map((t, n) => ({
    minWidth: 2 * e[n].width,
    minHeight: 2 * e[n].height,
    maxWidth: 2 * e[n].width,
    maxHeight: 2 * e[n].height
  }))
}

function h(e) {
  let {
    imageContainerStyles: t,
    containerWidth: n,
    containerHeight: l
  } = e, i = r.useRef(m(t)), a = r.useRef(n), s = r.useRef(l), o = n > a.current + 100, c = l > s.current + 100;
  return (o || c) && (i.current = m(t)), i.current
}