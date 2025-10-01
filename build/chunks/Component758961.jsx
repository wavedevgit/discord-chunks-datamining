/** Chunk was on 56035 **/
/** chunk id: 758961, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk493773 = require("./493773.js"),
  Chunk349709 = require("./349709.jsx"),
  Chunk763610 = require("./763610.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk208049 = require("./208049.js"),
  Chunk671895 = require("./671895.jsx"),
  Chunk586826 = require("./586826.js"),
  Chunk812613 = require("./812613.js"),
  Chunk203437 = require("./203437.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk711816 = require("./711816.js");
let _ = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"]
}];

function N(e) {
  var n, t, i, N;
  let {
    guildId: C,
    sourceFile: S,
    existingSound: O,
    onClose: E,
    transitionState: I,
    showGuildPicker: P = false
  } = e, [Z, k] = l.useState(null != (t = null != (n = null == S ? true : S.name) ? n : null == O ? true : O.name) ? t : ""), [M, T] = l.useState(null != (i = null == O ? true : O.volume) ? i : 1), [F, D] = l.useState(null == O ? true : O.emojiId), [R, B] = l.useState(null == O ? true : O.emojiName), {
    file: H,
    loadAudioFromFile: U,
    maxVolume: A,
    setMaxVolume: z
  } = (0, p.p)(), [L, G] = l.useState(false), [q, V] = l.useState(null), [W, Y] = l.useState(null), [J, K] = l.useState("ready"), [X, Q] = l.useState(C);
  async function $(e) {
    try {
      await U(null != e ? e : null), K("ready"), V(null)
    } catch (e) {
      ee(e)
    }
  }

  function ee(e) {
    if (e instanceof u.Z) V(e);
    else if (e instanceof Error) {
      let n = {
        status: 500,
        body: {
          message: e.message
        }
      };
      V(new u.Z(n))
    } else V(new u.Z(e))
  }
  l.useEffect(() => {
    (null == S ? true : S.file) != null && e(S.file);
    async function e(e) {
      try {
        await U(e), K("ready"), V(null)
      } catch (e) {
        ee(e)
      }
    }
  }, [null == S ? true : S.file, U]);
  let en = function(e) {
      switch (e) {
        case "encoding":
          return j.intl.string(j.t["4IMMdH"]);
        case "encoding-failed":
          return j.intl.string(j.t.Ka29xs);
        case "uploading":
          return j.intl.string(j.t.ndr58f)
      }
      return null
    }(J),
    et = "uploading" === J || "encoding" === J,
    ea = null != O,
    el = Z.length >= 2 && (ea || null != H) && null != X && function(e) {
      if (null == e) returntrue;
      let n = (e.endMs - e.startMs) / 1e3;
      return n > 0 && n <= v.YW
    }(W),
    ei = l.useCallback(async (e, n) => {
      K("encoding");
      try {
        let t = await (0, y.kV)(e, n);
        return K("ready"), t
      } catch (e) {
        throw K("encoding-failed"), e
      }
    }, []),
    er = l.useCallback(async () => {
      if (null == H) return;
      r()(null != X, "Cannot submit soundboard sound with no guildId");
      let e = H;
      if (null != W) {
        let n = await ei(H, W);
        if (null == n) return;
        e = n
      }
      let n = (0, y.Zk)(e);
      K("uploading");
      try {
        await (0, y.bb)({
          readPromise: n,
          guildId: X,
          name: Z,
          volume: M,
          emojiId: F,
          emojiName: R
        }), K("ready")
      } catch (e) {
        throw new u.Z(e)
      }
    }, [H, X, Z, ei, W, M, F, R]),
    eo = l.useCallback(async () => {
      r()(null != X, "Cannot submit soundboard sound with no guildId"), G(true), V(null);
      try {
        ea ? await (0, g.$d)({
          guildId: X,
          soundId: O.soundId,
          name: Z,
          volume: M,
          emojiId: F,
          emojiName: R
        }) : (await er(), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBA), s.ToastType.SUCCESS))), E()
      } catch (e) {
        ee(e)
      } finally {
        K("ready"), G(false), T(1), z(1)
      }
    }, [ea, E, X, O, Z, M, F, R, er, z]);
  (0, c.ZP)(() => {
    U(null), m.default.track(x.rMx.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: X
    })
  }), l.useEffect(() => {
    T(Math.min(M, A))
  }, [M, T, A]);
  let es = (0, a.jsx)(d.Z, {
      guildId: X,
      emojiId: F,
      emojiName: R,
      setEmojiId: D,
      setEmojiName: B,
      error: null == q ? true : q.getFirstFieldErrorMessage("emoji"),
      isRequiredField: false
    }),
    eu = l.useMemo(() => [{
      variant: "secondary",
      text: j.intl.string(j.t.Khpixc),
      onClick: E,
      disabled: L
    }, {
      text: ea ? j.intl.string(j.t["bZY17+"]) : j.intl.string(j.t.RGJbYG),
      onClick: eo,
      variant: "primary",
      disabled: !el,
      loading: L
    }], [eo, el, L, ea, E]);
  return (0, a.jsxs)(o.Modal, {
    onClose: E,
    transitionState: I,
    title: ea ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t["ioD/9P"]),
    actions: eu,
    children: [null != q && !q.hasFieldErrors() && (0, a.jsx)(s.kzN, {
      className: w.section,
      children: q.message
    }), P ? (0, a.jsx)(s.xJW, {
      required: true,
      className: w.section,
      title: j.intl.string(j.t.UYt7iY),
      children: (0, a.jsx)(b.Z, {
        value: X,
        onChange: Q
      })
    }) : null, (ea || null != H) && (0, a.jsx)(h.Z, {
      sound: O,
      volume: M,
      disabled: et,
      onChange: Y
    }), ea || null != S ? null : (0, a.jsx)(s.xJW, {
      required: true,
      error: null == q ? true : q.getFirstFieldErrorMessage("sound"),
      className: w.section,
      title: j.intl.string(j.t.sSHaGx),
      children: (0, a.jsx)(f.Z, {
        filename: null != (N = null == H ? true : H.name) ? N : "",
        buttonText: j.intl.string(j.t.zpi3XF),
        placeholder: j.intl.string(j.t["x+YULy"]),
        onFileSelect: $,
        filters: _
      })
    }), (0, a.jsxs)("div", {
      className: w.multiInput,
      children: [(0, a.jsx)(s.oil, {
        required: true,
        label: j.intl.string(j.t.NpJGaG),
        placeholder: j.intl.string(j.t.NpJGaG),
        error: null == q ? true : q.getFirstFieldErrorMessage("name"),
        value: Z,
        onChange: k,
        maxLength: v.Ek
      }), es]
    }), (0, a.jsx)(s.xJW, {
      error: null == q ? true : q.getFirstFieldErrorMessage("volume"),
      className: w.section,
      title: j.intl.string(j.t["3CJlb2"]),
      children: (0, a.jsx)(s.iRW, {
        initialValue: M,
        onValueChange: e => T(e),
        minValue: 0,
        maxValue: A
      })
    }), null != en && (0, a.jsx)("div", {
      className: w.soundStateHint,
      children: (0, a.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: en
      })
    })]
  })
}