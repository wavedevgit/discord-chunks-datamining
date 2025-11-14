/** Chunk was on web.js **/
/** chunk id: 860109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk948890 = require("./948890.js"),
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
  } = r.useContext(a.S), E = r.useRef(null), b = l();
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
        var i, a, o, l, c, u, d, f, p;
        if (e.signal.aborted) return;
        let s = n[0],
          _ = n[1],
          y = null != _ && "object" == typeof _ && "type" in _,
          O = y ? _.type : r[s],
          v = y ? _.value : _;
        switch (O) {
          case "color":
            let [I, T, S, A] = v.resolve({
              theme: h,
              saturation: m,
              highContrastModeEnabled: g
            }).rgba();
            null == (a = t.viewModelInstance) || null == (i = a.color(s)) || i.rgba(I, T, S, 255 * A);
            break;
          case "number":
            let C = null == (o = t.viewModelInstance) ? true : o.number(s);
            null != C && (C.value = v);
            break;
          case "boolean":
            let N = null == (l = t.viewModelInstance) ? true : l.boolean(s);
            null != N && (N.value = v);
            break;
          case "trigger":
            null != v && ("boolean" == typeof v ? v : 0 !== v) && (null == (c = E.current) ? true : c[s]) !== v && (null == (d = t.viewModelInstance) || null == (u = d.trigger(s)) || u.trigger());
            break;
          case "string":
            let R = null == (f = t.viewModelInstance) ? true : f.string(s);
            null != R && (R.value = v);
            break;
          case "image":
            if (null != v) {
              let n = await b(v, e.signal);
              if (e.signal.aborted) return;
              let r = null == (p = t.viewModelInstance) ? true : p.image(s);
              null != r && (r.value = n)
            }
            break;
          default:
            console.warn("Unknown property type: ".concat(O))
        }
      }
    }(), () => {
      e.abort(), E.current = _
    }
  }, [_, t, n, s, h, null == t ? true : t.viewModelInstance, m, g, b])
}

function l() {
  let e = Chunk647438.useRef({});
  return Chunk647438.useCallback(async (t, n) => {
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