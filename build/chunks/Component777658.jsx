/** Chunk was on web.js **/
/** chunk id: 777658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk276506 = require("./276506.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let {
    user: t,
    location: f = "ContextMenu",
    onFriendRequestSent: _,
    onFriendRemove: m,
    appContext: h
  } = e, {
    id: g,
    username: E,
    bot: b
  } = t, y = (0, a.e7)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === g
  }, [g]), O = (0, l.n)(g), [v, S] = (0, a.Wu)([c.Z], () => [c.Z.isFriend(g), c.Z.isBlocked(g)], [g]), [I, T] = i.useState(false);
  if (b || y) return null;

  function C() {
    (0, o.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 793030));
      return t => (0, r.jsx)(e, p({
        title: d.intl.formatToPlainString(d.t.fPLvZd, {
          name: E
        }),
        subtitle: d.intl.format(d.t.l5FFq6, {
          name: E
        }),
        confirmText: d.intl.string(d.t.cvSt1J),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        onConfirm: () => {
          s.Z.removeFriend(g, {
            location: f
          }), T(false), null == m || m()
        }
      }, t))
    }, {
      contextKey: null != h ? (0, o.VnL)(h) : true
    })
  }
  return v ? (0, r.jsx)(o.sNh, {
    id: "remove-friend",
    label: d.intl.string(d.t.cvSt1J),
    action: C
  }) : (0, r.jsx)(o.sNh, {
    id: "add-friend",
    label: I ? d.intl.string(d.t.xMH6vD) : O,
    action: () => {
      I || (s.Z.addRelationship({
        userId: g,
        context: {
          location: f
        }
      }), T(true), null == _ || _())
    },
    disabled: S || I && !v
  })
}