/** Chunk was on 40556 **/
/** chunk id: 6503, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk964486 = require("./964486.js"),
  Chunk78213 = require("./78213.jsx"),
  Chunk643374 = require("./643374.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk796774 = require("./796774.js"),
  Chunk461123 = require("./461123.jsx"),
  Chunk236972 = require("./236972.js"),
  Chunk352024 = require("./352024.js"),
  Chunk698154 = require("./698154.jsx"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let w = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"]
}];

function N(e) {
  var t, n, a, N;
  let {
    guildId: O,
    sourceFile: A,
    existingSound: C,
    onClose: S,
    transitionState: P,
    showGuildPicker: E = false
  } = e, [M, k] = i.useState(null != (t = null != (n = null == A ? true : A.name) ? n : null == C ? true : C.name) ? t : ""), [T, D] = i.useState(null != (a = null == C ? true : C.volume) ? a : 1), [I, F] = i.useState(null == C ? true : C.emojiId), [L, R] = i.useState(null == C ? true : C.emojiName), {
    file: U,
    loadAudioFromFile: _,
    maxVolume: J,
    setMaxVolume: G
  } = (0, v.L)(), [V, z] = i.useState(false), [B, Y] = i.useState(null), [q, H] = i.useState(null), [W, X] = i.useState("ready"), [K, Q] = i.useState(O);
  async function $(e) {
    try {
      await _(null != e ? e : null), X("ready"), Y(null)
    } catch (e) {
      Z(e)
    }
  }

  function Z(e) {
    if (e instanceof o.A) Y(e);
    else if (e instanceof Error) {
      let t = {
        status: 500,
        body: {
          message: e.message
        }
      };
      Y(new o.A(t))
    } else Y(new o.A(e))
  }
  i.useEffect(() => {
    (null == A ? true : A.file) != null && e(A.file);
    async function e(e) {
      try {
        await _(e), X("ready"), Y(null)
      } catch (e) {
        Z(e)
      }
    }
  }, [null == A ? true : A.file, _]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return y.intl.string(y.t["4IMMdB"]);
        case "encoding-failed":
          return y.intl.string(y.t.Ka29xq);
        case "uploading":
          return y.intl.string(y.t.ndr58Q)
      }
      return null
    }(W),
    et = "uploading" === W || "encoding" === W,
    en = null != C,
    el = M.length >= 2 && (en || null != U) && null != K && function(e) {
      if (null == e) returntrue;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= p.cT
    }(q),
    ei = i.useCallback(async (e, t) => {
      X("encoding");
      try {
        let n = await (0, b.Yo)(e, t);
        return X("ready"), n
      } catch (e) {
        throw X("encoding-failed"), e
      }
    }, []),
    ea = i.useCallback(async () => {
      if (null == U) return;
      r()(null != K, "Cannot submit soundboard sound with no guildId");
      let e = U;
      if (null != q) {
        let t = await ei(U, q);
        if (null == t) return;
        e = t
      }
      let t = (0, b.YK)(e);
      X("uploading");
      try {
        await (0, b.JX)({
          readPromise: t,
          guildId: K,
          name: M,
          volume: T,
          emojiId: I,
          emojiName: L
        }), X("ready")
      } catch (e) {
        throw new o.A(e)
      }
    }, [U, K, M, ei, q, T, I, L]),
    er = i.useCallback(async () => {
      r()(null != K, "Cannot submit soundboard sound with no guildId"), z(true), Y(null);
      try {
        en ? await (0, g.xV)({
          guildId: K,
          soundId: C.soundId,
          name: M,
          volume: T,
          emojiId: I,
          emojiName: L
        }) : (await ea(), (0, u.showToast)((0, u.createToast)(y.intl.string(y.t.T7dhBL), u.ToastType.SUCCESS))), S()
      } catch (e) {
        Z(e)
      } finally {
        X("ready"), z(false), D(1), G(1)
      }
    }, [en, S, K, C, M, T, I, L, ea, G]);
  (0, c.Ay)(() => {
    _(null), m.default.track(j.HAw.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: K
    })
  }), i.useEffect(() => {
    D(Math.min(T, J))
  }, [T, D, J]);
  let es = (0, l.jsx)(d.A, {
      guildId: K,
      emojiId: I,
      emojiName: L,
      setEmojiId: F,
      setEmojiName: R,
      error: null == B ? true : B.getFirstFieldErrorMessage("emoji"),
      isRequiredField: false
    }),
    eu = i.useMemo(() => [{
      variant: "secondary",
      text: y.intl.string(y.t.Khpixd),
      onClick: S,
      disabled: V
    }, {
      text: en ? y.intl.string(y.t.bZY171) : y.intl.string(y.t.RGJbYB),
      onClick: er,
      variant: "primary",
      disabled: !el,
      loading: V
    }], [er, el, V, en, S]);
  return (0, l.jsx)(s.Modal, {
    onClose: S,
    transitionState: P,
    title: en ? y.intl.string(y.t.HmsZGS) : y.intl.string(y.t["ioD/9I"]),
    actions: eu,
    children: (0, l.jsxs)(s.nVY, {
      children: [null != B && !B.hasFieldErrors() && (0, l.jsx)(s.wx6, {
        type: "critical",
        children: B.message
      }), E ? (0, l.jsx)(x.A, {
        label: y.intl.string(y.t.UYt7iQ),
        value: K,
        onChange: Q
      }) : null, (en || null != U) && (0, l.jsx)(h.A, {
        sound: C,
        volume: T,
        disabled: et,
        onChange: H
      }), en || null != A ? null : (0, l.jsx)(s.D0$, {
        required: true,
        errorMessage: null == B ? true : B.getFirstFieldErrorMessage("sound"),
        label: y.intl.string(y.t.sSHaG7),
        children: (0, l.jsx)(f.A, {
          filename: null != (N = null == U ? true : U.name) ? N : "",
          buttonText: y.intl.string(y.t.zpi3XG),
          placeholder: y.intl.string(y.t["x+YUL9"]),
          onFileSelect: $,
          filters: w
        })
      }), (0, l.jsxs)(s.M_l, {
        children: [(0, l.jsx)(u.ksK, {
          required: true,
          label: y.intl.string(y.t.NpJGaM),
          placeholder: y.intl.string(y.t.NpJGaM),
          error: null == B ? true : B.getFirstFieldErrorMessage("name"),
          value: M,
          onChange: k,
          maxLength: p.Ah
        }), es]
      }), (0, l.jsx)(u.Apm, {
        label: y.intl.string(y.t["3CJlb1"]),
        errorMessage: null == B ? true : B.getFirstFieldErrorMessage("volume"),
        helperText: null != ee ? ee : true,
        initialValue: T,
        onValueChange: e => D(e),
        minValue: 0,
        maxValue: J
      })]
    })
  })
}