/** Chunk was on web.js **/
/** chunk id: 739754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  c4: () => g,
  st: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk110660 = require("./110660.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk292419 = require("./292419.js"),
  Chunk282397 = require("./282397.js"),
  Chunk188597 = require("./188597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk954800 = require("./954800.js");

function h(e) {
  return {
    text: e,
    icon: (0, r.jsx)(c.bbz, {
      className: m.icon,
      dotRadius: 3.5,
      themed: true
    })
  }
}

function g(e) {
  return {
    text: null != e ? e : _.intl.string(_.t.VCsUJu),
    color: "text-feedback-critical",
    icon: (0, r.jsx)(c.Mgn, {
      size: "xs",
      color: "currentColor",
      className: o()(m.icon, m.errorIcon)
    })
  }
}

function E(e, t) {
  switch ((0, f.t$)(t, e)) {
    case f.rQ.SENDING:
      return h(_.intl.string(_.t.RiLfBY));
    case f.rQ.CREATED:
      return h(_.intl.formatToPlainString(_.t["7ePV4t"], {
        applicationName: t.author.username
      }));
    case f.rQ.TIMED_OUT:
      return g(_.intl.string(_.t.h8hzPd));
    case f.rQ.FAILED:
      return g(t.interactionError)
  }
}

function b(e) {
  let {
    className: t,
    icon: n,
    text: i,
    color: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(m.wrapper, t),
    children: [n, (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: a,
      scaleFontToUserSetting: true,
      children: i
    })]
  })
}

function y(e) {
  let {
    message: t,
    className: n,
    component: a
  } = e, o = (0, s.Z)(), c = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
  i.useEffect(() => {
    let e = null;
    if (t.hasFlag(p.iLy.LOADING) && null != c) {
      let n = (0, f.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => o(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [o, c, t]);
  let _ = null;
  if (null == a) _ = E(c, t);
  else {
    let e = (0, u.SD)(c, t, a);
    null != e && (_ = g(e))
  }
  if (null == _) return null;
  let {
    text: m,
    icon: h,
    color: y
  } = _;
  return (0, r.jsx)(b, {
    icon: h,
    text: m,
    className: n,
    color: y
  })
}
let O = Chunk473749.memo(y)