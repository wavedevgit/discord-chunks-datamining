/** Chunk was on 65819 **/
/** chunk id: 903759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk327802 = require("./327802.jsx"),
  Chunk372129 = require("./372129.jsx"),
  Chunk598117 = require("./598117.js"),
  Chunk746622 = require("./746622.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk443899 = require("./443899.js");
let m = e => {
    let {
      setImage: t
    } = e, [n, o] = r.useState(null);
    return (0, l.jsx)("div", {
      className: d.emptyState,
      children: (0, l.jsxs)("div", {
        className: d.dropZone,
        children: [(0, l.jsx)(i.FmF, {
          size: "lg",
          color: i.TVs.colors.HEADER_MUTED,
          className: d.imagePlusIcon
        }), (0, l.jsxs)("div", {
          className: d.textContainer,
          children: [(0, l.jsx)(i.Text, {
            variant: "text-md/medium",
            children: c.intl.format(c.t["Ks2/3d"], {
              selectFileHook: (e, n) => (0, l.jsx)(h, {
                translatedContent: e,
                setUserImage: t
              }, n)
            })
          }), (0, l.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            children: c.intl.string(c.t.UTE8Cw)
          })]
        }), null !== n && (0, l.jsx)(u.H, {
          error: s.ze.IMAGE_LOAD,
          variant: "text-sm/normal",
          color: "text-danger"
        }), (0, l.jsx)(a.X, {
          onSuccess: t,
          onError: o
        })]
      })
    })
  },
  h = e => {
    let {
      setUserImage: t,
      translatedContent: n
    } = e;
    return (0, l.jsx)(i.P3F, {
      focusProps: {
        within: true
      },
      tag: "a",
      children: (0, l.jsxs)("label", {
        children: [n, (0, l.jsx)(o.ZP, {
          tabIndex: 0,
          onChange: (e, n, l) => (t({
            data: e,
            file: n,
            image: l
          }), Promise.resolve(true)),
          multiple: false,
          title: ""
        })]
      })
    })
  }