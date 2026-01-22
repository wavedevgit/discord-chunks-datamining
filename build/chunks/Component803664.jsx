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
    appContext: m
  } = e, {
    id: g,
    username: E,
    bot: b
  } = t, y = (0, a.bG)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === g
  }, [g]), O = (0, l.D)(g), [A, v] = (0, a.yK)([c.A], () => [c.A.isFriend(g), c.A.isBlocked(g)], [g]), [S, I] = i.useState(false);
  if (b || y) return null;

  function T() {
    (0, s.mMO)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
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
          o.A.removeFriend(g, {
            location: f
          }), I(false), null == h || h()
        }
      }, t))
    }, {
      contextKey: null != m ? (0, s.TId)(m) : true
    })
  }
  return A ? (0, r.jsx)(s.Drp, {
    id: "remove-friend",
    label: d.intl.string(d.t.cvSt1J),
    action: T
  }) : (0, r.jsx)(s.Drp, {
    id: "add-friend",
    label: S ? d.intl.string(d.t.xMH6vD) : O,
    action: () => {
      S || (o.A.addRelationship({
        userId: g,
        context: {
          location: f
        }
      }), I(true), null == _ || _())
    },
    disabled: v || S && !A
  })
}