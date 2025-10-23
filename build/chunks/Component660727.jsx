/** Chunk was on 22942 **/
/** chunk id: 660727, original params: n,e,a (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk313201 = require("./313201.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk906411 = require("./906411.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956664 = require("./956664.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759415 = require("./759415.js"),
  Chunk84717 = require("./84717.js");

function h() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function j(n) {
  let e = (0, p.gT)({
      id: n.id,
      animated: false,
      size: 48,
      forcePNG: true
    }),
    a = await fetch(e),
    t = await a.blob();
  return await (0, m.fD)(t)
}
let C = function(n) {
  let {
    guildId: e,
    onUploadIcon: a,
    onSelectUnicodeEmoji: p,
    onClose: m,
    transitionState: C
  } = n, v = (0, d.Dt)(), b = u.ZP.getDefaultChannel(e), [N, y] = o.useState("tab-id-role-icon-file-upload"), [_, k] = o.useState(false), z = (0, i.Z)(h);
  return o.useEffect(() => {
    k(false)
  }, [N]), (0, t.jsx)(l.Y0X, {
    transitionState: C,
    "aria-labelledby": v,
    size: l.CgR.MEDIUM,
    className: I.modalRoot,
    parentComponent: "CustomRoleIconUploadModal",
    "data-migration-pending": true,
    children: (0, t.jsxs)("div", {
      className: I.contentWrapper,
      children: [(0, t.jsxs)(l.njP, {
        selectedItem: N,
        onItemSelect: y,
        type: "top",
        look: "grey",
        "aria-label": "Expression Picker",
        className: I.nav,
        children: [(0, t.jsx)(l.njP.Item, {
          id: "tab-id-role-icon-file-upload",
          children: x.intl.string(x.t.royWSB)
        }), (0, t.jsx)(l.njP.Item, {
          id: "tab-id-role-icon-emoji",
          children: x.intl.string(x.t["/Ny2wZ"])
        })]
      }), "tab-id-role-icon-file-upload" === N ? (0, t.jsx)(l.hzk, {
        "data-migration-pending": true,
        children: (0, t.jsxs)("div", {
          className: I.uploadContainer,
          children: [(0, t.jsxs)("div", {
            className: I.uploadIconOuterContainer,
            children: [(0, t.jsx)("img", {
              src: f,
              alt: "sparkles"
            }), (0, t.jsx)("div", {
              className: I.uploadIconInnerContainer,
              children: (0, t.jsx)(l.FmF, {
                size: "md",
                color: "currentColor",
                className: I.uploadIcon
              })
            })]
          }), (0, t.jsx)("div", {
            className: I.uploadInfo,
            children: x.intl.string(x.t["mz++Qq"])
          }), (0, t.jsx)(c.Z, {
            onChange: n => {
              k(false), a(n), m()
            },
            onFileSizeError: () => {
              k(true)
            },
            maxFileSizeBytes: 256e3,
            filters: z,
            text: x.intl.string(x.t.sdCQY4),
            size: "md",
            variant: "primary"
          }), _ ? (0, t.jsx)(l.Text, {
            className: I.uploadError,
            color: "text-danger",
            variant: "text-sm/normal",
            children: x.intl.string(x.t.HFyKsa)
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === N ? (0, t.jsx)(r.Z, {
        hasTabWrapper: true,
        closePopout: () => m(),
        onSelectEmoji: async n => {
          let {
            emoji: e
          } = n;
          if ((null == e ? true : e.id) != null)(null == e ? true : e.type) === s.B.GUILD && a(await j(e));
          else if ((null == e ? true : e.surrogates) != null) {
            var t, o;
            p(null != (o = null == (t = e.defaultDiversityChild) ? true : t.surrogates) ? o : e.surrogates)
          }
          m()
        },
        pickerIntention: g.Hz.COMMUNITY_CONTENT,
        channel: b
      }) : null]
    })
  })
}