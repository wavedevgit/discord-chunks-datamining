/** Chunk was on 20087 **/
/** chunk id: 372129, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  ZP: () => g,
  _j: () => d,
  po: () => f
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk813197 = require("./813197.jsx"),
  Chunk426642 = require("./426642.jsx"),
  Chunk869783 = require("./869783.js");

function u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = r[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}
async function f(t) {
  try {
    let e = await new Promise((e, r) => {
        if (null != t) {
          let n = new FileReader;
          n.onload = t => {
            var n;
            "string" == typeof(null == (n = t.target) ? true : n.result) ? e(t.target.result): r(Error("Failed to read file"))
          }, n.readAsDataURL(t)
        }
      }),
      r = new Image;
    return r.src = e, await r.decode(), {
      image: r,
      dataURI: e
    }
  } catch (t) {
    throw s.d.WRONG_TYPE
  }
}
async function d(t, e) {
  let r = [];
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    try {
      let {
        image: t,
        dataURI: n
      } = await f(i), l = i.type === c.m.MP4 ? await e(n, i) : await e(n, i, t);
      null != l && r.push({
        type: l,
        filename: i.name
      })
    } catch (t) {
      r.push({
        type: t,
        filename: i.name
      })
    }
  }
  r.length > 0 && h(r)
}
let h = t => {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await r.e("68720").then(r.bind(r, 70846));
      return r => (0, n.jsx)(e, u({
        errors: t
      }, r))
    })
  },
  p = Chunk647438.forwardRef((t, e) => {
    let {
      onChange: s,
      multiple: c = true,
      disabled: f,
      className: h,
      tabIndex: p = false,
      "aria-label": g,
      filters: y,
      setLoading: O,
      title: w
    } = t, b = i.useRef(null), [m, j] = i.useState(false);
    i.useEffect(() => {
      m && v()
    }, [m]);
    let v = () => {
        null !== b.current && ((0, l.Mr3)(b.current), b.current = null)
      },
      P = async t => {
        null == O || O(true), await d(t, s), j(true), null == O || O(false)
      }, _ = async t => {
        var e, i, o;
        if (t.stopPropagation(), t.preventDefault(), (null == (e = t.currentTarget) ? true : e.files) == null || (null == (o = t.currentTarget) || null == (i = o.files) ? true : i.length) === 0) return;
        let a = t.currentTarget.files;
        b.current = await (0, l.ZDy)(async () => {
          let {
            default: t
          } = await r.e("16169").then(r.bind(r, 935333));
          return e => (0, n.jsx)(t, u({
            processFiles: () => P(a)
          }, e))
        })
      };
    return (0, n.jsx)(o.Z, {
      ref: e,
      onChange: _,
      filters: null != y ? y : (0, a.Zj)(),
      multiple: c,
      disabled: f,
      className: h,
      tabIndex: p,
      "aria-label": g,
      title: w
    })
  });
p.displayName = "ImageInputWithModals";
let g = p