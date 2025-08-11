/** Chunk was on 22988 **/
/** chunk id: 314224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk536982 = require("./536982.js"),
  Chunk456677 = require("./456677.js"),
  Chunk951665 = require("./951665.js"),
  Chunk428760 = require("./428760.js"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.js"),
  Chunk461367 = require("./461367.js");

function h(e) {
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

function f(e, t) {
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

function b(e) {
  var t, n, b, x, j, v;
  let {
    rule: _,
    onChangeRule: O
  } = e, y = i.useCallback(e => {
    O(f(h({}, _), {
      triggerMetadata: f(h({}, _.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [O, _]), C = i.useCallback(e => {
    O(f(h({}, _), {
      triggerMetadata: f(h({}, _.triggerMetadata), {
        allowList: e
      })
    }))
  }, [O, _]);
  return <div className={p.cardContentsContainer}>{<d.Z step={1} header={g.intl.string(g.t["ue+tnZ"])}>{<o.Z onChangeText={y} maxWordCount={m.RH} initialValue={null == (t = _.triggerMetadata) ? true : t.keywordFilter} />}{<s.Z rule={_} onChangeRule={O} collapsed={(null == _ || null == (n = _.triggerMetadata) ? true : n.regexPatterns) == null || (null == _ || null == (b = _.triggerMetadata) ? true : b.regexPatterns.length) === 0} />}{<l.Z onChange={C} initialValue={null == (x = _.triggerMetadata) ? true : x.allowList} maxWordCount={m.n4} collapsed={(null == (j = _.triggerMetadata) ? true : j.allowList) == null || (null == (v = _.triggerMetadata) ? true : v.allowList.length) === 0} />}</d.Z>}{<u.Z type={u.Z.Type.ARROW_DOWN} />}{<d.Z step={2} header={g.intl.string(g.t["18TOiY"])}><a.Z rule={_} onChangeRule={O} /></d.Z>}{<u.Z type={u.Z.Type.CROSS} />}{<d.Z step={3} header={g.intl.string(g.t.eq3gjo)}><c.Z rule={_} onChangeRule={O} /></d.Z>}</div>
}