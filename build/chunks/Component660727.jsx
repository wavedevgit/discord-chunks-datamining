/** Chunk was on 22942 **/
/** chunk id: 660727, original params: n,e,o (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    name: Chunk388032.intl.string(Chunk388032.t.Sp2NFx),
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
    o = await fetch(e),
    t = await o.blob();
  return await (0, m.fD)(t)
}
let C = function(n) {
  let {
    guildId: e,
    onUploadIcon: o,
    onSelectUnicodeEmoji: p,
    onClose: m,
    transitionState: C
  } = n, b = (0, d.Dt)(), v = u.ZP.getDefaultChannel(e), [N, _] = a.useState("tab-id-role-icon-file-upload"), [y, k] = a.useState(false), E = (0, i.Z)(h);
  return a.useEffect(() => {
    k(false)
  }, [N]), (0, t.jsx)(l.Y0X, {
    transitionState: C,
    "aria-labelledby": b,
    size: l.CgR.MEDIUM,
    className: I.modalRoot,
    parentComponent: "CustomRoleIconUploadModal",
    "data-migration-pending": true,
    children: (0, t.jsxs)("div", {
      className: I.contentWrapper,
      children: [(0, t.jsxs)(l.njP, {
        selectedItem: N,
        onItemSelect: _,
        type: "top",
        look: "grey",
        "aria-label": "Expression Picker",
        className: I.nav,
        children: [(0, t.jsx)(l.njP.Item, {
          id: "tab-id-role-icon-file-upload",
          children: x.intl.string(x.t.royWSE)
        }), (0, t.jsx)(l.njP.Item, {
          id: "tab-id-role-icon-emoji",
          children: x.intl.string(x.t["/Ny2wc"])
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
            children: x.intl.string(x.t["mz++Qk"])
          }), (0, t.jsx)(c.Z, {
            buttonCTA: x.intl.string(x.t.sdCQY2),
            onChange: n => {
              k(false), o(n), m()
            },
            onFileSizeError: () => {
              k(true)
            },
            maxFileSizeBytes: 256e3,
            filters: E
          }), y ? (0, t.jsx)(l.Text, {
            className: I.uploadError,
            color: "text-danger",
            variant: "text-sm/normal",
            children: x.intl.string(x.t.HFyKsb)
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === N ? (0, t.jsx)(r.Z, {
        hasTabWrapper: true,
        closePopout: () => m(),
        onSelectEmoji: async n => {
          let {
            emoji: e
          } = n;
          if ((null == e ? true : e.id) != null)(null == e ? true : e.type) === s.B.GUILD && o(await j(e));
          else if ((null == e ? true : e.surrogates) != null) {
            var t, a;
            p(null != (a = null == (t = e.defaultDiversityChild) ? true : t.surrogates) ? a : e.surrogates)
          }
          m()
        },
        pickerIntention: g.Hz.COMMUNITY_CONTENT,
        channel: v
      }) : null]
    })
  })
}