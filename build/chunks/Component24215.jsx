/** Chunk was on 86142 **/
/** chunk id: 24215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk539895 = require("./539895.js"),
  Chunk844330 = require("./844330.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk578746 = require("./578746.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk960736 = require("./960736.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk190359 = require("./190359.js");
let _ = () => (0, r.jsx)("div", {
  className: g.m
});

function f(e) {
  let {
    label: t,
    children: n
  } = e;
  return (0, r.jsxs)(s.BJc, {
    direction: "vertical",
    gap: 4,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    }), n]
  })
}

function m(e) {
  let {
    label: t,
    checked: n,
    onChange: i
  } = e;
  return (0, r.jsxs)(s.BJc, {
    direction: "horizontal",
    justify: "space-between",
    align: "center",
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t
    }), (0, r.jsx)(c.Ay, {
      value: n,
      onChange: i,
      title: ""
    })]
  })
}
let A = () => {
  var e;
  let t = o.tz.useSetting(),
    {
      nickname: n,
      dmsAllowed: c,
      showActivity: g,
      setNickname: A,
      setDmsAllowed: x,
      setShowActivity: E,
      guildId: v,
      inviteCode: b
    } = (0, u.lD)(),
    y = null == (e = l.A.getProps().invite) ? true : e.is_nickname_changeable,
    j = i.useCallback(() => {
      d.default.track(h.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
        guild_id: v,
        invite_code: b
      })
    }, [v, b]);
  return (0, r.jsxs)(a.A, {
    icon: (0, r.jsx)(s.Zes, {
      size: "refresh_sm"
    }),
    title: p.intl.string(p.t["A5wHQ/"]),
    subtitle: p.intl.string(p.t.UKCSEd),
    onOpen: j,
    maxHeight: y ? 220 : 130,
    children: [y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f, {
        label: p.intl.string(p.t.me1lRk),
        children: (0, r.jsx)(s.ksK, {
          placeholder: p.intl.string(p.t["09Q8yp"]),
          maxLength: h.d0r,
          value: n,
          onChange: A
        })
      }), (0, r.jsx)(_, {})]
    }), (0, r.jsx)(m, {
      label: p.intl.string(p.t["/2ed37"]),
      checked: c,
      onChange: x
    }), (0, r.jsx)(_, {}), t && (0, r.jsx)(m, {
      label: p.intl.string(p.t.bN4m1G),
      checked: g,
      onChange: E
    })]
  })
}