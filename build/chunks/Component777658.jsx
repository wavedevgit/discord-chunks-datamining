/** Chunk was on web.js **/
/** chunk id: 777658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    user: t,
    location: f = "ContextMenu",
    onFriendRequestSent: _,
    onFriendRemove: h,
    appContext: g
  } = e, {
    id: E,
    username: b,
    bot: y
  } = t, O = (0, a.e7)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === E
  }, [E]), v = (0, l.n)({
    userId: E
  }), [S, I] = (0, a.Wu)([c.Z], () => [c.Z.isFriend(E), c.Z.isBlocked(E)], [E]), [T, A] = i.useState(false);
  if (y || O) return null;

  function C() {
    (0, o.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 878678));
      return t => (0, r.jsx)(e, m(p({
        header: d.intl.formatToPlainString(d.t.fPLvZd, {
          name: b
        }),
        confirmText: d.intl.string(d.t.cvSt1J),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        onConfirm: () => {
          s.Z.removeFriend(E, {
            location: f
          }), A(false), null == h || h()
        }
      }, t), {
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: d.intl.format(d.t.l5FFq6, {
            name: b
          })
        })
      }))
    }, {
      contextKey: null != g ? (0, o.VnL)(g) : true
    })
  }
  return S ? (0, r.jsx)(o.sNh, {
    id: "remove-friend",
    label: d.intl.string(d.t.cvSt1J),
    action: C
  }) : (0, r.jsx)(o.sNh, {
    id: "add-friend",
    label: T ? d.intl.string(d.t.xMH6vD) : v,
    action: () => {
      T || (s.Z.addRelationship({
        userId: E,
        context: {
          location: f
        }
      }), A(true), null == _ || _())
    },
    disabled: I || T && !S
  })
}