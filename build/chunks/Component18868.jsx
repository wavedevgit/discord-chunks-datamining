/** Chunk was on 945 **/
/** chunk id: 18868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk897842 = require("./897842.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk796591 = require("./796591.js");
let m = () => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 897842));
      return t => (0, a.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        title: "No image or video files found!",
        help: "Please drop one or more image or video files."
      }, t))
    }, {
      modalKey: Chunk897842.A
    })
  },
  p = e => {
    e.stopPropagation(), e.preventDefault()
  },
  h = e => {
    let {
      className: t,
      onDrop: n,
      children: i
    } = e, [h, f] = r.useState(false), x = r.useRef(null), b = r.useCallback(e => {
      p(e), f(true), (0, s.Mr3)(c.A)
    }, []), g = r.useCallback(e => {
      p(e);
      let t = x.current,
        n = e.relatedTarget;
      null != n && (null == t || t.contains(n)) || f(false)
    }, []), v = r.useCallback(async e => {
      p(e), f(false);
      let t = e.dataTransfer;
      if (null == t) return void m();
      let a = await Promise.all(Array.from(t.items).map(e => {
        var t;
        return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry()
      })).then(e => e.filter(e => null != e));
      a.length > 0 ? n(a) : m()
    }, [n]);
    return (0, a.jsxs)("div", {
      ref: x,
      className: l()(t, u.wrapper),
      onDragEnter: b,
      onDragOver: p,
      onDragLeave: g,
      onDrop: v,
      children: [i, h && (0, a.jsx)("div", {
        className: u.uploadModal,
        children: (0, a.jsxs)("div", {
          className: u.inner,
          children: [(0, a.jsx)(o.Z, {
            icons: d.J6
          }), (0, a.jsx)(s.Heading, {
            variant: "heading-lg/bold",
            children: "Upload Shop Assets"
          }), (0, a.jsxs)("div", {
            className: u.instructions,
            children: [(0, a.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: "Drop file(s) into this panel to preview Shop assets!"
            }), (0, a.jsxs)(s.Text, {
              variant: "text-sm/normal",
              children: ["Click", (0, a.jsx)(s.idN, {
                className: u.questionIcon,
                size: "xs",
                color: s.TVs.colors.TEXT_DEFAULT
              }), "above for more instructions."]
            })]
          })]
        })
      })]
    })
  }