/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk36793 = require("./36793.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
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
let _ = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  T = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function A(e, t) {
  h.default.track(P.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let z = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: k.preview,
    children: [(0, n.jsx)("div", {
      className: k.previewDark,
      children: null != t ? t : (0, n.jsx)("img", {
        src: Z,
        alt: D.intl.string(D.t.qOsjZm)
      })
    }), (0, n.jsx)("div", {
      className: k.previewLight,
      children: null != t ? t : (0, n.jsx)("img", {
        src: R,
        alt: D.intl.string(D.t.YC5NAA)
      })
    })]
  })
};
async function B(e) {
  let t = await (0, I.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, o.Ae)(l, 320, 320);
  return (0, I.Bo)(n, e.name, "image/png")
}

function L(e) {
  var t, l, s, o, Z, R, L, U;
  let {
    transitionState: K,
    onClose: M,
    guildId: F,
    sticker: W
  } = e, Y = (0, u.e7)([p.ZP], () => (null == W ? true : W.tags) != null ? p.ZP.getCustomEmojiById(W.tags) : null), q = null != (l = null == (t = x.default.getCurrentUser()) ? true : t.isStaff()) && l ? C.OC : C.Ht, [G, J] = i.useState(null), [V, X] = i.useState(null != (s = null == W ? true : W.name) ? s : ""), [H, Q] = i.useState({
    file: null,
    filename: null != (o = (0, O._V)(W)) ? o : ""
  }), [$, ee] = i.useState(null == Y ? true : Y.id), [et, el] = i.useState(null != (Z = null == Y ? true : Y.name) ? Z : null == W ? true : W.tags), [en, ei] = i.useState(null != (R = null == W ? true : W.description) ? R : ""), [es, er] = i.useState(false), [ea, eo] = i.useState(null), eu = (0, u.e7)([b.Z], () => b.Z.getGuild(F)), ec = (null == eu ? true : eu.features.has(P.oNc.PARTNERED)) || (null == eu ? true : eu.features.has(P.oNc.VERIFIED)), ed = null != W, em = ed || (null == H ? true : H.file) != null, ef = 0 === en.length || en.length >= 2 && en.length <= 100, eg = !es && (null == ea ? true : ea.isBlocking) !== true && V.length >= 2 && (null != $ || null != et || (null == W ? true : W.tags) != null && (null == W ? true : W.tags) !== "") && em && ef, ep = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!_.has(l)) return void eo({
      message: D.intl.string(D.t.B2hGAA),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await B(e);
    else if ("image/png" === l && e.size > q && !await (0, I.c0)(e)) {
      let t = (n = await B(e)).size > q;
      h.default.track(P.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > q) {
      eo({
        message: D.intl.formatToPlainString(D.t["3eK7Rk"], {
          maxSize: (0, y.IC)(q, {
            useKibibytes: true
          })
        }),
        isBlocking: null == H.file
      }), h.default.track(P.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, O.Zv)(n.type);
    if (i === N.u3.LOTTIE) {
      if (!ec) return void eo({
        message: D.intl.format(D.t.RNNjy8, {
          articleURL: E.Z.getArticleURL(P.BhN.STICKERS_UPLOAD)
        }),
        isBlocking: true
      });
      let e = new FileReader;
      e.addEventListener("load", () => {
        J({
          id: (0, a.Z)(),
          formatType: i,
          content: e.result
        }), eo(null)
      }), e.readAsText(n)
    } else {
      let e = await (0, I.fD)(n);
      J({
        id: (0, a.Z)(),
        formatType: i,
        content: e
      }), eo(null)
    }
    Q({
      file: n,
      filename: n.name
    })
  }, ej = async e => {
    var t, l, n, i, s, r;
    e.preventDefault();
    let a = null != (l = null != (t = null != $ ? $ : et) ? t : null == W ? true : W.tags) ? l : "";
    try {
      if (er(true), ed) await (0, w.Jf)(F, null != (n = null == W ? true : W.id) ? n : "", {
        name: V,
        tags: a,
        description: en
      });
      else {
        let e = new FormData;
        e.append("name", V), e.append("tags", a), e.append("description", en), (null == H ? true : H.file) != null && e.append("file", H.file), r = null != (s = null == (i = H.file) ? true : i.type) ? s : "", h.default.track(P.rMx.STICKER_UPLOAD_STARTED, {
          filetype: r
        }), await (0, w.lY)({
          guildId: F,
          body: e,
          platform: "web"
        }), A(true), (0, g.showToast)((0, g.createToast)(D.intl.string(D.t.QR85gY), g.ToastType.SUCCESS))
      }
      M()
    } catch (e) {
      eo({
        message: e.body.message,
        isBlocking: false
      }), A(false, e.body.message)
    } finally {
      er(false)
    }
  }, ev = (e => {
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
    sticker: W,
    previewData: G,
    onStickerError: i.useCallback(() => {
      eo({
        message: D.intl.string(D.t["/WIYNT"]),
        isBlocking: true
      })
    }, [])
  }), eb = ec ? D.t.alYXBA : D.t.kpcMfn;
  return (0, n.jsx)("form", {
    onSubmit: ej,
    className: k.form,
    children: (0, n.jsxs)(c.I, {
      transitionState: K,
      onClose: M,
      size: "lg",
      children: [(0, n.jsx)(f.x, {
        title: D.intl.string(D.t.yxVsBA),
        subtitle: D.intl.format(eb, {
          fileSize: (0, y.IC)(C.Ht, {
            useKibibytes: true
          })
        })
      }), (0, n.jsxs)(m.f, {
        children: [(0, n.jsx)(g.hjN, {
          title: D.intl.string(D.t.gjdiKC),
          className: k.formItem,
          children: (0, n.jsx)(z, {
            stickerPreview: ev
          })
        }), (0, n.jsxs)(g.hjN, {
          className: r()(k.formItem, k.formItemRow),
          children: [(0, n.jsx)(g.xJW, {
            title: ed ? D.intl.string(D.t.wp36s7) : D.intl.string(D.t.AM3mzc),
            required: true,
            className: k.formItemRowChild,
            children: ed ? (0, n.jsx)(g.oil, {
              disabled: true,
              value: null != (L = null == H ? true : H.filename) ? L : ""
            }) : (0, n.jsx)(v.Z, {
              buttonText: D.intl.string(D.t.xEnDUV),
              filters: T,
              filename: null != (U = null == H ? true : H.filename) ? U : "",
              placeholder: D.intl.string(D.t.rUYLJy),
              onFileSelect: ep
            })
          }), (0, n.jsx)(j.Z, {
            className: k.formItemRowChild,
            guildId: F,
            emojiId: $,
            emojiName: et,
            setEmojiId: ee,
            setEmojiName: el,
            shouldUpdateBothEmojiFields: true
          })]
        }), (0, n.jsx)(g.xJW, {
          title: D.intl.string(D.t["0VRh6u"]),
          required: true,
          className: k.formItem,
          children: (0, n.jsx)(g.oil, {
            value: V,
            onChange: X,
            placeholder: D.intl.string(D.t["3fGttb"]),
            maxLength: 30
          })
        }), (0, n.jsxs)("div", {
          className: k.formItem,
          children: [(0, n.jsxs)(g.vwX, {
            children: [D.intl.string(D.t.uGccen), (0, n.jsx)(g.ua7, {
              text: D.intl.string(D.t.S6jlDg),
              children: e => (0, n.jsx)(g.d3s, function(e) {
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
                className: k.infoIcon
              }, e))
            })]
          }), (0, n.jsx)(g.Kx8, {
            value: en,
            onChange: ei,
            placeholder: D.intl.string(D.t.zwR0fX),
            maxLength: 100
          })]
        }), null != ea && (0, n.jsx)(g.Text, {
          className: k.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: ea.message
        })]
      }), (0, n.jsx)(d.G, {
        actions: [{
          variant: "secondary",
          text: D.intl.string(D.t.oEAioK),
          onClick: M
        }, {
          variant: "primary",
          text: ed ? D.intl.string(D.t.Arwnen) : D.intl.string(D.t["3UB9aW"]),
          onSubmit: ej,
          disabled: !eg,
          type: "submit"
        }],
        actionsFullWidth: true
      })]
    })
  })
}