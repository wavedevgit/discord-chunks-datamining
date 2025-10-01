/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => z
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk250727 = require("./250727.js"),
  Chunk434227 = require("./434227.js"),
  Chunk600126 = require("./600126.js");
let D = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  Z = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function R(e, t) {
  v.default.track(O.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let T = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: C.preview,
    children: [(0, n.jsx)("div", {
      className: C.previewDark,
      children: null != t ? t : (0, n.jsx)("img", {
        src: P,
        alt: N.intl.string(N.t.qOsjZm)
      })
    }), (0, n.jsx)("div", {
      className: C.previewLight,
      children: null != t ? t : (0, n.jsx)("img", {
        src: k,
        alt: N.intl.string(N.t.YC5NAA)
      })
    })]
  })
};
async function _(e) {
  let t = await (0, b.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, o.Ae)(l, 320, 320);
  return (0, b.Bo)(n, e.name, "image/png")
}

function z(e) {
  var t, l, r, o, P, k, z, A;
  let {
    transitionState: B,
    onClose: U,
    guildId: L,
    sticker: K
  } = e, M = (0, c.e7)([m.ZP], () => (null == K ? true : K.tags) != null ? m.ZP.getCustomEmojiById(K.tags) : null), F = null != (l = null == (t = j.default.getCurrentUser()) ? true : t.isStaff()) && l ? S.OC : S.Ht, [Y, G] = i.useState(null), [q, V] = i.useState(null != (r = null == K ? true : K.name) ? r : ""), [X, W] = i.useState({
    file: null,
    filename: null != (o = (0, I._V)(K)) ? o : ""
  }), [H, J] = i.useState(null == M ? true : M.id), [Q, $] = i.useState(null != (P = null == M ? true : M.name) ? P : null == K ? true : K.tags), [ee, et] = i.useState(null != (k = null == K ? true : K.description) ? k : ""), [el, en] = i.useState(false), [ei, er] = i.useState(null), es = (0, c.e7)([p.Z], () => p.Z.getGuild(L)), ea = (null == es ? true : es.features.has(O.oNc.PARTNERED)) || (null == es ? true : es.features.has(O.oNc.VERIFIED)), eo = null != K, eu = eo || (null == X ? true : X.file) != null, ec = 0 === ee.length || ee.length >= 2 && ee.length <= 100, ed = !el && (null == ei ? true : ei.isBlocking) !== true && q.length >= 2 && (null != H || null != Q || (null == K ? true : K.tags) != null && (null == K ? true : K.tags) !== "") && eu && ec, em = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!D.has(l)) return void er({
      message: N.intl.string(N.t.B2hGAA),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await _(e);
    else if ("image/png" === l && e.size > F && !await (0, b.c0)(e)) {
      let t = (n = await _(e)).size > F;
      v.default.track(O.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > F) {
      er({
        message: N.intl.formatToPlainString(N.t["3eK7Rk"], {
          maxSize: (0, x.IC)(F, {
            useKibibytes: true
          })
        }),
        isBlocking: null == X.file
      }), v.default.track(O.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, I.Zv)(n.type);
    if (i === E.u3.LOTTIE) {
      if (!ea) return void er({
        message: N.intl.format(N.t.RNNjy8, {
          articleURL: h.Z.getArticleURL(O.BhN.STICKERS_UPLOAD)
        }),
        isBlocking: true
      });
      let e = new FileReader;
      e.addEventListener("load", () => {
        G({
          id: (0, a.Z)(),
          formatType: i,
          content: e.result
        }), er(null)
      }), e.readAsText(n)
    } else {
      let e = await (0, b.fD)(n);
      G({
        id: (0, a.Z)(),
        formatType: i,
        content: e
      }), er(null)
    }
    W({
      file: n,
      filename: n.name
    })
  }, ef = async e => {
    var t, l, n, i, r, s;
    e.preventDefault();
    let a = null != (l = null != (t = null != H ? H : Q) ? t : null == K ? true : K.tags) ? l : "";
    try {
      if (en(true), eo) await (0, y.Jf)(L, null != (n = null == K ? true : K.id) ? n : "", {
        name: q,
        tags: a,
        description: ee
      });
      else {
        let e = new FormData;
        e.append("name", q), e.append("tags", a), e.append("description", ee), (null == X ? true : X.file) != null && e.append("file", X.file), s = null != (r = null == (i = X.file) ? true : i.type) ? r : "", v.default.track(O.rMx.STICKER_UPLOAD_STARTED, {
          filetype: s
        }), await (0, y.lY)({
          guildId: L,
          body: e,
          platform: "web"
        }), R(true), (0, d.showToast)((0, d.createToast)(N.intl.string(N.t.QR85gY), d.ToastType.SUCCESS))
      }
      U()
    } catch (e) {
      er({
        message: e.body.message,
        isBlocking: false
      }), R(false, e.body.message)
    } finally {
      en(false)
    }
  }, eg = (e => {
    let {
      sticker: t,
      previewData: l,
      onStickerError: i
    } = e;
    if (null != t) return (0, n.jsx)(w.Z, {
      size: 160,
      sticker: t
    });
    if (null == l) return null;
    let {
      id: r,
      formatType: s,
      content: a
    } = l;
    return (0, n.jsx)(w.Z, {
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
    sticker: K,
    previewData: Y,
    onStickerError: i.useCallback(() => {
      er({
        message: N.intl.string(N.t["/WIYNT"]),
        isBlocking: true
      })
    }, [])
  }), ep = ea ? N.t.alYXBA : N.t.kpcMfn;
  return (0, n.jsx)("form", {
    onSubmit: ef,
    className: C.form,
    children: (0, n.jsxs)(u.IX, {
      transitionState: B,
      onClose: U,
      size: "lg",
      children: [(0, n.jsx)(u.xBx, {
        title: N.intl.string(N.t.yxVsBA),
        subtitle: N.intl.format(ep, {
          fileSize: (0, x.IC)(S.Ht, {
            useKibibytes: true
          })
        })
      }), (0, n.jsxs)(u.fef, {
        children: [(0, n.jsx)(d.hjN, {
          title: N.intl.string(N.t.gjdiKC),
          className: C.formItem,
          children: (0, n.jsx)(T, {
            stickerPreview: eg
          })
        }), (0, n.jsxs)(d.hjN, {
          className: s()(C.formItem, C.formItemRow),
          children: [(0, n.jsx)(d.xJW, {
            title: eo ? N.intl.string(N.t.wp36s7) : N.intl.string(N.t.AM3mzc),
            required: true,
            className: C.formItemRowChild,
            children: eo ? (0, n.jsx)(d.oil, {
              disabled: true,
              value: null != (z = null == X ? true : X.filename) ? z : ""
            }) : (0, n.jsx)(g.Z, {
              buttonText: N.intl.string(N.t.xEnDUV),
              filters: Z,
              filename: null != (A = null == X ? true : X.filename) ? A : "",
              placeholder: N.intl.string(N.t.rUYLJy),
              onFileSelect: em
            })
          }), (0, n.jsx)(f.Z, {
            className: C.formItemRowChild,
            guildId: L,
            emojiId: H,
            emojiName: Q,
            setEmojiId: J,
            setEmojiName: $,
            shouldUpdateBothEmojiFields: true
          })]
        }), (0, n.jsx)("div", {
          className: C.formItem,
          children: (0, n.jsx)(d.oil, {
            label: N.intl.string(N.t["0VRh6u"]),
            required: true,
            value: q,
            onChange: V,
            placeholder: N.intl.string(N.t["3fGttb"]),
            maxLength: 30
          })
        }), (0, n.jsxs)("div", {
          className: C.formItem,
          children: [(0, n.jsxs)(d.vwX, {
            children: [N.intl.string(N.t.uGccen), (0, n.jsx)(d.ua7, {
              text: N.intl.string(N.t.S6jlDg),
              children: e => (0, n.jsx)(d.d3s, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(l);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = l[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                size: "xs",
                color: "currentColor",
                className: C.infoIcon
              }, e))
            })]
          }), (0, n.jsx)(d.Kx8, {
            value: ee,
            onChange: et,
            placeholder: N.intl.string(N.t.zwR0fX),
            maxLength: 100
          })]
        }), null != ei && (0, n.jsx)(d.Text, {
          className: C.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: ei.message
        })]
      }), (0, n.jsx)(u.Go$, {
        actions: [{
          variant: "secondary",
          text: N.intl.string(N.t.oEAioK),
          onClick: U
        }, {
          variant: "primary",
          text: eo ? N.intl.string(N.t.Arwnen) : N.intl.string(N.t["3UB9aW"]),
          onSubmit: ef,
          disabled: !ed,
          type: "submit"
        }],
        actionsFullWidth: true
      })]
    })
  })
}