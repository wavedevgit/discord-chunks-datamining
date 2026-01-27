/** Chunk was on web.js **/
/** chunk id: 971649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RC: () => f,
  go: () => h,
  iY: () => p,
  vU: () => _
}), require("./896048.js"), require("./638769.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk323889 = require("./323889.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk859703 = require("./859703.js"),
  Chunk590202 = require("./590202.js"),
  Chunk266569 = require("./266569.jsx");

function u(e) {
  let {
    adContentIds: t,
    questContent: n
  } = e;
  return "".concat([...t].sort().join("_"), "_").concat(n)
}

function d(e, t) {
  return r.useMemo(() => null != t ? [t] : null != e ? Array.isArray(e) ? e.map(e => e.id) : [e.id] : [], [e, t])
}

function f(e) {
  let t = d("questOrQuests" in e ? e.questOrQuests : true, "adContentId" in e ? e.adContentId : true),
    n = "questOrQuests" in e ? i.p.QUEST : e.adCreativeType;
  return r.useMemo(() => {
    let r = u({
      adContentIds: t,
      questContent: e.questContent
    });
    return i.p.QUEST, {
      adContentIds: t,
      adCreativeType: n,
      key: r
    }
  }, [t, e.questContent, n])
}

function p(e) {
  let {
    adContentIds: t,
    adCreativeType: n
  } = e, c = (0, a.bG)([s.A], () => n !== i.p.QUEST || 1 !== t.length ? null : s.A.getQuest(t[0]), [t, n]), u = r.useMemo(() => null == c ? null : (0, l.NI)(c), [c]), d = (0, o.A)(u);
  return u !== d
}

function _() {
  let e = r.useContext(c.n0);
  return null == e ? true : e.current
}

function h() {
  var e;
  return null == (e = _()) ? true : e.getId()
}