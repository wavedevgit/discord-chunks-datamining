/** Chunk was on web.js **/
/** chunk id: 270597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk647307 = require("./647307.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx");

function o(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: o,
    dataBinding: u,
    dynamicDataBinding: d,
    onDataBindingChange: f
  } = e, p = null != d ? d : u, _ = (0, i.useViewModel)(t);
  (0, i.useViewModelInstance)(_);
  let {
    theme: h,
    saturation: m
  } = (0, s.G9)(), {
    highContrastModeEnabled: g
  } = r.useContext(a.C), E = r.useRef(null), b = l(), y = r.useCallback((e, t) => {
    let n = null == e ? true : e[t];
    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n
  }, []);
  c({
    rive: t,
    artboard: n,
    artboardProperties: o,
    dynamicDataBinding: d,
    dataBinding: u,
    onDataBindingChange: f
  }), r.useEffect(() => {
    let e = new AbortController;
    return (async function() {
      if (null == t || null == t.viewModelInstance || null == p) return;
      let r = o[null != n ? n : ""];
      for (let n of Object.entries(p)) {
        var i, a, s, l, c, u, d, f, _, O, A, v, S;
        if (e.signal.aborted) return;
        let o = n[0],
          p = n[1],
          I = null != p && "object" == typeof p && "type" in p,
          T = I ? p.type : r[o],
          C = I ? p.value : p;
        switch (T) {
          case "color":
            if ("number" == typeof C) {
              let e = null == (i = t.viewModelInstance) ? true : i.color(o);
              null != e && (e.value = C)
            } else if ("object" == typeof C) {
              let e = C;
              if ("resolve" in e) {
                let [n, r, i, l] = e.resolve({
                  theme: h,
                  saturation: m,
                  highContrastModeEnabled: g
                }).rgba();
                null == (s = t.viewModelInstance) || null == (a = s.color(o)) || a.rgba(n, r, i, 255 * l)
              } else null == (u = t.viewModelInstance) || null == (c = u.color(o)) || c.rgba(e.r, e.g, e.b, null != (l = e.a) ? l : 255)
            }
            break;
          case "number":
            let N = null == (d = t.viewModelInstance) ? true : d.number(o);
            null != N && (N.value = C);
            break;
          case "boolean":
            let R = null == (f = t.viewModelInstance) ? true : f.boolean(o);
            null != R && (R.value = C);
            break;
          case "trigger":
            let w = null != C && ("boolean" == typeof C ? C : 0 !== C),
              P = y(E.current, o);
            w && P !== C && (null == (O = t.viewModelInstance) || null == (_ = O.trigger(o)) || _.trigger());
            break;
          case "string":
            let D = null == (A = t.viewModelInstance) ? true : A.string(o);
            null != D && (D.value = C);
            break;
          case "image":
            if (null != C) {
              let n = await b(C, e.signal);
              if (e.signal.aborted) return;
              let r = null == (v = t.viewModelInstance) ? true : v.image(o);
              null != r && (r.value = n)
            }
            break;
          case "artboard":
            let x = null == (S = t.viewModelInstance) ? true : S.artboard(o),
              L = t.getBindableArtboard(C);
            null != x && null != L && (x.value = L);
            break;
          default:
            console.warn("Unknown property type: ".concat(T))
        }
      }
    })().catch(e => {
      if ("AbortError" !== e.name) throw e
    }), () => {
      e.abort("New data binding applied - aborting previous image fetches."), E.current = p
    }
  }, [y, p, t, n, o, h, null == t ? true : t.viewModelInstance, m, g, b])
}

function l() {
  let e = r.useRef({});
  return r.useCallback(async (t, n) => {
    if ("string" != typeof t) return Promise.resolve(t);
    {
      if (null != e.current[t]) return Promise.resolve(e.current[t]);
      let r = await fetch(t, {
        signal: n
      }).catch(e => {
        if (null == n ? true : n.aborted) return Promise.resolve(null);
        throw e
      });
      if (null == r || (null == n ? true : n.aborted)) return Promise.resolve(null);
      let a = await r.arrayBuffer(),
        s = await (0, i.decodeImage)(new Uint8Array(a));
      return e.current[t] = s, s
    }
  }, [])
}

function c(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: i,
    dynamicDataBinding: a,
    onDataBindingChange: s
  } = e, o = null != a, l = r.useCallback(e => {
    var t;
    return o ? null == a || null == (t = a[e]) ? true : t.type : i[null != n ? n : ""][e]
  }, [o, a, i, n]);
  r.useEffect(() => {
    if (null == t || null == s) return;
    let e = [];
    return Object.entries(s).forEach(n => {
      var r, i;
      let [a, s] = n, o = l(a);
      if (null == o || null == s) return;
      let c = null == (i = t.viewModelInstance) || null == (r = i[o]) ? true : r.call(i, a);
      null != c && (c.on(s), e.push([s, c]))
    }), () => {
      e.forEach(e => {
        let [t, n] = e;
        null != n && n.off(t)
      })
    }
  }, [t, s, l])
}