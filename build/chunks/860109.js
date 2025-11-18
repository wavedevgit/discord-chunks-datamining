/** Chunk was on web.js **/
/** chunk id: 860109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk123314 = require("./123314.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx");

function s(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: s,
    dataBinding: u,
    dynamicDataBinding: d,
    onDataBindingChange: f
  } = e, _ = null != d ? d : u, p = (0, i.useViewModel)(t);
  (0, i.useViewModelInstance)(p);
  let {
    theme: h,
    saturation: m
  } = (0, o.ZF)(), {
    highContrastModeEnabled: g
  } = r.useContext(a.S), E = r.useRef(null), b = l(), y = r.useCallback((e, t) => {
    let n = null == e ? true : e[t];
    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n
  }, []);
  c({
    rive: t,
    artboard: n,
    artboardProperties: s,
    dynamicDataBinding: d,
    dataBinding: u,
    onDataBindingChange: f
  }), r.useEffect(() => {
    let e = new AbortController;
    return async function() {
      if (null == t || null == t.viewModelInstance || null == _) return;
      let r = s[null != n ? n : ""];
      for (let n of Object.entries(_)) {
        var i, a, o, l, c, u, d, f, p, O, v, I, T;
        if (e.signal.aborted) return;
        let s = n[0],
          _ = n[1],
          S = null != _ && "object" == typeof _ && "type" in _,
          A = S ? _.type : r[s],
          C = S ? _.value : _;
        switch (A) {
          case "color":
            if ("number" == typeof C) {
              let e = null == (i = t.viewModelInstance) ? true : i.color(s);
              null != e && (e.value = C)
            } else if ("object" == typeof C) {
              let e = C;
              if ("resolve" in e) {
                let [n, r, i, l] = e.resolve({
                  theme: h,
                  saturation: m,
                  highContrastModeEnabled: g
                }).rgba();
                null == (o = t.viewModelInstance) || null == (a = o.color(s)) || a.rgba(n, r, i, 255 * l)
              } else null == (c = t.viewModelInstance) || null == (l = c.color(s)) || l.rgba(e.r, e.g, e.b, null != (u = e.a) ? u : 255)
            }
            break;
          case "number":
            let N = null == (d = t.viewModelInstance) ? true : d.number(s);
            null != N && (N.value = C);
            break;
          case "boolean":
            let R = null == (f = t.viewModelInstance) ? true : f.boolean(s);
            null != R && (R.value = C);
            break;
          case "trigger":
            let P = null != C && ("boolean" == typeof C ? C : 0 !== C),
              D = y(E.current, s);
            P && D !== C && (null == (O = t.viewModelInstance) || null == (p = O.trigger(s)) || p.trigger());
            break;
          case "string":
            let w = null == (v = t.viewModelInstance) ? true : v.string(s);
            null != w && (w.value = C);
            break;
          case "image":
            if (null != C) {
              let n = await b(C, e.signal);
              if (e.signal.aborted) return;
              let r = null == (I = t.viewModelInstance) ? true : I.image(s);
              null != r && (r.value = n)
            }
            break;
          case "artboard":
            let L = null == (T = t.viewModelInstance) ? true : T.artboard(s),
              x = t.getBindableArtboard(C);
            null != L && null != x && (L.value = x);
            break;
          default:
            console.warn("Unknown property type: ".concat(A))
        }
      }
    }(), () => {
      e.abort(), E.current = _
    }
  }, [y, _, t, n, s, h, null == t ? true : t.viewModelInstance, m, g, b])
}

function l() {
  let e = Chunk473749.useRef({});
  return Chunk473749.useCallback(async (t, n) => {
    if ("string" != typeof t) return Promise.resolve(t);
    {
      if (null != e.current[t]) return Promise.resolve(e.current[t]);
      let r = await fetch(t, {
          signal: n
        }),
        a = await r.arrayBuffer(),
        o = await (0, i.decodeImage)(new Uint8Array(a));
      return e.current[t] = o, o
    }
  }, [])
}

function c(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: i,
    dynamicDataBinding: a,
    onDataBindingChange: o
  } = e, s = null != a, l = r.useCallback(e => {
    var t;
    return s ? null == a || null == (t = a[e]) ? true : t.type : i[null != n ? n : ""][e]
  }, [s, a, i, n]);
  r.useEffect(() => {
    if (null == t || null == o) return;
    let e = [];
    return Object.entries(o).forEach(n => {
      var r, i;
      let [a, o] = n, s = l(a);
      if (null == s || null == o) return;
      let c = null == (i = t.viewModelInstance) || null == (r = i[s]) ? true : r.call(i, a);
      null != c && (c.on(o), e.push([o, c]))
    }), () => {
      e.forEach(e => {
        let [t, n] = e;
        null != n && n.off(t)
      })
    }
  }, [t, o, l])
}