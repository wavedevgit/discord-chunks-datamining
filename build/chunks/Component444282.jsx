/** Chunk was on web.js **/
/** chunk id: 444282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk859235 = require("./859235.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk163514 = require("./163514.js"),
  Chunk451328 = require("./451328.js");

function E(e) {
  let {
    channelId: t,
    option: n,
    keyboardModeEnabled: a
  } = e, E = i.useRef(null), [b, y] = i.useState(false), O = f.Z.getUpload(t, n.name, d.d.SlashCommand), v = i.useRef(null), I = e => {
    if (e.which === h.yXg.ENTER) {
      var t;
      e.preventDefault(), null == (t = E.current) || t.activateUploadDialogue()
    }
  }, T = i.useCallback(() => {
    y(true)
  }, []), S = i.useCallback(() => {
    y(false)
  }, []), A = i.useCallback(e => {
    var r;
    y(false);
    let i = {
      id: n.name,
      file: null == (r = e.dataTransfer) ? true : r.files[0],
      platform: u.ow.WEB,
      origin: "drag_drop"
    };
    l.Z.setFile({
      channelId: t,
      id: n.name,
      file: i,
      draftType: d.d.SlashCommand
    })
  }, [t, n]);
  i.useEffect(() => {
    let e = v.current;
    return null == O && (null == e || e.addEventListener("dragover", T, false), null == e || e.addEventListener("dragleave", S, false), null == e || e.addEventListener("drop", A, false)), () => {
      null == e || e.removeEventListener("dragover", T, false), null == e || e.removeEventListener("dragleave", S, false), null == e || e.removeEventListener("drop", A, false)
    }
  }, [O, T, S, A]);
  let C = e => {
    var r, i;
    if (null != t && (null == (i = e.currentTarget) || null == (r = i.files) ? true : r[0]) != null) {
      let r = {
        id: n.name,
        file: e.currentTarget.files[0],
        platform: u.ow.WEB,
        origin: "file_picker"
      };
      l.Z.setFile({
        channelId: t,
        id: n.name,
        file: r,
        draftType: d.d.SlashCommand
      }), e.currentTarget.value = ""
    }
  };
  return null != O ? (0, r.jsx)(p.Z, {
    channelId: t,
    upload: O,
    keyboardModeEnabled: a,
    draftType: d.d.SlashCommand,
    label: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsxs)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        children: [n.name, ": "]
      }), (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-brand",
        children: O.filename
      })]
    }),
    canEdit: false
  }) : (0, r.jsxs)(_.Z, {
    id: n.name,
    channelId: t,
    keyboardModeEnabled: a,
    onKeyDown: I,
    className: o()(m.emptyOption, {
      [m.emptyOptionActive]: b
    }),
    draftType: d.d.SlashCommand,
    ref: v,
    children: [(0, r.jsx)("span", {
      className: o()(m.optionName, {
        [m.optionNameActive]: b
      }),
      children: n.name
    }), (0, r.jsx)(s.P3F, {
      className: m.clickContainer,
      onClick: () => {
        var e;
        return null == (e = E.current) ? true : e.activateUploadDialogue()
      },
      children: (0, r.jsxs)("div", {
        className: m.commandOptionContainer,
        children: [(0, r.jsx)("img", {
          src: g,
          className: m.optionIcon,
          alt: ""
        }), (0, r.jsx)(s.Text, {
          className: m.optionHelp,
          variant: "text-sm/normal",
          children: "Drag and drop or click to upload file"
        }), (0, r.jsx)(c.Z, {
          ref: E,
          onChange: C,
          multiple: false,
          tabIndex: false,
          "aria-hidden": true,
          className: m.fileInput
        })]
      })
    })]
  })
}