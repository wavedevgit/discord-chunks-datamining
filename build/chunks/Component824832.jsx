/** Chunk was on web.js **/
/** chunk id: 824832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  UD: () => _
}), require("./65821.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk946274 = require("./946274.jsx"),
  Chunk563863 = require("./563863.jsx"),
  Chunk693591 = require("./693591.js");

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
    throw l.o.WRONG_TYPE
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
      } = await p(i), a = i.type === c.a.MP4 ? await t(r, i) : await t(r, i, e);
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
    (0, a.mMO)(async () => {
      let {
        default: t
      } = await n.e("84981").then(n.bind(n, 940372));
      return n => (0, r.jsx)(t, d({
        errors: e
      }, n))
    })
  },
  m = Chunk64700.forwardRef((e, t) => {
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
    } = e, y = i.useRef(null), [b, O] = i.useState(false);
    i.useEffect(() => {
      b && v()
    }, [b]);
    let v = () => {
        null !== y.current && ((0, a.OoC)(y.current), y.current = null)
      },
      A = async e => {
        null == g || g(true), await _(e, l), O(true), null == g || g(false)
      }, I = async e => {
        var t, i, o;
        if (e.stopPropagation(), e.preventDefault(), (null == (t = e.currentTarget) ? true : t.files) == null || (null == (o = e.currentTarget) || null == (i = o.files) ? true : i.length) === 0) return;
        let s = e.currentTarget.files;
        y.current = await (0, a.mMO)(async () => {
          let {
            default: e
          } = await n.e("17259").then(n.bind(n, 897126));
          return t => (0, r.jsx)(e, d({
            processFiles: () => A(s)
          }, t))
        })
      };
    return (0, r.jsx)(o.A, {
      ref: t,
      onChange: I,
      filters: null != m ? m : (0, s.gA)(),
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