/** Chunk was on 52590 **/
/** chunk id: 205784, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk664915 = require("./664915.js"),
  Chunk771845 = require("./771845.js"),
  Chunk181945 = require("./181945.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    folderId: t,
    folderName: p,
    folderColor: f,
    unread: y,
    onSelect: j
  } = e, O = (0, l.e7)([a.ZP], () => a.ZP.getGuildFolderById(t), [t]), g = (0, l.e7)([s.Z], () => s.Z.getExpandedFolders().size > 0);
  return (0, n.jsxs)(o.v2r, {
    navId: "guild-context",
    "aria-label": u.intl.string(u.t.HpQykc),
    onClose: i.Zy,
    onSelect: j,
    children: [(0, n.jsx)(o.kSQ, {
      children: (0, n.jsx)(o.sNh, {
        id: "mark-folder-read",
        label: u.intl.string(u.t.thzRJA),
        action: function() {
          if (null == O) return;
          let {
            guildIds: e
          } = O;
          (0, d.Z)(e, b.jXE.GUILD_LIST)
        },
        disabled: !y
      })
    }), (0, n.jsxs)(o.kSQ, {
      children: [(0, n.jsx)(o.sNh, {
        id: "folder-settings",
        label: u.intl.string(u.t.Dx7im5),
        action: () => (0, o.ZDy)(async () => {
          let {
            default: e
          } = await r.e("77250").then(r.bind(r, 643087));
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
              folderName: p,
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
      }), g && (0, n.jsx)(o.sNh, {
        id: "folder-collapse",
        label: u.intl.string(u.t.rCPsbo),
        action: () => c.Z.collapseAllFolders()
      })]
    })]
  })
}