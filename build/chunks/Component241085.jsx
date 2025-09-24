/** Chunk was on web.js **/
/** chunk id: 241085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk117530 = require("./117530.js"),
  Chunk424218 = require("./424218.js"),
  Chunk403182 = require("./403182.js"),
  Chunk127654 = require("./127654.js"),
  Chunk979956 = require("./979956.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk292419 = require("./292419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975279 = require("./975279.js");

function P(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: i,
    maxValues: a,
    guildId: s
  } = e, l = (0, I.dg)(s), c = (0, v.BU)(l / v.XD, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: R.mainWrapper,
    children: [(0, r.jsxs)("div", {
      className: o()(R.mainBody, {
        [R.hidden]: t
      }),
      children: [(0, r.jsx)(u.xD0, {
        color: u.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-tertiary",
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
        children: i > 1 ? i === a ? N.intl.format(N.t.SAr319, {
          minValues: i,
          maxSize: c
        }) : N.intl.format(N.t["ZG+3Cg"], {
          minValues: i,
          maxValues: a,
          maxSize: c
        }) : N.intl.format(N.t.tyxwW1, {
          maxValues: a,
          maxSize: c
        })
      })]
    }), t && (0, r.jsxs)("div", {
      className: o()(R.mainBody, R.absolutelyPositioned),
      children: [(0, r.jsx)(u.xD0, {
        color: u.TVs.colors.ICON_PRIMARY,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-primary",
        children: N.intl.string(N.t["8OJlsL"])
      })]
    })]
  })
}

function w() {
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

function D(e) {
  var t;
  let {
    upload: n,
    handleRemoveFile: i,
    singleFileInput: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(R.file, {
      [R.singleFileInput]: a
    }),
    children: [(0, r.jsx)(g.r, {
      upload: n,
      size: a ? m.q.XSMALL : m.q.XXSMALL
    }), (0, r.jsx)(u.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: R.filename,
      children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp6)
    }), (0, r.jsx)(E.ZP, {
      className: R.miniPopover,
      children: (0, r.jsx)(h.Z, {
        className: R.action,
        tooltip: N.intl.string(N.t.N86XcH),
        onClick: () => i(n.id),
        dangerous: true,
        children: (0, r.jsx)(u.XHJ, {
          size: "xs",
          color: "currentColor",
          className: R.actionIcon
        })
      })
    })]
  }, n.id)
}

function x(e) {
  var t;
  let {
    type: n,
    minValues: a,
    maxValues: s
  } = e, u = i.useRef(null), h = i.useRef(null), [m, g] = i.useState(false), E = (0, A.CJ)();
  l()(null != E, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let v = E.channelId;
  l()(null != v, "FileUploadActionComponent must be used inside a channel");
  let I = null == (t = E.modal) ? true : t.customId;
  l()(null != I, "FileUploadActionComponent requires modalCustomId from context");
  let {
    state: x,
    executeStateUpdate: L,
    error: j
  } = E.useComponentState(e, true), M = i.useMemo(() => (null == x ? true : x.type) === n ? x.uploadIds : [], [x, n]), k = (0, c.e7)([b.Z], () => b.Z.getBasicChannel(v));
  l()(null != k, "FileUploadActionComponent requires a valid channel");
  let U = i.useCallback(e => {
      var t;
      e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && g(true)
    }, []),
    G = i.useCallback(() => {
      g(false)
    }, []),
    B = i.useCallback((e, t) => {
      if (0 === e.length) return;
      if (M.length + e.length > s) return (0, _.openUploadError)({
        title: N.intl.string(N.t.wOr6hI),
        help: N.intl.formatToPlainString(N.t.dy6viI, {
          maxValues: s
        })
      });
      if ((0, S.Bf)(e, k.guild_id)) return (0, T.G)(k, e);
      let r = e.map(e => {
        let n = (0, C.VD)(I),
          r = {
            id: n,
            file: e,
            platform: p.ow.WEB,
            origin: t
          };
        return d.Z.setFile({
          channelId: v,
          id: n,
          file: r,
          draftType: y.d.InteractionModal
        }), n
      });
      L({
        type: n,
        uploadIds: M.concat(r)
      })
    }, [M, s, k, L, n, I, v]),
    Z = i.useCallback(e => {
      var t, n;
      e.preventDefault(), g(false), B(Array.from(null != (n = null == (t = e.dataTransfer) ? true : t.files) ? n : []), "drag_drop")
    }, [B]),
    F = e => {
      var t;
      B(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
    },
    V = e => {
      d.Z.remove(v, e, y.d.InteractionModal), L({
        type: n,
        uploadIds: M.filter(t => t !== e)
      })
    };
  i.useEffect(() => {
    let e = h.current;
    return null == e || e.addEventListener("dragover", U), null == e || e.addEventListener("dragleave", G), null == e || e.addEventListener("drop", Z), () => {
      null == e || e.removeEventListener("dragover", U), null == e || e.removeEventListener("dragleave", G), null == e || e.removeEventListener("drop", Z)
    }
  }, [U, G, Z]);
  let H = M.map(e => O.Z.getUpload(v, e, y.d.InteractionModal)).filter(e => null != e);
  return 1 === s && 1 === H.length ? (0, r.jsx)(D, {
    upload: H[0],
    handleRemoveFile: V,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: h,
    className: o()(R.container, {
      [R.dropping]: m,
      [R.error]: null != j
    }),
    children: [M.length >= s ? (0, r.jsx)(w, {}) : (0, r.jsx)(P, {
      dropping: m,
      fileInputRef: u,
      minValues: a,
      maxValues: s,
      guildId: k.guild_id
    }), H.length > 0 && (0, r.jsx)("div", {
      className: R.files,
      children: H.map(e => (0, r.jsx)(D, {
        upload: e,
        handleRemoveFile: V
      }, e.id))
    }), (0, r.jsx)(f.Z, {
      ref: u,
      onChange: F,
      multiple: s > 1,
      tabIndex: false,
      className: R.fileInput
    })]
  })
}