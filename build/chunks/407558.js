/** Chunk was on web.js **/
/** chunk id: 407558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => s,
  Y: () => Chunk980824.Y_
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk980824 = require("./980824.jsx"),
  Chunk998976 = require("./998976.js"),
  Chunk615673 = require("./615673.js");

function s(e) {
  let {
    defaultOpen: t,
    offset: n = 4,
    placement: s,
    matchReferenceWidth: l = true,
    setHeight: c,
    setWidth: u,
    transform: d
  } = e, [f, p] = r.useState(null != t && t), _ = r.useRef(c);
  r.useEffect(() => {
    _.current = c
  }, [c]);
  let m = r.useRef(u);
  r.useEffect(() => {
    m.current = u
  }, [u]);
  let h = r.useRef(l);
  r.useEffect(() => {
    h.current = l
  }, [l]);
  let {
    refs: g,
    floatingStyles: E,
    context: b
  } = (0, i.YF)({
    open: f,
    onOpenChange: p,
    transform: d,
    middleware: [null == s ? (0, o.X5)() : true, (0, o.dp)({
      apply(e) {
        let {
          rects: t,
          elements: n
        } = e;
        h.current && Object.assign(n.floating.style, {
          minWidth: "".concat(t.reference.width, "px"),
          width: "".concat(t.reference.width, "px")
        }), null != m.current && Object.assign(n.floating.style, {
          width: "".concat(m.current(t.reference), "px")
        }), null != _.current && Object.assign(n.floating.style, {
          maxHeight: "".concat(_.current(t.reference), "px")
        })
      }
    }), (0, o.RR)(), (0, o.cv)(n), (0, o.uY)()],
    whileElementsMounted: a.Me,
    placement: s,
    strategy: "fixed"
  }), y = (0, i.bQ)(b, {
    bubbles: {
      escapeKey: false
    }
  }), {
    getReferenceProps: O,
    getFloatingProps: v
  } = (0, i.NI)([y]);
  return {
    isOpen: f,
    setIsOpen: p,
    refs: g,
    floatingStyles: E,
    context: b,
    getReferenceProps: O,
    getFloatingProps: v
  }
}