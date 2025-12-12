/** Chunk was on web.js **/
/** chunk id: 618158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => o,
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk937995 = require("./937995.jsx");

function o(e) {
  let {
    onPreventIdle: t,
    onAllowIdle: n,
    onActive: r
  } = i.useContext(a.nM);
  return {
    preventIdle: i.useCallback(() => {
      t(e)
    }, [e, t]),
    allowIdle: i.useCallback(() => {
      n(e)
    }, [e, n]),
    onActive: r
  }
}

function s(e) {
  let {
    children: t,
    className: n
  } = e, {
    onForceIdle: s,
    onActive: l
  } = i.useContext(a.nM), {
    preventIdle: c,
    allowIdle: u
  } = o("interact");
  i.useEffect(() => () => u(), [u]);
  let d = i.useCallback(e => {
    var t;
    let n = null != (t = e.target.ownerDocument) ? t : document;
    e.currentTarget.contains(n.activeElement) || s()
  }, [s]);
  return (0, r.jsx)("div", {
    className: n,
    onMouseEnter: c,
    onMouseLeave: u,
    onFocus: l,
    onBlur: d,
    children: t
  })
}