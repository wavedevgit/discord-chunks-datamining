/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk36793 = require("./36793.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk339085 = require("./339085.js"),
  Chunk349709 = require("./349709.jsx"),
  Chunk763610 = require("./763610.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk424218 = require("./424218.js"),
  Chunk63063 = require("./63063.js"),
  Chunk956664 = require("./956664.js"),
  Chunk268350 = require("./268350.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491202 = require("./491202.js");
let N = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  O = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function k(e, t) {
  p.default.track(w.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let P = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: I.preview,
    children: [(0, n.jsx)("div", {
      className: I.previewDark,
      children: null != t ? t : (0, n.jsx)(u.FmF, {
        size: "lg",
        color: "currentColor",
        "aria-label": C.intl.string(C.t.qOsjZh)
      })
    }), (0, n.jsx)("div", {
      className: I.previewLight,
      children: null != t ? t : (0, n.jsx)(u.FmF, {
        size: "lg",
        color: "currentColor",
        "aria-label": C.intl.string(C.t.YC5NAI)
      })
    })]
  })
};
async function D(e) {
  let t = await (0, x.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, a.Ae)(l, 320, 320);
  return (0, x.Bo)(n, e.name, "image/png")
}

function Z(e) {
  var t, l, a, Z, T, R, _, z;
  let {
    transitionState: B,
    onClose: A,
    guildId: U,
    sticker: L
  } = e, F = (0, o.e7)([d.ZP], () => (null == L ? true : L.tags) != null ? d.ZP.getCustomEmojiById(L.tags) : null), K = null != (l = null == (t = f.default.getCurrentUser()) ? true : t.isStaff()) && l ? S.OC : S.Ht, [M, G] = i.useState(null), [q, Y] = i.useState(null != (a = null == L ? true : L.name) ? a : ""), [J, V] = i.useState({
    file: null,
    filename: null != (Z = (0, y._V)(L)) ? Z : ""
  }), [X, H] = i.useState(null == F ? true : F.id), [Q, W] = i.useState(null != (T = null == F ? true : F.name) ? T : null == L ? true : L.tags), [$, ee] = i.useState(null != (R = null == L ? true : L.description) ? R : ""), [et, el] = i.useState(false), [en, ei] = i.useState(null), er = (0, o.e7)([g.Z], () => g.Z.getGuild(U)), ea = (null == er ? true : er.features.has(w.GuildFeatures.PARTNERED)) || (null == er ? true : er.features.has(w.GuildFeatures.VERIFIED)), es = null != L, eo = es || (null == J ? true : J.file) != null, eu = 0 === $.length || $.length >= 2 && $.length <= 100, ed = !et && (null == en ? true : en.isBlocking) !== true && q.length >= 2 && (null != X || null != Q || (null == L ? true : L.tags) != null && (null == L ? true : L.tags) !== "") && eo && eu, ec = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!N.has(l)) return void ei({
      message: C.intl.string(C.t.B2hGAG),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await D(e);
    else if ("image/png" === l && e.size > K && !await (0, x.c0)(e)) {
      let t = (n = await D(e)).size > K;
      p.default.track(w.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > K) {
      ei({
        message: C.intl.formatToPlainString(C.t["3eK7Ru"], {
          maxSize: (0, j.IC)(K, {
            useKibibytes: true
          })
        }),
        isBlocking: null == J.file
      }), p.default.track(w.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, y.Zv)(n.type);
    if (i === b.u3.LOTTIE) {
      if (!ea) return void ei({
        message: C.intl.format(C.t.RNNjy6, {
          articleURL: v.Z.getArticleURL(w.BhN.STICKERS_UPLOAD)
        }),
        isBlocking: true
      });
      let e = new FileReader;
      e.addEventListener("load", () => {
        G({
          id: (0, r.Z)(),
          formatType: i,
          content: e.result
        }), ei(null)
      }), e.readAsText(n)
    } else {
      let e = await (0, x.fD)(n);
      G({
        id: (0, r.Z)(),
        formatType: i,
        content: e
      }), ei(null)
    }
    V({
      file: n,
      filename: n.name
    })
  }, em = async e => {
    var t, l, n, i, r, a;
    e.preventDefault();
    let s = null != (l = null != (t = null != X ? X : Q) ? t : null == L ? true : L.tags) ? l : "";
    try {
      if (el(true), es) await (0, h.Jf)(U, null != (n = null == L ? true : L.id) ? n : "", {
        name: q,
        tags: s,
        description: $
      });
      else {
        let e = new FormData;
        e.append("name", q), e.append("tags", s), e.append("description", $), (null == J ? true : J.file) != null && e.append("file", J.file), a = null != (r = null == (i = J.file) ? true : i.type) ? r : "", p.default.track(w.rMx.STICKER_UPLOAD_STARTED, {
          filetype: a
        }), await (0, h.lY)({
          guildId: U,
          body: e,
          platform: "web"
        }), k(true), (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.QR85gd), u.ToastType.SUCCESS))
      }
      A()
    } catch (e) {
      ei({
        message: e.body.message,
        isBlocking: false
      }), k(false, e.body.message)
    } finally {
      el(false)
    }
  }, eg = (e => {
    let {
      sticker: t,
      previewData: l,
      onStickerError: i
    } = e;
    if (null != t) return (0, n.jsx)(E.Z, {
      size: 160,
      sticker: t
    });
    if (null == l) return null;
    let {
      id: r,
      formatType: a,
      content: s
    } = l;
    return (0, n.jsx)(E.Z, {
      assetData: s,
      fileUri: s,
      size: 160,
      sticker: {
        name: r,
        description: "",
        id: r,
        pack_id: "",
        format_type: a
      },
      onError: i
    }, r)
  })({
    sticker: L,
    previewData: M,
    onStickerError: i.useCallback(() => {
      ei({
        message: C.intl.string(C.t["/WIYNX"]),
        isBlocking: true
      })
    }, [])
  }), ef = ea ? C.t.alYXBF : C.t.kpcMft;
  return (0, n.jsx)("form", {
    onSubmit: em,
    className: I.form,
    children: (0, n.jsx)(s.Modal, {
      transitionState: B,
      onClose: A,
      title: C.intl.string(C.t.yxVsBJ),
      subtitle: C.intl.format(ef, {
        fileSize: (0, j.IC)(S.Ht, {
          useKibibytes: true
        })
      }),
      actions: [{
        variant: "secondary",
        text: C.intl.string(C.t.oEAioF),
        onClick: A
      }, {
        variant: "primary",
        text: es ? C.intl.string(C.t.Arwnev) : C.intl.string(C.t["3UB9ad"]),
        onSubmit: em,
        disabled: !ed,
        type: "submit"
      }],
      children: (0, n.jsxs)(s.C3N, {
        children: [(0, n.jsx)(s.gNt, {
          label: C.intl.string(C.t.gjdiKE),
          children: (0, n.jsx)(P, {
            stickerPreview: eg
          })
        }), es ? (0, n.jsx)(u.oil, {
          label: C.intl.string(C.t.wp36sx),
          required: true,
          disabled: true,
          value: null != (_ = null == J ? true : J.filename) ? _ : ""
        }) : (0, n.jsx)(s.gNt, {
          label: C.intl.string(C.t.AM3mzX),
          required: true,
          children: (0, n.jsx)(m.Z, {
            buttonText: C.intl.string(C.t.xEnDUa),
            filters: O,
            filename: null != (z = null == J ? true : J.filename) ? z : "",
            placeholder: C.intl.string(C.t.rUYLJ4),
            onFileSelect: ec
          })
        }), (0, n.jsx)(c.Z, {
          className: I.formItemRowChild,
          guildId: U,
          emojiId: X,
          emojiName: Q,
          setEmojiId: H,
          setEmojiName: W,
          shouldUpdateBothEmojiFields: true
        }), (0, n.jsx)(u.oil, {
          label: C.intl.string(C.t["0VRh6n"]),
          required: true,
          value: q,
          onChange: Y,
          placeholder: C.intl.string(C.t["3fGttT"]),
          maxLength: 30
        }), (0, n.jsx)(u.Kx8, {
          label: C.intl.string(C.t.uGccej),
          helperText: C.intl.string(C.t.S6jlDj),
          value: $,
          onChange: ee,
          placeholder: C.intl.string(C.t.zwR0fa),
          maxLength: 100
        }), null != en && (0, n.jsx)(u.Text, {
          className: I.formItem,
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          children: en.message
        })]
      })
    })
  })
}