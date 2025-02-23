/** Chunk was on 30634 (a0bc143339bf718f.js) **/
n.d(t, {
  Z: () => o
}), n(47120), n(301563);
var r = n(485589),
  a = n(14160),
  l = n(247123),
  i = n(207662);
let o = {
  id: "aria-attribute-valid-value",
  selector: i.J8,
  tags: [],
  metadata: {
    description: "ARIA attributes must use valid values",
    help: ""
  },
  check: function(e) {
    let t = function(e) {
      for (let h of i.cg)
        if (e.hasAttribute(h)) {
          var t, n, a, o, u, c, s, d, f;
          let i = e.getAttribute(h),
            b = r.aria.get(h);
          switch (b.type) {
            case "string":
              return l.w;
            case "id":
              return t = h, n = i, null == document.getElementById(n) ? "".concat(t, " references #").concat(n, " which does not exist") : l.w;
            case "idlist":
              return function(e, t, n) {
                if ("aria-controls" === e && ("false" === n.getAttribute("aria-expanded") || "false" === n.getAttribute("aria-selected")) || "aria-owns" === e && "false" === n.getAttribute("aria-expanded")) return l.w;
                for (let n of t.split(" "))
                  if (null == document.getElementById(n)) return "".concat(e, " references #").concat(t, " which does not exist");
                return l.w
              }(h, i, e);
            case "integer":
              return a = h, String(parseInt(o = i, 10)) !== o ? "".concat(a, " requires an integer but got ").concat(o) : l.w;
            case "number":
              return u = h, isFinite(c = i) ? l.w : "".concat(u, " requires a numeric value but got ").concat(c);
            case "boolean":
              return s = h, d = i, f = b, "true" === d || "false" === d || "" === d && !0 === f.allowundefined ? l.w : "".concat(s, ' must be either "true" or "false"');
            case "token":
              return function(e, t, n) {
                var r, a;
                let i = function(e) {
                  switch (e) {
                    case "true":
                      return !0;
                    case "false":
                      return !1;
                    default:
                      return e
                  }
                }(t);
                return (null === (r = n.values) || void 0 === r ? void 0 : r.includes(i)) ? l.w : "".concat(e, " was ").concat(t, " but must be: ").concat(null === (a = n.values) || void 0 === a ? void 0 : a.join(", "))
              }(h, i, b);
            case "tokenlist":
              return function(e, t, n) {
                for (let l of t.split(" ")) {
                  var r, a;
                  if (null === (r = n.values) || void 0 === r || !r.includes(l)) return "".concat(e, " included ").concat(t, " but is restricted to: ").concat(null === (a = n.values) || void 0 === a ? void 0 : a.join(", "))
                }
                return l.w
              }(h, i, b);
            case "tristate":
              return function(e, t) {
                switch (t) {
                  case "true":
                  case "false":
                  case "mixed":
                    return l.w;
                  default:
                    return "".concat(e, ' must be "true", "false", or "mixed" not ').concat(t)
                }
              }(h, i)
          }
        } return l.w
    }(e);
    return t !== l.w && ((0, i.Uu)(e) || !(0, a.p)(e)) ? l.w : t
  }
}