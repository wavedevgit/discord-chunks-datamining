/** Chunk was on web.js **/
/** chunk id: 662349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  l: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333245 = require("./333245.js");

function f(e) {
  let {
    label: t,
    icon: n,
    onClick: a,
    isHoveringOrFocusing: l
  } = e, c = i.useCallback(e => {
    e.stopPropagation(), a()
  }, [a]);
  return (0, r.jsx)("div", {
    className: o()(d.L, {
      [d.K]: l
    }),
    children: (0, r.jsx)(s.Button, {
      variant: "primary",
      size: "sm",
      iconPosition: "start",
      text: t,
      icon: n,
      onClick: c
    })
  })
}

function p(e) {
  let {
    onClick: t,
    isHoveringOrFocusing: n,
    currentUser: a,
    wishlistOwner: o,
    isOwned: l
  } = e, {
    label: c,
    icon: d
  } = i.useMemo(() => null == o || o.id === (null == a ? true : a.id) || l ? {
    label: u.intl.string(u.t.FdGl5A),
    icon: true
  } : {
    label: u.intl.string(u.t.ilhtIa),
    icon: s.okO
  }, [l, o, a]);
  return (0, r.jsx)(f, {
    label: c,
    icon: d,
    onClick: t,
    isHoveringOrFocusing: n
  })
}

function _(e) {
  let {
    sku: t,
    onClick: n,
    isHoveringOrFocusing: a
  } = e, o = i.useMemo(() => {
    var e, n, r, i;
    return (0, l.$g)(null != (e = null == (r = t.price) ? true : r.amount) ? e : 0, null != (n = null == (i = t.price) ? true : i.currency) ? n : c.Yr.USD)
  }, [t]);
  return (0, r.jsx)(f, {
    label: o,
    icon: true,
    onClick: n,
    isHoveringOrFocusing: a
  })
}