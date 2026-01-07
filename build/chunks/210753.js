/** Chunk was on web.js **/
/** chunk id: 210753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => m,
  M: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 20;
class f {
  request(e) {
    this._pending.has(e) || this._fetched.has(e) || (this._pending.add(e), this._flushHandler.delay(false))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._fetched.add(t), e.push(t)
    }), this._pending.clear(), a().chunk(e, d).forEach(e => {
      l.Z.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    u(this, "_fetched", new Set), u(this, "_pending", new Set), u(this, "_flushHandler", new s.sW(32, () => this._flush()))
  }
}
let p = new f;

function _(e) {
  r.useEffect(() => {
    null != e && p.request(e)
  }, [e])
}

function m(e, t) {
  _(e);
  let n = r.useMemo(() => null != t ? {
    width: t.coverImageWidth,
    height: t.coverImageHeight
  } : true, [t]);
  return (0, o.cj)([c.Z], () => null == e ? {
    isFetching: false,
    localizedName: true,
    themes: true,
    coverImageUrl: true
  } : {
    isFetching: c.Z.isFetching(e),
    localizedName: c.Z.getLocalizedName(e),
    themes: c.Z.getThemes(e),
    coverImageUrl: c.Z.getCoverImageUrl(e, n)
  })
}