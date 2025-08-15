/** Chunk was on 71088 **/
/** chunk id: 739754, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => x,
  c4: () => I,
  st: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk338379 = require("./338379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk292419 = require("./292419.js"),
  Chunk282397 = require("./282397.js"),
  Chunk188597 = require("./188597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk954800 = require("./954800.js");

function b(e) {
  return {
    text: e,
    icon: (0, o.jsx)(_.bbz, {
      className: p.icon,
      dotRadius: 3.5,
      themed: true
    })
  }
}

function I(e) {
  return {
    text: null != e ? e : f.intl.string(f.t.VCsUJi),
    color: "text-danger",
    icon: (0, o.jsx)(_.Mgn, {
      size: "xs",
      color: "currentColor",
      className: a()(p.icon, p.errorIcon)
    })
  }
}

function h(e) {
  let {
    className: n,
    icon: t,
    text: i,
    color: r
  } = e;
  return (0, o.jsxs)("div", {
    className: a()(p.wrapper, n),
    children: [t, (0, o.jsx)(_.Text, {
      variant: "text-md/normal",
      color: r,
      scaleFontToUserSetting: true,
      children: i
    })]
  })
}
let x = Chunk647438.memo(function(e) {
  let {
    message: n,
    className: t,
    component: r
  } = e, a = (0, c.Z)(), _ = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(n), [n]);
  i.useEffect(() => {
    let e = null;
    if (n.hasFlag(m.iLy.LOADING) && null != _) {
      let t = (0, u.ow)(n.id) - Date.now();
      t > 0 && (e = setTimeout(() => a(), 1e3 + t))
    }
    return () => {
      clearTimeout(e)
    }
  }, [a, _, n]);
  let p = null;
  if (null == r) p = function(e, n) {
    switch ((0, u.t$)(n, e)) {
      case u.rQ.SENDING:
        return b(f.intl.string(f.t.RiLfBQ));
      case u.rQ.CREATED:
        return b(f.intl.formatToPlainString(f.t["7ePV4u"], {
          applicationName: n.author.username
        }));
      case u.rQ.TIMED_OUT:
        return I(f.intl.string(f.t.h8hzPT));
      case u.rQ.FAILED:
        return I(n.interactionError)
    }
  }(_, n);
  else {
    let e = (0, s.SD)(_, n, r);
    null != e && (p = I(e))
  }
  if (null == p) return null;
  let {
    text: x,
    icon: g,
    color: C
  } = p;
  return (0, o.jsx)(h, {
    icon: g,
    text: x,
    className: t,
    color: C
  })
})