/** Chunk was on 64939 **/
/** chunk id: 836774, original params: e,i,a (module,exports,require) **/
require.d(exports, {
  default: () => v
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

function g() {
  return [{
    name: f.intl.string(f.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function j(e) {
  let i = (0, m._O)({
      id: e.id,
      animated: false,
      size: 48,
      forcePNG: true
    }),
    a = await fetch(i),
    t = await a.blob();
  return await (0, p.We)(t)
}
let v = function(e) {
  let {
    guildId: i,
    onUploadIcon: a,
    onSelectUnicodeEmoji: m,
    onClose: p,
    transitionState: v
  } = e, C = (0, r.GV)(), N = u.Ay.getDefaultChannel(i), [y, k] = s.useState("tab-id-role-icon-file-upload"), [I, _] = s.useState(false), w = (0, n.A)(g);
  return s.useEffect(() => {
    _(false)
  }, [y]), (0, t.jsx)(l.EOs, {
    transitionState: v,
    "aria-labelledby": C,
    size: l.rIJ.MEDIUM,
    className: x.CR,
    parentComponent: "CustomRoleIconUploadModal",
    "data-migration-pending": true,
    children: (0, t.jsxs)("div", {
      className: x.FG,
      children: [(0, t.jsxs)(l.VQ0, {
        selectedItem: y,
        onItemSelect: k,
        type: "top",
        look: "grey",
        "aria-label": "Expression Picker",
        className: x.C$,
        children: [(0, t.jsx)(l.VQ0.Item, {
          id: "tab-id-role-icon-file-upload",
          children: f.intl.string(f.t.royWSB)
        }), (0, t.jsx)(l.VQ0.Item, {
          id: "tab-id-role-icon-emoji",
          children: f.intl.string(f.t["/Ny2wZ"])
        })]
      }), "tab-id-role-icon-file-upload" === y ? (0, t.jsx)(l.$mQ, {
        "data-migration-pending": true,
        children: (0, t.jsxs)("div", {
          className: x.PO,
          children: [(0, t.jsxs)("div", {
            className: x.HK,
            children: [(0, t.jsx)("img", {
              src: h,
              alt: "sparkles"
            }), (0, t.jsx)("div", {
              className: x.sk,
              children: (0, t.jsx)(l.XGR, {
                size: "md",
                color: "currentColor",
                className: x.T3
              })
            })]
          }), (0, t.jsx)("div", {
            className: x.WG,
            children: f.intl.string(f.t["mz++Qq"])
          }), (0, t.jsx)(o.A, {
            onChange: e => {
              _(false), a(e), p()
            },
            onFileSizeError: () => {
              _(true)
            },
            maxFileSizeBytes: 256e3,
            filters: w,
            text: f.intl.string(f.t.sdCQY4),
            size: "md",
            variant: "primary"
          }), I ? (0, t.jsx)(l.Text, {
            className: x.Qw,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: f.intl.string(f.t.HFyKsa)
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === y ? (0, t.jsx)(d.A, {
        hasTabWrapper: true,
        closePopout: () => p(),
        onSelectEmoji: async e => {
          let {
            emoji: i
          } = e;
          if ((null == i ? true : i.id) != null)(null == i ? true : i.type) === c.i.GUILD && a(await j(i));
          else if ((null == i ? true : i.surrogates) != null) {
            var t, s;
            m(null != (t = null == (s = i.defaultDiversityChild) ? true : s.surrogates) ? t : i.surrogates)
          }
          p()
        },
        pickerIntention: b.b_.COMMUNITY_CONTENT,
        channel: N
      }) : null]
    })
  })
}