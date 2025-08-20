/** Chunk was on 93886 **/
/** chunk id: 18868, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  L: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk897842 = require("./897842.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk386325 = require("./386325.js");
let m = () => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 897842));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = a[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
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
  x = e => {
    e.stopPropagation(), e.preventDefault()
  },
  h = e => {
    let {
      className: t,
      onDrop: a
    } = e, [l, h] = r.useState(false), p = r.useRef(null), v = r.useCallback(e => {
      x(e), h(true), (0, s.Mr3)(c.A)
    }, []), b = r.useCallback(e => {
      x(e), h(false)
    }, []), f = r.useCallback(async e => {
      x(e), h(false);
      let t = e.dataTransfer;
      if (null == t) return void m();
      let n = await Promise.all(Array.from(t.items).map(e => {
        var t;
        return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry()
      })).then(e => e.filter(e => null != e));
      n.length > 0 ? a(n) : m()
    }, [a]);
    return (0, n.jsx)("div", {
      ref: p,
      className: i()(t, u.uploadArea),
      onDragEnter: v,
      onDragLeave: b,
      onDrop: f,
      children: (0, n.jsx)("div", {
        className: i()(u.uploadModal, {
          [u.droppable]: l
        }),
        children: (0, n.jsxs)("div", {
          className: u.inner,
          children: [(0, n.jsx)(o.Z, {
            icons: d.J6
          }), (0, n.jsx)(s.X6q, {
            variant: "heading-lg/bold",
            children: "Upload Shop Assets"
          }), (0, n.jsxs)("div", {
            className: u.instructions,
            children: [(0, n.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: "Drop file(s) into this panel to preview Shop assets!"
            }), (0, n.jsxs)(s.Text, {
              variant: "text-sm/normal",
              children: ["Click", (0, n.jsx)(s.idN, {
                className: u.questionIcon,
                size: "xs",
                color: s.TVs.colors.TEXT_DEFAULT
              }), "above for more instructions."]
            })]
          })]
        })
      })
    })
  }