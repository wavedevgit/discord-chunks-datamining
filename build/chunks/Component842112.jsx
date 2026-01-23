/** Chunk was on 32857 **/
/** chunk id: 842112, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk383394 = require("./383394.js"),
  Chunk711014 = require("./711014.js"),
  Chunk567035 = require("./567035.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    folderId: t,
    folderName: u,
    folderColor: f,
    unread: y,
    onSelect: O
  } = e, j = (0, l.bG)([s.Ay], () => s.Ay.getGuildFolderById(t), [t]), g = (0, l.bG)([a.A], () => a.A.getExpandedFolders().size > 0);
  return (0, n.jsxs)(o.W1t, {
    "data-menu-migration-ready": true,
    navId: "guild-context",
    "aria-label": p.intl.string(p.t.HpQykc),
    onClose: i.Z_,
    onSelect: O,
    children: [(0, n.jsx)(o.rXV, {
      children: (0, n.jsx)(o.Drp, {
        id: "mark-folder-read",
        label: p.intl.string(p.t.thzRJA),
        action: function() {
          if (null == j) return;
          let {
            guildIds: e
          } = j;
          (0, d.A)(e, b.JJy.GUILD_LIST)
        },
        disabled: !y
      })
    }), (0, n.jsxs)(o.rXV, {
      children: [(0, n.jsx)(o.Drp, {
        id: "folder-settings",
        label: p.intl.string(p.t.Dx7im5),
        action: () => (0, o.mMO)(async () => {
          let {
            default: e
          } = await r.e("99116").then(r.bind(r, 672551));
          return r => {
            var l, o;
            return (0, n.jsx)(e, (l = function(e) {
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
            }({}, r), o = o = {
              folderId: t,
              folderName: u,
              folderColor: f
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(o)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
            }), l))
          }
        })
      }), g && (0, n.jsx)(o.Drp, {
        id: "folder-collapse",
        label: p.intl.string(p.t.rCPsbo),
        action: () => c.A.collapseAllFolders()
      })]
    })]
  })
}