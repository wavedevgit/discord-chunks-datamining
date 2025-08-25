/** Chunk was on web.js **/
/** chunk id: 488436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk207430 = require("./207430.js"),
  Chunk873505 = require("./873505.js"),
  Chunk256402 = require("./256402.js"),
  Chunk217728 = require("./217728.js"),
  Chunk792160 = require("./792160.js"),
  Chunk647438 = require("./647438.js");

function c(e) {
  return e && e.__esModule ? e.default : e
}

function u(e, t) {
  let {
    getRowText: n = e => {
      var n, r, i, o;
      return null != (o = null == (n = (r = t.collection).getTextValue) ? true : n.call(r, e)) ? o : null == (i = t.collection.getItem(e)) ? true : i.textValue
    }
  } = e, u = (0, s.q)(c(r.Z), "@react-aria/grid"), f = t.selectionManager.rawSelection, _ = (0, l.useRef)(f), p = (0, o.i)(() => {
    var e;
    if (!t.selectionManager.isFocused || f === _.current) {
      _.current = f;
      return
    }
    let r = d(f, _.current),
      o = d(_.current, f),
      a = "replace" === t.selectionManager.selectionBehavior,
      s = [];
    if (1 === t.selectionManager.selectedKeys.size && a) {
      let e = t.selectionManager.selectedKeys.keys().next().value;
      if (null != e && t.collection.getItem(e)) {
        let t = n(e);
        t && s.push(u.format("selectedItem", {
          item: t
        }))
      }
    } else if (1 === r.size && 0 === o.size) {
      let e = r.keys().next().value;
      if (null != e) {
        let t = n(e);
        t && s.push(u.format("selectedItem", {
          item: t
        }))
      }
    } else if (1 === o.size && 0 === r.size) {
      let e = o.keys().next().value;
      if (null != e && t.collection.getItem(e)) {
        let t = n(e);
        t && s.push(u.format("deselectedItem", {
          item: t
        }))
      }
    }
    "multiple" === t.selectionManager.selectionMode && (0 === s.length || "all" === f || f.size > 1 || "all" === _.current || (null == (e = _.current) ? true : e.size) > 1) && s.push("all" === f ? u.format("selectedAll") : u.format("selectedCount", {
      count: f.size
    })), s.length > 0 && (0, i.xQ)(s.join(" ")), _.current = f
  });
  (0, a.r)(() => {
    if (t.selectionManager.isFocused) p();
    else {
      let e = requestAnimationFrame(p);
      return () => cancelAnimationFrame(e)
    }
  }, [f, t.selectionManager.isFocused])
}

function d(e, t) {
  let n = new Set;
  if ("all" === e || "all" === t) return n;
  for (let r of e.keys()) t.has(r) || n.add(r);
  return n
}