/** Chunk was on web.js **/
/** chunk id: 447404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  o: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk461782 = require("./461782.jsx");

function s(e) {
  let {
    onPreventIdle: t,
    onAllowIdle: n,
    onActive: r
  } = i.useContext(a.k3);
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

function o(e) {
  let {
    children: t,
    className: n
  } = e, {
    onForceIdle: o,
    onActive: l
  } = i.useContext(a.k3), {
    preventIdle: c,
    allowIdle: u
  } = s("interact");
  i.useEffect(() => () => u(), [u]);
  let d = i.useCallback(e => {
    var t;
    let n = null != (t = e.target.ownerDocument) ? t : document;
    e.currentTarget.contains(n.activeElement) || o()
  }, [o]);
  return (0, r.jsx)("div", {
    className: n,
    onMouseEnter: c,
    onMouseLeave: u,
    onFocus: l,
    onBlur: d,
    children: t
  })
}