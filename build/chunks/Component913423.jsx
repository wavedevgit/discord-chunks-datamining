/** Chunk was on 50796 **/
/** chunk id: 913423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk775602 = require("./775602.js"),
  Chunk569944 = require("./569944.js"),
  Chunk576622 = require("./576622.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk680235 = require("./680235.js");

function p(e) {
  var t, n;
  let i, {
      guildId: p,
      welcomeMessage: O,
      className: S
    } = e,
    E = (0, a.bG)([g.A], () => g.A.getGuild(p)),
    A = (0, a.bG)([d.A], () => d.A.useReducedMotion),
    x = (0, a.bG)([f.default], () => f.default.getUser(null == O ? true : O.authorIds[0])),
    _ = r.useMemo(() => null != E && null != x && (0, u.c)(E, x) ? x : null, [E, x]),
    j = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
    T = r.useMemo(() => {
      var e;
      return null != (e = null == O ? true : O.authorIds) ? e : []
    }, [O]);
  r.useEffect(() => {
    c.A.requestMembersById(p, T)
  }, [p, T]), r.useEffect(() => {
    null != _ && (0, m.A)(_.id, _.getAvatarURL(p, 48), {
      guildId: p
    })
  }, [_, p]);
  let b = h.Ay.useName(p, null, _),
    v = (0, N.tx)(j);
  if (null == _ || null == j || null == O) return null;
  let D = null != E && E.ownerId === _.id;
  return (0, l.jsxs)(o.ZpM, {
    className: s()(I.fr, S),
    children: [(0, l.jsx)("div", {
      className: I.oJ
    }), A ? (0, l.jsx)(o.euF, {
      src: _.getAvatarURL(p, 48),
      size: o._3J.SIZE_48,
      className: I.my,
      "aria-label": _.username
    }) : (0, l.jsx)(o.JsQ, {
      src: _.getAvatarURL(p, 48),
      size: o._3J.SIZE_48,
      className: I.my,
      "aria-label": _.username
    }), (0, l.jsx)("div", {
      className: I.uh
    }), (0, l.jsxs)("div", {
      className: I.H0,
      children: [(0, l.jsxs)("div", {
        className: I.HO,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: b
        }), D ? (0, l.jsx)(o.pw5, {
          size: "xxs",
          color: "currentColor",
          className: I.Dd
        }) : null]
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: (t = null == O ? true : O.message, n = null != v ? v : j.username, i = t.split(/\[@username\]/g), (0, l.jsx)("span", {
          children: i.map((e, t) => (0, l.jsxs)(r.Fragment, {
            children: [e, t < i.length - 1 ? (0, l.jsx)(o.Text, {
              tag: "span",
              variant: "text-md/semibold",
              children: "@".concat(n)
            }) : null]
          }, "username-".concat(t)))
        }))
      })]
    })]
  })
}