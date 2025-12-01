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
  } = e, p = null != d ? d : u, _ = (0, i.useViewModel)(t);
  (0, i.useViewModelInstance)(_);
  let {
    theme: m,
    saturation: h
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
      if (null == t || null == t.viewModelInstance || null == p) return;
      let r = s[null != n ? n : ""];
      for (let n of Object.entries(p)) {
        var i, a, o, l, c, u, d, f, _, O, v, S, I;
        if (e.signal.aborted) return;
        let s = n[0],
          p = n[1],
          T = null != p && "object" == typeof p && "type" in p,
          A = T ? p.type : r[s],
          C = T ? p.value : p;
        switch (A) {
          case "color":
            if ("number" == typeof C) {
              let e = null == (i = t.viewModelInstance) ? true : i.color(s);
              null != e && (e.value = C)
            } else if ("object" == typeof C) {
              let e = C;
              if ("resolve" in e) {
                let [n, r, i, l] = e.resolve({
                  theme: m,
                  saturation: h,
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
            let P = null == (f = t.viewModelInstance) ? true : f.boolean(s);
            null != P && (P.value = C);
            break;
          case "trigger":
            let R = null != C && ("boolean" == typeof C ? C : 0 !== C),
              w = y(E.current, s);
            R && w !== C && (null == (O = t.viewModelInstance) || null == (_ = O.trigger(s)) || _.trigger());
            break;
          case "string":
            let D = null == (v = t.viewModelInstance) ? true : v.string(s);
            null != D && (D.value = C);
            break;
          case "image":
            if (null != C) {
              let n = await b(C, e.signal);
              if (e.signal.aborted) return;
              let r = null == (S = t.viewModelInstance) ? true : S.image(s);
              null != r && (r.value = n)
            }
            break;
          case "artboard":
            let x = null == (I = t.viewModelInstance) ? true : I.artboard(s),
              L = t.getBindableArtboard(C);
            null != x && null != L && (x.value = L);
            break;
          default:
            console.warn("Unknown property type: ".concat(A))
        }
      }
    }(), () => {
      e.abort(), E.current = p
    }
  }, [y, p, t, n, s, m, null == t ? true : t.viewModelInstance, h, g, b])
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