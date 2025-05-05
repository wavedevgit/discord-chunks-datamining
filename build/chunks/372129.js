/** Chunk was on 78331 **/
r.d(t, {
  Z: () => m,
  _: () => h
}), r(415506), r(539854), r(388685);
var n = r(200651),
  i = r(192379),
  l = r(481060),
  a = r(53281),
  o = r(813197),
  s = r(426642),
  c = r(869783);

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
async function d(e) {
  try {
    let t = await new Promise((t, r) => {
        if (null != e) {
          let n = new FileReader;
          n.onload = e => {
            var n;
            "string" == typeof(null == (n = e.target) ? void 0 : n.result) ? t(e.target.result): r(Error("Failed to read file"))
          }, n.readAsDataURL(e)
        }
      }),
      r = new Image;
    return r.src = t, await r.decode(), {
      image: r,
      dataURI: t
    }
  } catch (e) {
    throw s.d.WRONG_TYPE
  }
}
async function h(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    try {
      let {
        image: e,
        dataURI: n
      } = await d(i), l = i.type === c.m.MP4 ? await t(n, i) : await t(n, i, e);
      null != l && r.push({
        type: l,
        filename: i.name
      })
    } catch (e) {
      r.push({
        type: e,
        filename: i.name
      })
    }
  }
  r.length > 0 && g(r)
}
let g = e => {
    (0, l.ZDy)(async () => {
      let {
        default: t
      } = await r.e("68720").then(r.bind(r, 70846));
      return r => (0, n.jsx)(t, u({
        errors: e
      }, r))
    })
  },
  m = e => {
    let {
      onChange: t,
      multiple: s = !0,
      disabled: c,
      className: d,
      tabIndex: g = -1,
      "aria-label": m,
      filters: f,
      setLoading: b
    } = e, p = i.createRef(), O = i.useRef(null), [y, j] = i.useState(!1);
    i.useEffect(() => {
      y && w()
    }, [y]);
    let w = () => {
        null !== O.current && ((0, l.Mr3)(O.current), O.current = null)
      },
      x = async e => {
        null == b || b(!0), await h(e, t), j(!0), null == b || b(!1)
      }, _ = async e => {
        var t, i, a;
        if (e.stopPropagation(), e.preventDefault(), (null == (t = e.currentTarget) ? void 0 : t.files) == null || (null == (a = e.currentTarget) || null == (i = a.files) ? void 0 : i.length) === 0) return;
        let o = e.currentTarget.files;
        O.current = await (0, l.ZDy)(async () => {
          let {
            default: e
          } = await r.e("16169").then(r.bind(r, 935333));
          return t => (0, n.jsx)(e, u({
            processFiles: () => x(o)
          }, t))
        })
      };
    return (0, n.jsx)(a.Z, {
      onChange: _,
      filters: null != f ? f : (0, o.Zj)(),
      multiple: s,
      disabled: c,
      className: d,
      tabIndex: g,
      "aria-label": m,
      ref: p
    })
  }