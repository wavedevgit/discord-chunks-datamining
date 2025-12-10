/** Chunk was on 86872 **/
/** chunk id: 420186, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  R: () => p
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
  Chunk181174 = require("./181174.js");
let v = () => (0, Chunk54381.jsx)("div", {
  className: Chunk181174.separator
});

function h(e) {
  let {
    label: l,
    children: n
  } = e;
  return (0, t.jsxs)(a.Kqy, {
    direction: "vertical",
    gap: 4,
    children: [(0, t.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: l
    }), n]
  })
}

function j(e) {
  let {
    label: l,
    checked: n,
    onChange: i
  } = e;
  return (0, t.jsxs)(a.Kqy, {
    direction: "horizontal",
    justify: "space-between",
    align: "center",
    children: [(0, t.jsx)(a.Text, {
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
let p = () => {
  var e;
  let l = Chunk695346.G6.useSetting(),
    {
      nickname: n,
      dmsAllowed: d,
      showActivity: g,
      setNickname: p,
      setDmsAllowed: E,
      setShowActivity: _,
      guildId: I,
      inviteCode: N
    } = (0, Chunk978986.XW)(),
    f = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable,
    S = Chunk473749.useCallback(() => {
      Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
        guild_id: I,
        invite_code: N
      })
    }, [I, N]);
  return (0, Chunk54381.jsxs)(Chunk590149.Z, {
    icon: (0, Chunk54381.jsx)(Chunk481060.ewm, {
      size: "refresh_sm"
    }),
    title: Chunk388032.intl.string(Chunk388032.t["A5wHQ/"]),
    subtitle: Chunk388032.intl.string(Chunk388032.t.UKCSEd),
    onOpen: S,
    maxHeight: f ? 220 : 130,
    children: [f && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(h, {
        label: Chunk388032.intl.string(Chunk388032.t.me1lRk),
        children: (0, Chunk54381.jsx)(Chunk481060.oil, {
          placeholder: Chunk388032.intl.string(Chunk388032.t["09Q8yp"]),
          maxLength: Chunk981631.l$U,
          value: require,
          onChange: p
        })
      }), (0, Chunk54381.jsx)(v, {})]
    }), (0, Chunk54381.jsx)(j, {
      label: Chunk388032.intl.string(Chunk388032.t["/2ed37"]),
      checked: Chunk51331,
      onChange: E
    }), (0, Chunk54381.jsx)(v, {}), exports && (0, Chunk54381.jsx)(j, {
      label: Chunk388032.intl.string(Chunk388032.t.bN4m1G),
      checked: Chunk181174,
      onChange: _
    })]
  })
}