/** Chunk was on web.js **/
/** chunk id: 732586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk970184 = require("./970184.js"),
  Chunk293979 = require("./293979.js"),
  Chunk290829 = require("./290829.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let t, {
      type: n,
      style: d,
      label: _,
      placeholder: p,
      minLength: h,
      maxLength: m,
      required: g,
      value: E
    } = e,
    [b, y] = i.useState(null != E ? E : ""),
    {
      state: O,
      executeStateUpdate: v,
      error: I
    } = (0, l.Ee)(e, null != E ? {
      type: n,
      value: E
    } : true),
    T = (0, c.hz)(e.id);
  i.useEffect(() => {
    (null == O ? true : O.type) === n && y(O.value)
  }, [n, O]);
  let S = {
    value: b,
    placeholder: p,
    minLength: h,
    maxLength: m,
    required: g,
    onChange: e => {
      y(e), v({
        type: n,
        value: e
      })
    },
    autoFocus: T
  };
  switch (d) {
    case s.PT.SMALL:
      t = <a.oil{...f({}, S)} />;
      break;
    case s.PT.PARAGRAPH:
      t = <o.iS{...f({
        autosize: true
      }, S)} />
  }
  return null != _ ? <a.xJW title={_} required={g} className={u.formItem} error={I}>{t}</a.xJW> : t
}