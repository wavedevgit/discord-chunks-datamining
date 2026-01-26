/** Chunk was on 46875 **/
/** chunk id: 969488, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => E
}), require("./733351.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk942381 = require("./942381.js"),
  Chunk417597 = require("./417597.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk775602 = require("./775602.js"),
  Chunk355622 = require("./355622.js"),
  Chunk851023 = require("./851023.jsx"),
  Chunk349688 = require("./349688.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk703007 = require("./703007.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk715493 = require("./715493.js"),
  Chunk518960 = require("./518960.js"),
  Chunk286911 = require("./286911.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk403094 = require("./403094.js");
let S = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  N = (0, Chunk915089.Ld)();

function w(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e, i = (0, y.eX)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: l
  });
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, r.jsx)("div", {
        style: i[t],
        children: true === e.isVideo ? (0, r.jsx)(j.A, {
          src: e.src,
          className: T.xn,
          "aria-hidden": true
        }) : (0, r.jsx)("img", {
          src: e.src,
          className: T.xn,
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
  } = (0, _.kU)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.x), b = (0, d.bG)([g.A], () => g.A.keyboardModeEnabled), j = (0, C.A)(i, null == (t = s.textValue) ? true : t.trim()), y = l.useMemo(() => j.find(e => e.isThumbnail), [j]), E = null != j && j.length > 0, I = l.useMemo(() => {
    let e = (null == j ? true : j.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [j]), P = l.useCallback(e => {
    null != y && h.A.remove(i.id, y.id, f.oU.CREATE_FORUM_POST.drafts.type), (0, A.R)(e.currentTarget.files, i, f.oU.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: true,
      isThumbnail: true,
      origin: "file_picker"
    }), e.currentTarget.value = null
  }, [i, y]), R = e => {
    e.stopPropagation(), (null == y ? true : y.upload) != null && (0, m.mMO)(async () => {
      let e = y.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 427281));
      return n => {
        var l, a;
        return (0, r.jsx)(t, (l = function(e) {
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
        }({}, n), a = a = {
          upload: e,
          channelId: i.id,
          draftType: f.oU.CREATE_FORUM_POST.drafts.type,
          onSubmit: t => {
            let {
              name: n,
              description: r,
              spoiler: l
            } = t;
            h.A.update(i.id, e.id, f.oU.CREATE_FORUM_POST.drafts.type, {
              filename: n,
              description: r,
              spoiler: l
            })
          },
          disableSpoiler: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }
    })
  }, k = (0, r.jsx)(v.A, {
    color: u.XD.CUSTOM,
    className: T.zL,
    innerClassName: T.Nr,
    onChange: P,
    multiple: false,
    "aria-hidden": true,
    filters: S,
    "aria-describedby": N,
    "aria-label": E ? O.intl.string(O.t.MxJI3f) : O.intl.string(O.t.Cbiofa),
    children: E ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w, {
        mediaAttachments: j,
        containerWidth: I.width,
        containerHeight: I.height
      }), (0, r.jsxs)("div", {
        className: a()(T.On, {
          [T.bP]: (null == j ? true : j.length) > 2
        }),
        children: [(0, r.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: O.intl.string(O.t.MxJI3f)
        }), null == y && (0, r.jsx)(m.R2l, {
          size: "xs",
          color: "currentColor",
          className: T.IZ
        })]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.XGR, {
        size: "custom",
        width: 39,
        height: 39,
        color: "currentColor",
        className: T.T3
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: O.intl.string(O.t.Cbiofa)
      })]
    })
  });
  return (0, r.jsx)("div", {
    className: T.iT,
    style: I,
    children: null != y ? (0, r.jsx)(p.A, {
      actions: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.A, {
          className: T.XI,
          tooltip: O.intl.string(O.t.Y8ujqr),
          onClick: R,
          children: (0, r.jsx)(m.R2l, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, r.jsx)(x.A, {
          className: T.XI,
          tooltip: O.intl.string(O.t.vN7REz),
          onClick: () => h.A.remove(i.id, y.id, f.oU.CREATE_FORUM_POST.drafts.type),
          dangerous: true,
          children: (0, r.jsx)(m.ucK, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      draftType: f.oU.CREATE_FORUM_POST.drafts.type,
      id: y.id,
      channelId: i.id,
      handleEditModal: R,
      keyboardModeEnabled: b,
      size: p.L.SMALL,
      className: T.Xc,
      children: k
    }) : k
  })
}