/** Chunk was on 64939 **/
/** chunk id: 836774, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk937773 = require("./937773.jsx"),
  Chunk770335 = require("./770335.js"),
  Chunk405810 = require("./405810.jsx"),
  Chunk808728 = require("./808728.js"),
  Chunk486020 = require("./486020.js"),
  Chunk515718 = require("./515718.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk510272 = require("./510272.js"),
  Chunk230279 = require("./230279.js");

function f() {
  return [{
    name: h.intl.string(h.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function C(e) {
  let i = (0, p._O)({
      id: e.id,
      animated: false,
      size: 48,
      forcePNG: true
    }),
    t = await fetch(i),
    a = await t.blob();
  return await (0, m.We)(a)
}
let b = function(e) {
  let {
    guildId: i,
    onUploadIcon: t,
    onSelectUnicodeEmoji: p,
    onClose: m,
    transitionState: b
  } = e, v = (0, d.GV)(), I = u.Ay.getDefaultChannel(i), [N, _] = n.useState("tab-id-role-icon-file-upload"), [y, k] = n.useState(false), w = (0, s.A)(f);
  return n.useEffect(() => {
    k(false)
  }, [N]), (0, a.jsx)(l.EOs, {
    transitionState: b,
    "aria-labelledby": v,
    size: l.rIJ.MEDIUM,
    className: g.CR,
    parentComponent: "CustomRoleIconUploadModal",
    "data-migration-pending": true,
    children: (0, a.jsxs)("div", {
      className: g.FG,
      children: [(0, a.jsxs)(l.VQ0, {
        selectedItem: N,
        onItemSelect: _,
        type: "top",
        look: "grey",
        "aria-label": "Expression Picker",
        className: g.C$,
        children: [(0, a.jsx)(l.VQ0.Item, {
          id: "tab-id-role-icon-file-upload",
          children: h.intl.string(h.t.royWSB)
        }), (0, a.jsx)(l.VQ0.Item, {
          id: "tab-id-role-icon-emoji",
          children: h.intl.string(h.t["/Ny2wZ"])
        })]
      }), "tab-id-role-icon-file-upload" === N ? (0, a.jsx)(l.$mQ, {
        "data-migration-pending": true,
        children: (0, a.jsxs)("div", {
          className: g.PO,
          children: [(0, a.jsxs)("div", {
            className: g.HK,
            children: [(0, a.jsx)("img", {
              src: j,
              alt: "sparkles"
            }), (0, a.jsx)("div", {
              className: g.sk,
              children: (0, a.jsx)(l.XGR, {
                size: "md",
                color: "currentColor",
                className: g.T3
              })
            })]
          }), (0, a.jsx)("div", {
            className: g.WG,
            children: h.intl.string(h.t["mz++Qq"])
          }), (0, a.jsx)(c.A, {
            onChange: e => {
              k(false), t(e), m()
            },
            onFileSizeError: () => {
              k(true)
            },
            maxFileSizeBytes: 256e3,
            filters: w,
            text: h.intl.string(h.t.sdCQY4),
            size: "md",
            variant: "primary"
          }), y ? (0, a.jsx)(l.Text, {
            className: g.Qw,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: h.intl.string(h.t.HFyKsa)
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === N ? (0, a.jsx)(r.A, {
        hasTabWrapper: true,
        closePopout: () => m(),
        onSelectEmoji: async e => {
          let {
            emoji: i
          } = e;
          if ((null == i ? true : i.id) != null)(null == i ? true : i.type) === o.i.GUILD && t(await C(i));
          else if ((null == i ? true : i.surrogates) != null) {
            var a, n;
            p(null != (a = null == (n = i.defaultDiversityChild) ? true : n.surrogates) ? a : i.surrogates)
          }
          m()
        },
        pickerIntention: x.b_.COMMUNITY_CONTENT,
        channel: I
      }) : null]
    })
  })
}