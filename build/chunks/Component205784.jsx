/** Chunk was on 52590 **/
/** chunk id: 205784, original params: e,t,n (module,exports,require) **/
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
  Chunk945983 = require("./945983.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  var t;
  let {
    folderId: p,
    folderName: j,
    folderColor: g,
    unread: m,
    onSelect: O
  } = e, h = (0, l.e7)([s.ZP], () => s.ZP.getGuildFolderById(p), [p]), y = (0, u.Z)(null != (t = null == h ? true : h.guildIds) ? t : []), k = (0, l.e7)([d.Z], () => d.Z.getExpandedFolders().size > 0);
  return (0, r.jsxs)(i.v2r, {
    navId: "guild-context",
    "aria-label": f.intl.string(f.t.HpQykc),
    onClose: o.Zy,
    onSelect: O,
    children: [(0, r.jsx)(i.kSQ, {
      children: (0, r.jsx)(i.sNh, {
        id: "mark-folder-read",
        label: f.intl.string(f.t.thzRJA),
        action: function() {
          if (null == h) return;
          let {
            guildIds: e
          } = h;
          (0, c.Z)(e, b.jXE.GUILD_LIST)
        },
        disabled: !m
      })
    }), null != y ? (0, r.jsx)(i.kSQ, {
      children: y
    }) : null, (0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.sNh, {
        id: "folder-settings",
        label: f.intl.string(f.t.Dx7im5),
        action: () => (0, i.ZDy)(async () => {
          let {
            default: e
          } = await n.e("77250").then(n.bind(n, 643087));
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
              folderId: p,
              folderName: j,
              folderColor: g
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
      }), k && (0, r.jsx)(i.sNh, {
        id: "folder-collapse",
        label: f.intl.string(f.t.rCPsbo),
        action: () => a.Z.collapseAllFolders()
      })]
    })]
  })
}