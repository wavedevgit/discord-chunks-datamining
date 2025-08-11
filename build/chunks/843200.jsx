/** Chunk was on 75708 **/
/** chunk id: 843200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231829 = require("./231829.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function f(e) {
  let {
    unclaimedNotice: t,
    unverifiedNotice: r,
    className: a
  } = e, {
    isClaimed: f,
    isVerified: b,
    hasEmail: x
  } = (0, o.cj)([u.default], () => {
    let e = u.default.getCurrentUser();
    return l()(null != e, "EmailNotice: currentUser cannot be undefined"), {
      isClaimed: e.isClaimed(),
      isVerified: e.verified,
      hasEmail: null != e.email
    }
  });

  function _() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("9343"), n.e("39809")]).then(n.bind(n, 642298));
      return t => <e{...h({}, t)} />
    })
  }
  return f && b ? null : <c.Zbd className={s()(g.wrapper, a)}><d.Z align={d.Z.Align.CENTER}>{<d.Z.Child className={g.image} grow={0} shrink={0} />}{<d.Z.Child>{<c.Text variant={"text-sm/normal"}>{f ? null != r ? r : p.intl.string(p.t.WuyBbG) : null != t ? t : p.intl.string(p.t["f+Zaoq"])}</c.Text>}{<d.Z justify={d.Z.Justify.CENTER} className={g.content}>{f ? x ? <d.Z.Child grow={0} shrink={0}><m.Z /></d.Z.Child> : <c.zxk variant={"primary"} text={p.intl.string(p.t.ydw5nZ)} onClick={_} /> : <d.Z.Child grow={0} shrink={0}><c.zxk variant={"primary"} text={p.intl.string(p.t.fiNVio)} onClick={function() {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("60827").then(n.bind(n, 324239));
                  return t => (0, i.jsx)(e, h({}, t))
                })
              }} /></d.Z.Child>}{f && x ? <d.Z.Child grow={0} shrink={0}><c.zxk variant={"secondary"} text={p.intl.string(p.t.Vm8akJ)} onClick={_} /></d.Z.Child> : null}</d.Z>}</d.Z.Child>}</d.Z></c.Zbd>
}