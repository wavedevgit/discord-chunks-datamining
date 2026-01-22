/** Chunk was on web.js **/
/** chunk id: 839914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk565150 = require("./565150.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk273764 = require("./273764.js"),
  Chunk127243 = require("./127243.js");

function b(e) {
  let {
    channelId: t,
    option: n,
    keyboardModeEnabled: a
  } = e, b = i.useRef(null), [y, O] = i.useState(false), A = f.A.getUpload(t, n.name, d.C.SlashCommand), v = i.useRef(null), S = e => {
    if (e.which === h.Ks6.ENTER) {
      var t;
      e.preventDefault(), null == (t = b.current) || t.activateUploadDialogue()
    }
  }, I = i.useCallback(() => {
    O(true)
  }, []), T = i.useCallback(() => {
    O(false)
  }, []), C = i.useCallback(e => {
    var r;
    O(false);
    let i = {
      id: n.name,
      file: null == (r = e.dataTransfer) ? true : r.files[0],
      platform: u.xz.WEB,
      origin: "drag_drop"
    };
    l.A.setFile({
      channelId: t,
      id: n.name,
      file: i,
      draftType: d.C.SlashCommand,
      allowOptimization: false
    })
  }, [t, n]);
  i.useEffect(() => {
    let e = v.current;
    return null == A && (null == e || e.addEventListener("dragover", I, false), null == e || e.addEventListener("dragleave", T, false), null == e || e.addEventListener("drop", C, false)), () => {
      null == e || e.removeEventListener("dragover", I, false), null == e || e.removeEventListener("dragleave", T, false), null == e || e.removeEventListener("drop", C, false)
    }
  }, [A, I, T, C]);
  let N = e => {
    var r, i;
    if (null != t && (null == (i = e.currentTarget) || null == (r = i.files) ? true : r[0]) != null) {
      let r = {
        id: n.name,
        file: e.currentTarget.files[0],
        platform: u.xz.WEB,
        origin: "file_picker"
      };
      l.A.setFile({
        channelId: t,
        id: n.name,
        file: r,
        draftType: d.C.SlashCommand,
        allowOptimization: false
      }), e.currentTarget.value = ""
    }
  };
  return null != A ? (0, r.jsx)(_.A, {
    channelId: t,
    upload: A,
    keyboardModeEnabled: a,
    draftType: d.C.SlashCommand,
    label: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsxs)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        children: [n.displayName, ": "]
      }), (0, r.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-brand",
        children: A.filename
      })]
    }),
    canEdit: false
  }) : (0, r.jsxs)(p.A, {
    id: n.name,
    channelId: t,
    keyboardModeEnabled: a,
    onKeyDown: S,
    className: s()(g.xd, {
      [g.LB]: y
    }),
    draftType: d.C.SlashCommand,
    ref: v,
    children: [(0, r.jsx)("span", {
      className: s()(g.fS, {
        [g.Vg]: y
      }),
      children: n.displayName
    }), (0, r.jsx)(o.DUT, {
      className: g.uN,
      onClick: () => {
        var e;
        return null == (e = b.current) ? true : e.activateUploadDialogue()
      },
      children: (0, r.jsxs)("div", {
        className: g.wi,
        children: [(0, r.jsx)("img", {
          src: E,
          className: g.H9,
          alt: ""
        }), (0, r.jsx)(o.Text, {
          className: g.L,
          variant: "text-sm/normal",
          children: m.intl.string(m.t.IJyOUf)
        }), (0, r.jsx)(c.A, {
          ref: b,
          onChange: N,
          multiple: false,
          tabIndex: false,
          "aria-hidden": true,
          className: g.Fg
        })]
      })
    })]
  })
}