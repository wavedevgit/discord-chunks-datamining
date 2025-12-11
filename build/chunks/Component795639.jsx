/** Chunk was on 193 **/
/** chunk id: 795639, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  _: () => E
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
  Chunk238791 = require("./238791.js");
let O = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  P = (0, Chunk313201.hQ)();

function I(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: r
  } = e, i = (0, y.tu)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: r
  });
  return (0, a.jsx)(a.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, a.jsx)("div", {
        style: i[t],
        children: true === e.isVideo ? (0, a.jsx)(j.Z, {
          src: e.src,
          className: N.thumbnail,
          "aria-hidden": true
        }) : (0, a.jsx)("img", {
          src: e.src,
          className: N.thumbnail,
          "aria-hidden": true,
          alt: null != (n = null == e ? true : e.alt) ? n : ""
        })
      }, e.src)
    })
  })
}
let E = e => {
  var t;
  let {
    parentChannel: i
  } = e, {
    textAreaState: s
  } = (0, C.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.X), p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled), j = (0, w.Z)(i, null == (t = s.textValue) ? true : t.trim()), y = r.useMemo(() => j.find(e => e.isThumbnail), [j]), E = null != j && j.length > 0, _ = r.useMemo(() => {
    let e = (null == j ? true : j.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [j]), R = r.useCallback(e => {
    null != y && f.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type), (0, T.d)(e.currentTarget.files, i, g.Ie.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: true,
      isThumbnail: true,
      origin: "file_picker"
    }), e.currentTarget.value = null
  }, [i, y]), M = e => {
    e.stopPropagation(), (null == y ? true : y.upload) != null && (0, m.ZDy)(async () => {
      let e = y.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 403592));
      return n => {
        var r, l;
        return (0, a.jsx)(t, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, n), l = l = {
          upload: e,
          channelId: i.id,
          draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
          onSubmit: t => {
            let {
              name: n,
              description: a,
              spoiler: r
            } = t;
            f.Z.update(i.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
              filename: n,
              description: a,
              spoiler: r
            })
          },
          disableSpoiler: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    })
  }, Z = (0, a.jsx)(v.Z, {
    color: u.Tt.CUSTOM,
    className: N.uploadFileInputContainer,
    innerClassName: N.uploadThumbnailContainer,
    onChange: R,
    multiple: false,
    "aria-hidden": true,
    filters: O,
    "aria-describedby": P,
    "aria-label": E ? S.intl.string(S.t.MxJI3f) : S.intl.string(S.t.Cbiofa),
    children: E ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I, {
        mediaAttachments: j,
        containerWidth: _.width,
        containerHeight: _.height
      }), (0, a.jsxs)("div", {
        className: l()(N.changeThumbnailLabelContainer, {
          [N.changeThumbnailLabelOverflow]: (null == j ? true : j.length) > 2
        }),
        children: [(0, a.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: S.intl.string(S.t.MxJI3f)
        }), null == y && (0, a.jsx)(m.vdY, {
          size: "xs",
          color: "currentColor",
          className: N.editIcon
        })]
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.FmF, {
        size: "custom",
        width: 39,
        height: 39,
        color: "currentColor",
        className: N.uploadIcon
      }), (0, a.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: S.intl.string(S.t.Cbiofa)
      })]
    })
  });
  return (0, a.jsx)("div", {
    className: N.thumbnailContainer,
    style: _,
    children: null != y ? (0, a.jsx)(b.Z, {
      actions: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(x.Z, {
          className: N.action,
          tooltip: S.intl.string(S.t.Y8ujqr),
          onClick: M,
          children: (0, a.jsx)(m.vdY, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, a.jsx)(x.Z, {
          className: N.action,
          tooltip: S.intl.string(S.t.vN7REz),
          onClick: () => f.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type),
          dangerous: true,
          children: (0, a.jsx)(m.XHJ, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
      id: y.id,
      channelId: i.id,
      handleEditModal: M,
      keyboardModeEnabled: p,
      size: b.q.SMALL,
      className: N.attachmentListItem,
      children: Z
    }) : Z
  })
}