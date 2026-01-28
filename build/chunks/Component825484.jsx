/** Chunk was on web.js **/
/** chunk id: 825484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => s
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk331322 = require("./331322.jsx"),
  Chunk977067 = require("./977067.js");

function s(e) {
  let {
    size: t = "md",
    direction: n = "horizontal",
    justify: s,
    align: c,
    padding: u,
    className: d,
    children: f,
    wrap: p = true,
    fullWidth: _ = false,
    fullWidthContainer: h = false
  } = e, m = i.useMemo(() => ({
    size: t,
    fullWidth: _
  }), [t, _]), g = i.useRef(null), E = l(g, n, p), y = n;
  return E && (y = n.replace("horizontal", "vertical")), (0, r.jsx)(a.B, {
    direction: y,
    gap: 8,
    justify: s,
    align: c,
    wrap: p,
    padding: u,
    className: d,
    fullWidth: !!h || _,
    ref: g,
    children: (0, r.jsx)(o.Z.Provider, {
      value: m,
      children: f
    })
  })
}

function l(e, t, n) {
  let [r, a] = i.useState(null);
  return i.useLayoutEffect(() => {
    if (null == e.current || !n || t.includes("vertical")) return;

    function r() {
      var t, n;
      let r = Array.from(null != (t = null == (n = e.current) ? true : n.querySelectorAll('[data-mana-component="button"] [data-text-variant]')) ? t : []).some(e => e.scrollWidth > e.clientWidth);
      a(e => e || r)
    }
    let i = new MutationObserver(r);
    return r(), i.observe(e.current, {
      childList: true,
      subtree: true,
      characterData: true
    }), () => {
      i.disconnect()
    }
  }, [e, t, n]), r
}