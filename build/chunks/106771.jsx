/** Chunk was on web.js **/
/** chunk id: 106771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk973616 = require("./973616.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk570949 = require("./570949.js"),
  Chunk753972 = require("./753972.js"),
  Chunk532309 = require("./532309.js"),
  Chunk654715 = require("./654715.js"),
  Chunk413097 = require("./413097.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e) {
  var t;
  let {
    command: n,
    application: h,
    onClick: g,
    query: E,
    searchResultsPosition: b
  } = e, y = i.useCallback(e => {
    if ((0, l.BQ)(h)) {
      let t = h instanceof s.ZP ? h : s.ZP.createFromServer(h);
      (0, a.vq)(e, e => <u.Z{...m({
        application: t
      }, e)} />)
    }
  }, [h]), {
    iconURL: O,
    name: v,
    description: I
  } = i.useMemo(() => (0, l.sl)(h, {
    fakeAppIconURL: p
  }), [h]), T = i.useMemo(() => {
    var e;
    let t = null != (e = null == n ? true : n.displayDescription) ? e : I;
    return null == t ? null : (0, c.ae)(t, true)
  }, [I, null == n ? true : n.displayDescription]), {
    trackSearchResultsItemImpressionRef: S
  } = (0, f.Z)({
    applicationId: h.id,
    commandId: null == n ? true : n.id,
    query: E,
    searchResultsPosition: b
  });
  return <o.P3F className={_.clickable} innerRef={e => {
      S.current = e
    }} onClick={g} onContextMenu={y}><o.Rny className={_.focusBlock}>{<d.Z src={O} className={_.icon} aria-hidden={true} rendersPlaceholder={true} />}{<div className={_.cmdDetails}>{<o.X6q variant={"heading-md/semibold"} color={"header-primary"} lineClamp={1}>{null != (t = null == n ? true : n.displayName) ? t : v}</o.X6q>}{<o.Text variant={"text-sm/normal"} color={"text-secondary"} lineClamp={1}>{T}</o.Text>}</div>}{null != n ? <o.Text className={_.cmdAppName} variant={"text-sm/normal"} color={"text-secondary"}>{v}</o.Text> : null}{<div className={_.underline} />}</o.Rny></o.P3F>
}