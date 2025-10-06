/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk36793 = require("./36793.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk250727 = require("./250727.js"),
  Chunk434227 = require("./434227.js"),
  Chunk600126 = require("./600126.js");
let Z = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  R = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function T(e, t) {
  v.default.track(C.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let _ = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: k.preview,
    children: [(0, n.jsx)("div", {
      className: k.previewDark,
      children: null != t ? t : (0, n.jsx)("img", {
        src: D,
        alt: O.intl.string(O.t.qOsjZm)
      })
    }), (0, n.jsx)("div", {
      className: k.previewLight,
      children: null != t ? t : (0, n.jsx)("img", {
        src: P,
        alt: O.intl.string(O.t.YC5NAA)
      })
    })]
  })
};
async function z(e) {
  let t = await (0, y.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, o.Ae)(l, 320, 320);
  return (0, y.Bo)(n, e.name, "image/png")
}

function A(e) {
  var t, l, s, o, D, P, A, B;
  let {
    transitionState: U,
    onClose: L,
    guildId: K,
    sticker: M
  } = e, F = (0, c.e7)([f.ZP], () => (null == M ? true : M.tags) != null ? f.ZP.getCustomEmojiById(M.tags) : null), Y = null != (l = null == (t = x.default.getCurrentUser()) ? true : t.isStaff()) && l ? w.OC : w.Ht, [G, q] = i.useState(null), [V, X] = i.useState(null != (s = null == M ? true : M.name) ? s : ""), [W, H] = i.useState({
    file: null,
    filename: null != (o = (0, N._V)(M)) ? o : ""
  }), [J, Q] = i.useState(null == F ? true : F.id), [$, ee] = i.useState(null != (D = null == F ? true : F.name) ? D : null == M ? true : M.tags), [et, el] = i.useState(null != (P = null == M ? true : M.description) ? P : ""), [en, ei] = i.useState(false), [es, er] = i.useState(null), ea = (0, c.e7)([j.Z], () => j.Z.getGuild(K)), eo = (null == ea ? true : ea.features.has(C.oNc.PARTNERED)) || (null == ea ? true : ea.features.has(C.oNc.VERIFIED)), eu = null != M, ec = eu || (null == W ? true : W.file) != null, ed = 0 === et.length || et.length >= 2 && et.length <= 100, em = !en && (null == es ? true : es.isBlocking) !== true && V.length >= 2 && (null != J || null != $ || (null == M ? true : M.tags) != null && (null == M ? true : M.tags) !== "") && ec && ed, ef = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!Z.has(l)) return void er({
      message: O.intl.string(O.t.B2hGAA),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await z(e);
    else if ("image/png" === l && e.size > Y && !await (0, y.c0)(e)) {
      let t = (n = await z(e)).size > Y;
      v.default.track(C.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > Y) {
      er({
        message: O.intl.formatToPlainString(O.t["3eK7Rk"], {
          maxSize: (0, h.IC)(Y, {
            useKibibytes: true
          })
        }),
        isBlocking: null == W.file
      }), v.default.track(C.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, N.Zv)(n.type);
    if (i === I.u3.LOTTIE) {
      if (!eo) return void er({
        message: O.intl.format(O.t.RNNjy8, {
          articleURL: b.Z.getArticleURL(C.BhN.STICKERS_UPLOAD)
        }),
        isBlocking: true
      });
      let e = new FileReader;
      e.addEventListener("load", () => {
        q({
          id: (0, a.Z)(),
          formatType: i,
          content: e.result
        }), er(null)
      }), e.readAsText(n)
    } else {
      let e = await (0, y.fD)(n);
      q({
        id: (0, a.Z)(),
        formatType: i,
        content: e
      }), er(null)
    }
    H({
      file: n,
      filename: n.name
    })
  }, eg = async e => {
    var t, l, n, i, s, r;
    e.preventDefault();
    let a = null != (l = null != (t = null != J ? J : $) ? t : null == M ? true : M.tags) ? l : "";
    try {
      if (ei(true), eu) await (0, E.Jf)(K, null != (n = null == M ? true : M.id) ? n : "", {
        name: V,
        tags: a,
        description: et
      });
      else {
        let e = new FormData;
        e.append("name", V), e.append("tags", a), e.append("description", et), (null == W ? true : W.file) != null && e.append("file", W.file), r = null != (s = null == (i = W.file) ? true : i.type) ? s : "", v.default.track(C.rMx.STICKER_UPLOAD_STARTED, {
          filetype: r
        }), await (0, E.lY)({
          guildId: K,
          body: e,
          platform: "web"
        }), T(true), (0, m.showToast)((0, m.createToast)(O.intl.string(O.t.QR85gY), m.ToastType.SUCCESS))
      }
      L()
    } catch (e) {
      er({
        message: e.body.message,
        isBlocking: false
      }), T(false, e.body.message)
    } finally {
      ei(false)
    }
  }, ep = (e => {
    let {
      sticker: t,
      previewData: l,
      onStickerError: i
    } = e;
    if (null != t) return (0, n.jsx)(S.Z, {
      size: 160,
      sticker: t
    });
    if (null == l) return null;
    let {
      id: s,
      formatType: r,
      content: a
    } = l;
    return (0, n.jsx)(S.Z, {
      assetData: a,
      fileUri: a,
      size: 160,
      sticker: {
        name: s,
        description: "",
        id: s,
        pack_id: "",
        format_type: r
      },
      onError: i
    }, s)
  })({
    sticker: M,
    previewData: G,
    onStickerError: i.useCallback(() => {
      er({
        message: O.intl.string(O.t["/WIYNT"]),
        isBlocking: true
      })
    }, [])
  }), ej = eo ? O.t.alYXBA : O.t.kpcMfn;
  return (0, n.jsx)("form", {
    onSubmit: eg,
    className: k.form,
    children: (0, n.jsxs)(u.IX, {
      transitionState: U,
      onClose: L,
      size: "lg",
      children: [(0, n.jsx)(u.xBx, {
        title: O.intl.string(O.t.yxVsBA),
        subtitle: O.intl.format(ej, {
          fileSize: (0, h.IC)(w.Ht, {
            useKibibytes: true
          })
        })
      }), (0, n.jsxs)(u.fef, {
        children: [(0, n.jsx)(m.hjN, {
          title: O.intl.string(O.t.gjdiKC),
          className: k.formItem,
          children: (0, n.jsx)(_, {
            stickerPreview: ep
          })
        }), (0, n.jsxs)(m.hjN, {
          className: r()(k.formItem, k.formItemRow),
          children: [(0, n.jsx)(m.xJW, {
            title: eu ? O.intl.string(O.t.wp36s7) : O.intl.string(O.t.AM3mzc),
            required: true,
            className: k.formItemRowChild,
            children: eu ? (0, n.jsx)(m.oil, {
              disabled: true,
              value: null != (A = null == W ? true : W.filename) ? A : ""
            }) : (0, n.jsx)(p.Z, {
              buttonText: O.intl.string(O.t.xEnDUV),
              filters: R,
              filename: null != (B = null == W ? true : W.filename) ? B : "",
              placeholder: O.intl.string(O.t.rUYLJy),
              onFileSelect: ef
            })
          }), (0, n.jsx)(g.Z, {
            className: k.formItemRowChild,
            guildId: K,
            emojiId: J,
            emojiName: $,
            setEmojiId: Q,
            setEmojiName: ee,
            shouldUpdateBothEmojiFields: true
          })]
        }), (0, n.jsx)("div", {
          className: k.formItem,
          children: (0, n.jsx)(m.oil, {
            label: O.intl.string(O.t["0VRh6u"]),
            required: true,
            value: V,
            onChange: X,
            placeholder: O.intl.string(O.t["3fGttb"]),
            maxLength: 30
          })
        }), (0, n.jsxs)("div", {
          className: k.formItem,
          children: [(0, n.jsxs)(m.vwX, {
            children: [O.intl.string(O.t.uGccen), (0, n.jsx)(d.u, {
              text: O.intl.string(O.t.S6jlDg),
              children: (0, n.jsx)(m.d3s, {
                size: "xs",
                color: "currentColor",
                className: k.infoIcon
              })
            })]
          }), (0, n.jsx)(m.Kx8, {
            value: et,
            onChange: el,
            placeholder: O.intl.string(O.t.zwR0fX),
            maxLength: 100
          })]
        }), null != es && (0, n.jsx)(m.Text, {
          className: k.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: es.message
        })]
      }), (0, n.jsx)(u.Go$, {
        actions: [{
          variant: "secondary",
          text: O.intl.string(O.t.oEAioK),
          onClick: L
        }, {
          variant: "primary",
          text: eu ? O.intl.string(O.t.Arwnen) : O.intl.string(O.t["3UB9aW"]),
          onSubmit: eg,
          disabled: !em,
          type: "submit"
        }],
        actionsFullWidth: true
      })]
    })
  })
}