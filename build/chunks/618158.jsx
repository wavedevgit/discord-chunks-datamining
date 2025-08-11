/** Chunk was on web.js **/
/** chunk id: 618158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => a,
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk937995 = require("./937995.js");

function a(e) {
  let {
    onPreventIdle: t,
    onAllowIdle: n,
    onActive: r
  } = i.useContext(o.nM);
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
  } = i.useContext(o.nM), {
    preventIdle: c,
    allowIdle: u
  } = a("interact");
  i.useEffect(() => () => u(), [u]);
  let d = i.useCallback(e => {
    var t;
    let n = null != (t = e.target.ownerDocument) ? t : document;
    e.currentTarget.contains(n.activeElement) || s()
  }, [s]);
  return <div className={n} onMouseEnter={c} onMouseLeave={u} onFocus={l} onBlur={d}>{t}</div>
}