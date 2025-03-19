/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f,
  _: () => u
}), n(411104), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(53281),
  l = n(813197),
  o = n(426642),
  c = n(869783);

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
async function d(e) {
  try {
    let t = await new Promise((t, n) => {
        if (null != e) {
          let r = new FileReader;
          r.onload = e => {
            var r;
            "string" == typeof(null === (r = e.target) || void 0 === r ? void 0 : r.result) ? t(e.target.result): n(Error("Failed to read file"))
          }, r.readAsDataURL(e)
        }
      }),
      n = new Image;
    return n.src = t, await n.decode(), {
      image: n,
      dataURI: t
    }
  } catch (e) {
    throw o.d.WRONG_TYPE
  }
}
async function u(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    try {
      let {
        image: e,
        dataURI: r
      } = await d(i), s = i.type === c.m.MP4 ? await t(r, i) : await t(r, i, e);
      null != s && n.push({
        type: s,
        filename: i.name
      })
    } catch (e) {
      n.push({
        type: e,
        filename: i.name
      })
    }
  }
  n.length > 0 && g(n)
}
let g = e => {
    (0, s.ZDy)(async () => {
      let {
        default: t
      } = await n.e("68720").then(n.bind(n, 70846));
      return n => (0, r.jsx)(t, A({
        errors: e
      }, n))
    })
  },
  f = e => {
    let {
      onChange: t,
      multiple: o = !0,
      disabled: c,
      className: d,
      tabIndex: g = -1,
      "aria-label": f,
      filters: m,
      setLoading: p
    } = e, h = i.createRef(), C = i.useRef(null), [b, v] = i.useState(!1);
    i.useEffect(() => {
      b && x()
    }, [b]);
    let x = () => {
        null !== C.current && ((0, s.Mr3)(C.current), C.current = null)
      },
      N = async e => {
        null == p || p(!0), await u(e, t), v(!0), null == p || p(!1)
      }, j = async e => {
        var t, i, a;
        if (e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (i = a.files) || void 0 === i ? void 0 : i.length) === 0) return;
        let l = e.currentTarget.files;
        C.current = await (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("16169").then(n.bind(n, 935333));
          return t => (0, r.jsx)(e, A({
            processFiles: () => N(l)
          }, t))
        })
      };
    return (0, r.jsx)(a.Z, {
      onChange: j,
      filters: null != m ? m : (0, l.Zj)(),
      multiple: o,
      disabled: c,
      className: d,
      tabIndex: g,
      "aria-label": f,
      ref: h
    })
  }