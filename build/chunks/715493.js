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
    containerHeight: r
  } = e;
  return l.useMemo(() => (function(e) {
    let {
      numAttachments: t,
      containerWidth: n,
      containerHeight: l
    } = e, r = "".concat(t, "-").concat(n, "-").concat(l), i = d.get(r);
    if (null != i) return i;
    {
      let e = ((e, t, n, l) => {
        if (0 === n) return [];
        if (1 === n) return [{
          width: e,
          height: t,
          top: 0,
          left: 0,
          position: c
        }];
        if (2 === n) {
          let n = Math.ceil((e - l) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: t
          }, {
            top: 0,
            left: n + l,
            position: c,
            width: n,
            height: t
          }]
        }
        if (3 === n) {
          let n = Math.ceil((e - l) / 2),
            r = Math.ceil((t - l) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: t
          }, {
            top: 0,
            left: n + l,
            position: c,
            width: n,
            height: r
          }, {
            top: r + l,
            left: n + l,
            position: c,
            width: n,
            height: r
          }]
        } {
          let n = Math.ceil((e - l) / 2),
            r = Math.ceil((t - l) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: r
          }, {
            top: r + l,
            left: 0,
            position: c,
            width: n,
            height: r
          }, {
            top: 0,
            left: n + l,
            position: c,
            width: n,
            height: r
          }, {
            top: r + l,
            left: n + l,
            position: c,
            width: n,
            height: r
          }]
        }
      })(n, l, t, 4);
      return d.set(r, e), e
    }
  })({
    numAttachments: t,
    containerWidth: n,
    containerHeight: r
  }), [t, n, r])
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
    containerHeight: r
  } = e, i = l.useRef(m(t)), a = l.useRef(n), s = l.useRef(r), o = n > a.current + 100, c = r > s.current + 100;
  return (o || c) && (i.current = m(t)), i.current
}