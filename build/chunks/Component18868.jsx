/** Chunk was on 42340 **/
/** chunk id: 18868, original params: e,t,n (module,exports,require) **/
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
      onDrop: n
    } = e, [l, h] = r.useState(false), x = r.useRef(null), g = r.useCallback(e => {
      p(e), h(true), (0, o.Mr3)(c.A)
    }, []), f = r.useCallback(e => {
      p(e), h(false)
    }, []), b = r.useCallback(async e => {
      p(e), h(false);
      let t = e.dataTransfer;
      if (null == t) return void m();
      let a = await Promise.all(Array.from(t.items).map(e => {
        var t;
        return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry()
      })).then(e => e.filter(e => null != e));
      a.length > 0 ? n(a) : m()
    }, [n]);
    return (0, a.jsx)("div", {
      ref: x,
      className: i()(t, u.uploadArea),
      onDragEnter: g,
      onDragLeave: f,
      onDrop: b,
      children: (0, a.jsx)("div", {
        className: i()(u.uploadModal, {
          [u.droppable]: l
        }),
        children: (0, a.jsxs)("div", {
          className: u.inner,
          children: [(0, a.jsx)(s.Z, {
            icons: d.J6
          }), (0, a.jsx)(o.Heading, {
            variant: "heading-lg/bold",
            children: "Upload Shop Assets"
          }), (0, a.jsxs)("div", {
            className: u.instructions,
            children: [(0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: "Drop file(s) into this panel to preview Shop assets!"
            }), (0, a.jsxs)(o.Text, {
              variant: "text-sm/normal",
              children: ["Click", (0, a.jsx)(o.idN, {
                className: u.questionIcon,
                size: "xs",
                color: o.TVs.colors.TEXT_DEFAULT
              }), "above for more instructions."]
            })]
          })]
        })
      })
    })
  }