/** Chunk was on web.js **/
/** chunk id: 803664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk327166 = require("./327166.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

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
    onFriendRemove: h,
    appContext: m,
    setLoading: g
  } = e, {
    id: E,
    username: y,
    bot: b
  } = t, O = (0, a.bG)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === E
  }, [E]), v = (0, l.D)(E), [A, I] = (0, a.yK)([c.A], () => [c.A.isFriend(E), c.A.isBlocked(E)], [E]), [S, T] = i.useState(false);
  if (b || O) return null;

  function C() {
    (0, o.mMO)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
      return t => (0, r.jsx)(e, p({
        title: d.intl.formatToPlainString(d.t.fPLvZd, {
          name: y
        }),
        subtitle: d.intl.format(d.t.l5FFq6, {
          name: y
        }),
        confirmText: d.intl.string(d.t.cvSt1J),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        onConfirm: () => {
          s.A.removeFriend(E, {
            location: f
          }), T(false), null == h || h()
        }
      }, t))
    }, {
      contextKey: null != m ? (0, o.TId)(m) : true
    })
  }
  return A ? (0, r.jsx)(o.Drp, {
    id: "remove-friend",
    label: d.intl.string(d.t.cvSt1J),
    action: C
  }) : (0, r.jsx)(o.Drp, {
    id: "add-friend",
    label: S ? d.intl.string(d.t.xMH6vD) : v,
    action: async () => {
      S || (null == g || g(true), await s.A.addRelationship({
        userId: E,
        context: {
          location: f
        }
      }), T(true), null == _ || _(), null == g || g(false))
    },
    disabled: I || S && !A
  })
}