/** Chunk was on web.js **/
/** chunk id: 372129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => g,
  _j: () => _
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk813197 = require("./813197.jsx"),
  Chunk426642 = require("./426642.jsx"),
  Chunk869783 = require("./869783.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  return new Promise((t, n) => {
    if (null != e) {
      let r = new FileReader;
      r.onload = e => {
        var r;
        "string" == typeof(null == (r = e.target) ? true : r.result) ? t(e.target.result): n(Error("Failed to read file"))
      }, r.readAsDataURL(e)
    }
  })
}
async function p(e) {
  try {
    let t = await f(e),
      n = new Image;
    return n.src = t, await n.decode(), {
      image: n,
      dataURI: t
    }
  } catch (e) {
    throw l.d.WRONG_TYPE
  }
}
async function _(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    try {
      let {
        image: e,
        dataURI: r
      } = await p(i), a = i.type === c.m.MP4 ? await t(r, i) : await t(r, i, e);
      null != a && n.push({
        type: a,
        filename: i.name
      })
    } catch (e) {
      n.push({
        type: e,
        filename: i.name
      })
    }
  }
  n.length > 0 && h(n)
}
let h = e => {
    (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("68720").then(n.bind(n, 70846));
      return n => (0, r.jsx)(t, d({
        errors: e
      }, n))
    })
  },
  m = Chunk473749.forwardRef((e, t) => {
    let {
      onChange: l,
      multiple: c = true,
      disabled: u,
      className: f,
      tabIndex: p = false,
      "aria-label": h,
      filters: m,
      setLoading: g,
      title: E
    } = e, b = i.useRef(null), [y, O] = i.useState(false);
    i.useEffect(() => {
      y && v()
    }, [y]);
    let v = () => {
        null !== b.current && ((0, a.Mr3)(b.current), b.current = null)
      },
      S = async e => {
        null == g || g(true), await _(e, l), O(true), null == g || g(false)
      }, I = async e => {
        var t, i, o;
        if (e.stopPropagation(), e.preventDefault(), (null == (t = e.currentTarget) ? true : t.files) == null || (null == (o = e.currentTarget) || null == (i = o.files) ? true : i.length) === 0) return;
        let s = e.currentTarget.files;
        b.current = await (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("16169").then(n.bind(n, 935333));
          return t => (0, r.jsx)(e, d({
            processFiles: () => S(s)
          }, t))
        })
      };
    return (0, r.jsx)(o.Z, {
      ref: t,
      onChange: I,
      filters: null != m ? m : (0, s.Zj)(),
      multiple: c,
      disabled: u,
      className: f,
      tabIndex: p,
      "aria-label": h,
      title: E
    })
  });
m.displayName = "ImageInputWithModals";
let g = m