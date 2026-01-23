/** Chunk was on web.js **/
/** chunk id: 594808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  PS: () => g,
  S0: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk27867 = require("./27867.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk814890 = require("./814890.js"),
  Chunk436283 = require("./436283.js"),
  Chunk296043 = require("./296043.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk133898 = require("./133898.js");

function m(e) {
  return {
    text: e,
    icon: (0, r.jsx)(c.nvX, {
      className: h.Kk,
      dotRadius: 3.5,
      themed: true
    })
  }
}

function g(e) {
  return {
    text: null != e ? e : _.intl.string(_.t.VCsUJu),
    color: "text-feedback-critical",
    icon: (0, r.jsx)(c.EpV, {
      size: "xs",
      color: "currentColor",
      className: s()(h.Kk, h.ik)
    })
  }
}

function E(e, t) {
  switch ((0, f.fK)(t, e)) {
    case f.h0.SENDING:
      return m(_.intl.string(_.t.RiLfBY));
    case f.h0.CREATED:
      return m(_.intl.formatToPlainString(_.t["7ePV4t"], {
        applicationName: t.author.username
      }));
    case f.h0.TIMED_OUT:
      return g(_.intl.string(_.t.h8hzPd));
    case f.h0.FAILED:
      return g(t.interactionError)
  }
}

function y(e) {
  let {
    className: t,
    icon: n,
    text: i,
    color: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(h.iE, t),
    children: [n, (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: a,
      scaleFontToUserSetting: true,
      children: i
    })]
  })
}

function b(e) {
  let {
    message: t,
    className: n,
    component: a
  } = e, s = (0, o.A)(), c = (0, l.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]);
  i.useEffect(() => {
    let e = null;
    if (t.hasFlag(p.pr7.LOADING) && null != c) {
      let n = (0, f.I5)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => s(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [s, c, t]);
  let _ = null;
  if (null == a) _ = E(c, t);
  else {
    let e = (0, u.zv)(c, t, a);
    null != e && (_ = g(e))
  }
  if (null == _) return null;
  let {
    text: h,
    icon: m,
    color: b
  } = _;
  return (0, r.jsx)(y, {
    icon: m,
    text: h,
    className: n,
    color: b
  })
}
let O = Chunk64700.memo(b)