/** Chunk was on 76892 **/
/** chunk id: 795639, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  _: () => I
}), require("./781311.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk55160 = require("./55160.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk607070 = require("./607070.js"),
  Chunk541716 = require("./541716.js"),
  Chunk273031 = require("./273031.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk374794 = require("./374794.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk983200 = require("./983200.js"),
  Chunk127654 = require("./127654.js"),
  Chunk124252 = require("./124252.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk770290 = require("./770290.js");
let N = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  O = (0, Chunk313201.hQ)();

function P(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: i
  } = e, a = (0, C.tu)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: i
  });
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, r.jsx)("div", {
        style: a[t],
        children: true === e.isVideo ? (0, r.jsx)(j.Z, {
          src: e.src,
          className: S.thumbnail,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          src: e.src,
          className: S.thumbnail,
          "aria-hidden": true,
          alt: null != (n = null == e ? true : e.alt) ? n : ""
        })
      }, e.src)
    })
  })
}
let I = e => {
  var t;
  let {
    parentChannel: a
  } = e, {
    textAreaState: s
  } = (0, _.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.X), b = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled), j = (0, T.Z)(a, null == (t = s.textValue) ? true : t.trim()), C = i.useMemo(() => j.find(e => e.isThumbnail), [j]), I = null != j && j.length > 0, E = i.useMemo(() => {
    let e = (null == j ? true : j.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [j]), R = i.useCallback(e => {
    null != C && h.Z.remove(a.id, C.id, f.Ie.CREATE_FORUM_POST.drafts.type), (0, y.d)(e.currentTarget.files, a, f.Ie.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: true,
      isThumbnail: true,
      origin: "file_picker"
    }), e.currentTarget.value = null
  }, [a, C]), M = e => {
    e.stopPropagation(), (null == C ? true : C.upload) != null && (0, m.ZDy)(async () => {
      let e = C.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 403592));
      return n => {
        var i, l;
        return (0, r.jsx)(t, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), l = l = {
          upload: e,
          channelId: a.id,
          draftType: f.Ie.CREATE_FORUM_POST.drafts.type,
          onSubmit: t => {
            let {
              name: n,
              description: r,
              spoiler: i
            } = t;
            h.Z.update(a.id, e.id, f.Ie.CREATE_FORUM_POST.drafts.type, {
              filename: n,
              description: r,
              spoiler: i
            })
          },
          disableSpoiler: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, Z = (0, r.jsx)(v.Z, {
    color: u.Tt.CUSTOM,
    className: S.uploadFileInputContainer,
    innerClassName: S.uploadThumbnailContainer,
    onChange: R,
    multiple: false,
    "aria-hidden": true,
    filters: N,
    "aria-describedby": O,
    "aria-label": I ? w.intl.string(w.t.MxJI3f) : w.intl.string(w.t.Cbiofa),
    children: I ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P, {
        mediaAttachments: j,
        containerWidth: E.width,
        containerHeight: E.height
      }), (0, r.jsxs)("div", {
        className: l()(S.changeThumbnailLabelContainer, {
          [S.changeThumbnailLabelOverflow]: (null == j ? true : j.length) > 2
        }),
        children: [(0, r.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: w.intl.string(w.t.MxJI3f)
        }), null == C && (0, r.jsx)(m.vdY, {
          size: "xs",
          color: "currentColor",
          className: S.editIcon
        })]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.FmF, {
        size: "custom",
        width: 39,
        height: 39,
        color: "currentColor",
        className: S.uploadIcon
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: w.intl.string(w.t.Cbiofa)
      })]
    })
  });
  return (0, r.jsx)("div", {
    className: S.thumbnailContainer,
    style: E,
    children: null != C ? (0, r.jsx)(p.Z, {
      actions: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.Z, {
          className: S.action,
          tooltip: w.intl.string(w.t.Y8ujqr),
          onClick: M,
          children: (0, r.jsx)(m.vdY, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, r.jsx)(x.Z, {
          className: S.action,
          tooltip: w.intl.string(w.t.vN7REz),
          onClick: () => h.Z.remove(a.id, C.id, f.Ie.CREATE_FORUM_POST.drafts.type),
          dangerous: true,
          children: (0, r.jsx)(m.XHJ, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      draftType: f.Ie.CREATE_FORUM_POST.drafts.type,
      id: C.id,
      channelId: a.id,
      handleEditModal: M,
      keyboardModeEnabled: b,
      size: p.q.SMALL,
      className: S.attachmentListItem,
      children: Z
    }) : Z
  })
}