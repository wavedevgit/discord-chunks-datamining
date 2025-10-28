/** Chunk was on web.js **/
/** chunk id: 304176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk829883 = require("./829883.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk973542 = require("./973542.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804309 = require("./804309.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 40,
  N = e => {
    let {
      roleIcon: t,
      guild: n
    } = e, {
      name: I
    } = t;
    (0, o.ZP)(() => {
      g.default.track(b.rMx.OPEN_POPOUT, T({
        type: "Role Icon Popout",
        guild_id: n.id
      }, (0, s.v_)(p.Z.getChannel(m.Z.getChannelId(n.id)))))
    });
    let S = (0, i.e7)([h.Z], () => null != t.roleId ? h.Z.getRole(n.id, t.roleId) : true),
      N = (0, d.Z)(S),
      R = N ? O.intl.formatToPlainString(O.t.t0928V, {
        name: I
      }) : O.intl.formatToPlainString(O.t.UDDkGy, {
        name: I
      }),
      P = A(T({}, t), {
        src: null == t.src ? t.src : (0, c.o)(t.src, C),
        size: C
      }),
      w = () => {
        (0, u.f)({
          guildId: n.id,
          location: {
            section: b.jXE.ROLE_ICON_POPOUT
          }
        })
      },
      D = () => {
        (0, _.uL)(b.Z5c.CHANNEL(n.id, y.oC.ROLE_SUBSCRIPTIONS))
      },
      L = N ? D : w;
    return (0, r.jsx)(a.VqE, {
      children: (0, r.jsx)(E.W_, {
        children: (0, r.jsxs)("div", {
          className: v.popoutContainer,
          children: [(0, r.jsxs)("div", {
            className: v.mainContent,
            children: [(0, r.jsx)("div", {
              className: v.roleIconContainer,
              children: (0, r.jsx)(f.Z, A(T({}, P), {
                enableTooltip: false,
                className: v.__invalid_roleIcon,
                enableHeight: false
              }))
            }), (0, r.jsxs)("div", {
              className: v.truncatingText,
              children: [(0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                className: v.roleName,
                children: (0, r.jsx)(l.Z, {
                  children: I
                })
              }), (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: R
              })]
            })]
          }), (0, r.jsx)(a.Button, {
            size: "sm",
            variant: "secondary",
            text: O.intl.string(O.t["H930+H"]),
            onClick: L,
            icon: a.Ucv,
            fullWidth: true,
            autoFocus: true
          })]
        })
      })
    })
  }