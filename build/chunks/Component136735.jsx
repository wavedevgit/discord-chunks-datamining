/** Chunk was on 93626 **/
/** chunk id: 136735, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js"), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk250727 = require("./250727.js"),
  Chunk434227 = require("./434227.js"),
  Chunk600126 = require("./600126.js");
let _ = new Set(["application/json", "image/png", "image/apng", "image/gif", "image/jpeg", "image/jpg"]),
  T = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif", "jpeg", "jpg"]
  }];

function A(e, t) {
  h.default.track(C.rMx.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let z = e => {
  let {
    stickerPreview: t
  } = e;
  return (0, n.jsxs)("div", {
    className: D.preview,
    children: [(0, n.jsx)("div", {
      className: D.previewDark,
      children: null != t ? t : (0, n.jsx)("img", {
        src: Z,
        alt: k.intl.string(k.t.qOsjZm)
      })
    }), (0, n.jsx)("div", {
      className: D.previewLight,
      children: null != t ? t : (0, n.jsx)("img", {
        src: R,
        alt: k.intl.string(k.t.YC5NAA)
      })
    })]
  })
};
async function B(e) {
  let t = await (0, w.fD)(e),
    l = new Image;
  l.src = t, await l.decode();
  let n = (0, o.Ae)(l, 320, 320);
  return (0, w.Bo)(n, e.name, "image/png")
}

function L(e) {
  var t, l, r, o, Z, R, L, U;
  let {
    transitionState: K,
    onClose: M,
    guildId: F,
    sticker: Y
  } = e, q = (0, u.e7)([p.ZP], () => (null == Y ? true : Y.tags) != null ? p.ZP.getCustomEmojiById(Y.tags) : null), G = null != (l = null == (t = b.default.getCurrentUser()) ? true : t.isStaff()) && l ? P.OC : P.Ht, [V, W] = i.useState(null), [J, X] = i.useState(null != (r = null == Y ? true : Y.name) ? r : ""), [H, Q] = i.useState({
    file: null,
    filename: null != (o = (0, O._V)(Y)) ? o : ""
  }), [$, ee] = i.useState(null == q ? true : q.id), [et, el] = i.useState(null != (Z = null == q ? true : q.name) ? Z : null == Y ? true : Y.tags), [en, ei] = i.useState(null != (R = null == Y ? true : Y.description) ? R : ""), [er, es] = i.useState(false), [ea, eo] = i.useState(null), eu = (0, u.e7)([x.Z], () => x.Z.getGuild(F)), ec = (null == eu ? true : eu.features.has(C.oNc.PARTNERED)) || (null == eu ? true : eu.features.has(C.oNc.VERIFIED)), ed = null != Y, em = ed || (null == H ? true : H.file) != null, ef = 0 === en.length || en.length >= 2 && en.length <= 100, eg = !er && (null == ea ? true : ea.isBlocking) !== true && J.length >= 2 && (null != $ || null != et || (null == Y ? true : Y.tags) != null && (null == Y ? true : Y.tags) !== "") && em && ef, ep = async e => {
    var t;
    if (null == e) return;
    let l = null == (t = e.type) ? true : t.split(";")[0];
    if (!_.has(l)) return void eo({
      message: k.intl.string(k.t.B2hGAA),
      isBlocking: true
    });
    let n = e;
    if ("image/jpeg" === l || "image/jpg" === l) n = await B(e);
    else if ("image/png" === l && e.size > G && !await (0, w.c0)(e)) {
      let t = (n = await B(e)).size > G;
      h.default.track(C.rMx.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: n.size,
        resized_file_too_big: t
      })
    }
    if (n.size > G) {
      eo({
        message: k.intl.formatToPlainString(k.t["3eK7Rk"], {
          maxSize: (0, y.IC)(G, {
            useKibibytes: true
          })
        }),
        isBlocking: null == H.file
      }), h.default.track(C.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: n.size,
        filetype: n.type
      });
      return
    }
    let i = (0, O.Zv)(n.type);
    if (i === S.u3.LOTTIE) {
      if (!ec) return void eo({
        message: k.intl.format(k.t.RNNjy8, {
          articleURL: E.Z.getArticleURL(C.BhN.STICKERS_UPLOAD)
        }),
        isBlocking: true
      });
      let e = new FileReader;
      e.addEventListener("load", () => {
        W({
          id: (0, a.Z)(),
          formatType: i,
          content: e.result
        }), eo(null)
      }), e.readAsText(n)
    } else {
      let e = await (0, w.fD)(n);
      W({
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
    var t, l, n, i, r, s;
    e.preventDefault();
    let a = null != (l = null != (t = null != $ ? $ : et) ? t : null == Y ? true : Y.tags) ? l : "";
    try {
      if (es(true), ed) await (0, I.Jf)(F, null != (n = null == Y ? true : Y.id) ? n : "", {
        name: J,
        tags: a,
        description: en
      });
      else {
        let e = new FormData;
        e.append("name", J), e.append("tags", a), e.append("description", en), (null == H ? true : H.file) != null && e.append("file", H.file), s = null != (r = null == (i = H.file) ? true : i.type) ? r : "", h.default.track(C.rMx.STICKER_UPLOAD_STARTED, {
          filetype: s
        }), await (0, I.lY)({
          guildId: F,
          body: e,
          platform: "web"
        }), A(true), (0, g.showToast)((0, g.createToast)(k.intl.string(k.t.QR85gY), g.ToastType.SUCCESS))
      }
      M()
    } catch (e) {
      eo({
        message: e.body.message,
        isBlocking: false
      }), A(false, e.body.message)
    } finally {
      es(false)
    }
  }, ev = (e => {
    let {
      sticker: t,
      previewData: l,
      onStickerError: i
    } = e;
    if (null != t) return (0, n.jsx)(N.Z, {
      size: 160,
      sticker: t
    });
    if (null == l) return null;
    let {
      id: r,
      formatType: s,
      content: a
    } = l;
    return (0, n.jsx)(N.Z, {
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
    sticker: Y,
    previewData: V,
    onStickerError: i.useCallback(() => {
      eo({
        message: k.intl.string(k.t["/WIYNT"]),
        isBlocking: true
      })
    }, [])
  }), ex = ec ? k.t.alYXBA : k.t.kpcMfn;
  return (0, n.jsx)("form", {
    onSubmit: ej,
    className: D.form,
    children: (0, n.jsxs)(c.I, {
      transitionState: K,
      onClose: M,
      size: "lg",
      children: [(0, n.jsx)(f.x, {
        title: k.intl.string(k.t.yxVsBA),
        subtitle: k.intl.format(ex, {
          fileSize: (0, y.IC)(P.Ht, {
            useKibibytes: true
          })
        })
      }), (0, n.jsxs)(m.f, {
        children: [(0, n.jsx)(g.hjN, {
          title: k.intl.string(k.t.gjdiKC),
          className: D.formItem,
          children: (0, n.jsx)(z, {
            stickerPreview: ev
          })
        }), (0, n.jsxs)(g.hjN, {
          className: s()(D.formItem, D.formItemRow),
          children: [(0, n.jsx)(g.xJW, {
            title: ed ? k.intl.string(k.t.wp36s7) : k.intl.string(k.t.AM3mzc),
            required: true,
            className: D.formItemRowChild,
            children: ed ? (0, n.jsx)(g.oil, {
              disabled: true,
              value: null != (L = null == H ? true : H.filename) ? L : ""
            }) : (0, n.jsx)(v.Z, {
              buttonText: k.intl.string(k.t.xEnDUV),
              filters: T,
              filename: null != (U = null == H ? true : H.filename) ? U : "",
              placeholder: k.intl.string(k.t.rUYLJy),
              onFileSelect: ep
            })
          }), (0, n.jsx)(j.Z, {
            className: D.formItemRowChild,
            guildId: F,
            emojiId: $,
            emojiName: et,
            setEmojiId: ee,
            setEmojiName: el,
            shouldUpdateBothEmojiFields: true
          })]
        }), (0, n.jsx)(g.xJW, {
          title: k.intl.string(k.t["0VRh6u"]),
          required: true,
          className: D.formItem,
          children: (0, n.jsx)(g.oil, {
            value: J,
            onChange: X,
            placeholder: k.intl.string(k.t["3fGttb"]),
            maxLength: 30
          })
        }), (0, n.jsxs)("div", {
          className: D.formItem,
          children: [(0, n.jsxs)(g.vwX, {
            children: [k.intl.string(k.t.uGccen), (0, n.jsx)(g.ua7, {
              text: k.intl.string(k.t.S6jlDg),
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
                className: D.infoIcon
              }, e))
            })]
          }), (0, n.jsx)(g.Kx8, {
            value: en,
            onChange: ei,
            placeholder: k.intl.string(k.t.zwR0fX),
            maxLength: 100
          })]
        }), null != ea && (0, n.jsx)(g.Text, {
          className: D.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: ea.message
        })]
      }), (0, n.jsx)(d.G, {
        actions: [{
          variant: "secondary",
          text: k.intl.string(k.t.oEAioK),
          onClick: M
        }, {
          variant: "primary",
          text: ed ? k.intl.string(k.t.Arwnen) : k.intl.string(k.t["3UB9aW"]),
          onSubmit: ej,
          disabled: !eg,
          type: "submit"
        }],
        actionsFullWidth: true
      })]
    })
  })
}