/** Chunk was on 20941 **/
/** chunk id: 162493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function P(e) {
  let {
    dropping: t,
    fileInputRef: n,
    minValues: l,
    maxValues: a,
    guildId: s
  } = e, o = (0, C.o2)(s), c = (0, j.Xq)(o / j.XF, {
    useKibibytes: true,
    useSpace: true
  });
  return (0, r.jsxs)("div", {
    className: I.pp,
    children: [(0, r.jsxs)("div", {
      className: i()(I.e8, {
        [I.R]: t
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
        children: l > 1 ? l === a ? N.intl.format(N.t.SAr31z, {
          minValues: l,
          maxSize: c
        }) : N.intl.format(N.t["ZG+3Ck"], {
          minValues: l,
          maxValues: a,
          maxSize: c
        }) : N.intl.format(N.t.tyxwW1, {
          maxValues: a,
          maxSize: c
        })
      })]
    }), t && (0, r.jsxs)("div", {
      className: i()(I.e8, I.r$),
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

function w() {
  return (0, r.jsxs)("div", {
    className: i()(I.pp, I.e8),
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

function T(e) {
  var t;
  let {
    upload: n,
    handleRemoveFile: l,
    singleFileInput: a
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(I.NJ, {
      [I.j1]: a
    }),
    children: [(0, r.jsx)(g.J, {
      upload: n,
      size: a ? b.L.XSMALL : b.L.XXSMALL
    }), (0, r.jsx)(u.Text, {
      variant: "text-".concat(a ? "md" : "xs", "/medium"),
      className: I.iW,
      children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0)
    }), (0, r.jsx)(x.Ay, {
      className: I.BX,
      children: (0, r.jsx)(h.A, {
        className: I.XI,
        tooltip: N.intl.string(N.t.N86XcP),
        onClick: () => l(n.id),
        dangerous: true,
        children: (0, r.jsx)(u.ucK, {
          size: "xs",
          color: "currentColor",
          className: I.gE
        })
      })
    })]
  }, n.id)
}

function R(e) {
  var t;
  let {
    minValues: n,
    maxValues: a
  } = e, s = l.useRef(null), u = l.useRef(null), [h, b] = l.useState(false), g = (0, O.jc)();
  o()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  let x = g.channelId;
  o()(null != x, "FileUploadActionComponent must be used inside a channel");
  let j = null == (t = g.modal) ? true : t.customId;
  o()(null != j, "FileUploadActionComponent requires modalCustomId from context");
  let {
    uploadIds: C,
    setUploadIds: R,
    currentUploads: L,
    error: D
  } = (0, S.j)(e), k = (0, c.bG)([y.A], () => y.A.getBasicChannel(x));
  o()(null != k, "FileUploadActionComponent requires a valid channel");
  let M = l.useCallback(e => {
      var t;
      e.preventDefault(), (null == (t = e.dataTransfer) ? true : t.types.includes("Files")) && b(true)
    }, []),
    H = l.useCallback(e => {
      var t;
      null != (t = u.current) && t.contains(e.relatedTarget) || b(false)
    }, []),
    U = l.useCallback((e, t) => {
      if (0 === e.length) return;
      if (C.length + e.length > a) return (0, f.openUploadError)({
        title: N.intl.string(N.t.wOr6hB),
        help: N.intl.formatToPlainString(N.t.dy6viJ, {
          maxValues: a
        })
      });
      if ((0, A.fJ)(e, k.guild_id)) return (0, _.V)(k, e);
      let n = e.map(e => {
        let n = (0, E.so)(j),
          r = {
            id: n,
            file: e,
            platform: p.xz.WEB,
            origin: t
          };
        return d.A.setFile({
          channelId: x,
          id: n,
          file: r,
          draftType: v.C.InteractionModal,
          allowOptimization: false
        }), n
      });
      R(C.concat(n))
    }, [C, a, k, R, j, x]),
    F = l.useCallback(e => {
      var t, n;
      e.preventDefault(), b(false), U(Array.from(null != (t = null == (n = e.dataTransfer) ? true : n.files) ? t : []), "drag_drop")
    }, [U]),
    G = e => {
      d.A.remove(x, e, v.C.InteractionModal), R(C.filter(t => t !== e))
    };
  return (l.useEffect(() => {
    let e = u.current;
    return null == e || e.addEventListener("dragover", M), null == e || e.addEventListener("dragleave", H), null == e || e.addEventListener("drop", F), () => {
      null == e || e.removeEventListener("dragover", M), null == e || e.removeEventListener("dragleave", H), null == e || e.removeEventListener("drop", F)
    }
  }, [M, H, F]), 1 === a && 1 === L.length) ? (0, r.jsx)(T, {
    upload: L[0],
    handleRemoveFile: G,
    singleFileInput: true
  }) : (0, r.jsxs)("div", {
    ref: u,
    className: i()(I.kL, {
      [I.Ke]: h,
      [I.z3]: null != D
    }),
    children: [C.length >= a ? (0, r.jsx)(w, {}) : (0, r.jsx)(P, {
      dropping: h,
      fileInputRef: s,
      minValues: n,
      maxValues: a,
      guildId: k.guild_id
    }), L.length > 0 && (0, r.jsx)("div", {
      className: I.aq,
      children: L.map(e => (0, r.jsx)(T, {
        upload: e,
        handleRemoveFile: G
      }, e.id))
    }), (0, r.jsx)(m.A, {
      ref: s,
      onChange: e => {
        var t;
        U(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), e.currentTarget.value = ""
      },
      multiple: a > 1,
      tabIndex: false,
      className: I.Fg
    })]
  })
}