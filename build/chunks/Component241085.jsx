/** Chunk was on web.js **/
/** chunk id: 241085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk531643 = require("./531643.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk273031 = require("./273031.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk117530 = require("./117530.js"),
  Chunk424218 = require("./424218.js"),
  Chunk403182 = require("./403182.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk292419 = require("./292419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975279 = require("./975279.js");

function C(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: i,
    maxValues: a,
    channelId: c
  } = e, u = (0, s.e7)([g.Z, b.Z], () => {
    var e;
    let t = null == (e = g.Z.getChannel(c)) ? true : e.guild_id;
    return b.Z.getGuild(t)
  }), d = (0, v.dg)(null == u ? true : u.id), f = (0, O.BU)(d / O.XD, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: A.mainWrapper,
    children: [(0, r.jsxs)("div", {
      className: o()(A.mainBody, {
        [A.hidden]: t
      }),
      children: [(0, r.jsx)(l.xD0, {
        color: l.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-tertiary",
        children: S.intl.format(S.t.y68I8P, {
          onClick: () => {
            var e;
            return null == (e = n.current) ? true : e.activateUploadDialogue()
          },
          maxValues: a
        })
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: i > 1 ? i === a ? S.intl.format(S.t.SAr319, {
          minValues: i,
          maxSize: f
        }) : S.intl.format(S.t["ZG+3Cg"], {
          minValues: i,
          maxValues: a,
          maxSize: f
        }) : S.intl.format(S.t.tyxwW1, {
          maxValues: a,
          maxSize: f
        })
      })]
    }), t && (0, r.jsxs)("div", {
      className: o()(A.mainBody, A.absolutelyPositioned),
      children: [(0, r.jsx)(l.xD0, {
        color: l.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-primary",
        children: S.intl.string(S.t["8OJlsL"])
      })]
    })]
  })
}

function N() {
  return (0, Chunk951288.jsxs)("div", {
    className: o()(Chunk975279.mainWrapper, Chunk975279.mainBody),
    children: [(0, Chunk951288.jsx)(Chunk481060.owK, {
      color: Chunk481060.TVs.colors.ICON_PRIMARY,
      size: "refresh_sm"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-primary",
      children: Chunk388032.intl.string(Chunk388032.t["0PhgpK"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.HYg2Hh)
    })]
  })
}

function R(e) {
  var t;
  let {
    upload: n,
    handleRemoveFile: i,
    singleFileInput: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(A.file, {
      [A.singleFileInput]: a
    }),
    children: [(0, r.jsx)(h.r, {
      upload: n,
      size: a ? p.q.XSMALL : p.q.XXSMALL
    }), (0, r.jsx)(l.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: A.filename,
      children: null != (t = n.filename) ? t : S.intl.string(S.t.ZMirp6)
    }), (0, r.jsx)(m.ZP, {
      className: A.miniPopover,
      children: (0, r.jsx)(_.Z, {
        className: A.action,
        tooltip: S.intl.string(S.t.N86XcH),
        onClick: () => i(n.id),
        dangerous: true,
        children: (0, r.jsx)(l.XHJ, {
          size: "xs",
          color: "currentColor",
          className: A.actionIcon
        })
      })
    })]
  }, n.id)
}

function P(e) {
  var t;
  let {
    type: n,
    minValues: a,
    maxValues: s
  } = e, l = i.useRef(null), _ = i.useRef(null), [p, h] = i.useState(false), m = (0, I.CJ)();
  if (null == m) throw Error("FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let g = m.channelId,
    b = null == (t = m.modal) ? true : t.customId;
  if (null == b) throw Error("FileUploadActionComponent requires modalCustomId from context");
  let {
    state: O,
    executeStateUpdate: v,
    error: P
  } = m.useComponentState(e, true), w = i.useMemo(() => (null == O ? true : O.type) === n ? O.uploadIds : [], [O, n]), D = i.useCallback(e => {
    var t;
    e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && h(true)
  }, []), x = i.useCallback(() => {
    h(false)
  }, []), L = i.useCallback((e, t) => {
    if (0 === e.length) return;
    if (w.length + e.length > s) return (0, d.openUploadError)({
      title: S.intl.string(S.t.wOr6hI),
      help: S.intl.formatToPlainString(S.t.dy6viI, {
        maxValues: s
      })
    });
    let r = e.map(e => {
      let n = (0, T.VD)(b),
        r = {
          id: n,
          file: e,
          platform: f.ow.WEB,
          origin: t
        };
      return c.Z.setFile({
        channelId: g,
        id: n,
        file: r,
        draftType: E.d.InteractionModal
      }), n
    });
    v({
      type: n,
      uploadIds: w.concat(r)
    })
  }, [w, s, v, n, b, g]), j = i.useCallback(e => {
    var t, n;
    e.preventDefault(), h(false), L(Array.from(null != (n = null == (t = e.dataTransfer) ? true : t.files) ? n : []), "drag_drop")
  }, [L]), M = e => {
    var t;
    L(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
  }, k = e => {
    c.Z.remove(g, e, E.d.InteractionModal), v({
      type: n,
      uploadIds: w.filter(t => t !== e)
    })
  };
  i.useEffect(() => {
    let e = _.current;
    return null == e || e.addEventListener("dragover", D), null == e || e.addEventListener("dragleave", x), null == e || e.addEventListener("drop", j), () => {
      null == e || e.removeEventListener("dragover", D), null == e || e.removeEventListener("dragleave", x), null == e || e.removeEventListener("drop", j)
    }
  }, [D, x, j]);
  let U = w.map(e => y.Z.getUpload(g, e, E.d.InteractionModal)).filter(e => null != e);
  return 1 === s && 1 === U.length ? (0, r.jsx)(R, {
    upload: U[0],
    handleRemoveFile: k,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: _,
    className: o()(A.container, {
      [A.dropping]: p,
      [A.error]: null != P
    }),
    children: [w.length >= s ? (0, r.jsx)(N, {}) : (0, r.jsx)(C, {
      dropping: p,
      fileInputRef: l,
      minValues: a,
      maxValues: s,
      channelId: g
    }), U.length > 0 && (0, r.jsx)("div", {
      className: A.files,
      children: U.map(e => (0, r.jsx)(R, {
        upload: e,
        handleRemoveFile: k
      }, e.id))
    }), (0, r.jsx)(u.Z, {
      ref: l,
      onChange: M,
      multiple: s > 1,
      tabIndex: false,
      className: A.fileInput
    })]
  })
}