/** Chunk was on 49131 **/
/** chunk id: 983200, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $x: () => l,
  GV: () => s,
  S$: () => h,
  Vn: () => o,
  tu: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk31775 = require("./31775.js"),
  i = require.n(Chunk31775);
let l = 0,
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
    containerHeight: a
  } = e;
  return r.useMemo(() => (function(e) {
    let {
      numAttachments: t,
      containerWidth: n,
      containerHeight: r
    } = e, a = "".concat(t, "-").concat(n, "-").concat(r), i = d.get(a);
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
            a = Math.ceil((t - r) / 2);
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
            height: a
          }, {
            top: a + r,
            left: n + r,
            position: c,
            width: n,
            height: a
          }]
        } {
          let n = Math.ceil((e - r) / 2),
            a = Math.ceil((t - r) / 2);
          return [{
            top: 0,
            left: 0,
            position: c,
            width: n,
            height: a
          }, {
            top: a + r,
            left: 0,
            position: c,
            width: n,
            height: a
          }, {
            top: 0,
            left: n + r,
            position: c,
            width: n,
            height: a
          }, {
            top: a + r,
            left: n + r,
            position: c,
            width: n,
            height: a
          }]
        }
      })(n, r, t, 4);
      return d.set(a, e), e
    }
  })({
    numAttachments: t,
    containerWidth: n,
    containerHeight: a
  }), [t, n, a])
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
    containerHeight: a
  } = e, i = r.useRef(m(t)), l = r.useRef(n), s = r.useRef(a), o = n > l.current + 100, c = a > s.current + 100;
  return (o || c) && (i.current = m(t)), i.current
}