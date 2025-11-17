/** Chunk was on web.js **/
/** chunk id: 199562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk806262 = require("./806262.js"),
  Chunk873505 = require("./873505.js"),
  Chunk484948 = require("./484948.js"),
  Chunk983977 = require("./983977.js"),
  Chunk218769 = require("./218769.js"),
  Chunk473749 = require("./473749.js");

function c(e) {
  return e && e.__esModule ? e.default : e
}

function u(e, t) {
  let {
    getRowText: n = e => {
      var n, r, i, a;
      return null != (a = null == (n = (r = t.collection).getTextValue) ? true : n.call(r, e)) ? a : null == (i = t.collection.getItem(e)) ? true : i.textValue
    }
  } = e, u = (0, s.q)(c(r.Z), "@react-aria/grid"), f = t.selectionManager.rawSelection, _ = (0, l.useRef)(f), p = (0, a.i)(() => {
    var e;
    if (!t.selectionManager.isFocused || f === _.current) {
      _.current = f;
      return
    }
    let r = d(f, _.current),
      a = d(_.current, f),
      o = "replace" === t.selectionManager.selectionBehavior,
      s = [];
    if (1 === t.selectionManager.selectedKeys.size && o) {
      let e = t.selectionManager.selectedKeys.keys().next().value;
      if (null != e && t.collection.getItem(e)) {
        let t = n(e);
        t && s.push(u.format("selectedItem", {
          item: t
        }))
      }
    } else if (1 === r.size && 0 === a.size) {
      let e = r.keys().next().value;
      if (null != e) {
        let t = n(e);
        t && s.push(u.format("selectedItem", {
          item: t
        }))
      }
    } else if (1 === a.size && 0 === r.size) {
      let e = a.keys().next().value;
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
  (0, o.r)(() => {
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