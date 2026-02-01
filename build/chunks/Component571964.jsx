/** Chunk was on 77687 **/
/** chunk id: 571964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk545059 = require("./545059.js"),
  Chunk870391 = require("./870391.js"),
  Chunk994500 = require("./994500.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    user: t,
    onAction: s,
    groupId: c
  } = e, A = t.id, [f, b] = (0, l.yK)([u.A, a.A], () => [u.A.isFriend(A), a.A.getGroups()], [A]);
  if (!f || 0 === b.length) return null;
  let g = [];
  return b.length > 0 && g.push((0, r.jsxs)(i.Drp, {
    id: "add-to-group",
    label: "Add to Group",
    children: [b.map(e => (0, r.jsx)(i.Drp, {
      id: "add-".concat(e.id),
      label: e.name,
      action: () => {
        null == s || s(), o.A.addUsersToGroup(e.id, A)
      }
    }, e.id)), (0, r.jsx)(i.bXX, {}, "add-to-group-separator"), (0, r.jsx)(i.Drp, {
      id: "create-new-group",
      label: d.intl.string(d.t["3hF1W4"]),
      action: () => {
        null == s || s(), (0, i.mMO)(async () => {
          let {
            default: e
          } = await n.e("51080").then(n.bind(n, 519528));
          return t => {
            var n, l;
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
            }({}, t), l = l = {
              initialUserIds: [A]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
          }
        })
      }
    }, "create-new-group")]
  }, "add-to-group")), null != c && g.push((0, r.jsx)(i.Drp, {
    id: "remove-from-group",
    label: "Remove from Group",
    action: () => {
      null == s || s(), o.A.removeUsersFromGroup(c, A)
    }
  }, "remove-from-group")), g
}