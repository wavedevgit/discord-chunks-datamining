/** Chunk was on 78331 **/
r.d(t, {
  Z: () => m,
  _: () => h
}), r(415506), r(539854), r(388685);
var n = r(255367),
  l = r(73800),
  i = r(481060),
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
    let l = e[n];
    try {
      let {
        image: e,
        dataURI: n
      } = await d(l), i = l.type === c.m.MP4 ? await t(n, l) : await t(n, l, e);
      null != i && r.push({
        type: i,
        filename: l.name
      })
    } catch (e) {
      r.push({
        type: e,
        filename: l.name
      })
    }
  }
  r.length > 0 && g(r)
}
let g = e => {
    (0, i.ZDy)(async () => {
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
      setLoading: p
    } = e, b = l.useRef(null), O = l.useRef(null), [y, j] = l.useState(!1);
    l.useEffect(() => {
      y && x()
    }, [y]);
    let x = () => {
        null !== O.current && ((0, i.Mr3)(O.current), O.current = null)
      },
      w = async e => {
        null == p || p(!0), await h(e, t), j(!0), null == p || p(!1)
      }, _ = async e => {
        var t, l, a;
        if (e.stopPropagation(), e.preventDefault(), (null == (t = e.currentTarget) ? void 0 : t.files) == null || (null == (a = e.currentTarget) || null == (l = a.files) ? void 0 : l.length) === 0) return;
        let o = e.currentTarget.files;
        O.current = await (0, i.ZDy)(async () => {
          let {
            default: e
          } = await r.e("16169").then(r.bind(r, 935333));
          return t => (0, n.jsx)(e, u({
            processFiles: () => w(o)
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
      ref: b
    })
  }