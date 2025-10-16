/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk491202 = require("./491202.js"),
  Chunk434227 = require("./434227.js"),
  Chunk600126 = require("./600126.js");
let k = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  D = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function P(e, t) {
  p.default.track(I.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let Z = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: C.preview,
    children: [(0, n.jsx)("div", {
      className: C.previewDark,
      children: null != t ? t : (0, n.jsx)("img", {
        src: N,
        alt: w.intl.string(w.t.qOsjZm)
      })
    }), (0, n.jsx)("div", {
      className: C.previewLight,
      children: null != t ? t : (0, n.jsx)("img", {
        src: O,
        alt: w.intl.string(w.t.YC5NAA)
      })
    })]
  })
};
async function T(e) {
  let t = await (0, x.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, s.Ae)(l, 320, 320);
  return (0, x.Bo)(n, e.name, "image/png")
}

function R(e) {
  var t, l, s, N, O, R, _, z;
  let {
    transitionState: A,
    onClose: B,
    guildId: U,
    sticker: L
  } = e, K = (0, o.e7)([d.ZP], () => (null == L ? true : L.tags) != null ? d.ZP.getCustomEmojiById(L.tags) : null), F = null != (l = null == (t = f.default.getCurrentUser()) ? true : t.isStaff()) && l ? S.OC : S.Ht, [M, G] = i.useState(null), [Y, q] = i.useState(null != (s = null == L ? true : L.name) ? s : ""), [V, X] = i.useState({
    file: null,
    filename: null != (N = (0, y._V)(L)) ? N : ""
  }), [H, Q] = i.useState(null == K ? true : K.id), [W, J] = i.useState(null != (O = null == K ? true : K.name) ? O : null == L ? true : L.tags), [$, ee] = i.useState(null != (R = null == L ? true : L.description) ? R : ""), [et, el] = i.useState(false), [en, ei] = i.useState(null), er = (0, o.e7)([g.Z], () => g.Z.getGuild(U)), es = (null == er ? true : er.features.has(I.GuildFeatures.PARTNERED)) || (null == er ? true : er.features.has(I.GuildFeatures.VERIFIED)), ea = null != L, eo = ea || (null == V ? true : V.file) != null, eu = 0 === $.length || $.length >= 2 && $.length <= 100, ed = !et && (null == en ? true : en.isBlocking) !== true && Y.length >= 2 && (null != H || null != W || (null == L ? true : L.tags) != null && (null == L ? true : L.tags) !== "") && eo && eu, ec = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!k.has(l)) return void ei({
      message: w.intl.string(w.t.B2hGAA),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await T(e);
    else if ("image/png" === l && e.size > F && !await (0, x.c0)(e)) {
      let t = (n = await T(e)).size > F;
      p.default.track(I.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > F) {
      ei({
        message: w.intl.formatToPlainString(w.t["3eK7Rk"], {
          maxSize: (0, j.IC)(F, {
            useKibibytes: true
          })
        }),
        isBlocking: null == V.file
      }), p.default.track(I.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, y.Zv)(n.type);
    if (i === b.u3.LOTTIE) {
      if (!es) return void ei({
        message: w.intl.format(w.t.RNNjy8, {
          articleURL: v.Z.getArticleURL(I.BhN.STICKERS_UPLOAD)
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
    X({
      file: n,
      filename: n.name
    })
  }, em = async e => {
    var t, l, n, i, r, s;
    e.preventDefault();
    let a = null != (l = null != (t = null != H ? H : W) ? t : null == L ? true : L.tags) ? l : "";
    try {
      if (el(true), ea) await (0, h.Jf)(U, null != (n = null == L ? true : L.id) ? n : "", {
        name: Y,
        tags: a,
        description: $
      });
      else {
        let e = new FormData;
        e.append("name", Y), e.append("tags", a), e.append("description", $), (null == V ? true : V.file) != null && e.append("file", V.file), s = null != (r = null == (i = V.file) ? true : i.type) ? r : "", p.default.track(I.rMx.STICKER_UPLOAD_STARTED, {
          filetype: s
        }), await (0, h.lY)({
          guildId: U,
          body: e,
          platform: "web"
        }), P(true), (0, u.showToast)((0, u.createToast)(w.intl.string(w.t.QR85gY), u.ToastType.SUCCESS))
      }
      B()
    } catch (e) {
      ei({
        message: e.body.message,
        isBlocking: false
      }), P(false, e.body.message)
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
      formatType: s,
      content: a
    } = l;
    return (0, n.jsx)(E.Z, {
      assetData: a,
      fileUri: a,
      size: 160,
      sticker: {
        name: r,
        description: "",
        id: r,
        pack_id: "",
        format_type: s
      },
      onError: i
    }, r)
  })({
    sticker: L,
    previewData: M,
    onStickerError: i.useCallback(() => {
      ei({
        message: w.intl.string(w.t["/WIYNT"]),
        isBlocking: true
      })
    }, [])
  }), ef = es ? w.t.alYXBA : w.t.kpcMfn;
  return (0, n.jsx)("form", {
    onSubmit: em,
    className: C.form,
    children: (0, n.jsxs)(a.IX, {
      transitionState: A,
      onClose: B,
      size: "lg",
      children: [(0, n.jsx)(a.xBx, {
        title: w.intl.string(w.t.yxVsBA),
        subtitle: w.intl.format(ef, {
          fileSize: (0, j.IC)(S.Ht, {
            useKibibytes: true
          })
        })
      }), (0, n.jsx)(a.fef, {
        children: (0, n.jsxs)(a.C3N, {
          children: [(0, n.jsx)(a.gNt, {
            label: w.intl.string(w.t.gjdiKC),
            children: (0, n.jsx)(Z, {
              stickerPreview: eg
            })
          }), (0, n.jsxs)(a.NIo, {
            children: [ea ? (0, n.jsx)(u.oil, {
              label: w.intl.string(w.t.wp36s7),
              required: true,
              disabled: true,
              value: null != (_ = null == V ? true : V.filename) ? _ : ""
            }) : (0, n.jsx)(a.gNt, {
              label: w.intl.string(w.t.AM3mzc),
              required: true,
              children: (0, n.jsx)(m.Z, {
                buttonText: w.intl.string(w.t.xEnDUV),
                filters: D,
                filename: null != (z = null == V ? true : V.filename) ? z : "",
                placeholder: w.intl.string(w.t.rUYLJy),
                onFileSelect: ec
              })
            }), (0, n.jsx)(c.Z, {
              className: C.formItemRowChild,
              guildId: U,
              emojiId: H,
              emojiName: W,
              setEmojiId: Q,
              setEmojiName: J,
              shouldUpdateBothEmojiFields: true
            })]
          }), (0, n.jsx)(u.oil, {
            label: w.intl.string(w.t["0VRh6u"]),
            required: true,
            value: Y,
            onChange: q,
            placeholder: w.intl.string(w.t["3fGttb"]),
            maxLength: 30
          }), (0, n.jsx)(u.Kx8, {
            label: w.intl.string(w.t.uGccen),
            helperText: w.intl.string(w.t.S6jlDg),
            value: $,
            onChange: ee,
            placeholder: w.intl.string(w.t.zwR0fX),
            maxLength: 100
          }), null != en && (0, n.jsx)(u.Text, {
            className: C.formItem,
            variant: "text-sm/normal",
            color: "text-danger",
            children: en.message
          })]
        })
      }), (0, n.jsx)(a.Go$, {
        actions: [{
          variant: "secondary",
          text: w.intl.string(w.t.oEAioK),
          onClick: B
        }, {
          variant: "primary",
          text: ea ? w.intl.string(w.t.Arwnen) : w.intl.string(w.t["3UB9aW"]),
          onSubmit: em,
          disabled: !ed,
          type: "submit"
        }],
        actionsFullWidth: true
      })]
    })
  })
}