/** Chunk was on 54844 **/
/** chunk id: 238122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk273744 = require("./273744.js"),
  Chunk388032 = require("./388032.js"),
  Chunk232890 = require("./232890.js"),
  Chunk20493 = require("./20493.js");
let u = e => {
    var t, n;
    let {
      data: {
        title: u,
        subtitle: m,
        placeholder: p,
        rows: g,
        character_limit: x,
        pattern: _
      },
      onChange: b,
      initialText: h,
      isRequired: f
    } = e, v = l.useRef(a.Z.reactParserFor((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, a.Z.defaultRules), n = n = {
      link: s.s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))), [j, y] = l.useState(""), [O, Z] = l.useState(null);
    l.useEffect(() => {
      var e;
      y(null != (e = null == h ? true : h.value) ? e : "")
    }, [h]);
    let I = l.useCallback(e => {
      let t = null != _ ? new RegExp(_) : null;
      null == t || t.test(e) ? null != e && (Z(null), y(e), b({
        value: e,
        isValid: true
      })) : (Z(o.intl.string(o.t["24xrGR"])), b({
        value: e,
        isValid: false
      }))
    }, [b, _]);
    return <div className={d.marginBottom8}>{null != u && <div className={d.marginBottom8}><i.Text variant={"text-sm/bold"}>{u}{f && <span className={c.required}>{"*"}</span>}</i.Text></div>}{<i.Kx8 maxLength={x} onChange={I} value={j} error={O} rows={g} placeholder={p} autoFocus={true} />}{null != m && <div><i.Text variant={"text-sm/normal"}>{v.current(m)}</i.Text></div>}</div>
  },
  m = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t;
      let i = e.name;
      return <u data={e.data} onChange={e => n(i, e.value, e.isValid)} initialText={null != (t = null == l ? true : l[i]) ? t : true} isRequired={e.should_submit_data} />
    });
    return <div>{i}</div>
  }