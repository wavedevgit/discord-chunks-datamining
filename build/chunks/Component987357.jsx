/** Chunk was on web.js **/
/** chunk id: 987357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

function o(e) {
  return {
    position: "vertical" === e ? "absolute" : "relative",
    pointerEvents: "none",
    minHeight: +("vertical" !== e),
    minWidth: +("horizontal" !== e),
    flex: "0 0 auto"
  }
}

function a(e) {
  let {
    paddingFix: t = true,
    orientation: n = "vertical",
    dir: a,
    className: s,
    scrollerRef: l,
    specs: c
  } = e, u = (0, i.useRef)(null);
  return (0, i.useLayoutEffect)(() => {
    var e;
    let {
      current: r
    } = l;
    if (null == r || "auto" === n || !t) return;
    let i = null == (e = r.ownerDocument) ? true : e.defaultView;
    if (null == i) return;
    r.style.paddingTop = "", r.style.paddingBottom = "", r.style.paddingLeft = "", r.style.paddingRight = "";
    let o = i.getComputedStyle(r);
    if ("vertical" === n) {
      if ("rtl" === a) {
        let e = parseInt(o.getPropertyValue("padding-left"), 10);
        r.style.paddingLeft = "".concat(Math.max(0, e - c.width), "px"), r.style.paddingRight = ""
      } else {
        let e = parseInt(o.getPropertyValue("padding-right"), 10);
        r.style.paddingRight = "".concat(Math.max(0, e - c.width), "px"), r.style.paddingLeft = ""
      }
      let {
        current: e
      } = u;
      null != e && (e.style.height = o.getPropertyValue("padding-bottom"))
    } else {
      let e = parseInt(o.getPropertyValue("padding-bottom"), 10);
      r.style.paddingBottom = "".concat(Math.max(0, e - c.height), "px");
      let {
        current: t
      } = u;
      null != t && (t.style.width = o.getPropertyValue("padding-left"))
    }
  }, [n, a, s, l, t, c]), (0, i.useMemo)(() => "auto" !== n ? (0, r.jsx)("div", {
    "aria-hidden": true,
    style: o(n),
    ref: u
  }) : null, [n])
}