/** Chunk was on web.js **/
/** chunk id: 585958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => _,
  n: () => h
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk544420 = require("./544420.js"),
  Chunk524799 = require("./524799.js");

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
      l.A.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    u(this, "_fetched", new Set), u(this, "_pending", new Set), u(this, "_flushHandler", new s.J_(32, () => this._flush()))
  }
}
let p = new f;

function _(e) {
  r.useEffect(() => {
    null != e && p.request(e)
  }, [e])
}

function h(e, t) {
  _(e);
  let n = r.useMemo(() => null != t ? {
    size: t.coverImageSize
  } : true, [t]);
  return (0, o.cf)([c.A], () => null == e ? {
    isFetching: false,
    localizedName: true,
    themes: true,
    coverImageUrl: true
  } : {
    isFetching: c.A.isFetching(e),
    localizedName: c.A.getLocalizedName(e),
    themes: c.A.getThemes(e),
    coverImageUrl: c.A.getCoverImageUrl(e, n)
  })
}