/** Chunk was on web.js **/
/** chunk id: 162493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk23658 = require("./23658.jsx"),
  Chunk565150 = require("./565150.js"),
  Chunk851023 = require("./851023.jsx"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk101555 = require("./101555.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk255438 = require("./255438.js"),
  Chunk453771 = require("./453771.js"),
  Chunk518960 = require("./518960.js"),
  Chunk382287 = require("./382287.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk814890 = require("./814890.js"),
  Chunk414062 = require("./414062.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784505 = require("./784505.js");

function w(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: i,
    maxValues: a,
    guildId: o
  } = e, l = (0, A.o2)(o), c = (0, O.Xq)(l / O.XF, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: R.pp,
    children: [(0, r.jsxs)("div", {
      className: s()(R.e8, {
        [R.R]: t
      }),
      children: [(0, r.jsx)(u.H8$, {
        color: u.LU0.colors.ICON_STRONG,
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
      className: s()(R.e8, R.r$),
      children: [(0, r.jsx)(u.H8$, {
        color: u.LU0.colors.ICON_STRONG,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: N.intl.string(N.t["8OJlsH"])
      })]
    })]
  })
}

function P() {
  return (0, r.jsxs)("div", {
    className: s()(R.pp, R.e8),
    children: [(0, r.jsx)(u.yr3, {
      color: u.LU0.colors.ICON_STRONG,
      size: "refresh_sm"
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "text-strong",
      children: N.intl.string(N.t["0PhgpK"])
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: N.intl.string(N.t.HYg2Hn)
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
    className: s()(R.NJ, {
      [R.j1]: a
    }),
    children: [(0, r.jsx)(g.J, {
      upload: n,
      size: a ? m.L.XSMALL : m.L.XXSMALL
    }), (0, r.jsx)(u.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: R.iW,
      children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0)
    }), (0, r.jsx)(E.Ay, {
      className: R.BX,
      children: (0, r.jsx)(h.A, {
        className: R.XI,
        tooltip: N.intl.string(N.t.N86XcP),
        onClick: () => i(n.id),
        dangerous: true,
        children: (0, r.jsx)(u.ucK, {
          size: "xs",
          color: "currentColor",
          className: R.gE
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
  } = e, o = i.useRef(null), u = i.useRef(null), [h, m] = i.useState(false), g = (0, I.jc)();
  l()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let E = g.channelId;
  l()(null != E, "FileUploadActionComponent must be used inside a channel");
  let O = null == (t = g.modal) ? true : t.customId;
  l()(null != O, "FileUploadActionComponent requires modalCustomId from context");
  let {
    uploadIds: A,
    setUploadIds: x,
    currentUploads: L,
    error: j
  } = (0, C.j)(e), M = (0, c.bG)([b.A], () => b.A.getBasicChannel(E));
  l()(null != M, "FileUploadActionComponent requires a valid channel");
  let k = i.useCallback(e => {
      var t;
      e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && m(true)
    }, []),
    U = i.useCallback(e => {
      var t;
      null != (t = u.current) && t.contains(e.relatedTarget) || m(false)
    }, []),
    G = i.useCallback((e, t) => {
      if (0 === e.length) return;
      if (A.length + e.length > a) return (0, p.openUploadError)({
        title: N.intl.string(N.t.wOr6hB),
        help: N.intl.formatToPlainString(N.t.dy6viJ, {
          maxValues: a
        })
      });
      if ((0, S.fJ)(e, M.guild_id)) return (0, v.V)(M, e);
      let n = e.map(e => {
        let n = (0, T.so)(O),
          r = {
            id: n,
            file: e,
            platform: _.xz.WEB,
            origin: t
          };
        return d.A.setFile({
          channelId: E,
          id: n,
          file: r,
          draftType: y.C.InteractionModal,
          allowOptimization: false
        }), n
      });
      x(A.concat(n))
    }, [A, a, M, x, O, E]),
    V = i.useCallback(e => {
      var t, n;
      e.preventDefault(), m(false), G(Array.from(null != (t = null == (n = e.dataTransfer) ? true : n.files) ? t : []), "drag_drop")
    }, [G]),
    F = e => {
      var t;
      G(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
    },
    B = e => {
      d.A.remove(E, e, y.C.InteractionModal), x(A.filter(t => t !== e))
    };
  return (i.useEffect(() => {
    let e = u.current;
    return null == e || e.addEventListener("dragover", k), null == e || e.addEventListener("dragleave", U), null == e || e.addEventListener("drop", V), () => {
      null == e || e.removeEventListener("dragover", k), null == e || e.removeEventListener("dragleave", U), null == e || e.removeEventListener("drop", V)
    }
  }, [k, U, V]), 1 === a && 1 === L.length) ? (0, r.jsx)(D, {
    upload: L[0],
    handleRemoveFile: B,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: u,
    className: s()(R.kL, {
      [R.Ke]: h,
      [R.z3]: null != j
    }),
    children: [A.length >= a ? (0, r.jsx)(P, {}) : (0, r.jsx)(w, {
      dropping: h,
      fileInputRef: o,
      minValues: n,
      maxValues: a,
      guildId: M.guild_id
    }), L.length > 0 && (0, r.jsx)("div", {
      className: R.aq,
      children: L.map(e => (0, r.jsx)(D, {
        upload: e,
        handleRemoveFile: B
      }, e.id))
    }), (0, r.jsx)(f.A, {
      ref: o,
      onChange: F,
      multiple: a > 1,
      tabIndex: false,
      className: R.Fg
    })]
  })
}