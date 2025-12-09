/** Chunk was on web.js **/
/** chunk id: 241085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk424218 = require("./424218.js"),
  Chunk403182 = require("./403182.js"),
  Chunk127654 = require("./127654.js"),
  Chunk979956 = require("./979956.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk292419 = require("./292419.js"),
  Chunk756043 = require("./756043.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975279 = require("./975279.js");

function R(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: i,
    maxValues: a,
    guildId: s
  } = e, l = (0, v.dg)(s), c = (0, O.BU)(l / O.XD, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: P.mainWrapper,
    children: [(0, r.jsxs)("div", {
      className: o()(P.mainBody, {
        [P.hidden]: t
      }),
      children: [(0, r.jsx)(u.xD0, {
        color: u.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: N.intl.format(N.t.y68I8P, {
          onClick: () => {
            var e;
            return null == (e = n.current) ? true : e.activateUploadDialogue()
          },
          maxValues: a
        })
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: i > 1 ? i === a ? N.intl.format(N.t.SAr31z, {
          minValues: i,
          maxSize: c
        }) : N.intl.format(N.t["ZG+3Ck"], {
          minValues: i,
          maxValues: a,
          maxSize: c
        }) : N.intl.format(N.t.tyxwW1, {
          maxValues: a,
          maxSize: c
        })
      })]
    }), t && (0, r.jsxs)("div", {
      className: o()(P.mainBody, P.absolutelyPositioned),
      children: [(0, r.jsx)(u.xD0, {
        color: u.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: N.intl.string(N.t["8OJlsH"])
      })]
    })]
  })
}

function D() {
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk975279.mainWrapper, Chunk975279.mainBody),
    children: [(0, Chunk54381.jsx)(Chunk481060.owK, {
      color: Chunk481060.TVs.colors.ICON_PRIMARY,
      size: "refresh_sm"
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk388032.t["0PhgpK"])
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.HYg2Hn)
    })]
  })
}

function w(e) {
  var t;
  let {
    upload: n,
    handleRemoveFile: i,
    singleFileInput: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(P.file, {
      [P.singleFileInput]: a
    }),
    children: [(0, r.jsx)(g.r, {
      upload: n,
      size: a ? h.q.XSMALL : h.q.XXSMALL
    }), (0, r.jsx)(u.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: P.filename,
      children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0)
    }), (0, r.jsx)(E.ZP, {
      className: P.miniPopover,
      children: (0, r.jsx)(m.Z, {
        className: P.action,
        tooltip: N.intl.string(N.t.N86XcP),
        onClick: () => i(n.id),
        dangerous: true,
        children: (0, r.jsx)(u.XHJ, {
          size: "xs",
          color: "currentColor",
          className: P.actionIcon
        })
      })
    })]
  }, n.id)
}

function x(e) {
  var t;
  let {
    minValues: n,
    maxValues: a
  } = e, s = i.useRef(null), u = i.useRef(null), [m, h] = i.useState(false), g = (0, T.CJ)();
  l()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let E = g.channelId;
  l()(null != E, "FileUploadActionComponent must be used inside a channel");
  let O = null == (t = g.modal) ? true : t.customId;
  l()(null != O, "FileUploadActionComponent requires modalCustomId from context");
  let {
    uploadIds: v,
    setUploadIds: x,
    currentUploads: L,
    error: j
  } = (0, C.t)(e), M = (0, c.e7)([b.Z], () => b.Z.getBasicChannel(E));
  l()(null != M, "FileUploadActionComponent requires a valid channel");
  let k = i.useCallback(e => {
      var t;
      e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && h(true)
    }, []),
    U = i.useCallback(e => {
      var t;
      null != (t = u.current) && t.contains(e.relatedTarget) || h(false)
    }, []),
    G = i.useCallback((e, t) => {
      if (0 === e.length) return;
      if (v.length + e.length > a) return (0, p.openUploadError)({
        title: N.intl.string(N.t.wOr6hB),
        help: N.intl.formatToPlainString(N.t.dy6viJ, {
          maxValues: a
        })
      });
      if ((0, I.Bf)(e, M.guild_id)) return (0, S.G)(M, e);
      let n = e.map(e => {
        let n = (0, A.VD)(O),
          r = {
            id: n,
            file: e,
            platform: _.ow.WEB,
            origin: t
          };
        return d.Z.setFile({
          channelId: E,
          id: n,
          file: r,
          draftType: y.d.InteractionModal,
          allowOptimization: false
        }), n
      });
      x(v.concat(n))
    }, [v, a, M, x, O, E]),
    Z = i.useCallback(e => {
      var t, n;
      e.preventDefault(), h(false), G(Array.from(null != (n = null == (t = e.dataTransfer) ? true : t.files) ? n : []), "drag_drop")
    }, [G]),
    B = e => {
      var t;
      G(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
    },
    F = e => {
      d.Z.remove(E, e, y.d.InteractionModal), x(v.filter(t => t !== e))
    };
  return (i.useEffect(() => {
    let e = u.current;
    return null == e || e.addEventListener("dragover", k), null == e || e.addEventListener("dragleave", U), null == e || e.addEventListener("drop", Z), () => {
      null == e || e.removeEventListener("dragover", k), null == e || e.removeEventListener("dragleave", U), null == e || e.removeEventListener("drop", Z)
    }
  }, [k, U, Z]), 1 === a && 1 === L.length) ? (0, r.jsx)(w, {
    upload: L[0],
    handleRemoveFile: F,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: u,
    className: o()(P.container, {
      [P.dropping]: m,
      [P.error]: null != j
    }),
    children: [v.length >= a ? (0, r.jsx)(D, {}) : (0, r.jsx)(R, {
      dropping: m,
      fileInputRef: s,
      minValues: n,
      maxValues: a,
      guildId: M.guild_id
    }), L.length > 0 && (0, r.jsx)("div", {
      className: P.files,
      children: L.map(e => (0, r.jsx)(w, {
        upload: e,
        handleRemoveFile: F
      }, e.id))
    }), (0, r.jsx)(f.Z, {
      ref: s,
      onChange: B,
      multiple: a > 1,
      tabIndex: false,
      className: P.fileInput
    })]
  })
}