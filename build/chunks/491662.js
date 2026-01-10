/** Chunk was on web.js **/
/** chunk id: 491662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l,
  o: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js"),
  Chunk823379 = require("./823379.js");

function l(e, t) {
  let {
    disableFetch: n = false
  } = null != t ? t : {}, l = (0, i.Wu)([o.default], () => {
    var t;
    return null != (t = null == e ? true : e.map(e => o.default.getNewestTokenForApplication(e)).filter(s.lm)) ? t : []
  }, [e]), c = (0, i.e7)([o.default], () => {
    var t;
    return null != (t = null == e ? true : e.every(e => o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED)) && t
  }, [e]), u = (0, i.Wu)([o.default], () => {
    var t;
    return null != (t = null == e ? true : e.filter(e => o.default.getFetchStateForApplication(e) === o.FetchState.NOT_FETCHED)) ? t : []
  }, [e]);
  return r.useEffect(() => {
    if (!n && 0 !== u.length)
      for (let e of u) a.Z.fetchByApplicationId(e)
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