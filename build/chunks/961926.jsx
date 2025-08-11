/** Chunk was on 22988 **/
/** chunk id: 961926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk536982 = require("./536982.jsx"),
  Chunk285318 = require("./285318.jsx"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461367 = require("./461367.js");

function p(e) {
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
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  var t, n, f;
  let {
    rule: b,
    onChangeRule: x
  } = e, j = i.useCallback(e => {
    x(h(p({}, b), {
      triggerMetadata: h(p({}, b.triggerMetadata), {
        allowList: e
      })
    }))
  }, [x, b]);
  return <div className={g.cardContentsContainer}>{<c.Z step={1} header={m.intl.string(m.t.CX5YfX)}>{<a.Z rule={b} onChangeRule={x} />}{<l.Z onChange={j} initialValue={null == (t = b.triggerMetadata) ? true : t.allowList} maxWordCount={u.I3} collapsed={(null == (n = b.triggerMetadata) ? true : n.allowList) == null || (null == (f = b.triggerMetadata) ? true : f.allowList.length) === 0} />}</c.Z>}{<d.Z type={d.Z.Type.ARROW_DOWN} />}{<c.Z step={2} header={m.intl.string(m.t["18TOiY"])}><s.Z rule={b} onChangeRule={x} /></c.Z>}{<d.Z type={d.Z.Type.CROSS} />}{<c.Z step={3} header={m.intl.string(m.t.eq3gjo)}><o.Z rule={b} onChangeRule={x} /></c.Z>}</div>
}