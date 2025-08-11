/** Chunk was on web.js **/
/** chunk id: 988587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk255432 = require("./255432.jsx"),
  Chunk142489 = require("./142489.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  let t = e.controls,
    n = {};
  return null != t && Object.entries(t).forEach(e => {
    let [t, r] = e;
    n[t] = r.defaultValue
  }), n
}

function u(e) {
  let {
    story: t
  } = e, n = i.useMemo(() => c(t), [t]), [s, u] = i.useState(n);
  i.useEffect(() => {
    u(c(t))
  }, [t]);
  let d = () => {
    let e = t.component;
    return <e{...l({}, s)} />
  };
  return <div className={a.main}>{<div className={a.canvas}><div className={a.storyContent}>{d()}</div></div>}{null != t.controls && <div className={a.controls}><o.a controls={t.controls} props={s} onPropsChange={u} /></div>}</div>
}