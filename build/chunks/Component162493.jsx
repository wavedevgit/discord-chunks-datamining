/** Chunk was on 49559 **/
/** chunk id: 162493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function _(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: l,
    maxValues: a,
    guildId: o
  } = e, s = (0, v.o2)(o), c = (0, A.Xq)(s / A.XF, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: S.pp,
    children: [(0, r.jsxs)("div", {
      className: i()(S.e8, {
        [S.R]: t
      }),
      children: [(0, r.jsx)(u.H8$, {
        color: u.LU0.colors.ICON_STRONG,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: P.intl.format(P.t.y68I8P, {
          onClick: () => {
            var e;
            return null == (e = n.current) ? true : e.activateUploadDialogue()
          },
          maxValues: a
        })
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: l > 1 ? l === a ? P.intl.format(P.t.SAr31z, {
          minValues: l,
          maxSize: c
        }) : P.intl.format(P.t["ZG+3Ck"], {
          minValues: l,
          maxValues: a,
          maxSize: c
        }) : P.intl.format(P.t.tyxwW1, {
          maxValues: a,
          maxSize: c
        })
      })]
    }), t && (0, r.jsxs)("div", {
      className: i()(S.e8, S.r$),
      children: [(0, r.jsx)(u.H8$, {
        color: u.LU0.colors.ICON_STRONG,
        size: "refresh_sm"
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: P.intl.string(P.t["8OJlsH"])
      })]
    })]
  })
}

function T() {
  return (0, r.jsxs)("div", {
    className: i()(S.pp, S.e8),
    children: [(0, r.jsx)(u.yr3, {
      color: u.LU0.colors.ICON_STRONG,
      size: "refresh_sm"
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "text-strong",
      children: P.intl.string(P.t["0PhgpK"])
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: P.intl.string(P.t.HYg2Hn)
    })]
  })
}

function R(e) {
  var t;
  let {
    upload: n,
    handleRemoveFile: l,
    singleFileInput: a
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(S.NJ, {
      [S.j1]: a
    }),
    children: [(0, r.jsx)(y.J, {
      upload: n,
      size: a ? b.L.XSMALL : b.L.XXSMALL
    }), (0, r.jsx)(u.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: S.iW,
      children: null != (t = n.filename) ? t : P.intl.string(P.t.ZMirp0)
    }), (0, r.jsx)(h.Ay, {
      className: S.BX,
      children: (0, r.jsx)(O.A, {
        className: S.XI,
        tooltip: P.intl.string(P.t.N86XcP),
        onClick: () => l(n.id),
        dangerous: true,
        children: (0, r.jsx)(u.ucK, {
          size: "xs",
          color: "currentColor",
          className: S.gE
        })
      })
    })]
  }, n.id)
}

function w(e) {
  var t;
  let {
    minValues: n,
    maxValues: a
  } = e, o = l.useRef(null), u = l.useRef(null), [O, b] = l.useState(false), y = (0, x.jc)();
  s()(null != y, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let h = y.channelId;
  s()(null != h, "FileUploadActionComponent must be used inside a channel");
  let A = null == (t = y.modal) ? true : t.customId;
  s()(null != A, "FileUploadActionComponent requires modalCustomId from context");
  let {
    uploadIds: v,
    setUploadIds: w,
    currentUploads: D,
    error: L
  } = (0, I.j)(e), k = (0, c.bG)([j.A], () => j.A.getBasicChannel(h));
  s()(null != k, "FileUploadActionComponent requires a valid channel");
  let U = l.useCallback(e => {
      var t;
      e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && b(true)
    }, []),
    M = l.useCallback(e => {
      var t;
      null != (t = u.current) && t.contains(e.relatedTarget) || b(false)
    }, []),
    H = l.useCallback((e, t) => {
      if (0 === e.length) return;
      if (v.length + e.length > a) return (0, m.openUploadError)({
        title: P.intl.string(P.t.wOr6hB),
        help: P.intl.formatToPlainString(P.t.dy6viJ, {
          maxValues: a
        })
      });
      if ((0, C.fJ)(e, k.guild_id)) return (0, E.V)(k, e);
      let n = e.map(e => {
        let n = (0, N.so)(A),
          r = {
            id: n,
            file: e,
            platform: f.xz.WEB,
            origin: t
          };
        return d.A.setFile({
          channelId: h,
          id: n,
          file: r,
          draftType: g.C.InteractionModal,
          allowOptimization: false
        }), n
      });
      w(v.concat(n))
    }, [v, a, k, w, A, h]),
    K = l.useCallback(e => {
      var t, n;
      e.preventDefault(), b(false), H(Array.from(null != (t = null == (n = e.dataTransfer) ? true : n.files) ? t : []), "drag_drop")
    }, [H]),
    F = e => {
      d.A.remove(h, e, g.C.InteractionModal), w(v.filter(t => t !== e))
    };
  return (l.useEffect(() => {
    let e = u.current;
    return null == e || e.addEventListener("dragover", U), null == e || e.addEventListener("dragleave", M), null == e || e.addEventListener("drop", K), () => {
      null == e || e.removeEventListener("dragover", U), null == e || e.removeEventListener("dragleave", M), null == e || e.removeEventListener("drop", K)
    }
  }, [U, M, K]), 1 === a && 1 === D.length) ? (0, r.jsx)(R, {
    upload: D[0],
    handleRemoveFile: F,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: u,
    className: i()(S.kL, {
      [S.Ke]: O,
      [S.z3]: null != L
    }),
    children: [v.length >= a ? (0, r.jsx)(T, {}) : (0, r.jsx)(_, {
      dropping: O,
      fileInputRef: o,
      minValues: n,
      maxValues: a,
      guildId: k.guild_id
    }), D.length > 0 && (0, r.jsx)("div", {
      className: S.aq,
      children: D.map(e => (0, r.jsx)(R, {
        upload: e,
        handleRemoveFile: F
      }, e.id))
    }), (0, r.jsx)(p.A, {
      ref: o,
      onChange: e => {
        var t;
        H(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
      },
      multiple: a > 1,
      tabIndex: false,
      className: S.Fg
    })]
  })
}