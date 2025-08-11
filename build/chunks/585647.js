/** Chunk was on 30634 **/
/** chunk id: 585647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./35282.js");
var Chunk485589 = require("./485589.js"),
  Chunk14160 = require("./14160.js"),
  Chunk247123 = require("./247123.js"),
  Chunk207662 = require("./207662.js");
let u = {
  id: "aria-attribute-valid-value",
  selector: Chunk207662.J8,
  tags: [],
  metadata: {
    description: "ARIA attributes must use valid values",
    help: ""
  },
  check: function(e) {
    let t = function(e) {
      for (let k of i.cg)
        if (e.hasAttribute(k)) {
          let i = e.getAttribute(k),
            I = r.aria.get(k);
          switch (I.type) {
            case "string":
              return l.w;
            case "id":
              return u = k, o = i, null == document.getElementById(o) ? "".concat(u, " references #").concat(o, " which does not exist") : l.w;
            case "idlist":
              var t = k,
                n = i,
                a = e;
              if ("aria-controls" === t && ("false" === a.getAttribute("aria-expanded") || "false" === a.getAttribute("aria-selected")) || "aria-owns" === t && "false" === a.getAttribute("aria-expanded")) return l.w;
              for (let e of n.split(" "))
                if (null == document.getElementById(e)) return "".concat(t, " references #").concat(n, " which does not exist");
              return l.w;
            case "integer":
              return c = k, String(parseInt(s = i, 10)) !== s ? "".concat(c, " requires an integer but got ").concat(s) : l.w;
            case "number":
              return d = k, isFinite(f = i) ? l.w : "".concat(d, " requires a numeric value but got ").concat(f);
            case "boolean":
              return h = k, b = i, m = I, "true" === b || "false" === b || "" === b && true === m.allowundefined ? l.w : "".concat(h, ' must be either "true" or "false"');
            case "token":
              return function(e, t, n) {
                var r, a;
                let i = function(e) {
                  switch (e) {
                    case "true":
                      returntrue;
                    case "false":
                      returnfalse;
                    default:
                      return e
                  }
                }(t);
                return (null == (r = n.values) ? true : r.includes(i)) ? l.w : "".concat(e, " was ").concat(t, " but must be: ").concat(null == (a = n.values) ? true : a.join(", "))
              }(k, i, I);
            case "tokenlist":
              var u, o, c, s, d, f, h, b, m, p, g, v = k,
                w = i,
                A = I;
              for (let e of w.split(" ")) {
                if (null == (p = A.values) || !p.includes(e)) return "".concat(v, " included ").concat(w, " but is restricted to: ").concat(null == (g = A.values) ? true : g.join(", "))
              }
              return l.w;
            case "tristate":
              var y = k,
                x = i;
              switch (x) {
                case "true":
                case "false":
                case "mixed":
                  return l.w;
                default:
                  return "".concat(y, ' must be "true", "false", or "mixed" not ').concat(x)
              }
          }
        } return l.w
    }(e);
    return t !== l.w && ((0, i.Uu)(e) || !(0, a.p)(e)) ? l.w : t
  }
}