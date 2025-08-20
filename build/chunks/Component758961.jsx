/** Chunk was on 56035 **/
/** chunk id: 758961, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk82659 = require("./82659.jsx"),
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
let C = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"]
}];

function S(e) {
  var n, t, i, o;
  let {
    guildId: S,
    sourceFile: O,
    existingSound: E,
    onClose: I,
    transitionState: P,
    showGuildPicker: k = false
  } = e, [Z, M] = l.useState(null != (t = null != (n = null == O ? true : O.name) ? n : null == E ? true : E.name) ? t : ""), [T, F] = l.useState(null != (i = null == E ? true : E.volume) ? i : 1), [D, R] = l.useState(null == E ? true : E.emojiId), [B, H] = l.useState(null == E ? true : E.emojiName), {
    file: A,
    loadAudioFromFile: U,
    maxVolume: z,
    setMaxVolume: L
  } = (0, b.p)(), [G, W] = l.useState(false), [q, V] = l.useState(null), [J, Y] = l.useState(null), [K, X] = l.useState("ready"), [Q, $] = l.useState(S);
  async function ee(e) {
    try {
      await U(null != e ? e : null), X("ready"), V(null)
    } catch (e) {
      en(e)
    }
  }

  function en(e) {
    if (e instanceof d.Z) V(e);
    else if (e instanceof Error) {
      let n = {
        status: 500,
        body: {
          message: e.message
        }
      };
      V(new d.Z(n))
    } else V(new d.Z(e))
  }
  l.useEffect(() => {
    (null == O ? true : O.file) != null && e(O.file);
    async function e(e) {
      try {
        await U(e), X("ready"), V(null)
      } catch (e) {
        en(e)
      }
    }
  }, [null == O ? true : O.file, U]);
  let et = function(e) {
      switch (e) {
        case "encoding":
          return w.intl.string(w.t["4IMMdH"]);
        case "encoding-failed":
          return w.intl.string(w.t.Ka29xs);
        case "uploading":
          return w.intl.string(w.t.ndr58f)
      }
      return null
    }(K),
    ea = "uploading" === K || "encoding" === K,
    el = null != E,
    ei = Z.length >= 2 && (el || null != A) && null != Q && function(e) {
      if (null == e) returntrue;
      let n = (e.endMs - e.startMs) / 1e3;
      return n > 0 && n <= j.YW
    }(J),
    er = l.useCallback(async (e, n) => {
      X("encoding");
      try {
        let t = await (0, v.kV)(e, n);
        return X("ready"), t
      } catch (e) {
        throw X("encoding-failed"), e
      }
    }, []),
    eo = l.useCallback(async () => {
      if (null == A) return;
      s()(null != Q, "Cannot submit soundboard sound with no guildId");
      let e = A;
      if (null != J) {
        let n = await er(A, J);
        if (null == n) return;
        e = n
      }
      let n = (0, v.Zk)(e);
      X("uploading");
      try {
        await (0, v.bb)({
          readPromise: n,
          guildId: Q,
          name: Z,
          volume: T,
          emojiId: D,
          emojiName: B
        }), X("ready")
      } catch (e) {
        throw new d.Z(e)
      }
    }, [A, Q, Z, er, J, T, D, B]),
    es = l.useCallback(async () => {
      s()(null != Q, "Cannot submit soundboard sound with no guildId"), W(true), V(null);
      try {
        el ? await (0, p.$d)({
          guildId: Q,
          soundId: E.soundId,
          name: Z,
          volume: T,
          emojiId: D,
          emojiName: B
        }) : (await eo(), (0, c.showToast)((0, c.createToast)(w.intl.string(w.t.T7dhBA), c.ToastType.SUCCESS))), I()
      } catch (e) {
        en(e)
      } finally {
        X("ready"), W(false), F(1), L(1)
      }
    }, [el, I, Q, E, Z, T, D, B, eo, L]);
  (0, f.ZP)(() => {
    U(null), g.default.track(_.rMx.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: Q
    })
  }), l.useEffect(() => {
    F(Math.min(T, z))
  }, [T, F, z]);
  let eu = (0, a.jsx)(m.Z, {
      guildId: Q,
      emojiId: D,
      emojiName: B,
      setEmojiId: R,
      setEmojiName: H,
      error: null == q ? true : q.getFirstFieldErrorMessage("emoji"),
      isRequiredField: false
    }),
    ec = l.useMemo(() => [{
      variant: "secondary",
      text: w.intl.string(w.t.Khpixc),
      onClick: I,
      disabled: G
    }, {
      text: el ? w.intl.string(w.t["bZY17+"]) : w.intl.string(w.t.RGJbYG),
      onClick: es,
      variant: "primary",
      disabled: !ei,
      loading: G
    }], [es, ei, G, el, I]);
  return (0, a.jsxs)(u.Modal, {
    onClose: I,
    transitionState: P,
    title: el ? w.intl.string(w.t.HmsZGR) : w.intl.string(w.t["ioD/9P"]),
    actions: ec,
    children: [null != q && !q.hasFieldErrors() && (0, a.jsx)(c.kzN, {
      className: N.section,
      children: q.message
    }), k ? (0, a.jsx)(c.xJW, {
      required: true,
      className: N.section,
      title: w.intl.string(w.t.UYt7iY),
      children: (0, a.jsx)(x.Z, {
        value: Q,
        onChange: $
      })
    }) : null, (el || null != A) && (0, a.jsx)(y.Z, {
      sound: E,
      volume: T,
      disabled: ea,
      onChange: Y
    }), el || null != O ? null : (0, a.jsx)(c.xJW, {
      required: true,
      error: null == q ? true : q.getFirstFieldErrorMessage("sound"),
      className: N.section,
      title: w.intl.string(w.t.sSHaGx),
      children: (0, a.jsx)(h.Z, {
        filename: null != (o = null == A ? true : A.name) ? o : "",
        buttonText: w.intl.string(w.t.zpi3XF),
        placeholder: w.intl.string(w.t["x+YULy"]),
        onFileSelect: ee,
        filters: C
      })
    }), (0, a.jsxs)("div", {
      className: N.multiInput,
      children: [(0, a.jsx)(c.xJW, {
        required: true,
        error: null == q ? true : q.getFirstFieldErrorMessage("name"),
        className: r()(N.section, N.halfInput),
        title: w.intl.string(w.t.NpJGaG),
        children: (0, a.jsx)(c.oil, {
          placeholder: w.intl.string(w.t.NpJGaG),
          value: Z,
          onChange: M,
          maxLength: j.Ek
        })
      }), eu]
    }), (0, a.jsx)(c.xJW, {
      error: null == q ? true : q.getFirstFieldErrorMessage("volume"),
      className: N.section,
      title: w.intl.string(w.t["3CJlb2"]),
      children: (0, a.jsx)(c.iRW, {
        initialValue: T,
        onValueChange: e => F(e),
        minValue: 0,
        maxValue: z
      })
    }), null != et && (0, a.jsx)("div", {
      className: N.soundStateHint,
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: et
      })
    })]
  })
}