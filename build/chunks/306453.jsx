/** Chunk was on 10778 **/
/** chunk id: 306453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => f,
  Z: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk875307 = require("./875307.js"),
  Chunk837748 = require("./837748.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.js"),
  Chunk704983 = require("./704983.js"),
  Chunk20493 = require("./20493.js");

function h() {
  return <Chunk297700.Z className={Chunk704983.verifiedIcon}><div className={Chunk704983.verifiedCheckContainer}><Chunk481060.kmB size={"xs"} color={"currentColor"} className={Chunk704983.verifiedCheck} /></div></Chunk297700.Z>
}

function x(e) {
  let {
    verified: t,
    text: n
  } = e;
  return t ? <div className={m.verifiedNameContainer}>{<h />}{n}</div> : n
}

function f(e) {
  let {
    className: t,
    count: n,
    creator: r,
    verifiedName: l
  } = e;
  return <div className={s()(m.usagePill, t, m.userText)}>{null != r || null != l ? C.intl.format(C.t.TTcKAw, {
      usageCount: n,
      creator: null != l ? l : r,
      creatorHook: (e, t) => (0, i.jsx)(x, {
        text: e,
        verified: null != l
      }, t)
    }) : C.intl.format(C.t.cGXXHB, {
      usageCount: n
    })}</div>
}

function g(e) {
  var t;
  let {
    guildTemplate: n,
    error: r,
    tall: c,
    pillClassName: h
  } = e;
  if (null != r && "" !== r) return <div className={m.container}>{<a.Dx>{C.intl.string(C.t.mDFGFh)}</a.Dx>}{<a.DK>{r}</a.DK>}</div>;
  if (n.state === o.Rj.RESOLVING) return <div className={m.container}><l.$jN /></div>;
  let x = (0, u.Z)(n.code).header;
  return c ? <div className={m.container}>{<a.Dx className={m.title}>{x}</a.Dx>}{<a.DK className={s()(m.subtitle, L.__invalid_marginTop2)}>{C.intl.string(C.t["h+vyOz"])}</a.DK>}{<a.Dx className={s()(m.title, m.userText)}>{n.name}</a.Dx>}{null != n.description && "" !== n.description && <a.DK className={s()(m.subtitle, m.userText, L.marginTop8)}>{n.description}</a.DK>}{<f className={h} count={null != (t = n.usageCount) ? t : 0} creator={n.creator.username} verifiedName={(0, d.R)(n.code)} />}</div> : <div className={m.container}>{<a.Dx className={m.title}>{x}</a.Dx>}{<a.DK className={s()(m.subtitle, m.userText)}>{n.name}</a.DK>}</div>
}