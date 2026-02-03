/** Chunk was on 77687 **/
/** chunk id: 571964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk545059 = require("./545059.js"),
  Chunk870391 = require("./870391.js"),
  Chunk994500 = require("./994500.js"),
  Chunk589051 = require("./589051.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    user: t,
    onAction: c,
    groupId: A
  } = e, {
    hasFriendList: f
  } = (0, s.M8)("useManageFriendGroupsItems"), b = t.id, [g, p] = (0, i.yK)([u.A, o.A], () => [u.A.isFriend(b), o.A.getGroups()], [b]);
  if (!f || !g || 0 === p.length) return null;
  let v = [];
  return p.length > 0 && v.push((0, r.jsxs)(l.Drp, {
    id: "add-to-group",
    label: "Add to Group",
    children: [p.map(e => (0, r.jsx)(l.Drp, {
      id: "add-".concat(e.id),
      label: e.name,
      action: () => {
        null == c || c(), a.A.addUsersToGroup(e.id, b)
      }
    }, e.id)), (0, r.jsx)(l.bXX, {}, "add-to-group-separator"), (0, r.jsx)(l.Drp, {
      id: "create-new-group",
      label: d.intl.string(d.t["3hF1W4"]),
      action: () => {
        null == c || c(), (0, l.mMO)(async () => {
          let {
            default: e
          } = await n.e("51080").then(n.bind(n, 519528));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
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
            }({}, t), i = i = {
              initialUserIds: [b]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        })
      }
    }, "create-new-group")]
  }, "add-to-group")), null != A && v.push((0, r.jsx)(l.Drp, {
    id: "remove-from-group",
    label: "Remove from Group",
    action: () => {
      null == c || c(), a.A.removeUsersFromGroup(A, b)
    }
  }, "remove-from-group")), v
}