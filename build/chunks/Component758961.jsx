/** Chunk was on 56035 **/
/** chunk id: 758961, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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

function C(e) {
  var n, t, r, C;
  let {
    guildId: N,
    sourceFile: S,
    existingSound: O,
    onClose: E,
    transitionState: P,
    showGuildPicker: I = false
  } = e, [M, Z] = l.useState(null != (t = null != (n = null == S ? true : S.name) ? n : null == O ? true : O.name) ? t : ""), [k, T] = l.useState(null != (r = null == O ? true : O.volume) ? r : 1), [F, D] = l.useState(null == O ? true : O.emojiId), [R, B] = l.useState(null == O ? true : O.emojiName), {
    file: A,
    loadAudioFromFile: U,
    maxVolume: H,
    setMaxVolume: z
  } = (0, p.p)(), [L, G] = l.useState(false), [V, q] = l.useState(null), [W, Y] = l.useState(null), [J, K] = l.useState("ready"), [X, Q] = l.useState(N);
  async function $(e) {
    try {
      await U(null != e ? e : null), K("ready"), q(null)
    } catch (e) {
      ee(e)
    }
  }

  function ee(e) {
    if (e instanceof u.Z) q(e);
    else if (e instanceof Error) {
      let n = {
        status: 500,
        body: {
          message: e.message
        }
      };
      q(new u.Z(n))
    } else q(new u.Z(e))
  }
  l.useEffect(() => {
    (null == S ? true : S.file) != null && e(S.file);
    async function e(e) {
      try {
        await U(e), K("ready"), q(null)
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
    el = M.length >= 2 && (ea || null != A) && null != X && function(e) {
      if (null == e) returntrue;
      let n = (e.endMs - e.startMs) / 1e3;
      return n > 0 && n <= v.YW
    }(W),
    er = l.useCallback(async (e, n) => {
      K("encoding");
      try {
        let t = await (0, b.kV)(e, n);
        return K("ready"), t
      } catch (e) {
        throw K("encoding-failed"), e
      }
    }, []),
    ei = l.useCallback(async () => {
      if (null == A) return;
      i()(null != X, "Cannot submit soundboard sound with no guildId");
      let e = A;
      if (null != W) {
        let n = await er(A, W);
        if (null == n) return;
        e = n
      }
      let n = (0, b.Zk)(e);
      K("uploading");
      try {
        await (0, b.bb)({
          readPromise: n,
          guildId: X,
          name: M,
          volume: k,
          emojiId: F,
          emojiName: R
        }), K("ready")
      } catch (e) {
        throw new u.Z(e)
      }
    }, [A, X, M, er, W, k, F, R]),
    eo = l.useCallback(async () => {
      i()(null != X, "Cannot submit soundboard sound with no guildId"), G(true), q(null);
      try {
        ea ? await (0, g.$d)({
          guildId: X,
          soundId: O.soundId,
          name: M,
          volume: k,
          emojiId: F,
          emojiName: R
        }) : (await ei(), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBA), s.ToastType.SUCCESS))), E()
      } catch (e) {
        ee(e)
      } finally {
        K("ready"), G(false), T(1), z(1)
      }
    }, [ea, E, X, O, M, k, F, R, ei, z]);
  (0, c.ZP)(() => {
    U(null), m.default.track(x.rMx.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: X
    })
  }), l.useEffect(() => {
    T(Math.min(k, H))
  }, [k, T, H]);
  let es = (0, a.jsx)(d.Z, {
      guildId: X,
      emojiId: F,
      emojiName: R,
      setEmojiId: D,
      setEmojiName: B,
      error: null == V ? true : V.getFirstFieldErrorMessage("emoji"),
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
  return (0, a.jsx)(o.Modal, {
    onClose: E,
    transitionState: P,
    title: ea ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t["ioD/9P"]),
    actions: eu,
    children: (0, a.jsxs)(o.C3N, {
      children: [null != V && !V.hasFieldErrors() && (0, a.jsx)(s.kzN, {
        className: w.section,
        children: V.message
      }), I ? (0, a.jsx)(y.Z, {
        label: j.intl.string(j.t.UYt7iY),
        value: X,
        onChange: Q
      }) : null, (ea || null != A) && (0, a.jsx)(h.Z, {
        sound: O,
        volume: k,
        disabled: et,
        onChange: Y
      }), ea || null != S ? null : (0, a.jsx)(o.gNt, {
        required: true,
        errorMessage: null == V ? true : V.getFirstFieldErrorMessage("sound"),
        label: j.intl.string(j.t.sSHaGx),
        children: (0, a.jsx)(f.Z, {
          filename: null != (C = null == A ? true : A.name) ? C : "",
          buttonText: j.intl.string(j.t.zpi3XF),
          placeholder: j.intl.string(j.t["x+YULy"]),
          onFileSelect: $,
          filters: _
        })
      }), (0, a.jsxs)(o.NIo, {
        children: [(0, a.jsx)(s.oil, {
          required: true,
          label: j.intl.string(j.t.NpJGaG),
          placeholder: j.intl.string(j.t.NpJGaG),
          error: null == V ? true : V.getFirstFieldErrorMessage("name"),
          value: M,
          onChange: Z,
          maxLength: v.Ek
        }), es]
      }), (0, a.jsx)(s.iRW, {
        label: j.intl.string(j.t["3CJlb2"]),
        errorMessage: null == V ? true : V.getFirstFieldErrorMessage("volume"),
        helperText: null != en ? en : true,
        initialValue: k,
        onValueChange: e => T(e),
        minValue: 0,
        maxValue: H
      })]
    })
  })
}