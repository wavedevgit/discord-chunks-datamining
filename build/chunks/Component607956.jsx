/** Chunk was on 97717 **/
/** chunk id: 607956, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk545059 = require("./545059.js");

function u(e) {
  let {
    groupId: t,
    onSelect: u
  } = e, l = o.useCallback(() => {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await r.e("51080").then(r.bind(r, 519528));
      return r => {
        var o, c;
        return (0, n.jsx)(e, (o = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, r), c = c = {
          groupId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(c)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e))
        }), o))
      }
    }), (0, a.Z_)()
  }, [t]), p = o.useCallback(() => {
    i.A.deleteGroup(t), (0, a.Z_)()
  }, [t]);
  return (0, n.jsxs)(c.W1t, {
    "data-menu-migration-ready": true,
    "aria-label": "Group Context Menu",
    navId: "group-context-menu",
    onClose: a.Z_,
    onSelect: u,
    children: [(0, n.jsx)(c.Drp, {
      id: "edit",
      label: "Edit Group",
      action: l
    }), (0, n.jsx)(c.Drp, {
      id: "delete",
      label: "Delete Group",
      action: p,
      color: "danger"
    })]
  })
}