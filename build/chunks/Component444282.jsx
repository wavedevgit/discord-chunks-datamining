/** Chunk was on web.js **/
/** chunk id: 444282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk163514 = require("./163514.js"),
  Chunk451328 = require("./451328.js");

function b(e) {
  let {
    channelId: t,
    option: n,
    keyboardModeEnabled: a
  } = e, b = i.useRef(null), [y, O] = i.useState(false), v = f.Z.getUpload(t, n.name, d.d.SlashCommand), I = i.useRef(null), T = e => {
    if (e.which === h.yXg.ENTER) {
      var t;
      e.preventDefault(), null == (t = b.current) || t.activateUploadDialogue()
    }
  }, S = i.useCallback(() => {
    O(true)
  }, []), A = i.useCallback(() => {
    O(false)
  }, []), C = i.useCallback(e => {
    var r;
    O(false);
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
      draftType: d.d.SlashCommand,
      allowOptimization: false
    })
  }, [t, n]);
  i.useEffect(() => {
    let e = I.current;
    return null == v && (null == e || e.addEventListener("dragover", S, false), null == e || e.addEventListener("dragleave", A, false), null == e || e.addEventListener("drop", C, false)), () => {
      null == e || e.removeEventListener("dragover", S, false), null == e || e.removeEventListener("dragleave", A, false), null == e || e.removeEventListener("drop", C, false)
    }
  }, [v, S, A, C]);
  let N = e => {
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
        draftType: d.d.SlashCommand,
        allowOptimization: false
      }), e.currentTarget.value = ""
    }
  };
  return null != v ? (0, r.jsx)(p.Z, {
    channelId: t,
    upload: v,
    keyboardModeEnabled: a,
    draftType: d.d.SlashCommand,
    label: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsxs)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        children: [n.displayName, ": "]
      }), (0, r.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-brand",
        children: v.filename
      })]
    }),
    canEdit: false
  }) : (0, r.jsxs)(_.Z, {
    id: n.name,
    channelId: t,
    keyboardModeEnabled: a,
    onKeyDown: T,
    className: o()(g.emptyOption, {
      [g.emptyOptionActive]: y
    }),
    draftType: d.d.SlashCommand,
    ref: I,
    children: [(0, r.jsx)("span", {
      className: o()(g.optionName, {
        [g.optionNameActive]: y
      }),
      children: n.displayName
    }), (0, r.jsx)(s.P3F, {
      className: g.clickContainer,
      onClick: () => {
        var e;
        return null == (e = b.current) ? true : e.activateUploadDialogue()
      },
      children: (0, r.jsxs)("div", {
        className: g.commandOptionContainer,
        children: [(0, r.jsx)("img", {
          src: E,
          className: g.optionIcon,
          alt: ""
        }), (0, r.jsx)(s.Text, {
          className: g.optionHelp,
          variant: "text-sm/normal",
          children: m.intl.string(m.t.IJyOUf)
        }), (0, r.jsx)(c.Z, {
          ref: b,
          onChange: N,
          multiple: false,
          tabIndex: false,
          "aria-hidden": true,
          className: g.fileInput
        })]
      })
    })]
  })
}