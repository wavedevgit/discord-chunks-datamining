/** Chunk was on web.js **/
/** chunk id: 739754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  c4: () => g,
  st: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk710251 = require("./710251.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk292419 = require("./292419.js"),
  Chunk282397 = require("./282397.js"),
  Chunk188597 = require("./188597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk954800 = require("./954800.js");

function m(e) {
  return {
    text: e,
    icon: (0, r.jsx)(c.bbz, {
      className: h.icon,
      dotRadius: 3.5,
      themed: true
    })
  }
}

function g(e) {
  return {
    text: null != e ? e : p.intl.string(p.t.VCsUJi),
    color: "text-danger",
    icon: (0, r.jsx)(c.Mgn, {
      size: "xs",
      color: "currentColor",
      className: a()(h.icon, h.errorIcon)
    })
  }
}

function E(e, t) {
  switch ((0, f.t$)(t, e)) {
    case f.rQ.SENDING:
      return m(p.intl.string(p.t.RiLfBQ));
    case f.rQ.CREATED:
      return m(p.intl.formatToPlainString(p.t["7ePV4u"], {
        applicationName: t.author.username
      }));
    case f.rQ.TIMED_OUT:
      return g(p.intl.string(p.t.h8hzPT));
    case f.rQ.FAILED:
      return g(t.interactionError)
  }
}

function b(e) {
  let {
    className: t,
    icon: n,
    text: i,
    color: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(h.wrapper, t),
    children: [n, (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: o,
      scaleFontToUserSetting: true,
      children: i
    })]
  })
}

function y(e) {
  let {
    message: t,
    className: n,
    component: o
  } = e, a = (0, s.Z)(), c = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
  i.useEffect(() => {
    let e = null;
    if (t.hasFlag(_.iLy.LOADING) && null != c) {
      let n = (0, f.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => a(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [a, c, t]);
  let p = null;
  if (null == o) p = E(c, t);
  else {
    let e = (0, u.SD)(c, t, o);
    null != e && (p = g(e))
  }
  if (null == p) return null;
  let {
    text: h,
    icon: m,
    color: y
  } = p;
  return (0, r.jsx)(b, {
    icon: m,
    text: h,
    className: n,
    color: y
  })
}
let O = Chunk73800.memo(y)