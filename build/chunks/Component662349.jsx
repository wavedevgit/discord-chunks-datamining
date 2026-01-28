/** Chunk was on 94682 **/
/** chunk id: 662349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333245 = require("./333245.js");

function u(e) {
  let {
    label: t,
    icon: n,
    onClick: i,
    isHoveringOrFocusing: s
  } = e, u = l.useCallback(e => {
    e.stopPropagation(), i()
  }, [i]);
  return (0, r.jsx)("div", {
    className: a()(c.L, {
      [c.K]: s
    }),
    children: (0, r.jsx)(o.Button, {
      variant: "primary",
      size: "sm",
      iconPosition: "start",
      text: t,
      icon: n,
      onClick: u
    })
  })
}

function d(e) {
  let {
    onClick: t,
    isHoveringOrFocusing: n,
    currentUser: i,
    wishlistOwner: a,
    isOwned: c
  } = e, {
    label: d,
    icon: f
  } = l.useMemo(() => null == a || a.id === (null == i ? true : i.id) || c ? {
    label: s.intl.string(s.t.FdGl5A),
    icon: true
  } : {
    label: s.intl.string(s.t.ilhtIa),
    icon: o.okO
  }, [c, a, i]);
  return (0, r.jsx)(u, {
    label: d,
    icon: f,
    onClick: t,
    isHoveringOrFocusing: n
  })
}