/** Chunk was on 31978 **/
/** chunk id: 304176, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk829883 = require("./829883.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk973542 = require("./973542.js"),
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
  let {
    roleIcon: t,
    guild: n
  } = e, {
    name: C
  } = t;
  (0, i.ZP)(() => {
    h.default.track(O.rMx.OPEN_POPOUT, x({
      type: "Role Icon Popout",
      guild_id: n.id
    }, (0, a.v_)(g.Z.getChannel(b.Z.getChannelId(n.id)))))
  });
  let S = (0, l.e7)([f.Z], () => null != t.roleId ? f.Z.getRole(n.id, t.roleId) : true),
    E = (0, p.Z)(S),
    N = E ? j.intl.formatToPlainString(j.t.t0928f, {
      name: C
    }) : j.intl.formatToPlainString(j.t.UDDkGx, {
      name: C
    }),
    R = w(x({}, t), {
      src: null == t.src ? t.src : (0, u.o)(t.src, 40),
      size: 40
    }),
    T = E ? () => {
      (0, m.uL)(O.Z5c.CHANNEL(n.id, v.oC.ROLE_SUBSCRIPTIONS))
    } : () => {
      (0, d.f)({
        guildId: n.id,
        location: {
          section: O.jXE.ROLE_ICON_POPOUT
        }
      })
    };
  return (0, r.jsx)(o.VqE, {
    children: (0, r.jsx)(y.W_, {
      children: (0, r.jsxs)("div", {
        className: P.popoutContainer,
        children: [(0, r.jsxs)("div", {
          className: P.mainContent,
          children: [(0, r.jsx)("div", {
            className: P.roleIconContainer,
            children: (0, r.jsx)(c.Z, w(x({}, R), {
              enableTooltip: false,
              className: P.__invalid_roleIcon,
              enableHeight: false
            }))
          }), (0, r.jsxs)("div", {
            className: P.truncatingText,
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-md/semibold",
              className: P.roleName,
              children: (0, r.jsx)(s.Z, {
                children: C
              })
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: N
            })]
          })]
        }), (0, r.jsx)(o.zxk, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t["H930+P"]),
          onClick: T,
          icon: o.$Eu,
          fullWidth: true,
          autoFocus: true
        })]
      })
    })
  })
}