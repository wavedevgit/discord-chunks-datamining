/** Chunk was on 86872 **/
/** chunk id: 420186, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk590965 = require("./590965.js"),
  Chunk590149 = require("./590149.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk51331 = require("./51331.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk978986 = require("./978986.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804665 = require("./804665.js");
let v = () => (0, t.jsx)("div", {
  className: g.separator
});

function j(e) {
  let {
    label: l,
    children: n
  } = e;
  return (0, t.jsxs)(r.Kqy, {
    direction: "vertical",
    gap: 4,
    children: [(0, t.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: l
    }), n]
  })
}

function h(e) {
  let {
    label: l,
    checked: n,
    onChange: i
  } = e;
  return (0, t.jsxs)(r.Kqy, {
    direction: "horizontal",
    justify: "space-between",
    align: "center",
    children: [(0, t.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: l
    }), (0, t.jsx)(d.ZP, {
      value: n,
      onChange: i,
      title: ""
    })]
  })
}
let E = () => {
  var e;
  let l = u.G6.useSetting(),
    {
      nickname: n,
      dmsAllowed: d,
      showActivity: g,
      setNickname: E,
      setDmsAllowed: p,
      setShowActivity: _,
      guildId: I,
      inviteCode: N
    } = (0, c.XW)(),
    f = null == (e = a.Z.getProps().invite) ? true : e.is_nickname_changeable,
    S = i.useCallback(() => {
      o.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
        guild_id: I,
        invite_code: N
      })
    }, [I, N]);
  return (0, t.jsxs)(s.Z, {
    icon: (0, t.jsx)(r.ewm, {
      size: "refresh_sm"
    }),
    title: x.intl.string(x.t["A5wHQ/"]),
    subtitle: x.intl.string(x.t.UKCSEd),
    onOpen: S,
    maxHeight: f ? 220 : 130,
    children: [f && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(j, {
        label: x.intl.string(x.t.me1lRk),
        children: (0, t.jsx)(r.oil, {
          placeholder: x.intl.string(x.t["09Q8yp"]),
          maxLength: m.l$U,
          value: n,
          onChange: E
        })
      }), (0, t.jsx)(v, {})]
    }), (0, t.jsx)(h, {
      label: x.intl.string(x.t["/2ed37"]),
      checked: d,
      onChange: p
    }), (0, t.jsx)(v, {}), l && (0, t.jsx)(h, {
      label: x.intl.string(x.t.bN4m1G),
      checked: g,
      onChange: _
    })]
  })
}