/** Chunk was on 56035 **/
/** chunk id: 758961, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk388032 = require("./388032.jsx");
let w = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"]
}];

function _(e) {
  var n, t, r, _;
  let {
    guildId: C,
    sourceFile: N,
    existingSound: S,
    onClose: O,
    transitionState: E,
    showGuildPicker: P = false
  } = e, [I, M] = l.useState(null != (t = null != (n = null == N ? true : N.name) ? n : null == S ? true : S.name) ? t : ""), [Z, k] = l.useState(null != (r = null == S ? true : S.volume) ? r : 1), [T, F] = l.useState(null == S ? true : S.emojiId), [D, R] = l.useState(null == S ? true : S.emojiName), {
    file: B,
    loadAudioFromFile: A,
    maxVolume: U,
    setMaxVolume: H
  } = (0, p.p)(), [z, L] = l.useState(false), [G, V] = l.useState(null), [q, W] = l.useState(null), [Y, J] = l.useState("ready"), [K, X] = l.useState(C);
  async function Q(e) {
    try {
      await A(null != e ? e : null), J("ready"), V(null)
    } catch (e) {
      $(e)
    }
  }

  function $(e) {
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
    (null == N ? true : N.file) != null && e(N.file);
    async function e(e) {
      try {
        await A(e), J("ready"), V(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == N ? true : N.file, A]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return j.intl.string(j.t["4IMMdH"]);
        case "encoding-failed":
          return j.intl.string(j.t.Ka29xs);
        case "uploading":
          return j.intl.string(j.t.ndr58f)
      }
      return null
    }(Y),
    en = "uploading" === Y || "encoding" === Y,
    et = null != S,
    ea = I.length >= 2 && (et || null != B) && null != K && function(e) {
      if (null == e) returntrue;
      let n = (e.endMs - e.startMs) / 1e3;
      return n > 0 && n <= v.YW
    }(q),
    el = l.useCallback(async (e, n) => {
      J("encoding");
      try {
        let t = await (0, b.kV)(e, n);
        return J("ready"), t
      } catch (e) {
        throw J("encoding-failed"), e
      }
    }, []),
    er = l.useCallback(async () => {
      if (null == B) return;
      i()(null != K, "Cannot submit soundboard sound with no guildId");
      let e = B;
      if (null != q) {
        let n = await el(B, q);
        if (null == n) return;
        e = n
      }
      let n = (0, b.Zk)(e);
      J("uploading");
      try {
        await (0, b.bb)({
          readPromise: n,
          guildId: K,
          name: I,
          volume: Z,
          emojiId: T,
          emojiName: D
        }), J("ready")
      } catch (e) {
        throw new u.Z(e)
      }
    }, [B, K, I, el, q, Z, T, D]),
    ei = l.useCallback(async () => {
      i()(null != K, "Cannot submit soundboard sound with no guildId"), L(true), V(null);
      try {
        et ? await (0, g.$d)({
          guildId: K,
          soundId: S.soundId,
          name: I,
          volume: Z,
          emojiId: T,
          emojiName: D
        }) : (await er(), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBA), s.ToastType.SUCCESS))), O()
      } catch (e) {
        $(e)
      } finally {
        J("ready"), L(false), k(1), H(1)
      }
    }, [et, O, K, S, I, Z, T, D, er, H]);
  (0, c.ZP)(() => {
    A(null), m.default.track(x.rMx.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: K
    })
  }), l.useEffect(() => {
    k(Math.min(Z, U))
  }, [Z, k, U]);
  let eo = (0, a.jsx)(d.Z, {
      guildId: K,
      emojiId: T,
      emojiName: D,
      setEmojiId: F,
      setEmojiName: R,
      error: null == G ? true : G.getFirstFieldErrorMessage("emoji"),
      isRequiredField: false
    }),
    es = l.useMemo(() => [{
      variant: "secondary",
      text: j.intl.string(j.t.Khpixc),
      onClick: O,
      disabled: z
    }, {
      text: et ? j.intl.string(j.t["bZY17+"]) : j.intl.string(j.t.RGJbYG),
      onClick: ei,
      variant: "primary",
      disabled: !ea,
      loading: z
    }], [ei, ea, z, et, O]);
  return (0, a.jsx)(o.Modal, {
    onClose: O,
    transitionState: E,
    title: et ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t["ioD/9P"]),
    actions: es,
    children: (0, a.jsxs)(o.C3N, {
      children: [null != G && !G.hasFieldErrors() && (0, a.jsx)(o.M14, {
        type: "critical",
        children: G.message
      }), P ? (0, a.jsx)(y.Z, {
        label: j.intl.string(j.t.UYt7iY),
        value: K,
        onChange: X
      }) : null, (et || null != B) && (0, a.jsx)(h.Z, {
        sound: S,
        volume: Z,
        disabled: en,
        onChange: W
      }), et || null != N ? null : (0, a.jsx)(o.gNt, {
        required: true,
        errorMessage: null == G ? true : G.getFirstFieldErrorMessage("sound"),
        label: j.intl.string(j.t.sSHaGx),
        children: (0, a.jsx)(f.Z, {
          filename: null != (_ = null == B ? true : B.name) ? _ : "",
          buttonText: j.intl.string(j.t.zpi3XF),
          placeholder: j.intl.string(j.t["x+YULy"]),
          onFileSelect: Q,
          filters: w
        })
      }), (0, a.jsxs)(o.NIo, {
        children: [(0, a.jsx)(s.oil, {
          required: true,
          label: j.intl.string(j.t.NpJGaG),
          placeholder: j.intl.string(j.t.NpJGaG),
          error: null == G ? true : G.getFirstFieldErrorMessage("name"),
          value: I,
          onChange: M,
          maxLength: v.Ek
        }), eo]
      }), (0, a.jsx)(s.iRW, {
        label: j.intl.string(j.t["3CJlb2"]),
        errorMessage: null == G ? true : G.getFirstFieldErrorMessage("volume"),
        helperText: null != ee ? ee : true,
        initialValue: Z,
        onValueChange: e => k(e),
        minValue: 0,
        maxValue: U
      })]
    })
  })
}