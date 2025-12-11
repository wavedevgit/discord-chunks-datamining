/** Chunk was on 22942 **/
/** chunk id: 660727, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk292215 = require("./292215.js"),
  Chunk84717 = require("./84717.js");

function h() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function j(e) {
  let n = (0, p.gT)({
      id: e.id,
      animated: false,
      size: 48,
      forcePNG: true
    }),
    a = await fetch(n),
    t = await a.blob();
  return await (0, m.fD)(t)
}
let C = function(e) {
  let {
    guildId: n,
    onUploadIcon: a,
    onSelectUnicodeEmoji: p,
    onClose: m,
    transitionState: C
  } = e, v = (0, d.Dt)(), b = u.ZP.getDefaultChannel(n), [N, y] = o.useState("tab-id-role-icon-file-upload"), [k, z] = o.useState(false), E = (0, l.Z)(h);
  return o.useEffect(() => {
    z(false)
  }, [N]), (0, t.jsx)(i.Y0X, {
    transitionState: C,
    "aria-labelledby": v,
    size: i.CgR.MEDIUM,
    className: I.modalRoot,
    parentComponent: "CustomRoleIconUploadModal",
    "data-migration-pending": true,
    children: (0, t.jsxs)("div", {
      className: I.contentWrapper,
      children: [(0, t.jsxs)(i.njP, {
        selectedItem: N,
        onItemSelect: y,
        type: "top",
        look: "grey",
        "aria-label": "Expression Picker",
        className: I.nav,
        children: [(0, t.jsx)(i.njP.Item, {
          id: "tab-id-role-icon-file-upload",
          children: x.intl.string(x.t.royWSB)
        }), (0, t.jsx)(i.njP.Item, {
          id: "tab-id-role-icon-emoji",
          children: x.intl.string(x.t["/Ny2wZ"])
        })]
      }), "tab-id-role-icon-file-upload" === N ? (0, t.jsx)(i.hzk, {
        "data-migration-pending": true,
        children: (0, t.jsxs)("div", {
          className: I.uploadContainer,
          children: [(0, t.jsxs)("div", {
            className: I.uploadIconOuterContainer,
            children: [(0, t.jsx)("img", {
              src: g,
              alt: "sparkles"
            }), (0, t.jsx)("div", {
              className: I.uploadIconInnerContainer,
              children: (0, t.jsx)(i.FmF, {
                size: "md",
                color: "currentColor",
                className: I.uploadIcon
              })
            })]
          }), (0, t.jsx)("div", {
            className: I.uploadInfo,
            children: x.intl.string(x.t["mz++Qq"])
          }), (0, t.jsx)(c.Z, {
            onChange: e => {
              z(false), a(e), m()
            },
            onFileSizeError: () => {
              z(true)
            },
            maxFileSizeBytes: 256e3,
            filters: E,
            text: x.intl.string(x.t.sdCQY4),
            size: "md",
            variant: "primary"
          }), k ? (0, t.jsx)(i.Text, {
            className: I.uploadError,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: x.intl.string(x.t.HFyKsa)
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === N ? (0, t.jsx)(r.Z, {
        hasTabWrapper: true,
        closePopout: () => m(),
        onSelectEmoji: async e => {
          let {
            emoji: n
          } = e;
          if ((null == n ? true : n.id) != null)(null == n ? true : n.type) === s.B.GUILD && a(await j(n));
          else if ((null == n ? true : n.surrogates) != null) {
            var t, o;
            p(null != (o = null == (t = n.defaultDiversityChild) ? true : t.surrogates) ? o : n.surrogates)
          }
          m()
        },
        pickerIntention: f.Hz.COMMUNITY_CONTENT,
        channel: b
      }) : null]
    })
  })
}