/** Chunk was on web.js **/
/** chunk id: 871604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk989573 = require("./989573.js"),
  Chunk176412 = require("./176412.js"),
  Chunk311819 = require("./311819.js"),
  Chunk433534 = require("./433534.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk591759 = require("./591759.js"),
  Chunk135431 = require("./135431.js"),
  Chunk621853 = require("./621853.js"),
  Chunk497805 = require("./497805.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function C(e) {
  var {
    user: t,
    closePopout: n
  } = e, v = I(e, ["user", "closePopout"]);
  let T = i.useRef(null),
    C = (0, a.e7)([g.Z], () => {
      var e;
      return null == (e = g.Z.getUserProfile(t.id)) ? true : e.application
    }),
    A = (0, a.e7)([f.Z, d.Z], () => d.Z.getChannel(f.Z.getChannelId())),
    N = (0, s.Z)(A),
    P = t.id,
    R = i.useCallback(() => {
      null != C && (N ? ((0, l.X)(C.id), (0, o.Mr3)((0, E.z)(P, null == A ? true : A.guild_id)), null == n || n(), p.default.track(y.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, {
        application_id: C.id
      })) : (0, h.L)(S({
        applicationId: C.id
      }, C)))
    }, [C, N, P, null == A ? true : A.guild_id, n]),
    w = N ? O.intl.string(O.t["Cia+A8"]) : O.intl.string(O.t.NgXl3C);
  if (null == C || !(0, u.Eb)(C)) return null;
  let {
    customInstallUrl: D
  } = C, x = null == D || m.Z.isDiscordUrl(D) ? o.qJs : o.Gr1, L = N ? true : x;
  return _.wS ? (0, r.jsx)(o.yRy, {
    targetElementRef: T,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-bot-profile-add-app",
        onClose: t,
        "aria-label": O.intl.string(O.t.dbkxVm),
        onSelect: true,
        children: (0, r.jsx)(o.kSQ, {
          children: (0, r.jsx)(o.sNh, {
            id: "copy",
            label: O.intl.string(O.t.XWDihq),
            action: () => (0, _.JG)((0, c.J)(C))
          })
        })
      })
    },
    children: e => {
      var {
        onClick: t
      } = e, n = I(e, ["onClick"]);
      return (0, r.jsx)(b.i6, S({
        buttonRef: T,
        action: "PRESS_ADD_APP",
        text: w,
        icon: L,
        onContextMenu: t,
        onClick: R
      }, n, v))
    }
  }) : (0, r.jsx)(b.i6, S({
    action: "PRESS_ADD_APP",
    text: w,
    icon: L,
    onClick: R,
    variant: "primary"
  }, v))
}