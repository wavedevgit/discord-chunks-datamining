/** Chunk was on web.js **/
/** chunk id: 871604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk989573 = require("./989573.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk311819 = require("./311819.js"),
  Chunk433534 = require("./433534.js"),
  Chunk541716 = require("./541716.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk591759 = require("./591759.js"),
  Chunk135431 = require("./135431.js"),
  Chunk621853 = require("./621853.js"),
  Chunk497805 = require("./497805.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function R(e) {
  var {
    user: t,
    closePopout: n
  } = e, S = C(e, ["user", "closePopout"]);
  let N = i.useRef(null),
    R = (0, a.e7)([y.Z], () => {
      var e;
      return null == (e = y.Z.getUserProfile(t.id)) ? true : e.application
    }),
    P = (0, a.e7)([h.Z, p.Z], () => p.Z.getChannel(h.Z.getChannelId())),
    w = (0, s.Z)(P),
    D = t.id,
    x = i.useCallback(() => {
      if (null != R)
        if (w) {
          let e = h.Z.getCurrentlySelectedChannelId(),
            t = p.Z.getChannel(e),
            r = null != _.ZP.getSidebarState(e) || (null == t ? true : t.isGuildVocal()) ? f.Ie.SIDEBAR : f.Ie.NORMAL;
          l.__(c._b.TEXT, r, {
            applicationId: R.id
          }), (0, o.Mr3)((0, O.z)(D, null == P ? true : P.guild_id)), null == n || n(), m.default.track(I.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, {
            application_id: R.id
          })
        } else(0, b.L)(A({
          applicationId: R.id
        }, R))
    }, [R, w, D, null == P ? true : P.guild_id, n]),
    L = w ? T.intl.string(T.t["Cia+A8"]) : T.intl.string(T.t.NgXl3C);
  if (null == R || !(0, d.Eb)(R)) return null;
  let {
    customInstallUrl: M
  } = R, k = null == M || E.Z.isDiscordUrl(M) ? o.qJs : o.Gr1, j = w ? true : k;
  return g.wS ? (0, r.jsx)(o.yRy, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-bot-profile-add-app",
        onClose: t,
        "aria-label": T.intl.string(T.t.dbkxVm),
        onSelect: true,
        children: (0, r.jsx)(o.kSQ, {
          children: (0, r.jsx)(o.sNh, {
            id: "copy",
            label: T.intl.string(T.t.XWDihq),
            action: () => (0, g.JG)((0, u.J)(R))
          })
        })
      })
    },
    children: e => {
      var {
        onClick: t
      } = e, n = C(e, ["onClick"]);
      return (0, r.jsx)(v.O1, A({
        buttonRef: N,
        action: "PRESS_ADD_APP",
        text: L,
        icon: j,
        onContextMenu: t,
        onClick: x
      }, n, S))
    }
  }) : (0, r.jsx)(v.O1, A({
    action: "PRESS_ADD_APP",
    text: L,
    icon: j,
    onClick: x,
    variant: "primary"
  }, S))
}