/** Chunk was on 61526 **/
/** chunk id: 445229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79148 = require("./79148.js");

function v(e) {
  let {
    user: t
  } = e, n = m.ZP.useName(null, null, t);
  return (0, r.jsxs)("div", {
    className: f.userItem,
    children: [(0, r.jsx)(u.Z, {
      user: t
    }), (0, r.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: n
    })]
  })
}

function h(e) {
  let {
    clip: t,
    className: n
  } = e, l = (0, o.Wu)([c.default], () => t.users.map(c.default.getUser).filter(d.lm)), u = a.useCallback(e => {
    let {
      row: t
    } = e, n = l[t];
    return null == n ? null : (0, r.jsx)(v, {
      user: n
    }, t)
  }, [l]);
  return (0, r.jsxs)("div", {
    className: i()(n, f.root),
    children: [(0, r.jsx)("div", {
      className: f.__invalid_header,
      children: (0, r.jsxs)(s.vwX, {
        className: f.title,
        children: [p.intl.string(p.t.WTozwc), (0, r.jsxs)("div", {
          className: f.userCountPill,
          children: [(0, r.jsx)(s.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: l.length
          }), (0, r.jsx)(s.iFz, {
            size: "xs",
            color: "currentColor",
            className: f.userCountIcon
          })]
        })]
      })
    }), (0, r.jsx)(s.aVo, {
      className: f.__invalid_userList,
      sectionHeight: 0,
      rowHeight: 40,
      sections: [l.length],
      renderRow: u
    })]
  })
}