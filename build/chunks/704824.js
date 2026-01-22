/** Chunk was on web.js **/
/** chunk id: 704824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => c,
  j: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk546183 = require("./546183.js"),
  Chunk403362 = require("./403362.js");

function l(e, t) {
  let {
    disableFetch: n = false
  } = null != t ? t : {}, l = (0, i.yK)([s.default], () => {
    var t;
    return null != (t = null == e ? true : e.map(e => s.default.getNewestTokenForApplication(e)).filter(o.Vq)) ? t : []
  }, [e]), c = (0, i.bG)([s.default], () => {
    var t;
    return null != (t = null == e ? true : e.every(e => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED)) && t
  }, [e]), u = (0, i.yK)([s.default], () => {
    var t;
    return null != (t = null == e ? true : e.filter(e => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED)) ? t : []
  }, [e]);
  return r.useEffect(() => {
    if (!n && 0 !== u.length)
      for (let e of u) a.A.fetchByApplicationId(e)
  }, [n, u]), {
    tokens: l,
    fetched: c
  }
}

function c(e, t) {
  let {
    tokens: n,
    fetched: i
  } = l(r.useMemo(() => null != e ? [e] : null, [e]), t);
  return {
    token: n.length > 0 ? n[0] : null,
    fetched: i
  }
}