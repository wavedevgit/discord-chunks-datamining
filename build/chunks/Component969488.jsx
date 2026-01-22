/** Chunk was on 46875 **/
/** chunk id: 969488, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => w
}), require("./733351.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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
let T = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  _ = (0, Chunk915089.Ld)();

function E(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: r
  } = e, a = (0, A.eX)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: r
  });
  return (0, l.jsx)(l.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, l.jsx)("div", {
        style: a[t],
        children: true === e.isVideo ? (0, l.jsx)(j.A, {
          src: e.src,
          className: S.xn,
          "aria-hidden": true
        }) : (0, l.jsx)("img", {
          src: e.src,
          className: S.xn,
          "aria-hidden": true,
          alt: null != (n = null == e ? true : e.alt) ? n : ""
        })
      }, e.src)
    })
  })
}
let w = e => {
  var t;
  let {
    parentChannel: a
  } = e, {
    textAreaState: s
  } = (0, y.kU)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, o.x), p = (0, d.bG)([f.A], () => f.A.keyboardModeEnabled), j = (0, O.A)(a, null == (t = s.textValue) ? true : t.trim()), A = r.useMemo(() => j.find(e => e.isThumbnail), [j]), w = null != j && j.length > 0, R = r.useMemo(() => {
    let e = (null == j ? true : j.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [j]), k = r.useCallback(e => {
    null != A && h.A.remove(a.id, A.id, g.oU.CREATE_FORUM_POST.drafts.type), (0, C.R)(e.currentTarget.files, a, g.oU.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: true,
      isThumbnail: true,
      origin: "file_picker"
    }), e.currentTarget.value = null
  }, [a, A]), P = e => {
    e.stopPropagation(), (null == A ? true : A.upload) != null && (0, m.mMO)(async () => {
      let e = A.upload;
      c()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 427281));
      return n => {
        var r, i;
        return (0, l.jsx)(t, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, n), i = i = {
          upload: e,
          channelId: a.id,
          draftType: g.oU.CREATE_FORUM_POST.drafts.type,
          onSubmit: t => {
            let {
              name: n,
              description: l,
              spoiler: r
            } = t;
            h.A.update(a.id, e.id, g.oU.CREATE_FORUM_POST.drafts.type, {
              filename: n,
              description: l,
              spoiler: r
            })
          },
          disableSpoiler: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }
    })
  }, I = (0, l.jsx)(v.A, {
    color: u.XD.CUSTOM,
    className: S.zL,
    innerClassName: S.Nr,
    onChange: k,
    multiple: false,
    "aria-hidden": true,
    filters: T,
    "aria-describedby": _,
    "aria-label": w ? N.intl.string(N.t.MxJI3f) : N.intl.string(N.t.Cbiofa),
    children: w ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(E, {
        mediaAttachments: j,
        containerWidth: R.width,
        containerHeight: R.height
      }), (0, l.jsxs)("div", {
        className: i()(S.On, {
          [S.bP]: (null == j ? true : j.length) > 2
        }),
        children: [(0, l.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: N.intl.string(N.t.MxJI3f)
        }), null == A && (0, l.jsx)(m.R2l, {
          size: "xs",
          color: "currentColor",
          className: S.IZ
        })]
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(m.XGR, {
        size: "custom",
        width: 39,
        height: 39,
        color: "currentColor",
        className: S.T3
      }), (0, l.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: N.intl.string(N.t.Cbiofa)
      })]
    })
  });
  return (0, l.jsx)("div", {
    className: S.iT,
    style: R,
    children: null != A ? (0, l.jsx)(b.A, {
      actions: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(x.A, {
          className: S.XI,
          tooltip: N.intl.string(N.t.Y8ujqr),
          onClick: P,
          children: (0, l.jsx)(m.R2l, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, l.jsx)(x.A, {
          className: S.XI,
          tooltip: N.intl.string(N.t.vN7REz),
          onClick: () => h.A.remove(a.id, A.id, g.oU.CREATE_FORUM_POST.drafts.type),
          dangerous: true,
          children: (0, l.jsx)(m.ucK, {
            size: "md",
            color: "currentColor"
          })
        })]
      }),
      draftType: g.oU.CREATE_FORUM_POST.drafts.type,
      id: A.id,
      channelId: a.id,
      handleEditModal: P,
      keyboardModeEnabled: p,
      size: b.L.SMALL,
      className: S.Xc,
      children: I
    }) : I
  })
}